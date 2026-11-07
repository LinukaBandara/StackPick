-- Manually imported, source-attributed monthly analytics snapshots.
-- This table intentionally stores no visitor identifiers or raw event streams.
create table if not exists public.site_analytics_monthly (
  id uuid primary key default gen_random_uuid(),
  period_month date not null check (extract(day from period_month) = 1),
  source text not null check (source in ('google_search_console', 'google_analytics_4')),
  page_path text not null default '*' check (char_length(page_path) between 1 and 500),
  category text not null default '*' check (char_length(category) between 1 and 120),
  software_slug text not null default '*' check (char_length(software_slug) between 1 and 120),
  impressions bigint check (impressions is null or impressions >= 0),
  search_clicks bigint check (search_clicks is null or search_clicks >= 0),
  sessions bigint check (sessions is null or sessions >= 0),
  page_views bigint check (page_views is null or page_views >= 0),
  engaged_sessions bigint check (engaged_sessions is null or engaged_sessions >= 0),
  source_url text,
  source_note text,
  imported_at timestamptz not null default now(),
  unique (period_month, source, page_path, category, software_slug),
  constraint analytics_source_metrics check (
    (source = 'google_search_console' and impressions is not null and search_clicks is not null)
    or
    (source = 'google_analytics_4' and (sessions is not null or page_views is not null or engaged_sessions is not null))
  )
);

create index if not exists site_analytics_monthly_period_idx
  on public.site_analytics_monthly(period_month desc);
create index if not exists site_analytics_monthly_source_idx
  on public.site_analytics_monthly(source, period_month desc);

alter table public.site_analytics_monthly enable row level security;
revoke all on public.site_analytics_monthly from anon, authenticated;
drop policy if exists "Moderators manage monthly analytics" on public.site_analytics_monthly;
create policy "Moderators manage monthly analytics"
  on public.site_analytics_monthly for all to authenticated
  using ((select public.is_stackpick_moderator()))
  with check ((select public.is_stackpick_moderator()));
grant select, insert, update, delete on public.site_analytics_monthly to authenticated;
