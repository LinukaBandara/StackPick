# Phase 11 — Growth, partnerships and monetisation integrity

## Objective

Create a clear, credible path for relevant software publishers to contact StackPick while preserving the independence of editorial research. Improve the conversion path from vendor discovery to an appropriately routed enquiry.

## Delivered in this phase

- Public, indexable `/partnerships` page describing the audience and the commercial enquiry route.
- Clear distinction between free profile corrections/claims and a potential commercial proposal.
- Direct email enquiry with a prefilled subject and structured prompts; no new personal-data collection endpoint.
- Explicit safeguards: no payment for organic ranking, reviews, favourable verdicts or removal of legitimate criticism.
- Any future paid placement must be clearly labelled as sponsored and visually distinct from independent recommendations.
- No rate card, audience promise, sponsorship inventory, payment integration or commercial agreement is represented as currently available.
- Vendor page, footer and sitemap provide discovery paths to the new page.

## Monetisation activation gates

1. Affiliate links: only after written programme approval, a verified tracking URL and review of programme terms. Keep the public affiliate registry empty until then.
2. Sponsored placements: only after a written agreement, approved creative and placement dates, clear on-page sponsorship labels, and a documented editorial separation process.
3. Vendor subscriptions: defer checkout and recurring billing until there is a validated offer, support process, cancellation/refund terms, tax/accounting plan and reliable payment provider.
4. Newsletter: do not collect addresses until a provider, consent wording, unsubscribe handling, privacy notice and retention process are implemented.
5. Analytics: use actual Search Console, consented GA4 and reconciled partner reports. Never seed demo data or infer revenue from clicks.

## Validation and release

- The page uses the existing published contact email; it does not add a form or store new personal information.
- Metadata canonical is `/partnerships`; route is added to sitemap.
- Review the diff, run lint, internal-link checks and production build in CI before considering merge.
- This PR is stacked on Phase 10. No production merge or deployment is performed by this change.
