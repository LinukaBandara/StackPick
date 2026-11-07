-- Phase 7: vendor profile claims and new-product suggestions.
-- Approval is a moderation decision only; it does not publish or change editorial content.

create table if not exists public.vendor_submissions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  contact_email text not null,
  request_type text not null check (request_type in ('claim', 'new_listing')),
  software_slug text,
  company_name text not null check (char_length(company_name) between 2 and 120),
  contact_name text not null check (char_length(contact_name) between 2 and 80),
  role text not null check (char_length(role) between 2 and 100),
  website_url text not null check (website_url ~ '^https://'),
  message text not null check (char_length(message) between 30 and 2000),
  product_name text,
  category text,
  product_description text,
  status text not null default 'pending'
    check (status in ('pending', 'reviewing', 'needs_info', 'approved', 'rejected')),
  moderator_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint vendor_submission_type_fields check (
    (request_type = 'claim' and software_slug is not null and product_name is null and category is null and product_description is null)
    or
    (request_type = 'new_listing' and software_slug is null
      and product_name is not null and char_length(product_name) between 2 and 120
      and category is not null and char_length(category) between 2 and 100
      and product_description is not null and char_length(product_description) between 40 and 1200)
  )
);

create index if not exists vendor_submissions_user_created_idx
  on public.vendor_submissions(user_id, created_at desc);
create index if not exists vendor_submissions_status_created_idx
  on public.vendor_submissions(status, created_at desc);
create unique index if not exists vendor_submissions_open_claim_idx
  on public.vendor_submissions(user_id, software_slug)
  where request_type = 'claim' and status in ('pending', 'reviewing', 'needs_info');
create unique index if not exists vendor_submissions_open_product_idx
  on public.vendor_submissions(user_id, lower(product_name))
  where request_type = 'new_listing' and status in ('pending', 'reviewing', 'needs_info');

alter table public.vendor_submissions enable row level security;
revoke all on public.vendor_submissions from anon, authenticated;

drop policy if exists "Users read own vendor requests or moderators read all" on public.vendor_submissions;
create policy "Users read own vendor requests or moderators read all"
  on public.vendor_submissions for select to authenticated
  using ((select auth.uid()) = user_id or (select public.is_stackpick_moderator()));

drop policy if exists "Users submit own pending vendor requests" on public.vendor_submissions;
create policy "Users submit own pending vendor requests"
  on public.vendor_submissions for insert to authenticated
  with check (
    (select auth.uid()) = user_id
    and status = 'pending'
    and moderator_notes is null
  );

drop policy if exists "Moderators manage vendor requests" on public.vendor_submissions;
create policy "Moderators manage vendor requests"
  on public.vendor_submissions for update to authenticated
  using ((select public.is_stackpick_moderator()))
  with check ((select public.is_stackpick_moderator()));

grant select, insert, update on public.vendor_submissions to authenticated;

create or replace function public.set_vendor_submission_updated_at()
returns trigger language plpgsql set search_path = public, pg_temp as $$
begin
  new.updated_at = now();
  return new;
end;
$$;
revoke all on function public.set_vendor_submission_updated_at() from public, anon, authenticated;

drop trigger if exists vendor_submission_updated_at on public.vendor_submissions;
create trigger vendor_submission_updated_at before update on public.vendor_submissions
for each row execute function public.set_vendor_submission_updated_at();
