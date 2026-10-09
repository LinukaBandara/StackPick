import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Software Comparisons",
  description: "Every StackPick comparison across accounting, sales, marketing, operations, IT, and infrastructure software for small businesses.",
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
];

export default function BestHubPage() {
  return (
    <section className="page-shell">
      <p className="page-eyebrow">THE STACKPICK LIBRARY</p>
      <h1 className="page-title">Find the right tool<br />for the work ahead.</h1>
      <p className="page-intro">Browse practical, independent comparisons across the software categories that keep small businesses moving.</p>
      <div className="hub-grid">
        {ARTICLES.map((article, index) => (
          <Link href={article.href} key={article.href} className="hub-card">
            <div className="hub-card-top"><span>{article.category}</span><span>{String(index + 1).padStart(2, "0")} ↗</span></div>
            <h2>{article.title}</h2>
            <p>{article.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
