import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SoftwareLogo from "@/components/SoftwareLogo";
import ProductScreenshot from "@/components/ProductScreenshot";
import { getSoftwareProfile, SOFTWARE_PROFILES } from "@/lib/software";
import ReviewSection from "@/components/ReviewSection";
import VendorActionLink from "@/components/VendorActionLink";

type PageProps = { params: Promise<{ slug: string }> };

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://stackpick.tech";

function ExternalArrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="ml-2 h-4 w-4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function generateStaticParams() {
  return SOFTWARE_PROFILES.map((software) => ({ slug: software.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const software = getSoftwareProfile(slug);
  if (!software) return {};
  return {
    title: `${software.name}: Pricing, Plans & Fit`,
    description: `${software.tagline} Read StackPick's practical profile covering use cases, free-plan details, strengths, trade-offs and alternatives.`,
    alternates: { canonical: `/software/${software.slug}` },
    openGraph: {
      title: `${software.name}: Pricing, Plans & Fit`,
      description: software.tagline,
      url: `/software/${software.slug}`,
      type: "article",
      images: [{ url: software.productImage.src, alt: software.productImage.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${software.name}: Pricing, Fit & Trade-offs`,
      description: software.tagline,
      images: [{ url: software.productImage.src, alt: software.productImage.alt }],
    },
  };
}

export default async function SoftwareProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const software = getSoftwareProfile(slug);
  if (!software) notFound();
  const relatedSoftware = SOFTWARE_PROFILES
    .filter((item) => item.category === software.category && item.slug !== software.slug)
    .slice(0, 4);
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Software", item: `${SITE_URL}/software` },
      { "@type": "ListItem", position: 3, name: software.name, item: `${SITE_URL}/software/${software.slug}` },
    ],
  };

  return (
    <article className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <section className="border-b border-black/[0.08] bg-[#f5f5f7]">
        <div className="sp-container py-14 sm:py-20">
          <Link href="/software" className="text-sm font-medium text-[#001D39] hover:underline">← All software profiles</Link>
          <p className="sp-eyebrow mt-8">{software.category} software profile</p>
          <div className="mt-4 flex items-center gap-4 sm:gap-5">
            <SoftwareLogo name={software.name} url={software.officialUrl} />
            <h1 className="sp-display max-w-4xl">{software.name}</h1>
          </div>
          <p className="mt-5 max-w-3xl text-xl leading-8 text-[#6e6e73]">{software.tagline}</p>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#1d1d1f]">{software.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <VendorActionLink softwareSlug={software.slug} officialUrl={software.officialUrl} className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#001D39] px-5 text-sm font-semibold text-white transition-opacity hover:opacity-90">Visit official website <ExternalArrow /></VendorActionLink>
            <a href={software.pricingUrl} target="_blank" rel="noreferrer" data-vendor-outbound="true" data-software-slug={software.slug} data-vendor-action="pricing" className="inline-flex min-h-11 items-center justify-center rounded-full border border-black/15 bg-white px-5 text-sm font-semibold text-[#001D39] transition-colors hover:bg-[#f9fafb]">Check official pricing <ExternalArrow /></a>
          </div>
          <div className="mt-5 space-y-2">
            <p className="text-xs text-[#6e6e73]">Last editorial review: {software.reviewedOn}. Vendor pricing and features can change; confirm current terms before buying.</p>
            <p className="text-xs leading-5 text-[#6e6e73]">Research basis: desk research using public product and pricing information. This profile is not a claim of hands-on testing.</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-[#001D39]">
              <Link href={`/for-vendors/portal?software=${software.slug}`} className="hover:underline">Represent this product</Link>
              <Link href="/review-policy" className="hover:underline">Our review policy</Link>
              <Link href="/how-we-verify" className="hover:underline">How we verify</Link>
              <Link href="/report-an-issue" className="hover:underline">Report an issue</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-container grid gap-10 py-14 sm:py-20 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0">
          <section>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="sp-eyebrow">Inside the product</p>
                <h2 className="sp-title mt-3">{software.productImage.caption.startsWith("Official product icon") ? "Product identity." : "A look at the interface."}</h2>
              </div>
              <a href={software.productImage.sourceUrl} target="_blank" rel="noreferrer" className="text-sm font-semibold text-[#001D39] hover:underline">View image source ↗</a>
            </div>
            <div className="mt-5 overflow-hidden rounded-[24px] border border-black/10 bg-white">
              <ProductScreenshot
                src={software.productImage.src}
                alt={software.productImage.alt}
                caption={software.productImage.caption}
                fallbackHref={software.officialUrl}
                className="w-full"
              />
            </div>
            <p className="mt-3 text-xs leading-5 text-[#6e6e73]">
              {software.productImage.caption.startsWith("Official product icon")
                ? "This profile currently uses the product icon rather than a product-interface screenshot. StackPick is an independent guide, not the software provider."
                : "Product imagery is credited to the linked source. Screenshots may be older or vary by plan and region. StackPick is an independent guide, not the software provider."}
            </p>
          </section>

          <section className="mt-14">
            <p className="sp-eyebrow">At a glance</p>
            <h2 className="sp-title mt-3">Who should consider {software.name}?</h2>
            <ul className="mt-5 space-y-3">
              {software.bestFor.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-[#4b5563]"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#001D39]" />{item}</li>)}
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="sp-title">Key capabilities</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {software.keyFeatures.map((feature) => <div key={feature} className="rounded-2xl border border-black/10 p-5 text-sm leading-6 text-[#4b5563]">{feature}</div>)}
            </div>
          </section>

          <section className="mt-12 grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-[#1d1d1f]">Where it can work well</h2>
              <ul className="mt-4 space-y-3">
                {software.strengths.map((item) => <li key={item} className="text-sm leading-6 text-[#4b5563]">+ {item}</li>)}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-[#1d1d1f]">Trade-offs to check</h2>
              <ul className="mt-4 space-y-3">
                {software.tradeoffs.map((item) => <li key={item} className="text-sm leading-6 text-[#4b5563]">– {item}</li>)}
              </ul>
            </div>
          </section>

          <section className="mt-12 rounded-[24px] border border-black/10 bg-[#f5f5f7] p-6 sm:p-8">
            <p className="sp-eyebrow">Pricing & free plan</p>
            <h2 className="sp-title mt-3">Check the limits, not just the headline price.</h2>
            <p className="mt-4 text-sm leading-7 text-[#4b5563]">{software.pricingSummary}</p>
            <div className="mt-5 rounded-2xl bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#6e6e73]">Free-plan check</p>
              <p className="mt-2 text-sm leading-6 text-[#1d1d1f]">{software.freePlan}</p>
            </div>
            <a href={software.pricingUrl} target="_blank" rel="noreferrer" data-vendor-outbound="true" data-software-slug={software.slug} data-vendor-action="pricing" className="mt-5 inline-flex text-sm font-semibold text-[#001D39] hover:underline">Verify pricing on the official site <ExternalArrow /></a>
          </section>

          {software.comparisons.length > 0 && (
            <section className="mt-12">
              <h2 className="sp-title">Related StackPick comparisons</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {software.comparisons.map((item) => (
                  <Link key={item.href} href={item.href} className="rounded-2xl border border-black/10 p-5 transition-colors hover:border-[#001D39]/40">
                    <span className="text-sm font-semibold text-[#1d1d1f]">{item.title}</span>
                    <span className="mt-2 block text-sm text-[#001D39]">Read comparison →</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {relatedSoftware.length > 0 && (
            <section className="mt-12">
              <h2 className="sp-title">More {software.category} software</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6e6e73]">Explore other tools in this category and compare their plan limits, workflows and trade-offs.</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {relatedSoftware.map((item) => (
                  <Link key={item.slug} href={`/software/${item.slug}`} className="rounded-2xl border border-black/10 p-5 transition-colors hover:border-[#001D39]/40">
                    <span className="text-sm font-semibold text-[#1d1d1f]">{item.name}</span>
                    <span className="mt-2 block text-sm leading-6 text-[#6e6e73]">{item.tagline}</span>
                    <span className="mt-3 block text-sm font-semibold text-[#001D39]">View profile →</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {software.alternatives.length > 0 && (
            <section className="mt-12">
              <h2 className="sp-title">Alternatives to explore</h2>
              <div className="mt-5 space-y-3">
                {software.alternatives.map((item) => (
                  <div key={item.name} className="rounded-2xl border border-black/10 p-5 sm:flex sm:items-start sm:justify-between sm:gap-6">
                    <div>
                      <h3 className="font-semibold text-[#1d1d1f]">{item.name}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#6e6e73]">{item.reason}</p>
                    </div>
                    <Link href={item.href} className="mt-3 inline-flex shrink-0 text-sm font-semibold text-[#001D39] hover:underline sm:mt-0">View profile →</Link>
                  </div>
                ))}
              </div>
            </section>
          )}

          <ReviewSection softwareSlug={software.slug} softwareName={software.name} />
        </div>

        <aside className="h-fit rounded-[24px] border border-black/10 p-6 lg:sticky lg:top-24">
          <div className="flex items-center gap-3">
            <SoftwareLogo name={software.name} url={software.officialUrl} />
            <div>
              <p className="sp-eyebrow">A practical shortlist</p>
              <h2 className="mt-1 text-lg font-semibold tracking-tight text-[#1d1d1f]">{software.name}</h2>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-[#6e6e73]">
            {software.category === "CRM & Sales"
              ? "Before choosing, try the same task in each shortlisted CRM: add a contact, record an interaction, schedule the next action, find the record later and export your data."
              : "Before choosing, test a typical workflow in each shortlisted tool, check the plan limits, verify required integrations and confirm you can export your data."}
          </p>
          <Link href={software.category === "CRM & Sales" ? "/best/crm-software" : `/software?category=${encodeURIComponent(software.category)}`} className="mt-5 inline-flex text-sm font-semibold text-[#001D39] hover:underline">
            {software.category === "CRM & Sales" ? "Compare CRM options →" : `Explore ${software.category} →`}
          </Link>
          <div className="mt-6 border-t border-black/10 pt-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#6e6e73]">Official sources</p>
            <a href={software.officialUrl} target="_blank" rel="noreferrer" data-vendor-outbound="true" data-software-slug={software.slug} data-vendor-action="website" className="mt-3 block break-words text-sm text-[#001D39] underline underline-offset-4">Product website</a>
            <a href={software.pricingUrl} target="_blank" rel="noreferrer" data-vendor-outbound="true" data-software-slug={software.slug} data-vendor-action="pricing" className="mt-3 block break-words text-sm text-[#001D39] underline underline-offset-4">Pricing & plan details</a>
          </div>
        </aside>
      </section>
    </article>
  );
}
