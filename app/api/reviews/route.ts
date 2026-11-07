import { NextRequest, NextResponse } from "next/server";
import { getAccessToken, getSupabaseConfig } from "@/lib/supabase-rest";

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export async function GET(request: NextRequest) {
  try {
    const slug = request.nextUrl.searchParams.get("slug") ?? "";
    if (!SLUG_PATTERN.test(slug)) return NextResponse.json({ error: "A valid software slug is required." }, { status: 400 });
    const { url, key } = getSupabaseConfig();
    const token = await getAccessToken();
    const query = new URLSearchParams({
      select: "id,reviewer_name,rating,title,body,status,created_at",
      software_slug: `eq.${slug}`,
      order: "created_at.desc",
      limit: "50",
    });
    const response = await fetch(`${url}/rest/v1/software_reviews?${query}`, {
      headers: { apikey: key, Authorization: `Bearer ${token ?? key}` },
      cache: "no-store",
    });
    if (!response.ok) return NextResponse.json({ error: "Could not load reviews." }, { status: 502 });
    const rows = await response.json() as Array<{id:string;reviewer_name:string;rating:number;title:string;body:string;status:string;created_at:string}>;
    const approved = rows.filter((row) => row.status === "approved");
    const total = approved.reduce((sum, row) => sum + row.rating, 0);
    return NextResponse.json({
      reviews: approved,
      count: approved.length,
      average: approved.length ? Math.round((total / approved.length) * 10) / 10 : null,
    });
  } catch {
    return NextResponse.json({ error: "Review service is temporarily unavailable." }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const token = await getAccessToken();
    if (!token) return NextResponse.json({ error: "Sign in before submitting a review." }, { status: 401 });
    const { url, key } = getSupabaseConfig();
    const userResponse = await fetch(`${url}/auth/v1/user`, {
      headers: { apikey: key, Authorization: `Bearer ${token}` },
      cache: "no-store",
    });
    if (!userResponse.ok) return NextResponse.json({ error: "Your session has expired. Sign in again." }, { status: 401 });
    const user = await userResponse.json();
    const input = await request.json();
    const slug = typeof input.softwareSlug === "string" ? input.softwareSlug : "";
    const reviewerName = typeof input.reviewerName === "string" ? input.reviewerName.trim() : "";
    const title = typeof input.title === "string" ? input.title.trim() : "";
    const body = typeof input.body === "string" ? input.body.trim() : "";
    const rating = Number(input.rating);

    if (!SLUG_PATTERN.test(slug) || reviewerName.length < 2 || reviewerName.length > 40 ||
        title.length < 5 || title.length > 100 || body.length < 30 || body.length > 3000 ||
        !Number.isInteger(rating) || rating < 1 || rating > 5) {
      return NextResponse.json({ error: "Check the form: name 2–40 characters, title 5–100, review 30–3,000 and rating 1–5." }, { status: 400 });
    }

    const response = await fetch(`${url}/rest/v1/software_reviews`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        software_slug: slug,
        user_id: user.id,
        reviewer_name: reviewerName,
        rating,
        title,
        body,
        status: "pending",
      }),
      cache: "no-store",
    });
    if (response.status === 409) return NextResponse.json({ error: "You have already submitted a review for this software." }, { status: 409 });
    if (!response.ok) {
      const details = await response.json().catch(() => ({}));
      return NextResponse.json({ error: details.message || "Your review could not be submitted." }, { status: response.status === 401 ? 401 : 400 });
    }
    return NextResponse.json({ ok: true, message: "Thanks. Your review has been submitted for moderation and will appear after approval." }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Review service is temporarily unavailable." }, { status: 500 });
  }
}
