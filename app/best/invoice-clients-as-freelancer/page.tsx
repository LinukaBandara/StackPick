import type { Metadata } from "next";
import ComparisonArticle from "@/components/ComparisonArticle";

export const metadata: Metadata = {
  title: "How to Invoice Clients as a Freelancer (2026)",
  description: "A practical freelance invoicing workflow covering approved scope, invoice details, payment terms, reminders, reconciliation and records.",
  alternates: { canonical: "/best/invoice-clients-as-freelancer" },
};

export default function Page() {
  return (
    <ComparisonArticle
      title="How to Invoice Clients as a Freelancer"
      slug="invoice-clients-as-freelancer"
      intro="A professional invoice is the final step in an agreed piece of work—not a substitute for a clear scope or payment agreement. Freelancers should make it easy for a client to understand what was delivered, how much is due, when payment is expected and how to pay. Keep the quote, approval, invoice, payment record and follow-up connected so nothing is lost in email."
      pricingNote="Invoice numbering, mandatory fields, tax treatment, withholding, currency rules and record-retention requirements vary by jurisdiction and business type. This is a workflow guide, not tax or legal advice. Confirm local requirements with the relevant tax authority or a qualified accountant. Payment gateways and invoicing features may not be available in every country."
      tools={[
        { name: "FreshBooks", bestFor: "Freelancers and service businesses that want client billing, estimates and time-related workflows together", freeOption: "Check current country availability, trial terms, client caps and the plan required for recurring invoices and payment features.", tradeoff: "A billing-focused workflow may be convenient for service work, but compare the total cost and whether you still need separate accounting software.", url: "https://www.freshbooks.com/" },
        { name: "Zoho Invoice", bestFor: "Freelancers who mainly need estimates, invoices, reminders and client billing records", freeOption: "Check the local edition's invoice, user, project, branding and payment limits.", tradeoff: "A dedicated invoicing product is not automatically a full accounting ledger. Confirm whether you need a separate bookkeeping system and whether local payment methods are supported.", url: "https://www.zoho.com/invoice/" },
        { name: "Wave", bestFor: "Businesses in supported countries that want invoicing alongside bookkeeping", freeOption: "Confirm business-country eligibility and current plan features before relying on it.", tradeoff: "Availability and payment processing are region-dependent. Do not assume a US/Canada product page applies to a business registered elsewhere.", url: "https://www.waveapps.com/" },
        { name: "QuickBooks", bestFor: "Freelancers who already use an accounting system and want invoices connected to bookkeeping", freeOption: "Check the country-specific edition, invoice limits, payment options and accountant access.", tradeoff: "A broader accounting product can be unnecessary if you only need to issue a few invoices, but it may reduce duplicate entry when bookkeeping is already managed there.", url: "https://quickbooks.intuit.com/" },
      ]}
      bottomLine="Agree the scope and payment terms first, issue a clear invoice, record the payment and reconcile it against the bank or payment provider."
    >
      <section className="bg-white">
        <div className="sp-container py-16 sm:py-20">
          <p className="sp-eyebrow">StackPick freelance invoicing workflow</p>
          <h2 className="sp-title mt-4 max-w-4xl">From approved work to paid invoice.</h2>
          <ol className="mt-8 list-decimal space-y-4 pl-6 leading-7 text-[#6e6e73]">
            <li><strong className="text-[#101828]">Agree the quote:</strong> describe the deliverables, exclusions, price, currency, deposit, milestones, revision allowance and payment schedule. Keep the client's written approval.</li>
            <li><strong className="text-[#101828]">Confirm invoice details:</strong> use the correct legal business and client details, invoice number, issue date, service description, quantity or milestone, amount, currency, due date and payment instructions. Add tax identifiers or tax lines when required by local rules.</li>
            <li><strong className="text-[#101828]">Issue at the agreed milestone:</strong> check that the deliverable or milestone has been accepted where the agreement requires it. Send the invoice to the agreed billing contact and retain a copy.</li>
            <li><strong className="text-[#101828]">Make payment straightforward:</strong> state accepted payment methods, account details or a supported payment link. Confirm any provider fees and whether the client must pay in a particular currency.</li>
            <li><strong className="text-[#101828]">Follow up consistently:</strong> send a polite reminder after the agreed due date, include the invoice number and amount, and keep a record of the reminder and any revised payment date.</li>
            <li><strong className="text-[#101828]">Reconcile and retain:</strong> match the received amount to the invoice, record fees or partial payments separately, mark the balance correctly and store supporting records securely.</li>
          </ol>
          <h2 className="sp-title mt-14 max-w-4xl">A pre-send invoice checklist</h2>
          <ul className="mt-5 list-disc space-y-2 pl-6 leading-7 text-[#6e6e73]">
            <li>Does the client name and billing address match the agreed contract or purchase order?</li>
            <li>Does the description match the approved work and milestone?</li>
            <li>Are the amount, currency, due date and payment instructions clear?</li>
            <li>Are taxes, withholding or required registration details handled according to local rules?</li>
            <li>Is the invoice number unique and is a copy saved in the correct client record?</li>
          </ul>
          <h2 className="sp-title mt-14 max-w-4xl">Choosing invoicing software</h2>
          <p className="mt-4 max-w-4xl leading-7 text-[#6e6e73]">Test one real invoice from draft to payment reconciliation. Check recurring invoices if you use retainers, deposits and partial payments if projects are milestone-based, multi-currency if you bill overseas, and export if your accountant uses another system. Confirm that the payment method is available to your business's registered country—not just the client's country.</p>
          <p className="mt-6 max-w-4xl leading-7 text-[#6e6e73]">Do not use a generic online invoice template as proof that your invoice meets local tax requirements. Rules differ; check the official requirements for your jurisdiction.</p>
        </div>
      </section>
    </ComparisonArticle>
  );
}
