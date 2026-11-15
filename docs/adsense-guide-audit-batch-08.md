# AdSense recovery: guide audit batch 08

**Scope:** Next three content routes after batch 07. One adjacent route, `/best/invoicing-for-freelancers`, is an intentional redirect alias to `/best/invoicing-software` and is excluded from the content-page count.

**Branch:** `adsense-recovery/phase-1-directory-integrity`

## Results

| Route | Classification | Source-level finding | Required follow-up |
|---|---|---|---|
| `/best/invoice-clients-as-freelancer` | Thin / critical template mismatch | Despite the URL and title promising a freelancer invoicing guide, the page's comparison rows are generic HubSpot, Notion, Trello and Zoho descriptions. The visible “practical workflow” section also appears to contain generic task-selection copy rather than invoice-specific guidance. | Rewrite around an actual invoice lifecycle: quote/approval, invoice fields, payment terms, tax treatment caveat, delivery, reminders, reconciliation and record retention. Include a sample invoice checklist and region-specific caveat; remove unrelated CRM/task-tool recommendations. This is a high-priority original-value fix. |
| `/best/invoicing-for-small-businesses` | Useful foundation / needs deeper workflow and region detail | Compares Zoho Invoice, Wave, FreshBooks and QuickBooks by workflow fit, with a useful end-to-end estimate-to-paid test. It correctly distinguishes invoice software from bookkeeping and payment processing. | Add a concrete small-business scenario with multiple staff/approvers, recurring billing, overdue follow-up and reconciliation. Verify country eligibility, payment gateways, transaction fees, user limits and export options. Make US/region scope explicit where vendor details are US-specific. |
| `/best/invoicing-software` | Strong foundation / urgent exact pricing and regional verification | More detailed freelancer comparison across Wave, Zoho Invoice, Invoice Ninja, FreshBooks and QuickBooks. It separates software subscription from processing fees, provides a five-minute invoice test and links official plan pages. Exact prices, transaction rates, client caps and invoice quotas are included with an October 11, 2026 check date. | Recheck all US payment rates, QuickBooks' two-invoice monthly cap, FreshBooks client limits and renewal prices, Invoice Ninja's five-client cap, Wave eligibility and Zoho gateway availability. Verify standard prices separately from promotions. Do not recommend US payment processors to non-US businesses without checking eligibility. |

## Batch conclusion

- **3 content routes source-screened; 1 redirect alias excluded.**
- **Highest-priority content fix:** `invoice-clients-as-freelancer` currently appears mismatched to its own search intent and needs a complete invoice-specific rewrite.
- **Pricing risk:** invoicing comparisons contain exact fees and plan quotas that need current official-source rechecks, with US scope clearly labelled.
- **Distinct page roles:** freelancer invoicing software should compare products; small-business invoicing should focus on multi-person approval/reconciliation; the how-to guide should teach invoice creation and follow-up rather than list unrelated software categories.
- These are source-screening classifications, not a guarantee of AdSense suitability or factual accuracy. No live-page rendering, link-status verification, vendor checkout, product testing or external benchmark verification was performed.

## Review method and guardrails

Each source file was inspected for page intent, practical usefulness, workflow specificity, pricing/plan assertions, external source links, regional claims and overlap. Numeric prices, quotas, payment fees and country availability require separate current primary-source verification before publication. Do not invent hands-on testing, first-hand experience, customer outcomes or credentials.

**Progress:** 70 / 109 content routes source-screened (64.2%). The remaining 39 content routes still require review.
