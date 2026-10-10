import type { Metadata } from "next";
import ComparisonArticle from "@/components/ComparisonArticle";

export const metadata: Metadata = {
  title: "HubSpot vs Pipedrive (2026)",
  description: "Compare HubSpot and Pipedrive for freelancers and small businesses by CRM setup, sales workflow, automation, pricing structure and day-to-day complexity.",
  alternates: { canonical: "/best/hubspot-vs-pipedrive" },
};

export default function Page() {
  return (
    <ComparisonArticle
      title="HubSpot vs Pipedrive"
      slug="hubspot-vs-pipedrive"
      intro="Compare HubSpot and Pipedrive for freelancers and small businesses by CRM setup, sales workflow, automation, pricing structure and day-to-day complexity."
      pricingNote="Pricing, limits and included features can change. Check the providers' current plans before making a decision."
      tools={[
        { name: "HubSpot", bestFor: "Businesses wanting a broad CRM with marketing and sales tools", freeOption: "Free CRM option available; verify current limits.", tradeoff: "The breadth is useful if marketing and sales data need to live together, but the jump from free basics to advanced automation can change the total cost quickly.", url: "https://www.hubspot.com/" },
        { name: "Pipedrive", bestFor: "Sales-focused teams wanting a straightforward pipeline", freeOption: "Paid plans and trial terms vary.", tradeoff: "The pipeline-first workflow keeps deal stages visible, but it is less compelling if your work is mostly relationship tracking rather than a repeatable sales process.", url: "https://www.pipedrive.com/" },
      ]}
      bottomLine="Start with HubSpot if you need contact management plus room to connect marketing activity; choose Pipedrive if sales stages, follow-up discipline and deal forecasting are the main job. Before committing, price the exact number of users and the automation/reporting features you expect to use."
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
      </section>
    </ComparisonArticle>
  );
}
