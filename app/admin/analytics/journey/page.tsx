"use client";

import { useCallback, useEffect, useMemo, useState, type FormEvent } from "react";
import Link from "next/link";

type Row = { id: string; source: string; page_path: string; category: string; software_slug: string; country_code: string; sessions: number | null; source_note: string | null };
const markets = [{ code: "US", name: "United States" }, { code: "GB", name: "United Kingdom" }, { code: "CA", name: "Canada" }, { code: "AU", name: "Australia" }, { code: "NZ", name: "New Zealand" }];
const field = "mt-1 w-full rounded-xl border border-[#d2d2d7] bg-white px-3 py-2.5 text-sm text-[#1d1d1f]";
const parse = (note: string | null) => note?.match(/GA4 30-day window: (\d{4}-\d{2}-\d{2}) to (\d{4}-\d{2}-\d{2})/);
const fmt = (n: number) => n.toLocaleString("en-US");

export default function JourneyReadinessPage() {
  const [rows, setRows] = useState<Row[]>([]);
  const [country, setCountry] = useState("US");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [sessions, setSessions] = useState("");
  const [reportUrl, setReportUrl] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    const response = await fetch("/api/admin/analytics?include_country_rows=true", { cache: "no-store" });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Could not load analytics.");
    setRows(data.records || []);
  }, []);
  useEffect(() => { load().catch((e) => setError(e.message)); }, [load]);

  const groups = useMemo(() => {
    const map = new Map<string, { start: string; end: string; rows: Row[] }>();
    for (const row of rows) {
      if (row.source !== "google_analytics_4" || row.page_path !== "*" || row.category !== "*" || row.software_slug !== "*" || !markets.some((m) => m.code === row.country_code)) continue;
      const match = parse(row.source_note);
      if (!match) continue;
      const key = match[1] + "_" + match[2];
      const group = map.get(key) || { start: match[1], end: match[2], rows: [] };
      group.rows.push(row);
      map.set(key, group);
    }
    return [...map.values()].sort((a, b) => b.end.localeCompare(a.end));
  }, [rows]);
  const current = groups[0];
  const total = current?.rows.reduce((sum, row) => sum + (row.sessions || 0), 0) || 0;
  const missing = markets.filter((m) => !current?.rows.some((row) => row.country_code === m.code));

  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setError(""); setMessage("");
    try {
      const days = (Date.parse(end + "T00:00:00Z") - Date.parse(start + "T00:00:00Z")) / 86400000 + 1;
      if (!start || !end || days !== 30) throw new Error("Use an exact 30-day date range, inclusive.");
      if (!sessions || !Number.isSafeInteger(Number(sessions)) || Number(sessions) < 0) throw new Error("Enter a valid GA4 Sessions count.");
      const response = await fetch("/api/admin/analytics", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          period_month: end.slice(0, 7) + "-01", source: "google_analytics_4",
          page_path: "*", category: "*", software_slug: "*", country_code: country,
          sessions, page_views: "", engaged_sessions: "", source_url: reportUrl,
          source_note: "GA4 30-day window: " + start + " to " + end + ". Country dimension: " + country + ".",
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not save GA4 country report.");
      setMessage(country + " report saved."); await load();
    } catch (e) { setError(e instanceof Error ? e.message : "Could not save report."); }
    finally { setBusy(false); }
  }

  return <main className="min-h-[75vh] bg-[#f5f5f7] px-4 py-12"><div className="mx-auto max-w-4xl">
    <p className="sp-eyebrow">Private workspace · Journey readiness</p>
    <h1 className="sp-title mt-3 text-[#1d1d1f]">Priority-market sessions.</h1>
    <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6e6e73]">Track matching 30-day GA4 sessions from the US, UK, Canada, Australia and New Zealand as a planning view. Journey's own evaluation determines which sessions count as premium; this dashboard is not an eligibility calculation or approval guarantee.</p>
    {error && <p role="alert" className="mt-5 rounded-xl bg-red-50 p-4 text-sm text-red-700">{error}</p>}
    {message && <p role="status" className="mt-5 rounded-xl bg-emerald-50 p-4 text-sm text-emerald-800">{message}</p>}
    <section className="mt-7 rounded-3xl border border-black/[0.07] bg-white p-6">
      <p className="sp-eyebrow">Priority-market GA4 sessions · same 30-day window</p>
      <h2 className="mt-2 text-3xl font-semibold text-[#001D39]">{fmt(total)} sessions</h2>
      <p className="mt-1 text-sm text-[#6e6e73]">{current ? current.start + " – " + current.end : "No matching GA4 reports imported"}</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {markets.map((m) => { const row = current?.rows.find((r) => r.country_code === m.code); return <div key={m.code} className="rounded-xl bg-[#f5f5f7] p-3"><p className="text-xs text-[#6e6e73]">{m.name}</p><p className="mt-2 text-lg font-semibold">{row ? fmt(row.sessions || 0) : "—"}</p></div>; })}
      </div>
      <p className="mt-4 text-xs leading-5 text-[#86868b]">{missing.length ? "Partial target-market total. Missing: " + missing.map((m) => m.code).join(", ") + "." : "All five target-market reports use the same date range."} Journey's published minimum is 1,000 premium sessions over 30 days. These five markets are StackPick's target cohort, not a substitute for Journey's own premium-session classification. Confirm the GA4 property, report filters and timezone.</p>
    </section>
    <section className="mt-7 rounded-3xl border border-black/[0.07] bg-white p-6">
      <h2 className="text-xl font-semibold">Import a GA4 country report</h2>
      <p className="mt-2 text-sm leading-6 text-[#6e6e73]">In GA4, choose the Country dimension and the same 30-day date range for each market. Enter only the Sessions total for the selected country, not the property-wide total.</p>
      <form onSubmit={save} className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="block text-xs font-semibold">Country<select className={field} value={country} onChange={(e) => setCountry(e.target.value)}>{markets.map((m) => <option key={m.code} value={m.code}>{m.name} ({m.code})</option>)}</select></label>
        <label className="block text-xs font-semibold">Sessions<input className={field} required type="number" min="0" step="1" value={sessions} onChange={(e) => setSessions(e.target.value)} /></label>
        <label className="block text-xs font-semibold">30-day start date<input className={field} required type="date" value={start} onChange={(e) => setStart(e.target.value)} /></label>
        <label className="block text-xs font-semibold">30-day end date<input className={field} required type="date" value={end} onChange={(e) => setEnd(e.target.value)} /></label>
        <label className="block text-xs font-semibold sm:col-span-2">GA4 report URL (optional)<input className={field} type="url" value={reportUrl} onChange={(e) => setReportUrl(e.target.value)} placeholder="https://analytics.google.com/…" /></label>
        <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-3 border-t border-black/[0.07] pt-4"><p className="max-w-xl text-xs leading-5 text-[#86868b]">Only aggregated country totals are stored. No visitor identifiers or raw event data are collected.</p><button disabled={busy} className="rounded-full bg-[#001D39] px-6 py-3 text-sm font-semibold text-white disabled:opacity-50">{busy ? "Saving…" : "Save country sessions"}</button></div>
      </form>
    </section>
  </div></main>;
}
