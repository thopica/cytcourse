-- Cyanotype Course Member Area — schema, RLS, view

create table public.lessons (
    id uuid primary key default gen_random_uuid(),
    slug text not null unique,
    module_number int not null,
    title text not null,
    subtitle text,
    youtube_id text not null,
    content text,
    "order" int not null unique,
    next_lesson_slug text,
    created_at timestamptz not null default now()
);

create index lessons_order_idx on public.lessons("order");

create table public.user_progress (
    id uuid primary key default gen_random_uuid(),
    user_id uuid not null references auth.users(id) on delete cascade,
    lesson_id uuid not null references public.lessons(id) on delete cascade,
    completed_at timestamptz not null default now(),
    unique (user_id, lesson_id)
);

create index user_progress_user_id_idx on public.user_progress(user_id);
create index user_progress_lesson_id_idx on public.user_progress(lesson_id);

alter table public.lessons enable row level security;

create policy "Authenticated users can read lessons"
    on public.lessons
    for select
    to authenticated
    using (true);

alter table public.user_progress enable row level security;

create policy "Users can read their own progress"
    on public.user_progress
    for select
    to authenticated
    using (auth.uid() = user_id);

create policy "Users can insert their own progress"
    on public.user_progress
    for insert
    to authenticated
    with check (auth.uid() = user_id);

create policy "Users can update their own progress"
    on public.user_progress
    for update
    to authenticated
    using (auth.uid() = user_id)
    with check (auth.uid() = user_id);

create policy "Users can delete their own progress"
    on public.user_progress
    for delete
    to authenticated
    using (auth.uid() = user_id);

create or replace view public.lessons_with_progress as
select
    l.id,
    l.slug,
    l.module_number,
    l.title,
    l.subtitle,
    l.youtube_id,
    l.content,
    l."order",
    l.next_lesson_slug,
    l.created_at,
    up.completed_at,
    (up.completed_at is not null) as is_completed
from public.lessons l
left join public.user_progress up
    on up.lesson_id = l.id
   and up.user_id = auth.uid()
order by l."order";

grant select on public.lessons_with_progress to authenticated;
