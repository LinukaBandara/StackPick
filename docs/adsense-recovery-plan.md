# StackPick AdSense recovery — working plan

## Objective

Improve the usefulness, originality, trust signals and navigability of StackPick before requesting another AdSense review. This is a quality project, not a page-count exercise. Approval is not guaranteed.

## Guardrails

- Preserve existing public URLs, canonical URLs, analytics, visual identity and affiliate strategy unless an audited issue requires a change.
- Do not invent hands-on testing, customer reviews, author credentials, traffic, pricing or product capabilities.
- Clearly distinguish vendor-published facts from StackPick analysis and editorial recommendations.
- Link material plan, feature and policy claims to current primary sources; record when each source was checked.
- Consolidate genuinely overlapping pages only after checking search intent, backlinks, internal links and redirect/canonical implications.
- Do not manufacture traffic, engagement or user feedback.

## Phase 1 — route and directory integrity

Completed on the recovery branch:

- Compared `app/best/page.tsx` directory links with the source of every static `app/best/**/page.tsx` route.
- Removed the duplicate AI Meeting Assistant Pricing directory entry.
- Confirmed that the seven route files absent from the directory are intentional `permanentRedirect` aliases, not standalone guide pages. They should not be added as separate directory entries.
- Added `npm run check:best-directory` to detect duplicate entries, content routes missing from the directory and directory links without a content route. Intentional permanent-redirect aliases are excluded.

Baseline before the change: 110 directory entries, 109 unique links and 116 static route files. Of those route files, 109 are content pages and seven are redirect aliases.

Expected after the change: 109 unique directory entries matching the 109 content routes, with seven redirect aliases intentionally excluded.

## Phase 2 — content quality audit (source screening complete; implementation in progress)

All 109 content routes have now received a source-level editorial screen, recorded across `docs/adsense-guide-audit-batch-01.md` through `docs/adsense-guide-audit-batch-12.md`. This is not a claim that every live page has been browser-tested or that all volatile vendor facts have been independently reverified.

### Shared comparison template

- The shared `ComparisonArticle` template supplies a consistent overview matrix, product-by-product free-plan/trade-off blocks, a verdict, related guides and direct vendor links.
- It does not itself provide page-specific source citations, a verification date, a named human reviewer, or an article-specific decision framework. Those elements must come from each page's own content where appropriate; a shared layout cannot substitute for original editorial substance.
- Replaced the generic "Independent research" label with a clearer disclosure: "Desk research · Hands-on testing is only claimed when explicitly described · Verify current pricing with each provider." This aligns the page-level wording with the existing About and How We Verify disclosures. It does not claim that every fact on every page has been freshly rechecked.

### Representative route findings

| Route | Source-level observation | Initial classification |
|---|---|---|
| `/best/web-hosting` | Five vendors and useful renewal-price framing, but the inspected page has no page-specific source/date block or extra decision checklist. Several factual statements (including backup cadence and support/reliability positioning) need current primary-source evidence or qualification. | Improve |
| `/best/pos-systems` | Four providers and a useful processing-fee decision angle, but the inspected page has no dated source block or original cost scenario. The percentage-point example and contract assertions need source support and a clear market/region scope. | Improve |
| `/best/hr-software` | Distinguishes HR from payroll and differentiates four vendors, but the inspected page has no dated source block or detailed workflow checklist. US employee-count guidance and international payroll claims need explicit geography and official-source support. | Improve |
| `/best/cloud-storage` | Includes a distinct collaboration, external-sharing, recovery and data-exit checklist; useful original decision guidance is present. Free storage figures and product capability statements still need dated primary-source links. | Keep / verify |
| `/best/form-builders` | Includes a lead handoff checklist and a practical mobile submission test. The article should keep its advice distinct from generic feature summaries and attach dated evidence to plan limits. | Keep / verify |
| `/best/n8n-workflow-examples` | Provides multiple operational workflow examples, failure-path checks and an explicit statement that the blueprints are not claimed to have been run by StackPick. This is a stronger example of page-specific utility. | Keep / verify |
| `/best/time-tracking-software-pricing` | Includes official vendor pricing links, a stated verification date and cost modelling. Recheck prices and calculations before release because pricing is volatile. | Keep / refresh |

### First content improvements implemented

Added page-specific decision frameworks to three representative routes:

- `/best/web-hosting`: a like-for-like hosting quote worksheet covering first-term payment, renewal, included services, recovery and resource limits, plus a pre-purchase checklist.
- `/best/pos-systems`: a transparent monthly processing-cost model and quote checklist covering payment mix, fixed fees, hardware, contract terms and operating workflows. The formula is a framework, not a vendor-rate claim.
- `/best/hr-software`: a people-workflow checklist covering records, onboarding, time off, payroll geography, hiring modules and total annual cost.

These additions use reader-supplied figures and vendor verification rather than introducing unsupported current prices or fabricated product tests. They are implemented on the recovery branch; fresh CI/build validation is still pending.

### Second content improvements implemented

Added original, task-specific decision guidance to four additional comparison pages:

- `/best/business-vpn`: distinguishes when a managed VPN may be sufficient from when to evaluate ZTNA, then adds access-control scenarios for starters, contractors, lost devices, role changes and offboarding.
- `/best/applicant-tracking-software`: adds a hiring-stage workflow test from job approval through candidate-data retention/export, plus selection guidance based on hiring volume.
- `/best/employee-scheduling-software`: adds a difficult-week shift-planning test for availability, swaps, absences, overtime and payroll handoff, with a clear warning that product features do not guarantee jurisdictional compliance.
- `/best/contract-management-software`: adds a contract lifecycle test covering creation, review, signature, storage and renewal, with guidance for choosing between proposal tools, repositories and broader CLM.

These sections are process frameworks and buyer checklists, not claims that StackPick has performed vendor tests. No new prices, ratings, product capabilities or legal compliance claims were invented.

### Additional route-level risks to resolve

- `/best/password-managers` contains specific prices and plan-limit claims and says they were checked in late October 2026. Recheck each figure against the current official plan page before any review request.
- `/best/payroll-software` is explicitly US-focused and has dated vendor price references; verify the quoted bundle contents and state coverage before release.
- `/best/accounting-software` correctly warns that regional availability differs, but its country-specific claims and pricing links need a current check.
- Some routes use the shared comparison template with no page-specific section beyond the template's product summaries and verdict. These are priority candidates for a deeper editorial review; the absence of a custom section alone is not a final quality judgment.

### Software catalogue audit

The current `lib/software.ts` inventory contains **9 software profiles**, all carrying the same `October 14, 2026` review date. Each profile includes a summary, intended audience, key features, strengths, trade-offs, pricing/free-plan notes, official product/pricing links, alternatives and comparison links. This is a useful structure, but the repeated review date should be checked against actual editorial work and not treated as proof that every price and feature was reverified on that date.

The current catalogue is not yet a broad 50-profile resource. Do not expand it by creating thin template entries. Add profiles only when each has enough product-specific decision guidance and current primary-source evidence. Review screenshot provenance as part of that work: some imagery is vendor-hosted, some is third-party sourced, and some is explicitly labelled as an illustrative StackPick-created preview rather than a live product screenshot.

### Source audit completion and implementation queue

- Completed source-level screening of all 109 content routes. Seven intentional redirect aliases were excluded from the content count.
- The route-by-route findings and recommended fixes are documented in audit batches 01–12. Batch 11's route count was corrected after identifying the redirect alias in that batch.
- The highest-priority thin/template-mismatch pages were rewritten with distinct product-selection criteria, practical workflows, migration steps and regional caveats. See the implementation log below.
- Remaining work is to verify volatile claims against current primary sources, inspect rendered pages, address overlap and complete technical/trust checks. The source audit is not a substitute for these release gates.

## Phase 2 — content quality audit

Audit every guide and profile with a consistent rubric:

1. Search intent and intended reader are explicit.
2. The page contributes original synthesis, decision criteria, examples or workflow guidance beyond vendor copy.
3. Product-specific differences are concrete and accurate.
4. Pricing, free-plan caps, regional availability and feature claims have current primary-source support.
5. Limitations, exclusions, migration costs and reasons not to choose an option are explained.
6. The page is meaningfully distinct from related StackPick pages.
7. Links, metadata, canonical URL and structured data are correct.

Classify each URL as keep, improve, consolidate, noindex or investigate. Do not make mass noindex or deletion changes based on similarity alone.



### Additional content improvements — alternatives and practical workflows

Replaced generic product rows and repeated template copy with page-specific decision frameworks on twelve routes:

- `/best/notion-alternatives-small-businesses`: differentiates project control, knowledge management, database complexity and adoption; adds a comparable pilot and migration checklist.
- `/best/quickbooks-alternatives`: separates invoicing from accounting needs, explains regional/accountant/inventory considerations and adds a controlled accounting migration sequence.
- `/best/salesforce-alternatives-small-businesses`: adds CRM complexity criteria, a realistic pilot and Salesforce data/schema migration checks.
- `/best/slack-alternatives-small-teams`: compares business chat models, external access, retention, administration and self-hosting; adds a migration plan.
- `/best/trello-alternatives`: distinguishes project dependencies, reporting, database and documentation needs; adds a fair pilot and board migration checks.
- `/best/manage-client-projects-without-full-time-team`: adds the client delivery lifecycle from scope approval through handover and a weekly status-update template.
- `/best/manage-customer-leads-as-freelancer`: adds a freelancer pipeline, minimal lead-record schema and respectful follow-up routine.
- `/best/invoice-clients-as-freelancer`: replaces unrelated generic tool copy with a quote-to-payment workflow, invoice checklist, reconciliation and jurisdiction caveats.
- `/best/asana-alternatives`: differentiates alternatives by workflow friction and adds a one-week comparison pilot and migration checklist.
- `/best/calendly-alternatives`: compares booking scenarios and adds a complete test for time zones, rescheduling, team routing and payments.
- `/best/freshbooks-alternatives`: distinguishes invoicing from full accounting and adds regional and accounting migration guidance.
- `/best/free-vs-paid-business-software`: replaces generic product rows with an upgrade decision framework, a reader-calculated break-even model and hidden-cost checks.

These additions are editorial frameworks and practical checklists. They do not claim StackPick conducted hands-on vendor tests, and they intentionally avoid unsupported current prices or fabricated customer outcomes.

## Phase 3 — software catalogue

Inspect the source of truth and every public profile. Expand only where a profile can be supported by useful, researched detail. Prioritize category coverage and meaningful product fit over reaching an arbitrary catalogue size.

## Phase 4 — trust and transparency

Verify author/editor identity, editorial methodology, source standards, correction contact, affiliate disclosure, privacy policy, terms and contact details. Never imply testing or expertise that cannot be substantiated.

## Phase 5 — technical and experience review

Check mobile layouts, navigation, broken internal/external links, indexability, sitemap, robots directives, canonicals, structured data, performance and accessibility. Review Search Console coverage and analytics using current first-party data where available.

## Phase 6 — release and review gate

Run lint, build and all content-integrity checks. Review representative pages on production, verify redirects and analytics, then prepare a final issue register. Request AdSense review only after material issues are resolved. Google makes the approval decision.

## Official guidance

- [AdSense: Make sure your site's pages are ready](https://support.google.com/adsense/answer/7299563)
- [AdSense: What to do when your site is not ready to show ads](https://support.google.com/adsense/answer/12176698)
- [AdSense: Your account wasn't approved](https://support.google.com/adsense/answer/81904)
- [Google Search spam policies](https://developers.google.com/search/docs/essentials/spam-policies)


### Primary-source verification pass — November 15, 2026

Rechecked selected volatile plan details against provider-owned pricing and help pages. These are US-specific where stated; localized prices and eligibility may differ.

- `/best/password-managers`: refreshed Bitwarden, 1Password, NordPass and Keeper plan wording. Removed NordPass and Keeper price ranges that could not be reliably confirmed from stable public pricing output. Added current 1Password US Teams Starter Pack and Business annual-billing prices and seat terms. Confirmed NordPass Free's one-active-session limitation from its support documentation. This is a source check, not hands-on product testing.
- `/best/payroll-software`: rechecked Gusto Simple ($49/month + $6/person), QuickBooks Workforce Payroll + Simple Start ($88/month + $6.50/employee before promotion) and Patriot Full Service ($37/month + $5/worker). Clarified that QuickBooks is a payroll-and-accounting bundle, Patriot's first state is included with additional-state fees, and the page is not Sri Lankan payroll guidance. Removed unsupported comparative language about OnPay pricing and Patriot being the lowest-priced option.
- `/best/invoicing-software`: refreshed the review date and clarified Zoho Invoice's US allowance (2 users, 3 projects and up to 500 invoices/year) and QuickBooks Free's two-invoice monthly default, including the QuickBooks Payments eligibility exception.
- `/best/ai-meeting-assistant-pricing` and `/best/ai-meeting-assistants`: rechecked Fathom, Fireflies, Otter and Granola plan details against official pricing/help pages. Corrected Fireflies storage to per-user allocation pooled across the team, clarified Otter Business imported-file minutes versus in-app transcription, replaced the disputed Otter Pro annual amount with a checkout-verification note, and updated Granola Basic history to 30 days. Removed an unverified exact Fathom free-tier advanced-summary quota and described the published Free/Premium feature split instead.
- `/best/crm-software-pricing`: refreshed the source-check date and reverified HubSpot Free's two-user/1,000-contact allowance, Zoho CRM Standard's displayed US starting rate, and Salesforce Starter/Pro pricing. Clarified that Salesforce Pro requires annual billing and a contract, and that Starter transaction fees may apply. Seat totals remain explicitly labelled as arithmetic examples rather than vendor quotes.
- `/best/accounting-software`: verified the Zoho Books US Free plan's one-user-plus-one-accountant allowance, 1,000 annual invoices, 1,000 annual expenses and $50,000 financial-year revenue threshold against the official US pricing/help page. The article keeps these figures explicitly US-specific.
- `/best/hubspot-vs-pipedrive`, `/best/hubspot-vs-zoho-crm` and `/best/free-crm-software`: refreshed source-check dates after rechecking HubSpot's two-user/1,000-contact free allowance, Pipedrive's 14-day trial and Lite/Growth annual rates, Zoho CRM Free's three-user and usage limits, Freshsales' three-user Free plan, Bitrix24's 1–2-user/5 GB Free plan, and Notion's 5 MB upload and collaborative block limits. The pages continue to distinguish permanent free plans from trials and paid tiers.

Official primary sources consulted include provider pricing or help pages for Bitwarden, 1Password, NordPass, Keeper, Gusto, QuickBooks, Patriot, Wave, Zoho Invoice, Invoice Ninja and FreshBooks. Pricing and feature limits remain subject to change and country-specific checkout terms. The live preview could not be inspected through the current Vercel connection, so rendered-page/mobile review remains open. The latest CI and Vercel checks must pass on the final branch head before release.
