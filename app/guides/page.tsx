import type { Metadata } from "next";
import Link from "next/link";
import { ARTICLES } from "@/lib/guides";

export const metadata: Metadata = {
  title: "All Software Comparisons & Practical Guides",
  description: "Browse StackPick's complete directory of practical software comparisons and guides for freelancers, small businesses and developers, with limits and trade-offs explained.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return (
    <section className="bg-white">
      <div className="sp-container py-16 sm:py-24">
        <p className="sp-eyebrow">The complete guide library</p>
        <h1 className="sp-display mt-4 max-w-4xl">Every guide. One clear starting point.</h1>
        <p className="sp-body-large mt-6 max-w-2xl">
          Browse all {ARTICLES.length} software comparisons and practical guides. Each page focuses on a real decision, the limits that matter, and the trade-offs to check before choosing a tool.
        </p>
        <p className="mt-6 text-sm text-[#6e6e73]">Browse by topic below, or use your browser's Find command to locate a specific tool or task.</p>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {ARTICLES.map((item, index) => (
            <Link key={item.href} href={item.href} className="group rounded-[24px] border border-[#d2d2d7] p-7 transition-all hover:-translate-y-1 hover:border-[#a8b5c2] hover:shadow-lg sm:p-8">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold uppercase tracking-wide text-[#6e6e73]">{item.category}</span>
                <span className="text-xs text-[#001D39]">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h2 className="mt-5 text-xl font-semibold tracking-tight text-[#1d1d1f]">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#6e6e73]">{item.desc}</p>
              <span className="mt-7 inline-block text-xs font-semibold text-[#001D39] group-hover:underline">Read guide →</span>
            </Link>
          ))}
        </div>
        <p className="mt-10 text-sm text-[#6e6e73]">Want to filter by category or search the directory? <Link href="/best" className="font-semibold text-[#001D39] hover:underline">Open the interactive comparisons directory →</Link></p>
      </div>
    </section>
  );
}
