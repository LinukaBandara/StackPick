import Link from "next/link";

export interface ComparisonTool {
  name: string;
  bestFor: string;
  freeOption: string;
  tradeoff: string;
  url: string;
}

export interface ComparisonArticleProps {
  title: string;
  slug: string;
  intro: string;
  pricingNote?: string;
  tools: ComparisonTool[];
  bottomLine: string;
}

export default function ComparisonArticle({ title, slug, intro, pricingNote, tools, bottomLine }: ComparisonArticleProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://stackpick.example";
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: intro,
    url: siteUrl + "/best/" + slug,
    dateModified: "2026-10-08",
    author: { "@type": "Organization", name: "StackPick", url: siteUrl },
    publisher: { "@type": "Organization", name: "StackPick", url: siteUrl },
    isAccessibleForFree: true,
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <header className="bg-white">
        <div className="sp-container py-16 sm:py-24">
          <nav aria-label="Breadcrumb" className="text-sm text-[#6e6e73]">
            <Link href="/" className="hover:text-[#06c]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/best" className="hover:text-[#06c]">Comparisons</Link>
          </nav>
          <p className="sp-eyebrow mt-12">Software comparison</p>
          <h1 className="sp-title mt-4 max-w-5xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#6e6e73]">{intro}</p>
          <p className="mt-6 text-sm text-[#6e6e73]">Updated October 8, 2026</p>
        </div>
      </header>

      <section className="bg-[#f5f5f7]">
        <div className="sp-container py-14 sm:py-20">
          {pricingNote && (
            <div className="rounded-[28px] bg-white p-7 sm:p-9">
              <p className="text-sm font-semibold text-[#06c]">Pricing reality</p>
              <p className="mt-3 max-w-4xl text-lg leading-8">{pricingNote}</p>
            </div>
          )}

          <div className={pricingNote ? "mt-16" : ""}>
            <p className="sp-eyebrow">At a glance</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-.03em]">Which one fits?</h2>

            <div className="mt-8 overflow-hidden rounded-[28px] bg-white">
              <div className="hidden grid-cols-[1.1fr_1fr_1.2fr] border-b border-black/10 px-6 py-4 text-xs font-semibold text-[#6e6e73] sm:grid">
                <span>Tool</span><span>Best for</span><span>Free option</span>
              </div>
              {tools.map((tool, index) => (
                <div key={tool.name} className="grid gap-3 border-b border-black/10 px-6 py-6 last:border-0 sm:grid-cols-[1.1fr_1fr_1.2fr] sm:items-center">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-[#6e6e73]">{String(index + 1).padStart(2, "0")}</span>
                    <span className="text-lg font-semibold tracking-tight">{tool.name}</span>
                  </div>
                  <p className="text-sm text-[#6e6e73]"><span className="font-medium text-[#1d1d1f] sm:hidden">Best for: </span>{tool.bestFor}</p>
                  <p className="text-sm text-[#6e6e73]"><span className="font-medium text-[#1d1d1f] sm:hidden">Free: </span>{tool.freeOption}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="sp-container py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="sp-eyebrow">How we compare</p>
            <h2 className="sp-title mt-4">The details that change the decision.</h2>
            <p className="mt-6 text-lg leading-8 text-[#6e6e73]">
              We focus on practical decisions: what the tool costs, what the free or entry plan
              really includes, where it fits, and which trade-offs are easy to miss. We cross-check
              vendor documentation and pricing information rather than repeating a feature list.
            </p>
          </div>

          <div className="mt-16 grid gap-12 border-t border-black/10 pt-10 md:grid-cols-3">
            {[
              ["01", "Cost reality", "Subscription, usage and important limits."],
              ["02", "Fit", "Who benefits and who should skip it."],
              ["03", "Trade-offs", "The limitation most likely to affect the decision."],
            ].map(([n, title, desc]) => (
              <div key={n}>
                <p className="text-sm font-semibold text-[#06c]">{n}</p>
                <h3 className="mt-3 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#6e6e73]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f7]">
        <div className="sp-container py-20 sm:py-28">
          <p className="sp-eyebrow">Do this before paying</p>
          <h2 className="sp-title mt-4 max-w-4xl">Run the same five-minute test on every finalist.</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#6e6e73]">
            Feature lists are easy to compare and easy to overvalue. If the service offers a free
            plan or trial, use the same small real-world task in each finalist instead. Record what
            you can complete, where you hit a limit, and what requires an upgrade.
          </p>
          <ol className="mt-10 grid gap-4 md:grid-cols-5">
            {[
              ["01", "Create", "Set up the smallest realistic workspace."],
              ["02", "Do", "Complete the task you actually need."],
              ["03", "Limit", "Find the first meaningful free-plan cap."],
              ["04", "Export", "Check whether your data can leave cleanly."],
              ["05", "Price", "Check the current paid plan and renewal terms."],
            ].map(([n, title, desc]) => (
              <li key={n} className="rounded-3xl bg-white p-6">
                <span className="text-sm font-semibold text-[#06c]">{n}</span>
                <h3 className="mt-3 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#6e6e73]">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

            <section className="bg-[#f5f5f7]">
        <div className="sp-container py-20 sm:py-28">
          <p className="sp-eyebrow">Detailed comparison</p>
          <h2 className="sp-title mt-4 max-w-4xl">What to know before you choose.</h2>

          <div className="mt-14 space-y-5">
            {tools.map((tool, index) => (
              <section key={tool.name} className="rounded-[28px] bg-white p-7 sm:p-10">
                <div className="flex flex-col gap-7 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-[#06c]">{String(index + 1).padStart(2, "0")}</p>
                    <h3 className="mt-2 text-3xl font-semibold tracking-[-.035em]">{tool.name}</h3>
                    <p className="mt-2 text-sm text-[#6e6e73]">Best for {tool.bestFor}</p>
                  </div>
                  <a href={tool.url} target="_blank" rel="noopener noreferrer sponsored" className="sp-button-secondary shrink-0">
                    Check current pricing
                  </a>
                </div>
                <div className="mt-10 grid gap-8 border-t border-black/10 pt-8 sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold">Free option</p>
                    <p className="mt-2 text-sm leading-6 text-[#6e6e73]">{tool.freeOption}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Trade-off</p>
                    <p className="mt-2 text-sm leading-6 text-[#6e6e73]">{tool.tradeoff}</p>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="sp-container py-24 sm:py-32">
          <p className="text-sm font-semibold text-[#a1a1a6]">StackPick verdict</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-.04em] sm:text-6xl">The bottom line.</h2>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#a1a1a6]">{bottomLine}</p>
        </div>
      </section>

      <div className="sp-container py-8">
        <p className="text-xs leading-6 text-[#6e6e73]">
          Some links on this page may be affiliate links. Read our{" "}
          <Link href="/affiliate-disclosure" className="text-[#06c] hover:underline">affiliate disclosure</Link>.
        </p>
      </div>
    </article>
  );
}
