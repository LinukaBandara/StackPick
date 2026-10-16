import type { Metadata } from "next";
import ComparisonArticle from "@/components/ComparisonArticle";

export const metadata: Metadata = {
  title: "Best Website Builder for Small Business (2026)",
  description:
    "Compare website builders for small businesses by site type, selling needs, design control, publishing limits and the cost of launching a real website.",
  alternates: { canonical: "/best/website-builders" },
};

export default function Page() {
  return (
    <ComparisonArticle
      title="Best Website Builder for Small Business"
      slug="website-builders"
      intro="Start with the job the website must do. A local service business usually needs clear service pages, contact or booking forms and trustworthy mobile presentation; an online store needs product management, checkout and order handling. The best choice is the one that supports those tasks without making routine updates unnecessarily difficult."
      pricingNote="Plans, introductory offers, renewal prices and included features can change by country and billing term. Check the provider's current pricing and publishing terms before paying. A free editor or trial is not necessarily a live site with a custom domain, usable forms or all the features your business needs."
      tools={[
        {
          name: "Squarespace",
          bestFor: "Service businesses and creators who value cohesive templates and a polished presentation",
          freeOption: "Check the current trial and publishing conditions; do not assume a trial site can stay live on a custom domain without a paid plan.",
          tradeoff:
            "A template-led workflow can reduce design decisions for a brochure or service site, but compare layout flexibility and the editing experience before committing to a template.",
          url: "https://www.squarespace.com/pricing",
        },
        {
          name: "Wix",
          bestFor: "Small businesses that want a visual editor with a broad set of built-in business features",
          freeOption: "A free published option may be useful for a draft; confirm the current platform branding, site address and upgrade requirements before treating it as a business launch.",
          tradeoff:
            "The flexible editor and app ecosystem can cover varied business needs, but extra options can mean more setup and maintenance. Test the exact form, booking or store workflow you plan to use.",
          url: "https://www.wix.com/plans",
        },
        {
          name: "Shopify",
          bestFor: "Businesses whose website is primarily an online store",
          freeOption: "Review the current trial and introductory offer; check what the selected plan costs after the offer ends.",
          tradeoff:
            "Product, checkout and order workflows are central to the platform, making it a natural shortlist candidate for retail. For a simple service or information site without a store, its commerce-focused features may be more than you need.",
          url: "https://www.shopify.com/pricing",
        },
        {
          name: "Webflow",
          bestFor: "Design-conscious businesses and designers who need detailed layout control",
          freeOption: "Separate free workspace or staging access from production hosting; verify the current site plan, custom-domain and CMS limits before launch.",
          tradeoff:
            "It offers granular visual design controls, but requires more learning than a simple template-led setup. Check how easily the person responsible can update content after launch.",
          url: "https://webflow.com/pricing",
        },
      ]}
      bottomLine="For a service business that wants a polished site without extensive design work, start by comparing Squarespace and Wix. If product listings, checkout and order management are core requirements, evaluate Shopify first. If custom layout control is a priority and someone can manage the extra learning curve, include Webflow. These are starting points, not universal rankings: verify the current plan and test the actual workflow before paying."
    >
      <section className="bg-white">
        <div className="sp-container py-10">
          <h2 className="text-2xl font-semibold">Run a practical launch test before choosing</h2>
          <p className="mt-3 text-slate-600">
            Build the same representative page in each shortlisted builder rather than judging only the template gallery. Use your real business task—such as receiving an enquiry, taking a booking or completing a test order—and check the live publishing requirements.
          </p>
          <ul className="mt-5 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
            <li><strong>Mobile:</strong> Check the page at phone width and make sure key actions remain easy to use.</li>
            <li><strong>Editing:</strong> Time how long it takes to change a headline, image, service or product.</li>
            <li><strong>Conversion:</strong> Submit a test enquiry or booking, or walk through the store checkout where relevant.</li>
            <li><strong>Real launch cost:</strong> Include the required plan, custom domain, essential apps and renewal price.</li>
            <li><strong>Search basics:</strong> Confirm that you can set page titles, descriptions and useful image alternative text.</li>
            <li><strong>Exit plan:</strong> Check what content and customer data can be exported if you switch platforms later.</li>
          </ul>
          <p className="mt-5 text-sm text-slate-500">
            This guide is a desk-based comparison of product positioning and published plan information, not a claim that every platform was independently tested. Features and pricing can change; confirm details with each provider before purchasing.
          </p>
        </div>
      </section>
    </ComparisonArticle>
  );
}
