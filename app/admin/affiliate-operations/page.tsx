"use client";

import { useCallback, useEffect, useState } from "react";

type Partner = {
  id: string; software_slug: string; programme_name: string;
  status: "prospect" | "applied" | "approved" | "active" | "paused" | "rejected";
  programme_url: string | null; tracking_url: string | null; terms_url: string | null;
  commission_summary: string | null; cookie_window_days: number | null; disclosure: string | null;
  application_date: string | null; approval_date: string | null; last_verified_at: string | null;
  notes: string | null; updated_at: string;
};
type SoftwareOption = { slug: string; name: string };
type Performance = {
  id: string; partner_id: string; period_month: string; outbound_clicks: number;
  conversions: number; reversals: number; confirmed_commission: number; currency: string;
  source_note: string | null;
  affiliate_partners: { software_slug: string; programme_name: string; status: string } | null;
};
type PartnerForm = Omit<Partner, "id" | "updated_at">;
const emptyPartner: PartnerForm = {
  software_slug: "", programme_name: "", status: "prospect", programme_url: "",
  tracking_url: "", terms_url: "", commission_summary: "", cookie_window_days: null,
  disclosure: "", application_date: "", approval_date: "", last_verified_at: "", notes: "",
};
const inputClass = "mt-1 w-full rounded-xl border border-[#d2d2d7] bg-white px-3 py-2.5 text-sm text-[#1d1d1f] outline-none focus:border-[#001D39]";
const labelClass = "block text-xs font-semibold text-[#4b5563]";
const statuses = ["prospect", "applied", "approved", "active", "paused", "rejected"] as const;

export default function AffiliateOperationsPage() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [records, setRecords] = useState<Performance[]>([]);
  const [softwareOptions, setSoftwareOptions] = useState<SoftwareOption[]>([]);
  const [form, setForm] = useState<PartnerForm>(emptyPartner);
  const [editingId, setEditingId] = useState("");
  const [partnerId, setPartnerId] = useState("");
  const [performance, setPerformance] = useState({ period_month: new Date().toISOString().slice(0, 7) + "-01", outbound_clicks: "0", conversions: "0", reversals: "0", confirmed_commission: "0", currency: "USD", source_note: "" });
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const load = useCallback(async () => {
    setLoading(true); setError("");
    try {
      const [partnerResponse, performanceResponse] = await Promise.all([
        fetch("/api/admin/affiliate-partners", { cache: "no-store" }),
        fetch("/api/admin/affiliate-performance", { cache: "no-store" }),
      ]);
      const partnerData = await partnerResponse.json();
      const performanceData = await performanceResponse.json();
      if (!partnerResponse.ok) throw new Error(partnerData.error || "Could not load partners.");
      if (!performanceResponse.ok) throw new Error(performanceData.error || "Could not load performance.");
      setPartners(partnerData.partners || []);
      setRecords(performanceData.records || []);
    } catch (err) { setError(err instanceof Error ? err.message : "Affiliate workspace unavailable."); }
    finally { setLoading(false); }
  }, []);

  useEffect(() => { void load(); }, [load]);

  function startEdit(partner: Partner) {
    setEditingId(partner.id);
    setForm({
      software_slug: partner.software_slug, programme_name: partner.programme_name, status: partner.status,
      programme_url: partner.programme_url || "", tracking_url: partner.tracking_url || "",
      terms_url: partner.terms_url || "", commission_summary: partner.commission_summary || "",
      cookie_window_days: partner.cookie_window_days, disclosure: partner.disclosure || "",
      application_date: partner.application_date || "", approval_date: partner.approval_date || "",
      last_verified_at: partner.last_verified_at || "", notes: partner.notes || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function savePartner(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setError(""); setNotice("");
    try {
      const response = await fetch("/api/admin/affiliate-partners", {
        method: editingId ? "PATCH" : "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, id: editingId || undefined }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not save partner.");
      setNotice(editingId ? "Partner updated." : "Partner added.");
      setEditingId(""); setForm(emptyPartner); await load();
    } catch (err) { setError(err instanceof Error ? err.message : "Could not save partner."); }
    finally { setBusy(false); }
  }

  async function savePerformance(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setError(""); setNotice("");
    try {
      const response = await fetch("/api/admin/affiliate-performance", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...performance, partner_id: partnerId }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not save report.");
      setNotice("Monthly performance record saved. Existing partner/month records are updated.");
      await load();
    } catch (err) { setError(err instanceof Error ? err.message : "Could not save report."); }
    finally { setBusy(false); }
  }

  const activeCount = partners.filter((p) => p.status === "active").length;
  const pendingCount = partners.filter((p) => ["prospect", "applied", "approved"].includes(p.status)).length;
  const commissionByCurrency = records.reduce<Record<string, number>>((totals, row) => { totals[row.currency] = (totals[row.currency] || 0) + Number(row.confirmed_commission || 0); return totals; }, {});

  return (
    <main className="min-h-[75vh] bg-[#f5f5f7] px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div><p className="sp-eyebrow">Private workspace · Phase 6</p><h1 className="sp-title mt-3 text-[#1d1d1f]">Affiliate operations.</h1><p className="mt-3 max-w-2xl text-sm leading-6 text-[#6e6e73]">Manage programme approvals, verified destinations and monthly figures reconciled against partner dashboards.</p></div>
          <button type="button" onClick={() => void load()} disabled={loading} className="min-h-10 rounded-full border border-black/15 bg-white px-4 text-sm font-semibold text-[#001D39] disabled:opacity-50">Refresh data</button>
        </div>

        {error && <div role="alert" className="mt-7 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div>}
        {notice && <div role="status" className="mt-7 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">{notice}</div>}

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-black/[0.07] bg-white p-5"><p className="text-xs text-[#6e6e73]">Active verified partners</p><p className="mt-2 text-3xl font-semibold tabular-nums text-[#001D39]">{activeCount}</p></div>
          <div className="rounded-2xl border border-black/[0.07] bg-white p-5"><p className="text-xs text-[#6e6e73]">Prospect / application pipeline</p><p className="mt-2 text-3xl font-semibold tabular-nums text-[#001D39]">{pendingCount}</p></div>
          <div className="rounded-2xl border border-black/[0.07] bg-white p-5"><p className="text-xs text-[#6e6e73]">Recorded confirmed commissions</p><p className="mt-2 text-xl font-semibold tabular-nums text-[#001D39]">{Object.entries(commissionByCurrency).map(([currency, amount]) => currency+" "+amount.toLocaleString(undefined, { maximumFractionDigits: 2 })).join(" · ") || "—"}</p><p className="mt-1 text-xs text-[#86868b]">Grouped by currency; no artificial exchange-rate conversion.</p></div>
        </div>

        <section className="mt-9 rounded-3xl border border-black/[0.07] bg-white p-5 sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3"><div><p className="sp-eyebrow">Partner register</p><h2 className="mt-2 text-xl font-semibold text-[#1d1d1f]">{editingId ? "Edit programme" : "Add a programme"}</h2></div>{editingId && <button type="button" onClick={() => { setEditingId(""); setForm(emptyPartner); }} className="text-sm font-semibold text-[#001D39] underline">Cancel edit</button>}</div>
          <form onSubmit={savePartner} className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <label className={labelClass}>Software profile<select required value={form.software_slug} onChange={e => setForm({...form, software_slug:e.target.value})} className={inputClass}><option value="">Choose software</option>{softwareOptions.map(item=><option key={item.slug} value={item.slug}>{item.name} · {item.slug}</option>)}</select></label>
            <label className={labelClass}>Programme name<input required value={form.programme_name} onChange={e => setForm({...form, programme_name:e.target.value})} placeholder="Official affiliate programme" className={inputClass} /></label>
            <label className={labelClass}>Status<select value={form.status} onChange={e => setForm({...form, status:e.target.value as PartnerForm["status"]})} className={inputClass}>{statuses.map(s=><option key={s} value={s}>{s}</option>)}</select></label>
            <label className={labelClass}>Official programme URL<input type="url" value={form.programme_url || ""} onChange={e=>setForm({...form,programme_url:e.target.value})} placeholder="https://" className={inputClass}/></label>
            <label className={labelClass}>Terms and conditions URL<input type="url" value={form.terms_url || ""} onChange={e=>setForm({...form,terms_url:e.target.value})} placeholder="https://" className={inputClass}/></label>
            <label className={labelClass}>Private tracking URL<input type="url" value={form.tracking_url || ""} onChange={e=>setForm({...form,tracking_url:e.target.value})} placeholder="https://…" className={inputClass}/></label>
            <label className={labelClass}>Commission terms summary<input value={form.commission_summary || ""} onChange={e=>setForm({...form,commission_summary:e.target.value})} placeholder="Record the actual programme terms" className={inputClass}/></label>
            <label className={labelClass}>Cookie window (days)<input type="number" min="0" max="3650" value={form.cookie_window_days ?? ""} onChange={e=>setForm({...form,cookie_window_days:e.target.value===""?null:Number(e.target.value)})} className={inputClass}/></label>
            <label className={labelClass}>Application date<input type="date" value={form.application_date || ""} onChange={e=>setForm({...form,application_date:e.target.value})} className={inputClass}/></label>
            <label className={labelClass}>Approval date<input type="date" value={form.approval_date || ""} onChange={e=>setForm({...form,approval_date:e.target.value})} className={inputClass}/></label>
            <label className={labelClass}>Last tracking-link verification<input type="date" value={form.last_verified_at || ""} onChange={e=>setForm({...form,last_verified_at:e.target.value})} className={inputClass}/></label>
            <label className={labelClass+" sm:col-span-2 lg:col-span-3"}>Affiliate disclosure shown beside the link<textarea required={form.status==="active"} rows={2} value={form.disclosure || ""} onChange={e=>setForm({...form,disclosure:e.target.value})} placeholder="StackPick may earn a commission if you sign up through this link." className={inputClass}/></label>
            <label className={labelClass+" sm:col-span-2 lg:col-span-3"}>Private notes<textarea rows={3} value={form.notes || ""} onChange={e=>setForm({...form,notes:e.target.value})} className={inputClass}/></label>
            <div className="sm:col-span-2 lg:col-span-3 flex flex-wrap items-center justify-between gap-3 border-t border-black/[0.07] pt-4"><p className="max-w-2xl text-xs leading-5 text-[#6e6e73]">Active status requires HTTPS tracking URL, approval date, verification date and disclosure. Saving here does not publish or activate the link on the public site.</p><button disabled={busy} className="min-h-11 rounded-full bg-[#001D39] px-6 text-sm font-semibold text-white disabled:opacity-50">{busy ? "Saving…" : editingId ? "Save changes" : "Add programme"}</button></div>
          </form>
        </section>

        <section className="mt-9">
          <div className="flex items-end justify-between gap-3"><div><p className="sp-eyebrow">Programme pipeline</p><h2 className="mt-2 text-xl font-semibold text-[#1d1d1f]">Partners and verification</h2></div><span className="text-xs text-[#6e6e73]">{partners.length} records</span></div>
          {loading ? <p className="mt-5 rounded-2xl bg-white p-6 text-sm text-[#6e6e73]">Loading partners…</p> : partners.length===0 ? <p className="mt-5 rounded-2xl bg-white p-6 text-sm text-[#6e6e73]">No programmes recorded yet. Add the programmes already applied to; do not record an application as approved.</p> : <div className="mt-5 space-y-3">{partners.map(p=><article key={p.id} className="rounded-2xl border border-black/[0.07] bg-white p-5"><div className="flex flex-wrap items-start justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-wide text-[#6e6e73]">{p.software_slug}</p><h3 className="mt-1 text-base font-semibold text-[#1d1d1f]">{p.programme_name}</h3><p className="mt-1 text-xs text-[#6e6e73]">{p.commission_summary || "Commission terms not recorded"}{p.cookie_window_days !== null ? " · "+p.cookie_window_days+"-day cookie" : ""}</p></div><span className="rounded-full bg-[#f5f5f7] px-3 py-1 text-xs font-semibold capitalize text-[#4b5563]">{p.status}</span></div><div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-black/[0.06] pt-3 text-xs text-[#6e6e73]"><span>Last verified: {p.last_verified_at || "Not verified"} · Updated {new Date(p.updated_at).toLocaleDateString()}</span><button type="button" onClick={()=>startEdit(p)} className="font-semibold text-[#001D39] underline underline-offset-4">Edit programme</button></div></article>)}</div>}
        </section>

        <section className="mt-10 rounded-3xl border border-black/[0.07] bg-white p-5 sm:p-7">
          <p className="sp-eyebrow">Monthly reconciliation</p><h2 className="mt-2 text-xl font-semibold text-[#1d1d1f]">Record partner dashboard results</h2>
          <p className="mt-2 text-sm leading-6 text-[#6e6e73]">Enter figures from the affiliate network after reconciliation. Click counts can be copied from GA4; conversions and commissions must come from the partner dashboard. This is not a live sales feed.</p>
          <form onSubmit={savePerformance} className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <label className={labelClass+" sm:col-span-2"}>Partner<select required value={partnerId} onChange={e=>setPartnerId(e.target.value)} className={inputClass}><option value="">Choose partner</option>{partners.map(p=><option key={p.id} value={p.id}>{p.software_slug} — {p.programme_name}</option>)}</select></label>
            <label className={labelClass}>Reporting month<input required type="month" value={performance.period_month.slice(0,7)} onChange={e=>setPerformance({...performance,period_month:e.target.value+"-01"})} className={inputClass}/></label>
            <label className={labelClass}>Currency<input required maxLength={3} value={performance.currency} onChange={e=>setPerformance({...performance,currency:e.target.value.toUpperCase()})} className={inputClass}/></label>
            <label className={labelClass}>Outbound clicks<input required type="number" min="0" value={performance.outbound_clicks} onChange={e=>setPerformance({...performance,outbound_clicks:e.target.value})} className={inputClass}/></label>
            <label className={labelClass}>Conversions<input required type="number" min="0" value={performance.conversions} onChange={e=>setPerformance({...performance,conversions:e.target.value})} className={inputClass}/></label>
            <label className={labelClass}>Reversals<input required type="number" min="0" value={performance.reversals} onChange={e=>setPerformance({...performance,reversals:e.target.value})} className={inputClass}/></label>
            <label className={labelClass}>Confirmed commission<input required type="number" min="0" step="0.01" value={performance.confirmed_commission} onChange={e=>setPerformance({...performance,confirmed_commission:e.target.value})} className={inputClass}/></label>
            <label className={labelClass+" sm:col-span-2 lg:col-span-4"}>Source / reconciliation note<input value={performance.source_note} onChange={e=>setPerformance({...performance,source_note:e.target.value})} placeholder="Partner dashboard report, statement date, payout status…" className={inputClass}/></label>
            <div className="sm:col-span-2 lg:col-span-4 flex justify-end border-t border-black/[0.07] pt-4"><button disabled={busy || partners.length===0 || !partnerId} className="min-h-11 rounded-full bg-[#001D39] px-6 text-sm font-semibold text-white disabled:opacity-50">{busy ? "Saving…" : "Save monthly figures"}</button></div>
          </form>
        </section>

        <section className="mt-10"><p className="sp-eyebrow">Reconciled history</p><h2 className="mt-2 text-xl font-semibold text-[#1d1d1f]">Performance records</h2>{records.length===0 ? <p className="mt-4 rounded-2xl bg-white p-6 text-sm text-[#6e6e73]">No monthly records yet. Figures are only shown after manual reconciliation.</p> : <div className="mt-4 overflow-x-auto rounded-2xl border border-black/[0.07] bg-white"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-[#f5f5f7] text-xs text-[#6e6e73]"><tr>{["Month","Partner","Clicks","Conversions","Reversals","Confirmed commission","Source"].map(x=><th key={x} className="px-4 py-3 font-semibold">{x}</th>)}</tr></thead><tbody>{records.map(r=><tr key={r.id} className="border-t border-black/[0.06]"><td className="px-4 py-3">{r.period_month.slice(0,7)}</td><td className="px-4 py-3">{r.affiliate_partners?.software_slug || "—"}<span className="block text-xs text-[#86868b]">{r.affiliate_partners?.programme_name}</span></td><td className="px-4 py-3 tabular-nums">{r.outbound_clicks}</td><td className="px-4 py-3 tabular-nums">{r.conversions}</td><td className="px-4 py-3 tabular-nums">{r.reversals}</td><td className="px-4 py-3 tabular-nums">{r.currency} {Number(r.confirmed_commission).toFixed(2)}</td><td className="px-4 py-3 text-xs text-[#6e6e73]">{r.source_note || "Partner dashboard"}</td></tr>)}</tbody></table></div>}</section>
        <p className="mt-8 text-xs leading-5 text-[#86868b]">Private moderator-only records. Tracking URLs and programme notes are never exposed through public APIs. No automated GA4 import, network conversion feed or currency conversion is configured.</p>
      </div>
    </main>
  );
}
