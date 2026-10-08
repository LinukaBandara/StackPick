import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Software Comparisons & Buying Guides",
  description:
    "Explore StackPick's practical software comparisons for freelancers and small businesses - organized by the job you need to get done.",
  alternates: { canonical: "/best" },
};

const FEATURED = [
  { href: "/best/crm-software", tag: "Sales", title: "Best CRM Software for Freelancers & Small Teams", desc: "Compare the tools that help a small team keep leads, contacts and follow-ups under control." },
  { href: "/best/invoicing-software", tag: "Money", title: "Best Invoicing Software for Freelancers", desc: "Find an invoicing workflow that gets clients paid without adding unnecessary admin." },
  { href: "/best/project-management-software", tag: "Work", title: "Best Project Management Software for Small Teams", desc: "A practical look at task management, collaboration and the trade-offs behind popular picks." },
  { href: "/best/ai-tools-small-businesses", tag: "AI", title: "Best AI Tools for Small Businesses", desc: "Useful AI tools across writing, research, productivity and everyday business work." },
];

const CATEGORIES = [
  { key: "money", number: "01", name: "Money & finance", desc: "Invoicing, accounting, payroll and expenses.", href: "/best/invoicing-software", links: [["/best/invoicing-software","Invoicing"],["/best/accounting-software","Accounting"],["/best/payroll-software","Payroll"],["/best/expense-management-software","Expenses"]] },
  { key: "sales", number: "02", name: "Sales & marketing", desc: "CRM, email, social and customer acquisition.", href: "/best/crm-software", links: [["/best/crm-software","CRM"],["/best/email-marketing-software","Email marketing"],["/best/social-media-scheduling","Social scheduling"],["/best/appointment-scheduling-software","Scheduling"]] },
  { key: "work", number: "03", name: "Work & operations", desc: "Projects, people, inventory and daily workflows.", href: "/best/project-management-software", links: [["/best/project-management-software","Project management"],["/best/time-tracking-software","Time tracking"],["/best/employee-scheduling-software","Employee scheduling"],["/best/inventory-management-software","Inventory"]] },
  { key: "web", number: "04", name: "Web & infrastructure", desc: "Websites, hosting, communication and business tools.", href: "/best/website-builders", links: [["/best/website-builders","Website builders"],["/best/web-hosting","Web hosting"],["/best/business-email-hosting","Business email"],["/best/cloud-storage","Cloud storage"]] },
  { key: "security", number: "05", name: "Security & IT", desc: "Security, backup and secure access for small teams.", href: "/best/password-managers", links: [["/best/password-managers","Password managers"],["/best/business-vpn","Business VPN"],["/best/antivirus-endpoint-security","Endpoint security"],["/best/cloud-backup-software","Cloud backup"]] },
  { key: "support", number: "06", name: "Customer support", desc: "Help desks, chat and customer feedback tools.", href: "/best/help-desk-software", links: [["/best/help-desk-software","Help desk"],["/best/live-chat-software","Live chat"],["/best/survey-nps-software","Customer feedback"],["/best/esignature-software","E-signatures"]] },
];

const EXPLORE = [
  ["Comparisons", "Head-to-head decisions", "/best/hubspot-vs-pipedrive"],
  ["Alternatives", "Find a replacement", "/best/hubspot-alternatives-small-businesses"],
  ["Free tools", "No-cost starting points", "/best/free-business-tools-for-freelancers"],
  ["Workflows", "Solve the job, not the feature list", "/best/how-to-choose-software-small-business"],
  ["For freelancers", "Tools for one-person businesses", "/best/ai-tools-freelancers"],
  ["AI", "Practical AI buying guides", "/best/ai-tools-small-businesses"],
];

export default function BestHubPage() {
  return (
    <main>
      <section className="sp-library-hero">
        <div className="sp-container py-20 sm:py-28 lg:py-32">
          <div className="max-w-4xl">
            <p className="sp-eyebrow">The StackPick decision library</p>
            <h1 className="sp-library-title mt-5">Choose software with a reason.</h1>
            <p className="sp-library-lede mt-7">
              Practical comparisons for freelancers and small businesses. Start with the job,
              understand the trade-offs, then choose the tool that fits.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <a href="#categories" className="sp-button-primary">Browse by category <span aria-hidden="true">↓</span></a>
            <a href="#featured" className="sp-button-secondary">See featured decisions</a>
          </div>
          <div className="sp-library-proof mt-16">
            <div><strong>100+</strong><span>decision guides</span></div>
            <div><strong>6</strong><span>core categories</span></div>
            <div><strong>1</strong><span>clear goal: better fit</span></div>
          </div>
        </div>
      </section>

      <section id="featured" className="bg-white">
        <div className="sp-container py-16 sm:py-24">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="sp-eyebrow">Start here</p>
              <h2 className="sp-section-title mt-3">Popular decisions</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#667085]">
              The questions small teams ask most often - without the enterprise buying theatre.
            </p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {FEATURED.map((item, index) => (
              <Link key={item.href} href={item.href} className={`sp-feature-card ${index === 0 ? "sp-feature-card-primary" : ""}`}>
                <div className="flex items-center justify-between gap-4">
                  <span className="sp-category">{item.tag}</span>
                  <span className="sp-card-arrow" aria-hidden="true">↗</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="sp-read-link">Read comparison <span aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="categories" className="sp-library-categories">
        <div className="sp-container py-16 sm:py-24">
          <div className="max-w-2xl">
            <p className="sp-eyebrow">Browse the library</p>
            <h2 className="sp-section-title mt-3">What are you trying to get done?</h2>
            <p className="mt-4 text-base leading-7 text-[#667085]">
              Pick the area of your business first. We&apos;ll get you to the relevant tools.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((category) => (
              <article key={category.name} className={`sp-category-card sp-category-${category.key}`}>
                <div className="flex items-start justify-between">
                  <span className="sp-category-number">{category.number}</span>
                  <Link href={category.href} className="sp-card-arrow" aria-label={`Explore ${category.name}`}>↗</Link>
                </div>
                <h3>{category.name}</h3>
                <p>{category.desc}</p>
                <div className="sp-category-links">
                  {category.links.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="sp-container py-16 sm:py-24">
          <div className="sp-explore-header">
            <div>
              <p className="sp-eyebrow">More ways to choose</p>
              <h2 className="sp-section-title mt-3">Explore by decision type.</h2>
            </div>
            <p>Compare, replace, save, automate or find a tool for a specific kind of business.</p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {EXPLORE.map(([tag, title, href]) => (
              <Link key={href} href={href} className="sp-explore-card">
                <span>{tag}</span><strong>{title}</strong><i aria-hidden="true">↗</i>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-library-bottom">
        <div className="sp-container py-16 sm:py-24">
          <div className="sp-library-bottom-inner">
            <div>
              <p className="sp-eyebrow">How StackPick works</p>
              <h2 className="mt-3">Fit over feature count.</h2>
              <p className="mt-4">We focus on pricing reality, practical workflows, useful limits and the situations where a tool is - or isn&apos;t - worth your time.</p>
            </div>
            <Link href="/" className="sp-button-secondary">Learn about our method <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
