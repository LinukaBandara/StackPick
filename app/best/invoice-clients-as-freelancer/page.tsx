import type { Metadata } from "next";
import ComparisonArticle from "@/components/ComparisonArticle";

export const metadata: Metadata = {
  title: "How to Invoice Clients as a Freelancer (2026)",
  description: "A straightforward invoicing workflow covering client details, payment terms, reminders and records.",
  alternates: { canonical: "/best/invoice-clients-as-freelancer" },
};

export default function Page() {
  return (
    <ComparisonArticle
      title="How to Invoice Clients as a Freelancer"
      slug="invoice-clients-as-freelancer"
      intro="A straightforward invoicing workflow covering client details, payment terms, reminders and records."
      pricingNote="Software plans, features and limits change. Verify current provider documentation before making a business decision."
      tools={[
        { name: "HubSpot", bestFor: "Customer and lead workflows", freeOption: "Check current plan terms.", tradeoff: "Can become broader than a very small workflow needs.", url: "https://www.hubspot.com/" },
        { name: "Notion", bestFor: "Flexible documentation and lightweight workflows", freeOption: "Check current plan terms.", tradeoff: "Flexible systems require more setup discipline.", url: "https://www.notion.com/" },
        { name: "Trello", bestFor: "Simple visual task workflows", freeOption: "Check current plan terms.", tradeoff: "Advanced operational workflows may need more structure.", url: "https://trello.com/" },
        { name: "Zoho", bestFor: "Connected small-business software", freeOption: "Check the relevant product's current plan.", tradeoff: "A wider ecosystem can require more configuration.", url: "https://www.zoho.com/" },
      ]}
      bottomLine="Make the invoice clear, repeatable and easy to pay."
    >
      <section className="bg-white">
        <div className="sp-container py-16 sm:py-20">
          <p className="sp-eyebrow">StackPick practical workflow</p>
          <h2 className="sp-title mt-4 max-w-4xl">Make the invoice clear, repeatable and easy to pay.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#e4e7ec] bg-[#f7f8fc] p-6">
              <p className="font-semibold text-[#101828]">1. Define the job</p>
              <p className="mt-2 text-sm leading-6 text-[#667085]">Write down the exact task, trigger, owner and desired outcome before choosing software.</p>
            </div>
            <div className="rounded-2xl border border-[#e4e7ec] bg-[#f7f8fc] p-6">
              <p className="font-semibold text-[#101828]">2. Test the workflow</p>
              <p className="mt-2 text-sm leading-6 text-[#667085]">Run a realistic example from start to finish instead of comparing feature checklists.</p>
            </div>
            <div className="rounded-2xl border border-[#e4e7ec] bg-[#f7f8fc] p-6">
              <p className="font-semibold text-[#101828]">3. Check the exit</p>
              <p className="mt-2 text-sm leading-6 text-[#667085]">Confirm exports, integrations, limits and what happens if the business outgrows the plan.</p>
            </div>
          </div>
        </div>
      </section>
    </ComparisonArticle>
  );
}
