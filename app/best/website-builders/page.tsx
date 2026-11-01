import type { Metadata } from "next";
import ComparisonArticle from "@/components/ComparisonArticle";

export const metadata: Metadata = {
  title: "Best Website Builder for Small Business (2026)",
  description:
    "Compare Squarespace, Wix, Shopify and Webflow for small businesses. Site type, selling needs, design control, free vs paid limits and real launch cost.",
  alternates: { canonical: "/best/website-builders" },
};

export default function Page() {
  return (
    <ComparisonArticle
      title="Best Website Builder for Small Business"
      slug="website-builders"
      intro="Start with the job the website must do. A local service business usually needs clear service pages, contact or booking forms and trustworthy mobile presentation. An online store needs product management, checkout and order handling. The best choice is the one that supports those tasks without making routine updates unnecessarily difficult."
      pricingNote="Plans, introductory offers, renewal prices and included features can change by country and billing term. Check the provider’s current pricing and publishing terms before paying. A free editor or trial is not necessarily a live site with a custom domain, usable forms or all the features your business needs."
      tools={[
        {
          name: "Squarespace",
          bestFor: "Service businesses and creators who value cohesive templates and a polished presentation",
          freeOption:
            "Trial access is available. Do not assume a trial site can stay live on a custom domain without a paid plan. Confirm current trial length and publishing conditions.",
          tradeoff:
            "A template-led workflow can reduce design decisions for a brochure or service site. Compare layout flexibility and the day-to-day editing experience before committing to a template.",
          url: "https://www.squarespace.com/pricing",
        },
        {
          name: "Wix",
          bestFor: "Small businesses that want a visual editor with a broad set of built-in business features",
          freeOption:
            "A free published option may be useful for a draft. Confirm the current platform branding, site address and upgrade requirements before treating it as a business launch.",
          tradeoff:
            "The flexible editor and app ecosystem can cover varied business needs, but extra options can mean more setup and maintenance. Test the exact form, booking or store workflow you plan to use.",
          url: "https://www.wix.com/plans",
        },
        {
          name: "Shopify",
          bestFor: "Businesses whose website is primarily an online store",
          freeOption:
            "Review the current trial and introductory offer. Check what the selected plan costs after the offer ends and which features require paid apps.",
          tradeoff:
            "Product, checkout and order workflows are central to the platform, making it a natural shortlist candidate for retail. For a simple service or information site without a store, its commerce-focused features may be more than you need.",
          url: "https://www.shopify.com/pricing",
        },
        {
          name: "Webflow",
          bestFor: "Design-conscious businesses and designers who need detailed layout control",
          freeOption:
            "Separate free workspace or staging access from production hosting. Verify the current site plan, custom-domain and CMS limits before launch.",
          tradeoff:
            "It offers granular visual design controls but requires more learning than a simple template-led setup. Check how easily the person responsible can update content after launch.",
          url: "https://webflow.com/pricing",
        },
      ]}
      bottomLine="For a service business that wants a polished site without extensive design work, start by comparing Squarespace and Wix. If product listings, checkout and order management are core requirements, evaluate Shopify first. If custom layout control is a priority and someone can manage the extra learning curve, include Webflow. These are starting points, not universal rankings. Verify the current plan and test the actual workflow before paying."
    >
      <section className="bg-white">
        <div className="sp-container py-16 sm:py-20">
          <p className="sp-eyebrow">Practical launch test</p>
          <h2 className="sp-title mt-4 max-w-4xl">
            Build the same representative page in each shortlisted builder.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#6e6e73]">
            Use your real business task — receiving an enquiry, taking a booking or completing a test order — and check the live publishing requirements rather than judging only the template gallery.
          </p>

          <div className="mt-10 overflow-x-auto rounded-[28px] border border-black/10 bg-white">
            <table className="w-full min-w-[700px] text-left text-sm">
              <thead>
                <tr className="border-b border-black/10">
                  <th className="p-5 font-semibold">Check</th>
                  <th className="p-5 font-semibold">Why it matters</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-black/10">
                  <td className="p-5 font-medium">Mobile</td>
                  <td className="p-5 text-[#6e6e73]">Key actions must remain easy to use at phone width.</td>
                </tr>
                <tr className="border-b border-black/10">
                  <td className="p-5 font-medium">Editing speed</td>
                  <td className="p-5 text-[#6e6e73]">Time how long it takes to change a headline, image or service.</td>
                </tr>
                <tr className="border-b border-black/10">
                  <td className="p-5 font-medium">Conversion path</td>
                  <td className="p-5 text-[#6e6e73]">Submit a test enquiry, booking or store checkout.</td>
                </tr>
                <tr className="border-b border-black/10">
                  <td className="p-5 font-medium">Real launch cost</td>
                  <td className="p-5 text-[#6e6e73]">Include required plan, custom domain, essential apps and renewal price.</td>
                </tr>
                <tr>
                  <td className="p-5 font-medium">Exit plan</td>
                  <td className="p-5 text-[#6e6e73]">Check what content and customer data can be exported later.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </ComparisonArticle>
  );
}
