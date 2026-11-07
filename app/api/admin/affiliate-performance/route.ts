import { NextRequest, NextResponse } from "next/server";
import { getModeratorApiContext } from "@/lib/moderator-api";

export async function GET() {
  const context = await getModeratorApiContext();
  if ("error" in context) return context.error;
  const response = await fetch(`${context.url}/rest/v1/affiliate_performance?select=*,affiliate_partners(id,software_slug,programme_name,status)&order=period_month.desc`, { headers: context.headers, cache: "no-store" });
  if (!response.ok) return NextResponse.json({ error: "Could not load performance records. Apply the Phase 6 affiliate operations migration first." }, { status: 502 });
  return NextResponse.json({ records: await response.json() });
}

export async function POST(request: NextRequest) {
  const context = await getModeratorApiContext();
  if ("error" in context) return context.error;
  try {
    const input = await request.json();
    const partnerId = typeof input.partner_id === "string" ? input.partner_id : "";
    const month = typeof input.period_month === "string" ? input.period_month : "";
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(partnerId) || !/^\d{4}-\d{2}-01$/.test(month)) return NextResponse.json({ error: "Choose a partner and the first day of a reporting month." }, { status: 400 });
    const integer = (value: unknown) => Number.isInteger(Number(value)) && Number(value) >= 0 && Number(value) <= 100000000;
    if (![input.outbound_clicks, input.conversions, input.reversals].every(integer)) return NextResponse.json({ error: "Clicks, conversions and reversals must be non-negative whole numbers." }, { status: 400 });
    const commission = Number(input.confirmed_commission);
    const currency = typeof input.currency === "string" ? input.currency.toUpperCase() : "USD";
    if (!Number.isFinite(commission) || commission < 0 || commission > 100000000 || !/^[A-Z]{3}$/.test(currency)) return NextResponse.json({ error: "Commission or currency is invalid." }, { status: 400 });
    const sourceNote = typeof input.source_note === "string" ? input.source_note.trim().slice(0, 1000) : "";
    const payload = { partner_id: partnerId, period_month: month, outbound_clicks: Number(input.outbound_clicks), conversions: Number(input.conversions), reversals: Number(input.reversals), confirmed_commission: commission, currency, source_note: sourceNote, reconciled_at: new Date().toISOString() };
    const query = new URLSearchParams({ on_conflict: "partner_id,period_month" });
    const response = await fetch(`${context.url}/rest/v1/affiliate_performance?${query}`, {
      method: "POST", headers: { ...context.headers, Prefer: "resolution=merge-duplicates,return=representation" },
      body: JSON.stringify(payload), cache: "no-store",
    });
    if (!response.ok) return NextResponse.json({ error: "Could not save the reconciliation record." }, { status: 502 });
    return NextResponse.json({ record: (await response.json())[0] }, { status: 200 });
  } catch { return NextResponse.json({ error: "Invalid performance record." }, { status: 400 }); }
}
