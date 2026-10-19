import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How We Verify Software Information",
  description:
    "Learn how StackPick researches software pricing, free-plan limits, feature fit, trade-offs, and corrections.",
  alternates: { canonical: "/how-we-verify" },
};

const STEPS = [
  {
    title: "1. Start with the vendor's own documentation",
    body:
      "We prioritize official pricing pages, plan comparison tables, help centers, product documentation, and terms. Third-party reviews can provide context, but they do not replace the provider's published terms.",
  },
  {
    title: "2. Separate price from total cost",
    body:
      "We distinguish advertised starting prices from the plan or add-ons a small business may actually need. Where relevant, we note billing cadence, per-seat charges, usage caps, onboarding costs, and whether taxes or payment processing are separate.",
  },
  {
    title: "3. Explain free-plan limits precisely",
    body:
      "A free plan is not automatically suitable for every workflow. We look for limits such as users, contacts, projects, storage, automation runs, branding, exports, and access to support. If a limit or current price cannot be confirmed from available public information, we say so rather than inventing a number.",
  },
  {
    title: "4. Compare tools against a real job",
    body:
      "We assess fit for a defined reader and use case, including setup effort, workflow, collaboration, integrations, data export, and the point where a product may become too limited or expensive. The best choice depends on the reader's needs; we do not treat one universal winner as appropriate for everyone.",
  },
  {
    title: "5. Make evidence and uncertainty visible",
    body:
      "Software plans change. Readers should use the linked provider pages to confirm current terms before buying or migrating. Unless an article explicitly describes a hands-on test, it should be read as desk research, not as a claim that StackPick independently tested every product.",
  },
  {
    title: "6. Correct material errors",
    body:
      "If you find an outdated price, incorrect limit, broken link, or other material error, email us with the page URL and supporting details. We review the report and update the page when the evidence supports a correction.",
  },
];

export default function HowWeVerifyPage() {
  return (
    <div className="w-full bg-white">
      <div className="sp-container max-w-3xl py-16 sm:py-24">
        <p className="sp-eyebrow text-xs uppercase tracking-wider">Editorial methodology</p>
        <h1 className="sp-title mt-3 text-[#1d1d1f]">How we verify software information</h1>
        <p className="mt-6 text-base leading-7 text-[#6e6e73] sm:text-lg">
          StackPick helps freelancers and small businesses compare software based on the work
          they need to do, the cost they can afford, and the limitations they should understand
          before committing. This page explains our research process and what it does—and does
          not—claim.
        </p>

        <div className="mt-10 space-y-8">
          {STEPS.map((step) => (
            <section key={step.title} className="border-t border-black/[0.08] pt-6">
              <h2 className="text-xl font-semibold tracking-tight text-[#1d1d1f]">{step.title}</h2>
              <p className="mt-3 text-base leading-7 text-[#6e6e73]">{step.body}</p>
            </section>
          ))}
        </div>

        <section className="mt-10 border-t border-black/[0.08] pt-6">
          <h2 className="text-xl font-semibold tracking-tight text-[#1d1d1f]">Editorial independence</h2>
          <p className="mt-3 text-base leading-7 text-[#6e6e73]">
            Vendor links currently go directly to providers, and StackPick does not currently
            earn affiliate commissions from them. If this changes, we will disclose commercial
            relationships on relevant pages and update our{" "}
            <Link href="/affiliate-disclosure" className="font-medium text-[#001D39] underline underline-offset-4">
              affiliate disclosure
            </Link>.
            Our goal is to explain trade-offs, including when a product is not a good fit.
          </p>
          <p className="mt-4 text-sm leading-6 text-[#6e6e73]">
            Last updated: October 19, 2026. To report a correction, visit our{" "}
            <Link href="/contact" className="font-medium text-[#001D39] underline underline-offset-4">
              contact page
            </Link>.
          </p>
        </section>
      </div>
    </div>
  );
}
