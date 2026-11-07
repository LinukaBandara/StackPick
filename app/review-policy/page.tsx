import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Editorial Review Policy",
  description: "How StackPick evaluates software, handles evidence, maintains editorial independence and corrects errors.",
  alternates: { canonical: "/review-policy" },
};

const CRITERIA = [
  {
    title: "Use-case fit",
    body: "Who the product is designed for, which jobs it can reasonably support, and where it may be a poor fit. We describe the intended reader rather than declaring a universal winner.",
  },
  {
    title: "Pricing and total cost",
    body: "Published plan prices, billing commitments, per-seat charges, introductory offers, add-ons, usage charges, taxes and regional availability where these are material. We distinguish permanent free plans from trials.",
  },
  {
    title: "Limits and scalability",
    body: "Relevant caps on users, contacts, projects, storage, automations, transactions, exports and other usage. We explain when a reader may outgrow a plan.",
  },
  {
    title: "Workflow and capabilities",
    body: "Core features, setup effort, collaboration, integrations and the practical workflow described in vendor documentation. A feature list alone is not proof that a workflow is easy or effective.",
  },
  {
    title: "Trade-offs and control",
    body: "Important restrictions, lock-in considerations, data export, support limitations and dependencies that could affect a buying decision.",
  },
];

export default function ReviewPolicyPage() {
  return (
    <div className="w-full bg-white">
      <div className="sp-container max-w-3xl py-16 sm:py-24">
        <p className="sp-eyebrow text-xs uppercase tracking-wider">Editorial standards</p>
        <h1 className="sp-title mt-3 text-[#1d1d1f]">Our review policy</h1>
        <p className="mt-6 text-base leading-7 text-[#6e6e73] sm:text-lg">
          StackPick evaluates software to help freelancers and small businesses understand
          product fit, actual costs and important limitations. This policy explains what
          our editorial reviews mean, how we use evidence and how readers can challenge an error.
        </p>

        <section className="mt-10 rounded-3xl border border-black/10 bg-[#f5f5f7] p-6 sm:p-8">
          <p className="sp-eyebrow">What a StackPick review means</p>
          <h2 className="mt-3 text-xl font-semibold tracking-tight text-[#1d1d1f]">Evidence-led editorial research, not an automatic product endorsement.</h2>
          <p className="mt-3 text-sm leading-7 text-[#4b5563]">
            Unless a page explicitly documents a hands-on test, our assessment is based on
            desk research using public vendor materials and other identified sources. We do
            not imply that we purchased, installed or independently tested every product.
            We do not publish a numerical rating or star score where we cannot support it.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-[#1d1d1f]">What we evaluate</h2>
          <div className="mt-5 space-y-6">
            {CRITERIA.map((item, index) => (
              <div key={item.title} className="border-t border-black/[0.08] pt-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#6e6e73]">Criterion 0{index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold text-[#1d1d1f]">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#6e6e73]">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 border-t border-black/[0.08] pt-8">
          <h2 className="text-2xl font-semibold tracking-tight text-[#1d1d1f]">Evidence standards</h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-[#6e6e73]">
            <p>We prioritize official pricing pages, product documentation, help centres, release notes and terms. Third-party reporting may add context, but it does not override a provider's current published terms without a clear reason.</p>
            <p>We record the editorial review date shown on each profile. That date means the profile received an editorial review; it is not a guarantee that every vendor detail remains unchanged after that date. Readers should confirm current terms with the provider before purchasing.</p>
            <p>When information cannot be confirmed, we should say so, qualify the claim or omit it. We do not invent plan prices, product tests, customer experiences or review scores.</p>
          </div>
        </section>

        <section className="mt-12 border-t border-black/[0.08] pt-8">
          <h2 className="text-2xl font-semibold tracking-tight text-[#1d1d1f]">Corrections and updates</h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-[#6e6e73]">
            <p>Readers and software providers can report an outdated price, incorrect limit, broken link, misleading description or other material issue. Include the page URL and a source that helps us verify the proposed correction.</p>
            <p>We assess reports against available evidence, update the relevant page when a correction is supported, and revise its editorial review date when the profile receives a substantive review. Sending a report does not guarantee that a proposed change will be accepted.</p>
            <p>We do not accept payment in exchange for removing legitimate criticism or changing an editorial conclusion.</p>
          </div>
          <Link href="/report-an-issue" className="mt-6 inline-flex min-h-11 items-center rounded-full bg-[#001D39] px-5 text-sm font-semibold text-white hover:opacity-90">Report an issue</Link>
        </section>

        <section className="mt-12 border-t border-black/[0.08] pt-8">
          <h2 className="text-2xl font-semibold tracking-tight text-[#1d1d1f]">User reviews and commercial relationships</h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-[#6e6e73]">
            <p>StackPick does not currently publish a public user-rating system on software profiles. We will not present invented testimonials, anonymous star averages or unverified customer quotes as genuine reviews. If user reviews are introduced, the collection, moderation, verification and conflict-of-interest rules will be published before they go live.</p>
            <p>Vendor access, free accounts, sponsorships or affiliate relationships must not determine an editorial conclusion. Any material commercial relationship will be disclosed on the relevant pages and in our <Link href="/affiliate-disclosure" className="font-medium text-[#001D39] underline underline-offset-4">affiliate disclosure</Link>.</p>
          </div>
        </section>

        <p className="mt-12 border-t border-black/[0.08] pt-6 text-xs leading-6 text-[#6e6e73]">
          This policy describes StackPick's current editorial approach. Read <Link href="/how-we-verify" className="font-medium text-[#001D39] underline underline-offset-4">How we verify</Link> for the research workflow or <Link href="/contact" className="font-medium text-[#001D39] underline underline-offset-4">contact us</Link> with other questions.
        </p>
      </div>
    </div>
  );
}
