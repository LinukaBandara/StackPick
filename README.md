# StackPick

Honest, budget-focused software comparisons for freelancers and small teams. Next.js 14
(App Router) + TypeScript + Tailwind CSS.

## Setup

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## What's built

- **Foundation**: strict TypeScript, Tailwind indigo/slate palette, semantic HTML, real
  favicon/apple-touch-icon/OG image, `llms.txt`, AI-crawler-aware `robots.ts`.
- **SEO infra**: per-page metadata + canonical URLs, `sitemap.ts`, `WebSite`/`Organization`
  JSON-LD sitewide, `Article` JSON-LD per comparison.
- **`/best` hub page** listing all comparisons (nav links here instead of a cluttered
  12-item menu — cleaner UX at this content volume).
- **32 genuine comparison articles**, all researched (cross-checked multiple sources, not
  fabricated), all using the shared `components/ComparisonArticle.tsx`:
  1. `/best/invoicing-software` — Wave, FreshBooks, Zoho Invoice, Invoice Ninja, QuickBooks
  2. `/best/accounting-software` — Xero, QuickBooks, Wave, Zoho Books
  3. `/best/payroll-software` — Gusto, QuickBooks Payroll, OnPay, Patriot Software
  4. `/best/expense-management-software` — Expensify, Ramp, Zoho Expense
  5. `/best/crm-software` — HubSpot, Pipedrive, Zoho CRM, Notion
  6. `/best/email-marketing-software` — Mailchimp, Brevo, MailerLite, ActiveCampaign, Kit
  7. `/best/social-media-scheduling` — Buffer, Hootsuite, Later
  8. `/best/project-management-software` — Trello, Asana, ClickUp, monday.com
  9. `/best/website-builders` — Squarespace, Wix, Shopify, Webflow
  10. `/best/appointment-scheduling-software` — Calendly, Acuity Scheduling, Cal.com
  11. `/best/form-builders` — Google Forms, Typeform, Jotform
  12. `/best/cloud-storage` — Google Drive, Dropbox, Microsoft OneDrive
  13. `/best/inventory-management-software` — Zoho Inventory, Sortly, Square for Retail, inFlow
  14. `/best/pos-systems` — Square, Toast, Clover, Shopify POS
  15. `/best/online-course-platforms` — Teachable, Thinkific, Kajabi
  16. `/best/contract-management-software` — PandaDoc, Concord, ContractSafe
  17. `/best/business-vpn` — NordLayer, Perimeter 81, Twingate, Cloudflare Zero Trust
  18. `/best/password-managers` — 1Password, Bitwarden, Keeper, NordPass
  19. `/best/help-desk-software` — Help Scout, Freshdesk, Zoho Desk, Gorgias
  20. `/best/esignature-software` — DocuSign, PandaDoc, Dropbox Sign, SignWell
  21. `/best/time-tracking-software` — Toggl Track, Clockify, Harvest, Hubstaff
  22. `/best/web-hosting` — Hostinger, SiteGround, Bluehost, Cloudways
  23. `/best/business-phone-voip` — Nextiva, RingCentral, Ooma, Grasshopper
  24. `/best/live-chat-software` — Tidio, Crisp, Intercom, Tawk.to
  25. `/best/antivirus-endpoint-security` — Bitdefender GravityZone, Microsoft Defender for Endpoint, Norton Small Business, CrowdStrike
  26. `/best/hr-software` — BambooHR, Gusto, Rippling, Deel
  27. `/best/survey-nps-software` — SurveyMonkey, Delighted, Zoho Survey
  28. `/best/video-conferencing` — Zoom, Google Meet, Microsoft Teams, Whereby
  29. `/best/cloud-backup-software` — Backblaze, IDrive, Acronis Cyber Protect, Carbonite
  30. `/best/applicant-tracking-software` — Breezy HR, Zoho Recruit, Workable, Greenhouse
  31. `/best/employee-scheduling-software` — When I Work, Deputy, Connecteam, 7shifts
  32. `/best/business-email-hosting` — Google Workspace, Microsoft 365, Zoho Mail, Proton Mail

- **Legal pages**: About, Affiliate Disclosure (FTC-shaped), Privacy Policy (honest about
  current no-analytics/no-ads state), Contact.

## Important: pricing is intentionally NOT hard-coded as fact

Every article's research turned up genuinely conflicting numbers across sources — different
plans, different currencies, prices that changed mid-2026, free tiers that some sources say
still exist and others say were discontinued (Dashlane's free plan is a specific example of
this conflict). Rather than publish a specific number that risks being wrong, every tool
links to its live pricing page. **Before publishing, open each link and verify current
pricing yourself** — this is genuinely necessary, not optional polish.

## Before deploying

1. Set `NEXT_PUBLIC_SITE_URL` to the real production domain in the deployment environment; the app, sitemap, robots file, and article schema all read from this value.
2. Sign up for real affiliate programs and swap placeholder vendor URLs for actual affiliate
   links. Most tools mentioned have public affiliate/partner programs (search "[tool name]
   affiliate program" or check their footer).
3. Verify every "free tier" and pricing claim in each article against the live vendor page —
   several were flagged during research as recently changed or disputed between sources.
4. Confirm the public contact/corrections route and add a real inbox only when one is ready; no fake contact address is used.
5. Run `npm install && npm run build` locally (not run in this sandboxed environment — no
   network access here).

## Realistic expectations

32 articles is a real foundation, not a finished, ranking site. Keep adding articles in the
same researched, honest-trade-offs style — this niche (budget SaaS comparisons) rewards
breadth because search demand is spread across dozens of specific tool categories, not
concentrated in one or two. Real backlinks and months of indexing time still matter more
than article count alone.
