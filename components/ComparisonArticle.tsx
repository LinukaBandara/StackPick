import Link from "next/link";
import type { ReactNode } from "react";

const RELATED_COMPARISONS: Record<string, { href: string; title: string; desc: string }[]> = {
  finance: [
    { href: "/best/invoicing-software", title: "Best Invoicing Software for Freelancers", desc: "Compare practical invoicing options and free-plan limits." },
    { href: "/best/accounting-software", title: "Best Accounting Software for Small Business", desc: "Compare accounting tools for growing small teams." },
    { href: "/best/expense-management-software", title: "Best Expense Management Software for Small Business", desc: "Compare expense tracking and reimbursement tools." },
    { href: "/best/payroll-software", title: "Best Payroll Software for Small Business", desc: "Compare payroll options and their trade-offs." },
  ],
  sales: [
    { href: "/best/crm-software", title: "Best CRM Software for Freelancers & Small Teams", desc: "Compare CRMs for managing leads and customers." },
    { href: "/best/email-marketing-software", title: "Best Email Marketing Software for Small Business", desc: "Compare email tools for growing an audience." },
    { href: "/best/live-chat-software", title: "Best Live Chat Software for Small Business Websites", desc: "Compare website chat tools for customer conversations." },
    { href: "/best/appointment-scheduling-software", title: "Best Appointment Scheduling Software for Small Business", desc: "Compare scheduling tools for booking customers." },
  ],
  operations: [
    { href: "/best/project-management-software", title: "Best Project Management Software for Small Teams", desc: "Compare tools for planning and tracking work." },
    { href: "/best/time-tracking-software", title: "Best Time Tracking Software for Freelancers & Small Teams", desc: "Compare time tracking tools for billable work." },
    { href: "/best/employee-scheduling-software", title: "Best Employee Scheduling Software for Small Business", desc: "Compare staff scheduling options." },
    { href: "/best/inventory-management-software", title: "Best Inventory Management Software for Small Business", desc: "Compare inventory tools for stock-based businesses." },
  ],
  web: [
    { href: "/best/website-builders", title: "Best Website Builder for Small Business", desc: "Compare website builders for business sites." },
    { href: "/best/web-hosting", title: "Best Web Hosting for Small Business", desc: "Compare hosting options and practical trade-offs." },
    { href: "/best/business-email-hosting", title: "Best Business Email Hosting for Small Business", desc: "Compare professional email hosting options." },
    { href: "/best/form-builders", title: "Best Form Builder for Small Business", desc: "Compare forms for leads, surveys and workflows." },
  ],
  security: [
    { href: "/best/password-managers", title: "Best Password Manager for Business Teams", desc: "Compare password management for small teams." },
    { href: "/best/business-vpn", title: "Best Business VPN for Remote Teams", desc: "Compare VPN and secure-access options." },
    { href: "/best/antivirus-endpoint-security", title: "Best Antivirus & Endpoint Security for Small Business", desc: "Compare endpoint protection options." },
    { href: "/best/cloud-backup-software", title: "Best Cloud Backup Software for Small Business", desc: "Compare backup tools for business data." },
  ],
  people: [
    { href: "/best/hr-software", title: "Best HR Software for Small Business", desc: "Compare HR platforms for growing teams." },
    { href: "/best/payroll-software", title: "Best Payroll Software for Small Business", desc: "Compare payroll options for small employers." },
    { href: "/best/applicant-tracking-software", title: "Best Applicant Tracking System for Small Business", desc: "Compare ATS tools for hiring workflows." },
    { href: "/best/employee-scheduling-software", title: "Best Employee Scheduling Software for Small Business", desc: "Compare scheduling tools for teams." },
  ],
  collaboration: [
    { href: "/best/cloud-storage", title: "Best Cloud Storage for Small Business Teams", desc: "Compare storage and file-sharing tools." },
    { href: "/best/video-conferencing", title: "Best Video Conferencing Software for Small Business", desc: "Compare video meeting platforms." },
    { href: "/best/business-phone-voip", title: "Best Business Phone System (VoIP) for Small Business", desc: "Compare business calling platforms." },
    { href: "/best/help-desk-software", title: "Best Help Desk Software for Small Business", desc: "Compare customer support platforms." },
  ],
};

function relatedFor(slug: string) {
  const groups: [keyof typeof RELATED_COMPARISONS, string[]][] = [
    ["finance", ["invoicing-software", "accounting-software", "payroll-software", "expense-management-software"]],
    ["sales", ["crm-software", "email-marketing-software", "social-media-scheduling", "appointment-scheduling-software", "live-chat-software", "survey-nps-software"]],
    ["operations", ["project-management-software", "time-tracking-software", "employee-scheduling-software", "inventory-management-software", "pos-systems", "contract-management-software"]],
    ["web", ["website-builders", "web-hosting", "business-email-hosting", "form-builders", "online-course-platforms", "esignature-software"]],
    ["security", ["password-managers", "business-vpn", "antivirus-endpoint-security", "cloud-backup-software"]],
    ["people", ["hr-software", "payroll-software", "applicant-tracking-software", "employee-scheduling-software"]],
    ["collaboration", ["cloud-storage", "video-conferencing", "business-phone-voip", "help-desk-software"]],
  ];
  const group = groups.find(([, slugs]) => slugs.includes(slug))?.[0] ?? "operations";
  return RELATED_COMPARISONS[group].filter((item) => item.href !== `/best/${slug}`).slice(0, 3);
}

export interface ComparisonTool {
  name: string;
  bestFor: string;
  freeOption: string;
  tradeoff: string;
  url: string;
}

export interface ComparisonArticleProps {
  title: string;
  slug: string;
  intro: string;
  pricingNote?: string;
  tools: ComparisonTool[];
  bottomLine: string;
  children?: ReactNode;
}

export default function ComparisonArticle({ title, slug, intro, pricingNote, tools, bottomLine, children }: ComparisonArticleProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://stackpick.example";
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: intro,
    url: siteUrl + "/best/" + slug,
    dateModified: "2026-10-08",
    inLanguage: "en-US",
    mainEntityOfPage: { "@type": "WebPage", "@id": siteUrl + "/best/" + slug },
    author: { "@type": "Organization", name: "StackPick", url: siteUrl },
    publisher: { "@type": "Organization", name: "StackPick", url: siteUrl },
    isAccessibleForFree: true,
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <header className="bg-white">
        <div className="sp-container py-16 sm:py-24">
          <nav aria-label="Breadcrumb" className="text-sm text-[#6e6e73]">
            <Link href="/" className="hover:text-[#06c]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/best" className="hover:text-[#06c]">Comparisons</Link>
          </nav>
          <p className="sp-eyebrow mt-12">Software comparison</p>
          <h1 className="sp-title mt-4 max-w-5xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#6e6e73]">{intro}</p>
          <p className="mt-6 text-sm text-[#6e6e73]">Updated October 8, 2026</p>
        </div>
      </header>

      <section className="bg-[#f5f5f7]">
        <div className="sp-container py-14 sm:py-20">
          {pricingNote && (
            <div className="rounded-[28px] bg-white p-7 sm:p-9">
              <p className="text-sm font-semibold text-[#06c]">Pricing reality</p>
              <p className="mt-3 max-w-4xl text-lg leading-8">{pricingNote}</p>
            </div>
          )}

          <div className={pricingNote ? "mt-16" : ""}>
            <p className="sp-eyebrow">At a glance</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-.03em]">Which one fits?</h2>

            <div className="mt-8 overflow-hidden rounded-[28px] bg-white">
              <div className="hidden grid-cols-[1.1fr_1fr_1.2fr] border-b border-black/10 px-6 py-4 text-xs font-semibold text-[#6e6e73] sm:grid">
                <span>Tool</span><span>Best for</span><span>Free option</span>
              </div>
              {tools.map((tool, index) => (
                <div key={tool.name} className="grid gap-3 border-b border-black/10 px-6 py-6 last:border-0 sm:grid-cols-[1.1fr_1fr_1.2fr] sm:items-center">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-[#6e6e73]">{String(index + 1).padStart(2, "0")}</span>
                    <span className="text-lg font-semibold tracking-tight">{tool.name}</span>
                  </div>
                  <p className="text-sm text-[#6e6e73]"><span className="font-medium text-[#1d1d1f] sm:hidden">Best for: </span>{tool.bestFor}</p>
                  <p className="text-sm text-[#6e6e73]"><span className="font-medium text-[#1d1d1f] sm:hidden">Free: </span>{tool.freeOption}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="sp-container py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="sp-eyebrow">How we compare</p>
            <h2 className="sp-title mt-4">The details that change the decision.</h2>
            <p className="mt-6 text-lg leading-8 text-[#6e6e73]">
              We focus on practical decisions: what the tool costs, what the free or entry plan
              really includes, where it fits, and which trade-offs are easy to miss. We cross-check
              vendor documentation and pricing information rather than repeating a feature list.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-7 text-[#6e6e73]">
              For a useful comparison, start with the job you need to complete, test the same
              workflow in each finalist, and check what happens when the free plan stops being enough.
              Then verify the current price and terms directly with the vendor before you commit.
            </p>
          </div>

          <div className="mt-16 grid gap-12 border-t border-black/10 pt-10 md:grid-cols-3">
            {[
              ["01", "Cost reality", "Subscription, usage and important limits."],
              ["02", "Fit", "Who benefits and who should skip it."],
              ["03", "Trade-offs", "The limitation most likely to affect the decision."],
            ].map(([n, title, desc]) => (
              <div key={n}>
                <p className="text-sm font-semibold text-[#06c]">{n}</p>
                <h3 className="mt-3 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#6e6e73]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f7]">
        <div className="sp-container py-20 sm:py-28">
          <p className="sp-eyebrow">Do this before paying</p>
          <h2 className="sp-title mt-4 max-w-4xl">Run the same five-minute test on every finalist.</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#6e6e73]">
            Feature lists are easy to compare and easy to overvalue. If the service offers a free
            plan or trial, use the same small real-world task in each finalist instead. Record what
            you can complete, where you hit a limit, and what requires an upgrade.
          </p>
          <ol className="mt-10 grid gap-4 md:grid-cols-5">
            {[
              ["01", "Create", "Set up the smallest realistic workspace."],
              ["02", "Do", "Complete the task you actually need."],
              ["03", "Limit", "Find the first meaningful free-plan cap."],
              ["04", "Export", "Check whether your data can leave cleanly."],
              ["05", "Price", "Check the current paid plan and renewal terms."],
            ].map(([n, title, desc]) => (
              <li key={n} className="rounded-3xl bg-white p-6">
                <span className="text-sm font-semibold text-[#06c]">{n}</span>
                <h3 className="mt-3 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#6e6e73]">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {children}

            <section className="bg-[#f5f5f7]">
        <div className="sp-container py-20 sm:py-28">
          <p className="sp-eyebrow">Detailed comparison</p>
          <h2 className="sp-title mt-4 max-w-4xl">What to know before you choose.</h2>

          <div className="mt-14 space-y-5">
            {tools.map((tool, index) => (
              <section key={tool.name} className="rounded-[28px] bg-white p-7 sm:p-10">
                <div className="flex flex-col gap-7 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-[#06c]">{String(index + 1).padStart(2, "0")}</p>
                    <h3 className="mt-2 text-3xl font-semibold tracking-[-.035em]">{tool.name}</h3>
                    <p className="mt-2 text-sm text-[#6e6e73]">Best for {tool.bestFor}</p>
                  </div>
                  <a href={tool.url} target="_blank" rel="noopener noreferrer sponsored" className="sp-button-secondary shrink-0">
                    Check current pricing
                  </a>
                </div>
                <div className="mt-10 grid gap-8 border-t border-black/10 pt-8 sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold">Free option</p>
                    <p className="mt-2 text-sm leading-6 text-[#6e6e73]">{tool.freeOption}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Trade-off</p>
                    <p className="mt-2 text-sm leading-6 text-[#6e6e73]">{tool.tradeoff}</p>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="sp-container py-24 sm:py-32">
          <p className="text-sm font-semibold text-[#a1a1a6]">StackPick verdict</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-.04em] sm:text-6xl">The bottom line.</h2>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#a1a1a6]">{bottomLine}</p>
        </div>
      </section>

      <section className="bg-[#f5f5f7]">
        <div className="sp-container py-16 sm:py-20">
          <p className="sp-eyebrow">Keep exploring</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-.03em]">Related comparisons</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {relatedFor(slug).map((item) => (
              <Link key={item.href} href={item.href} className="group rounded-3xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,.08)]">
                <h3 className="text-lg font-semibold tracking-tight group-hover:text-[#06c]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#6e6e73]">{item.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#06c]">Read comparison <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none"><path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="sp-container py-8">
        <p className="text-xs leading-6 text-[#6e6e73]">
          Some links on this page may be affiliate links. Read our{" "}
          <Link href="/affiliate-disclosure" className="text-[#06c] hover:underline">affiliate disclosure</Link>.
        </p>
      </div>
    </article>
  );
}
