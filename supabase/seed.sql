-- Seed: course lessons (YouTube IDs per module)
-- Module 1 is split: intro video first, then main module 1 lesson.

insert into public.lessons (slug, module_number, title, subtitle, youtube_id, content, "order", next_lesson_slug)
values
    (
        'module-1-intro',
        1,
        'Introduction',
        null,
        'LxuF_lO4XC8',
        E'Welcome, and thank you again for buying the Sunlight Dog Portrait Course. You''re about to make something beautiful.\n\nThe person teaching you on video is my friend Alex. He''s a working artist with years of cyanotype experience. Patient, clear, and exactly the kind of teacher you want when you''re learning a hands-on craft. From Module 1, you''ll be learning proper technique from someone who does this professionally.\n\nWatch the short intro below, then hit Next when you''re ready. Alex will take it from there.\n\nBest,\n\nThomas',
        1,
        'module-1-materials'
    ),
    (
        'module-1-materials',
        1,
        'Module 1: Materials & Tools',
        'Everything you''ll need to start your first cyanotype portrait.',
        'vmoR8-z_UII',
        E'## What you''ll need\n\n- Watercolor paper (140 lb cold press)\n- Cyanotype solution (Part A + Part B)\n- A photo of your dog\n- A printer with transparency sheets\n- A glass pane or photo frame\n- A clean workspace away from direct sunlight',
        2,
        'module-2-base'
    ),
    (
        'module-2-base',
        2,
        'Module 2: Preparing Your Photo',
        'Turn any dog photo into a print-ready cyanotype negative.',
        'nKo8e-EyIak',
        E'## Use the free converter tool\n\nGo to [cytcourse.com/tool](https://cytcourse.com/tool) to convert your photo into a print-ready negative in 30 seconds. No software install needed.',
        3,
        'module-3-coating'
    ),
    (
        'module-3-coating',
        3,
        'Module 3: Coating the Paper',
        'Mix the chemistry and coat your paper for a perfect exposure.',
        '2-1YbhzWxmg',
        null,
        4,
        'module-4-exposure'
    ),
    (
        'module-4-exposure',
        4,
        'Module 4: Exposing in Sunlight',
        'Time the exposure right for a rich, deep blue print.',
        'b2zra1T-qWw',
        E'## Exposure times\n\n- Bright sun: 5 to 10 minutes\n- Overcast: 20 to 40 minutes\n\nThe coated paper should turn a dark grey-bronze color when fully exposed.',
        5,
        'module-5-finishing'
    ),
    (
        'module-5-finishing',
        5,
        'Module 5: Washing & Framing',
        'Reveal the final image and frame it like a pro.',
        'aNpL-iqCdxs',
        E'## After washing\n\nLet the print dry flat for at least 24 hours before framing. The blue will deepen as it dries.\n\n## Recommended frames\n\n- 8x10 black wood frame (Amazon link)\n- Floating glass frame for a modern look',
        6,
        null
    );
