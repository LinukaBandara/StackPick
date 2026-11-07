import { NextRequest, NextResponse } from "next/server";
import { cookieOptions, getSupabaseConfig, ACCESS_COOKIE, REFRESH_COOKIE } from "@/lib/supabase-rest";

export async function POST(request: NextRequest) {
  try {
    const { email, password, displayName } = await request.json();
    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
        typeof password !== "string" || password.length < 8 ||
        typeof displayName !== "string" || displayName.trim().length < 2 || displayName.trim().length > 40) {
      return NextResponse.json({ error: "Enter a valid email, a password of at least 8 characters and a display name (2–40 characters)." }, { status: 400 });
    }

    const { url, key } = getSupabaseConfig();
    const origin = new URL(request.url).origin;
    const response = await fetch(`${url}/auth/v1/signup?redirect_to=${encodeURIComponent(`${origin}/auth/callback`)}`, {
      method: "POST",
      headers: { apikey: key, "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.trim().toLowerCase(), password, data: { display_name: displayName.trim() } }),
      cache: "no-store",
    });
    const data = await response.json();
    if (!response.ok) {
      return NextResponse.json({ error: data.msg || data.message || data.error_description || "Could not create your account." }, { status: response.status });
    }

    const result = NextResponse.json({
      message: data.access_token
        ? "Account created. You are signed in."
        : "Account created. Check your email and confirm your address before signing in.",
      session: Boolean(data.access_token && data.refresh_token),
    });
    if (data.access_token && data.refresh_token) {
      result.cookies.set(ACCESS_COOKIE, data.access_token, cookieOptions(data.expires_in ?? 3600));
      result.cookies.set(REFRESH_COOKIE, data.refresh_token, cookieOptions(60 * 60 * 24 * 30));
    }
    return result;
  } catch {
    return NextResponse.json({ error: "The account service is temporarily unavailable." }, { status: 500 });
  }
}
