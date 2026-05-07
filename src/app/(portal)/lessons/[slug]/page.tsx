import { LessonCompleteCheckbox } from "@/components/portal/LessonCompleteCheckbox";
import { LessonNextActions } from "@/components/portal/LessonNextActions";
import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type LessonWithProgressRow = {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  youtube_id: string;
  content: string | null;
  next_lesson_slug: string | null;
  is_completed: boolean;
};

export default async function LessonPage({ params }: { params: { slug: string } }) {
  const supabase = createClient();
  const { data: row, error } = await supabase.from("lessons_with_progress").select("*").eq("slug", params.slug).single();

  if (error || !row) {
    notFound();
  }

  const lesson = row as LessonWithProgressRow;
  const embed = `https://www.youtube.com/embed/${lesson.youtube_id}?rel=0`;

  return (
    <article className="rounded-xl border border-member-border bg-member-white p-4 shadow-sm sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="min-w-0 flex-1">
          <h1 className="font-serif text-2xl font-semibold text-member-primary sm:text-3xl">{lesson.title}</h1>
          {lesson.subtitle ? <p className="mt-2 text-lg text-member-textMuted">{lesson.subtitle}</p> : null}
        </div>
        <LessonCompleteCheckbox lessonId={lesson.id} initialCompleted={lesson.is_completed} />
      </div>

      <div className="mt-6 aspect-video w-full overflow-hidden rounded-xl bg-member-text/10 shadow-sm">
        <iframe
          title={lesson.title}
          src={embed}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      <LessonNextActions
        lessonId={lesson.id}
        nextLessonSlug={lesson.next_lesson_slug}
        isLast={!lesson.next_lesson_slug}
      />

      {lesson.content ? (
        <div className="lesson-markdown mt-10 space-y-4 border-t border-member-border pt-8 text-member-text [&_a]:break-words [&_a]:text-member-primary [&_a]:underline [&_h2]:mt-6 [&_h2]:font-serif [&_h2]:text-xl [&_li]:mt-1 [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:pl-6">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{lesson.content}</ReactMarkdown>
        </div>
      ) : null}
    </article>
  );
}
