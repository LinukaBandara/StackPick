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
