import type { Metadata } from "next";
import BestDirectory from "@/components/BestDirectory";

export const metadata: Metadata = {
  title: "All Software Comparisons",
  description:
    "Every StackPick comparison across accounting, sales, marketing, operations, IT, and infrastructure software for small businesses.",
  alternates: { canonical: "/best" },
};

const ARTICLES = [
  { href: "/best/invoicing-software", title: "Best Invoicing Software for Freelancers", desc: "Wave, FreshBooks, Zoho Invoice, Invoice Ninja, QuickBooks", category: "Finance" },
  { href: "/best/accounting-software", title: "Best Accounting Software for Small Business", desc: "Xero, QuickBooks, Wave, Zoho Books", category: "Finance" },
  { href: "/best/payroll-software", title: "Best Payroll Software for Small Business", desc: "Gusto, QuickBooks Payroll, OnPay, Patriot Software", category: "People" },
  { href: "/best/expense-management-software", title: "Best Expense Management Software for Small Business", desc: "Expensify, Ramp, Zoho Expense", category: "Finance" },
  { href: "/best/crm-software", title: "Best CRM Software for Freelancers & Small Teams", desc: "HubSpot, Pipedrive, Zoho CRM, Notion", category: "Sales" },
  { href: "/best/email-marketing-software", title: "Best Email Marketing Software for Small Business", desc: "Mailchimp, Brevo, MailerLite, ActiveCampaign, Kit", category: "Marketing" },
  { href: "/best/social-media-scheduling", title: "Best Social Media Scheduling Tool for Small Business", desc: "Buffer, Hootsuite, Later", category: "Marketing" },
  { href: "/best/project-management-software", title: "Best Project Management Software for Small Teams", desc: "Trello, Asana, ClickUp, monday.com", category: "Productivity" },
  { href: "/best/website-builders", title: "Best Website Builder for Small Business", desc: "Squarespace, Wix, Shopify, Webflow", category: "Marketing" },
  { href: "/best/appointment-scheduling-software", title: "Best Appointment Scheduling Software for Small Business", desc: "Calendly, Acuity Scheduling, Cal.com", category: "Operations" },
  { href: "/best/form-builders", title: "Best Form Builder for Small Business", desc: "Google Forms, Typeform, Jotform", category: "Productivity" },
  { href: "/best/cloud-storage", title: "Best Cloud Storage for Small Business Teams", desc: "Google Drive, Dropbox, Microsoft OneDrive", category: "Security" },
  { href: "/best/inventory-management-software", title: "Best Inventory Management Software for Small Business", desc: "Zoho Inventory, Sortly, Square for Retail, inFlow", category: "Operations" },
  { href: "/best/pos-systems", title: "Best POS System for Small Business", desc: "Square, Toast, Clover, Shopify POS", category: "Finance" },
  { href: "/best/online-course-platforms", title: "Best Online Course Platform for Creators & Small Business", desc: "Teachable, Thinkific, Kajabi", category: "Marketing" },
  { href: "/best/contract-management-software", title: "Best Contract Management Software for Small Business", desc: "PandaDoc, Concord, ContractSafe", category: "Operations" },
  { href: "/best/business-vpn", title: "Best Business VPN for Remote Teams", desc: "NordLayer, Perimeter 81, Twingate, Cloudflare Zero Trust", category: "Security" },
  { href: "/best/password-managers", title: "Best Password Manager for Business Teams", desc: "1Password, Bitwarden, Keeper, NordPass", category: "Security" },
  { href: "/best/help-desk-software", title: "Best Help Desk Software for Small Business", desc: "Help Scout, Freshdesk, Zoho Desk, Gorgias", category: "Operations" },
  { href: "/best/esignature-software", title: "Best E-Signature Software for Small Business", desc: "DocuSign, PandaDoc, Dropbox Sign, SignWell", category: "Operations" },
  { href: "/best/time-tracking-software", title: "Best Time Tracking Software for Freelancers & Small Teams", desc: "Toggl Track, Clockify, Harvest, Hubstaff", category: "Productivity" },
  { href: "/best/web-hosting", title: "Best Web Hosting for Small Business", desc: "Hostinger, SiteGround, Bluehost, Cloudways", category: "Infrastructure" },
  { href: "/best/business-phone-voip", title: "Best Business Phone System (VoIP) for Small Business", desc: "Nextiva, RingCentral, Ooma, Grasshopper", category: "Operations" },
  { href: "/best/live-chat-software", title: "Best Live Chat Software for Small Business Websites", desc: "Tidio, Crisp, Intercom, Tawk.to", category: "Sales" },
  { href: "/best/antivirus-endpoint-security", title: "Best Antivirus & Endpoint Security for Small Business", desc: "Bitdefender GravityZone, Microsoft Defender for Endpoint, Norton Small Business, CrowdStrike", category: "Security" },
  { href: "/best/hr-software", title: "Best HR Software for Small Business", desc: "BambooHR, Gusto, Rippling, Deel", category: "People" },
  { href: "/best/survey-nps-software", title: "Best Survey & Customer Feedback (NPS) Software for Small Business", desc: "SurveyMonkey, Delighted, Zoho Survey", category: "Marketing" },
  { href: "/best/video-conferencing", title: "Best Video Conferencing Software for Small Business", desc: "Zoom, Google Meet, Microsoft Teams, Whereby", category: "Productivity" },
  { href: "/best/cloud-backup-software", title: "Best Cloud Backup Software for Small Business", desc: "Backblaze, IDrive, Acronis Cyber Protect, Carbonite", category: "Security" },
  { href: "/best/applicant-tracking-software", title: "Best Applicant Tracking System (ATS) for Small Business", desc: "Breezy HR, Zoho Recruit, Workable, Greenhouse", category: "People" },
  { href: "/best/employee-scheduling-software", title: "Best Employee Scheduling Software for Small Business", desc: "When I Work, Deputy, Connecteam, 7shifts", category: "People" },
  { href: "/best/business-email-hosting", title: "Best Business Email Hosting for Small Business", desc: "Google Workspace, Microsoft 365, Zoho Mail, Proton Mail", category: "Infrastructure" },
  { href: "/best/crm-for-freelancers", title: "Best CRM for Freelancers", desc: "Track leads, client conversations and follow-ups without creating a heavy sales process.", category: "Sales" },
  { href: "/best/crm-for-small-businesses", title: "Best CRM for Small Businesses", desc: "Compare customer-management tools by team fit, pipeline visibility and everyday administration.", category: "Sales" },
  { href: "/best/free-crm-software", title: "Best Free CRM Software", desc: "Understand the limits that matter in free CRM plans, including users, contacts and automation.", category: "Sales" },
  { href: "/best/crm-for-solopreneurs", title: "Best CRM for Solopreneurs", desc: "A lightweight way to organize prospects, client notes and next actions when you work alone.", category: "Sales" },
  { href: "/best/invoicing-for-freelancers", title: "Best Invoicing Software for Freelancers", desc: "Compare invoice creation, reminders, payment collection and client-friendly workflows.", category: "Finance" },
  { href: "/best/free-invoicing-software", title: "Best Free Invoicing Software", desc: "Compare free invoice tools and check payment, client and monthly-document limits.", category: "Finance" },
  { href: "/best/invoicing-for-small-businesses", title: "Best Invoicing for Small Businesses", desc: "Find an invoicing workflow that supports recurring bills, overdue follow-ups and bookkeeping.", category: "Finance" },
  { href: "/best/accounting-for-freelancers", title: "Best Accounting Software for Freelancers", desc: "Compare expense tracking, tax-time organization and reports for independent workers.", category: "Finance" },
  { href: "/best/accounting-for-small-businesses", title: "Best Accounting Software for Small Businesses", desc: "Evaluate bookkeeping tools by bank feeds, reconciliation, reporting and accountant access.", category: "Finance" },
  { href: "/best/free-accounting-software", title: "Best Free Accounting Software", desc: "Understand what free accounting tools cover and when limits make a paid plan necessary.", category: "Finance" },
  { href: "/best/project-management-for-small-teams", title: "Best Project Management for Small Teams", desc: "Compare task ownership, deadlines and team visibility without enterprise-level overhead.", category: "Productivity" },
  { href: "/best/free-project-management-software", title: "Best Free Project Management Software", desc: "Compare free task and project tools by seats, projects, views and collaboration limits.", category: "Productivity" },
  { href: "/best/project-management-for-freelancers", title: "Best Project Management for Freelancers", desc: "Organize client work, deadlines and reviews while keeping administration manageable.", category: "Productivity" },
  { href: "/best/website-builder-for-small-businesses", title: "Best Website Builder for Small Businesses", desc: "Compare site builders by design control, maintenance, commerce needs and ownership trade-offs.", category: "Marketing" },
  { href: "/best/website-builder-for-freelancers", title: "Best Website Builder for Freelancers", desc: "Choose a portfolio or service-site builder based on launch speed, flexibility and upkeep.", category: "Marketing" },
  { href: "/best/free-website-builders", title: "Best Free Website Builders", desc: "Check branding, domain, storage and publishing restrictions before choosing a free builder.", category: "Marketing" },
  { href: "/best/scheduling-for-small-businesses", title: "Best Scheduling Software for Small Businesses", desc: "Compare booking, reminders, staff calendars and client self-service for service businesses.", category: "Operations" },
  { href: "/best/free-scheduling-software", title: "Best Free Scheduling Software", desc: "Review free booking tools and verify calendar, appointment and notification limits.", category: "Operations" },
  { href: "/best/hubspot-vs-pipedrive", title: "HubSpot vs Pipedrive", desc: "Compare a broader customer platform with a sales-focused pipeline workflow.", category: "Sales" },
  { href: "/best/hubspot-vs-zoho-crm", title: "HubSpot vs Zoho CRM", desc: "Compare ease of adoption, customization and the systems your sales process needs.", category: "Sales" },
  { href: "/best/pipedrive-vs-zoho-crm", title: "Pipedrive vs Zoho CRM", desc: "Choose between pipeline-focused selling and a more configurable CRM workflow.", category: "Sales" },
  { href: "/best/quickbooks-vs-xero", title: "QuickBooks vs Xero", desc: "Compare accounting workflows, reporting, bank reconciliation and accountant collaboration.", category: "Finance" },
  { href: "/best/quickbooks-vs-freshbooks", title: "QuickBooks vs FreshBooks", desc: "Compare broader bookkeeping needs with freelancer-friendly invoicing and client workflows.", category: "Finance" },
  { href: "/best/freshbooks-vs-wave", title: "FreshBooks vs Wave", desc: "Compare invoice-first workflows, bookkeeping needs and the total cost of paid features.", category: "Finance" },
  { href: "/best/trello-vs-asana", title: "Trello vs Asana", desc: "Compare visual boards with more structured project ownership and deadline coordination.", category: "Productivity" },
  { href: "/best/asana-vs-clickup", title: "Asana vs ClickUp", desc: "Compare structured project coordination with a highly configurable workspace.", category: "Productivity" },
  { href: "/best/clickup-vs-monday", title: "ClickUp vs monday.com", desc: "Compare customizable workspaces, visual boards, reporting and administration effort.", category: "Productivity" },
  { href: "/best/notion-vs-clickup", title: "Notion vs ClickUp", desc: "Compare flexible documentation and knowledge work with task-focused project management.", category: "Productivity" },
  { href: "/best/calendly-vs-google-calendar", title: "Calendly vs Google Calendar", desc: "Compare dedicated booking links with calendar-native scheduling for your appointment flow.", category: "Operations" },
  { href: "/best/mailchimp-vs-brevo", title: "Mailchimp vs Brevo", desc: "Compare audience billing, campaign workflows and multi-channel marketing needs.", category: "Marketing" },
  { href: "/best/mailchimp-vs-mailerlite", title: "Mailchimp vs MailerLite", desc: "Compare newsletter workflows, audience growth, automation and plan restrictions.", category: "Marketing" },
  { href: "/best/zoho-invoice-vs-wave", title: "Zoho Invoice vs Wave", desc: "Compare invoice creation, payment collection and the accounting workflow around each tool.", category: "Finance" },
  { href: "/best/canva-vs-adobe-express", title: "Canva vs Adobe Express", desc: "Compare quick brand assets, templates, collaboration and design-workflow fit.", category: "Marketing" },
  { href: "/best/hubspot-alternatives-small-businesses", title: "HubSpot Alternatives for Small Businesses", desc: "Explore customer-management options when cost, complexity or feature sprawl becomes a concern.", category: "Sales" },
  { href: "/best/salesforce-alternatives-small-businesses", title: "Salesforce Alternatives for Small Businesses", desc: "Compare simpler CRM options for teams that do not need a highly customized enterprise setup.", category: "Sales" },
  { href: "/best/quickbooks-alternatives", title: "QuickBooks Alternatives", desc: "Compare bookkeeping alternatives by accounting workflow, reporting and migration requirements.", category: "Finance" },
  { href: "/best/freshbooks-alternatives", title: "FreshBooks Alternatives", desc: "Explore invoicing and accounting alternatives based on client work and reporting needs.", category: "Finance" },
  { href: "/best/calendly-alternatives", title: "Calendly Alternatives", desc: "Compare booking tools by calendar connections, team scheduling and customization.", category: "Operations" },
  { href: "/best/mailchimp-alternatives", title: "Mailchimp Alternatives", desc: "Explore email marketing options based on audience pricing, automation and campaign workflow.", category: "Marketing" },
  { href: "/best/slack-alternatives-small-teams", title: "Slack Alternatives for Small Teams", desc: "Compare team messaging options by search, integrations, guest access and notification noise.", category: "Productivity" },
  { href: "/best/trello-alternatives", title: "Trello Alternatives", desc: "Find other visual task and project tools when boards no longer fit your workflow.", category: "Productivity" },
  { href: "/best/asana-alternatives", title: "Asana Alternatives", desc: "Compare project-management alternatives by usability, reporting, workflow structure and cost.", category: "Productivity" },
  { href: "/best/notion-alternatives-small-businesses", title: "Notion Alternatives for Small Businesses", desc: "Compare knowledge-base and workspace tools by structure, collaboration and maintenance.", category: "Productivity" },
  { href: "/best/free-crm-without-credit-card", title: "Free CRM Without a Credit Card", desc: "Compare CRM trials and free plans while checking signup requirements and usage limits.", category: "Sales" },
  { href: "/best/free-project-management-without-credit-card", title: "Free Project Management Without a Credit Card", desc: "Find project tools with no-card signup options and verify the limits before adopting one.", category: "Productivity" },
  { href: "/best/free-invoicing-without-credit-card", title: "Free Invoicing Without a Credit Card", desc: "Review invoice tools with no-card signup options and check payment or document restrictions.", category: "Finance" },
  { href: "/best/free-website-builders-no-coding", title: "Free Website Builders With No Coding", desc: "Compare beginner-friendly builders and check free publishing, branding and domain limits.", category: "Marketing" },
  { href: "/best/free-business-tools-for-freelancers", title: "Free Business Tools for Freelancers", desc: "Build a lean tool stack for client work, invoicing, scheduling and project organization.", category: "Productivity" },
  { href: "/best/how-to-choose-software-small-business", title: "How to Choose Software for a Small Business", desc: "A practical framework for defining requirements, testing tools and avoiding unnecessary subscriptions.", category: "Productivity" },
  { href: "/best/how-much-business-software-do-you-need", title: "How Much Business Software Do You Need?", desc: "Identify overlapping subscriptions and decide which tools genuinely improve your workflow.", category: "Productivity" },
  { href: "/best/simple-small-business-software-stack", title: "A Simple Small-Business Software Stack", desc: "Plan a minimal set of tools for customers, projects, invoicing and communication.", category: "Productivity" },
  { href: "/best/track-business-expenses-without-spreadsheets", title: "Track Business Expenses Without Spreadsheets", desc: "Compare ways to capture receipts, categorize spending and prepare usable expense records.", category: "Finance" },
  { href: "/best/invoice-clients-as-freelancer", title: "How to Invoice Clients as a Freelancer", desc: "A practical workflow for invoice details, due dates, payment reminders and record keeping.", category: "Finance" },
  { href: "/best/manage-client-projects-without-full-time-team", title: "Manage Client Projects Without a Full-Time Team", desc: "Set expectations, assign ownership and track delivery across a small or freelance team.", category: "Productivity" },
  { href: "/best/automate-repetitive-small-business-tasks", title: "Automate Repetitive Small-Business Tasks", desc: "Find repeatable workflows worth automating and plan safeguards for errors and handoffs.", category: "Operations" },
  { href: "/best/manage-customer-leads-as-freelancer", title: "Manage Customer Leads as a Freelancer", desc: "Create a simple process for lead capture, follow-up, qualification and next actions.", category: "Sales" },
  { href: "/best/free-vs-paid-business-software", title: "Free vs Paid Business Software", desc: "Decide when plan limits, time savings, support or collaboration justify paying.", category: "Productivity" },
  { href: "/best/switch-business-software-without-losing-data", title: "Switch Business Software Without Losing Data", desc: "Plan exports, field mapping, permissions, testing and a safe cutover before migration.", category: "Operations" },
  { href: "/best/ai-tools-small-businesses", title: "AI Tools for Small Businesses", desc: "Evaluate AI tools by specific business tasks, review requirements, privacy and total cost.", category: "Productivity" },
  { href: "/best/ai-tools-freelancers", title: "AI Tools for Freelancers", desc: "Compare AI workflows for research, writing, planning and admin without adding tool sprawl.", category: "Productivity" },
  { href: "/best/ai-writing-tools-small-businesses", title: "AI Writing Tools for Small Businesses", desc: "Compare drafting and editing workflows while keeping fact-checking and human review in place.", category: "Marketing" },
  { href: "/best/ai-meeting-assistants", title: "AI Meeting Assistants", desc: "Evaluate meeting notes, summaries, consent, integrations and how recordings are handled.", category: "Productivity" },
  { href: "/best/ai-customer-support-tools", title: "AI Customer Support Tools", desc: "Compare support automation by handoff quality, knowledge sources and escalation controls.", category: "Operations" },
  { href: "/best/ai-productivity-tools-freelancers", title: "AI Productivity Tools for Freelancers", desc: "Identify useful automations for planning and admin while checking output quality and privacy.", category: "Productivity" },
  { href: "/best/ai-tools-marketing-small-businesses", title: "AI Marketing Tools for Small Businesses", desc: "Compare AI-assisted campaign workflows with brand review, accuracy and approval steps.", category: "Marketing" },
  { href: "/best/ai-tools-business-content", title: "AI Tools for Business Content", desc: "Evaluate content tools by editing control, factual verification and repeatable publishing workflow.", category: "Marketing" },
  { href: "/best/ai-automation-tools-small-businesses", title: "AI Automation Tools for Small Businesses", desc: "Compare task automation options by integrations, failure handling, permissions and monitoring.", category: "Operations" },
  { href: "/best/free-ai-tools-small-businesses", title: "Free AI Tools for Small Businesses", desc: "Check free usage caps, data policies and upgrade triggers before building a workflow around AI.", category: "Productivity" },
];

export default function BestHubPage() {
  return (
    <>
      <section className="bg-white border-b border-black/[0.06]">
        <div className="sp-container py-16 sm:py-24">
          <p className="sp-eyebrow uppercase tracking-wider text-xs">StackPick comparisons</p>
          <h1 className="sp-title mt-3 max-w-4xl">Software worth a closer look.</h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-[#6e6e73]">
            Practical comparisons for freelancers and small businesses. Start with the job,
            understand the trade-offs, then choose the tool that fits.
          </p>
        </div>
      </section>

      <section className="bg-[#f5f5f7]">
        <BestDirectory articles={ARTICLES} />
      </section>
    </>
  );
}
