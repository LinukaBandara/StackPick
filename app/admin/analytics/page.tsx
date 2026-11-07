"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";

type Source = "google_search_console" | "google_analytics_4";
type AnalyticsRecord = {
  id: string;
  period_month: string;
  source: Source;
  page_path: string;
  category: string;
  software_slug: string;
  impressions: number | null;
  search_clicks: number | null;
  sessions: number | null;
  page_views: number | null;
  engaged_sessions: number | null;
  source_url: string | null;
  source_note: string | null;
  imported_at: string;
};
const inputClass = "mt-1 w-full rounded-xl border border-[#d2d2d7] bg-white px-3 py-2.5 text-sm text-[#1d1d1f] outline-none focus:border-[#001D39]";
const labelClass = "block text-xs font-semibold text-[#4b5563]";
const currentMonth = new Date().toISOString().slice(0, 7) + "-01";
const emptyForm = {
  period_month: currentMonth,
  source: "google_search_console" as Source,
  page_path: "*",
  category: "*",
  software_slug: "*",
  impressions: "",
  search_clicks: "",
  sessions: "",
  page_views: "",
  engaged_sessions: "",
  source_url: "",
  source_note: "",
};
const number = (value: number | null) => value == null ? "—" : value.toLocaleString("en-US");
const sourceName = (source: Source) => source === "google_search_console" ? "Google Search Console" : "Google Analytics 4";

function MetricCard({ label, value, note }: { label: string; value: string; note: string }) {
  return <div className="rounded-2xl border border-black/[0.07] bg-white p-5">
    <p className="text-xs text-[#6e6e73]">{label}</p>
    <p className="mt-2 text-3xl font-semibold tabular-nums tracking-tight text-[#001D39]">{value}</p>
    <p className="mt-2 text-xs leading-5 text-[#86868b]">{note}</p>
  </div>;
}

export default function AnalyticsDashboardPage() {
  const [records, setRecords] = useState<AnalyticsRecord[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/admin/analytics", { cache: "no-store" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not load analytics.");
      setRecords(data.records || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Analytics workspace unavailable.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { void load(); }, [load]);

  const propertySnapshots = useMemo(() => records.filter((record) =>
    record.page_path === "*" && record.category === "*" && record.software_slug === "*"
  ), [records]);

  const latestGsc = propertySnapshots.find((record) => record.source === "google_search_console");
  const latestGa4 = propertySnapshots.find((record) => record.source === "google_analytics_4");
  const latestImport = records.reduce<string | null>((latest, record) =>
    !latest || record.imported_at > latest ? record.imported_at : latest, null
  );

  async function save(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    setNotice("");
    try {
      const payload = {
        ...form,
        impressions: form.source === "google_search_console" ? form.impressions : "",
        search_clicks: form.source === "google_search_console" ? form.search_clicks : "",
        sessions: form.source === "google_analytics_4" ? form.sessions : "",
        page_views: form.source === "google_analytics_4" ? form.page_views : "",
        engaged_sessions: form.source === "google_analytics_4" ? form.engaged_sessions : "",
      };
      const response = await fetch("/api/admin/analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not save analytics.");
      setNotice("Source-attributed analytics record saved. A matching month and dimension updates the existing record.");
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not save analytics.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="min-h-[75vh] bg-[#f5f5f7] px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="sp-eyebrow">Private workspace · Phase 10</p>
            <h1 className="sp-title mt-3 text-[#1d1d1f]">Analytics & intelligence.</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6e6e73]">
              A source-attributed monthly view of search visibility, site engagement and content performance. Import figures from the original reporting platforms; this dashboard does not invent or fetch unavailable metrics.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href="/admin/vendors" className="rounded-full border border-black/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#001D39]">Vendor moderation</Link>
            <Link href="/admin/affiliate-operations" className="rounded-full border border-black/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#001D39]">Affiliate operations</Link>
            <button type="button" onClick={() => void load()} disabled={loading} className="rounded-full border border-black/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#001D39] disabled:opacity-50">Refresh</button>
          </div>
        </div>

        {error && <p role="alert" className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</p>}
        {notice && <p role="status" className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">{notice}</p>}

        <section className="mt-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div><p className="sp-eyebrow">Latest property-wide snapshots</p><h2 className="mt-2 text-xl font-semibold text-[#1d1d1f]">Performance overview</h2></div>
            <p className="text-xs text-[#6e6e73]">Latest full-property month per source · no dimension double-counting</p>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <MetricCard label="Search impressions" value={number(latestGsc?.impressions ?? null)} note={latestGsc ? `Search Console · ${latestGsc.period_month.slice(0, 7)}` : "Import a property-wide Search Console report"} />
            <MetricCard label="Google search clicks" value={number(latestGsc?.search_clicks ?? null)} note={latestGsc ? `Search Console · ${latestGsc.period_month.slice(0, 7)}` : "No property-wide report imported"} />
            <MetricCard label="Sessions" value={number(latestGa4?.sessions ?? null)} note={latestGa4 ? `GA4 · ${latestGa4.period_month.slice(0, 7)}` : "Import a property-wide GA4 report"} />
            <MetricCard label="Page views" value={number(latestGa4?.page_views ?? null)} note={latestGa4 ? `GA4 · ${latestGa4.period_month.slice(0, 7)}` : "No property-wide report imported"} />
          </div>
          <p className="mt-3 text-xs text-[#86868b]">
            {latestImport ? `Last imported: ${new Date(latestImport).toLocaleString()}` : "No analytics records have been imported yet."}
          </p>
        </section>

        <section className="mt-9 rounded-3xl border border-black/[0.07] bg-white p-5 sm:p-7">
          <p className="sp-eyebrow">Monthly data import</p>
          <h2 className="mt-2 text-xl font-semibold text-[#1d1d1f]">Add a reporting snapshot</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-[#6e6e73]">
            Copy monthly totals from Google Search Console or GA4. Use <strong>*</strong> for a full-property total, or enter a page path, category or software slug to track a specific segment. Keep Search Console and GA4 metrics in separate records.
          </p>
          <form onSubmit={save} className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <label className={labelClass}>Reporting month<input required type="month" value={form.period_month.slice(0, 7)} onChange={(e) => setForm({ ...form, period_month: e.target.value ? e.target.value + "-01" : currentMonth })} className={inputClass} /></label>
            <label className={labelClass}>Data source<select value={form.source} onChange={(e) => setForm({ ...form, source: e.target.value as Source })} className={inputClass}><option value="google_search_console">Google Search Console</option><option value="google_analytics_4">Google Analytics 4</option></select></label>
            <label className={labelClass}>Page path<input value={form.page_path} onChange={(e) => setForm({ ...form, page_path: e.target.value })} placeholder="* or /software/hubspot-crm" className={inputClass} /></label>
            <label className={labelClass}>Category dimension<input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} placeholder="* or CRM" className={inputClass} /></label>
            <label className={labelClass}>Software slug dimension<input value={form.software_slug} onChange={(e) => setForm({ ...form, software_slug: e.target.value })} placeholder="* or hubspot-crm" className={inputClass} /></label>

            {form.source === "google_search_console" ? <>
              <label className={labelClass}>Impressions<input required type="number" min="0" step="1" value={form.impressions} onChange={(e) => setForm({ ...form, impressions: e.target.value })} className={inputClass} /></label>
              <label className={labelClass}>Search clicks<input required type="number" min="0" step="1" value={form.search_clicks} onChange={(e) => setForm({ ...form, search_clicks: e.target.value })} className={inputClass} /></label>
            </> : <>
              <label className={labelClass}>Sessions<input type="number" min="0" step="1" value={form.sessions} onChange={(e) => setForm({ ...form, sessions: e.target.value })} className={inputClass} /></label>
              <label className={labelClass}>Page views<input type="number" min="0" step="1" value={form.page_views} onChange={(e) => setForm({ ...form, page_views: e.target.value })} className={inputClass} /></label>
              <label className={labelClass}>Engaged sessions<input type="number" min="0" step="1" value={form.engaged_sessions} onChange={(e) => setForm({ ...form, engaged_sessions: e.target.value })} className={inputClass} /></label>
            </>}

            <label className={labelClass}>Source report URL (optional)<input type="url" value={form.source_url} onChange={(e) => setForm({ ...form, source_url: e.target.value })} placeholder="https://" className={inputClass} /></label>
            <label className={`${labelClass} sm:col-span-2 lg:col-span-3`}>Import notes (optional)<textarea value={form.source_note} onChange={(e) => setForm({ ...form, source_note: e.target.value })} rows={2} maxLength={1000} placeholder="Report date range, filters, country/device scope, or other context…" className={inputClass} /></label>
            <div className="sm:col-span-2 lg:col-span-3 flex flex-wrap items-center justify-between gap-3 border-t border-black/[0.07] pt-4">
              <p className="max-w-xl text-xs leading-5 text-[#86868b]">Records are private to moderators. No visitor-level identifiers, raw search queries or personal data are stored in this ledger.</p>
              <button type="submit" disabled={busy} className="rounded-full bg-[#001D39] px-6 py-3 text-sm font-semibold text-white disabled:opacity-50">{busy ? "Saving…" : "Save analytics snapshot"}</button>
            </div>
          </form>
        </section>

        <section className="mt-9 rounded-3xl border border-black/[0.07] bg-white p-5 sm:p-7">
          <div className="flex flex-wrap items-end justify-between gap-3"><div><p className="sp-eyebrow">Reporting ledger</p><h2 className="mt-2 text-xl font-semibold text-[#1d1d1f]">Imported records</h2></div><p className="text-xs text-[#6e6e73]">{records.length.toLocaleString()} record(s)</p></div>
          {loading ? <p className="mt-6 text-sm text-[#6e6e73]">Loading analytics…</p> : records.length === 0 ? <p className="mt-6 rounded-2xl bg-[#f5f5f7] p-6 text-sm text-[#6e6e73]">No imported data yet. Add your first monthly snapshot above.</p> : (
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[900px] text-left text-xs">
                <thead><tr className="border-b border-black/10 text-[#6e6e73]"><th className="px-3 py-3 font-semibold">Month</th><th className="px-3 py-3 font-semibold">Source</th><th className="px-3 py-3 font-semibold">Page / segment</th><th className="px-3 py-3 text-right font-semibold">Impressions</th><th className="px-3 py-3 text-right font-semibold">Search clicks</th><th className="px-3 py-3 text-right font-semibold">Sessions</th><th className="px-3 py-3 text-right font-semibold">Page views</th></tr></thead>
                <tbody>{records.map((record) => <tr key={record.id} className="border-b border-black/[0.06] last:border-0">
                  <td className="px-3 py-3 font-medium text-[#1d1d1f]">{record.period_month.slice(0, 7)}</td>
                  <td className="px-3 py-3 text-[#4b5563]">{sourceName(record.source)}</td>
                  <td className="px-3 py-3 text-[#4b5563]"><span className="block max-w-[260px] truncate">{record.page_path}</span><span className="mt-1 block text-[10px] text-[#86868b]">{record.category} · {record.software_slug}</span></td>
                  <td className="px-3 py-3 text-right tabular-nums">{number(record.impressions)}</td>
                  <td className="px-3 py-3 text-right tabular-nums">{number(record.search_clicks)}</td>
                  <td className="px-3 py-3 text-right tabular-nums">{number(record.sessions)}</td>
                  <td className="px-3 py-3 text-right tabular-nums">{number(record.page_views)}</td>
                </tr>)}</tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
