"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";

type Review = { id: string; reviewer_name: string; rating: number; title: string; body: string; created_at: string };
type ReviewData = { reviews: Review[]; count: number; average: number | null };
type SessionData = { user: { id: string; email: string; displayName: string } | null };

export default function ReviewSection({ softwareSlug, softwareName }: { softwareSlug: string; softwareName: string }) {
  const [data, setData] = useState<ReviewData>({ reviews: [], count: 0, average: null });
  const [signedIn, setSignedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState("5");
  const [reviewerName, setReviewerName] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function refresh() {
    const sessionResponse = await fetch("/api/auth/session", { cache: "no-store" });
    if (sessionResponse.ok) {
      const session = await sessionResponse.json() as SessionData;
      setSignedIn(Boolean(session.user));
      if (session.user?.displayName) setReviewerName(session.user.displayName);
    }
    const reviewsResponse = await fetch(`/api/reviews?slug=${encodeURIComponent(softwareSlug)}`, { cache: "no-store" });
    if (reviewsResponse.ok) setData(await reviewsResponse.json());
    setLoading(false);
  }

  // refresh is recreated on render; the effect only needs to rerun when the product changes.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { void refresh(); }, [softwareSlug]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    setMessage("");
    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ softwareSlug, reviewerName, rating: Number(rating), title, body }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Could not submit review.");
      setMessage(result.message);
      setTitle("");
      setBody("");
      await refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not submit review.");
    } finally {
      setBusy(false);
    }
  }

  async function signOut() {
    await fetch("/api/auth/session", { method: "DELETE" });
    setSignedIn(false);
    setMessage("You are signed out.");
  }

  return (
    <section id="user-reviews" className="mt-16 border-t border-black/[0.08] pt-12">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="sp-eyebrow">Community experience</p>
          <h2 className="sp-title mt-3">Reviews from users.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6e6e73]">Only reviews approved by StackPick moderators appear here. A submitted review is not published immediately.</p>
        </div>
        <div className="rounded-2xl border border-black/10 px-5 py-3 text-sm text-[#4b5563]">
          {loading ? "Loading reviews…" : data.count ? <><strong className="text-[#001D39]">{data.average?.toFixed(1)} / 5</strong> · {data.count} approved {data.count === 1 ? "review" : "reviews"}</> : "No approved reviews yet"}
        </div>
      </div>

      <div className="mt-7 grid gap-4">
        {!loading && data.reviews.length === 0 && (
          <div className="rounded-2xl bg-[#f5f5f7] p-6 text-sm leading-6 text-[#6e6e73]">Be the first to share a genuine experience with {softwareName}. Reviews are displayed only after moderation.</div>
        )}
        {data.reviews.map((review) => (
          <article key={review.id} className="rounded-2xl border border-black/10 p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-semibold text-[#1d1d1f]">{review.reviewer_name}</p>
              <p className="text-xs text-[#6e6e73]">{new Date(review.created_at).toLocaleDateString()}</p>
            </div>
            <p className="mt-2 text-sm tracking-widest text-[#001D39]" aria-label={`${review.rating} out of 5 stars`}>{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</p>
            <h3 className="mt-3 font-semibold text-[#1d1d1f]">{review.title}</h3>
            <p className="mt-2 whitespace-pre-wrap text-sm leading-7 text-[#4b5563]">{review.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-[24px] border border-black/10 p-6 sm:p-8">
        <h3 className="text-xl font-semibold tracking-tight text-[#1d1d1f]">Share your experience</h3>
        {signedIn ? (
          <>
            <div className="flex flex-wrap items-center justify-between gap-3"><p className="text-sm leading-6 text-[#6e6e73]">One review per account for this product. Keep it specific, fair and based on your own experience.</p><button type="button" onClick={signOut} className="text-xs font-semibold text-[#001D39] underline underline-offset-4">Sign out</button></div>
            <form onSubmit={submit} className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor={`review-name-${softwareSlug}`} className="mb-2 block text-sm font-medium text-[#1d1d1f]">Display name</label>
                <input id={`review-name-${softwareSlug}`} required minLength={2} maxLength={40} value={reviewerName} onChange={(event) => setReviewerName(event.target.value)} className="min-h-12 w-full rounded-xl border border-black/15 px-4 text-sm outline-none focus:border-[#001D39]" />
              </div>
              <div>
                <label htmlFor={`review-rating-${softwareSlug}`} className="mb-2 block text-sm font-medium text-[#1d1d1f]">Your rating</label>
                <select id={`review-rating-${softwareSlug}`} value={rating} onChange={(event) => setRating(event.target.value)} className="min-h-12 w-full rounded-xl border border-black/15 bg-white px-4 text-sm outline-none focus:border-[#001D39]">
                  <option value="5">5 — Excellent</option><option value="4">4 — Good</option><option value="3">3 — Average</option><option value="2">2 — Below average</option><option value="1">1 — Poor</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor={`review-title-${softwareSlug}`} className="mb-2 block text-sm font-medium text-[#1d1d1f]">Review title</label>
                <input id={`review-title-${softwareSlug}`} required minLength={5} maxLength={100} value={title} onChange={(event) => setTitle(event.target.value)} className="min-h-12 w-full rounded-xl border border-black/15 px-4 text-sm outline-none focus:border-[#001D39]" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor={`review-body-${softwareSlug}`} className="mb-2 block text-sm font-medium text-[#1d1d1f]">Your experience</label>
                <textarea id={`review-body-${softwareSlug}`} required minLength={30} maxLength={3000} rows={5} value={body} onChange={(event) => setBody(event.target.value)} placeholder="What did you use it for? What worked well, and what should others know before choosing it?" className="w-full rounded-xl border border-black/15 px-4 py-3 text-sm leading-6 outline-none focus:border-[#001D39]" />
              </div>
              {error && <p role="alert" className="sm:col-span-2 rounded-xl bg-red-50 p-3 text-sm text-red-700">{error}</p>}
              {message && <p role="status" className="sm:col-span-2 rounded-xl bg-[#f1f6fa] p-3 text-sm leading-6 text-[#001D39]">{message}</p>}
              <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
                <button disabled={busy} type="submit" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#001D39] px-6 text-sm font-semibold text-white disabled:opacity-60">{busy ? "Submitting…" : "Submit for review"}</button>
                <span className="text-xs text-[#6e6e73]">Your review stays private until approved.</span>
              </div>
            </form>
          </>
        ) : (
          <div className="mt-3">
            <p className="text-sm leading-6 text-[#6e6e73]">Sign in or create an account to submit a review. Email confirmation may be required before you can sign in.</p>
            <Link href={`/account?returnTo=${encodeURIComponent(`/software/${softwareSlug}#user-reviews`)}`} className="mt-5 inline-flex min-h-11 items-center rounded-full bg-[#001D39] px-5 text-sm font-semibold text-white hover:opacity-90">Sign in to review</Link>
          </div>
        )}
      </div>
    </section>
  );
}
