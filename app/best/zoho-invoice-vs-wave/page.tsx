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
      reviewedOn="2026-11-08"
      quickAnswer="Choose Zoho Invoice if you mainly need invoicing, recurring billing and reminders, and its country edition supports your business. Choose Wave if your business is based in the US or Canada and you also want simple bookkeeping. Compare payment-processing fees and country eligibility before choosing; the two free plans are not interchangeable."
      intro="Zoho Invoice and Wave are not like-for-like products: Zoho Invoice focuses on billing, while Wave also offers bookkeeping. Zoho Invoice is free with limits of 2 users, 3 projects and 500 invoices per year. Wave Starter is free with unlimited invoices and basic bookkeeping records, but Wave business accounts are for businesses based in the US or Canada. Compare the job you need done, your country and payment fees before choosing. Provider details checked November 8, 2026."
      pricingNote="US price and plan snapshot checked November 8, 2026: Zoho Invoice is $0 for up to 2 users, 3 projects and 500 invoices/year, with up to 2 organizations per account. Wave Starter is $0; Wave Pro is $19/month or $190/year per business. Starter card fees are 2.9% + $0.60 (Visa/Mastercard/Discover) and 3.4% + $0.60 (Amex); ACH is 1% with a $1 minimum. Pro removes the fixed card fee for the first 10 transactions per monthly subscription period, then Starter rates apply. Prices exclude tax and eligibility/availability can vary."
      tools={[
        { name: "Zoho Invoice", bestFor: "Freelancers and service businesses focused on quotes, invoices, projects and payment reminders", freeOption: "The US edition is listed at $0 for up to 2 users, 3 projects and 500 invoices per year. Zoho says invoice usage limits reset annually based on the organization's creation date; check Usage Stats for remaining invoices. The US pricing page also states that accounts inactive for over 180 days have associated data deleted in the following 20 days after notice, so maintain a regular sign-in and backup routine.", tradeoff: "Zoho Invoice is a billing product, not a full accounting ledger: Zoho's product comparison lists banking, inventory and journal entries in Zoho Books, not Zoho Invoice. The invoice cap, user cap and Zoho branding may matter as the business grows.", url: "https://www.zoho.com/us/invoice/pricing/" },
        { name: "Wave", bestFor: "US- or Canada-based businesses wanting invoicing and bookkeeping in one account", freeOption: "Starter costs $0 and includes unlimited estimates, invoices, bills and bookkeeping records. Pro is $19 USD/month billed monthly or $190/year billed annually per business. It adds bank transaction imports, automatic transaction matching and categorization, receipt capture and automated late-payment reminders. Bank connections depend on financial-institution support; Starter users can manually upload statements but do not get automatic bank imports.", tradeoff: "Wave is available only to businesses based in the US and Canada. Payment processing costs extra on either plan; Pro's reduced card fee applies to the first 10 transactions in a monthly period, then the standard per-transaction rate applies.", url: "https://www.waveapps.com/pricing" },
      ]}
      bottomLine="Compare these two against your country and payment workflow first: confirm that each supports the way your clients pay, then check invoice limits, recurring billing, reminders and expense tracking. If both fit, choose the one that needs less manual work—not simply the one with the lowest advertised price."
    >
      <section className="bg-white">
        <div className="sp-container py-16 sm:py-20">
          <p className="sp-eyebrow">StackPick comparison method</p>
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
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#6e6e73]">Provider pages checked November 8, 2026. The US Zoho Invoice edition is free for up to 2 users, 3 projects and 500 invoices per year, with up to 2 organizations per account. Its published pricing page warns that accounts inactive for over 180 days have associated data deleted in the following 20 days after notice. Wave Starter is $0; Pro is $19 USD/month or $190/year per business. Starter card fees are 2.9% + $0.60 for Visa/Mastercard/Discover and 3.4% + $0.60 for Amex; ACH is 1% with a $1 minimum. Pro's $0 fixed component applies only to the first 10 cumulative transactions in each monthly subscription period; later card transactions use Starter's fixed fee. Online payment approval is subject to eligibility checks. This is desk research, not a hands-on test.</p>
          <h3 className="mt-8 text-xl font-semibold tracking-tight">Choose based on whether you need invoicing or bookkeeping</h3>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#6e6e73]">Zoho Invoice is designed around customer billing. Zoho's Invoice-versus-Books comparison shows banking, inventory and journal entries in Zoho Books rather than Zoho Invoice. Wave's Starter plan includes basic bookkeeping records; Wave Pro adds automatic bank imports and transaction categorization when the business's financial institution is supported. If you need bank reconciliation and a broader ledger, compare Wave with Zoho Books—not just Zoho Invoice—and confirm the accounting features for your country.</p>
          <h3 className="mt-8 text-xl font-semibold tracking-tight">Check country eligibility before setup</h3>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#6e6e73]">Wave says its business accounts are available only to businesses based in the United States and Canada. Zoho Invoice provides country editions; its limits, tax setup and payment gateways can differ by edition. This page's numerical Zoho plan details and prices are for the US edition and should not be treated as a quote or feature guarantee for other markets.</p>
          <ul className="mt-5 max-w-3xl list-disc space-y-3 pl-6 text-sm leading-6 text-[#6e6e73]">
            <li><a className="underline underline-offset-4" href="https://www.zoho.com/us/invoice/pricing/" target="_blank" rel="noreferrer">Zoho Invoice US pricing and limits</a>.</li>
            <li><a className="underline underline-offset-4" href="https://www.zoho.com/us/invoice/kb/general/invoices-creation-free.html" target="_blank" rel="noreferrer">Zoho’s annual invoice-usage-limit explanation</a>.</li>
            <li><a className="underline underline-offset-4" href="https://www.zoho.com/us/invoice/invoice-to-books.html" target="_blank" rel="noreferrer">Zoho Invoice versus Zoho Books feature comparison</a>.</li>
            <li><a className="underline underline-offset-4" href="https://www.waveapps.com/pricing" target="_blank" rel="noreferrer">Wave Starter and Pro pricing</a>.</li>
            <li><a className="underline underline-offset-4" href="https://support.waveapps.com/hc/en-us/articles/208621296-Is-Wave-free" target="_blank" rel="noreferrer">Wave Starter versus Pro plan details</a>.</li>
            <li><a className="underline underline-offset-4" href="https://support.waveapps.com/hc/en-us/articles/218323823-Online-payments-processing-fees-and-timelines" target="_blank" rel="noreferrer">Wave payment-processing fees</a>.</li>
            <li><a className="underline underline-offset-4" href="https://support.waveapps.com/hc/en-us/articles/208621316-Why-can-t-I-change-my-business-currency" target="_blank" rel="noreferrer">Wave supported business countries</a>.</li>
          </ul>
        </div>
      </section>
    </ComparisonArticle>
  );
}
