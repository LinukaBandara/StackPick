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
        { name: "HubSpot", bestFor: "Businesses wanting a broad CRM with marketing and sales tools", freeOption: "Free CRM option available; verify current limits.", tradeoff: "Compare the same real task in both tools before choosing.", url: "https://www.hubspot.com/" },
        { name: "Pipedrive", bestFor: "Sales-focused teams wanting a straightforward pipeline", freeOption: "Paid plans and trial terms vary.", tradeoff: "Compare the same real task in both tools before choosing.", url: "https://www.pipedrive.com/" },
      ]}
      bottomLine="There is no universal winner. The better tool is the one that handles your normal workflow with less friction at the price you can justify. Test the same job in both products before switching."
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
