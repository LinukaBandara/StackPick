"use client";

import { useCallback, useEffect, useMemo, useState, type FormEvent } from "react";
import Link from "next/link";
import { SOFTWARE_PROFILES } from "@/lib/software";

type Submission = {
  id: string; request_type: "claim" | "new_listing"; software_slug: string | null;
  company_name: string; product_name: string | null; category: string | null;
  website_url: string; status: "pending" | "reviewing" | "needs_info" | "approved" | "rejected";
  created_at: string; updated_at: string;
};
const initial = {
  request_type: "claim", software_slug: "", company_name: "", contact_name: "",
  role: "", website_url: "", message: "", product_name: "", category: "", product_description: "",
};
const statusLabel: Record<Submission["status"], string> = {
  pending: "Awaiting review", reviewing: "Under review", needs_info: "More information requested",
  approved: "Approved", rejected: "Not approved",
};

export default function VendorPortal() {
  const [form, setForm] = useState(initial);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const load = useCallback(async () => {
    setLoading(true); setError("");
    try {
      const response = await fetch("/api/vendor/submissions", { cache: "no-store" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Sign in to view your requests.");
      setSubmissions(data.submissions || []);
    } catch (err) { setError(err instanceof Error ? err.message : "Could not load your requests."); }
    finally { setLoading(false); }
  }, []);

  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("software") || "";
    if (SOFTWARE_PROFILES.some((p) => p.slug === slug)) setForm((current) => ({ ...current, software_slug: slug }));
    void load();
  }, [load]);

  const set = (key: keyof typeof initial, value: string) => setForm((current) => ({ ...current, [key]: value }));
  const selectedSoftware = useMemo(() => SOFTWARE_PROFILES.find((p) => p.slug === form.software_slug), [form.software_slug]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setSaving(true); setError(""); setNotice("");
    try {
      const response = await fetch("/api/vendor/submissions", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not submit your request.");
      setNotice("Your request is in the moderation queue. We'll review the details before making any listing or ownership changes.");
      setForm({ ...initial, request_type: form.request_type, software_slug: form.software_slug });
      await load();
    } catch (err) { setError(err instanceof Error ? err.message : "Could not submit your request."); }
    finally { setSaving(false); }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.9fr)]">
      <section className="rounded-[28px] border border-black/10 bg-white p-5 shadow-[0_10px_35px_rgba(0,29,57,0.04)] sm:p-8">
        <p className="sp-eyebrow">Vendor request</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#1d1d1f]">Get your product represented accurately.</h2>
        <p className="mt-3 text-sm leading-6 text-[#6e6e73]">Submit a claim for an existing profile or suggest a product for editorial consideration. Every request is reviewed by StackPick.</p>
        {error && <div role="alert" className="mt-5 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700"><p>{error}</p><Link href="/account" className="mt-2 inline-flex font-semibold underline underline-offset-4">Sign in or create an account →</Link></div>}
        {notice && <p role="status" className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">{notice}</p>}
        <form onSubmit={submit} className="mt-7 space-y-5">
          <div><label className="mb-2 block text-sm font-semibold text-[#1d1d1f]">Request type</label><div className="grid grid-cols-2 gap-2">{(["claim", "new_listing"] as const).map((value) => <button key={value} type="button" onClick={() => set("request_type", value)} className={`rounded-xl border px-3 py-3 text-sm font-semibold ${form.request_type === value ? "border-[#001D39] bg-[#001D39] text-white" : "border-black/15 bg-white text-[#374151]"}`}>{value === "claim" ? "Claim a profile" : "Suggest software"}</button>)}</div></div>
          {form.request_type === "claim" ? <div><label htmlFor="vendor-software" className="mb-2 block text-sm font-semibold text-[#1d1d1f]">Software profile</label><select id="vendor-software" required value={form.software_slug} onChange={(e) => set("software_slug", e.target.value)} className="min-h-12 w-full rounded-xl border border-black/15 bg-white px-3 text-sm text-[#1d1d1f]"><option value="">Choose a product</option>{SOFTWARE_PROFILES.map((p) => <option key={p.slug} value={p.slug}>{p.name}</option>)}</select>{selectedSoftware && <p className="mt-2 text-xs text-[#6e6e73]">Current profile: {selectedSoftware.name} · {selectedSoftware.category}</p>}</div> : <div className="grid gap-4 sm:grid-cols-2"><div><label htmlFor="vendor-product" className="mb-2 block text-sm font-semibold text-[#1d1d1f]">Product name</label><input id="vendor-product" required minLength={2} maxLength={120} value={form.product_name} onChange={(e) => set("product_name", e.target.value)} className="min-h-12 w-full rounded-xl border border-black/15 px-3 text-sm" /></div><div><label htmlFor="vendor-category" className="mb-2 block text-sm font-semibold text-[#1d1d1f]">Category</label><input id="vendor-category" required maxLength={100} value={form.category} onChange={(e) => set("category", e.target.value)} placeholder="e.g. CRM & Sales" className="min-h-12 w-full rounded-xl border border-black/15 px-3 text-sm" /></div></div>}
          <div className="grid gap-4 sm:grid-cols-2"><div><label htmlFor="vendor-company" className="mb-2 block text-sm font-semibold text-[#1d1d1f]">Company / publisher</label><input id="vendor-company" required minLength={2} maxLength={120} value={form.company_name} onChange={(e) => set("company_name", e.target.value)} className="min-h-12 w-full rounded-xl border border-black/15 px-3 text-sm" /></div><div><label htmlFor="vendor-contact" className="mb-2 block text-sm font-semibold text-[#1d1d1f]">Your name</label><input id="vendor-contact" required minLength={2} maxLength={80} value={form.contact_name} onChange={(e) => set("contact_name", e.target.value)} className="min-h-12 w-full rounded-xl border border-black/15 px-3 text-sm" /></div></div>
          <div className="grid gap-4 sm:grid-cols-2"><div><label htmlFor="vendor-role" className="mb-2 block text-sm font-semibold text-[#1d1d1f]">Your role</label><input id="vendor-role" required maxLength={100} value={form.role} onChange={(e) => set("role", e.target.value)} placeholder="Founder, marketing, partnerships…" className="min-h-12 w-full rounded-xl border border-black/15 px-3 text-sm" /></div><div><label htmlFor="vendor-website" className="mb-2 block text-sm font-semibold text-[#1d1d1f]">Official company website</label><input id="vendor-website" type="url" required value={form.website_url} onChange={(e) => set("website_url", e.target.value)} placeholder="https://example.com" className="min-h-12 w-full rounded-xl border border-black/15 px-3 text-sm" /></div></div>
          {form.request_type === "new_listing" && <div><label htmlFor="vendor-description" className="mb-2 block text-sm font-semibold text-[#1d1d1f]">What does the product do?</label><textarea id="vendor-description" required minLength={40} maxLength={1200} rows={4} value={form.product_description} onChange={(e) => set("product_description", e.target.value)} className="w-full rounded-xl border border-black/15 p-3 text-sm" /></div>}
          <div><label htmlFor="vendor-message" className="mb-2 block text-sm font-semibold text-[#1d1d1f]">{form.request_type === "claim" ? "Why should we recognise you as an authorised representative?" : "Anything else our editors should know?"}</label><textarea id="vendor-message" required minLength={30} maxLength={2000} rows={4} value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="Describe your relationship to the product and how we can verify it." className="w-full rounded-xl border border-black/15 p-3 text-sm" /></div>
          <button type="submit" disabled={saving} className="min-h-12 w-full rounded-full bg-[#001D39] px-6 text-sm font-semibold text-white disabled:opacity-50">{saving ? "Submitting…" : "Submit for review"}</button>
          <p className="text-xs leading-5 text-[#6e6e73]">Use your verified StackPick account. Submitting a request does not guarantee ownership, publication, ranking changes or editorial approval. StackPick may contact you using your account email.</p>
        </form>
      </section>
      <aside className="space-y-5">
        <section className="rounded-[28px] border border-black/10 bg-[#f5f5f7] p-6 sm:p-7"><p className="sp-eyebrow">Your requests</p><h2 className="mt-2 text-xl font-semibold text-[#1d1d1f]">Submission history.</h2>{loading ? <p className="mt-5 text-sm text-[#6e6e73]">Loading requests…</p> : submissions.length === 0 ? <p className="mt-5 text-sm leading-6 text-[#6e6e73]">Your submitted requests will appear here.</p> : <div className="mt-5 space-y-3">{submissions.map((item) => <article key={item.id} className="rounded-2xl border border-black/10 bg-white p-4"><div className="flex items-start justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-wide text-[#6e6e73]">{item.request_type === "claim" ? "Profile claim" : "New product suggestion"}</p><h3 className="mt-1 font-semibold text-[#1d1d1f]">{item.request_type === "claim" ? SOFTWARE_PROFILES.find((p) => p.slug === item.software_slug)?.name || "Software profile" : item.product_name}</h3></div><span className="rounded-full bg-[#eef2f6] px-2.5 py-1 text-[11px] font-semibold text-[#001D39]">{statusLabel[item.status]}</span></div><p className="mt-2 text-xs text-[#6e6e73]">Submitted {new Date(item.created_at).toLocaleDateString()}</p></article>)}</div>}<Link href="/software" className="mt-5 inline-flex text-sm font-semibold text-[#001D39] hover:underline">Browse software catalogue →</Link></section>
        <section className="rounded-[28px] border border-black/10 bg-white p-6 sm:p-7"><h2 className="font-semibold text-[#1d1d1f]">How review works</h2><ol className="mt-4 space-y-3 text-sm leading-6 text-[#6e6e73]"><li>1. Submit your verified account and company details.</li><li>2. Our team checks your relationship to the product and public information.</li><li>3. We may request additional evidence before making a decision.</li><li>4. Approved claims can lead to a managed profile-editing workflow in a later release.</li></ol></section>
      </aside>
    </div>
  );
}
