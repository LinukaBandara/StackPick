# Phase 6 — Monetisation foundation

## Current state

StackPick has no confirmed active affiliate partnerships in this repository. The affiliate destination registry is intentionally empty. Existing vendor links must continue to point directly to the vendor until a programme has approved StackPick and issued a verified tracking URL.

Do not add guessed, shortened, or generic affiliate URLs. Do not label a link as affiliate merely because an application has been submitted.

## Affiliate link workflow

1. Apply to a vendor's official affiliate programme using accurate StackPick traffic, audience and editorial details.
2. Wait for written approval.
3. Obtain the exact tracking URL and read the programme's paid-search, coupon, brand-bidding, geography, attribution and disclosure rules.
4. Test the URL manually in a clean browser session. Confirm it reaches the correct vendor/product and preserves the programme's tracking parameters.
5. Add one entry to `lib/affiliate.ts`, keyed by the exact software profile slug.
6. Confirm the profile's primary vendor action uses the affiliate destination and displays an adjacent disclosure.
7. Confirm the anchor has `rel="sponsored nofollow noopener noreferrer"` and `data-affiliate="true"`.
8. Test analytics with consent accepted and rejected. The existing `AffiliateClickTracker` only emits the `affiliate_click` GA4 event when `gtag` is present; the site's cookie-consent flow controls whether GA4 is loaded.
9. Keep the direct official pricing link separate and clearly labelled.
10. Record the approval date, programme terms, link owner and last verification date in the private partner register.

## Measurement

Use GA4's `vendor_outbound_click` event to measure outbound intent on software profiles. It covers the primary vendor website action, official pricing actions and official-source links. Its parameters are:

- `link_url`
- `link_domain`
- `link_text`
- `page_path`
- `software_slug`
- `vendor_action` (`website` or `pricing`)

When the destination is a verified affiliate link, the same click also emits the more specific `affiliate_click` event with the same parameters. Ordinary official vendor links never emit `affiliate_click`.

Both events depend on the existing cookie-consent flow: GA4 is loaded only after analytics consent. With consent rejected or not yet selected, no event is sent. No separate tracking identifiers or click database are created.

Configure `affiliate_click` as a key event only after validating that consent settings and event collection work as intended. Do not treat clicks as confirmed purchases or commissions. Reconcile revenue against each programme's own dashboard and attribution window.

Useful reporting dimensions:
- Software profile / guide page
- Vendor and programme
- Clicks and click-through rate
- Confirmed conversions and commission
- Reversals, rejected transactions and payout status
- Country / device, where analytics consent and applicable rules permit collection

## Editorial and compliance guardrails

- Keep product fit, pricing, limitations and alternatives editorially independent.
- Never rank a vendor higher solely because it pays a commission.
- Clearly disclose the relationship next to affiliate links and on the disclosure page.
- Keep direct official pricing and documentation sources available.
- Recheck programme terms and link destinations periodically.
- Do not claim that StackPick earns commission until a programme reports a qualifying conversion.
- Do not enable display ads or additional tracking without updating privacy and consent controls first.

## Phase 6 delivery sequence

1. Affiliate link registry and disclosure-aware vendor CTA — implemented.
2. Consent-aware vendor outbound measurement — implemented for profile website and pricing links; affiliate clicks retain a separate event.
3. Build an approved-programme register and apply to suitable programmes — applications are outside this implementation branch.
4. Add only verified links after approval.
5. Validate GA4 event receipt in DebugView after analytics consent, then review clicks and confirmed revenue monthly.
6. Consider vendor lead-generation / sponsored placements only after clear labeling, separation from editorial ranking and an operational review process.

## Initial partner application shortlist (researched 7 November 2026)

This is a preparation list, not a claim of acceptance or an active relationship. Recheck programme terms and territory rules inside the application portal before submitting.

| Priority | Programme | Publicly stated terms / fit | StackPick action |
|---|---|---|---|
| 1 | [HubSpot Affiliate Program](https://www.hubspot.com/partners/affiliates) | Explicitly welcomes software reviewers and content creators serving growing businesses. Public page describes 30% recurring commission for up to one year at the Starter tier and a typical 2–3 business-day review. | Good fit for the CRM profiles and small-business guides. Complete the application with the live StackPick catalogue and original editorial content. |
| 2 | [Pipedrive Affiliate Program](https://www.pipedrive.com/en/affiliate-partnership) | Public page describes 20% revenue share for the first 12 months at the entry tier, a 90-day cookie window, no minimum sales requirement and a typical 1–2 week review. | Strong fit for CRM comparisons and lead-management content. Apply as an affiliate publisher, not as a solution provider unless offering implementation services. |
| 3 | [FreshBooks Affiliate Program](https://www.freshbooks.com/affiliate-program) | Public page advertises up to $200 per paid subscriber and accepts affiliates from many countries subject to eligibility. It explicitly checks original content, audience fit and whether the site is fully launched; content marketing is preferred over social-only or ads-only promotion. | Relevant to invoicing/accounting guides. Existing application is already in progress; do not submit duplicates. If declined, request the specific reason and improve the relevant content before reapplying. |
| 4 | [QuickBooks affiliate options](https://quickbooks.intuit.com/learn-support/en-us/help-article/small-business/promote-sell-quickbooks-quickbooks-business/L1WmCWEMR_US_en_US?uid=llj7itm9) | Intuit describes a US-focused business affiliate route and a separate Commission Junction publisher programme for blogs and content sites. | Check CJ publisher eligibility and Sri Lanka payout/tax requirements before investing time. Do not assume the US business-partner route accepts a Sri Lankan publisher. |

### Defer for now

- [Semrush Affiliate Program](https://www.semrush.com/lp/affiliate-program/en/): its public eligibility guidance asks content publishers for at least 1,000 unique monthly visitors and emphasizes relevant organic reach and content quality. Revisit after StackPick reaches that threshold; do not inflate traffic or misstate current reach.

### Application profile guidance

Use accurate, consistent information:
- Website: https://stackpick.tech/
- Publisher type: independent B2B software research and comparison publication.
- Audience: freelancers, small businesses and small teams evaluating CRM, accounting, productivity, marketing and other business software.
- Promotion: original comparison guides, software profiles, pricing/plan-limit explainers and contextual links within relevant editorial content.
- Editorial policy: recommendations are based on product fit, documented pricing/limits and trade-offs; compensation does not buy rankings.
- Traffic: report actual analytics only. Do not estimate or embellish monthly users, conversions or revenue.
- Geography: state the actual audience geography based on analytics, and separately disclose that the publisher operates from Sri Lanka if requested by the application.

The owner must complete account identity, tax, payout and application declarations personally. Do not submit applications or agree to programme terms on the owner's behalf without explicit authorization.
