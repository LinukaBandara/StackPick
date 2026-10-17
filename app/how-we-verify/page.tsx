import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How StackPick Verifies Software Information",
  description: "Learn how StackPick checks software pricing, plan limits, product fit and source quality—and how we distinguish desk research from hands-on testing.",
  alternates: { canonical: "/how-we-verify" },
  openGraph: {
    title: "How StackPick Verifies Software Information",
    description: "Our approach to checking software facts, pricing, plan limits and editorial recommendations.",
    url: "/how-we-verify",
    type: "article",
  },
};

const PRINCIPLES = [
  { title: "Start with primary sources", body: "We prioritize official vendor pricing pages, plan documentation, help centers, product documentation and terms. Third-party reviews can reveal questions to investigate, but they do not replace vendor evidence for plan facts." },
  { title: "Date changing information", body: "Prices, free-plan limits, included features, promotions and regional availability can change. Pages should show when important changing facts were checked and link to the official source so readers can confirm the current terms." },
  { title: "Separate research from testing", body: "Reading documentation and comparing published plans is desk research—not hands-on testing. We only describe a workflow as tested when an editor actually performed it and recorded the setup, steps, date and observations." },
  { title: "Explain trade-offs", body: "A recommendation should say who a product may suit, who should skip it, what limits matter and what could make another option better. No product is the best choice for every business." },
  { title: "Be transparent about commercial relationships", body: "If a page contains affiliate links, the relationship should be disclosed clearly near the recommendation or link. Compensation must not be described as proof of product quality, and useful alternatives should remain available." },
  { title: "Correct mistakes", body: "If you spot an outdated price, incorrect limit, broken link or misleading statement, contact StackPick with the page URL and a source. We can investigate and correct material errors." },
];

export default function HowWeVerifyPage() {
  return (
    <section className="bg-white">
      <div className="sp-container py-16 sm:py-24">
        <p className="sp-eyebrow">Editorial standards</p>
        <h1 className="sp-display mt-4 max-w-4xl">Useful recommendations start with evidence.</h1>
        <p className="sp-body-large mt-6 max-w-3xl">StackPick helps freelancers and small businesses compare software with less noise. This page explains the standards we aim to apply to product profiles, comparisons and practical guides.</p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {PRINCIPLES.map((item, index) => (
            <article key={item.title} className="rounded-[24px] border border-[#d2d2d7] p-7 sm:p-8">
              <p className="text-xs font-semibold tracking-wide text-[#001D39]">{String(index + 1).padStart(2, "0")} / PRINCIPLE</p>
              <h2 className="mt-4 text-xl font-semibold tracking-tight text-[#1d1d1f]">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#6e6e73]">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-[24px] bg-[#f5f5f7] p-7 sm:p-9">
          <h2 className="text-xl font-semibold text-[#1d1d1f]">What a StackPick page should make clear</h2>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-[#6e6e73] sm:grid-cols-2">
            <li>• The audience and task the page is meant to help with.</li>
            <li>• Official source links for material pricing and plan claims.</li>
            <li>• Important free-tier, seat, contact, usage or feature limits.</li>
            <li>• Whether the conclusions are desk research or hands-on evaluation.</li>
            <li>• Meaningful downsides and reasons to choose another option.</li>
            <li>• A clear disclosure whenever affiliate relationships apply.</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[#001D39]">
            <Link href="/software-finder" className="hover:underline">Use the software finder →</Link>
            <Link href="/affiliate-disclosure" className="hover:underline">Read our affiliate disclosure →</Link>
            <Link href="/contact" className="hover:underline">Report a correction →</Link>
          </div>
        </div>
        <p className="mt-8 max-w-3xl text-xs leading-5 text-[#6e6e73]">This is an editorial policy, not a claim that every page has undergone a formal lab test or independent audit. Check each page's specific sources, dates and methodology before relying on a changing product fact.</p>
      </div>
    </section>
  );
}
