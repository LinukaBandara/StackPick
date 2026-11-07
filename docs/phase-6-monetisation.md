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

Use GA4's `affiliate_click` event to measure outbound partner intent. Its parameters are:

- `link_url`
- `link_domain`
- `link_text`
- `page_path`

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

1. Affiliate link registry and disclosure-aware vendor CTA — this initial implementation.
2. Verify existing GA4 consent behaviour and document the affiliate event in analytics.
3. Build an approved-programme register and apply to suitable programmes.
4. Add only verified links after approval.
5. Review clicks and confirmed revenue monthly; prioritize pages with meaningful buyer intent.
6. Consider vendor lead-generation / sponsored placements only after clear labeling, separation from editorial ranking and an operational review process.
