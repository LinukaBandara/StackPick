# StackPick content QA checklist

Use this checklist for every new comparison or developer guide before it is considered ready.

## Editorial evidence
- [ ] Search intent and target country recorded with a dated SERP review.
- [ ] Official product documentation checked for claims and links.
- [ ] Pricing and free-plan language qualified; no stale exact amounts.
- [ ] No fabricated hands-on experience, ranking, test, quote or statistic.
- [ ] Original decision criteria and meaningful trade-offs included.
- [ ] Reader can identify when each option is a poor fit.
- [ ] Affiliate relationships disclosed if they are introduced.

## Technical SEO
- [ ] Unique title and meta description.
- [ ] Canonical points to the intended route.
- [ ] One descriptive H1; headings follow a useful hierarchy.
- [ ] Structured data matches visible content and does not invent ratings.
- [ ] Page is included in `app/sitemap.ts` and `app/best/page.tsx`.
- [ ] Relevant internal links resolve; no self-links or dead routes.
- [ ] Outbound links are official and use appropriate external-link behavior.
- [ ] No duplicate route or near-duplicate intent competing with an existing page.

## Product and accessibility QA
- [ ] Responsive check at narrow mobile and desktop widths.
- [ ] Tables/cards remain readable without horizontal overflow.
- [ ] Keyboard focus and jump links work.
- [ ] Link text is descriptive; no color-only communication.
- [ ] Build, type-check and lint results reviewed; failures recorded honestly.

## Release
- [ ] Preview build corresponds to the intended branch and latest commit.
- [ ] Preview route returns successfully and title/canonical/sitemap are checked.
- [ ] Production branch/domain is unchanged until explicit review.
- [ ] Search Console is used for indexing diagnostics after release, not as proof of ranking.
