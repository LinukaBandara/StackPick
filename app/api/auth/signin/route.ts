import { NextRequest, NextResponse } from "next/server";
import { cookieOptions, getSupabaseConfig, ACCESS_COOKIE, REFRESH_COOKIE } from "@/lib/supabase-rest";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    if (typeof email !== "string" || typeof password !== "string" || !email.trim() || !password) {
      return NextResponse.json({ error: "Enter your email and password." }, { status: 400 });
    }
    const { url, key } = getSupabaseConfig();
    const response = await fetch(`${url}/auth/v1/token?grant_type=password`, {
      method: "POST",
      headers: { apikey: key, "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.trim().toLowerCase(), password }),
      cache: "no-store",
    });
    const data = await response.json();
    if (!response.ok || !data.access_token || !data.refresh_token) {
      return NextResponse.json({ error: data.msg || data.message || "Sign-in failed. Check your details and confirm your email address." }, { status: 401 });
    }
    const result = NextResponse.json({ ok: true });
    result.cookies.set(ACCESS_COOKIE, data.access_token, cookieOptions(data.expires_in ?? 3600));
    result.cookies.set(REFRESH_COOKIE, data.refresh_token, cookieOptions(60 * 60 * 24 * 30));
    return result;
  } catch {
    return NextResponse.json({ error: "The account service is temporarily unavailable." }, { status: 500 });
  }
}
