# Phase 10 — Analytics and business intelligence

## Delivered

### Private analytics workspace
- Route: `/admin/analytics`.
- API: `/api/admin/analytics`.
- Every API request checks the signed-in user's moderator role through the existing moderator API guard.
- The page is noindex/nofollow and the robots policy disallows `/admin/` and `/api/admin/` crawling. These crawler rules are not treated as an access-control mechanism; the API guard and RLS remain authoritative.

### Source-attributed monthly data
- Add `site_analytics_monthly` for manually imported monthly reporting snapshots.
- Supported sources: Google Search Console and Google Analytics 4.
- Search Console records require impressions and search clicks.
- GA4 records accept sessions, page views and/or engaged sessions.
- Dimensions support a full-property snapshot (`*`), a page path, a category and/or a software profile slug.
- Each record can include a source report URL and notes describing the date range, filters, geography or device scope.
- The month/source/dimension key upserts, so re-importing a corrected report updates the matching record.
- The dashboard presents the latest full-property snapshot per source, a page-level content leaderboard with derived CTR, a category-level search-demand view, and a ledger of imported dimensions.\n- Segment views only use the matching reporting month and explicit wildcard dimensions; they are not mixed into full-property totals.

### Existing commercial reporting
- The analytics workspace links to the existing affiliate operations ledger.
- Affiliate conversions, reversals and confirmed commission continue to be reconciled from partner reports and grouped by their actual currency.
- Vendor outbound click events are still sent to GA4 only when the existing consent-aware tracker sees an available `gtag` function.
- The new dashboard does not pretend it can query GA4 or Search Console directly without a connected integration.

## Security and data minimisation
- RLS is enabled on `site_analytics_monthly`.
- Only authenticated moderators are allowed by the table policy.
- No anonymous table grants are present.
- No visitor identifiers, IP addresses, raw search queries or user-level analytics are stored in this monthly reporting ledger.
- Source URLs must use HTTPS.
- The API validates supported sources, reporting month, non-negative whole-number metrics and source-specific metric sets.

## Important limitations
- Data is manually imported from official Google reports; no Google connector, OAuth token or scheduled sync is configured by this phase.
- Metrics are only as accurate as the report export and its selected filters.
- Page/category/software rows can overlap; the dashboard avoids summing segmented rows into property-wide KPI cards.
- Search demand, category trends and content performance become useful once the owner imports consistent monthly and segmented reports.
- No conversion rate, affiliate revenue, user growth or ranking trend is fabricated when source records are absent.

## Verification
- Migration applied to Supabase project `stackpick-reviews`.
- SQL verification confirmed the table exists, RLS is enabled, one moderator policy exists and anon has zero table grants.
- Supabase Security Advisor returned no findings.
- Performance Advisor reported unused indexes on the new table before any reporting data had been imported, plus an existing multiple-permissive-policy warning on `software_reviews`. The latter is unrelated to this migration.
- GitHub Actions and application build checks are expected to run on the pull request; no production merge or deployment is included.
