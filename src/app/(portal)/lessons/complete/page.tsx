import Link from "next/link";

export default function CourseCompletePage() {
  return (
    <div className="mx-auto max-w-xl rounded-xl border border-member-border bg-member-white p-8 text-center shadow-sm">
      <p className="text-4xl" aria-hidden>
        🎉
      </p>
      <h1 className="mt-4 font-serif text-2xl font-semibold text-member-primary">You completed the course!</h1>
      <p className="mx-auto mt-3 max-w-md text-member-textMuted">
        Amazing work — your prints will only get better from here. Revisit any lesson anytime from your dashboard.
      </p>
      <Link
        href="/lessons"
        className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-xl bg-member-cta px-6 font-semibold text-white transition-colors hover:bg-member-ctaHover"
      >
        Back to lessons
      </Link>
    </div>
  );
}
