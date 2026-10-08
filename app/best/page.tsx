import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Software Comparisons",
  description:
    "Every StackPick comparison across accounting, sales, marketing, operations, IT, and infrastructure software for small businesses.",
  alternates: { canonical: "/best" },
};

const ARTICLES = [
  { href: "/best/invoicing-software", title: "Best Invoicing Software for Freelancers", desc: "Wave, FreshBooks, Zoho Invoice, Invoice Ninja, QuickBooks" },
  { href: "/best/accounting-software", title: "Best Accounting Software for Small Business", desc: "Xero, QuickBooks, Wave, Zoho Books" },
  { href: "/best/payroll-software", title: "Best Payroll Software for Small Business", desc: "Gusto, QuickBooks Payroll, OnPay, Patriot Software" },
  { href: "/best/expense-management-software", title: "Best Expense Management Software for Small Business", desc: "Expensify, Ramp, Zoho Expense" },
  { href: "/best/crm-software", title: "Best CRM Software for Freelancers & Small Teams", desc: "HubSpot, Pipedrive, Zoho CRM, Notion" },
  { href: "/best/email-marketing-software", title: "Best Email Marketing Software for Small Business", desc: "Mailchimp, Brevo, MailerLite, ActiveCampaign, Kit" },
  { href: "/best/social-media-scheduling", title: "Best Social Media Scheduling Tool for Small Business", desc: "Buffer, Hootsuite, Later" },
  { href: "/best/project-management-software", title: "Best Project Management Software for Small Teams", desc: "Trello, Asana, ClickUp, monday.com" },
  { href: "/best/website-builders", title: "Best Website Builder for Small Business", desc: "Squarespace, Wix, Shopify, Webflow" },
  { href: "/best/appointment-scheduling-software", title: "Best Appointment Scheduling Software for Small Business", desc: "Calendly, Acuity Scheduling, Cal.com" },
  { href: "/best/form-builders", title: "Best Form Builder for Small Business", desc: "Google Forms, Typeform, Jotform" },
  { href: "/best/cloud-storage", title: "Best Cloud Storage for Small Business Teams", desc: "Google Drive, Dropbox, Microsoft OneDrive" },
  { href: "/best/inventory-management-software", title: "Best Inventory Management Software for Small Business", desc: "Zoho Inventory, Sortly, Square for Retail, inFlow" },
  { href: "/best/pos-systems", title: "Best POS System for Small Business", desc: "Square, Toast, Clover, Shopify POS" },
  { href: "/best/online-course-platforms", title: "Best Online Course Platform for Creators & Small Business", desc: "Teachable, Thinkific, Kajabi" },
  { href: "/best/contract-management-software", title: "Best Contract Management Software for Small Business", desc: "PandaDoc, Concord, ContractSafe" },
  { href: "/best/business-vpn", title: "Best Business VPN for Remote Teams", desc: "NordLayer, Perimeter 81, Twingate, Cloudflare Zero Trust" },
  { href: "/best/password-managers", title: "Best Password Manager for Business Teams", desc: "1Password, Bitwarden, Keeper, NordPass" },
  { href: "/best/help-desk-software", title: "Best Help Desk Software for Small Business", desc: "Help Scout, Freshdesk, Zoho Desk, Gorgias" },
  { href: "/best/esignature-software", title: "Best E-Signature Software for Small Business", desc: "DocuSign, PandaDoc, Dropbox Sign, SignWell" },
  { href: "/best/time-tracking-software", title: "Best Time Tracking Software for Freelancers & Small Teams", desc: "Toggl Track, Clockify, Harvest, Hubstaff" },
  { href: "/best/web-hosting", title: "Best Web Hosting for Small Business", desc: "Hostinger, SiteGround, Bluehost, Cloudways" },
  { href: "/best/business-phone-voip", title: "Best Business Phone System (VoIP) for Small Business", desc: "Nextiva, RingCentral, Ooma, Grasshopper" },
  { href: "/best/live-chat-software", title: "Best Live Chat Software for Small Business Websites", desc: "Tidio, Crisp, Intercom, Tawk.to" },
  { href: "/best/antivirus-endpoint-security", title: "Best Antivirus & Endpoint Security for Small Business", desc: "Bitdefender GravityZone, Microsoft Defender for Endpoint, Norton Small Business, CrowdStrike" },
  { href: "/best/hr-software", title: "Best HR Software for Small Business", desc: "BambooHR, Gusto, Rippling, Deel" },
  { href: "/best/survey-nps-software", title: "Best Survey & Customer Feedback (NPS) Software for Small Business", desc: "SurveyMonkey, Delighted, Zoho Survey" },
  { href: "/best/video-conferencing", title: "Best Video Conferencing Software for Small Business", desc: "Zoom, Google Meet, Microsoft Teams, Whereby" },
  { href: "/best/cloud-backup-software", title: "Best Cloud Backup Software for Small Business", desc: "Backblaze, IDrive, Acronis Cyber Protect, Carbonite" },
  { href: "/best/applicant-tracking-software", title: "Best Applicant Tracking System (ATS) for Small Business", desc: "Breezy HR, Zoho Recruit, Workable, Greenhouse" },
  { href: "/best/employee-scheduling-software", title: "Best Employee Scheduling Software for Small Business", desc: "When I Work, Deputy, Connecteam, 7shifts" },
  { href: "/best/business-email-hosting", title: "Best Business Email Hosting for Small Business", desc: "Google Workspace, Microsoft 365, Zoho Mail, Proton Mail" },
];


const EXTENDED_ARTICLES = [["/best/crm-for-freelancers","Best CRM for Freelancers"],["/best/crm-for-small-businesses","Best CRM for Small Businesses"],["/best/free-crm-software","Best Free CRM Software"],["/best/crm-for-solopreneurs","Best CRM for Solopreneurs"],["/best/invoicing-for-freelancers","Best Invoicing Software for Freelancers"],["/best/free-invoicing-software","Best Free Invoicing Software"],["/best/invoicing-for-small-businesses","Best Invoicing Software for Small Businesses"],["/best/accounting-for-freelancers","Best Accounting Software for Freelancers"],["/best/accounting-for-small-businesses","Best Accounting Software for Small Businesses"],["/best/free-accounting-software","Best Free Accounting Software"],["/best/project-management-for-small-teams","Best Project Management for Small Teams"],["/best/free-project-management-software","Best Free Project Management Software"],["/best/project-management-for-freelancers","Best Project Management for Freelancers"],["/best/website-builder-for-small-businesses","Best Website Builder for Small Businesses"],["/best/website-builder-for-freelancers","Best Website Builder for Freelancers"],["/best/free-website-builders","Best Free Website Builders"],["/best/scheduling-for-small-businesses","Best Scheduling Software for Small Businesses"],["/best/free-scheduling-software","Best Free Scheduling Software"],["/best/hubspot-vs-pipedrive","HubSpot vs Pipedrive"],["/best/hubspot-vs-zoho-crm","HubSpot vs Zoho CRM"],["/best/pipedrive-vs-zoho-crm","Pipedrive vs Zoho CRM"],["/best/quickbooks-vs-xero","QuickBooks vs Xero"],["/best/quickbooks-vs-freshbooks","QuickBooks vs FreshBooks"],["/best/freshbooks-vs-wave","FreshBooks vs Wave"],["/best/trello-vs-asana","Trello vs Asana"],["/best/asana-vs-clickup","Asana vs ClickUp"],["/best/clickup-vs-monday","ClickUp vs monday.com"],["/best/notion-vs-clickup","Notion vs ClickUp"],["/best/calendly-vs-google-calendar","Calendly vs Google Calendar"],["/best/mailchimp-vs-brevo","Mailchimp vs Brevo"],["/best/mailchimp-vs-mailerlite","Mailchimp vs MailerLite"],["/best/zoho-invoice-vs-wave","Zoho Invoice vs Wave"],["/best/canva-vs-adobe-express","Canva vs Adobe Express"],["/best/hubspot-alternatives-small-businesses","Best HubSpot Alternatives for Small Businesses"],["/best/salesforce-alternatives-small-businesses","Best Salesforce Alternatives for Small Businesses"],["/best/quickbooks-alternatives","Best QuickBooks Alternatives"],["/best/freshbooks-alternatives","Best FreshBooks Alternatives"],["/best/calendly-alternatives","Best Calendly Alternatives"],["/best/mailchimp-alternatives","Best Mailchimp Alternatives"],["/best/slack-alternatives-small-teams","Best Slack Alternatives for Small Teams"],["/best/trello-alternatives","Best Trello Alternatives"],["/best/asana-alternatives","Best Asana Alternatives"],["/best/notion-alternatives-small-businesses","Best Notion Alternatives for Small Businesses"],["/best/free-crm-without-credit-card","Best Free CRM Without a Credit Card"],["/best/free-project-management-without-credit-card","Best Free Project Management Without a Credit Card"],["/best/free-invoicing-without-credit-card","Best Free Invoicing Without a Credit Card"],["/best/free-website-builders-no-coding","Best Free Website Builders Without Coding"],["/best/free-business-tools-for-freelancers","Best Free Business Tools for Freelancers"],["/best/how-to-choose-software-small-business","How to Choose Software for a Small Business"],["/best/how-much-business-software-do-you-need","How Much Business Software Do You Actually Need?"],["/best/simple-small-business-software-stack","How to Build a Simple Small-Business Software Stack"],["/best/track-business-expenses-without-spreadsheets","How to Track Business Expenses Without Spreadsheets"],["/best/invoice-clients-as-freelancer","How to Invoice Clients as a Freelancer"],["/best/manage-client-projects-without-full-time-team","How to Manage Client Projects Without a Full-Time Team"],["/best/automate-repetitive-small-business-tasks","How to Automate Repetitive Small-Business Tasks"],["/best/manage-customer-leads-as-freelancer","How to Manage Customer Leads as a Freelancer"],["/best/free-vs-paid-business-software","How to Choose Between Free and Paid Business Software"],["/best/switch-business-software-without-losing-data","How to Switch Business Software Without Losing Your Data"],["/best/ai-tools-small-businesses","Best AI Tools for Small Businesses"],["/best/ai-tools-freelancers","Best AI Tools for Freelancers"],["/best/ai-writing-tools-small-businesses","Best AI Writing Tools for Small Businesses"],["/best/ai-meeting-assistants","Best AI Meeting Assistants"],["/best/ai-customer-support-tools","Best AI Customer Support Tools"],["/best/ai-productivity-tools-freelancers","Best AI Productivity Tools for Freelancers"],["/best/ai-tools-marketing-small-businesses","Best AI Tools for Marketing Small Businesses"],["/best/ai-tools-business-content","Best AI Tools for Creating Business Content"],["/best/ai-automation-tools-small-businesses","Best AI Automation Tools for Small Businesses"],["/best/free-ai-tools-small-businesses","Best Free AI Tools for Small Businesses"]];

const CATEGORIES = [
  { name: "Money & Finance", desc: "Invoicing, accounting, payroll and expense tools.", items: ARTICLES.filter((a) => ["/best/invoicing-software", "/best/accounting-software", "/best/payroll-software", "/best/expense-management-software"].includes(a.href)) },
  { name: "Sales & Marketing", desc: "CRM, customer communication and growth tools.", items: ARTICLES.filter((a) => ["/best/crm-software", "/best/email-marketing-software", "/best/social-media-scheduling", "/best/appointment-scheduling-software", "/best/live-chat-software", "/best/survey-nps-software"].includes(a.href)) },
  { name: "Work & Operations", desc: "Project, people, inventory and workflow software.", items: ARTICLES.filter((a) => ["/best/project-management-software", "/best/time-tracking-software", "/best/employee-scheduling-software", "/best/inventory-management-software", "/best/pos-systems", "/best/contract-management-software", "/best/hr-software", "/best/applicant-tracking-software"].includes(a.href)) },
  { name: "Web & Business Infrastructure", desc: "Websites, hosting, communication and collaboration tools.", items: ARTICLES.filter((a) => ["/best/website-builders", "/best/web-hosting", "/best/business-email-hosting", "/best/form-builders", "/best/cloud-storage", "/best/video-conferencing", "/best/business-phone-voip", "/best/online-course-platforms", "/best/esignature-software"].includes(a.href)) },
  { name: "Security & IT", desc: "Security, backup and secure-access software for small teams.", items: ARTICLES.filter((a) => ["/best/password-managers", "/best/business-vpn", "/best/antivirus-endpoint-security", "/best/cloud-backup-software"].includes(a.href)) },
  { name: "Customer & Support Operations", desc: "Support and service tools for customer-facing teams.", items: ARTICLES.filter((a) => ["/best/help-desk-software"].includes(a.href)) },
];

export default function BestHubPage() {
  return (
    <>
      <section className="bg-white">
        <div className="sp-container py-20 sm:py-28">
          <p className="sp-eyebrow">StackPick comparisons</p>
          <h1 className="sp-title mt-4 max-w-4xl">Software worth a closer look.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6e6e73]">
            Practical comparisons for freelancers and small businesses. Start with the job,
            understand the trade-offs, then choose the tool that fits.
          </p>
        </div>
      </section>

      <section className="bg-[#f5f5f7]">
        <div className="sp-container py-14 sm:py-20">
          <div className="space-y-16">
            {CATEGORIES.map((category) => (
              <section key={category.name}>
                <div className="mb-7 max-w-2xl">
                  <h2 className="text-3xl font-semibold tracking-[-.03em]">{category.name}</h2>
                  <p className="mt-2 text-sm leading-6 text-[#6e6e73]">{category.desc}</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {category.items.map((a) => (
                    <Link key={a.href} href={a.href} className="group rounded-[28px] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,.08)] sm:p-8">
                      <div className="flex items-start justify-between gap-6">
                        <span className="text-sm font-semibold text-[#6e6e73]">Comparison</span>
                        <span className="inline-flex items-center gap-1.5 text-sm text-[#06c] opacity-0 transition-opacity group-hover:opacity-100">Read <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none"><path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
                      </div>
                      <h3 className="mt-10 max-w-xl text-2xl font-semibold leading-tight tracking-[-.03em] sm:text-3xl">{a.title}</h3>
                      <p className="mt-4 max-w-xl text-sm leading-6 text-[#6e6e73]">{a.desc}</p>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-[#e4e7ec] bg-white">
        <div className="sp-container py-16 sm:py-20">
          <div className="mb-7 max-w-2xl">
            <p className="sp-eyebrow">More from StackPick</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-.03em]">Explore the full decision library.</h2>
            <p className="mt-2 text-sm leading-6 text-[#6e6e73]">Persona guides, head-to-head comparisons, alternatives, practical workflows and AI tools.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {EXTENDED_ARTICLES.map(([href, title]) => (
              <Link key={href} href={href} className="rounded-2xl border border-[#e4e7ec] bg-[#f7f8fc] px-5 py-4 text-sm font-medium text-[#101828] transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md">{title}</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}