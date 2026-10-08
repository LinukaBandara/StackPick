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

function ToolMark({ index }: { index: number }) {
  return (
    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-sm">
      {String(index + 1).padStart(2, "0")}
    </span>
  );
}

export default function ComparisonArticle({
  title,
  slug,
  intro,
  pricingNote,
  tools,
  bottomLine,
}: ComparisonArticleProps) {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: intro,
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://stackpick.example"}/best/${slug}`,
    dateModified: "2026-10-08",
    author: { "@type": "Organization", name: "StackPick", url: process.env.NEXT_PUBLIC_SITE_URL || "https://stackpick.example" },
    publisher: { "@type": "Organization", name: "StackPick", url: process.env.NEXT_PUBLIC_SITE_URL || "https://stackpick.example" },
    isAccessibleForFree: true,
  };

  return (
    <article className="sp-container py-10 sm:py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
        <Link href="/" className="font-medium hover:text-indigo-600">Home</Link>
        <span className="mx-2 text-slate-300">/</span>
        <Link href="/best" className="font-medium hover:text-indigo-600">Comparisons</Link>
        <span className="mx-2 text-slate-300">/</span>
        <span className="text-slate-700" aria-current="page">{title}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div>
          <div className="sp-pill border border-indigo-100 bg-indigo-50 text-indigo-700">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            Software comparison
          </div>

          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-[-.035em] text-slate-950 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-sm font-medium text-slate-500">Page updated: October 8, 2026</p>

          <div className="mt-7 rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-6 sm:p-7">
            <p className="text-lg font-medium leading-8 text-slate-800">{intro}</p>
          </div>

          {pricingNote && (
            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-slate-800">
              <strong className="text-slate-950">Pricing reality:</strong> {pricingNote}
            </div>
          )}

          <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6" aria-labelledby="methodology">
            <p className="text-xs font-bold uppercase tracking-[.16em] text-indigo-600">How we compare</p>
            <h2 id="methodology" className="mt-1 text-xl font-black text-slate-950">What matters beyond the feature list</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              StackPick focuses on the practical decision a freelancer or small team is making:
              what the tool costs, what the free or entry plan really includes, where the product
              fits best, and which trade-offs are easy to miss. We cross-check vendor documentation
              and pricing information, then turn those findings into a clear recommendation rather
              than repeating a vendor feature list.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                ["01", "Cost reality", "Subscription, usage and important limits."],
                ["02", "Fit", "Who benefits and who should skip it."],
                ["03", "Trade-offs", "The limitation most likely to affect the decision."],
              ].map(([n, label, text]) => (
                <div key={n} className="rounded-xl bg-slate-50 p-4">
                  <span className="text-xs font-black text-indigo-600">{n}</span>
                  <h3 className="mt-2 text-sm font-bold text-slate-950">{label}</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10" aria-labelledby="quick-picks">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.16em] text-indigo-600">Quick comparison</p>
                <h2 id="quick-picks" className="mt-1 text-2xl font-black text-slate-950">The shortlist</h2>
              </div>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="hidden grid-cols-[1.2fr_1fr_1fr] border-b border-slate-100 bg-slate-50 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-500 sm:grid">
                <span>Tool</span><span>Best for</span><span>Free option</span>
              </div>
              {tools.map((t, i) => (
                <div key={t.name} className="grid gap-3 border-b border-slate-100 px-5 py-4 last:border-0 sm:grid-cols-[1.2fr_1fr_1fr] sm:items-center">
                  <div className="flex items-center gap-3">
                    <ToolMark index={i} />
                    <span className="font-extrabold text-slate-950">{t.name}</span>
                  </div>
                  <div className="text-sm text-slate-600"><span className="font-semibold text-slate-800 sm:hidden">Best for: </span>{t.bestFor}</div>
                  <div className="text-sm text-slate-600"><span className="font-semibold text-slate-800 sm:hidden">Free: </span>{t.freeOption}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12" aria-labelledby="detailed-picks">
            <p className="text-xs font-bold uppercase tracking-[.16em] text-indigo-600">Detailed look</p>
            <h2 id="detailed-picks" className="mt-1 text-2xl font-black text-slate-950">What to know before choosing</h2>

            <div className="mt-5 grid gap-4">
              {tools.map((t, i) => (
                <section key={t.name} className="sp-card p-5 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <ToolMark index={i} />
                      <div>
                        <h3 className="text-xl font-extrabold text-slate-950">{t.name}</h3>
                        <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-indigo-600">Best for {t.bestFor}</p>
                      </div>
                    </div>
                    <a href={t.url} target="_blank" rel="noopener noreferrer sponsored" className="sp-button-secondary">
                      Check current pricing <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                  <div className="mt-6 grid gap-4 border-t border-slate-100 pt-5 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-emerald-600">Free option</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{t.freeOption}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-amber-600">Trade-off</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{t.tradeoff}</p>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-3xl bg-slate-950 p-6 text-white sm:p-8" aria-labelledby="bottom-line">
            <p className="text-xs font-bold uppercase tracking-[.16em] text-indigo-300">StackPick verdict</p>
            <h2 id="bottom-line" className="mt-2 text-2xl font-black">Bottom line</h2>
            <p className="mt-3 leading-7 text-slate-300">{bottomLine}</p>
          </section>

          <p className="mt-8 border-t border-slate-200 pt-5 text-xs leading-6 text-slate-500">
            Some links on this page may be affiliate links. Read our{" "}
            <Link href="/affiliate-disclosure" className="font-semibold text-indigo-600 hover:underline">affiliate disclosure</Link>.
          </p>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[.16em] text-slate-400">On this page</p>
            <nav className="mt-4 grid gap-2 text-sm font-semibold">
              <a href="#methodology" className="rounded-lg px-3 py-2 text-slate-700 hover:bg-indigo-50 hover:text-indigo-700">How we compare</a>
              <a href="#quick-picks" className="rounded-lg px-3 py-2 text-slate-700 hover:bg-indigo-50 hover:text-indigo-700">Quick comparison</a>
              <a href="#detailed-picks" className="rounded-lg px-3 py-2 text-slate-700 hover:bg-indigo-50 hover:text-indigo-700">Detailed look</a>
              <a href="#bottom-line" className="rounded-lg px-3 py-2 text-slate-700 hover:bg-indigo-50 hover:text-indigo-700">Bottom line</a>
            </nav>
          </div>
        </aside>
      </div>
    </article>
  );
}
