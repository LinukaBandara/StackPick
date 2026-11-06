import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Software Face-Offs",
  description: "Compare popular software side by side and understand the practical trade-offs before choosing.",
  alternates: { canonical: "/comparisons" },
};

const COMPARISONS = [
  { title: "HubSpot vs Pipedrive", desc: "A broader customer platform versus a sales-focused pipeline.", href: "/best/hubspot-vs-pipedrive", category: "Sales" },
  { title: "HubSpot vs Zoho CRM", desc: "Compare ease of adoption, customization, and sales workflows.", href: "/best/hubspot-vs-zoho-crm", category: "Sales" },
  { title: "Pipedrive vs Zoho CRM", desc: "Pipeline-first selling versus a more configurable CRM.", href: "/best/pipedrive-vs-zoho-crm", category: "Sales" },
  { title: "QuickBooks vs Xero", desc: "Compare bookkeeping, reporting, and accountant collaboration.", href: "/best/quickbooks-vs-xero", category: "Finance" },
  { title: "QuickBooks vs FreshBooks", desc: "Broader accounting needs versus freelancer-friendly workflows.", href: "/best/quickbooks-vs-freshbooks", category: "Finance" },
  { title: "FreshBooks vs Wave", desc: "Compare invoice-first workflows and the cost of paid features.", href: "/best/freshbooks-vs-wave", category: "Finance" },
  { title: "Trello vs Asana", desc: "Visual boards versus more structured project coordination.", href: "/best/trello-vs-asana", category: "Productivity" },
  { title: "Asana vs ClickUp", desc: "Structured project management versus a highly configurable workspace.", href: "/best/asana-vs-clickup", category: "Productivity" },
  { title: "ClickUp vs monday.com", desc: "Compare flexible workspaces, boards, reporting, and admin effort.", href: "/best/clickup-vs-monday", category: "Productivity" },
  { title: "Notion vs ClickUp", desc: "Flexible docs and knowledge work versus task-focused project management.", href: "/best/notion-vs-clickup", category: "Productivity" },
  { title: "Calendly vs Google Calendar", desc: "Dedicated booking links versus calendar-native scheduling.", href: "/best/calendly-vs-google-calendar", category: "Operations" },
  { title: "Mailchimp vs Brevo", desc: "Compare email marketing workflows, pricing models, and audience needs.", href: "/best/mailchimp-vs-brevo", category: "Marketing" },
  { title: "Stripe vs Lemon Squeezy", desc: "Payment gateway vs merchant of record for SaaS and digital creators.", href: "/best/stripe-vs-lemonsqueezy", category: "Finance" },
  { title: "Stripe vs Paddle", desc: "Developer billing infrastructure vs international SaaS merchant of record.", href: "/best/stripe-vs-paddle", category: "Finance" },
  { title: "Ramp vs Brex", desc: "Compare spend management, corporate cards, cashback, and global scale.", href: "/best/ramp-vs-brex", category: "Finance" },
  { title: "Gusto vs Rippling", desc: "Small business payroll and benefits vs unified HR, IT, and device management.", href: "/best/gusto-vs-rippling", category: "People" },
  { title: "Deel vs Remote", desc: "International contractor management and global Employer of Record (EOR).", href: "/best/deel-vs-remote", category: "People" },
  { title: "Xero vs Wave", desc: "Full double-entry cloud accounting vs free invoicing and simple bookkeeping.", href: "/best/xero-vs-wave", category: "Finance" },
  { title: "Mercury vs Relay", desc: "Fintech business banking: startup treasury yields vs Profit First sub-accounts.", href: "/best/mercury-vs-relay", category: "Finance" },
  { title: "Best BILL Alternatives", desc: "Accounts payable options without expensive per-approver seat fees.", href: "/best/bill-com-alternatives", category: "Finance" },
  { title: "Wise Business vs Revolut Business", desc: "Multi-currency accounts, real mid-market FX rates, and team cards.", href: "/best/wise-business-vs-revolut-business", category: "Finance" },
  { title: "QuickBooks Online vs QuickBooks Desktop", desc: "Cloud mobility and bank feeds vs advanced job-costing and multi-entity files.", href: "/best/quickbooks-online-vs-quickbooks-desktop", category: "Finance" },
  { title: "Cursor vs GitHub Copilot", desc: "AI-first code editor fork vs standard IDE extensions and PR workflows.", href: "/best/cursor-vs-github-copilot", category: "Development" },
  { title: "Cursor vs Claude Code", desc: "In-editor visual assistant and Composer vs terminal-native autonomous agent.", href: "/best/cursor-vs-claude-code", category: "Development" },
  { title: "Linear vs Jira", desc: "Keyboard-first engineering speed and Cycles vs enterprise Atlassian governance.", href: "/best/linear-vs-jira", category: "Productivity" },
  { title: "Supabase vs Firebase", desc: "Postgres relational BaaS and pgvector vs Google NoSQL Firestore ecosystem.", href: "/best/supabase-vs-firebase", category: "Development" },
  { title: "Neon vs Supabase", desc: "Serverless Postgres with copy-on-write branching vs all-in-one BaaS platform.", href: "/best/neon-vs-supabase", category: "Development" },
  { title: "Postman vs Insomnia", desc: "Enterprise cloud API lifecycle platform vs lightweight local Git-synced client.", href: "/best/postman-vs-insomnia", category: "Development" },
  { title: "Clerk vs Auth0", desc: "Modern React/Next.js pre-built components vs enterprise identity federation.", href: "/best/clerk-vs-auth0", category: "Development" },
  { title: "Resend vs SendGrid", desc: "React Email and modern developer API vs legacy high-volume email infrastructure.", href: "/best/resend-vs-sendgrid", category: "Development" },
  { title: "Sentry vs Datadog", desc: "Code-level error tracking and Session Replay vs full cloud infrastructure APM.", href: "/best/sentry-vs-datadog", category: "Development" },
  { title: "v0 vs Cursor", desc: "Generative UI canvas for React/Tailwind vs full-stack AI coding in the desktop IDE.", href: "/best/v0-vs-cursor", category: "Development" },
  { title: "Replit vs GitHub Codespaces", desc: "Autonomous AI app creation and hosting vs cloud-hosted VS Code workstations.", href: "/best/replit-vs-github-codespaces", category: "Development" },
  { title: "Docker vs Podman", desc: "Ubiquitous Docker Desktop vs daemonless, rootless open-source container engine.", href: "/best/docker-vs-podman", category: "Development" },
  { title: "Apollo.io vs ZoomInfo", desc: "B2B lead prospecting and email sequencing vs enterprise contact data.", href: "/best/apollo-io-vs-zoominfo", category: "Sales" },
  { title: "Attio vs HubSpot", desc: "Flexible, spreadsheet-style data engine vs all-in-one traditional inbound CRM.", href: "/best/attio-vs-hubspot", category: "Sales" },
  { title: "Close vs Pipedrive", desc: "Built-in phone dialer and SMS cockpit vs visual Kanban deal pipeline.", href: "/best/close-vs-pipedrive", category: "Sales" },
  { title: "ActiveCampaign vs HubSpot", desc: "Complex visual automation branching vs enterprise inbound marketing suite.", href: "/best/activecampaign-vs-hubspot", category: "Marketing" },
  { title: "Kit vs MailerLite", desc: "Creator Network audience growth engine vs modern drag-and-drop newsletter builder.", href: "/best/kit-vs-mailerlite", category: "Marketing" },
  { title: "Semrush vs Ahrefs", desc: "All-in-one digital marketing and PPC suite vs industry-standard backlink crawler.", href: "/best/semrush-vs-ahrefs", category: "Marketing" },
  { title: "Intercom vs Help Scout", desc: "Autonomous Fin AI bot deflection vs personal, human-first shared email inboxes.", href: "/best/intercom-vs-help-scout", category: "Operations" },
  { title: "Gorgias vs Zendesk", desc: "Native Shopify 1-click order actions vs multi-channel enterprise ticketing.", href: "/best/gorgias-vs-zendesk", category: "Operations" },
  { title: "Framer vs Webflow", desc: "Figma-canvas interactive web design vs visual CSS box model development.", href: "/best/framer-vs-webflow", category: "Marketing" },
  { title: "Ghost vs WordPress", desc: "Clean independent publishing and memberships vs universal open-source CMS.", href: "/best/ghost-vs-wordpress", category: "Marketing" },
];

export default function ComparisonsPage() {
  return (
    <section className="bg-[#f5f5f7]">
      <div className="sp-container py-16 sm:py-24">
        <p className="sp-eyebrow">Side by side</p>
        <h1 className="sp-display mt-4 max-w-4xl">Two tools. One clearer decision.</h1>
        <p className="sp-body-large mt-6 max-w-2xl">Focused head-to-head comparisons that explain the meaningful differences, not just repeat feature lists.</p>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {COMPARISONS.map((item) => (
            <Link key={item.href} href={item.href} className="group rounded-[24px] border border-[#d2d2d7] bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-lg sm:p-8">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold uppercase tracking-wide text-[#6e6e73]">{item.category}</span>
                <span className="text-xs text-[#001D39]">Head-to-head</span>
              </div>
              <h2 className="mt-5 text-xl font-semibold tracking-tight text-[#1d1d1f]">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#6e6e73]">{item.desc}</p>
              <span className="mt-7 inline-block text-xs font-semibold text-[#001D39] group-hover:underline">Read comparison →</span>
            </Link>
          ))}
        </div>
        <p className="mt-10 text-sm text-[#6e6e73]">Want to explore a wider range? <Link href="/best" className="font-semibold text-[#001D39] hover:underline">Browse all software guides →</Link></p>
      </div>
    </section>
  );
}
