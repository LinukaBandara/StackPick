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
        { name: "FreshBooks", bestFor: "Service businesses needing client and billing workflows", freeOption: "30-day free trial; standard US list prices shown are $23/month for Lite (5 billable clients), $43 for Plus (50 clients) and $70 for Premium (unlimited clients), before temporary offers.", tradeoff: "The client cap is a major decision point: Lite can fit a small client roster, but a growing freelancer may need Plus or Premium. Add-ons such as extra team members and advanced payments can raise the total.", url: "https://www.freshbooks.com/" },
        { name: "Wave", bestFor: "Businesses in supported markets wanting simple bookkeeping", freeOption: "Wave Starter is free and includes basic accounting and invoicing; online payment processing, automatic receipt scanning and payroll may cost extra.", tradeoff: "Wave can keep subscription costs down in supported markets, but compare transaction fees and paid add-ons with FreshBooks’ subscription and client limits.", url: "https://www.waveapps.com/" },
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
      <section className="bg-[#f5f5f7] border-t border-black/[0.06]">
        <div className="sp-container py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1d1d1f]">Compare the limits that affect your real bill</h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#6e6e73]">FreshBooks’ US pricing page lists standard monthly prices of $23 for Lite (5 billable clients), $43 for Plus (50 clients) and $70 for Premium (unlimited clients); promotions can temporarily reduce the displayed price. FreshBooks offers a 30-day trial. Wave Starter has no monthly subscription fee, while online payment processing and selected features are paid. Wave’s published Starter card rate for Visa, Mastercard and Discover is 2.9% + $0.60 per transaction. Confirm current rates, supported countries and your likely client count before choosing. This is a desk-based comparison, not a hands-on test.</p>
          <h3 className="mt-8 text-xl font-semibold tracking-tight">Official sources checked</h3>
          <ul className="mt-4 max-w-3xl list-disc space-y-3 pl-6 text-sm leading-6 text-[#6e6e73]">
            <li><a className="underline underline-offset-4" href="https://www.freshbooks.com/pricing" target="_blank" rel="noreferrer">FreshBooks official pricing and client limits</a>.</li>
            <li><a className="underline underline-offset-4" href="https://support.freshbooks.com/hc/en-us/articles/360006873232-What-is-the-pricing" target="_blank" rel="noreferrer">FreshBooks trial and billing guidance</a>.</li>
            <li><a className="underline underline-offset-4" href="https://support.waveapps.com/hc/en-us/articles/208621296-Is-Wave-free" target="_blank" rel="noreferrer">Wave free versus paid features</a>.</li>
            <li><a className="underline underline-offset-4" href="https://support.waveapps.com/hc/en-us/articles/218323823-Online-payments-processing-fees-and-timelines" target="_blank" rel="noreferrer">Wave online payment-processing fees</a>.</li>
          </ul>
        </div>
      </section>
    </ComparisonArticle>
  );
}
