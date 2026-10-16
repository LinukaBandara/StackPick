"use client";

import Link from "next/link";
import SoftwareLogo from "@/components/SoftwareLogo";
import type { ReactNode } from "react";

const RELATED_GUIDES: Record<string, { href: string; title: string }[]> = {
  "accounting-for-freelancers": [
    { href: "/best/accounting-software", title: "Accounting for small businesses" },
    { href: "/best/free-accounting-software", title: "Free accounting software" },
    { href: "/best/quickbooks-vs-freshbooks", title: "QuickBooks vs FreshBooks" },
  ],
  "accounting-for-small-businesses": [
    { href: "/best/accounting-for-freelancers", title: "Accounting for freelancers" },
    { href: "/best/free-accounting-software", title: "Free accounting software" },
    { href: "/best/invoicing-for-small-businesses", title: "Invoicing for small businesses" },
    { href: "/best/track-business-expenses-without-spreadsheets", title: "Track business expenses" },
    { href: "/best/quickbooks-vs-xero", title: "QuickBooks vs Xero" },
  ],
  "quickbooks-vs-freshbooks": [
    { href: "/best/accounting-for-freelancers", title: "Accounting for freelancers" },
    { href: "/best/invoice-clients-as-freelancer", title: "How to invoice freelance clients" },
    { href: "/best/invoicing-for-small-businesses", title: "Invoicing for small businesses" },
  ],
  "quickbooks-vs-xero": [
    { href: "/best/accounting-software", title: "Accounting for small businesses" },
    { href: "/best/free-accounting-software", title: "Free accounting software" },
    { href: "/best/track-business-expenses-without-spreadsheets", title: "Track business expenses" },
  ],
  "free-accounting-software": [
    { href: "/best/accounting-software", title: "Accounting for small businesses" },
    { href: "/best/accounting-for-freelancers", title: "Accounting for freelancers" },
    { href: "/best/free-invoicing-software", title: "Free invoicing software" },
    { href: "/best/track-business-expenses-without-spreadsheets", title: "Track expenses without spreadsheets" },
  ],
  "crm-for-freelancers": [
    { href: "/best/crm-for-small-businesses", title: "CRM for small businesses" },
    { href: "/best/free-crm-software", title: "Free CRM software" },
    { href: "/best/manage-customer-leads-as-freelancer", title: "Manage freelance leads" },
  ],
  "crm-for-small-businesses": [
    { href: "/best/crm-for-freelancers", title: "CRM for freelancers" },
    { href: "/best/free-crm-software", title: "Free CRM software" },
    { href: "/best/hubspot-vs-pipedrive", title: "HubSpot vs Pipedrive" },
  ],
  "free-crm-software": [
    { href: "/best/crm-for-small-businesses", title: "CRM for small businesses" },
    { href: "/best/crm-for-freelancers", title: "CRM for freelancers" },
    { href: "/best/hubspot-alternatives-small-businesses", title: "HubSpot alternatives" },
  ],
  "invoicing-for-freelancers": [
    { href: "/best/invoicing-for-small-businesses", title: "Invoicing for small businesses" },
    { href: "/best/free-invoicing-software", title: "Free invoicing software" },
    { href: "/best/invoice-clients-as-freelancer", title: "How to invoice freelance clients" },
  ],
  "invoicing-for-small-businesses": [
    { href: "/best/invoicing-software", title: "Invoicing software for freelancers" },
    { href: "/best/free-invoicing-software", title: "Free invoicing software" },
    { href: "/best/quickbooks-vs-freshbooks", title: "QuickBooks vs FreshBooks" },
    { href: "/best/zoho-invoice-vs-wave", title: "Zoho Invoice vs Wave" },
  ],
  "free-invoicing-software": [
    { href: "/best/invoicing-software", title: "Invoicing software for freelancers" },
    { href: "/best/invoicing-for-small-businesses", title: "Invoicing for small businesses" },
    { href: "/best/zoho-invoice-vs-wave", title: "Zoho Invoice vs Wave" },
    { href: "/best/freshbooks-vs-wave", title: "FreshBooks vs Wave" },
  ],
  "project-management-for-freelancers": [
    { href: "/best/project-management-software", title: "Project management for small teams" },
    { href: "/best/free-project-management-software", title: "Free project management software" },
    { href: "/best/manage-client-projects-without-full-time-team", title: "Manage client projects" },
  ],
  "project-management-for-small-teams": [
    { href: "/best/project-management-for-freelancers", title: "Project management for freelancers" },
    { href: "/best/free-project-management-software", title: "Free project management software" },
    { href: "/best/trello-vs-asana", title: "Trello vs Asana" },
  ],
  "free-project-management-software": [
    { href: "/best/project-management-software", title: "Project management for small teams" },
    { href: "/best/project-management-for-freelancers", title: "Project management for freelancers" },
    { href: "/best/trello-alternatives", title: "Trello alternatives" },
  ],
  "email-marketing-software": [
    { href: "/best/mailchimp-alternatives", title: "Mailchimp alternatives" },
    { href: "/best/mailchimp-vs-brevo", title: "Mailchimp vs Brevo" },
    { href: "/best/mailchimp-vs-mailerlite", title: "Mailchimp vs MailerLite" },
  ],
  "mailchimp-vs-brevo": [
    { href: "/best/email-marketing-software", title: "Email marketing software" },
    { href: "/best/mailchimp-alternatives", title: "Mailchimp alternatives" },
    { href: "/best/mailchimp-vs-mailerlite", title: "Mailchimp vs MailerLite" },
  ],
  "mailchimp-vs-mailerlite": [
    { href: "/best/email-marketing-software", title: "Email marketing software" },
    { href: "/best/mailchimp-alternatives", title: "Mailchimp alternatives" },
    { href: "/best/mailchimp-vs-brevo", title: "Mailchimp vs Brevo" },
  ],
  "mailchimp-alternatives": [
    { href: "/best/email-marketing-software", title: "Email marketing software for small businesses" },
    { href: "/best/mailchimp-vs-brevo", title: "Mailchimp vs Brevo" },
    { href: "/best/mailchimp-vs-mailerlite", title: "Mailchimp vs MailerLite" },
  ],
  "free-website-builders": [
    { href: "/best/website-builders", title: "Website builders for small businesses" },
    { href: "/best/website-builder-for-freelancers", title: "Website builders for freelancers" },
    { href: "/best/web-hosting", title: "Web hosting for small businesses" },
  ],
  "website-builders": [
    { href: "/best/free-website-builders", title: "Free website builders" },
    { href: "/best/website-builder-for-freelancers", title: "Website builders for freelancers" },
    { href: "/best/web-hosting", title: "Web hosting for small businesses" },
  ],
  "website-builder-for-freelancers": [
    { href: "/best/free-website-builders", title: "Free website builders" },
    { href: "/best/website-builders", title: "Website builders for small businesses" },
    { href: "/best/web-hosting", title: "Web hosting for small businesses" },
  ],
  "free-scheduling-software": [
    { href: "/best/appointment-scheduling-software", title: "Appointment scheduling software" },
    { href: "/best/employee-scheduling-software", title: "Employee scheduling software" },
    { href: "/best/calendly-vs-google-calendar", title: "Calendly vs Google Calendar" },
  ],
  "scheduling-for-small-businesses": [
    { href: "/best/free-scheduling-software", title: "Free scheduling software" },
    { href: "/best/appointment-scheduling-software", title: "Appointment scheduling software" },
    { href: "/best/employee-scheduling-software", title: "Employee scheduling software" },
  ],
  "ai-tools-small-businesses": [
    { href: "/best/free-ai-tools-small-businesses", title: "Free AI tools for small businesses" },
    { href: "/best/ai-writing-tools-small-businesses", title: "AI writing tools for small businesses" },
    { href: "/best/ai-automation-tools-small-businesses", title: "AI automation tools" },
  ],
  "free-ai-tools-small-businesses": [
    { href: "/best/ai-tools-small-businesses", title: "AI tools for small businesses" },
    { href: "/best/ai-tools-marketing-small-businesses", title: "AI tools for small-business marketing" },
    { href: "/best/ai-writing-tools-small-businesses", title: "AI writing tools" },
  ],
  "ai-writing-tools-small-businesses": [
    { href: "/best/ai-tools-small-businesses", title: "AI tools for small businesses" },
    { href: "/best/free-ai-tools-small-businesses", title: "Free AI tools for small businesses" },
    { href: "/best/ai-tools-business-content", title: "AI tools for business content" },
    { href: "/best/ai-tools-freelancers", title: "AI tools for freelancers" },
  ],
  "how-to-choose-software-small-business": [
    { href: "/best/how-much-business-software-do-you-need", title: "How much business software do you need?" },
    { href: "/best/simple-small-business-software-stack", title: "Build a simple software stack" },
    { href: "/best/switch-business-software-without-losing-data", title: "Switch software without losing data" },
  ],
  "how-much-business-software-do-you-need": [
    { href: "/best/how-to-choose-software-small-business", title: "How to choose business software" },
    { href: "/best/simple-small-business-software-stack", title: "Build a simple software stack" },
    { href: "/best/free-vs-paid-business-software", title: "Free vs paid business software" },
  ],
  "simple-small-business-software-stack": [
    { href: "/best/how-to-choose-software-small-business", title: "How to choose business software" },
    { href: "/best/how-much-business-software-do-you-need", title: "How much software do you need?" },
    { href: "/best/automate-repetitive-small-business-tasks", title: "Automate repetitive tasks" },
  ],
  "track-business-expenses-without-spreadsheets": [
    { href: "/best/accounting-software", title: "Accounting for small businesses" },
    { href: "/best/accounting-for-freelancers", title: "Accounting for freelancers" },
    { href: "/best/free-accounting-software", title: "Free accounting software" },
  ],
  "automate-repetitive-small-business-tasks": [
    { href: "/best/n8n-vs-make-vs-zapier", title: "n8n vs Make vs Zapier" },
    { href: "/best/ai-automation-tools-small-businesses", title: "AI automation tools for small businesses" },
    { href: "/best/simple-small-business-software-stack", title: "Build a simple software stack" },
  ],
  "switch-business-software-without-losing-data": [
    { href: "/best/how-to-choose-software-small-business", title: "How to choose business software" },
    { href: "/best/how-much-business-software-do-you-need", title: "How much software do you need?" },
    { href: "/best/simple-small-business-software-stack", title: "Build a simple software stack" },
  ],
  "invoicing-software": [
    { href: "/best/free-invoicing-software", title: "Best free invoicing software" },
    { href: "/best/invoicing-for-small-businesses", title: "Invoicing for small businesses" },
    { href: "/best/zoho-invoice-vs-wave", title: "Zoho Invoice vs Wave" },
  ],
  "crm-software": [
    { href: "/best/crm-for-freelancers", title: "CRM for freelancers" },
    { href: "/best/crm-for-small-businesses", title: "CRM for small businesses" },
    { href: "/best/free-crm-software", title: "Best free CRM software" },
  ],
  "password-managers": [
    { href: "/best/business-vpn", title: "Business VPNs for remote teams" },
    { href: "/best/cloud-storage", title: "Cloud storage for small teams" },
    { href: "/best/antivirus-endpoint-security", title: "Endpoint security for small business" },
  ],
  "esignature-software": [
    { href: "/best/contract-management-software", title: "Contract management software" },
    { href: "/best/invoicing-software", title: "Invoicing software for freelancers" },
    { href: "/best/crm-for-small-businesses", title: "CRM for small businesses" },
  ],
  "form-builders": [
    { href: "/best/email-marketing-software", title: "Email marketing software" },
    { href: "/best/survey-nps-software", title: "Survey and customer feedback tools" },
    { href: "/best/appointment-scheduling-software", title: "Appointment scheduling software" },
  ],
  "ai-coding-assistants": [
    { href: "/best/ai-tools-react-nextjs", title: "AI tools for React and Next.js" },
    { href: "/best/llm-tools-for-developers", title: "LLM tools for developers" },
    { href: "/best/github-tools-for-developers", title: "GitHub tools for developers" },
  ],
  "ai-meeting-assistants": [
    { href: "/best/video-conferencing", title: "Video conferencing for small business" },
    { href: "/best/ai-productivity-tools-freelancers", title: "AI productivity tools for freelancers" },
    { href: "/best/ai-tools-freelancers", title: "AI tools for freelancers" },
  ],
  "chatgpt-vs-claude-for-freelancers": [
    { href: "/best/ai-tools-freelancers", title: "AI tools for freelancers" },
    { href: "/best/ai-writing-tools-small-businesses", title: "AI writing tools for small businesses" },
    { href: "/best/ai-productivity-tools-freelancers", title: "AI productivity tools for freelancers" },
  ],
  "ai-tools-freelancers": [
    { href: "/best/ai-writing-tools-small-businesses", title: "AI writing tools for small business" },
    { href: "/best/ai-meeting-assistants", title: "AI meeting assistants" },
    { href: "/best/ai-productivity-tools-freelancers", title: "AI productivity tools for freelancers" },
  ],
  "ai-productivity-tools-freelancers": [
    { href: "/best/ai-tools-freelancers", title: "AI tools for freelancers" },
    { href: "/best/ai-meeting-assistants", title: "AI meeting assistants" },
    { href: "/best/automate-repetitive-small-business-tasks", title: "Automate repetitive business tasks" },
  ],
  "time-tracking-software": [
    { href: "/best/invoicing-software", title: "Invoicing software for freelancers" },
    { href: "/best/invoice-clients-as-freelancer", title: "How to invoice freelance clients" },
    { href: "/best/project-management-for-freelancers", title: "Project management for freelancers" },
  ],
  "appointment-scheduling-software": [
    { href: "/best/free-scheduling-software", title: "Free scheduling software" },
    { href: "/best/scheduling-for-small-businesses", title: "Scheduling for small businesses" },
    { href: "/best/form-builders", title: "Form builders for small business" },
  ],
  "n8n-vs-make-vs-zapier": [
    { href: "/best/automate-repetitive-small-business-tasks", title: "Automate repetitive small-business tasks" },
    { href: "/best/ai-automation-tools-small-businesses", title: "AI automation tools for small business" },
    { href: "/best/simple-small-business-software-stack", title: "Build a simple software stack" },
  ],
};

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

export default function ComparisonArticle({
  title,
  slug,
  intro,
  pricingNote,
  tools,
  bottomLine,
  children,
}: ComparisonArticleProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://stackpick.tech";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: title,
        description: intro,
        url: `${siteUrl}/best/${slug}`,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${siteUrl}/best/${slug}`,
        },
        author: { "@type": "Organization", name: "StackPick Editorial", url: siteUrl },
        publisher: {
          "@type": "Organization",
          name: "StackPick",
          url: siteUrl,
          logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/og-image.png`,
          },
        },
        isAccessibleForFree: true,
        inLanguage: "en",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Comparisons",
            item: `${siteUrl}/best`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: title,
            item: `${siteUrl}/best/${slug}`,
          },
        ],
      },
      {
        "@type": "ItemList",
        name: title,
        itemListElement: tools.map((tool, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "SoftwareApplication",
            name: tool.name,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web, macOS, Windows, iOS, Android",
            description: tool.bestFor,
            offers: {
              "@type": "Offer",
              description: tool.freeOption,
            },
          },
        })),
      },
    ],
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <article className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <header className="bg-white border-b border-black/[0.06]">
        <div className="sp-container py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="text-xs text-[#6e6e73]">
            <Link href="/" className="hover:text-[#004bb5]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/best" className="hover:text-[#004bb5]">Comparisons</Link>
            <span className="mx-2">/</span>
            <span className="text-[#1d1d1f] font-medium">{title}</span>
          </nav>
          <p className="sp-eyebrow mt-8 uppercase tracking-wider text-xs">Software comparison</p>
          <h1 className="sp-title mt-3 max-w-4xl text-[#1d1d1f]">{title}</h1>
          <p className="mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-[#6e6e73]">{intro}</p>
          <p className="mt-5 text-xs text-[#86868b]">Independent research · Verify current pricing with each provider</p>
        </div>
      </header>
      <div className="sticky top-14 z-30 border-b border-black/[0.06] bg-white/90 backdrop-blur-md">
        <div className="sp-container flex items-center gap-2 overflow-x-auto py-2.5 scrollbar-none text-xs">
          <span className="text-[#86868b] font-medium shrink-0 pr-1">Jump to:</span>
          <button onClick={() => scrollToSection("glance")} className="shrink-0 rounded-full bg-[#f5f5f7] px-3 py-1 font-medium text-[#1d1d1f] hover:bg-[#e5e5ea] transition">Overview</button>
          {tools.map((tool, idx) => (
            <button key={tool.name} onClick={() => scrollToSection(`tool-${idx}`)} className="shrink-0 rounded-full bg-[#f5f5f7] px-3 py-1 font-medium text-[#1d1d1f] hover:bg-[#e5e5ea] transition">{tool.name}</button>
          ))}
          <button onClick={() => scrollToSection("bottom-line")} className="shrink-0 rounded-full bg-[#f5f5f7] px-3 py-1 font-medium text-[#1d1d1f] hover:bg-[#e5e5ea] transition">Bottom line</button>
        </div>
      </div>
      <div className="sp-container py-10 sm:py-14">
        <section id="glance" className="scroll-mt-28">
          <h2 className="text-xl font-semibold tracking-tight text-[#1d1d1f]">At a glance</h2>
          {pricingNote ? <p className="mt-3 text-sm leading-6 text-[#6e6e73]">{pricingNote}</p> : null}
          <div className="mt-6 overflow-x-auto rounded-2xl border border-[#d2d2d7]">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-[#f5f5f7] text-xs uppercase tracking-wider text-[#6e6e73]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Tool</th>
                  <th className="px-4 py-3 font-semibold">Best for</th>
                  <th className="px-4 py-3 font-semibold">Free option</th>
                  <th className="px-4 py-3 font-semibold">Main trade-off</th>
                </tr>
              </thead>
              <tbody>
                {tools.map((tool) => (
                  <tr key={tool.name} className="border-t border-[#d2d2d7]">
                    <td className="px-4 py-3 font-medium text-[#1d1d1f]">
                      <a href={tool.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#004bb5]">{tool.name}</a>
                    </td>
                    <td className="px-4 py-3 text-[#6e6e73]">{tool.bestFor}</td>
                    <td className="px-4 py-3 text-[#6e6e73]">{tool.freeOption}</td>
                    <td className="px-4 py-3 text-[#6e6e73]">{tool.tradeoff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <div className="mt-12 space-y-10">
          {tools.map((tool, idx) => (
            <section key={tool.name} id={`tool-${idx}`} className="scroll-mt-28 rounded-2xl border border-[#d2d2d7] p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <SoftwareLogo name={tool.name} url={tool.url} />
                <h2 className="text-lg font-semibold tracking-tight text-[#1d1d1f]">{tool.name}</h2>
              </div>
              <dl className="mt-5 grid gap-4 sm:grid-cols-3">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">Best for</dt>
                  <dd className="mt-1 text-sm leading-6 text-[#1d1d1f]">{tool.bestFor}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">Free option</dt>
                  <dd className="mt-1 text-sm leading-6 text-[#1d1d1f]">{tool.freeOption}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">Trade-off</dt>
                  <dd className="mt-1 text-sm leading-6 text-[#1d1d1f]">{tool.tradeoff}</dd>
                </div>
              </dl>
              <a href={tool.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex text-sm font-semibold text-[#001D39] hover:underline">Visit {tool.name} →</a>
            </section>
          ))}
        </div>
        {children}
        <section id="bottom-line" className="mt-12 scroll-mt-28 rounded-2xl bg-[#f5f5f7] p-6 sm:p-8">
          <h2 className="text-xl font-semibold tracking-tight text-[#1d1d1f]">Bottom line</h2>
          <p className="mt-3 text-sm leading-7 text-[#6e6e73]">{bottomLine}</p>
        </section>
        {RELATED_GUIDES[slug]?.length ? (
          <section className="mt-12">
            <h2 className="text-lg font-semibold tracking-tight text-[#1d1d1f]">Related guides</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {RELATED_GUIDES[slug].map((guide) => (
                <li key={guide.href}>
                  <Link href={guide.href} className="text-sm font-medium text-[#001D39] hover:underline">{guide.title} →</Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
      <div className="sp-container py-8">
        <p className="text-xs leading-6 text-[#86868b]">
          The provider links on this page currently go directly to the vendors. If StackPick adds affiliate links in the future, we will clearly disclose them. Read our{" "}
          <Link href="/affiliate-disclosure" className="text-[#004bb5] hover:underline">affiliate disclosure</Link>{" "}for details.
        </p>
      </div>
    </article>
  );
}
