import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Invoicing Software for Freelancers (2026 Comparison)",
  description:
    "An honest comparison of invoicing tools for freelancers - Wave, FreshBooks, Zoho Invoice, Invoice Ninja, and QuickBooks - covering free tiers, payment fees, and who each one actually fits.",
  alternates: { canonical: "/best/invoicing-software" },
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://stackpick.example";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Invoicing Software for Freelancers",
  description: "An honest, fee-aware comparison of invoicing tools for freelancers.",
  url: SITE_URL + "/best/invoicing-software",
  dateModified: "2026-10-08",
  inLanguage: "en-US",
  mainEntityOfPage: { "@type": "WebPage", "@id": SITE_URL + "/best/invoicing-software" },
  author: { "@type": "Organization", name: "StackPick", url: SITE_URL },
  publisher: { "@type": "Organization", name: "StackPick", url: SITE_URL },
  isAccessibleForFree: true,
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
    name: "Wave",
    bestFor: "Freelancers who want unlimited invoicing at zero subscription cost",
    freeOption:
      "Free plan covers unlimited invoices and clients - you pay only when a client pays via card or bank transfer, as a percentage-based processing fee.",
    tradeoff:
      "No monthly fee sounds great until you calculate what the per-transaction processing fee actually costs at your invoice volume - for a freelancer billing several thousand dollars a month by card, that fee can add up to more than a flat paid plan elsewhere would.",
    url: "https://www.waveapps.com/invoicing",
  },
  {
    name: "Zoho Invoice",
    bestFor: "Very early-stage freelancers with a small client list",
    freeOption:
      "Free for a limited number of clients (check current limits on Zoho's pricing page - this changes).",
    tradeoff:
      "Generous while you're small, but you'll outgrow the free tier's client cap faster than expected if your freelance business grows.",
    url: "https://www.zoho.com/invoice/",
  },
  {
    name: "Invoice Ninja",
    bestFor: "Technically comfortable freelancers who want to self-host and own their data",
    freeOption: "Free tier covers a small number of clients with unlimited invoices; a paid Pro tier removes limits.",
    tradeoff:
      "The self-hosted option is genuinely unique in this space, but it requires comfort with basic server setup - not a fit if you want zero technical overhead.",
    url: "https://invoiceninja.com/",
  },
  {
    name: "FreshBooks",
    bestFor: "Freelancers who want a polished client experience with time tracking built in",
    freeOption: "No free tier - paid plans only, tiered by number of billable clients.",
    tradeoff:
      "The lowest tier caps how many clients you can bill, so a freelancer with more than a handful of active clients gets pushed to a pricier plan quickly. Worth it if the automated reminders and client portal save you real time.",
    url: "https://www.freshbooks.com/",
  },
  {
    name: "QuickBooks",
    bestFor: "Freelancers who also need real bookkeeping and tax prep, not just invoicing",
    freeOption: "No free tier.",
    tradeoff:
      "It's the strongest option here for accounting and tax integration, but it's genuinely overkill - and overpriced - if invoicing is literally all you need. Time tracking and a client portal aren't included by default either.",
    url: "https://quickbooks.intuit.com/",
  },
];

export default function InvoicingSoftwarePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <nav aria-label="Breadcrumb" className="text-sm text-slate mb-6">
        <Link href="/" className="hover:text-indigo">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-ink">Best Invoicing Software</span>
      </nav>

      <h1 className="text-3xl font-bold text-ink mb-2">Best Invoicing Software for Freelancers</h1>
      <p className="text-slate mb-1">Page updated: October 8, 2026.</p>
      <p className="text-lg text-ink bg-indigo/5 border border-indigo/20 rounded-card p-4 my-6">
        There's no single "best" - it depends on your invoice volume and whether payment
        processing fees or a flat monthly price costs you less. Below is what actually
        differentiates these five tools, not just a feature checklist.
      </p>

      <div className="rounded-card border border-amber/40 bg-amber-50 p-4 text-sm text-ink mb-8">
        <strong>A note on pricing:</strong> Every "invoicing software comparison" article you'll
        find - including this one - is working against a moving target. These tools change
        pricing and plan limits multiple times a year. Rather than publish numbers that will be
        wrong within months, we've linked each tool's live pricing page below. Always check
        there before deciding.
      </div>

      <h2 className="text-xl font-semibold text-ink mb-4">The real cost isn't just the subscription</h2>
      <p className="text-slate mb-6">
        A free invoicing tool that charges a processing fee on every payment can end up costing
        more per month than a $20 flat-rate plan, once your invoice volume is high enough. Before
        picking a tool, estimate your monthly invoiced total and check both the subscription
        price <em>and</em> the payment processing fee - most comparison articles only show you
        one of the two.
      </p>

      <div className="space-y-6">
        {TOOLS.map((t) => (
          <div key={t.name} className="rounded-card border border-borderc bg-white p-5">
            <div className="flex items-baseline justify-between flex-wrap gap-2">
              <h3 className="text-lg font-semibold text-ink">{t.name}</h3>
              <a
                href={t.url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="text-sm text-indigo font-medium hover:underline"
              >
                Check current pricing
              </a>
            </div>
            <p className="text-sm text-slate mt-2">
              <strong className="text-ink">Best for:</strong> {t.bestFor}
            </p>
            <p className="text-sm text-slate mt-2">
              <strong className="text-ink">Free option:</strong> {t.freeOption}
            </p>
            <p className="text-sm text-slate mt-2">
              <strong className="text-ink">The trade-off:</strong> {t.tradeoff}
            </p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold text-ink mt-10 mb-4">Choose by how you actually get paid</h2>
      <div className="grid gap-4 sm:grid-cols-2 mb-8">
        <div className="rounded-card border border-borderc bg-white p-5"><h3 className="font-semibold text-ink mb-2">Mostly bank transfer</h3><p className="text-sm text-slate">Prioritize invoices, reminders, recurring billing and a clean client payment workflow.</p></div>
        <div className="rounded-card border border-borderc bg-white p-5"><h3 className="font-semibold text-ink mb-2">Mostly card payments</h3><p className="text-sm text-slate">Calculate processing costs against monthly payment volume. Free subscription does not mean lowest total cost.</p></div>
        <div className="rounded-card border border-borderc bg-white p-5"><h3 className="font-semibold text-ink mb-2">Invoices plus bookkeeping</h3><p className="text-sm text-slate">A broader accounting product can reduce duplicate data entry.</p></div>
        <div className="rounded-card border border-borderc bg-white p-5"><h3 className="font-semibold text-ink mb-2">Data ownership matters</h3><p className="text-sm text-slate">Check export options and self-hosting where available, while accounting for maintenance responsibilities.</p></div>
      </div>
      <h2 className="text-xl font-semibold text-ink mb-3">A five-minute invoice test</h2>
      <p className="text-slate mb-3">Create one realistic invoice instead of judging a product from its marketing page. Add a line item, discount or tax if relevant, payment instructions and a client note. Preview it on a phone and inspect the payment flow.</p>
      <p className="text-slate mb-6">This exposes practical issues feature lists miss: editing speed, professional output, required fields and whether the free tier blocks something you actually need.</p>
      <h2 className="text-xl font-semibold text-ink mt-10 mb-2">Bottom line</h2>
      <p className="text-slate">
        Sending fewer than 5 invoices a month to repeat clients? Start free with Wave or Zoho
        Invoice and only pay once you outgrow it. Billing hourly with several active clients and
        want less admin overhead? FreshBooks' automation is worth the subscription. Already doing
        real bookkeeping? QuickBooks folds invoicing in rather than needing a separate tool.
      </p>

      <p className="text-xs text-slate mt-8 border-t border-borderc pt-4">
        Some links on this page are affiliate links - see our{" "}
        <Link href="/affiliate-disclosure" className="text-indigo hover:underline">
          affiliate disclosure
        </Link>
        . This doesn't affect our recommendations: tools are ranked by fit, not commission.
      </p>
    </div>
  );
}
