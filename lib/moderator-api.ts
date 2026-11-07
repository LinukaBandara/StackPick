import { NextResponse } from "next/server";
import { getAccessToken, getSupabaseConfig } from "@/lib/supabase-rest";

export async function getModeratorApiContext() {
  try {
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
    if (await roleResponse.json() !== true) return { error: NextResponse.json({ error: "This account does not have moderator access." }, { status: 403 }) };
    return { url, headers };
  } catch {
    return { error: NextResponse.json({ error: "Moderator service is not configured or temporarily unavailable." }, { status: 503 }) };
  }
}
