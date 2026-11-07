-- Private affiliate partner register and manually reconciled performance ledger.
-- No public policies are created: only authenticated StackPick moderators may access either table.

create table if not exists public.affiliate_partners (
  id uuid primary key default gen_random_uuid(),
  software_slug text not null,
  programme_name text not null check (char_length(programme_name) between 2 and 120),
  status text not null default 'prospect'
    check (status in ('prospect', 'applied', 'approved', 'active', 'paused', 'rejected')),
  programme_url text,
  tracking_url text,
  terms_url text,
  commission_summary text,
  cookie_window_days integer check (cookie_window_days is null or cookie_window_days between 0 and 3650),
  disclosure text,
  application_date date,
  approval_date date,
  last_verified_at date,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (software_slug, programme_name),
  constraint active_partner_must_be_verified check (
    status <> 'active' or (
      tracking_url ~ '^https://'
      and disclosure is not null and char_length(trim(disclosure)) >= 10
      and approval_date is not null
      and last_verified_at is not null
    )
  )
);

create table if not exists public.affiliate_performance (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references public.affiliate_partners(id) on delete cascade,
  period_month date not null check (extract(day from period_month) = 1),
  outbound_clicks integer not null default 0 check (outbound_clicks >= 0),
  conversions integer not null default 0 check (conversions >= 0),
  reversals integer not null default 0 check (reversals >= 0),
  confirmed_commission numeric(12,2) not null default 0 check (confirmed_commission >= 0),
  currency char(3) not null default 'USD' check (currency ~ '^[A-Z]{3}$'),
  source_note text,
  reconciled_at timestamptz not null default now(),
  unique (partner_id, period_month)
);

create index if not exists affiliate_partners_status_idx on public.affiliate_partners(status);
create index if not exists affiliate_performance_period_idx on public.affiliate_performance(period_month desc);

alter table public.affiliate_partners enable row level security;
alter table public.affiliate_performance enable row level security;
revoke all on public.affiliate_partners from anon, authenticated;
revoke all on public.affiliate_performance from anon, authenticated;

drop policy if exists "Moderators manage affiliate partners" on public.affiliate_partners;
create policy "Moderators manage affiliate partners"
  on public.affiliate_partners for all to authenticated
  using ((select public.is_stackpick_moderator()))
  with check ((select public.is_stackpick_moderator()));

drop policy if exists "Moderators manage affiliate performance" on public.affiliate_performance;
create policy "Moderators manage affiliate performance"
  on public.affiliate_performance for all to authenticated
  using ((select public.is_stackpick_moderator()))
  with check ((select public.is_stackpick_moderator()));

grant select, insert, update, delete on public.affiliate_partners to authenticated;
grant select, insert, update, delete on public.affiliate_performance to authenticated;

create or replace function public.set_affiliate_partner_updated_at()
returns trigger language plpgsql set search_path = public, pg_temp as $$
begin
  new.updated_at = now();
  return new;
end;
$;
revoke all on function public.set_affiliate_partner_updated_at() from public, anon, authenticated;

drop trigger if exists affiliate_partner_updated_at on public.affiliate_partners;
create trigger affiliate_partner_updated_at before update on public.affiliate_partners
for each row execute function public.set_affiliate_partner_updated_at();
