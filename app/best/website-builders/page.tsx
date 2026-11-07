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
      quickAnswer="For a brochure site, compare Squarespace Core with Webflow Basic. For ecommerce, compare Shopify Basic, Squarespace Core and Webflow Ecommerce Standard by payment-provider support, transaction fees and required apps—not just the headline subscription. Wix Core is another option for US businesses that need payment acceptance. Free editors are useful for drafts, not a complete custom-domain business launch."
      pricingNote="US reference prices checked 7 November 2026; USD, annual billing unless stated, before applicable taxes and separate domain renewal. Webflow Basic is US$15/month billed yearly; Ecommerce Standard is US$29/month billed yearly, lists 500 ecommerce items and a 2% transaction fee. Squarespace currently shows Basic at US$19/month and Core at US$29/month on annual billing; Basic carries a 2% online-store transaction fee while Core lists 0%. Shopify Basic is US$29/month billed annually in the US and lists a 2% third-party transaction fee when using an external payment provider. Wix Core is US$29/month billed annually in the US as its lowest payment-accepting plan. These are not global prices: currency, tax, payment processing and plan availability vary by billing country. Confirm the live checkout total and required apps before paying."
      tools={[
        {
          name: "Squarespace",
          bestFor: "Service businesses and creators who value cohesive templates and a polished presentation",
          freeOption:
            "Squarespace offers trial access, but a live custom-domain site requires a paid website subscription. Its current US annual-billing display shows Basic at US$19/month and Core at US$29/month. Basic includes a 2% online-store transaction fee; Core lists 0%. Eligible annual website subscriptions include a free custom domain for one year, then it renews at the standard domain rate. Check country availability and plan details before checkout.",
          tradeoff:
            "A template-led workflow can reduce design decisions for a brochure or service site. Compare layout flexibility and the day-to-day editing experience before committing to a template.",
          url: "https://www.squarespace.com/pricing",
        },
        {
          name: "Wix",
          bestFor: "Small businesses that want a visual editor with a broad set of built-in business features",
          freeOption:
            "Wix has a free site option for drafts, but a custom domain and payment acceptance require a paid plan. In the US, Wix Core is listed at US$29/month billed annually as the lowest plan that accepts payments; Wix says prices and currency vary by location and taxes depend on billing address. Do not treat this US reference price as a Sri Lankan or other regional quote.",
          tradeoff:
            "The flexible editor and app ecosystem can cover varied business needs, but extra options can mean more setup and maintenance. Test the exact form, booking or store workflow you plan to use.",
          url: "https://www.wix.com/plans",
        },
        {
          name: "Shopify",
          bestFor: "Businesses whose website is primarily an online store",
          freeOption:
            "Shopify offers a trial/introductory offer, but a live branded store requires a paid plan. Shopify Basic is listed at US$29/month billed annually in the US. The US Basic plan lists a 2% third-party transaction fee when you use an external payment provider; card-processing rates and eligible payment methods are separate and country-specific. Confirm the post-promotion renewal price and payment gateway eligibility before committing.",
          tradeoff:
            "Product, checkout and order workflows are central to the platform, making it a natural shortlist candidate for retail. For a simple service or information site without a store, its commerce-focused features may be more than you need.",
          url: "https://www.shopify.com/pricing",
        },
        {
          name: "Webflow",
          bestFor: "Design-conscious businesses and designers who need detailed layout control",
          freeOption:
            "Webflow Starter is free for staging on a webflow.io address and is limited to 2 static pages. A custom domain needs a paid Site plan: Basic is US$15/month billed yearly and supports up to 300 static pages, while CMS features require a higher plan. For stores, Ecommerce Standard is US$29/month billed yearly, allows 500 ecommerce items and lists a 2% transaction fee. Workspace pricing is separate from the site plan.",
          tradeoff:
            "It offers granular visual design controls but requires more learning than a simple template-led setup. Check how easily the person responsible can update content after launch.",
          url: "https://webflow.com/pricing",
        },
      ]}
      bottomLine="For a brochure site, compare Squarespace Core with Webflow Basic on editing workflow and total annual cost. For a small store, compare Shopify Basic, Squarespace Core and Webflow Ecommerce Standard by supported payment gateways, transaction fees and required apps. Wix Core is another US-market option for built-in site and payment features. These US reference prices are not universal offers; confirm local billing and payout eligibility first."
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
