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
    <main>
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
    </>
  );
}