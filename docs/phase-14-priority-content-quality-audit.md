# Priority content quality audit — 7 November 2026

## Scope and method

This is a source-code editorial review of five high-intent comparison guides on the `growth/adsense-journey-readiness` branch:

- `/best/invoicing-software`
- `/best/accounting-software`
- `/best/crm-software`
- `/best/email-marketing-software`
- `/best/website-builders`

I inspected the page source and the visible decision framework, caveats, pricing language, and source-link patterns. This is not hands-on product testing, a complete live vendor-price verification, or a claim that every page fact is current. Do not publish a “tested” claim from this work.

## Findings and editorial decisions

| Priority | Guide | Current strengths | Main quality gap | Decision |
|---|---|---|---|---|
| P0 | Invoicing software | Strong workflow framing; distinguishes subscription cost from payment-processing fees; explains country eligibility and client caps; links to official pricing pages | The intro is explicitly US-freelancer focused, and several fee/plan statements need a dated, vendor-by-vendor recheck. A US payment rate must not be generalized to UK, Canada, Australia or Sri Lanka. QuickBooks Free limits also need a current primary-source citation beside the claim. FreshBooks client caps and standard monthly list prices were rechecked on 7 November 2026. | Keep; verify every numerical claim and add a clear US-market label or country-specific comparison note. |
| P0 | Accounting software | Strong accountant-handoff, reconciliation and export criteria; explicitly warns that regional tax, bank-feed and payroll support differ | No dated research note on the page; free-plan and regional availability statements need direct citations adjacent to the relevant provider; “best” recommendation should remain conditional on accountant and country fit. | Keep; add a dated source ledger and region-specific availability matrix before adding prices. |
| P0 | CRM software | Useful distinction between contact tracking, sales pipeline, suite integration and a Notion database; links to product profiles | Initial vague free-tier copy did not tell readers the actual user/contact limits or where the claims came from. | Keep; updated on 7 Nov 2026 with HubSpot Free (2 users, 1,000 contacts and 1,000 records per other standard object type), Zoho CRM Free (up to 3 users), and Pipedrive's four paid tiers/no permanent free plan; official source URLs are included beside the relevant summaries. Limits and USD pricing remain subject to country/account terms. |
| P1 | Email marketing software | Good pricing-model framing: list size, send frequency and automation depth; recommendations are workflow-led | Most provider descriptions are generic (“limited”, “may be available”, “verify current limits”). That protects against stale claims but leaves readers without enough evidence to compare. There are no specific current contact/send thresholds or transparent sample-cost scenarios. | Keep; replace vague plan summaries with dated, sourced limits and sample monthly costs at realistic list sizes/send volumes. |
| P1 | Website builders | Strong practical launch checklist covering mobile, editing, conversion path, total launch cost and exit plan | Free/trial descriptions are non-specific and no comparable total-cost scenario is provided. Domain, hosting, ecommerce, transaction fees, required apps and renewal pricing need to be separated. | Keep; add a transparent cost model for a brochure site and a small online store, with billing term and currency stated. |

## Cross-page issues to fix

1. **Market scope is not consistently explicit.** StackPick targets readers in the US, UK, Canada and Australia, but the invoicing article opens with a US-only assumption. Each guide should state the market used for prices and availability. If a fact is country-specific, label it at the point of use.
2. **Evidence should sit beside claims.** A source list at the bottom is useful, but readers should be able to tell which official page supports a particular plan limit, fee or feature. Add concise inline source links or a vendor evidence table.
3. **Separate price types.** Distinguish standard recurring price, introductory promotion, annual-billing equivalent, monthly billing, tax/VAT, payment fees, required add-ons and renewal price. Never compare a promotional price with another product’s standard price.
4. **Use a dated verification record.** Every changing plan limit or price should carry a checked date and an official source. A generic “prices may change” disclaimer is not a substitute for evidence.
5. **Do not imply hands-on testing.** Current copy should continue to describe desk research unless a repeatable product test was actually performed and recorded.
6. **Make recommendations conditional.** Explain who should choose each tool, who should not, and what constraint triggers an upgrade or migration.

## Page-by-page next edits

### P0 — Invoicing
- Recheck Wave eligibility and payment-processing fees by country; do not apply US rates to other markets.
- [x] Rechecked FreshBooks US pricing on 7 November 2026: Lite 5 billable clients, Plus 50; current monthly view shows standard list prices of $23 and $43 respectively alongside introductory promotions. Added the official pricing link beside the claim.
- [ ] Recheck Invoice Ninja hosted Free client cap and QuickBooks Free eligibility/limits from official pages.
- Add a short market note explaining that payment gateways and payout support vary by business country.
- Keep the existing “five-minute invoice test”; it is useful original decision guidance.

### P0 — Accounting
- Add a visible “country changes the answer” section covering bank feeds, tax filing, payroll, accountant access and currency.
- Verify Zoho Books Free plan eligibility and limits separately for each country covered; do not reuse US limits globally.
- Keep GnuCash clearly identified as desktop/self-managed software, not a hosted multi-user cloud alternative.
- Add a checked date only after all provider claims have actually been rechecked.

### P0 — CRM
- [x] Added HubSpot Free limits: up to 2 users, 1,000 contacts and 1,000 records for each other standard object type per account; linked to HubSpot's pricing page.
- [x] Added Zoho CRM Free limit: up to 3 users; linked to Zoho's US pricing and edition specification pages. US-dollar paid prices are explicitly labeled as US pricing, not global pricing.
- [x] Clarified Pipedrive's four paid plans (Lite, Growth, Premium, Ultimate), optional add-ons and absence of a permanent free tier in its plan documentation.
- [x] Clarified Notion as a manually maintained database/workflow, not a like-for-like dedicated CRM.
- [ ] Add a more detailed decision matrix for team size, pipeline complexity, automation need and likely upgrade trigger.

### P1 — Email marketing
- Replace non-specific free-plan descriptions with verified contact storage, daily/monthly send limits, user seats and automation constraints.
- Add example cost scenarios for a small list and a growing list. State currency, billing cadence and assumed send volume.
- Explain the difference between contacts stored and emails sent; do not imply that a high contact allowance means unlimited sending.
- Keep deliverability claims conservative and avoid presenting vendor marketing claims as independent test results.

### P1 — Website builders
- Compare a simple service-site scenario separately from an ecommerce scenario.
- For each provider, identify the minimum paid plan needed for a custom domain and the actual required commerce/forms/CMS capability.
- Show introductory versus renewal pricing only when both are verified and the billing period is explicit.
- Include transaction fees and required paid apps where they materially change the total cost.

## Audit tooling limitation

The existing `scripts/audit-content-quality.mjs` is useful as an inventory generator, but its counts are heuristic: it estimates headings from template usage, counts URL strings rather than validating source quality, and infers topic-cluster links from broad text markers. Its flags are prompts for human review, not quality scores or indexing decisions. Do not use its word count, external-source count or flag count as proof that an article is helpful or unhelpful.

## Release gate

Before these pages are treated as ready for a public content-quality review:

- [ ] All numerical plan limits and prices checked against current official sources.
- [ ] Market/currency/billing term stated for every price.
- [ ] Region-specific features and payment eligibility labeled.
- [ ] Inline evidence links added beside material claims.
- [ ] No unsupported hands-on testing, ranking or outcome claims.
- [ ] Editorial recommendation includes meaningful trade-offs and an upgrade trigger.
- [ ] Page-level content review completed by a human; automated audit is supplementary.

**Status:** source review completed for the five listed guides. The CRM guide was subsequently updated with current vendor-published limits and direct source URLs in commit `3a1ad52`. FreshBooks pricing and client caps were rechecked and the invoicing guide updated in commit `ffcb735`. This remains desk research, not hands-on testing. No local build, typecheck, CI run, deployment or Search Console validation is claimed.


## Accounting guide follow-up — 7 November 2026

- [x] Added a visible quick answer that makes the recommendation conditional on the accountant's workflow, country support and bookkeeping handoff rather than declaring one universal winner.
- [x] Added a dated research note and made explicit that US prices and free-plan limits are not global offers.
- [x] Replaced the broad Zoho Books free-plan statement with the US-specific limits published by Zoho: one user plus one accountant, up to 1,000 invoices and 1,000 expenses annually, and a US$50,000 annual-revenue threshold. The article directs readers to check their own country edition.
- [x] Tightened Wave eligibility using Wave's own account-creation guidance: businesses must be located in the US or Canada. The guide no longer implies the free plan is a global option.
- [x] Updated the official links to point directly to Zoho US pricing, Wave eligibility and Xero US pricing, with the Xero link clearly labeled as US-specific.
- [ ] Verify QuickBooks, Xero and FreshBooks regional availability and plan terms country by country before adding more numeric claims.
- [ ] Add a specific Sri Lanka availability and local-accountant workflow note only after official provider evidence is found; do not assume US/UK/Australia product terms apply in Sri Lanka.

**Commit:** `e5c5785` (accounting guide update). This is editorial desk research based on vendor-published information, not hands-on product testing or accounting advice.

## Email marketing software guide — 7 November 2026

Updated `app/best/email-marketing-software/page.tsx` with a visible short answer and a dated pricing/plan caveat. The Mailchimp Free description now states the vendor-published cap of 250 contacts, 500 monthly sends and 250 sends per day, and links directly to its marketing pricing page. Brevo's Free description distinguishes stored contacts (up to 100,000) from sending capacity (300 emails/day) and notes the 2,000-contact automation limit, linking to Brevo's official plan documentation.

Primary-source checks:
- Mailchimp pricing: https://mailchimp.com/pricing/marketing/ — checked 7 November 2026. The live pricing page lists the Free plan at up to 250 contacts, 500 sends/month and 250/day; it also says campaigns pause when contact or send limits are reached.
- Brevo plan documentation: https://help.brevo.com/hc/en-us/articles/208589409-About-Brevo-s-pricing-plans — recheck at publication and before future updates; the guide records the published Free-plan limits noted above.

Remaining quality work: verify current MailerLite, Kit, Systeme.io, GetResponse and ActiveCampaign plan claims from their own documentation; distinguish permanent free plans from trials; check country-specific pricing and availability rather than treating USD plan pages as universal. This guide has not been locally built, linted or deployed as part of this edit.

### Email marketing guide — second vendor-source pass (7 November 2026)

Updated `app/best/email-marketing-software/page.tsx` with vendor-specific permanent-free versus trial distinctions, revised the short answer, and linked each updated card to a relevant official pricing/help page.

- **MailerLite:** Free plan is capped at 250 active subscribers and 2,500 emails per month. Its June 16, 2026 update also limits Free usage to 3 automations, 3 forms, 1 landing page, 1 website (up to 5 pages) and 1 digital product. The vendor warns that exceeding limits can restrict sending and other actions. Source: https://www.mailerlite.com/help/free-plan-update-faq
- **Kit:** Free supports up to 10,000 subscribers and unlimited broadcasts; visual automations and automated sequences are paid features. Source: https://kit.com/pricing
- **Systeme.io:** Free plan supports up to 2,000 contacts and unlimited email sends, but only 1 automation rule and 1 email campaign, alongside limited funnel/site/course allowances. The vendor says no credit card is required. Source: https://systeme.io/pricing/
- **GetResponse:** Forever Free supports up to 500 contacts, 2,500 newsletters/month and 1 landing page. Premium features are trial access for the first 14 days and are removed afterward unless upgraded. Sources: https://www.getresponse.com/help/can-i-try-getresponse-before-i-buy.html and https://www.getresponse.com/pricing
- **ActiveCampaign:** Its FAQ describes a 14-day trial capped at 100 contacts and 100 sent emails; no charge is made unless the customer manually upgrades. This is a trial, not a permanent free plan. Source: https://www.activecampaign.com/about/faq

The page avoids presenting US-dollar pricing as universal. The GetResponse pricing page currently displays US-dollar paid-plan prices; those should be labeled by market if quoted in a future revision. MailerLite says it accepts EUR and USD and selects currency based on billing address; actual payment/tax treatment can vary. No country-by-country payment eligibility claim has been added.

**Remaining editorial checks:** compare the paid-plan minimum price for equivalent list sizes (not merely each vendor's smallest headline price), confirm regional availability and taxes at checkout, and review list hygiene/consent requirements before adding deliverability claims. No local build, lint, CI, deployment or live Search Console verification was run for this edit.

## Batch update — website builders, invoicing and CRM (7 November 2026)

Three related guide edits were made together rather than treating each as a separate mini-task.

### Website builders
Updated `app/best/website-builders/page.tsx` with a quick answer, a US/annual-billing reference-price note and more specific plan requirements:
- Squarespace: US annual-billing display shows Basic at US$19/month and Core at US$29/month. Basic lists a 2% online-store transaction fee; Core lists 0%. Eligible annual website subscriptions include one year of a custom domain.
- Wix: US Core is listed at US$29/month billed annually and is the lowest plan in the referenced comparison that accepts payments. Wix explicitly says currency/prices vary by location and taxes depend on billing address.
- Shopify: US Basic is listed at US$29/month billed annually; the US comparison lists a 2% third-party transaction fee when using an external payment provider.
- Webflow: Starter staging is free but limited to two static pages and a webflow.io address. Basic is US$15/month billed yearly for a custom domain; Ecommerce Standard is US$29/month billed yearly, 500 items and a 2% transaction fee. Workspace and site plans are distinct.
Primary sources: https://www.squarespace.com/pricing ; https://www.wix.com/plans ; https://www.shopify.com/pricing ; https://webflow.com/pricing

### Invoicing
Updated `app/best/invoicing-software/page.tsx` to date the plan references 7 November 2026 and clearly state that the fees and offers are US-market references, not universal availability. Wave eligibility and local payment gateway/payout constraints are called out. Invoice Ninja's current published plan page confirms Free at up to five clients with unlimited invoices and Pro at US$14/month on monthly billing:
https://invoiceninja.com/pricing-plans/

### CRM source-code correction
Fixed the missing closing quote after the CRM page's `quickAnswer` prop in `app/best/crm-software/page.tsx`. The prior source had the following `pricingNote` text accidentally absorbed into the JSX string, which would have caused a compile error. The text is now properly separated. This correction has been committed but not yet confirmed by a local build.

### Remaining work / release caveats
- Website-builder prices are US reference figures, not Sri Lankan, UK, Canadian or Australian quotes. Do not publish them as globally applicable.
- Verify payment processor availability, local taxes, domain renewal, app costs and actual checkout totals for each target country before expanding country-specific recommendations.
- Compare realistic annual total costs with the same site requirements before calling one platform cheaper.
- This batch was committed through GitHub source editing only. No local build, lint, typecheck, CI run, deployment or live Search Console validation was performed.

## Sitemap and AI Search visibility checks — 7 November 2026

### Editorial last-modified metadata
Updated `app/sitemap.ts` so the five priority guides substantively revised in this branch carry the actual editorial date `2026-11-07`:
- `/best/invoicing-software`
- `/best/accounting-software`
- `/best/crm-software`
- `/best/email-marketing-software`
- `/best/website-builders`

This follows the existing rule in the sitemap source: last-modified dates represent real editorial updates, not the build/deploy date. Other URLs were not mass-dated.

### Google Search generative AI control
Google's Search Console documentation says its Search generative AI control rolled out worldwide on 31 August 2026. The default is to include a site's links/content in eligible Google Search generative AI features; owners can change this in Search Console. Excluding a site from those features is not a general Search ranking boost or penalty, and it does not replace `noindex` when the goal is to remove a page from Google Search entirely. Source: https://support.google.com/webmasters/answer/16908024

Action after the branch is deployed: inspect the StackPick Search Console property's Search generative AI setting and confirm it remains set to include. This cannot be checked or changed from repository code.

### Quality guardrail
Google's people-first content guidance emphasizes original information/analysis, demonstrable effort, accuracy, clear authorship and useful added value; it warns against mass-producing pages primarily to capture search traffic. StackPick's 109-guide inventory must therefore be treated as a review queue, not as a target to expand. Do not create more near-duplicate pages or mark weak pages indexable merely because they exist in the sitemap. Source: https://developers.google.com/search/docs/fundamentals/creating-helpful-content

No Search Console setting, index status, live sitemap, build, lint, CI or deployment was verified in this source-only update.

## Sitemap metadata validation — 7 November 2026

Updated `app/sitemap.ts` so the five priority guides substantively revised in this branch carry `2026-11-07` as their editorial last-modified date: invoicing, accounting, CRM, email marketing and website builders. Unchanged routes were not mass-dated.

Extended `scripts/audit-seo-routes.mjs` to validate every `LAST_MODIFIED` entry:
- the date must be a real `YYYY-MM-DD` calendar date;
- the route must resolve to an App Router page;
- the route must also appear in the static sitemap;
- duplicate date-map route keys are reported.

The existing route audit still checks guide-directory duplicates, missing App Router pages, sitemap duplicates and guide links omitted from the sitemap. The workflow's existing Node syntax-check step will cover this script on its next run.

**Validation status:** source edits were fetched back from GitHub and inspected. The audit script has not yet been executed locally or in GitHub Actions; do not call this a passing test. The Next.js build, ESLint, TypeScript check and deployment also remain outstanding.

## Visible editorial attribution and structured review dates — 7 November 2026

Updated `components/ComparisonArticle.tsx` to accept an optional `reviewedOn` date. When a page supplies that date, the shared template now:
- displays a visible “Reviewed by StackPick Editorial” line with a human-readable date;
- explicitly identifies the assessment as desk research, not a hands-on product test;
- emits the same date as `dateModified` in the Article JSON-LD.

The five priority guides (invoicing, accounting, CRM, email marketing and website builders) now pass `reviewedOn="2026-11-07"`. Other guides do not inherit a fabricated review date. The existing Organization author remains StackPick Editorial; no individual reviewer identity or credential has been invented.

The component and all five page props were fetched back from GitHub and checked for the expected date/byline/schema strings. This is source verification only: the Next.js build, JSON-LD rendering, hydration, accessibility and CI still need runtime validation.

### Source-level integrity spot-check

A read-only source check of the current branch found:
- 109 guide catalogue entries and 109 unique guide routes;
- no duplicate guide hrefs;
- 127 static sitemap routes;
- no guide catalogue route missing from the static sitemap;
- 10 `LAST_MODIFIED` entries, all valid calendar dates and all present in the static sitemap.

This check parsed the fetched GitHub source in memory. It did not execute `scripts/audit-seo-routes.mjs`, resolve every route against the full App Router tree, run Node syntax checks, or render the generated sitemap.


## Content audit signal inventory — 7 November 2026

Extended `scripts/audit-content-quality.mjs` so its CSV inventory records four additional editorial signals for each non-redirect page:
- whether the page supplies a visible `quickAnswer` prop;
- whether it supplies a `pricingNote` prop;
- whether source text contains an explicit country/region caveat;
- whether source text discloses desk research or the absence of hands-on testing.

The script summary now reports counts for these signals. They are inventory fields, not quality scores: a page may not need a pricing note, and a text match does not prove that a regional caveat or testing disclosure is accurate or sufficiently prominent. Review the actual page and vendor evidence before making editorial or indexing decisions. Existing heuristic flags remain review prompts only.

**Validation status:** source was updated through GitHub and should be syntax-checked and run locally with `npm run audit:content` after pulling the branch. No script execution, CSV generation, build, lint, typecheck or CI pass is claimed in this environment.


## 109-guide editorial audit — batch 1 of 11 (7 November 2026)

**Scope:** first 10 catalogue routes in `lib/guides.ts`. Each route source was fetched from the working branch and screened for source length, linked external domains, quick-answer/pricing/review-date signals, regional caveats and method disclosures. Three pages also received a direct content read. These are editorial triage findings, not a completed verification of every vendor claim.

| Guide | Initial finding | Audit disposition |
|---|---|---|
| `/best/invoicing-software` | 1,397 source words; 8 external URLs; pricing note and visible review date present; no clear desk-research/testing-method disclosure. | **Improve disclosure**; verify pricing claims and regional scope before sign-off. |
| `/best/multi-currency-invoicing` | 1,954 words; 9 external URLs; pricing note and country caveat present; no visible review date or clear method disclosure. | **Review freshness and method**; verify supported currencies, conversion/settlement fees and country availability against provider documentation. |
| `/best/accounting-software` | 1,414 words; 10 external URLs; quick answer, pricing note, review date, regional caveat and method disclosure present. | **Lower initial priority**; still verify the cited plan terms and source dates during final claim review. |
| `/best/payroll-software` | 1,171 words; 7 external URLs; pricing note present, but no clear country/region caveat, review date or method disclosure. | **Regional accuracy priority**; payroll is jurisdiction-dependent, so eligibility and country coverage need explicit primary-source checks. |
| `/best/expense-management-software` | 548 source words; only 3 external URLs; no dedicated H2/H3 sections; no specific named plan limits or source links beyond provider homepages. The copy includes subjective assertions such as “well-reviewed” without visible supporting evidence. | **High-priority rewrite/research**; add useful workflow comparison, specific verified limits, official pricing/help sources, regional eligibility and evidence for any evaluative claims. Do not pad to a word target. |
| `/best/expense-management-software-pricing` | 1,585 words; 5 external URLs; pricing note present. | **Verify numbers and scope**; inspect price dates, billing periods, seat assumptions, fees and country context against official pricing pages. |
| `/best/crm-software` | 1,422 words; 8 external URLs; quick answer, pricing note, review date and country caveat present. | **Lower initial priority**; check that review date and method disclosure are visible and all plan-limit claims remain current. |
| `/best/crm-software-pricing` | 1,482 words; 3 official pricing URLs; includes a useful seat-cost table and desk-research disclosure. Pricing is explicitly US/USD but labeled checked 18 October 2026, not the current audit date. | **High-priority price refresh**; re-check HubSpot, Zoho and Salesforce US rates/terms, confirm annual vs monthly billing, and update the checked date only after re-verification. |
| `/best/email-marketing-software` | 1,431 words; 7 external URLs; quick answer, pricing note and review date present. | **Lower initial priority**; verify free-tier limits and confirm regional caveats/method disclosure are sufficiently clear. |
| `/best/social-media-scheduling` | 763 source words; 3 external URLs, all pointing to provider homepages; plan limits are described vaguely (“small number”, “limited number”) without actual numbers or direct pricing citations. | **High-priority research expansion**; verify Buffer, Hootsuite and Later plan limits, formats and country availability from current official pricing/help pages; add direct source links and concrete decision guidance. |

### Batch 1 status

- 10 of 109 catalogue routes screened (9.2%).
- 3 pages directly read in full: expense tracking, social scheduling and CRM pricing.
- Highest-priority follow-up pages identified: expense tracking, CRM pricing and social scheduling.
- No guide was noindexed, removed or redirected based on automated word counts.
- No article content was rewritten in this audit batch; this step records findings before edits to avoid conflating audit and remediation.

**Important limitation:** source word counts are rough TSX-source counts, not rendered article word counts. External URL counts do not establish source quality. A linked vendor homepage is not equivalent to a citation supporting a specific pricing or feature claim. Remaining batches must inspect actual content and verify material claims, not merely satisfy numerical thresholds.


## 109-guide editorial audit — batch 2 of 11 (7 November 2026)

**Scope:** catalogue routes 11–20 in `lib/guides.ts`. All ten page sources were screened; four received a direct full-source content read. Official vendor pricing pages were checked for the scheduling-pricing guide. This remains editorial triage, not final claim-by-claim sign-off.

| Guide | Initial finding | Audit disposition |
|---|---|---|
| `/best/project-management-software` | 1,212 source words; four distinct external URLs but links resolve to provider homepages; pricing note present; no clear checked date, country caveat or research-method disclosure. | **Improve evidence and scope**; cite plan/pricing or feature documentation for material comparisons and clarify regional pricing/availability. |
| `/best/website-builders` | 1,204 source words; quick answer, pricing note and country caveat present; links go directly to official pricing pages. No visible current review date or clear method disclosure. | **Recheck current plan claims and disclose method**; good source-link structure to build on. |
| `/best/appointment-scheduling-software` | 895 source words; only three distinct vendor homepage links; pricing note present, but no clear review date, regional caveat or method disclosure. | **Expand evidence**; link to current pricing/help pages and distinguish personal meeting schedulers from service-business booking systems. |
| `/best/appointment-scheduling-software-pricing` | 1,454 source words; detailed Calendly, Cal.com and Acuity price/feature table; direct pricing-page links; checked date says 19 October 2026. No explicit country caveat or method disclosure. | **High-priority freshness and regional review**; official pricing pages checked in this audit show Cal.com Individual remains free for one user, Teams at US$12/user/month yearly, Organizations at US$28/user/month yearly; Acuity shows Starter US$16 yearly / US$20 monthly, Standard US$27 / US$34, Premium US$49 / US$61. Calendly billing terms should be rechecked on its own pricing page; don't infer all details from secondary aggregators. |
| `/best/form-builders` | 973 source words; three distinct vendor homepage links; pricing note present; no visible review date, country caveat or method disclosure. | **Improve concrete comparison evidence**; source current response/submission caps, branding, integrations and export restrictions from official plan documentation. |
| `/best/online-form-builder-pricing` | 1,646 source words; direct pricing links to Fillout, Jotform and Typeform; checked date is present in page source, but pricing note/country caveat/method disclosure signals are absent. | **Verify plan arithmetic and scope**; include region, billing term, response limits, seat assumptions and tax caveats in the visible pricing context. |
| `/best/cloud-storage` | 793 source words; three provider homepage links; pricing note present, but no visible review date, country caveat or method disclosure. | **Expand decision-useful details**; compare storage quotas, sharing, version history, recovery, admin controls and regional price terms using official documentation. |
| `/best/inventory-management-software` | 650 source words; four provider links, mostly homepages; pricing note present; one practical stock-movement test section. No quick answer, review date, country caveat or method disclosure. | **High-priority expansion**; verify order/warehouse/user caps, channel integrations, multi-location support, export and country-specific payment/POS eligibility. |
| `/best/pos-systems` | 513 source words; four provider links, mostly homepages; no dedicated H2/H3 sections; no quick answer, visible review date, country caveat or method disclosure. Copy makes strong claims about processing economics and Toast contract terms without visible supporting citations. | **High-priority rewrite/research**; compare full processing costs, hardware, contracts, chargebacks, offline mode and supported countries. Claims about contract lengths/termination and processing rates require direct official terms and current regional context. |
| `/best/online-course-platforms` | 647 source words; five provider homepage links; pricing note present; no quick answer, visible review date, country caveat or method disclosure. Some statements about transaction fees and free tiers are broad and need plan-level evidence. | **High-priority expansion**; verify course/student limits, transaction fees, payment gateway availability, payouts, taxes, migration/export and plan-specific features. |

### Batch 2 verification notes

- Cal.com official pricing page: Individual is free for one user with unlimited links/calendars; Teams is listed at US$12 per user/month on yearly billing; Organizations at US$28 per user/month on yearly billing. <https://cal.com/pricing>
- Acuity official pricing page: Starter US$16/month annual or US$20 monthly; Standard US$27 annual or US$34 monthly; Premium US$49 annual or US$61 monthly. It lists 1, 6 and 36 calendars respectively and states there is no permanent free plan, only a 7-day trial. <https://www.acuityscheduling.com/pricing/>
- Acuity's help documentation says plan/tax handling can vary and identifies tax guidance for the US, Canada, UK, EU and Australia. <https://help.acuityscheduling.com/hc/en-us/articles/47293738502413-Acuity-Scheduling-plans-and-payment-methods>
- Calendly's billing help (updated 21 September 2026) confirms seats are billed even when unfilled and plan access may vary by account/add-ons. This is relevant to per-seat cost explanations; confirm the exact current plan rates separately. <https://calendly.com/help/billing-overview>

### Batch 2 status

- 20 of 109 catalogue routes screened (18.3%).
- Four pages directly read in full: appointment scheduling pricing, inventory management, POS systems and online course platforms.
- Highest-priority remediation candidates now include POS, inventory, course platforms and appointment-pricing freshness.
- No article was changed, removed, noindexed or redirected based on word count alone.
- Source word counts are rough TSX-source counts, not rendered article word counts. External URL counts are not a proxy for source quality; a vendor homepage does not substantiate a specific price or feature claim.


## Batch 3 — guides 21–30 (screened 7 November 2026)

**Progress:** 30 of 109 guides screened (27.5%); 79 remain. This is editorial triage of the source files, not a final verification of every vendor claim or a rendered-page review. Source word counts below are rough TSX token counts, not rendered article word counts.

| # | Guide | Initial assessment | Priority / next action |
|---:|---|---|---|
| 21 | `contract-management-software` | Very thin (about 445 source words), no article H2/H3 structure, and only three vendor homepage links. The current description of PandaDoc's free offer as “e-signature-only” conflicts with its official pricing page, which currently describes a shared limit of five created documents per month. ContractSafe's official page currently shows starting prices of $450/month (Organize), $660/month (Finalize), and $815/month (Maximize), with unlimited users; this makes the article's “simple, affordable” small-business framing questionable without a clearer target segment. | **Critical factual review + rewrite.** Correct the PandaDoc free-plan description, reassess ContractSafe's fit, add primary pricing/product sources, and distinguish contract repository, e-signature, proposal, and full CLM needs. |
| 22 | `business-vpn` | Very thin (about 477 source words), no substantive article headings, four vendor homepages only. It correctly distinguishes consumer VPNs from managed business access, but makes material free-tier and capability claims without direct plan evidence. | **High.** Verify Twingate and Cloudflare Zero Trust user caps/features, clarify VPN vs ZTNA/SASE, and add vendor documentation, setup/identity/security criteria, and country/availability caveats. |
| 23 | `password-managers` | Strongest source structure in this batch (about 1,229 words), with practical evaluation sections and seven external URLs, including vendor pricing pages. No explicit quick answer or dated review marker found. | **Medium.** Retain the practical testing framework; verify plan/device/user limits from official pages, add an explicit short answer and dated review/method disclosure, and distinguish personal/family/business use. |
| 24 | `help-desk-software` | About 999 source words and two useful evaluation sections; four vendor homepage links. No quick answer or visible dated review marker. | **Medium–high.** Add direct plan/pricing and feature documentation, clarify shared inbox vs ticketing/help desk, and substantiate claims about channels, automation, seats, and support limits. |
| 25 | `esignature-software` | About 965 source words with a practical send-a-document evaluation section; four vendor homepage links. | **Medium–high.** Add direct pricing, envelope/document limits, signer authentication, audit-trail and regional e-signature/legal-framework sources. Avoid implying that legal validity is identical in every country. |
| 26 | `time-tracking-software` | About 1,043 source words with useful real-workday and privacy/monitoring distinctions; four vendor homepage links. | **Medium.** Add direct pricing/plan documentation and test-disclosure clarity; assess privacy, employee-monitoring, payroll integrations, rounding, and country-specific labour/privacy implications. |
| 27 | `time-tracking-software-pricing` | About 1,490 source words, three substantive headings, and direct official pricing/help links for Clockify, Toggl, and Harvest. No visible dated review marker or country caveat. | **Medium.** Strong base; re-check seat billing, annual/monthly terms, minimums, feature gates and taxes against each official plan; label currency/market and date every comparison. |
| 28 | `web-hosting` | About 637 source words, no substantive article headings, and five vendor homepage links. The article correctly warns about renewal pricing, but gives no directly linked plan/renewal evidence in the inspected source. | **High.** Add official plan and renewal links for every host, distinguish shared/managed WordPress/cloud hosting, verify backup/uptime/overage claims, and compare a consistent term and billing market. |
| 29 | `business-phone-voip` | About 678 source words, one practical call-flow test section, four vendor homepage links. Claims such as “300+ connectors”, “lowest genuine per-user cost”, and team-size recommendations lack direct evidence in the inspected source. | **High.** Verify current plan prices, included domestic/international calling, number availability, SMS, taxes, emergency calling and porting by country; source integration counts and remove unsupported superlatives. |
| 30 | `live-chat-software` | About 954 source words and two useful evaluation sections; four vendor homepage links. No visible quick answer, dated review marker, or country caveat. | **Medium–high.** Verify free-plan seats/conversation limits, AI usage and channel support; distinguish live chat, shared inbox and AI chatbot, and add direct pricing/product sources. |

### Batch 3 source checks and cautions

- PandaDoc's official pricing page currently describes its Free plan as allowing **five documents per month**, with Starter and Business paid tiers; the article's “free e-signature-only plan” description therefore needs correction or a precise explanation of what “document” means. <https://www.pandadoc.com/pricing/>
- ContractSafe's official pricing page currently presents starting prices of **US$450/month, US$660/month and US$815/month**, with unlimited users and contract-volume-based pricing. This is not an obvious default recommendation for a small business; reassess its audience fit and price positioning. <https://www.contractsafe.com/>
- Cloudflare's official Zero Trust pricing page currently describes a free plan for teams under 50 users and a US$7/user/month pay-as-you-go plan for teams over 50; the guide's “meaningful number of users” wording should be made precise and checked against the exact product scope. <https://www.cloudflare.com/plans/zero-trust-services/>
- Current Hostinger and Bluehost pricing pages show why a single “monthly” headline is insufficient: promotional term length, upfront payment, renewal rates and country/tax availability affect the real cost. <https://www.hostinger.com/pricing> <https://www.bluehost.com/pricing>
- Homepage-link counts are not a quality score by themselves. This batch flags missing direct evidence and dated checks for follow-up; it does not establish that every unlinked claim is false.
- No article pages were changed in this audit batch. The audit document records triage findings only.


## Batch 4 — guides 31–40 (screened 7 November 2026)

**Progress:** 40 of 109 guides screened (36.7%); 69 remain. This is source-file editorial triage, not a final verification of every vendor claim or a rendered-page review. Word counts are rough TSX-source counts, not rendered article word counts.

| # | Guide | Initial assessment | Priority / next action |
|---:|---|---|---|
| 31 | `antivirus-endpoint-security` | About 580 source words, no substantive article headings, and four vendor landing-page links. Contains consequential claims about Microsoft 365 bundle eligibility, Norton device/team fit, CrowdStrike pricing and security maturity without direct plan or independent-test citations. | **High.** Verify exact Defender licensing/bundle scope, current device/user limits and vendor tiers; cite current independent lab methodology/results rather than making unsupported detection/value recommendations. |
| 32 | `hr-software` | About 534 source words, no substantive article headings, and four vendor homepages. Correctly distinguishes HR from payroll, but Gusto is explicitly framed for US businesses and Deel's international compliance claims need jurisdiction-specific qualification. | **High.** Expand substantially; add country availability and payroll/legal caveats, direct plan/product sources, and a clear split between HRIS, payroll, EOR and contractor management. |
| 33 | `survey-nps-software` | Very thin (about 457 source words), no substantive headings, and three vendor homepages. Multiple claims about free response limits, NPS/CSAT capabilities, CRM sync and comparative price are unsupported by direct plan evidence. | **Critical rewrite.** Add a real selection framework and official plan links; verify response caps, question limits, seats, integrations, exports and whether NPS reporting is included on each tier. |
| 34 | `video-conferencing` | About 819 source words, one useful section encouraging buyers to start with existing subscriptions, and four vendor landing pages. No explicit quick answer or visible dated review. | **Medium–high.** Verify meeting duration, participant caps, recording/transcription, webinar and admin controls by plan; compare equivalent markets and clarify that feature availability can depend on workspace/license. |
| 35 | `cloud-backup-software` | About 486 source words, no substantive article headings, and four vendor homepages. The sync-vs-backup distinction is useful, but the “unlimited”, multi-device, free-tier and ransomware-protection claims need careful product/plan qualification. | **Critical rewrite.** Add a restore-test methodology, retention/versioning, endpoint/server coverage, encryption/key ownership, immutability, recovery time, storage limits and official pricing/product documentation. |
| 36 | `applicant-tracking-software` | About 512 source words, no substantive article headings, and four vendor homepages. No direct evidence for plan limits, candidate/job-posting caps, integrations or geographic hiring features. | **High.** Expand with hiring workflow criteria and official pricing/feature sources; distinguish ATS from HRIS, job-board distribution, assessments and background checks; qualify country availability. |
| 37 | `employee-scheduling-software` | About 475 source words, no substantive article headings, and four vendor homepages. Free-tier claims (including Connecteam's 10-user statement and 7shifts' single-location description) and compliance claims are not supported with direct plan/legal sources. | **Critical rewrite.** Verify current free limits and paid tiers; separate scheduling from time clock/payroll; cite jurisdiction-specific fair-workweek/overtime rules and avoid implying one tool guarantees legal compliance. |
| 38 | `business-email-hosting` | About 809 source words, one useful ecosystem-selection section, and four vendor pricing/product links. No visible dated review marker or country caveat. | **Medium–high.** Compare mailbox storage, custom domains, aliases, retention, admin/security, migration, support and annual billing on equivalent plans; distinguish hosted email from broader office suites. |
| 39 | `crm-for-freelancers` | Stronger foundation (about 1,549 source words), three practical evaluation sections and eight URLs, including direct pricing pages and a Zoho API-limits source. No explicit quick answer, dated review marker or country caveat. | **Medium.** Retain the hands-on setup/use-case approach; date plan checks, verify free-user/contact/automation caps and API limits, and explain when a spreadsheet or lightweight client tracker is enough. |
| 40 | `crm-for-small-businesses` | Strongest source foundation in this batch (about 1,629 source words), practical workflow sections, an explicit “official plan pages checked” section and testing disclosure. Eight URLs include direct product/pricing pages. | **Medium.** Preserve the decision framework; add an explicit quick answer and dated check date, verify current plan limits and regional availability, and substantiate comparisons with direct feature/plan evidence. |

### Batch 4 audit notes

- The most urgent content gaps are survey/NPS, cloud backup and employee scheduling: each is short, lacks meaningful section structure, and makes plan/capability claims that need primary-source verification.
- HR and endpoint security are also high priority because incorrect country/licensing assumptions can materially mislead buyers. Gusto should remain explicitly US-scoped unless a supported regional product is documented; Deel/EOR coverage must be checked country by country.
- Cloud backup needs a buyer-useful recovery framework, not only a list of vendors: version history, immutable/offline copies, restore testing, retention, endpoint coverage and recovery objectives matter more than a generic “cloud backup” label.
- Employee scheduling content must not imply that software alone ensures compliance. Applicable working-time, overtime, predictive-scheduling and recordkeeping rules depend on jurisdiction and worker classification.
- CRM for freelancers and CRM for small businesses are comparatively more developed, but their plan claims still need dated checks and country-specific notes.
- No article pages were changed in this batch; only this audit record was updated.


## Batch 5 — guides 41–50 (screened 7 November 2026)

**Progress:** 50 of 109 guides screened (45.9%); 59 remain. This is editorial triage of source files, not a final verification of every vendor claim or a rendered-page review. Word counts are rough TSX-source counts, not rendered article word counts.

| # | Guide | Initial assessment | Priority / next action |
|---:|---|---|---|
| 41 | `free-crm-software` | Strong structure (about 1,667 source words), four practical sections and seven URLs, including official plan pages. However, the HubSpot free record limit is stated as **1 million** other standard-object records; current official HubSpot pricing/help information states **1,000 records across other standard object types**. The page also says limits were checked 18 Oct 2026, so it is stale against current evidence. | **Critical factual correction.** Correct the HubSpot record limit, check every free-plan claim (including Zoho, Freshsales, Bitrix24 and Notion), date the review, and explicitly label market/currency where relevant. |
| 42 | `free-invoicing-software` | Strong foundation (about 1,484 source words), practical invoice test, official pricing/support links, country and desk-research disclosures. Explicitly scoped to US freelancers/small businesses, which is good, but some provider claims still need exact current limits and regional eligibility. | **Medium–high.** Verify Zoho Invoice country-by-country, Invoice Ninja client cap, Square's current free plan/processing rates, and Wave eligibility; keep software subscription separate from payment processing costs. |
| 43 | `invoicing-for-small-businesses` | About 801 source words, eight direct official links, practical invoice-to-payment workflow, dated plan checks and country/method disclosures. | **Medium.** Good evidence structure; check that vendor claims and regional payment availability are consistent with the linked pages, and expand the comparison criteria for tax, multi-currency, reconciliation and accountant access. |
| 44 | `accounting-for-freelancers` | About 1,277 source words and four vendor links, with practical reconciliation guidance and a country caveat. Several plan/product comparisons rely on vendor homepages rather than direct plan/support pages. | **Medium–high.** Add direct official plan links, clarify bookkeeping vs full double-entry accounting, and compare bank feeds, tax handling, invoicing, accountant access and country availability. |
| 45 | `free-accounting-software` | About 1,584 source words, four useful content sections, nine URLs and a methodology disclosure. Official Wave and Zoho sources are included. Free eligibility and product scope differ significantly between providers and countries. | **High.** Verify current free eligibility and limits; distinguish cloud vs desktop/open-source options; add dated regional notes and compare bank feeds, users, invoices, reports, backups and support. |
| 46 | `free-project-management-software` | About 1,179 source words and three practical sections, but only four unique vendor homepages in the inspected URL sample. No explicit quick answer, date marker or regional caveat found. | **Medium–high.** Add official plan links and exact free limits for users, projects, storage, automations, views and guest access; distinguish permanent free plans from trials and temporary offers. |
| 47 | `project-management-for-freelancers` | About 1,204 source words, useful workflow/selection sections and direct pricing pages for Trello, Asana, ClickUp and Notion. No dated review marker or country caveat found. | **Medium.** Retain the freelancer-specific workflow; verify current free/paid limits and guest/client access, then add a dated plan check and export/migration comparison. |
| 48 | `website-builder-for-freelancers` | About 919 source words, a useful portfolio-to-enquiry test and eight links including direct plan pages. No explicit quick answer, dated review marker or country caveat found. | **Medium.** Verify current custom-domain, CMS, form, bandwidth and publishing limits; compare total launch cost and export/migration constraints across equivalent plans and billing regions. |
| 49 | `free-website-builders` | About 665 source words, one useful publishing-test section, but only four vendor homepages and no direct plan links in the inspected source. The article's own advice is sound but the comparison remains generic. | **High.** Add official free-plan/pricing sources and precise limits for platform branding, custom domains, page/CMS count, forms, analytics, SEO controls and monetization. |
| 50 | `free-scheduling-software` | About 509 source words, one practical booking-journey test and four vendor homepages. Product eligibility and free limits are described cautiously but not substantiated with direct official plan/licensing pages. | **High.** Add current Calendly, Google appointment schedules, Microsoft Bookings and Zoho Bookings plan/licensing links; verify seats, calendars, booking types, reminders, time-zone handling and country availability. |

### Batch 5 source checks and cautions

- HubSpot's current official pricing page states Free is for up to **2 users** and 1,000 contacts; its FAQ states **1,000 records across all other standard object types per account**. The guide's “1 million” claim is a material discrepancy and should be corrected before the page is relied upon. <https://www.hubspot.com/pricing/crm>
- Zoho CRM's official specification page confirms the Free edition supports up to **3 users** and lists 5,000 API credits per 24-hour period. This supports part of the guide's comparison, but does not validate every feature or email-template/export limit stated there. <https://help.zoho.com/portal/en/kb/crm/crm-reference/introduction-to-zoho-crm/articles/specifications-zoho-crm>
- The free invoicing page is explicitly US-scoped, which should be preserved in its title/metadata and recommendations. Do not imply Wave or Square eligibility in countries where their merchant services are unavailable.
- Free website builders and free scheduling software are particularly sensitive to account eligibility and plan changes. The next revision should link directly to the exact plan/licensing page rather than rely on vendor homepages.
- No article pages were changed in this batch; only this audit record was updated.


## Batch 6 — guides 51–60 (7 November 2026)

**Progress:** 60 of 109 guides screened (55.0%); 49 remain. This is an editorial/source triage, not a final verification of every claim. Source word counts below are approximate TSX-source token counts, not rendered article word counts. URL counts are not a quality score. No article pages were changed in this batch.

| # | Guide | Initial triage |
|---:|---|---|
| 51 | `hubspot-vs-pipedrive` | Stronger structure (about 1,584 source words), five distinct external source URLs, dated pricing note and useful workflow sections. Add explicit regional/currency caveat and methodology disclosure; re-check seat/feature gates at the actual checkout region. |
| 52 | `hubspot-vs-zoho-crm` | About 1,210 source words, but only two distinct official pricing URLs. Has dated pricing and desk-research disclosure; add a quick answer, regional caveat, and deeper feature/limits evidence beyond headline free-tier comparison. |
| 53 | `pipedrive-vs-zoho-crm` | About 1,072 source words, three distinct source URLs and useful workflow/migration sections. Dated pricing and methodology are present; regional caveat and clearer quick answer are missing. |
| 54 | `quickbooks-vs-xero` | Stronger structure (about 1,701 source words), but relies on two vendor pricing URLs. Dated review, country caveat and desk-research disclosure are present. Verify country-specific accounting, tax, bank-feed and payroll availability rather than treating US pricing as global. |
| 55 | `quickbooks-vs-freshbooks` | About 1,271 source words and two pricing URLs; dated pricing and desk-research disclosure present. Add country/availability caveats and stronger primary evidence for the workflow and plan limits. |
| 56 | `freshbooks-vs-wave` | About 1,580 source words, six distinct URLs, dated pricing, country caveat and desk-research disclosure. Good source foundation; keep Wave eligibility and payment-processing availability explicit by country. |
| 57 | `trello-vs-asana` | About 810 source words with five source URLs and specific plan-limit claims. Has a dated US pricing note, but no explicit methodology disclosure or broader country caveat. Recheck the current plan limits and distinguish Workspace collaborator limits from board membership. |
| 58 | `asana-vs-clickup` | About 672 source words, only two homepage URLs, no dated review, no explicit methodology/country disclosure, and no quick answer. High-priority expansion: replace generic free-tier descriptions with official plan evidence and a dated, region-labelled comparison. |
| 59 | `clickup-vs-monday` | About 821 source words and six URLs, with dated plan note and desk-research disclosure. The stated monday.com Free 200-item limit needs immediate re-verification: the current official pricing page clearly lists up to 2 seats, 3 boards and 3 Docs, but the retrieved current page does not substantiate a 200-item cap. Reassess the exact current free-plan limits and paid seat minimum before retaining the claim. |
| 60 | `notion-vs-clickup` | About 644 source words, only two homepage URLs, and no dated review, explicit methodology disclosure or country caveat. Quick answer is present, but plan comparison is generic. High-priority expansion with official pricing/limits links and a dated, region-labelled comparison. |

### Primary-source checks recorded for this batch

- HubSpot's current official pricing page states Free is available for up to 2 users and 1,000 contacts, with 1,000 records across other standard object types per account. This is a critical cap to preserve accurately in any CRM comparison: https://www.hubspot.com/pricing/crm
- Zoho CRM's official specifications page states the Free edition supports up to 3 users and 5,000 API credits per 24 hours: https://help.zoho.com/portal/en/kb/crm/crm-reference/introduction-to-zoho-crm/articles/specifications-zoho-crm
- Trello's current official pricing page states Free supports up to 10 collaborators per Workspace and 10 boards per Workspace, with unlimited cards and 250 monthly Workspace command runs. Atlassian clarifies the collaborator limit applies at Workspace level: https://trello.com/en/pricing and https://support.atlassian.com/trello/docs/workspace-user-limit/
- ClickUp's current official pricing page lists Free Forever with unlimited tasks and free members, 60 MB storage, and one form; the page now labels the first paid tier Core. Do not carry over older tier names or prices without a fresh check: https://clickup.com/pricing
- Notion's current official pricing page lists Free at $0/member/month, Plus at $10/member/month and Business at $20/member/month in USD, with limits such as 5 MB uploads on Free and a block cap for multi-member Free workspaces. Treat these as displayed USD prices, not universal local prices: https://www.notion.com/pricing
- monday.com's current official Work Management pricing page lists Free with up to 2 seats, 3 boards and 3 Docs; paid plan seat minimums and current prices should be verified at the selected billing region. The current retrieved page did not support the article's 200-item Free-plan claim, so that claim is flagged for investigation rather than declared false: https://monday.com/pricing

### Batch 6 priority queue

1. **High:** `asana-vs-clickup`, `notion-vs-clickup` — short, generic, and missing dated primary-source pricing/limit evidence.
2. **High:** `clickup-vs-monday` — verify the monday.com Free item-cap claim and update tier names/seat assumptions against official sources.
3. **Medium:** `trello-vs-asana` — refresh dated limits and add methodology/region disclosures.
4. **Medium:** `hubspot-vs-zoho-crm`, `pipedrive-vs-zoho-crm`, `quickbooks-vs-freshbooks` — deepen primary-source support and add region-specific context.
5. **Maintain/refresh:** `hubspot-vs-pipedrive`, `quickbooks-vs-xero`, `freshbooks-vs-wave` — preserve stronger structure while refreshing vendor-specific and regional claims.

**Scope note:** No article was rewritten, no URL was removed, and no index/noindex/redirect decision was made from this screening alone. All flagged claims require page-level follow-up before publication changes.
