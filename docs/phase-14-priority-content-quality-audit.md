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
