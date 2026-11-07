import { NextRequest, NextResponse } from "next/server";
import { getModeratorApiContext } from "@/lib/moderator-api";

const statuses = ["pending", "reviewing", "needs_info", "approved", "rejected"] as const;
const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function GET() {
  const context = await getModeratorApiContext();
  if ("error" in context) return context.error;
  const query = new URLSearchParams({ select: "*", order: "created_at.desc", limit: "250" });
  const response = await fetch(`${context.url}/rest/v1/vendor_submissions?${query}`, { headers: context.headers, cache: "no-store" });
  if (!response.ok) return NextResponse.json({ error: "Could not load vendor submissions." }, { status: 502 });
  return NextResponse.json({ submissions: await response.json() });
}

export async function PATCH(request: NextRequest) {
  const context = await getModeratorApiContext();
  if ("error" in context) return context.error;
  try {
    const input = await request.json();
    const id = typeof input.id === "string" ? input.id : "";
    const status = typeof input.status === "string" ? input.status : "";
    const moderatorNotes = typeof input.moderator_notes === "string" ? input.moderator_notes.trim().slice(0, 2000) : "";
    if (!uuid.test(id) || !statuses.includes(status as typeof statuses[number])) {
      return NextResponse.json({ error: "Choose a valid request and moderation status." }, { status: 400 });
    }
    const query = new URLSearchParams({ id: `eq.${id}` });
    const response = await fetch(`${context.url}/rest/v1/vendor_submissions?${query}`, {
      method: "PATCH", headers: { ...context.headers, Prefer: "return=representation" },
      body: JSON.stringify({ status, moderator_notes: moderatorNotes }), cache: "no-store",
    });
    if (!response.ok) return NextResponse.json({ error: "Could not update this vendor request." }, { status: 502 });
    const rows = await response.json();
    if (!rows.length) return NextResponse.json({ error: "Request not found." }, { status: 404 });
    return NextResponse.json({ submission: rows[0] });
  } catch { return NextResponse.json({ error: "Invalid moderation request." }, { status: 400 }); }
}
