import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Software Categories",
  description: "Explore software by business function, from finance and sales to productivity, security, and development.",
  alternates: { canonical: "/categories" },
};

const CATEGORIES = [
  { name: "Finance", description: "Accounting, invoicing, expenses, and payments.", examples: "Accounting · Invoicing · Expenses", href: "/best?category=Finance" },
  { name: "Sales", description: "Manage customer relationships, leads, and conversations.", examples: "CRM · Live chat · Sales pipelines", href: "/best?category=Sales" },
  { name: "Productivity", description: "Plan projects, track time, and collaborate.", examples: "Project management · Time tracking · Meetings", href: "/best?category=Productivity" },
  { name: "Operations", description: "Keep everyday business workflows running smoothly.", examples: "Scheduling · Inventory · Support", href: "/best?category=Operations" },
  { name: "Security", description: "Protect company accounts, devices, and files.", examples: "VPN · Password managers · Backup", href: "/best?category=Security" },
  { name: "Marketing", description: "Reach customers and grow your online presence.", examples: "Email · Websites · Social scheduling", href: "/best?category=Marketing" },
  { name: "People", description: "Support hiring, payroll, and team management.", examples: "Payroll · HR · Employee scheduling", href: "/best?category=People" },
  { name: "Infrastructure", description: "Choose the foundations behind your business systems.", examples: "Hosting · Business email", href: "/best?category=Infrastructure" },
  { name: "Development", description: "Tools for building, shipping, and maintaining software.", examples: "AI coding · GitHub · DevOps", href: "/best?category=Development" },
  { name: "Automation", description: "Connect apps and reduce repetitive work.", examples: "Workflow automation · AI agents", href: "/best?category=Automation" },
];

export default function CategoriesPage() {
  return (
    <section className="bg-white">
      <div className="sp-container py-16 sm:py-24">
        <p className="sp-eyebrow">Explore by need</p>
        <h1 className="sp-display mt-4 max-w-4xl">Find software by category.</h1>
        <p className="sp-body-large mt-6 max-w-2xl">Start with the work you need to get done. Explore focused comparisons and practical advice for each part of your workflow.</p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((category, index) => (
            <Link key={category.name} href={category.href} className="group flex min-h-52 flex-col rounded-[24px] border border-[#d2d2d7] bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#a8b5c2] hover:shadow-lg">
              <span className="text-xs font-semibold tracking-wide text-[#6e6e73]">{String(index + 1).padStart(2, "0")} / CATEGORY</span>
              <h2 className="mt-5 text-xl font-semibold tracking-tight text-[#1d1d1f]">{category.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#6e6e73]">{category.description}</p>
              <p className="mt-auto pt-5 text-xs text-[#001D39]">{category.examples}</p>
              <span className="mt-4 text-xs font-semibold text-[#001D39] group-hover:underline">Explore category →</span>
            </Link>
          ))}
        </div>
        <p className="mt-10 text-sm text-[#6e6e73]">Looking for a specific tool? <Link className="font-semibold text-[#001D39] hover:underline" href="/best">Search all comparison guides →</Link></p>
      </div>
    </section>
  );
}
