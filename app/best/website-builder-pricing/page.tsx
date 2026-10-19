import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Builder Pricing (2026): Wix, Squarespace, Shopify & Webflow",
  description: "Compare website builder pricing for business sites, portfolios and online stores, including annual billing, ecommerce plan gates and renewal costs.",
  alternates: { canonical: "/best/website-builder-pricing" },
};

const plans = [
  { name: "Wix Light", price: "$17/mo", billing: "Yearly subscription, paid in full", fit: "A basic branded business website or portfolio", limits: "2 GB storage; does not include the higher-tier ecommerce capabilities listed on Core and above.", url: "https://www.wix.com/plans" },
  { name: "Wix Core", price: "$29/mo", billing: "Yearly subscription, paid in full", fit: "Small businesses that need basic ecommerce, payments or service bookings", limits: "50 GB storage and five site collaborators; check payment availability for your country.", url: "https://www.wix.com/plans" },
  { name: "Squarespace Basic", price: "$19/mo", billing: "Annual billing; $25 monthly", fit: "Portfolio, service business or content-focused marketing site", limits: "Core, Plus and Advanced have higher feature allowances; compare commerce and transaction-fee terms for your sales model.", url: "https://www.squarespace.com/pricing" },
  { name: "Squarespace Core", price: "$29/mo", billing: "Annual billing; $39 monthly", fit: "Businesses that need more marketing, commerce and site controls", limits: "Confirm the current commerce features and transaction fees in the plan comparison.", url: "https://www.squarespace.com/pricing" },
  { name: "Shopify Basic", price: "$29/mo", billing: "Annual billing; monthly billing costs more", fit: "Businesses where online product sales are the main purpose of the site", limits: "Payment processing, third-party payment-provider fees and paid apps can add to the platform subscription.", url: "https://www.shopify.com/pricing" },
  { name: "Webflow Basic", price: "$14/mo", billing: "Annual billing; site plan for a simple published website", fit: "Design-led marketing sites that need visual layout control", limits: "Basic is not the CMS plan; content-heavy sites need a CMS-capable plan, and ecommerce has separate plans.", url: "https://webflow.com/pricing" },
];

export default function Page() {
  return (
    <main className="bg-white">
      <article className="sp-container py-14 sm:py-20">
        <p className="sp-eyebrow">Software pricing · Updated October 19, 2026</p>
        <h1 className="sp-display mt-4 max-w-4xl">Website builder pricing: compare the real cost of launching a business site</h1>
        <p className="sp-body-large mt-6 max-w-3xl">A low introductory monthly figure can hide an annual upfront charge, ecommerce plan upgrades, paid apps or renewal costs. This guide compares representative published US website plans and explains which costs matter for a brochure site, a content site or an online store. It is not a feature-for-feature ranking: Shopify is commerce-first, Webflow emphasizes design control, and Wix and Squarespace bundle broader website-building tools.</p>

        <section className="mt-10 overflow-x-auto rounded-2xl border border-[#d2d2d7]">
          <table className="w-full min-w-[780px] border-collapse text-left text-sm">
            <thead className="bg-[#f5f5f7]"><tr><th className="p-4">Plan</th><th className="p-4">Published price</th><th className="p-4">Best fit</th><th className="p-4">Cost or limit to check</th></tr></thead>
            <tbody>{plans.map((p) => <tr key={p.name} className="border-t border-[#d2d2d7] align-top"><td className="p-4"><a className="font-semibold text-[#001D39] underline" href={p.url} target="_blank" rel="noreferrer">{p.name}</a><p className="mt-2 text-[#6e6e73]">{p.billing}</p></td><td className="p-4 whitespace-nowrap">{p.price}</td><td className="p-4">{p.fit}</td><td className="p-4">{p.limits}</td></tr>)}</tbody>
          </table>
        </section>
        <p className="mt-4 text-sm leading-relaxed text-[#6e6e73]">Prices are listed US plan prices checked October 19, 2026. Vendor pages may display a different currency, tax treatment, promotion or plan bundle based on location. Annual-billing monthly equivalents may be charged upfront; verify the final checkout total and renewal rate before subscribing.</p>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Estimate the full first-year website cost</h2>
          <p className="mt-4 leading-relaxed text-[#424245]">Start with twelve times the monthly equivalent, then add the domain renewal, email hosting, paid apps, premium templates, transaction fees and any contractor help. A plan that advertises a free domain for the first year may renew that domain at the provider's standard rate in year two. Keep domain ownership separate from the website platform when possible, and make sure you control the registrar account.</p>
          <ul className="mt-4 list-disc space-y-3 pl-6 leading-relaxed text-[#424245]">
            <li><strong>Basic business website:</strong> prioritize a custom domain, mobile-responsive templates, forms, analytics and control over page titles and redirects.</li>
            <li><strong>Content or SEO site:</strong> check CMS collections, URL structure, redirects, sitemap control, canonical tags, export options and whether publishing at scale is practical.</li>
            <li><strong>Online store:</strong> calculate payment processing, third-party transaction fees where applicable, shipping/tax apps, inventory tools and the plan required for the features you actually use.</li>
          </ul>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Which plan type should you pay for?</h2>
          <div className="mt-5 space-y-5 text-[#424245]">
            <div><h3 className="font-semibold text-[#1d1d1f]">For a service business or portfolio</h3><p className="mt-2 leading-relaxed">Wix Light or Squarespace Basic may cover a simple public site, contact forms and service information. Check whether online payments or appointment booking require a higher plan or an additional service.</p></div>
            <div><h3 className="font-semibold text-[#1d1d1f]">For an online store</h3><p className="mt-2 leading-relaxed">Compare Shopify with the ecommerce tiers of general-purpose builders. The right calculation includes the subscription, payment fees, apps and the cost of managing products, orders, shipping and returns—not just the page editor.</p></div>
            <div><h3 className="font-semibold text-[#1d1d1f]">For a design-led marketing site</h3><p className="mt-2 leading-relaxed">Webflow can suit teams that want fine layout control. Confirm whether you need a Basic site plan or a CMS plan, and remember that the free Starter workspace is not the same as a paid custom-domain publishing plan.</p></div>
          </div>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Hidden costs and limits to check</h2>
          <ul className="mt-4 list-disc space-y-3 pl-6 leading-relaxed text-[#424245]">
            <li><strong>Annual commitment:</strong> compare the amount charged today with the monthly equivalent advertised on the pricing page.</li>
            <li><strong>Domain and business email:</strong> free domain offers are often time-limited, while custom-domain email may be a separate subscription.</li>
            <li><strong>Transaction fees:</strong> check payment processing and any additional platform fee when you use a third-party processor.</li>
            <li><strong>CMS and content limits:</strong> blogs, collections, localization and structured content may require a higher tier than a static brochure site.</li>
            <li><strong>App dependencies:</strong> forms, bookings, subscriptions, reviews, shipping and advanced analytics can introduce recurring third-party charges.</li>
            <li><strong>Export and portability:</strong> verify what can be exported—pages, products, customers, orders, images and URL redirects—before building a large site.</li>
          </ul>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Who should not pay for a website builder upgrade?</h2>
          <p className="mt-4 leading-relaxed text-[#424245]">Do not pay for ecommerce features if you only need a simple portfolio. Do not choose a static-site tier if you depend on a large CMS or online store. A free plan can be useful for testing, but it may display platform branding or prevent you from connecting your own domain. Upgrade only when a specific business requirement makes the paid feature necessary.</p>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Before moving from another platform</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 leading-relaxed text-[#424245]">
            <li>Export page copy, blog posts, products, customer records and media where supported.</li>
            <li>List every current URL and create redirects for changed paths to preserve useful links and search visibility.</li>
            <li>Check whether forms, analytics, payment processing, email capture and cookie consent need rebuilding.</li>
            <li>Test mobile layouts, page speed, checkout, contact forms, metadata and sitemap before switching the domain.</li>
            <li>Keep the domain registrar login, DNS records and a backup of exported content accessible to the business owner.</li>
          </ol>
        </section>

        <section className="mt-12 rounded-2xl bg-[#f5f5f7] p-6 sm:p-8">
          <h2 className="text-xl font-semibold">Related StackPick guides</h2>
          <ul className="mt-4 space-y-2 text-[#001D39]">
            <li><Link className="underline" href="/best/website-builders">Best website builders for small business</Link></li>
            <li><Link className="underline" href="/best/free-website-builders">Best free website builders</Link></li>
            <li><Link className="underline" href="/best/business-email-hosting-pricing">Business email hosting pricing</Link></li>
          </ul>
        </section>
        <p className="mt-8 text-xs leading-relaxed text-[#6e6e73]">Editorial comparison of published US prices checked October 19, 2026. Prices and feature packaging change; confirm current billing, renewal price, country availability and plan limits on the official vendor pricing pages before purchase.</p>
      </article>
    </main>
  );
}
