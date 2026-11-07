import { NextRequest, NextResponse } from "next/server";
import { getAccessToken, getSupabaseConfig } from "@/lib/supabase-rest";

async function moderatorContext() {
  const token = await getAccessToken();
  if (!token) return { error: NextResponse.json({ error: "Sign in with the moderator account." }, { status: 401 }) };
  const { url, key } = getSupabaseConfig();
  const headers = { apikey: key, Authorization: `Bearer ${token}`, "Content-Type": "application/json" };
  const userResponse = await fetch(`${url}/auth/v1/user`, { headers, cache: "no-store" });
  if (!userResponse.ok) return { error: NextResponse.json({ error: "Your session has expired. Sign in again." }, { status: 401 }) };
  const roleResponse = await fetch(`${url}/rest/v1/rpc/is_stackpick_moderator`, {
    method: "POST", headers, body: "{}", cache: "no-store",
  });
  if (!roleResponse.ok) return { error: NextResponse.json({ error: "Could not verify moderator access." }, { status: 502 }) };
  const isModerator = await roleResponse.json();
  if (isModerator !== true) return { error: NextResponse.json({ error: "This account does not have moderator access." }, { status: 403 }) };
  return { url, key, token, headers };
}

export async function GET() {
  try {
    const context = await moderatorContext();
    if ("error" in context) return context.error;
    const query = new URLSearchParams({
      select: "id,software_slug,user_id,reviewer_name,rating,title,body,status,created_at",
      order: "created_at.desc",
      limit: "200",
    });
    const response = await fetch(`${context.url}/rest/v1/software_reviews?${query}`, {
      headers: context.headers, cache: "no-store",
    });
    if (!response.ok) return NextResponse.json({ error: "Could not load the review queue." }, { status: 502 });
    return NextResponse.json({ reviews: await response.json() });
  } catch {
    return NextResponse.json({ error: "Moderation service is temporarily unavailable." }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const context = await moderatorContext();
    if ("error" in context) return context.error;
    const input = await request.json();
    const id = typeof input.id === "string" ? input.id : "";
    const status = input.status;
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id) ||
        !["approved", "rejected", "pending"].includes(status)) {
      return NextResponse.json({ error: "Invalid review or moderation status." }, { status: 400 });
    }
    const query = new URLSearchParams({ id: `eq.${id}` });
    const response = await fetch(`${context.url}/rest/v1/software_reviews?${query}`, {
      method: "PATCH",
      headers: { ...context.headers, Prefer: "return=representation" },
      body: JSON.stringify({ status }),
      cache: "no-store",
    });
    if (!response.ok) return NextResponse.json({ error: "Could not update this review." }, { status: 502 });
    const rows = await response.json();
    if (!rows.length) return NextResponse.json({ error: "Review not found or moderation permission denied." }, { status: 404 });
    return NextResponse.json({ review: rows[0] });
  } catch {
    return NextResponse.json({ error: "Moderation service is temporarily unavailable." }, { status: 500 });
  }
}
