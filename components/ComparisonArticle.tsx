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
    { href: "/best/crm-software-pricing", title: "CRM software pricing for small teams" },
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
    { href: "/best/employee-scheduling-software", title: "Employee scheduling software" },
    { href: "/best/form-builders", title: "Form builders for small business" },
  ],
  "n8n-vs-make-vs-zapier": [
    { href: "/best/automate-repetitive-small-business-tasks", title: "Automate repetitive small-business tasks" },
    { href: "/best/ai-automation-tools-small-businesses", title: "AI automation tools for small business" },
    { href: "/best/simple-small-business-software-stack", title: "Build a simple software stack" },
  ],

  "web-hosting": [
    { href: "/best/website-builders", title: "Website builders for small business" },
    { href: "/best/business-email-hosting", title: "Business email hosting" },
    { href: "/best/cloud-backup-software", title: "Cloud backup software" },
  ],
  "employee-scheduling-software": [
    { href: "/best/hr-software", title: "HR software for small business" },
    { href: "/best/payroll-software", title: "Payroll software" },
    { href: "/best/appointment-scheduling-software", title: "Appointment scheduling" },
  ],
  "hr-software": [
    { href: "/best/payroll-software", title: "Payroll software" },
    { href: "/best/employee-scheduling-software", title: "Employee scheduling" },
    { href: "/best/applicant-tracking-software", title: "Applicant tracking systems" },
  ],
  "expense-management-software": [
    { href: "/best/expense-management-software-pricing", title: "Expense management pricing" },
    { href: "/best/track-business-expenses-without-spreadsheets", title: "Track business expenses" },
    { href: "/best/accounting-software", title: "Accounting software" },
  ],
  "online-course-platforms": [
    { href: "/best/email-marketing-software", title: "Email marketing software" },
    { href: "/best/website-builders", title: "Website builders" },
    { href: "/best/form-builders", title: "Online form builders" },
  ],
  "contract-management-software": [
    { href: "/best/esignature-software", title: "E-signature software" },
    { href: "/best/crm-software", title: "CRM software" },
    { href: "/best/invoicing-software", title: "Invoicing software" },
  ],
  "business-vpn": [
    { href: "/best/password-managers", title: "Business password managers" },
    { href: "/best/antivirus-endpoint-security", title: "Endpoint security" },
    { href: "/best/cloud-storage", title: "Cloud storage" },
  ],
  "pos-systems": [
    { href: "/best/inventory-management-software", title: "Inventory management" },
    { href: "/best/accounting-software", title: "Accounting software" },
    { href: "/best/invoicing-software", title: "Invoicing software" },
  ],
  "applicant-tracking-software": [
    { href: "/best/hr-software", title: "HR software" },
    { href: "/best/employee-scheduling-software", title: "Employee scheduling" },
    { href: "/best/payroll-software", title: "Payroll software" },
  ],
  "cloud-backup-software": [
    { href: "/best/cloud-storage", title: "Cloud storage" },
    { href: "/best/antivirus-endpoint-security", title: "Endpoint security" },
    { href: "/best/business-vpn", title: "Business VPNs" },
  ],
  "survey-nps-software": [
    { href: "/best/form-builders", title: "Form builders" },
    { href: "/best/email-marketing-software", title: "Email marketing" },
    { href: "/best/crm-software", title: "CRM software" },
  ],
  "calendly-alternatives": [
    { href: "/best/appointment-scheduling-software", title: "Appointment scheduling" },
    { href: "/best/appointment-scheduling-software-pricing", title: "Scheduling software pricing" },
    { href: "/best/calendly-vs-google-calendar", title: "Calendly vs Google Calendar" },
  ],
  "freshbooks-alternatives": [
    { href: "/best/accounting-software", title: "Accounting software" },
    { href: "/best/invoicing-software", title: "Invoicing software" },
    { href: "/best/quickbooks-vs-freshbooks", title: "QuickBooks vs FreshBooks" },
  ],
  "quickbooks-alternatives": [
    { href: "/best/accounting-software", title: "Accounting software" },
    { href: "/best/free-accounting-software", title: "Free accounting software" },
    { href: "/best/quickbooks-vs-xero", title: "QuickBooks vs Xero" },
  ],
  "asana-alternatives": [
    { href: "/best/project-management-software", title: "Project management software" },
    { href: "/best/trello-vs-asana", title: "Trello vs Asana" },
    { href: "/best/asana-vs-clickup", title: "Asana vs ClickUp" },
  ],
  "trello-alternatives": [
    { href: "/best/project-management-software", title: "Project management software" },
    { href: "/best/trello-vs-asana", title: "Trello vs Asana" },
    { href: "/best/free-project-management-software", title: "Free project management" },
  ],
  "salesforce-alternatives-small-businesses": [
    { href: "/best/crm-software", title: "CRM software" },
    { href: "/best/hubspot-alternatives-small-businesses", title: "HubSpot alternatives" },
    { href: "/best/crm-software-pricing", title: "CRM software pricing" },
  ],
  "notion-alternatives-small-businesses": [
    { href: "/best/notion-vs-clickup", title: "Notion vs ClickUp" },
    { href: "/best/project-management-software", title: "Project management software" },
    { href: "/best/simple-small-business-software-stack", title: "Build a simple software stack" },
  ],
  "slack-alternatives-small-teams": [
    { href: "/best/video-conferencing", title: "Video conferencing" },
    { href: "/best/project-management-software", title: "Project management software" },
    { href: "/best/simple-small-business-software-stack", title: "Build a simple software stack" },
  ],
  "ai-tools-marketing-small-businesses": [
    { href: "/best/ai-writing-tools-small-businesses", title: "AI writing tools" },
    { href: "/best/social-media-scheduling", title: "Social media scheduling" },
    { href: "/best/email-marketing-software", title: "Email marketing software" },
  ],
  "invoice-clients-as-freelancer": [
    { href: "/best/invoicing-software", title: "Invoicing software" },
    { href: "/best/free-invoicing-software", title: "Free invoicing software" },
    { href: "/best/accounting-for-freelancers", title: "Accounting for freelancers" },
  ],
  "manage-customer-leads-as-freelancer": [
    { href: "/best/crm-for-freelancers", title: "CRM for freelancers" },
    { href: "/best/free-crm-software", title: "Free CRM software" },
    { href: "/best/crm-software-pricing", title: "CRM software pricing" },
  ],
  "free-vs-paid-business-software": [
    { href: "/best/how-to-choose-software-small-business", title: "How to choose software" },
    { href: "/best/simple-small-business-software-stack", title: "Build a simple software stack" },
    { href: "/best/free-business-tools-for-freelancers", title: "Free business tools" },
  ],
  "manage-client-projects-without-full-time-team": [
    { href: "/best/project-management-for-freelancers", title: "Project management for freelancers" },
    { href: "/best/free-project-management-software", title: "Free project management" },
    { href: "/best/trello-vs-asana", title: "Trello vs Asana" },
  ],
  "calendly-vs-google-calendar": [
    { href: "/best/appointment-scheduling-software", title: "Appointment scheduling" },
    { href: "/best/appointment-scheduling-software-pricing", title: "Scheduling software pricing" },
    { href: "/best/calendly-alternatives", title: "Calendly alternatives" },
  ],
  "notion-vs-clickup": [
    { href: "/best/notion-alternatives-small-businesses", title: "Notion alternatives" },
    { href: "/best/project-management-software", title: "Project management software" },
    { href: "/best/clickup-vs-monday", title: "ClickUp vs monday.com" },
  ],
  "canva-vs-adobe-express": [
    { href: "/best/social-media-scheduling", title: "Social media scheduling" },
    { href: "/best/ai-tools-marketing-small-businesses", title: "AI tools for marketing" },
    { href: "/best/website-builders", title: "Website builders" },
  ],

  "accounting-software": [
    { href: "/best/free-accounting-software", title: "Free accounting software" },
    { href: "/best/invoicing-software", title: "Invoicing software" },
    { href: "/best/freshbooks-alternatives", title: "FreshBooks alternatives" },
  ],
  "ai-customer-support-tools": [
    { href: "/best/help-desk-software", title: "Help desk software" },
    { href: "/best/live-chat-software", title: "Live chat software" },
    { href: "/best/ai-tools-business-content", title: "AI tools for business content" },
  ],
  "antivirus-endpoint-security": [
    { href: "/best/business-vpn", title: "Business VPNs" },
    { href: "/best/password-managers", title: "Password managers" },
    { href: "/best/cloud-backup-software", title: "Cloud backup software" },
  ],
  "asana-vs-clickup": [
    { href: "/best/asana-alternatives", title: "Asana alternatives" },
    { href: "/best/project-management-software", title: "Project management software" },
    { href: "/best/notion-vs-clickup", title: "Notion vs ClickUp" },
  ],
  "business-email-hosting": [
    { href: "/best/business-phone-voip", title: "Business phone and VoIP" },
    { href: "/best/video-conferencing", title: "Video conferencing" },
    { href: "/best/crm-software", title: "CRM software" },
  ],
  "business-phone-voip": [
    { href: "/best/business-email-hosting", title: "Business email hosting" },
    { href: "/best/video-conferencing", title: "Video conferencing" },
    { href: "/best/crm-software", title: "CRM software" },
  ],
  "clickup-vs-monday": [
    { href: "/best/asana-vs-clickup", title: "Asana vs ClickUp" },
    { href: "/best/notion-vs-clickup", title: "Notion vs ClickUp" },
    { href: "/best/project-management-software", title: "Project management software" },
  ],
  "cloud-storage": [
    { href: "/best/cloud-backup-software", title: "Cloud backup software" },
    { href: "/best/password-managers", title: "Password managers" },
    { href: "/best/business-vpn", title: "Business VPNs" },
  ],
  "expense-management-software-pricing": [
    { href: "/best/expense-management-software", title: "Expense management software" },
    { href: "/best/accounting-software", title: "Accounting software" },
    { href: "/best/track-business-expenses-without-spreadsheets", title: "Track business expenses" },
  ],
  "free-business-tools-for-freelancers": [
    { href: "/best/free-vs-paid-business-software", title: "Free vs paid business software" },
    { href: "/best/simple-small-business-software-stack", title: "Build a simple software stack" },
    { href: "/best/free-crm-software", title: "Free CRM software" },
  ],
  "free-crm-without-credit-card": [
    { href: "/best/free-crm-software", title: "Free CRM software" },
    { href: "/best/crm-for-freelancers", title: "CRM for freelancers" },
    { href: "/best/crm-software-pricing", title: "CRM software pricing" },
  ],
  "free-invoicing-without-credit-card": [
    { href: "/best/free-invoicing-software", title: "Free invoicing software" },
    { href: "/best/invoicing-software", title: "Invoicing software" },
    { href: "/best/accounting-for-freelancers", title: "Accounting for freelancers" },
  ],
  "free-project-management-without-credit-card": [
    { href: "/best/free-project-management-software", title: "Free project management software" },
    { href: "/best/project-management-software", title: "Project management software" },
    { href: "/best/trello-vs-asana", title: "Trello vs Asana" },
  ],
  "freshbooks-vs-wave": [
    { href: "/best/freshbooks-alternatives", title: "FreshBooks alternatives" },
    { href: "/best/free-accounting-software", title: "Free accounting software" },
    { href: "/best/accounting-software", title: "Accounting software" },
  ],
  "help-desk-software": [
    { href: "/best/live-chat-software", title: "Live chat software" },
    { href: "/best/ai-customer-support-tools", title: "AI customer support tools" },
    { href: "/best/crm-software", title: "CRM software" },
  ],
  "hubspot-alternatives-small-businesses": [
    { href: "/best/salesforce-alternatives-small-businesses", title: "Salesforce alternatives" },
    { href: "/best/crm-software", title: "CRM software" },
    { href: "/best/hubspot-vs-pipedrive", title: "HubSpot vs Pipedrive" },
  ],
  "hubspot-vs-pipedrive": [
    { href: "/best/hubspot-alternatives-small-businesses", title: "HubSpot alternatives" },
    { href: "/best/crm-software", title: "CRM software" },
    { href: "/best/pipedrive-vs-zoho-crm", title: "Pipedrive vs Zoho CRM" },
  ],
  "hubspot-vs-zoho-crm": [
    { href: "/best/hubspot-alternatives-small-businesses", title: "HubSpot alternatives" },
    { href: "/best/crm-software", title: "CRM software" },
    { href: "/best/pipedrive-vs-zoho-crm", title: "Pipedrive vs Zoho CRM" },
  ],
  "inventory-management-software": [
    { href: "/best/pos-systems", title: "POS systems" },
    { href: "/best/accounting-software", title: "Accounting software" },
    { href: "/best/expense-management-software", title: "Expense management" },
  ],
  "live-chat-software": [
    { href: "/best/help-desk-software", title: "Help desk software" },
    { href: "/best/ai-customer-support-tools", title: "AI customer support tools" },
    { href: "/best/crm-software", title: "CRM software" },
  ],
  "payroll-software": [
    { href: "/best/hr-software", title: "HR software" },
    { href: "/best/employee-scheduling-software", title: "Employee scheduling" },
    { href: "/best/accounting-software", title: "Accounting software" },
  ],
  "pipedrive-vs-zoho-crm": [
    { href: "/best/crm-software", title: "CRM software" },
    { href: "/best/hubspot-vs-pipedrive", title: "HubSpot vs Pipedrive" },
    { href: "/best/hubspot-vs-zoho-crm", title: "HubSpot vs Zoho CRM" },
  ],
  "social-media-scheduling": [
    { href: "/best/ai-tools-marketing-small-businesses", title: "AI tools for marketing" },
    { href: "/best/email-marketing-software", title: "Email marketing software" },
    { href: "/best/canva-vs-adobe-express", title: "Canva vs Adobe Express" },
  ],
  "time-tracking-software-pricing": [
    { href: "/best/time-tracking-software", title: "Time tracking software" },
    { href: "/best/invoicing-software", title: "Invoicing software" },
    { href: "/best/project-management-software", title: "Project management software" },
  ],
  "trello-vs-asana": [
    { href: "/best/trello-alternatives", title: "Trello alternatives" },
    { href: "/best/asana-alternatives", title: "Asana alternatives" },
    { href: "/best/project-management-software", title: "Project management software" },
  ],
  "video-conferencing": [
    { href: "/best/slack-alternatives-small-teams", title: "Slack alternatives" },
    { href: "/best/business-phone-voip", title: "Business phone and VoIP" },
    { href: "/best/project-management-software", title: "Project management software" },
  ],
  "zoho-invoice-vs-wave": [
    { href: "/best/free-accounting-software", title: "Free accounting software" },
    { href: "/best/accounting-software", title: "Accounting software" },
    { href: "/best/invoicing-software", title: "Invoicing software" },
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
  reviewedOn?: string;
  intro: string;
  quickAnswer?: string;
  pricingNote?: string;
  tools: ComparisonTool[];
  bottomLine: string;
  children?: ReactNode;
}

export default function ComparisonArticle({
  title,
  slug,
  reviewedOn,
  intro,
  quickAnswer,
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
        ...(reviewedOn ? { dateModified: `${reviewedOn}T00:00:00+00:00` } : {}),
        author: { "@type": "Organization", name: "StackPick Editorial", url: siteUrl },
        publisher: { "@type": "Organization", name: "StackPick", url: siteUrl },
        isAccessibleForFree: true,
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

      {/* Header & Meta */}
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
          {quickAnswer && (
            <div className="mt-7 max-w-3xl border-l-2 border-[#004bb5] pl-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#004bb5]">Short answer</p>
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-[#1d1d1f]">{quickAnswer}</p>
            </div>
          )}
          <p className="mt-5 text-xs text-[#86868b]">Independent research · Verify current pricing with each provider</p>
          {reviewedOn && (
            <p className="mt-2 text-xs text-[#86868b]">
              Reviewed by StackPick Editorial · {new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${reviewedOn}T00:00:00.000Z`))} · Desk research, not a hands-on product test
            </p>
          )}
        </div>
      </header>

      {/* Sticky Table of Contents Pill Bar */}
      <div className="sticky top-14 z-30 border-b border-black/[0.06] bg-white/90 backdrop-blur-md">
        <div className="sp-container flex items-center gap-2 overflow-x-auto py-2.5 scrollbar-none text-xs">
          <span className="text-[#86868b] font-medium shrink-0 pr-1">Jump to:</span>
          <button
            onClick={() => scrollToSection("glance")}
            className="shrink-0 rounded-full bg-[#f5f5f7] px-3 py-1 font-medium text-[#1d1d1f] hover:bg-[#e5e5ea] transition"
          >
            Overview
          </button>
          {tools.map((tool, idx) => (
            <button
              key={tool.name}
              onClick={() => scrollToSection(`tool-${idx}`)}
              className="shrink-0 rounded-full bg-[#f5f5f7] px-3 py-1 font-medium text-[#1d1d1f] hover:bg-[#e5e5ea] transition"
            >
              {tool.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("verdict")}
            className="shrink-0 rounded-full bg-[#f5f5f7] px-3 py-1 font-medium text-[#1d1d1f] hover:bg-[#e5e5ea] transition"
          >
            The Bottom Line
          </button>
        </div>
      </div>

      {/* At a glance Matrix */}
      <section id="glance" className="bg-[#f5f5f7] py-14 sm:py-20 scroll-mt-28">
        <div className="sp-container">
          {pricingNote && (
            <div className="mb-14 rounded-[24px] bg-white border border-[#d2d2d7] p-6 sm:p-8 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#004bb5]">Pricing reality</p>
              <p className="mt-2.5 max-w-4xl text-base leading-relaxed text-[#1d1d1f]">{pricingNote}</p>
            </div>
          )}

          <div>
            <p className="sp-eyebrow">At a glance</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[#1d1d1f]">Which one fits?</h2>

            <div className="mt-6 overflow-hidden rounded-[24px] border border-[#d2d2d7] bg-white shadow-sm">
              <div className="hidden grid-cols-[1.2fr_1fr_1.2fr_130px] border-b border-black/[0.08] bg-[#f5f5f7]/60 px-6 py-3.5 text-xs font-semibold text-[#6e6e73] sm:grid">
                <span>Tool</span>
                <span>Best for</span>
                <span>Free option</span>
                <span className="text-right">Official link</span>
              </div>
              {tools.map((tool, index) => (
                <div
                  key={tool.name}
                  className="grid gap-3 border-b border-black/[0.06] px-6 py-5 last:border-0 sm:grid-cols-[1.2fr_1fr_1.2fr_130px] sm:items-center"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-[#86868b]">{String(index + 1).padStart(2, "0")}</span>
                    <SoftwareLogo name={tool.name} url={tool.url} size="small" />
                    <span className="text-base font-semibold text-[#1d1d1f]">{tool.name}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#6e6e73]">
                    <span className="font-semibold text-[#1d1d1f] sm:hidden">Best for: </span>
                    {tool.bestFor}
                  </p>
                  <p className="text-xs sm:text-sm text-[#6e6e73]">
                    <span className="font-semibold text-[#1d1d1f] sm:hidden">Free: </span>
                    {tool.freeOption}
                  </p>
                  <div className="sm:text-right">
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-vendor-outbound="true"
                      data-vendor-action="comparison-website"
                      className="inline-flex rounded-full bg-[#004bb5] px-3.5 py-1.5 text-xs font-semibold text-white transition hover:bg-[#00388c]"
                    >
                      Official site ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Reviews */}
      <section className="bg-white py-16 sm:py-24">
        <div className="sp-container">
          <p className="sp-eyebrow">Detailed review</p>
          <h2 className="sp-title mt-3 max-w-4xl">What to know before you choose.</h2>

          <div className="mt-12 space-y-8">
            {tools.map((tool, index) => (
              <section
                id={`tool-${index}`}
                key={tool.name}
                className="scroll-mt-32 rounded-[28px] border border-[#d2d2d7] bg-white p-6 sm:p-10 transition-all duration-200 hover:shadow-md"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <SoftwareLogo name={tool.name} url={tool.url} />
                      <div>
                        <span className="text-xs font-bold text-[#004bb5]">OPTION {String(index + 1).padStart(2, "0")}</span>
                        <h3 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-[#1d1d1f]">{tool.name}</h3>
                      </div>
                    </div>
                    <p className="mt-1 text-sm text-[#6e6e73]">Best for {tool.bestFor}</p>
                  </div>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-vendor-outbound="true"
                    data-vendor-action="comparison-website"
                    className="inline-flex items-center justify-center rounded-full bg-[#004bb5] px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#00388c] shrink-0"
                  >
                    Open official site ↗
                  </a>
                </div>

                <div className="mt-8 grid gap-6 border-t border-black/[0.08] pt-8 sm:grid-cols-2">
                  <div className="rounded-2xl bg-[#f5f5f7] p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#1d1d1f]">Free plan and limits</p>
                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#48484a]">{tool.freeOption}</p>
                  </div>

                  <div className="rounded-2xl bg-[#f5f5f7] p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#1d1d1f]">The Trade-off</p>
                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#6e6e73]">{tool.tradeoff}</p>
                  </div>
                </div>
              </section>
            ))}
          </div>

          {children && <div className="mt-14 space-y-8">{children}</div>}
        </div>
      </section>

      {/* Final Verdict Section */}
      <section id="verdict" className="bg-black text-white scroll-mt-28 py-20 sm:py-28">
        <div className="sp-container">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">StackPick verdict</p>
          <h2 className="mt-3 max-w-4xl text-3xl sm:text-5xl font-bold tracking-tight text-white">The bottom line.</h2>
          <p className="mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-[#a1a1a6]">{bottomLine}</p>
        </div>
      </section>

      {/* Related guides: contextual internal links to adjacent search intents */}
      {RELATED_GUIDES[slug] && (
        <section className="bg-[#f5f5f7] border-t border-black/[0.06]">
          <div className="sp-container py-14 sm:py-16">
            <p className="sp-eyebrow">Keep exploring</p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-[#1d1d1f]">Related software guides</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6e6e73]">Explore closely related comparisons and practical guides to narrow your shortlist.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {RELATED_GUIDES[slug].filter((guide) => guide.href !== `/best/${slug}`).map((guide) => (
                <Link key={guide.href} href={guide.href} className="group rounded-2xl border border-[#d2d2d7] bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md">
                  <span className="text-sm font-semibold text-[#1d1d1f]">{guide.title}</span>
                  <span className="mt-3 block text-xs font-semibold text-[#004bb5] group-hover:underline">Read guide →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Affiliate disclosure footer */}
      <div className="sp-container py-8">
        <p className="text-xs leading-6 text-[#86868b]">
          The provider links on this page currently go directly to the vendors. If StackPick adds affiliate links in the future, we will clearly disclose them. Read our{" "}
          <Link href="/affiliate-disclosure" className="text-[#004bb5] hover:underline">
            affiliate disclosure
          </Link>{" "}
          for details.
        </p>
      </div>
    </article>
  );
}
