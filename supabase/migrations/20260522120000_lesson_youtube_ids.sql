-- Update YouTube IDs and add Module 1 intro lesson (for existing databases)
-- Reorder from high to low to avoid unique conflicts on lessons."order"

update public.lessons set "order" = 6 where slug = 'module-5-finishing';
update public.lessons set "order" = 5 where slug = 'module-4-exposure';
update public.lessons set "order" = 4 where slug = 'module-3-coating';
update public.lessons set "order" = 3 where slug = 'module-2-base';
update public.lessons set "order" = 2 where slug = 'module-1-materials';

insert into public.lessons (slug, module_number, title, subtitle, youtube_id, content, "order", next_lesson_slug)
values (
    'module-1-intro',
    1,
    'Introduction',
    null,
    'LxuF_lO4XC8',
    E'Welcome, and thank you again for buying the Sunlight Dog Portrait Course. You''re about to make something beautiful.\n\nThe person teaching you on video is my friend Alex. He''s a working artist with years of cyanotype experience. Patient, clear, and exactly the kind of teacher you want when you''re learning a hands-on craft. From Module 1, you''ll be learning proper technique from someone who does this professionally.\n\nWatch the short intro below, then hit Next when you''re ready. Alex will take it from there.\n\nBest,\n\nThomas',
    1,
    'module-1-materials'
)
on conflict (slug) do update set
    youtube_id = excluded.youtube_id,
    title = excluded.title,
    subtitle = excluded.subtitle,
    content = excluded.content,
    module_number = excluded.module_number,
    "order" = excluded."order",
    next_lesson_slug = excluded.next_lesson_slug;

update public.lessons set youtube_id = 'vmoR8-z_UII', next_lesson_slug = 'module-2-base' where slug = 'module-1-materials';
update public.lessons set youtube_id = 'nKo8e-EyIak' where slug = 'module-2-base';
update public.lessons set youtube_id = '2-1YbhzWxmg' where slug = 'module-3-coating';
update public.lessons set youtube_id = 'b2zra1T-qWw' where slug = 'module-4-exposure';
update public.lessons set youtube_id = 'aNpL-iqCdxs', next_lesson_slug = null where slug = 'module-5-finishing';

update public.lessons set next_lesson_slug = 'module-1-materials' where slug = 'module-1-intro';
update public.lessons set next_lesson_slug = 'module-2-base' where slug = 'module-1-materials';
update public.lessons set next_lesson_slug = 'module-3-coating' where slug = 'module-2-base';
update public.lessons set next_lesson_slug = 'module-4-exposure' where slug = 'module-3-coating';
update public.lessons set next_lesson_slug = 'module-5-finishing' where slug = 'module-4-exposure';
