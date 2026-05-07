"use client";

import { memberCourseTitle } from "@/lib/member-theme";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type LessonsSidebarItem = {
  id: string;
  slug: string;
  title: string;
  order: number;
  is_completed: boolean;
};

type LessonsSidebarProps = {
  lessons: LessonsSidebarItem[];
  loadError: string | null;
};

export function LessonsSidebar({ lessons, loadError }: LessonsSidebarProps) {
  const pathname = usePathname();
  const sorted = [...lessons].sort((a, b) => a.order - b.order);
  const completedCount = sorted.filter((l) => l.is_completed).length;
  const total = sorted.length;
  const percent = total > 0 ? Math.round((completedCount / total) * 100) : 0;

  if (loadError) {
    return (
      <aside className="w-full shrink-0 md:w-72 md:max-w-[18rem]">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
          <p className="font-medium">Could not load lessons.</p>
          <p className="mt-1 opacity-90">{loadError}</p>
          <p className="mt-2 text-member-textMuted">
            Apply the migration in `supabase/migrations/` and seed data, then set `NEXT_PUBLIC_SUPABASE_*` in `.env.local`.
          </p>
        </div>
      </aside>
    );
  }

  return (
    <aside className="w-full shrink-0 md:sticky md:top-4 md:w-72 md:max-w-[18rem] md:self-start">
      <div className="rounded-xl border border-member-border bg-member-white p-4 shadow-sm">
        <h2 className="font-sans text-base font-bold text-member-text">{memberCourseTitle}</h2>
        <p className="mt-3 text-xs font-medium text-member-textMuted">
          {completedCount} / {total} lessons · {percent}%
        </p>
        <div
          className="mt-2 h-3 w-full overflow-hidden rounded-full bg-member-primaryLight"
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div className="h-full rounded-full bg-member-primary transition-all" style={{ width: `${percent}%` }} />
        </div>

        <nav className="mt-4 border-t border-member-border pt-4" aria-label="Course modules">
          <ul className="flex max-h-[min(50vh,24rem)] flex-col gap-1 overflow-y-auto md:max-h-[calc(100vh-16rem)]">
            {sorted.map((lesson) => {
              const href = `/lessons/${lesson.slug}`;
              const isActive = pathname === href;
              return (
                <li key={lesson.id}>
                  <Link
                    href={href}
                    className={[
                      "flex min-h-[48px] items-start gap-2 rounded-lg px-3 py-2.5 text-sm leading-snug transition-colors",
                      isActive
                        ? "bg-amber-100/90 font-medium text-member-text ring-1 ring-amber-200/80"
                        : "text-member-text hover:bg-member-primaryLight/60",
                    ].join(" ")}
                  >
                    <span className="mt-0.5 shrink-0 text-member-textMuted" aria-hidden>
                      {lesson.is_completed ? "✓" : "○"}
                    </span>
                    <span className="min-w-0 break-words">{lesson.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
