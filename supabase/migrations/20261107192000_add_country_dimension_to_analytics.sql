-- Add country-level dimensions so GA4 premium-market sessions can be tracked
-- without mixing country rows into property-wide totals.
alter table public.site_analytics_monthly
  add column if not exists country_code text not null default '*';

alter table public.site_analytics_monthly
  add constraint site_analytics_monthly_country_code_check
  check (country_code = '*' or country_code ~ '^[A-Z]{2}$');

-- Replace the original five-column uniqueness rule with a country-aware key.
do $$
declare
  existing_constraint text;
begin
  select conname
    into existing_constraint
  from pg_constraint
  where conrelid = 'public.site_analytics_monthly'::regclass
    and contype = 'u'
    and pg_get_constraintdef(oid) like '%period_month%'
    and pg_get_constraintdef(oid) like '%source%'
    and pg_get_constraintdef(oid) like '%page_path%'
    and pg_get_constraintdef(oid) like '%category%'
    and pg_get_constraintdef(oid) like '%software_slug%';

  if existing_constraint is not null then
    execute format(
      'alter table public.site_analytics_monthly drop constraint %I',
      existing_constraint
    );
  end if;
end $$;

alter table public.site_analytics_monthly
  add constraint site_analytics_monthly_dimensions_unique
  unique (period_month, source, page_path, category, software_slug, country_code);

create index if not exists site_analytics_monthly_country_idx
  on public.site_analytics_monthly(source, country_code, period_month desc);

-- Preserve the existing moderator-only RLS policy and grants.
