import { NextRequest, NextResponse } from "next/server";
import { SOFTWARE_PROFILES } from "@/lib/software";
import { getModeratorApiContext } from "@/lib/moderator-api";

const statuses = ["prospect", "applied", "approved", "active", "paused", "rejected"] as const;
const clean = (value: unknown, max: number) => typeof value === "string" ? value.trim().slice(0, max) : "";
const optionalUrl = (value: unknown) => {
  const raw = clean(value, 1000);
  if (!raw) return null;
  try { const url = new URL(raw); return url.protocol === "https:" ? url.toString() : null; } catch { return null; }
};
function validate(input: Record<string, unknown>) {
  const softwareSlug = clean(input.software_slug, 120);
  const programmeName = clean(input.programme_name, 120);
  const status = clean(input.status, 20);
  const trackingUrl = optionalUrl(input.tracking_url);
  const programmeUrl = optionalUrl(input.programme_url);
  const termsUrl = optionalUrl(input.terms_url);
  if (!SOFTWARE_PROFILES.some((item) => item.slug === softwareSlug)) return { error: "Choose an existing StackPick software profile." };
  if (programmeName.length < 2 || !statuses.includes(status as typeof statuses[number])) return { error: "Programme name or status is invalid." };
  if (clean(input.tracking_url, 1000) && !trackingUrl) return { error: "Tracking URL must be a valid HTTPS URL." };
  if (clean(input.programme_url, 1000) && !programmeUrl) return { error: "Programme URL must be a valid HTTPS URL." };
  if (clean(input.terms_url, 1000) && !termsUrl) return { error: "Terms URL must be a valid HTTPS URL." };
  const dateValue = (value: unknown) => {
    const raw = clean(value, 10);
    if (!raw) return null;
    const parsed = new Date(`${raw}T00:00:00.000Z`);
    return /^\d{4}-\d{2}-\d{2}$/.test(raw) && !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === raw ? raw : null;
  };
  const applicationDate = dateValue(input.application_date);
  const approvalDate = dateValue(input.approval_date);
  const verifiedDate = dateValue(input.last_verified_at);
  if ((input.application_date && !applicationDate) || (input.approval_date && !approvalDate) || (input.last_verified_at && !verifiedDate)) return { error: "Enter valid application, approval and verification dates." };
  const disclosure = clean(input.disclosure, 500);
  if (status === "active" && (!trackingUrl || !approvalDate || !verifiedDate || disclosure.length < 10)) {
    return { error: "To activate a partner, add its HTTPS tracking URL, approval date, verification date and disclosure." };
  }
  if (status === "active" && verifiedDate) {
    const verifiedAt = Date.parse(`${verifiedDate}T00:00:00.000Z`);
    const today = new Date(); today.setUTCHours(0, 0, 0, 0);
    const ageDays = Math.floor((today.getTime() - verifiedAt) / 86400000);
    if (ageDays < 0 || ageDays > 90) return { error: "Recheck the tracking URL and enter a verification date within the last 90 days before activating." };
  }
  const cookieDays = input.cookie_window_days === "" || input.cookie_window_days == null ? null : Number(input.cookie_window_days);
  if (cookieDays !== null && (!Number.isInteger(cookieDays) || cookieDays < 0 || cookieDays > 3650)) return { error: "Cookie window must be 0–3650 days." };
  return { value: {
    software_slug: softwareSlug, programme_name: programmeName, status,
    programme_url: programmeUrl, tracking_url: trackingUrl, terms_url: termsUrl,
    commission_summary: clean(input.commission_summary, 500),
    cookie_window_days: cookieDays, disclosure, application_date: applicationDate,
    approval_date: approvalDate, last_verified_at: verifiedDate, notes: clean(input.notes, 4000),
  } };
}

export async function GET() {
  const context = await getModeratorApiContext();
  if ("error" in context) return context.error;
  const response = await fetch(`${context.url}/rest/v1/affiliate_partners?select=*&order=updated_at.desc`, { headers: context.headers, cache: "no-store" });
  if (!response.ok) return NextResponse.json({ error: "Could not load affiliate partners. Apply the Phase 6 affiliate operations migration first." }, { status: 502 });
  return NextResponse.json({ partners: await response.json(), softwareProfiles: SOFTWARE_PROFILES.map(({ slug, name }) => ({ slug, name })) });
}

export async function POST(request: NextRequest) {
  const context = await getModeratorApiContext();
  if ("error" in context) return context.error;
  try {
    const input = await request.json();
    const result = validate(input);
    if ("error" in result) return NextResponse.json({ error: result.error }, { status: 400 });
    const response = await fetch(`${context.url}/rest/v1/affiliate_partners`, {
      method: "POST", headers: { ...context.headers, Prefer: "return=representation" },
      body: JSON.stringify(result.value), cache: "no-store",
    });
    if (!response.ok) return NextResponse.json({ error: "Could not save partner. Check whether this software/programme combination already exists." }, { status: 502 });
    return NextResponse.json({ partner: (await response.json())[0] }, { status: 201 });
  } catch { return NextResponse.json({ error: "Invalid partner request." }, { status: 400 }); }
}

export async function PATCH(request: NextRequest) {
  const context = await getModeratorApiContext();
  if ("error" in context) return context.error;
  try {
    const input = await request.json();
    const id = clean(input.id, 36);
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)) return NextResponse.json({ error: "Invalid partner ID." }, { status: 400 });
    const result = validate(input);
    if ("error" in result) return NextResponse.json({ error: result.error }, { status: 400 });
    const query = new URLSearchParams({ id: `eq.${id}` });
    const response = await fetch(`${context.url}/rest/v1/affiliate_partners?${query}`, {
      method: "PATCH", headers: { ...context.headers, Prefer: "return=representation" },
      body: JSON.stringify(result.value), cache: "no-store",
    });
    if (!response.ok) return NextResponse.json({ error: "Could not update partner." }, { status: 502 });
    const rows = await response.json();
    if (!rows.length) return NextResponse.json({ error: "Partner not found." }, { status: 404 });
    return NextResponse.json({ partner: rows[0] });
  } catch { return NextResponse.json({ error: "Invalid partner request." }, { status: 400 }); }
}
