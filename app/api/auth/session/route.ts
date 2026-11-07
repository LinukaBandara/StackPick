import { NextRequest, NextResponse } from "next/server";
import { cookieOptions, getSupabaseConfig, ACCESS_COOKIE, REFRESH_COOKIE } from "@/lib/supabase-rest";

async function verifyUser(accessToken: string) {
  const { url, key } = getSupabaseConfig();
  const response = await fetch(`${url}/auth/v1/user`, {
    headers: { apikey: key, Authorization: `Bearer ${accessToken}` },
    cache: "no-store",
  });
  if (!response.ok) return null;
  return response.json();
}

export async function GET(request: NextRequest) {
  try {
    const accessToken = request.cookies.get(ACCESS_COOKIE)?.value;
    const refreshToken = request.cookies.get(REFRESH_COOKIE)?.value;
    if (accessToken) {
      const user = await verifyUser(accessToken);
      if (user) return NextResponse.json({ user: { id: user.id, email: user.email, displayName: user.user_metadata?.display_name ?? "" } });
    }
    if (!refreshToken) return NextResponse.json({ user: null });
    const { url, key } = getSupabaseConfig();
    const response = await fetch(`${url}/auth/v1/token?grant_type=refresh_token`, {
      method: "POST",
      headers: { apikey: key, "Content-Type": "application/json" },
      body: JSON.stringify({ refresh_token: refreshToken }),
      cache: "no-store",
    });
    const data = await response.json();
    if (!response.ok || !data.access_token || !data.refresh_token) {
      const result = NextResponse.json({ user: null });
      result.cookies.delete(ACCESS_COOKIE);
      result.cookies.delete(REFRESH_COOKIE);
      return result;
    }
    const user = data.user ?? await verifyUser(data.access_token);
    const result = NextResponse.json({ user: user ? { id: user.id, email: user.email, displayName: user.user_metadata?.display_name ?? "" } : null });
    result.cookies.set(ACCESS_COOKIE, data.access_token, cookieOptions(data.expires_in ?? 3600));
    result.cookies.set(REFRESH_COOKIE, data.refresh_token, cookieOptions(60 * 60 * 24 * 30));
    return result;
  } catch {
    return NextResponse.json({ user: null }, { status: 200 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { accessToken, refreshToken, expiresIn } = await request.json();
    if (typeof accessToken !== "string" || typeof refreshToken !== "string") {
      return NextResponse.json({ error: "Invalid authentication response." }, { status: 400 });
    }
    const user = await verifyUser(accessToken);
    if (!user) return NextResponse.json({ error: "Email confirmation could not be verified. Please try again." }, { status: 401 });
    const result = NextResponse.json({ ok: true });
    result.cookies.set(ACCESS_COOKIE, accessToken, cookieOptions(Number(expiresIn) || 3600));
    result.cookies.set(REFRESH_COOKIE, refreshToken, cookieOptions(60 * 60 * 24 * 30));
    return result;
  } catch {
    return NextResponse.json({ error: "Could not complete sign-in." }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const accessToken = request.cookies.get(ACCESS_COOKIE)?.value;
  try {
    if (accessToken) {
      const { url, key } = getSupabaseConfig();
      await fetch(`${url}/auth/v1/logout`, {
        method: "POST",
        headers: { apikey: key, Authorization: `Bearer ${accessToken}` },
        cache: "no-store",
      });
    }
  } catch {
    // Local session cookies are cleared even if the remote logout endpoint is unavailable.
  }
  const result = NextResponse.json({ ok: true });
  result.cookies.delete(ACCESS_COOKIE);
  result.cookies.delete(REFRESH_COOKIE);
  return result;
}
