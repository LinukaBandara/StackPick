"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { SOFTWARE_PROFILES } from "@/lib/software";

type VendorRequest = {
  id: string; request_type: "claim" | "new_listing"; software_slug: string | null;
  user_id: string; contact_email: string; company_name: string; contact_name: string;
  role: string; website_url: string; message: string; product_name: string | null;
  category: string | null; product_description: string | null;
  status: "pending" | "reviewing" | "needs_info" | "approved" | "rejected";
  moderator_notes: string | null; created_at: string;
};
const statuses: VendorRequest["status"][] = ["pending", "reviewing", "needs_info", "approved", "rejected"];

export default function AdminVendorsPage() {
  const [items, setItems] = useState<VendorRequest[]>([]);
  const [filter, setFilter] = useState("pending");
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const load = useCallback(async () => {
    setLoading(true); setError("");
    try {
      const response = await fetch("/api/admin/vendors", { cache: "no-store" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not load vendor requests.");
      setItems(data.submissions || []);
      setNotes(Object.fromEntries((data.submissions || []).map((item: VendorRequest) => [item.id, item.moderator_notes || ""])));
    } catch (err) { setError(err instanceof Error ? err.message : "Could not load vendor requests."); }
    finally { setLoading(false); }
  }, []);
  useEffect(() => { void load(); }, [load]);

  async function update(item: VendorRequest, status: VendorRequest["status"]) {
    setBusy(item.id); setError(""); setNotice("");
    try {
      const response = await fetch("/api/admin/vendors", {
        method: "PATCH", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: item.id, status, moderator_notes: notes[item.id] || "" }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not update request.");
      setItems((current) => current.map((row) => row.id === item.id ? data.submission : row));
      setNotice(`Request moved to ${status.replace("_", " ")}.`);
    } catch (err) { setError(err instanceof Error ? err.message : "Could not update request."); }
    finally { setBusy(""); }
  }

  const visible = filter === "all" ? items : items.filter((item) => item.status === filter);
  return (
    <main className="min-h-[75vh] bg-[#f5f5f7] px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div><p className="sp-eyebrow">Private workspace</p><h1 className="sp-title mt-3 text-[#1d1d1f]">Vendor requests.</h1><p className="mt-3 text-sm leading-6 text-[#6e6e73]">Review profile claims and new product suggestions. Approval records a decision only; it never publishes a listing automatically.</p></div>
          <div className="flex flex-wrap gap-2"><Link href="/admin/reviews" className="min-h-10 rounded-full border border-black/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#001D39]">Review moderation</Link><Link href="/admin/affiliate-operations" className="min-h-10 rounded-full border border-black/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#001D39]">Affiliate operations</Link><button type="button" onClick={() => void load()} disabled={loading} className="min-h-10 rounded-full border border-black/15 bg-white px-4 text-sm font-semibold text-[#001D39]">Refresh</button></div>
        </div>
        {error && <p role="alert" className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</p>}
        {notice && <p role="status" className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">{notice}</p>}
        <div className="mt-7 flex flex-wrap gap-2">{["pending", "reviewing", "needs_info", "approved", "rejected", "all"].map((value) => <button key={value} type="button" onClick={() => setFilter(value)} className={`rounded-full border px-4 py-2 text-xs font-semibold capitalize ${filter === value ? "border-[#001D39] bg-[#001D39] text-white" : "border-black/10 bg-white text-[#4b5563]"}`}>{value.replace("_", " ")} {value === "all" ? `(${items.length})` : `(${items.filter((item) => item.status === value).length})`}</button>)}</div>
        <div className="mt-6 space-y-4">
          {loading && <div className="rounded-2xl bg-white p-8 text-sm text-[#6e6e73]">Loading requests…</div>}
          {!loading && visible.length === 0 && <div className="rounded-2xl border border-black/10 bg-white p-8 text-center text-sm text-[#6e6e73]">No requests in this view.</div>}
          {visible.map((item) => <article key={item.id} className="rounded-3xl border border-black/10 bg-white p-5 sm:p-7">
            <div className="flex flex-wrap items-start justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-wide text-[#6e6e73]">{item.request_type === "claim" ? "Profile claim" : "New product suggestion"}</p><h2 className="mt-1 text-xl font-semibold text-[#1d1d1f]">{item.request_type === "claim" ? SOFTWARE_PROFILES.find((p) => p.slug === item.software_slug)?.name || item.software_slug : item.product_name}</h2><p className="mt-1 text-sm text-[#6e6e73]">{item.company_name} · {item.contact_name} ({item.role})</p></div><span className="rounded-full bg-[#eef2f6] px-3 py-1 text-xs font-semibold capitalize text-[#001D39]">{item.status.replace("_", " ")}</span></div>
            <div className="mt-4 grid gap-2 text-sm text-[#4b5563] sm:grid-cols-2"><p><strong>Account:</strong> {item.contact_email}</p><p><strong>Website:</strong> <a href={item.website_url} target="_blank" rel="noreferrer" className="font-semibold text-[#001D39] underline">{item.website_url}</a></p>{item.category && <p><strong>Category:</strong> {item.category}</p>}<p><strong>Submitted:</strong> {new Date(item.created_at).toLocaleString()}</p></div>
            {item.product_description && <div className="mt-4"><h3 className="text-sm font-semibold text-[#1d1d1f]">Product description</h3><p className="mt-1 whitespace-pre-wrap text-sm leading-6 text-[#6e6e73]">{item.product_description}</p></div>}
            <div className="mt-4"><h3 className="text-sm font-semibold text-[#1d1d1f]">Vendor message</h3><p className="mt-1 whitespace-pre-wrap text-sm leading-6 text-[#6e6e73]">{item.message}</p></div>
            <div className="mt-5 border-t border-black/10 pt-4"><label htmlFor={`notes-${item.id}`} className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#6e6e73]">Private moderator notes</label><textarea id={`notes-${item.id}`} rows={2} maxLength={2000} value={notes[item.id] || ""} onChange={(e) => setNotes((current) => ({ ...current, [item.id]: e.target.value }))} className="w-full rounded-xl border border-black/15 p-3 text-sm" placeholder="Verification evidence, follow-up required, decision context…" /><div className="mt-3 flex flex-wrap gap-2">{statuses.map((status) => <button key={status} type="button" disabled={busy === item.id} onClick={() => void update(item, status)} className={`min-h-10 rounded-full px-4 text-xs font-semibold capitalize disabled:opacity-50 ${status === "approved" ? "bg-[#001D39] text-white" : "border border-black/15 bg-white text-[#374151]"}`}>{busy === item.id ? "Saving…" : status.replace("_", " ")}</button>)}</div></div>
          </article>)}
        </div>
      </div>
    </main>
  );
}
