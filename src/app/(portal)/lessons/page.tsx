import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

type LessonWithProgress = {
  id: string;
  slug: string;
  title: string;
  order: number;
  is_completed: boolean;
};

export default async function LessonsDashboardPage() {
  const supabase = createClient();
  const { data: rows, error } = await supabase.from("lessons_with_progress").select("id, slug, title, order, is_completed");

  if (error) {
    return (
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-950">
        <p className="font-medium">Could not load your course.</p>
        <p className="mt-1 opacity-90">{error.message}</p>
        <p className="mt-2 text-member-textMuted">
          Check the sidebar message and your Supabase env vars.
        </p>
      </div>
    );
  }

  const lessons = (rows ?? []) as LessonWithProgress[];
  const sorted = [...lessons].sort((a, b) => a.order - b.order);
  const firstIncomplete = sorted.find((l) => !l.is_completed);
  const firstLesson = sorted[0];
  const allComplete = sorted.length > 0 && sorted.every((l) => l.is_completed);

  return (
    <div className="rounded-xl border border-member-border bg-member-white p-6 shadow-sm sm:p-8">
      <h1 className="font-serif text-2xl font-semibold text-member-primary">Welcome back</h1>
      <p className="mt-3 text-member-textMuted">
        Pick up where you left off. Your modules and progress are on the left.
      </p>

      {allComplete ? (
        <div className="mt-8">
          <p className="font-medium text-member-text">You&apos;ve completed every lesson.</p>
          <Link
            href="/lessons/complete"
            className="mt-4 inline-flex min-h-[48px] items-center justify-center rounded-xl bg-member-cta px-6 font-semibold text-white transition-colors hover:bg-member-ctaHover"
          >
            View completion screen
          </Link>
        </div>
      ) : firstIncomplete ? (
        <Link
          href={`/lessons/${firstIncomplete.slug}`}
          className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-xl bg-member-cta px-6 font-semibold text-white transition-colors hover:bg-member-ctaHover"
        >
          Continue: {firstIncomplete.title}
        </Link>
      ) : firstLesson ? (
        <Link
          href={`/lessons/${firstLesson.slug}`}
          className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-xl bg-member-cta px-6 font-semibold text-white transition-colors hover:bg-member-ctaHover"
        >
          Start: {firstLesson.title}
        </Link>
      ) : (
        <p className="mt-6 text-sm text-member-textMuted">No lessons in the database yet.</p>
      )}
    </div>
  );
}
