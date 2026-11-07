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

Use GA4's `vendor_outbound_click` event to measure outbound intent on software profiles. It covers the primary vendor website action and official pricing actions on software profiles, pricing actions in the software catalogue, and official-site actions in comparison guides. Its parameters are:

- `link_url`
- `link_domain`
- `link_text`
- `page_path`
- `software_slug`
- `vendor_action` (`website`, `pricing` or `comparison-website`)

When the destination is a verified affiliate link, the same click also emits the more specific `affiliate_click` event with the same parameters. Ordinary official vendor links never emit `affiliate_click`.

Both events depend on the existing cookie-consent flow: GA4 is loaded only after analytics consent. With consent rejected or not yet selected, no event is sent. No separate tracking identifiers or click database are created.

Configure `affiliate_click` as a key event only after validating that consent settings and event collection work as intended. Do not treat clicks as confirmed purchases or commissions. Reconcile revenue against each programme's own dashboard and attribution window.

### GA4 setup and validation checklist

After the preview build is available and the correct GA4 property is configured:

1. Open **GA4 → Admin → Data display → Custom definitions**.
2. Create event-scoped custom dimensions for `software_slug` and `vendor_action`. The event parameters are sent automatically; custom definitions make them available in standard reports and explorations.
3. Open **DebugView** in the same GA4 property.
4. In a fresh browser session, choose **Accept all** in StackPick's cookie banner. Open a software profile and click the main vendor website action. Confirm one `vendor_outbound_click` event with `vendor_action=website` and the expected `software_slug`.
5. Click the official pricing action. Confirm `vendor_action=pricing` and the same software slug.
6. In a separate fresh session, reject optional analytics cookies. Repeat both clicks and confirm no GA4 events are received.
7. Repeat after changing consent in privacy settings to confirm the stored choice takes effect.
8. Do not expect an `affiliate_click` event until a verified partner URL is configured for that exact profile.

DebugView testing should use a preview deployment and a test browser. Do not click production links repeatedly just to create test data. If DebugView remains empty, first verify the preview's GA4 property ID, consent state, browser extensions and network requests; do not weaken consent controls to make events appear.


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
2. Consent-aware vendor outbound measurement — implemented for software profile, catalogue pricing and comparison-guide vendor links; affiliate clicks retain a separate event.
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


## Private affiliate operations workspace

The private moderator workspace is available at `/admin/affiliate-operations` after signing in with the StackPick moderator account. It is linked from the review-moderation workspace and is marked `noindex, nofollow`.

The workspace includes:

- A partner register with the exact software profile, programme name, application/approval state, official programme and terms URLs, private tracking URL, commission summary, cookie window, disclosure, application/approval dates, last link-verification date and private notes.
- Server-side validation against the existing software catalogue. URL fields must use HTTPS.
- An activation guard: a record cannot be marked active without a tracking URL, approval date, recent verification date and disclosure. **The register does not publish or activate affiliate links on public pages.** Public destinations remain controlled by the reviewed `lib/affiliate.ts` allow-list; a human must separately verify and add an approved destination there.
- A monthly reconciliation ledger for outbound clicks, conversions, reversals and confirmed commission, with source notes. Re-entering a partner/month updates that month's record rather than duplicating it.
- Commission totals are grouped by currency. No exchange rates or estimated conversions are invented.

### Database and access controls

Migration: `supabase/migrations/20261107054121_create_affiliate_operations.sql`.

- `affiliate_partners` stores programme and tracking details.
- `affiliate_performance` stores manually reconciled monthly performance.
- Both tables have RLS enabled, no anonymous grants, and moderator-only policies using `is_stackpick_moderator()`.
- The Next.js API re-checks the signed-in moderator role on every request. Tracking URLs and private notes are never sent to public pages or public API routes.
- The register intentionally does not ingest GA4, affiliate network conversion feeds or payouts automatically. Click figures may be reconciled against GA4; conversion and commission figures must come from the programme's own reporting dashboard.

### Operating checklist

1. Add the programme as `prospect` or `applied` only when that status is accurate.
2. Record written approval and the current programme terms.
3. Save the exact tracking URL privately and verify its destination and tracking behavior.
4. Add the required disclosure and verification date before setting the record to `active`.
5. Separately update `lib/affiliate.ts` in a reviewed code change before any public CTA uses that destination.
6. Reconcile clicks and partner-reported conversions, reversals and confirmed commission monthly. Record the source and reporting month.
7. Pause the record and remove the public allow-list entry if approval is withdrawn, terms change or the URL fails verification.

The reporting ledger is an owner-maintained reconciliation record, not proof of payment. Only amounts confirmed in the affiliate programme dashboard should be entered as confirmed commission.
