create table if not exists public.software_reviews (
  id uuid primary key default gen_random_uuid(),
  software_slug text not null check (software_slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  user_id uuid not null references auth.users(id) on delete cascade,
  reviewer_name text not null check (char_length(trim(reviewer_name)) between 2 and 40),
  rating smallint not null check (rating between 1 and 5),
  title text not null check (char_length(trim(title)) between 5 and 100),
  body text not null check (char_length(trim(body)) between 30 and 3000),
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (software_slug, user_id)
);

create index if not exists software_reviews_public_listing_idx
  on public.software_reviews (software_slug, created_at desc)
  where status = 'approved';

create index if not exists software_reviews_user_idx
  on public.software_reviews (user_id, created_at desc);

alter table public.software_reviews enable row level security;

revoke all on table public.software_reviews from anon, authenticated;
grant select on table public.software_reviews to anon;
grant select, insert, delete on table public.software_reviews to authenticated;

create policy "Anyone can read approved software reviews"
  on public.software_reviews
  for select
  to anon
  using (status = 'approved');

create policy "Signed-in users can read approved reviews and their own"
  on public.software_reviews
  for select
  to authenticated
  using (status = 'approved' or (select auth.uid()) = user_id);

create policy "Signed-in users can submit pending reviews for themselves"
  on public.software_reviews
  for insert
  to authenticated
  with check (
    (select auth.uid()) = user_id
    and status = 'pending'
  );

create policy "Users can delete only their own pending reviews"
  on public.software_reviews
  for delete
  to authenticated
  using (
    (select auth.uid()) = user_id
    and status = 'pending'
  );

comment on table public.software_reviews is
  'User-submitted StackPick software reviews. Public reads are limited to approved reviews; submissions are pending moderation.';
comment on column public.software_reviews.status is
  'Moderation state. Only trusted database operators should change this field.';
