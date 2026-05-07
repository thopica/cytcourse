-- Seed: 5 course lessons (replace youtube_id per module for production)
-- Dev default uses a known public YouTube video ID so embeds work locally.

insert into public.lessons (slug, module_number, title, subtitle, youtube_id, content, "order", next_lesson_slug)
values
    (
        'module-1-materials',
        1,
        'Module 1: Materials & Tools',
        'Everything you''ll need to start your first cyanotype portrait.',
        'dQw4w9WgXcQ',
        E'## What you''ll need\n\n- Watercolor paper (140 lb cold press)\n- Cyanotype solution (Part A + Part B)\n- A photo of your dog\n- A printer with transparency sheets\n- A glass pane or photo frame\n- A clean workspace away from direct sunlight\n\n## Where to buy\n\n- [Amazon: Cyanotype kit](https://amazon.com)\n- [Local art supply stores]',
        1,
        'module-2-base'
    ),
    (
        'module-2-base',
        2,
        'Module 2: Preparing Your Photo',
        'Turn any dog photo into a print-ready cyanotype negative.',
        'dQw4w9WgXcQ',
        E'## Use the free converter tool\n\nGo to [cytcourse.com/tool](https://cytcourse.com/tool) to convert your photo into a print-ready negative in 30 seconds. No software install needed.',
        2,
        'module-3-coating'
    ),
    (
        'module-3-coating',
        3,
        'Module 3: Coating the Paper',
        'Mix the chemistry and coat your paper for a perfect exposure.',
        'dQw4w9WgXcQ',
        null,
        3,
        'module-4-exposure'
    ),
    (
        'module-4-exposure',
        4,
        'Module 4: Exposing in Sunlight',
        'Time the exposure right for a rich, deep blue print.',
        'dQw4w9WgXcQ',
        E'## Exposure times\n\n- Bright sun: 5 to 10 minutes\n- Overcast: 20 to 40 minutes\n\nThe coated paper should turn a dark grey-bronze color when fully exposed.',
        4,
        'module-5-finishing'
    ),
    (
        'module-5-finishing',
        5,
        'Module 5: Washing & Framing',
        'Reveal the final image and frame it like a pro.',
        'dQw4w9WgXcQ',
        E'## After washing\n\nLet the print dry flat for at least 24 hours before framing. The blue will deepen as it dries.\n\n## Recommended frames\n\n- 8x10 black wood frame (Amazon link)\n- Floating glass frame for a modern look',
        5,
        null
    );
