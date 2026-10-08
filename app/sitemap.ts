import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://stackpick.example";

const ROUTES = [
  "/",
  "/best",
  "/best/invoicing-software",
  "/best/accounting-software",
  "/best/payroll-software",
  "/best/expense-management-software",
  "/best/crm-software",
  "/best/email-marketing-software",
  "/best/social-media-scheduling",
  "/best/project-management-software",
  "/best/website-builders",
  "/best/appointment-scheduling-software",
  "/best/form-builders",
  "/best/cloud-storage",
  "/best/inventory-management-software",
  "/best/pos-systems",
  "/best/online-course-platforms",
  "/best/contract-management-software",
  "/best/business-vpn",
  "/best/password-managers",
  "/best/help-desk-software",
  "/best/esignature-software",
  "/best/time-tracking-software",
  "/best/web-hosting",
  "/best/business-phone-voip",
  "/best/live-chat-software",
  "/best/antivirus-endpoint-security",
  "/best/hr-software",
  "/best/survey-nps-software",
  "/best/video-conferencing",
  "/best/cloud-backup-software",
  "/best/applicant-tracking-software",
  "/best/employee-scheduling-software",
  "/best/business-email-hosting",
  "/about",
  "/affiliate-disclosure",
  "/privacy",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date("2026-10-08"),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
