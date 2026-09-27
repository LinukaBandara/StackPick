import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Software Comparisons",
  description: "Every StackPick comparison across accounting, sales, marketing, operations, IT, and infrastructure software for small businesses.",
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
];
  { href: "/best/web-hosting", title: "Best Web Hosting for Small Business", desc: "Hostinger, SiteGround, Bluehost, Cloudways" },
  { href: "/best/business-phone-voip", title: "Best Business Phone System (VoIP) for Small Business", desc: "Nextiva, RingCentral, Ooma, Grasshopper" },
  { href: "/best/live-chat-software", title: "Best Live Chat Software for Small Business Websites", desc: "Tidio, Crisp, Intercom, Tawk.to" },

  { href: "/best/antivirus-endpoint-security", title: "Best Antivirus & Endpoint Security for Small Business", desc: "Bitdefender GravityZone, Microsoft Defender for Endpoint, Norton Small Business, CrowdStrike" },
  { href: "/best/hr-software", title: "Best HR Software for Small Business", desc: "BambooHR, Gusto, Rippling, Deel" },
  { href: "/best/survey-nps-software", title: "Best Survey & Customer Feedback (NPS) Software for Small Business", desc: "SurveyMonkey, Delighted, Zoho Survey" },
export default function BestHubPage() {
  { href: "/best/video-conferencing", title: "Best Video Conferencing Software for Small Business", desc: "Zoom, Google Meet, Microsoft Teams, Whereby" },
  { href: "/best/cloud-backup-software", title: "Best Cloud Backup Software for Small Business", desc: "Backblaze, IDrive, Acronis Cyber Protect, Carbonite" },
  { href: "/best/applicant-tracking-software", title: "Best Applicant Tracking System (ATS) for Small Business", desc: "Breezy HR, Zoho Recruit, Workable, Greenhouse" },
  { href: "/best/employee-scheduling-software", title: "Best Employee Scheduling Software for Small Business", desc: "When I Work, Deputy, Connecteam, 7shifts" },
  { href: "/best/business-email-hosting", title: "Best Business Email Hosting for Small Business", desc: "Google Workspace, Microsoft 365, Zoho Mail, Proton Mail" },
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      <h1 className="text-3xl font-bold text-ink mb-2">All Software Comparisons</h1>
      <p className="text-slate mb-8 max-w-xl">
        Every comparison on StackPick — researched, honest about trade-offs, and updated when
        pricing or plans change meaningfully.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {ARTICLES.map((a) => (
          <Link
            key={a.href}
            href={a.href}
            className="block rounded-card border border-borderc bg-white p-5 hover:border-indigo hover:shadow-sm transition-all"
          >
            <h2 className="font-semibold text-ink">{a.title}</h2>
            <p className="text-sm text-slate mt-1">{a.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
