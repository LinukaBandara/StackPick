import type { Metadata } from "next";
import ComparisonArticle from "@/components/ComparisonArticle";

export const metadata: Metadata = {
  title: "Best Free Website Builders (2026)",
  description: "Compare free website builders by what you can actually publish, customize and connect before paying for a domain or removing platform restrictions.",
  alternates: { canonical: "/best/free-website-builders" },
};

export default function Page() {
  return (
    <ComparisonArticle
      title="Best Free Website Builders"
      slug="free-website-builders"
      intro="Compare free website builders by what you can actually publish, customize and connect before paying for a domain or removing platform restrictions."
      pricingNote="Plans, limits and included features can change. Verify the provider's current pricing and terms before publishing a site or moving a live business workflow."
      tools={[
        { name: "Wix", bestFor: "Easy visual site building", freeOption: "Test whether the free site address, branding and form features are acceptable for your intended launch.", tradeoff: "The visual editor can make it approachable for a small business site, but verify the current free-site branding, subdomain and custom-domain upgrade requirements.", url: "https://www.wix.com/" },
        { name: "WordPress.com", bestFor: "Content and simple sites", freeOption: "Confirm which domain, plugin, design and monetization controls are included in the current plan—not just which editor tools are available.", tradeoff: "It can suit content-led sites and publishing, but confirm which custom-domain, plugin, design and monetization options are included in the plan you would use.", url: "https://wordpress.com/" },
        { name: "Framer", bestFor: "Design-focused landing pages", freeOption: "Preview publishing on the free address and check the current limits for custom domains, forms and CMS content.", tradeoff: "Its design-focused workflow can be useful for landing pages, but verify current limits for custom domains, site publishing, forms and CMS features.", url: "https://www.framer.com/" },
        { name: "Webflow", bestFor: "Advanced visual design workflows", freeOption: "Separate design/staging access from production publishing; verify the current site, page and CMS limits before building.", tradeoff: "Its visual design controls can support more custom layouts, but check the current staging, publishing, page and CMS limits before building a production site.", url: "https://webflow.com/" },
      ]}
      bottomLine="Build the same small business site in each shortlisted builder: homepage, service page, contact form and mobile preview. Then compare what a visitor can actually use on the free published version. If a custom domain, removing platform branding, collecting leads or maintaining content requires a paid plan, treat that plan—not the free editor—as the real cost of launching."
    >
      <section className="bg-white">
        <div className="sp-container py-16 sm:py-20">
          <p className="sp-eyebrow">StackPick publishing test</p>
          <h2 className="sp-title mt-4 max-w-4xl">Publish a small business site before paying for the full plan.</h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#6e6e73]">
            Build a simple three-page draft with a homepage, service page and contact form. Preview it on mobile, publish to the platform's free address, then check the exact restrictions on a custom domain, platform branding, forms, SEO controls and content updates. Confirm the upgrade required to launch the site you actually want—not just the one you can design in the editor.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#e4e7ec] bg-[#f7f8fc] p-6"><p className="font-semibold text-[#101828]">Launch restrictions</p><p className="mt-2 text-sm leading-6 text-[#667085]">Check the free address, platform branding and custom-domain requirements.</p></div>
            <div className="rounded-2xl border border-[#e4e7ec] bg-[#f7f8fc] p-6"><p className="font-semibold text-[#101828]">Business essentials</p><p className="mt-2 text-sm leading-6 text-[#667085]">Test contact forms, mobile layouts, page titles and analytics access.</p></div>
            <div className="rounded-2xl border border-[#e4e7ec] bg-[#f7f8fc] p-6"><p className="font-semibold text-[#101828]">Growth and exit</p><p className="mt-2 text-sm leading-6 text-[#667085]">Verify CMS or page limits, export options and the plan needed to keep expanding.</p></div>
          </div>
        </div>
      </section>
    </ComparisonArticle>
  );
}
