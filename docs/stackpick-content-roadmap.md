# StackPick content roadmap — 2026-10-17

This is a local-first prioritization. The supplied Search Console export has no query or page rows, so demand, rankings, and traffic potential are not estimated here. Existing content strategy and briefs are in `docs/seo-keyword-strategy-2026-q3.md`, `docs/international-ai-developer-keyword-research-2026-10.md`, and `docs/content-briefs/`.

| Priority | Existing content action | Why / evidence | Success evidence |
|---|---|---|---|
| 1 | Review pages in the Search Console “discovered” and “crawled” URL exports by template before rewriting. | 59 discovered and one crawled URL are reported, but URL-level evidence is missing. | Page-specific inspection and subsequent 28/90-day clicks/impressions. |
| 2 | Refresh selected high-intent existing accounting, invoicing, CRM, project-management, and email comparisons with dated primary-source fact checks. | These clusters already have multiple routes; improving distinct usefulness is preferable to adding near-duplicates. | Sources/date visible, accurate plan caveats, internal links. Eleven comparisons refreshed; query/page impact still needs Search Console follow-up. |
| 3 | Maintain the AI coding assistant cluster using its approved brief and QA checklist; only publish dated changing facts after current official verification and real evaluation. | Existing article already distinguishes workflow types and states that StackPick has not completed a benchmark; no product task results or performance figures are available. | Run the documented equal-task benchmark and add results only after actual tasks are recorded; Search Console query/page baseline is also required. |
| 4 | Audit overlap among “free,” audience-specific, and alternatives pages; merge or differentiate only where intent and content evidence support it. | Route inventory shows related page families; no duplication diagnosis can be made from slugs alone. | Distinct page purpose, useful internal links, indexing/engagement evidence. |

For all updates: use official product/pricing documentation first, record verification dates, explain who should avoid a product, and do not claim hands-on testing unless performed. Avoid unsupported search-volume or ranking claims.

## Additional editorial updates — 2026-10-17

- Updated `/best/hubspot-vs-zoho-crm` and `/best/pipedrive-vs-zoho-crm` with dated US-plan limits, pricing context, and feature trade-offs based on official HubSpot, Zoho and Pipedrive sources. The latter includes an explicit three-seat annual-cost example; no hands-on test is claimed.
- Updated `/best/clickup-vs-monday` and `/best/trello-vs-asana` with official free-tier capacity limits, upgrade thresholds and annual/monthly billing caveats. The added decision guidance explains who can remain on each free tier and when a small team may outgrow it.
- Updated `/best/mailchimp-vs-brevo` and `/best/mailchimp-vs-mailerlite` after checking current official plan pages. The MailerLite comparison notes the June 16, 2026 free-tier change and cautions that legacy account terms can differ. Email plan terms are dated and send-volume trade-offs are explicit.
- Re-reviewed `/best/ai-coding-assistants` against its existing approved brief and QA checklist. The page already clearly separates editor assistants from repository agents and states no controlled benchmark has been completed. No new test results or unsupported product pricing were invented; completing the benchmark requires actual recorded evaluations.
- Static route overlap cannot be conclusively diagnosed from slugs. Differentiation/merging needs page/query evidence from Search Console; no routes were merged or deleted on inference alone.
- Verification for this batch: `npm run build` passed and generated 133/133 static pages; `npm run check:links` passed (137 source files, no missing destinations); `npm run lint` passed with two existing `<img>` optimization warnings; `git diff --check` passed. No deployment or account-side verification occurred.

## Completed local editorial update — 2026-10-17

- Updated `/best/quickbooks-vs-xero` after checking the official QuickBooks and Xero US pricing pages. Corrected the QuickBooks summary to include its listed free tier and limits (one user, no accountant access, two invoices/month, one connected bank), and clarified Xero US Early's listed price and activity caps.
- Added a decision matrix for entry-plan limits and when a reader should move up; made the page explicitly US-pricing scoped while advising non-US readers to verify regional products, tax and bank support.
- Kept the comparison explicitly desk-researched; no hands-on testing claim was added. Pricing is volatile and marked with a verification date.
- Primary sources reviewed: https://quickbooks.intuit.com/pricing/ and https://www.xero.com/us/pricing-plans/ .
- `npm run build` passed (Next.js 16.4.0); `npm run check:links` passed (137 source files, no missing destinations); `npm run lint` passed with the two existing `<img>` optimization warnings. No deployment or account-side verification has occurred.

## Second local editorial update — 2026-10-17

- Refreshed `/best/quickbooks-vs-freshbooks` using the providers' official US pricing pages. Added QuickBooks Free's two-invoice/month and one-user limits, FreshBooks' 5/50/unlimited billable-client tiers, the fact that archived FreshBooks clients count toward its cap, and dated US list-price context.
- Added a practical entry-plan comparison and a six-client example to help freelancers identify when an entry tier no longer fits. Marked add-ons and promotional pricing as items to confirm at checkout; kept the desk-researched/no-hands-on-testing disclosure.
- Sources reviewed: https://quickbooks.intuit.com/pricing/ and https://www.freshbooks.com/pricing .
- `npm run build` passed including the route; `npm run check:links` passed (137 source files); `npm run lint` passed with two existing image optimization warnings and zero errors. No deployment or account-side verification has occurred.

## Third local editorial update — 2026-10-17

- Refreshed `/best/freshbooks-vs-wave` after reviewing the current FreshBooks and Wave official pricing/support pages. Added dated US list prices, FreshBooks' client caps and archived-client rule, Wave Starter/Pro cost and the first-10-transactions Pro card-fee condition.
- Clarified that Wave states it serves businesses based in the US and Canada, so its free plan is not an available choice for businesses based elsewhere. Linked the Wave country/eligibility and payment-fee evidence.
- `npm run build` passed; `npm run check:links` passed (137 files); `npm run lint` passed with two existing image warnings and zero errors. No deployment or account-side verification has occurred.

## Fourth local editorial update — 2026-10-17

- Refreshed `/best/zoho-invoice-vs-wave` using official Zoho US and Wave pricing, feature, payment-fee and eligibility sources. Made the product-scope difference clear: Zoho Invoice focuses on billing, while Wave includes bookkeeping; Zoho's comparison identifies banking, inventory and journal entries with Zoho Books, not Zoho Invoice.
- Added current US limits/prices, Wave Pro's reduced card-fee limit for the first 10 monthly transactions, and Wave's US/Canada business eligibility. Renamed “head-to-head test” to “comparison method” because no hands-on results are documented.
- `npm run build` passed; `npm run check:links` passed (137 files); `npm run lint` passed with two existing image warnings and zero errors. No deployment or account-side verification occurred.

## Fifth local editorial update — 2026-10-17

- Refreshed `/best/hubspot-vs-pipedrive` with current US pricing and the key Pipedrive feature gate: Lite excludes email sync and automations, which are included from Growth. Added 3-seat annual cost examples for Lite ($504) and Growth ($1,404) to prevent comparing HubSpot Free only against a tier that lacks required workflow features.
- Confirmed HubSpot's free-tool limits (2 users/1,000 contacts), Pipedrive's 14-day trial, and current tier names/prices against official sources. Updated the source list and explicitly identified the article as a desk-based comparison without a product benchmark.
- `npm run build` passed; `npm run check:links` passed (137 files); `npm run lint` passed with two existing image warnings and zero errors. No deployment or account-side verification occurred.


## Finder and affiliate-product content batch — 2026-10-17

- Added `/software-finder`: interactive need, budget, business-type and priority filters that route readers to existing product profiles and relevant category guides. Budget filtering treats a permanent free plan separately from a time-limited trial; displayed pricing text is only a rough filter, not a live quote.
- Added `/how-we-verify`: editorial standards for official sources, dated plan facts, separating desk research from hands-on testing, trade-offs and commercial disclosure.
- Added `/best/jotform-pricing`: Starter/paid plan limits, annual-billing caveat, submission-cap decision guidance, official sources and links back to the existing form-builder comparison.
- Added `/best/systeme-io-pricing`: free-tier limits, monthly pricing selector, annual-billing caveat, all-in-one fit/not-fit guidance and links back to existing email/course platform comparisons.
- Added all four routes to the sitemap with the actual editorial date and added navigation/footer/internal links.
- Created `docs/stackpick-1000-content-plan.md` with exactly 1,000 candidate ideas across 100 software clusters and 10 editorial angles per cluster. It is a validated-research backlog, not a plan to publish 1,000 URLs without checking intent overlap and usefulness.
- Updated `docs/stackpick-affiliate-tracker.md` with public official-term research for Jotform and Systeme.io. Neither program is marked as applied or approved. Sri Lankan payout eligibility remains unverified and must be confirmed before relying on either program.
- Primary-source checks for this batch: Jotform pricing and affiliate pages; Systeme.io pricing and affiliate agreement. Price and program terms can change; the pages link to current official sources and instruct readers to confirm live terms.
- Validation completed in this tool session: fetched all four new page files back from the target branch; confirmed header/footer links and sitemap entries; counted exactly 1,000 idea rows in the roadmap. A local Next.js build, lint and link-check have **not** been run in this session, and nothing has been deployed.


## Additional affiliate-readiness content batch — 2026-10-17

- Added `/best/hubspot-crm-pricing`: HubSpot free-plan seats/contact limits, paid-feature gates, upgrade criteria, official pricing source and links to existing CRM comparisons.
- Added `/best/freshbooks-pricing`: standard US list-price snapshot, billable-client caps, archived-client caveat, add-ons, promotional-price distinction and links to existing invoicing comparisons.
- Added `/best/webflow-pricing`: distinguishes Site plans from Workspace plans and calls out annual billing, ecommerce fees, add-ons and migration/plan-change caveats.
- Added all three routes to `app/sitemap.ts` with an editorial last-modified date and surfaced the pages in the `/best` directory.
- Reviewed public primary sources for this batch: HubSpot CRM pricing/free-tool limits; FreshBooks pricing and 2026 price-change FAQ; Webflow pricing and its 2026 plan-change documentation. Source links are on each page.
- Added Webflow's published affiliate-program summary to `docs/stackpick-affiliate-tracker.md`. It remains **not confirmed applied or approved**; Sri Lankan eligibility and payout support are unverified.
- Validation in this tool session: GitHub writes succeeded for all three pages, sitemap and directory; the tracker update succeeded. A local Next.js build, lint and internal-link check have **not** been run here, and nothing has been deployed. Run those checks before merge/deploy.
- Next product-specific candidates from the 1,000-idea backlog: MailerLite pricing/free-plan limits, Brevo pricing and email-credit limits, ClickUp pricing/guest limits, monday.com pricing/seat minimums, and Kinsta hosting pricing/overage terms. Validate each against official current sources and sitemap overlap before creating URLs.


## Keyword-research implementation update — 2026-10-17

This batch is grounded in the existing SEO strategy and international research documents, not generic topic brainstorming.

- Added `/best/brevo-pricing` and `/best/mailerlite-pricing` as product-specific commercial-investigation pages. These map to the roadmap's P0 email-marketing product cluster and help readers compare the exact constraints that trigger a paid plan.
- The Brevo page uses official documentation for the Free plan's 300 daily sends, up to 100,000 stored contacts, and Starter/Standard starting prices; it explains why contact capacity is not the same as sending capacity.
- The MailerLite page reflects the official June 16, 2026 free-plan update: 250 active subscribers, 2,500 monthly emails, two seats, and feature caps. This is important because older third-party articles may still describe the previous free allowance.
- Added both pages to the sitemap and `/best` directory.
- Research-led priority context remains: US published snapshots in `seo-keyword-strategy-2026-q3.md` list CRM software at 90,500 searches / $35.78 CPC (6 July 2026), accounting software for small business at 27,100 / $58.43 (7 July 2026), payroll software for small business at 9,900 / $108.97 (6 July 2026), help desk software at 5,400 / $95.84 (8 May 2026), and inventory management software at 5,400 (September 2026 report). These are third-party estimates, not StackPick GSC data or an AdSense revenue forecast.
- Existing content should be strengthened before creating near-duplicate URLs. The research memo's tutoring-business software idea remains a separate candidate after checking the current route inventory and available affiliate programs; broad AI coding comparisons remain deprioritized unless new evidence demonstrates a distinct intent gap.
- Quality gate: GitHub file writes succeeded and were fetched back. Local build, lint, route resolution, source-link checks and deployment have not been run in this session.
