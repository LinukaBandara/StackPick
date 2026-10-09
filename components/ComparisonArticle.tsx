import Link from "next/link";
import type { ReactNode } from "react";

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
  children?: ReactNode;
}

export default function ComparisonArticle({ title, slug, intro, pricingNote, tools, bottomLine, children }: ComparisonArticleProps) {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: intro,
    url: `/best/${slug}`,
    dateModified: "2026-09-24",
  };

  return (
    <article className="article-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <nav aria-label="Breadcrumb" className="article-breadcrumb"><Link href="/">Home</Link><span> / </span><Link href="/best">Comparisons</Link><span> / </span><span>{title}</span></nav>
      <p className="page-eyebrow">SOFTWARE FIELD GUIDE</p>
      <h1 className="article-title">{title}</h1>
      <p className="article-meta">Independent research · Last reviewed September 2026</p>
      <p className="article-intro">{intro}</p>
      {pricingNote && <div className="article-note"><strong>A note on pricing:</strong> {pricingNote}</div>}
      <div className="article-tool-list">
        {tools.map((tool, index) => (
          <section key={tool.name} className="article-tool">
            <div className="article-tool-heading">
              <div><p className="page-eyebrow">OPTION {String(index + 1).padStart(2, "0")}</p><h2>{tool.name}</h2></div>
              <a href={tool.url} target="_blank" rel="noopener noreferrer sponsored" className="article-tool-link">View current pricing ↗</a>
            </div>
            <p><strong>Best for:</strong> {tool.bestFor}</p>
            <p><strong>Free option:</strong> {tool.freeOption}</p>
            <p><strong>The trade-off:</strong> {tool.tradeoff}</p>
          </section>
        ))}
      </div>
      {children}
      <h2 className="article-subheading">The bottom line</h2>
      <p className="article-bottom-line">{bottomLine}</p>
      <p className="article-disclosure">Some links may be affiliate links. Read our <Link href="/affiliate-disclosure">affiliate disclosure</Link> for details.</p>
    </article>
  );
}
