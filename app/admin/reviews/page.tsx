"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

type Review = {
  id: string;
  software_slug: string;
  user_id: string;
  reviewer_name: string;
  rating: number;
  title: string;
  body: string;
  status: "pending" | "approved" | "rejected";
  created_at: string;
};

const FILTERS = ["pending", "approved", "rejected", "all"] as const;

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("pending");
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/admin/reviews", { cache: "no-store" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not load moderation queue.");
      setReviews(data.reviews);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not load moderation queue.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { void load(); }, [load]);

  async function moderate(id: string, status: Review["status"]) {
    setBusyId(id);
    setError("");
    setNotice("");
    try {
      const response = await fetch("/api/admin/reviews", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not update review.");
      setReviews((current) => current.map((review) => review.id === id ? { ...review, status } : review));
      setNotice(`Review ${status}.`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not update review.");
    } finally {
      setBusyId("");
    }
  }

  const visible = filter === "all" ? reviews : reviews.filter((review) => review.status === filter);
  const pendingCount = reviews.filter((review) => review.status === "pending").length;

  return (
    <main className="min-h-[75vh] bg-[#f5f5f7] px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="sp-eyebrow">Private workspace</p>
            <h1 className="sp-title mt-3 text-[#1d1d1f]">Review moderation.</h1>
            <p className="mt-3 text-sm leading-6 text-[#6e6e73]">Approve genuine, relevant reviews before they appear on public software profiles.</p>
          </div>
          <button type="button" onClick={() => void load()} disabled={loading} className="min-h-10 rounded-full border border-black/15 bg-white px-4 text-sm font-semibold text-[#001D39] disabled:opacity-50">Refresh queue</button>
        </div>

        {error && <div role="alert" className="mt-7 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div>}
        {notice && <div role="status" className="mt-7 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">{notice}</div>}

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {FILTERS.map((item) => (
            <button key={item} type="button" onClick={() => setFilter(item)} className={`rounded-2xl border p-4 text-left transition-colors ${filter === item ? "border-[#001D39] bg-[#001D39] text-white" : "border-black/10 bg-white text-[#1d1d1f]"}`}>
              <span className="block text-xs capitalize opacity-70">{item === "all" ? "Total reviews" : item}</span>
              <span className="mt-1 block text-2xl font-semibold tabular-nums">{item === "all" ? reviews.length : reviews.filter((review) => review.status === item).length}</span>
            </button>
          ))}
        </div>

        <div className="mt-7 space-y-4">
          {loading && <div className="rounded-2xl bg-white p-8 text-sm text-[#6e6e73]">Loading moderation queue…</div>}
          {!loading && !error && visible.length === 0 && (
            <div className="rounded-2xl border border-black/10 bg-white p-8 text-center">
              <h2 className="font-semibold text-[#1d1d1f]">{filter === "pending" ? "You're all caught up." : "No reviews in this view."}</h2>
              <p className="mt-2 text-sm text-[#6e6e73]">{pendingCount ? `${pendingCount} review(s) still need attention.` : "New submissions will appear here after users send them."}</p>
            </div>
          )}
          {visible.map((review) => (
            <article key={review.id} className="rounded-3xl border border-black/[0.08] bg-white p-5 shadow-[0_8px_30px_rgba(0,29,57,0.03)] sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#6e6e73]">{review.software_slug.replaceAll("-", " ")}</p>
                  <h2 className="mt-1 text-lg font-semibold text-[#1d1d1f]">{review.title}</h2>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${review.status === "approved" ? "bg-emerald-50 text-emerald-800" : review.status === "rejected" ? "bg-red-50 text-red-700" : "bg-amber-50 text-amber-800"}`}>{review.status}</span>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#6e6e73]">
                <span>{review.reviewer_name}</span>
                <span aria-label={`${review.rating} out of 5 stars`} className="tracking-widest text-[#001D39]">{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</span>
                <span>{new Date(review.created_at).toLocaleString()}</span>
              </div>
              <p className="mt-4 whitespace-pre-wrap text-sm leading-7 text-[#4b5563]">{review.body}</p>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-black/[0.07] pt-4">
                <Link href={`/software/${review.software_slug}`} target="_blank" className="text-sm font-semibold text-[#001D39] underline underline-offset-4">View software profile ↗</Link>
                <div className="flex flex-wrap gap-2">
                  {review.status !== "approved" && <button type="button" disabled={busyId === review.id} onClick={() => void moderate(review.id, "approved")} className="min-h-10 rounded-full bg-[#001D39] px-4 text-sm font-semibold text-white disabled:opacity-50">{busyId === review.id ? "Saving…" : "Approve"}</button>}
                  {review.status !== "rejected" && <button type="button" disabled={busyId === review.id} onClick={() => void moderate(review.id, "rejected")} className="min-h-10 rounded-full border border-black/15 px-4 text-sm font-semibold text-[#4b5563] disabled:opacity-50">Reject</button>}
                  {review.status !== "pending" && <button type="button" disabled={busyId === review.id} onClick={() => void moderate(review.id, "pending")} className="min-h-10 rounded-full border border-black/15 px-4 text-sm font-semibold text-[#4b5563] disabled:opacity-50">Return to pending</button>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
