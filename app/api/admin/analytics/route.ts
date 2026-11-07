import { NextRequest, NextResponse } from "next/server";
import { getModeratorApiContext } from "@/lib/moderator-api";

const sources = ["google_search_console", "google_analytics_4"] as const;
const clean = (value: unknown, max: number) => typeof value === "string" ? value.trim().slice(0, max) : "";

function validMonth(value: unknown) {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-01$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}
function metric(value: unknown) {
  if (value === "" || value == null) return null;
  const number = Number(value);
  return Number.isSafeInteger(number) && number >= 0 ? number : Number.NaN;
}
function sourceUrl(value: unknown) {
  const raw = clean(value, 1000);
  if (!raw) return null;
  try { const url = new URL(raw); return url.protocol === "https:" ? url.toString() : null; }
  catch { return null; }
}

export async function GET() {
  const context = await getModeratorApiContext();
  if ("error" in context) return context.error;
  const response = await fetch(
    `${context.url}/rest/v1/site_analytics_monthly?select=*&order=period_month.desc,source.asc,page_path.asc&limit=1000`,
    { headers: context.headers, cache: "no-store" },
  );
  if (!response.ok) return NextResponse.json({ error: "Could not load analytics records. Apply the Phase 10 analytics migration first." }, { status: 502 });
  return NextResponse.json({ records: await response.json() });
}

export async function POST(request: NextRequest) {
  const context = await getModeratorApiContext();
  if ("error" in context) return context.error;
  try {
    const input = await request.json();
    const source = clean(input.source, 40);
    const periodMonth = clean(input.period_month, 10);
    if (!sources.includes(source as typeof sources[number]) || !validMonth(periodMonth)) {
      return NextResponse.json({ error: "Choose a supported data source and the first day of a valid reporting month." }, { status: 400 });
    }

    const impressions = metric(input.impressions);
    const searchClicks = metric(input.search_clicks);
    const sessions = metric(input.sessions);
    const pageViews = metric(input.page_views);
    const engagedSessions = metric(input.engaged_sessions);
    if ([impressions, searchClicks, sessions, pageViews, engagedSessions].some(Number.isNaN)) {
      return NextResponse.json({ error: "Metrics must be non-negative whole numbers or left blank." }, { status: 400 });
    }
    if (source === "google_search_console" && (impressions === null || searchClicks === null)) {
      return NextResponse.json({ error: "Search Console records require both impressions and search clicks." }, { status: 400 });
    }
    if (source === "google_analytics_4" && sessions === null && pageViews === null && engagedSessions === null) {
      return NextResponse.json({ error: "GA4 records require at least one of sessions, page views or engaged sessions." }, { status: 400 });
    }
    if (source === "google_search_console" && (sessions !== null || pageViews !== null || engagedSessions !== null)) {
      return NextResponse.json({ error: "Keep GA4 metrics in a separate GA4 record." }, { status: 400 });
    }
    if (source === "google_analytics_4" && (impressions !== null || searchClicks !== null)) {
      return NextResponse.json({ error: "Keep Search Console metrics in a separate Search Console record." }, { status: 400 });
    }

    const path = clean(input.page_path || "*", 500) || "*";
    if (!path.startsWith("/") && path !== "*") return NextResponse.json({ error: "Page path must start with / or use * for the full property." }, { status: 400 });
    const category = clean(input.category || "*", 120) || "*";
    const softwareSlug = clean(input.software_slug || "*", 120) || "*";
    const rawSourceUrl = clean(input.source_url, 1000);
    const verifiedSourceUrl = sourceUrl(rawSourceUrl);
    if (rawSourceUrl && !verifiedSourceUrl) return NextResponse.json({ error: "Source reference must be a valid HTTPS URL." }, { status: 400 });

    const payload = {
      period_month: periodMonth,
      source,
      page_path: path,
      category,
      software_slug: softwareSlug,
      impressions,
      search_clicks: searchClicks,
      sessions,
      page_views: pageViews,
      engaged_sessions: engagedSessions,
      source_url: verifiedSourceUrl,
      source_note: clean(input.source_note, 1000) || null,
      imported_at: new Date().toISOString(),
    };
    const query = new URLSearchParams({ on_conflict: "period_month,source,page_path,category,software_slug" });
    const response = await fetch(`${context.url}/rest/v1/site_analytics_monthly?${query}`, {
      method: "POST",
      headers: { ...context.headers, Prefer: "resolution=merge-duplicates,return=representation" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
    if (!response.ok) return NextResponse.json({ error: "Could not save analytics record." }, { status: 502 });
    return NextResponse.json({ record: (await response.json())[0] }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Invalid analytics import." }, { status: 400 });
  }
}
