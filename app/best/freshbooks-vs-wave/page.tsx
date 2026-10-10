import type { Metadata } from "next";
import ComparisonArticle from "@/components/ComparisonArticle";

export const metadata: Metadata = {
  title: "FreshBooks vs Wave (2026)",
  description: "Compare FreshBooks and Wave for freelancers and small service businesses, with emphasis on invoicing, bookkeeping, client workflows and cost.",
  alternates: { canonical: "/best/freshbooks-vs-wave" },
};

export default function Page() {
  return (
    <ComparisonArticle
      title="FreshBooks vs Wave"
      slug="freshbooks-vs-wave"
      intro="Compare FreshBooks and Wave for freelancers and small service businesses, with emphasis on invoicing, bookkeeping, client workflows and cost."
      pricingNote="Pricing, limits and included features can change. Check the providers' current plans before making a decision."
      tools={[
        { name: "FreshBooks", bestFor: "Service businesses needing client and billing workflows", freeOption: "Paid plans and features vary.", tradeoff: "The polished client workflow and time tracking can save admin time, but a recurring subscription is hard to justify if you only send occasional invoices.", url: "https://www.freshbooks.com/" },
        { name: "Wave", bestFor: "Businesses in supported markets wanting simple bookkeeping", freeOption: "Core availability and services vary by region.", tradeoff: "The no-monthly-subscription angle can be attractive, but availability, payment processing fees and country-specific features can change whether it is actually cheaper.", url: "https://www.waveapps.com/" },
      ]}
      bottomLine="Wave is worth checking first if it is available in your country and your workflow is mostly straightforward invoicing. FreshBooks is worth paying for when time tracking, estimates and client-facing workflows save enough effort to offset the subscription. Compare payment fees as well as monthly price."
    >
      <section className="bg-white">
        <div className="sp-container py-16 sm:py-20">
          <p className="sp-eyebrow">StackPick invoicing workflow</p>
          <h2 className="sp-title mt-4 max-w-4xl">Compare the full cost of getting paid.</h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#6e6e73]">
            Create the same quote and invoice in both tools, send it to a test client, record a partial payment and mark the balance overdue. Compare how much effort the workflow takes, which reminders and client features are included, and what payment processing costs would apply in your country. A low monthly price is not the same as a low total cost.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#e4e7ec] bg-[#f7f8fc] p-6"><p className="font-semibold text-[#101828]">Invoice-to-payment</p><p className="mt-2 text-sm leading-6 text-[#667085]">Check estimates, recurring invoices, partial payments and overdue reminders.</p></div>
            <div className="rounded-2xl border border-[#e4e7ec] bg-[#f7f8fc] p-6"><p className="font-semibold text-[#101828]">Fees and availability</p><p className="mt-2 text-sm leading-6 text-[#667085]">Confirm payment methods, transaction fees and country support directly with each provider.</p></div>
            <div className="rounded-2xl border border-[#e4e7ec] bg-[#f7f8fc] p-6"><p className="font-semibold text-[#101828]">Time saved</p><p className="mt-2 text-sm leading-6 text-[#667085]">Include time tracking and client follow-up only if they matter to your actual work.</p></div>
          </div>
        </div>
      </section>
    </ComparisonArticle>
  );
}
