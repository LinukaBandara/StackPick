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
      intro="For freelancers comparing FreshBooks and Wave, geography is the first filter: Wave serves businesses based in the US and Canada. FreshBooks charges by plan and billable-client limit; Wave Starter has no subscription fee, while its Pro plan adds bookkeeping automation for a monthly or annual fee. The US pricing and product details below were checked October 17, 2026."
      pricingNote="US price snapshot checked October 17, 2026, before tax: FreshBooks lists Lite at $23/month for 5 billable clients, Plus at $43/month for 50, and Premium at $70/month for unlimited clients. Wave Starter is $0; Wave Pro is $19/month or $190/year per business. Wave online payment fees vary by plan and payment type, so include them in the cost estimate."
      tools={[
        { name: "FreshBooks", bestFor: "Freelancers and service businesses that want client billing and accounting in one workflow", freeOption: "30-day trial; US monthly list prices are Lite $23 for 5 billable clients, Plus $43 for 50, and Premium $70 for unlimited clients. Active and archived clients count toward the cap.", tradeoff: "The client cap is a major decision point: a growing client roster can require a higher tier. Extra team members and Advanced Payments are paid add-ons, so include them in the ongoing cost.", url: "https://www.freshbooks.com/pricing" },
        { name: "Wave", bestFor: "US- or Canada-based small businesses prioritizing low-cost invoicing and bookkeeping", freeOption: "Starter is $0 with unlimited invoices and basic bookkeeping. Pro is $19/month or $190/year per business and adds bank transaction imports, categorization, receipt capture and other features. Online payments carry processing fees on either plan.", tradeoff: "Wave is available to businesses based in the US and Canada; it is not a global option for businesses based elsewhere. Pro's lower card fee applies only to the first 10 payment transactions in a monthly period, then the standard per-transaction fee applies.", url: "https://www.waveapps.com/pricing" },
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
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#6e6e73]">US provider pricing checked October 17, 2026: FreshBooks lists Lite at $23/month for 5 billable clients, Plus at $43 for 50, and Premium at $70 for unlimited clients; temporary offers may change the first few months. Wave Starter is $0 and Pro is $19/month or $190/year per business. Wave online payments are optional and charge transaction fees. On Starter, Visa/Mastercard/Discover card payments are listed at 2.9% + $0.60 and Amex at 3.4% + $0.60. Pro removes the fixed $0.60 fee for the first 10 monthly card transactions; after that, Starter rates apply. Wave is for businesses based in the US or Canada. This is a desk-based comparison, not a hands-on test.</p>
          <h3 className="mt-8 text-xl font-semibold tracking-tight">Turn the limits into a monthly budget</h3>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#6e6e73]">Using the listed FreshBooks US monthly prices, a business with five billable clients may fit Lite at $23/month; a sixth client exceeds Lite's stated five-client limit, so compare the $43 Plus plan rather than assuming the same price continues. Archived clients count toward the cap too. At 51 billable clients, Plus's 50-client limit becomes the next decision point against Premium at $70/month. These are standard list prices, not a guarantee of the checkout price.</p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-[#e4e7ec]">
            <table className="w-full min-w-[600px] border-collapse text-left text-sm">
              <thead className="bg-[#f7f8fc] text-[#101828]"><tr><th className="border-b border-[#e4e7ec] p-4 font-semibold">Example workload</th><th className="border-b border-[#e4e7ec] p-4 font-semibold">FreshBooks checkpoint</th><th className="border-b border-[#e4e7ec] p-4 font-semibold">Wave checkpoint</th></tr></thead>
              <tbody className="text-[#424245]">
                <tr><td className="border-b border-[#e4e7ec] p-4">5 billable clients</td><td className="border-b border-[#e4e7ec] p-4">Lite is listed at $23/month before temporary offers and add-ons.</td><td className="border-b border-[#e4e7ec] p-4">No Starter subscription fee; check payment processing and feature add-ons.</td></tr>
                <tr><td className="border-b border-[#e4e7ec] p-4">6–50 billable clients</td><td className="border-b border-[#e4e7ec] p-4">Plus is listed at $43/month; check the feature mix too.</td><td className="border-b border-[#e4e7ec] p-4">Estimate fees from actual payment methods and monthly collected volume.</td></tr>
                <tr><td className="p-4">51+ billable clients</td><td className="p-4">Premium is listed at $70/month for unlimited clients.</td><td className="p-4">Confirm whether Starter and paid add-ons support the full workflow you need.</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-5 max-w-3xl text-sm leading-6 text-[#667085]">For a simple illustration of Wave's published 2.9% + $0.60 card rate, a $100 card payment would incur $3.50 in processing fees and a $500 payment would incur $15.10. These examples exclude any other fees and only apply where that published rate and payment method are available; check the current fee schedule for the account's country.</p>
          <h3 className="mt-8 text-xl font-semibold tracking-tight">When Wave is not an option</h3>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#6e6e73]">Wave states that its business accounts are available only to businesses based in the United States and Canada. If your business is based elsewhere, do not compare Wave's $0 Starter price as an available choice; confirm service eligibility and country-specific payment support before spending time on setup. FreshBooks also has regional pricing pages, so use the page for your billing country rather than assuming US dollar figures apply internationally.</p>
          <h3 className="mt-8 text-xl font-semibold tracking-tight">Official sources checked</h3>
          <ul className="mt-4 max-w-3xl list-disc space-y-3 pl-6 text-sm leading-6 text-[#6e6e73]">
            <li><a className="underline underline-offset-4" href="https://www.freshbooks.com/pricing" target="_blank" rel="noreferrer">FreshBooks official pricing and client limits</a>.</li>
            <li><a className="underline underline-offset-4" href="https://support.freshbooks.com/hc/en-us/articles/360006873232-What-is-the-pricing" target="_blank" rel="noreferrer">FreshBooks trial and billing guidance</a>.</li>
            <li><a className="underline underline-offset-4" href="https://support.waveapps.com/hc/en-us/articles/208621296-Is-Wave-free" target="_blank" rel="noreferrer">Wave free versus paid features</a>.</li>
            <li><a className="underline underline-offset-4" href="https://support.waveapps.com/hc/en-us/articles/218323823-Online-payments-processing-fees-and-timelines" target="_blank" rel="noreferrer">Wave online payment-processing fees</a>.</li>
            <li><a className="underline underline-offset-4" href="https://support.waveapps.com/hc/en-us/articles/208621316-Why-can-t-I-change-my-business-currency" target="_blank" rel="noreferrer">Wave supported business countries</a>.</li>
          </ul>
        </div>
      </section>
    </ComparisonArticle>
  );
}
