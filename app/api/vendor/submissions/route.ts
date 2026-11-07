import { NextRequest, NextResponse } from "next/server";
import { getAccessToken, getSupabaseConfig } from "@/lib/supabase-rest";
import { SOFTWARE_PROFILES } from "@/lib/software";

type RequestType = "claim" | "new_listing";
const clean = (value: unknown, max: number) => typeof value === "string" ? value.trim().slice(0, max) : "";
function httpsUrl(value: unknown) {
  const raw = clean(value, 500);
  if (!raw) return null;
  try {
    const parsed = new URL(raw);
    return parsed.protocol === "https:" ? parsed.toString() : null;
  } catch { return null; }
}
async function signedInUser() {
  const token = await getAccessToken();
  if (!token) return { error: NextResponse.json({ error: "Sign in to access the vendor workspace." }, { status: 401 }) };
  const { url, key } = getSupabaseConfig();
  const response = await fetch(`${url}/auth/v1/user`, { headers: { apikey: key, Authorization: `Bearer ${token}` }, cache: "no-store" });
  if (!response.ok) return { error: NextResponse.json({ error: "Your session has expired. Sign in again." }, { status: 401 }) };
  const user = await response.json();
  if (!user.email_confirmed_at || !user.email) return { error: NextResponse.json({ error: "Confirm your account email before submitting a vendor request." }, { status: 403 }) };
  return { user, token, url, key };
}

export async function GET() {
  try {
    const context = await signedInUser();
    if ("error" in context) return context.error;
    const query = new URLSearchParams({
      select: "id,request_type,software_slug,company_name,product_name,category,website_url,status,created_at,updated_at",
      user_id: `eq.${context.user.id}`, order: "created_at.desc", limit: "50",
    });
    const response = await fetch(`${context.url}/rest/v1/vendor_submissions?${query}`, {
      headers: { apikey: context.key, Authorization: `Bearer ${context.token}` }, cache: "no-store",
    });
    if (!response.ok) return NextResponse.json({ error: "Could not load your vendor requests. Please try again later." }, { status: 502 });
    return NextResponse.json({ submissions: await response.json() });
  } catch { return NextResponse.json({ error: "Vendor workspace is temporarily unavailable." }, { status: 503 }); }
}

export async function POST(request: NextRequest) {
  try {
    const context = await signedInUser();
    if ("error" in context) return context.error;
    const raw = await request.text();
    if (raw.length > 12000) return NextResponse.json({ error: "Your submission is too large. Shorten the description and try again." }, { status: 413 });
    let input: Record<string, unknown>;
    try { input = JSON.parse(raw); } catch { return NextResponse.json({ error: "Invalid submission." }, { status: 400 }); }

    const requestType = clean(input.request_type, 20) as RequestType;
    const companyName = clean(input.company_name, 120);
    const contactName = clean(input.contact_name, 80);
    const role = clean(input.role, 100);
    const websiteUrl = httpsUrl(input.website_url);
    const message = clean(input.message, 2000);
    const softwareSlug = clean(input.software_slug, 120);
    const productName = clean(input.product_name, 120);
    const category = clean(input.category, 100);
    const productDescription = clean(input.product_description, 1200);

    if (!["claim", "new_listing"].includes(requestType)) return NextResponse.json({ error: "Choose a valid request type." }, { status: 400 });
    if (companyName.length < 2 || contactName.length < 2 || role.length < 2 || !websiteUrl || message.length < 30) {
      return NextResponse.json({ error: "Complete the company, contact, role, HTTPS website and a message of at least 30 characters." }, { status: 400 });
    }
    if (requestType === "claim" && !SOFTWARE_PROFILES.some((profile) => profile.slug === softwareSlug)) {
      return NextResponse.json({ error: "Choose an existing StackPick software profile to claim." }, { status: 400 });
    }
    if (requestType === "new_listing" && (productName.length < 2 || category.length < 2 || productDescription.length < 40)) {
      return NextResponse.json({ error: "For a new listing, provide the product name, category and a description of at least 40 characters." }, { status: 400 });
    }

    const payload = {
      user_id: context.user.id, contact_email: context.user.email, request_type: requestType,
      software_slug: requestType === "claim" ? softwareSlug : null,
      company_name: companyName, contact_name: contactName, role, website_url: websiteUrl,
      message, product_name: requestType === "new_listing" ? productName : null,
      category: requestType === "new_listing" ? category : null,
      product_description: requestType === "new_listing" ? productDescription : null,
      status: "pending",
    };
    const response = await fetch(`${context.url}/rest/v1/vendor_submissions`, {
      method: "POST",
      headers: { apikey: context.key, Authorization: `Bearer ${context.token}`, "Content-Type": "application/json", Prefer: "return=representation" },
      body: JSON.stringify(payload), cache: "no-store",
    });
    if (response.status === 409) return NextResponse.json({ error: "You already have an open request for this product. Check your vendor dashboard for its status." }, { status: 409 });
    if (!response.ok) return NextResponse.json({ error: "We could not save your request. Check the details and try again." }, { status: 400 });
    return NextResponse.json({ submission: (await response.json())[0] }, { status: 201 });
  } catch { return NextResponse.json({ error: "Vendor workspace is temporarily unavailable." }, { status: 503 }); }
}
