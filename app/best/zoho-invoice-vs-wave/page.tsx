import type { Metadata } from "next";
import ComparisonArticle from "@/components/ComparisonArticle";

export const metadata: Metadata = {
  title: "Zoho Invoice vs Wave (2026)",
  description: "Compare Zoho Invoice and Wave for small businesses and freelancers choosing between dedicated invoicing and a broader bookkeeping workflow.",
  alternates: { canonical: "/best/zoho-invoice-vs-wave" },
};

export default function Page() {
  return (
    <ComparisonArticle
      title="Zoho Invoice vs Wave"
      slug="zoho-invoice-vs-wave"
      intro="Compare Zoho Invoice and Wave for small businesses and freelancers choosing between dedicated invoicing and a broader bookkeeping workflow."
      pricingNote="Pricing, limits and included features can change. Check the providers' current plans before making a decision."
      tools={[
        { name: "Zoho Invoice", bestFor: "Dedicated invoicing workflows", freeOption: "Zoho’s US page describes it as free, with up to 2 users, 3 projects and 500 invoices per year. Check current usage limits, which can be updated annually.", tradeoff: "Recurring invoices, quotes, reminders, expense tracking and a customer portal are included in the published offer; the annual invoice cap and user limit matter as you grow.", url: "https://www.zoho.com/invoice/" },
        { name: "Wave", bestFor: "Invoicing plus bookkeeping in supported markets", freeOption: "Wave Starter is free and includes basic accounting and invoicing; online payments, automatic receipt scanning and payroll can cost extra.", tradeoff: "Wave publishes US/Canada payment processing rates; for example, card payments on Starter are listed at 2.9% + $0.60 for Visa, Mastercard and Discover, with different rates for other methods. Confirm eligibility and current fees.", url: "https://www.waveapps.com/" },
      ]}
      bottomLine="Compare these two against your country and payment workflow first: confirm that each supports the way your clients pay, then check invoice limits, recurring billing, reminders and expense tracking. If both fit, choose the one that needs less manual work—not simply the one with the lowest advertised price."
    >
      <section className="bg-white">
        <div className="sp-container py-16 sm:py-20">
          <p className="sp-eyebrow">StackPick head-to-head test</p>
          <h2 className="sp-title mt-4 max-w-4xl">Don't compare features. Compare the job.</h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#6e6e73]">
            Use one realistic workflow and run it through both products. Record setup time,
            clicks, limits, collaboration friction, exports, integrations and the first feature
            that requires an upgrade. The winner should make the recurring job easier, not simply
            have the longer feature list.
          </p>
        </div>
        <div className="sp-container pb-16 sm:pb-20">
          <h3 className="text-2xl font-semibold tracking-tight">Free plan limits and payment costs</h3>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#6e6e73]">Checked against provider pages on October 14, 2026. Zoho Invoice’s US page lists up to two users, three projects and 500 invoices per year. Wave Starter has no monthly subscription fee, but online payment processing and certain add-ons cost extra. Wave’s published Starter rate for Visa, Mastercard and Discover is 2.9% + $0.60 per card transaction; rates and eligibility vary by payment method and country. This is a desk-based comparison, not a hands-on test.</p>
          <ul className="mt-5 max-w-3xl list-disc space-y-3 pl-6 text-sm leading-6 text-[#6e6e73]">
            <li><a className="underline underline-offset-4" href="https://www.zoho.com/us/invoice/pricing/" target="_blank" rel="noreferrer">Zoho Invoice US pricing and limits</a>.</li>
            <li><a className="underline underline-offset-4" href="https://www.zoho.com/us/invoice/kb/general/invoices-creation-free.html" target="_blank" rel="noreferrer">Zoho’s annual invoice-usage-limit explanation</a>.</li>
            <li><a className="underline underline-offset-4" href="https://support.waveapps.com/hc/en-us/articles/208621296-Is-Wave-free" target="_blank" rel="noreferrer">Wave Starter versus Pro plan details</a>.</li>
            <li><a className="underline underline-offset-4" href="https://support.waveapps.com/hc/en-us/articles/218323823-Online-payments-processing-fees-and-timelines" target="_blank" rel="noreferrer">Wave payment-processing fees</a>.</li>
          </ul>
        </div>
      </section>
    </ComparisonArticle>
  );
}
