import { LessonsSidebar, type LessonsSidebarItem } from "@/components/portal/LessonsSidebar";
import { MemberHeader } from "@/components/portal/MemberHeader";
import { createClient } from "@/lib/supabase/server";

export default async function LessonsLayout({ children }: { children: React.ReactNode }) {
  const supabase = createClient();
  const { data: rows, error } = await supabase.from("lessons_with_progress").select("id, slug, title, order, is_completed");

  const lessons: LessonsSidebarItem[] = (rows ?? []).map((r) => ({
    id: r.id as string,
    slug: r.slug as string,
    title: r.title as string,
    order: r.order as number,
    is_completed: Boolean(r.is_completed),
  }));

  return (
    <>
      <MemberHeader />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6 pb-16 md:flex-row md:items-start md:gap-8">
        <LessonsSidebar lessons={lessons} loadError={error?.message ?? null} />
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </>
  );
}
