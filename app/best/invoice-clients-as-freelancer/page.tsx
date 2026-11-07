import type { Metadata } from "next";
import ComparisonArticle from "@/components/ComparisonArticle";

export const metadata: Metadata = {
  title: "How to Invoice Clients as a Freelancer (2026)",
  description: "Build a reliable freelance invoicing process: what to include, when to bill, how to follow up and which software workflows to compare.",
  alternates: { canonical: "/best/invoice-clients-as-freelancer" },
};

export default function Page() {
  return (
    <ComparisonArticle
      title="How to Invoice Clients as a Freelancer"
      slug="invoice-clients-as-freelancer"
      reviewedOn="2026-11-07"
      intro="A good invoice does more than request money. It records the agreed work, explains when payment is due and gives the client everything needed to pay without another email. Build a repeatable process before choosing an invoicing app."
      quickAnswer="A reliable freelance invoicing process starts with a clear scope, itemised charges, invoice number, issue date, due date, currency and payment instructions. Choose software only after checking the payment methods your clients can use, the records your accountant needs and the plan limits you may outgrow."
      pricingNote="Provider plan details checked November 7, 2026. FreshBooks offers a 30-day no-card trial but no permanent free plan; US Lite supports 5 billable clients and Plus 50. QuickBooks Free is US-only reference pricing at $0, one user, 2 invoices/month and one connected bank, with a QuickBooks Payments exception. Zoho Invoice's US Free plan supports 2 users, 3 projects and 500 invoices/year. Wave is for eligible US/Canada businesses. Payment fees, taxes, currency and gateways are regional."
      tools={[
        { name: "FreshBooks", bestFor: "Freelancers who want invoicing connected to time tracking and client records", freeOption: "30-day trial with no credit card required; not a permanent free plan. US Lite supports 5 billable clients, Plus 50; archived clients can still count toward the cap.", tradeoff: "A broader service-business workflow can be useful, but may cost more than a freelancer who only sends occasional invoices needs.", url: "https://www.freshbooks.com/pricing" },
        { name: "QuickBooks", bestFor: "Freelancers who want invoices alongside bookkeeping and financial reports", freeOption: "US Free plan: 1 user, no accountant access, 2 invoices/month and 1 connected bank; eligible QuickBooks Payments users may have a different invoice allowance.", tradeoff: "Accounting depth can help as the business grows, but setup and features may be excessive if the only requirement is sending invoices.", url: "https://quickbooks.intuit.com/online/free/" },
        { name: "Zoho Invoice", bestFor: "Small businesses looking for a dedicated invoicing workflow within the Zoho ecosystem", freeOption: "US Free plan: up to 2 users, 3 projects and 500 invoices/year; includes Zoho branding. Check the country edition and payment-gateway availability.", tradeoff: "A focused invoicing product may be enough, but check payment-gateway support and whether it connects cleanly to your existing accounting tools.", url: "https://www.zoho.com/us/invoice/pricing/" },
        { name: "Wave", bestFor: "Freelancers who want to evaluate invoicing with lightweight accounting", freeOption: "Wave Starter is available to eligible businesses in the US and Canada. The invoicing software has no monthly subscription fee; card/ACH payment processing and payout eligibility are separate and region-specific.", tradeoff: "Regional availability is an important constraint, so do not assume every payment feature works where your clients or business are based.", url: "https://www.waveapps.com/pricing" },
      ]}
      bottomLine="Send a clear invoice from an agreed scope, set a specific due date, and keep payment status in one place. Choose software only after confirming it supports your country, currency, payment method and record-keeping needs."
    >
      <section className="rounded-3xl bg-[#f5f5f7] p-6 sm:p-9">
        <p className="sp-eyebrow">Freelancer invoicing workflow</p>
        <h2 className="sp-title mt-3">Create an invoice the client can approve and pay quickly.</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-white p-5"><h3 className="font-semibold text-[#1d1d1f]">Identify both parties</h3><p className="mt-2 text-sm leading-6 text-[#6e6e73]">Include your business or trading name and contact details, the client's correct billing name and address, and a unique invoice number.</p></div>
          <div className="rounded-2xl bg-white p-5"><h3 className="font-semibold text-[#1d1d1f]">Describe the agreed work</h3><p className="mt-2 text-sm leading-6 text-[#6e6e73]">List the service, deliverable, quantity or milestone, rate, currency, agreed discounts and any applicable tax as separate, understandable items.</p></div>
          <div className="rounded-2xl bg-white p-5"><h3 className="font-semibold text-[#1d1d1f]">Make payment terms explicit</h3><p className="mt-2 text-sm leading-6 text-[#6e6e73]">State the issue date, due date, accepted payment methods, bank or payment instructions and how the client should reference the transfer.</p></div>
          <div className="rounded-2xl bg-white p-5"><h3 className="font-semibold text-[#1d1d1f]">Keep a payment trail</h3><p className="mt-2 text-sm leading-6 text-[#6e6e73]">Record when the invoice was sent, reminders, partial payments, the final receipt and any credit note or correction.</p></div>
        </div>
      </section>
      <section className="rounded-3xl border border-[#e4e7ec] p-6 sm:p-9">
        <p className="sp-eyebrow">Before you send</p>
        <h2 className="sp-title mt-3">A short invoice quality check.</h2>
        <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-[#424245]">
          <li>Does the invoice match the proposal, contract or approved milestone?</li>
          <li>Are the amount, currency, due date and payment instructions unambiguous?</li>
          <li>Have you agreed whether a deposit, milestone payment or late fee applies before adding it?</li>
          <li>Can you export invoices and payment records if you change software later?</li>
          <li>Have you checked local tax, invoice-numbering and record-retention rules with an appropriate authority or adviser?</li>
        </ul>
        <p className="mt-5 text-xs leading-6 text-[#6e6e73]">This is an operational checklist, not tax or legal advice. Requirements vary by jurisdiction and business status.</p>
      </section>
    </ComparisonArticle>
  );
}
