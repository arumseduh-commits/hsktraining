-- ==============================================================================
-- HSK TURBO - SUPABASE CLOUD DATABASE SCHEMA
-- Jalankan skrip SQL ini di Supabase Dashboard -> SQL Editor -> New Query -> Run
-- ==============================================================================

-- 1. Buat Tabel Progres Pengguna (hsk_user_progress)
create table if not exists public.hsk_user_progress (
  id uuid references auth.users(id) on delete cascade primary key,
  email text,
  candidate_name text,
  avatar_url text,
  current_level integer default 1,
  word_status jsonb default '{}'::jsonb,
  exam_scores jsonb default '[]'::jsonb,
  official_history jsonb default '[]'::jsonb,
  last_synced_at timestamp with time zone default timezone('utc'::text, now()),
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- 2. Aktifkan Row Level Security (RLS) agar tiap pengguna hanya bisa baca/tulis datanya sendiri
alter table public.hsk_user_progress enable row level security;

-- 3. Kebijakan RLS (Policy) untuk Membaca (SELECT)
drop policy if exists "Users can select own progress" on public.hsk_user_progress;
create policy "Users can select own progress"
  on public.hsk_user_progress
  for select
  using (auth.uid() = id);

-- 4. Kebijakan RLS (Policy) untuk Menambah (INSERT)
drop policy if exists "Users can insert own progress" on public.hsk_user_progress;
create policy "Users can insert own progress"
  on public.hsk_user_progress
  for insert
  with check (auth.uid() = id);

-- 5. Kebijakan RLS (Policy) untuk Mengubah (UPDATE)
drop policy if exists "Users can update own progress" on public.hsk_user_progress;
create policy "Users can update own progress"
  on public.hsk_user_progress
  for update
  using (auth.uid() = id);
