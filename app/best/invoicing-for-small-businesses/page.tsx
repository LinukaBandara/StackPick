import type { Metadata } from "next";
import ComparisonArticle from "@/components/ComparisonArticle";

export const metadata: Metadata = {
  title: "Best Invoicing Software for Small Businesses (2026)",
  description: "A practical invoicing comparison for small businesses that need repeatable billing, payment tracking and records without turning invoicing into accounting admin.",
  alternates: { canonical: "/best/invoicing-for-small-businesses" },
};

export default function Page() {
  return (
    <ComparisonArticle
      title="Best Invoicing Software for Small Businesses"
      slug="invoicing-for-small-businesses"
      intro="A practical invoicing comparison for small businesses that need repeatable billing, payment tracking and records without turning invoicing into accounting admin."
      pricingNote="Software plans change. Verify current pricing, user limits, regional availability and included features before making a business decision."
      tools={[
        { name: "Zoho Invoice", bestFor: "Dedicated invoicing", freeOption: "Check the provider's current free or trial terms and limits.", tradeoff: "Compare current limits, integrations and upgrade cost before moving a real workflow.", url: "https://www.zoho.com/invoice/" },
        { name: "Wave", bestFor: "Invoicing plus bookkeeping", freeOption: "Check the provider's current free or trial terms and limits.", tradeoff: "Compare current limits, integrations and upgrade cost before moving a real workflow.", url: "https://www.waveapps.com/" },
        { name: "FreshBooks", bestFor: "Service billing and time", freeOption: "Check the provider's current free or trial terms and limits.", tradeoff: "Compare current limits, integrations and upgrade cost before moving a real workflow.", url: "https://www.freshbooks.com/" },
        { name: "QuickBooks", bestFor: "Invoicing inside accounting", freeOption: "Check the provider's current free or trial terms and limits.", tradeoff: "Compare current limits, integrations and upgrade cost before moving a real workflow.", url: "https://quickbooks.intuit.com/" },
      ]}
      bottomLine="The best choice depends on the workflow you actually need to run every week. Start with the smallest system that solves the current problem, then check its limits and exit options before committing."
    >
      <section className="bg-white">
        <div className="sp-container py-16 sm:py-20">
          <p className="sp-eyebrow">StackPick decision test</p>
          <h2 className="sp-title mt-4 max-w-4xl">Test one real workflow before choosing.</h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#6e6e73]">
            Reproduce a normal job from your business in each finalist. Note setup time,
            daily friction, limits, export options and the first paid feature you would actually
            need. A longer feature list is not a better fit if it adds administration.
          </p>
        </div>
      </section>
    </ComparisonArticle>
  );
}
