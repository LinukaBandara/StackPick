-- Keep moderator-only notes outside the vendor-readable submission rows.
drop policy if exists "Users submit own pending vendor requests" on public.vendor_submissions;
create policy "Users submit own pending vendor requests"
  on public.vendor_submissions for insert to authenticated
  with check ((select auth.uid()) = user_id and status = 'pending');
alter table public.vendor_submissions drop column if exists moderator_notes;

create table if not exists public.vendor_submission_notes (
  submission_id uuid primary key references public.vendor_submissions(id) on delete cascade,
  moderator_notes text not null default '' check (char_length(moderator_notes) <= 2000),
  updated_at timestamptz not null default now()
);
alter table public.vendor_submission_notes enable row level security;
revoke all on public.vendor_submission_notes from anon, authenticated;
drop policy if exists "Moderators manage vendor submission notes" on public.vendor_submission_notes;
create policy "Moderators manage vendor submission notes"
  on public.vendor_submission_notes for all to authenticated
  using ((select public.is_stackpick_moderator()))
  with check ((select public.is_stackpick_moderator()));
grant select, insert, update on public.vendor_submission_notes to authenticated;

create or replace function public.set_vendor_submission_note_updated_at()
returns trigger language plpgsql set search_path = public, pg_temp as $$
begin
  new.updated_at = now();
  return new;
end;
$$;
revoke all on function public.set_vendor_submission_note_updated_at() from public, anon, authenticated;
drop trigger if exists vendor_submission_note_updated_at on public.vendor_submission_notes;
create trigger vendor_submission_note_updated_at before update on public.vendor_submission_notes
for each row execute function public.set_vendor_submission_note_updated_at();
