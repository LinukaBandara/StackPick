drop policy if exists "Users can read their own StackPick role" on public.stackpick_user_roles;
create policy "Users can read their own StackPick role"
  on public.stackpick_user_roles
  for select
  to authenticated
  using ((select auth.uid()) = user_id);

grant select on public.stackpick_user_roles to authenticated;

create or replace function public.is_stackpick_moderator()
returns boolean
language sql
stable
security invoker
set search_path = public, pg_temp
as $$
  select exists (
    select 1 from public.stackpick_user_roles
    where user_id = (select auth.uid()) and role = 'moderator'
  );
$$;

revoke all on function public.is_stackpick_moderator() from public, anon, authenticated;
grant execute on function public.is_stackpick_moderator() to authenticated;
