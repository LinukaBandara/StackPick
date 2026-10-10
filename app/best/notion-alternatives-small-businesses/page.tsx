import type { Metadata } from "next";
import ComparisonArticle from "@/components/ComparisonArticle";

export const metadata: Metadata = {
  title: "Best Notion Alternatives for Small Businesses (2026)",
  description: "Compare Notion alternatives for small businesses that need stronger project management, simpler documentation or more specialized workflows.",
  alternates: { canonical: "/best/notion-alternatives-small-businesses" },
};

export default function Page() {
  return (
    <ComparisonArticle
      title="Best Notion Alternatives for Small Businesses"
      slug="notion-alternatives-small-businesses"
      intro="Compare Notion alternatives for small businesses that need stronger project management, simpler documentation or more specialized workflows."
      pricingNote="Plans, limits and availability change. Verify current provider terms before relying on a free tier."
      tools={[
        { name: "ClickUp", bestFor: "Projects plus workspace tools", freeOption: "Check current provider terms.", tradeoff: "Verify current limits and test your real workflow.", url: "https://clickup.com/" },
        { name: "Asana", bestFor: "Dedicated project management", freeOption: "Check current provider terms.", tradeoff: "Verify current limits and test your real workflow.", url: "https://asana.com/" },
        { name: "Trello", bestFor: "Simple visual workflows", freeOption: "Check current provider terms.", tradeoff: "Verify current limits and test your real workflow.", url: "https://trello.com/" },
        { name: "Confluence", bestFor: "Team knowledge and documentation", freeOption: "Check current provider terms.", tradeoff: "Verify current limits and test your real workflow.", url: "https://www.atlassian.com/software/confluence" },
      ]}
      bottomLine="Switching only makes sense when the alternative solves the specific problem that made you look elsewhere."
    >
      <section className="bg-white">
        <div className="sp-container py-16 sm:py-20">
          <p className="sp-eyebrow">StackPick decision test</p>
          <h2 className="sp-title mt-4 max-w-4xl">Don't switch until you can name the problem you're solving.</h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#6e6e73]">
            Write down the friction in your current tool, reproduce it, then run the same workflow in each alternative. Compare setup effort, daily clicks, integrations, migration, limits and the first feature you would need to pay for.
          </p>
        </div>
      </section>
    </ComparisonArticle>
  );
}
