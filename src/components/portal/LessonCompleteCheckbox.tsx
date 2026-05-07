"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type LessonCompleteCheckboxProps = {
  lessonId: string;
  initialCompleted: boolean;
};

export function LessonCompleteCheckbox({ lessonId, initialCompleted }: LessonCompleteCheckboxProps) {
  const router = useRouter();
  const [completed, setCompleted] = useState(initialCompleted);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setCompleted(initialCompleted);
  }, [initialCompleted]);

  const tooltipText = completed ? "Unmark" : "Mark done";

  async function toggleComplete() {
    if (loading) return;
    setError(null);
    setLoading(true);
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      setLoading(false);
      router.replace("/login");
      return;
    }

    if (completed) {
      const { error: deleteError } = await supabase
        .from("user_progress")
        .delete()
        .eq("user_id", user.id)
        .eq("lesson_id", lessonId);
      setLoading(false);
      if (deleteError) {
        setError(deleteError.message);
        return;
      }
      setCompleted(false);
    } else {
      const { error: upsertError } = await supabase.from("user_progress").upsert(
        { user_id: user.id, lesson_id: lessonId },
        { onConflict: "user_id,lesson_id" }
      );
      setLoading(false);
      if (upsertError) {
        setError(upsertError.message);
        return;
      }
      setCompleted(true);
    }

    router.refresh();
  }

  return (
    <div className="flex shrink-0 flex-col items-end gap-1">
      <div className="group relative flex flex-col items-end">
        <button
          type="button"
          role="checkbox"
          aria-checked={completed}
          aria-label={tooltipText}
          title={tooltipText}
          disabled={loading}
          onClick={toggleComplete}
          className={[
            "flex h-11 w-11 items-center justify-center rounded-full border-2 transition-colors",
            completed
              ? "border-member-cta bg-member-cta text-white"
              : "border-member-border bg-member-white text-member-textMuted hover:border-member-primary hover:text-member-primary",
            loading ? "cursor-wait opacity-60" : "cursor-pointer",
          ].join(" ")}
        >
          <span className="text-lg font-bold leading-none" aria-hidden>
            ✓
          </span>
        </button>
        <span
          role="tooltip"
          className="pointer-events-none absolute bottom-full right-0 z-10 mb-2 whitespace-nowrap rounded-md bg-member-text px-2 py-1 text-xs font-medium text-white opacity-0 shadow-md transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100"
        >
          {tooltipText}
        </span>
      </div>
      <span className="max-w-[5rem] text-center text-[10px] text-member-textMuted sm:max-w-none sm:text-xs">
        {loading ? "Saving…" : completed ? "Completed" : "Not done"}
      </span>
      {error ? (
        <p className="max-w-[10rem] text-right text-[10px] text-red-700" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
