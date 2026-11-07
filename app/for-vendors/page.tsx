import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Software Vendors",
  description: "Request ownership of an existing StackPick software profile or suggest a product for editorial review.",
  alternates: { canonical: "/for-vendors" },
};

const benefits = [
  ["Accurate product information", "Flag outdated descriptions, links and publicly verifiable product details."],
  ["A clear review process", "Submit your request and follow its moderation status from your account."],
  ["Editorial independence", "Vendor input helps correct facts; it does not buy rankings, reviews or favourable coverage."],
];

export default function ForVendorsPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-black/[0.08] bg-[#f5f5f7]">
        <div className="sp-container py-16 sm:py-24">
          <p className="sp-eyebrow">StackPick · Vendor programme</p>
          <h1 className="sp-display mt-4 max-w-4xl">A better way to keep your software profile accurate.</h1>
          <p className="sp-body-large mt-6 max-w-2xl">Represent a product listed on StackPick or suggest software for our editors to consider. Every request is reviewed; vendors do not receive automatic publishing or ranking privileges.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/for-vendors/portal" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#001D39] px-6 text-sm font-semibold text-white hover:opacity-90">Open vendor workspace <span className="ml-2" aria-hidden="true">↗</span></Link>
            <Link href="/software" className="inline-flex min-h-12 items-center justify-center rounded-full border border-black/15 bg-white px-6 text-sm font-semibold text-[#001D39]">Browse software</Link>
          </div>
        </div>
      </section>
      <section className="sp-container grid gap-5 py-14 sm:grid-cols-3 sm:py-20">
        {benefits.map(([title, body]) => <article key={title} className="rounded-[24px] border border-black/10 p-6"><p className="text-xs font-semibold uppercase tracking-wide text-[#6e6e73]">Vendor support</p><h2 className="mt-3 text-xl font-semibold tracking-tight text-[#1d1d1f]">{title}</h2><p className="mt-3 text-sm leading-6 text-[#6e6e73]">{body}</p></article>)}
      </section>
      <section className="sp-container pb-16 sm:pb-24">
        <div className="rounded-[28px] border border-black/10 bg-[#001D39] p-7 text-white sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">Important</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Independent research stays independent.</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-white/75">A profile claim is not a paid placement. Vendors cannot remove legitimate criticism, edit user reviews, purchase a higher editorial ranking or require favourable coverage. New product suggestions are assessed against StackPick's category scope, available public evidence and editorial capacity.</p>
          <Link href="/review-policy" className="mt-5 inline-flex text-sm font-semibold text-white underline underline-offset-4">Read our review policy</Link>
        </div>
      </section>
    </main>
  );
}
