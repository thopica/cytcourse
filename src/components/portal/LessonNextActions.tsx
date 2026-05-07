"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

type LessonNextActionsProps = {
  lessonId: string;
  nextLessonSlug: string | null;
  isLast: boolean;
};

export function LessonNextActions({ lessonId, nextLessonSlug, isLast }: LessonNextActionsProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onContinue() {
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
    const { error: upsertError } = await supabase.from("user_progress").upsert(
      { user_id: user.id, lesson_id: lessonId },
      { onConflict: "user_id,lesson_id" }
    );
    if (upsertError) {
      setError(upsertError.message);
      setLoading(false);
      return;
    }
    if (nextLessonSlug) {
      router.push(`/lessons/${nextLessonSlug}`);
    } else {
      router.push("/lessons/complete");
    }
    router.refresh();
    setLoading(false);
  }

  return (
    <div className="mt-6 flex flex-col items-stretch">
      {error ? (
        <p className="mb-2 text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="button"
        onClick={onContinue}
        disabled={loading}
        className="mx-auto w-full min-h-[52px] max-w-md rounded-xl bg-member-cta px-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-member-ctaHover disabled:opacity-60 sm:max-w-[400px]"
      >
        {loading ? "Saving…" : isLast ? "Mark as Complete ✓" : "Next Lesson →"}
      </button>
    </div>
  );
}
