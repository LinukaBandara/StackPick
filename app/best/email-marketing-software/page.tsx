import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Email Marketing Software for Small Business (2026)",
  description:
    "An honest comparison of email marketing tools — Mailchimp, Brevo, MailerLite, ActiveCampaign, and Kit — covering how each one actually prices and who it fits.",
  alternates: { canonical: "/best/email-marketing-software" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Email Marketing Software for Small Business",
  description: "An honest comparison of email marketing tools for small businesses.",
  url: "/best/email-marketing-software",
  dateModified: "2026-10-08",
};

interface Tool {
  name: string;
  bestFor: string;
  freeOption: string;
  tradeoff: string;
  url: string;
}

const TOOLS: Tool[] = [
  {
    name: "Mailchimp",
    bestFor: "First-time senders who want the most familiar, well-documented tool",
    freeOption: "Limited free plan available for small contact lists.",
    tradeoff:
      "The name everyone knows, and for good reason — but pricing has climbed over the years and rises quickly as your contact list grows, which is exactly why so many small businesses actively shop for alternatives once they scale past the free tier.",
    url: "https://mailchimp.com/",
  },
  {
    name: "Brevo",
    bestFor: "Businesses with a large contact list but modest sending frequency",
    freeOption: "Free plan includes a daily send limit with unlimited contacts stored.",
    tradeoff:
      "Bills by email volume rather than list size, which flips the usual math — if you have thousands of contacts but email them rarely, this is often meaningfully cheaper than list-based pricing elsewhere.",
    url: "https://www.brevo.com/",
  },
  {
    name: "MailerLite",
    bestFor: "Beginners who want a simple, generous free plan",
    freeOption: "Free plan covers a reasonable contact count with core automation included.",
    tradeoff:
      "Consistently rated easiest to start with, but some advanced automation and reporting features are reserved for paid tiers once your needs grow past the basics.",
    url: "https://www.mailerlite.com/",
  },
  {
    name: "ActiveCampaign",
    bestFor: "Businesses that want serious, behavior-based automation",
    freeOption: "No free tier.",
    tradeoff:
      "The most sophisticated automation engine in this list — branching workflows, behavior triggers — but it comes with a real learning curve and a higher price floor than the beginner-focused options above. Overkill if you're just sending a monthly newsletter.",
    url: "https://www.activecampaign.com/",
  },
  {
    name: "Kit (formerly ConvertKit)",
    bestFor: "Solo creators and newsletter writers, not traditional businesses",
    freeOption: "Free plan available for a limited subscriber count.",
    tradeoff:
      "Built specifically for creators publishing newsletters, not for e-commerce or B2B sales sequences — a great fit if that's literally what you're doing, a poor fit otherwise.",
    url: "https://kit.com/",
  },
];

export default function EmailMarketingSoftwarePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <nav aria-label="Breadcrumb" className="text-sm text-slate mb-6">
        <Link href="/" className="hover:text-indigo">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-ink">Best Email Marketing Software</span>
      </nav>

      <h1 className="text-3xl font-bold text-ink mb-2">Best Email Marketing Software for Small Business</h1>
      <p className="text-slate mb-1">Page updated: October 8, 2026.</p>
      <p className="text-lg text-ink bg-indigo/5 border border-indigo/20 rounded-card p-4 my-6">
        The right tool here depends on whether your cost driver is list size or send frequency —
        most comparisons skip that distinction and just rank by feature count.
      </p>

      <div className="rounded-card border border-amber/40 bg-amber-50 p-4 text-sm text-ink mb-8">
        <strong>A note on pricing:</strong> Free-tier limits and pricing tiers for every tool
        below change fairly often. Live pricing pages are linked rather than numbers that will
        drift out of date.
      </div>

      <div className="space-y-6">
        {TOOLS.map((t) => (
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
      <p className="text-slate">
        Large list, infrequent sends? Brevo's volume-based pricing usually wins. Just starting
        out? MailerLite's free tier is the most generous entry point. Need real behavioral
        automation? ActiveCampaign, once you've outgrown the basics. Writing a newsletter as a
        creator, not running a business list? Kit is built specifically for that.
      </p>

      <p className="text-xs text-slate mt-8 border-t border-borderc pt-4">
        Some links on this page are affiliate links — see our{" "}
        <Link href="/affiliate-disclosure" className="text-indigo hover:underline">affiliate disclosure</Link>.
      </p>
    </div>
  );
}
