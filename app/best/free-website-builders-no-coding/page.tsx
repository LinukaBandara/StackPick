import type { Metadata } from "next";
import ComparisonArticle from "@/components/ComparisonArticle";

export const metadata: Metadata = {
  title: "Best Free Website Builders Without Coding (2026)",
  description: "Compare no-code website builders that let freelancers and small businesses create a site without traditional development.",
  alternates: { canonical: "/best/free-website-builders-no-coding" },
};

export default function Page() {
  return (
    <ComparisonArticle
      title="Best Free Website Builders Without Coding"
      slug="free-website-builders-no-coding"
      intro="Compare no-code website builders that let freelancers and small businesses create a site without traditional development."
      pricingNote="Plans, limits and availability change. Verify current provider terms before relying on a free tier."
      tools={[
        { name: "Wix", bestFor: "Visual no-code websites", freeOption: "Check current provider terms.", tradeoff: "Verify current limits and test your real workflow.", url: "https://www.wix.com/" },
        { name: "Framer", bestFor: "Design-led sites", freeOption: "Check current provider terms.", tradeoff: "Verify current limits and test your real workflow.", url: "https://www.framer.com/" },
        { name: "WordPress.com", bestFor: "Content-focused websites", freeOption: "Check current provider terms.", tradeoff: "Verify current limits and test your real workflow.", url: "https://wordpress.com/" },
        { name: "Webflow", bestFor: "Visual design control", freeOption: "Check current provider terms.", tradeoff: "Verify current limits and test your real workflow.", url: "https://webflow.com/" },
      ]}
      bottomLine="Free does not always mean unrestricted. Check whether the plan needs a card, expires after a trial, adds branding, limits exports or reserves useful features for paid plans."
    >
      <section className="bg-white">
        <div className="sp-container py-16 sm:py-20">
          <p className="sp-eyebrow">StackPick decision test</p>
          <h2 className="sp-title mt-4 max-w-4xl">Test the free plan against the job you actually need done.</h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#6e6e73]">
            Create the smallest realistic workflow and check setup, limits, exports, branding and upgrade prompts. A free label is useful only when the plan supports your actual workflow.
          </p>
        </div>
      </section>
    </ComparisonArticle>
  );
}
