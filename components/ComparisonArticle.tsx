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
    url: `/best/${slug}`,
    dateModified: "2026-09-24",
  };

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <nav aria-label="Breadcrumb" className="text-sm text-slate mb-6">
        <Link href="/" className="hover:text-indigo">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{title}</span>
      </nav>

      <h1 className="text-3xl font-bold text-ink mb-2">{title}</h1>
      <p className="text-slate mb-1">Last reviewed: September 2026.</p>
      <p className="text-lg text-ink bg-indigo/5 border border-indigo/20 rounded-card p-4 my-6">
        {intro}
      </p>

      {pricingNote && (
        <div className="rounded-card border border-amber/40 bg-amber-50 p-4 text-sm text-ink mb-8">
          <strong>A note on pricing:</strong> {pricingNote}
        </div>
      )}

      <div className="space-y-6">
        {tools.map((t) => (
          <div key={t.name} className="rounded-card border border-borderc bg-white p-5">
            <div className="flex items-baseline justify-between flex-wrap gap-2">
              <h2 className="text-lg font-semibold text-ink">{t.name}</h2>
              <a
                href={t.url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="text-sm text-indigo font-medium hover:underline"
              >
                Check current pricing →
              </a>
            </div>
            <p className="text-sm text-slate mt-2"><strong className="text-ink">Best for:</strong> {t.bestFor}</p>
            <p className="text-sm text-slate mt-2"><strong className="text-ink">Free option:</strong> {t.freeOption}</p>
            <p className="text-sm text-slate mt-2"><strong className="text-ink">The trade-off:</strong> {t.tradeoff}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold text-ink mt-10 mb-2">Bottom line</h2>
      <p className="text-slate">{bottomLine}</p>

      <p className="text-xs text-slate mt-8 border-t border-borderc pt-4">
        Some links on this page are affiliate links — see our{" "}
        <Link href="/affiliate-disclosure" className="text-indigo hover:underline">affiliate disclosure</Link>.
      </p>
    </div>
  );
}
