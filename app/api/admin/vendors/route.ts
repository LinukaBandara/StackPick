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
  const submissions = await response.json() as Array<Record<string, unknown> & { id: string }>;
  if (!submissions.length) return NextResponse.json({ submissions: [] });
  const noteQuery = new URLSearchParams({ select: "submission_id,moderator_notes", submission_id: `in.(${submissions.map((item) => item.id).join(",")})` });
  const notesResponse = await fetch(`${context.url}/rest/v1/vendor_submission_notes?${noteQuery}`, { headers: context.headers, cache: "no-store" });
  if (!notesResponse.ok) return NextResponse.json({ error: "Could not load private moderation notes." }, { status: 502 });
  const notes = await notesResponse.json() as Array<{ submission_id: string; moderator_notes: string }>;
  const noteMap = new Map(notes.map((item) => [item.submission_id, item.moderator_notes]));
  return NextResponse.json({ submissions: submissions.map((item) => ({ ...item, moderator_notes: noteMap.get(item.id) || "" })) });
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
      body: JSON.stringify({ status }), cache: "no-store",
    });
    if (!response.ok) return NextResponse.json({ error: "Could not update this vendor request." }, { status: 502 });
    const rows = await response.json();
    if (!rows.length) return NextResponse.json({ error: "Request not found." }, { status: 404 });
    const notesResponse = await fetch(`${context.url}/rest/v1/vendor_submission_notes?on_conflict=submission_id`, {
      method: "POST",
      headers: { ...context.headers, Prefer: "resolution=merge-duplicates,return=minimal" },
      body: JSON.stringify({ submission_id: id, moderator_notes: moderatorNotes }),
      cache: "no-store",
    });
    if (!notesResponse.ok) return NextResponse.json({ error: "Status was saved, but private notes could not be saved. Retry the update." }, { status: 502 });
    return NextResponse.json({ submission: { ...rows[0], moderator_notes: moderatorNotes } });
  } catch { return NextResponse.json({ error: "Invalid moderation request." }, { status: 400 }); }
}
