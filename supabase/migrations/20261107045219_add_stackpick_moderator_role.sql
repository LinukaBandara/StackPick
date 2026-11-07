create table if not exists public.stackpick_user_roles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  role text not null check (role in ('moderator')),
  created_at timestamptz not null default now()
);

alter table public.stackpick_user_roles enable row level security;
revoke all on public.stackpick_user_roles from anon, authenticated;

create or replace function public.is_stackpick_moderator()
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select exists (
    select 1 from public.stackpick_user_roles
    where user_id = (select auth.uid()) and role = 'moderator'
  );
$$;

revoke all on function public.is_stackpick_moderator() from public, anon, authenticated;
grant execute on function public.is_stackpick_moderator() to authenticated;

create or replace function public.assign_stackpick_moderator_by_email()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  if lower(new.email) = lower('Linukaipad@gmail.com') then
    insert into public.stackpick_user_roles (user_id, role)
    values (new.id, 'moderator')
    on conflict (user_id) do update set role = excluded.role;
  end if;
  return new;
end;
$$;

revoke all on function public.assign_stackpick_moderator_by_email() from public, anon, authenticated;

drop trigger if exists assign_stackpick_moderator_after_signup on auth.users;
create trigger assign_stackpick_moderator_after_signup
  after insert on auth.users
  for each row execute function public.assign_stackpick_moderator_by_email();

drop policy if exists "Moderators can read all software reviews" on public.software_reviews;
create policy "Moderators can read all software reviews"
  on public.software_reviews for select to authenticated
  using ((select public.is_stackpick_moderator()));

drop policy if exists "Moderators can update review moderation status" on public.software_reviews;
create policy "Moderators can update review moderation status"
  on public.software_reviews for update to authenticated
  using ((select public.is_stackpick_moderator()))
  with check ((select public.is_stackpick_moderator()));

grant update (status) on public.software_reviews to authenticated;
