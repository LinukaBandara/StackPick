# StackPick SEO and indexing plan — 2026-10-17

## Verified baseline

- Public site prefers `https://www.stackpick.tech`: homepage and privacy canonicals, sitemap locations, and robots sitemap directive agree.
- `/sitemap.xml` and `/robots.txt` return HTTP 200 publicly. The sitemap had 122 URLs on 2026-10-17.
- The Search Console export dated 2026-10-16 reports 59 discovered-not-indexed, one crawled-not-indexed, four duplicate-without-user-selected-canonical, and three redirect URLs. It does not contain affected URLs or validation details.
- Seven static routes existed in the local app but were omitted from the sitemap. They are now listed in `app/sitemap.ts`.

## Actions

1. Build and inspect the generated sitemap to ensure all intended static pages and software profiles appear once, with only canonical public URLs.
2. After review and deployment, check the public sitemap URL count and representative new entries. The code change does not itself submit or index URLs.
3. In Search Console, export the eight URL-level examples and their URL Inspection details for duplicate, redirect, and crawled-not-indexed categories. Determine whether redirects are intentional and whether any sitemap/internal link points to them.
4. For the 59 discovered-not-indexed URLs, group by content template and quality before editing. Do not use indexing requests as proof of inclusion.
5. Confirm the deployment `NEXT_PUBLIC_SITE_URL` remains `https://www.stackpick.tech` so generated canonicals, sitemap, and robots stay aligned.

## Status

Route omissions fixed in local source; build/runtime verification and deployment remain pending. Production baseline was verified by public HTTP on 2026-10-17. Google processing and canonical selection remain unverified.
