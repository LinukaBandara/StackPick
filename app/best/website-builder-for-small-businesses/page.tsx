import type { Metadata } from "next";
import ComparisonArticle from "@/components/ComparisonArticle";

export const metadata: Metadata = {
  title: "Best Website Builder for Small Businesses (2026)",
  description: "Compare website builders for small businesses that need a credible site, easy editing and a sensible path from launch to ongoing maintenance.",
  alternates: { canonical: "/best/website-builder-for-small-businesses" },
};

export default function Page() {
  return (
    <ComparisonArticle
      title="Best Website Builder for Small Businesses"
      slug="website-builder-for-small-businesses"
      intro="Compare website builders for small businesses that need a credible site, easy editing and a sensible path from launch to ongoing maintenance."
      pricingNote="Plans, limits and included features can change. Verify the provider's current pricing and terms before publishing a site or moving a live business workflow."
      tools={[
        { name: "Wix", bestFor: "All-in-one small-business websites", freeOption: "Check the provider's current free or trial terms and limits.", tradeoff: "Compare booking, publishing, collaboration and upgrade limits against your actual workflow.", url: "https://www.wix.com/" },
        { name: "Squarespace", bestFor: "Polished service-business sites", freeOption: "Check the provider's current free or trial terms and limits.", tradeoff: "Compare booking, publishing, collaboration and upgrade limits against your actual workflow.", url: "https://www.squarespace.com/" },
        { name: "WordPress.com", bestFor: "Flexible content-focused sites", freeOption: "Check the provider's current free or trial terms and limits.", tradeoff: "Compare booking, publishing, collaboration and upgrade limits against your actual workflow.", url: "https://wordpress.com/" },
        { name: "Webflow", bestFor: "Businesses wanting deeper design control", freeOption: "Check the provider's current free or trial terms and limits.", tradeoff: "Compare booking, publishing, collaboration and upgrade limits against your actual workflow.", url: "https://webflow.com/" },
      ]}
      bottomLine="Choose the smallest tool that handles the work you actually do. Before committing, test the normal workflow from setup through the first real customer or client task, then check what happens when you hit the free-plan or entry-tier limit."
    >
      <section className="bg-white">
        <div className="sp-container py-16 sm:py-20">
          <p className="sp-eyebrow">StackPick reality check</p>
          <h2 className="sp-title mt-4 max-w-4xl">The free plan is only useful if it survives your normal workflow.</h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#6e6e73]">
            Test the job you would repeat every week: create the project, add the people or
            content you need, complete the normal task, and try the export or handoff step.
            Then identify the first restriction that would force an upgrade. That is more useful
            than comparing feature counts in isolation.
          </p>
        </div>
      </section>
    </ComparisonArticle>
  );
}
