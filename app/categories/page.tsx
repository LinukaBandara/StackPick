import type { Metadata } from "next";
import Link from "next/link";
import { SOFTWARE_PROFILES } from "@/lib/software";

export const metadata: Metadata = {
  title: "Software Categories",
  description: "Explore software by business function, with independent product profiles, official pricing links and practical comparisons.",
  alternates: { canonical: "/categories" },
};

const CATEGORY_DETAILS: Record<string, { description: string; examples: string }> = {
  "CRM & Sales": { description: "Organise leads, customer relationships, sales pipelines and marketing-led customer journeys.", examples: "CRM · Leads · Sales pipelines" },
  "Accounting & Finance": { description: "Compare tools for bookkeeping, invoicing, cash flow and day-to-day business finances.", examples: "Accounting · Invoicing · Cash flow" },
  "Project & Work Management": { description: "Plan projects, coordinate teams, organise knowledge and track work from one workspace.", examples: "Projects · Tasks · Collaboration" },
  "Developer Tools": { description: "Build, deploy, test and maintain applications with developer-focused platforms.", examples: "Code · Hosting · APIs · Automation" },
  "Design & Creative": { description: "Create visual assets, product designs and collaborative design systems.", examples: "Graphic design · UI/UX · Prototyping" },
  "Website & Ecommerce": { description: "Build websites, publish content and run online stores.", examples: "Website builders · CMS · Online stores" },
  "Marketing & SEO": { description: "Reach audiences, run campaigns and improve search visibility.", examples: "Email marketing · SEO · Analytics" },
  "Communication & Support": { description: "Coordinate team conversations and manage customer support across channels.", examples: "Team chat · Video · Help desks" },
  "Business Productivity": { description: "Handle everyday business work, scheduling, writing and information collection.", examples: "Office suites · Scheduling · Forms" },
  "Payments": { description: "Accept online payments and integrate payment processing into products and services.", examples: "Checkout · Payment APIs · Billing" },
};

const categories = Object.keys(CATEGORY_DETAILS)
  .map((name) => ({
    name,
    count: SOFTWARE_PROFILES.filter((item) => item.category === name).length,
    ...CATEGORY_DETAILS[name],
  }))
  .filter((category) => category.count > 0);

export default function CategoriesPage() {
  return (
    <section className="bg-white">
      <div className="sp-container py-16 sm:py-24">
        <p className="sp-eyebrow">Explore the catalogue</p>
        <h1 className="sp-display mt-4 max-w-4xl">Find software by category.</h1>
        <p className="sp-body-large mt-6 max-w-2xl">Start with the work you need to get done. Browse focused software collections, understand the options and compare products before choosing.</p>

        <div className="mt-14 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="sp-eyebrow">Browse by function</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#1d1d1f]">Explore software collections</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#6e6e73]">Each collection is connected to the live software catalogue.</p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Link key={category.name} href={`/software?category=${encodeURIComponent(category.name)}`} className="group flex min-h-52 flex-col rounded-[24px] border border-[#d2d2d7] bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#a8b5c2] hover:shadow-lg">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold tracking-wide text-[#6e6e73]">{String(index + 1).padStart(2, "0")} / CATEGORY</span>
                <span className="rounded-full bg-[#f5f5f7] px-3 py-1 text-xs font-semibold text-[#001D39]">{category.count} {category.count === 1 ? "tool" : "tools"}</span>
              </div>
              <h2 className="mt-5 text-xl font-semibold tracking-tight text-[#1d1d1f]">{category.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#6e6e73]">{category.description}</p>
              <p className="mt-auto pt-5 text-xs text-[#6e6e73]">{category.examples}</p>
              <span className="mt-4 text-xs font-semibold text-[#001D39] group-hover:underline">Explore collection →</span>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#6e6e73]">
          <p>Looking for a specific tool? <Link className="font-semibold text-[#001D39] hover:underline" href="/software">Search all software profiles →</Link></p>
          <p>Want to compare products? <Link className="font-semibold text-[#001D39] hover:underline" href="/best">Browse comparisons →</Link></p>
        </div>
      </div>
    </section>
  );
}
