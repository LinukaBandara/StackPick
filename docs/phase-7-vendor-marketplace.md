# Phase 7 — Vendor marketplace foundation

## Scope delivered

Phase 7 establishes a moderated vendor-submission workflow without allowing vendors to publish or edit public listings directly.

- Public vendor information page at `/for-vendors`.
- Authenticated vendor workspace at `/for-vendors/portal`.
- Existing software profile claim requests.
- New software product suggestions for editorial consideration.
- Vendor request history visible only to the submitting account.
- Moderator queue at `/admin/vendors`, linked from review moderation.
- Moderator-only status changes and private notes stored separately from vendor-readable submissions.
- Supabase row-level security for owner reads, owner inserts and moderator moderation.

## Workflow and safeguards

1. A vendor signs in and confirms their StackPick account email.
2. They submit either a claim against an existing profile or a new-product suggestion.
3. The API validates the software slug against the catalogue, validates HTTPS company websites, bounds all text fields and derives the submitter identity from the authenticated Supabase user.
4. The request is saved as pending. Duplicate open claims by the same account for the same software profile and duplicate open product suggestions by the same account/product are blocked by database indexes.
5. A moderator checks public evidence and may move the request to reviewing, needs information, approved or rejected. Private notes are stored in a separate moderator-only table, never in rows readable by vendors.
6. Approval does not publish a new software profile, grant editing rights, alter reviews, change rankings, or activate affiliate links. Those require separate editorial and implementation decisions.

## Database

Migrations:
- `supabase/migrations/20261107070000_create_vendor_marketplace.sql`
- `supabase/migrations/20261107070100_separate_vendor_moderator_notes.sql`

Tables:
- `vendor_submissions` stores vendor claims and product suggestions.
- `vendor_submission_notes` stores private moderator notes separately.

Security:
- RLS is enabled on both tables.
- Anonymous access is revoked.
- Authenticated users can read only their own submissions and insert only their own pending requests.
- Only StackPick moderators can read all submissions, update moderation status, and access private notes.
- Vendors have no update/delete grant or policy.
- The tables are explicitly granted only to authenticated users because new Supabase public-schema tables are not automatically exposed to the Data API on current projects.

## Not included / future work

- No public vendor directory or paid placement.
- No vendor-controlled editing of software profiles.
- No ownership verification automation, DNS challenges or email-domain verification.
- No file uploads, proof-document storage or payment processing.
- No automated vendor notifications or email service.
- No publication of approved product suggestions. Editorial review remains separate.
- No change to editorial ranking, review moderation or affiliate activation.
