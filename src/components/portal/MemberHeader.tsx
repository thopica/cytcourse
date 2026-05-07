import { createClient } from "@/lib/supabase/server";
import { memberCourseTitle } from "@/lib/member-theme";
import Link from "next/link";
import { LogoutButton } from "@/components/portal/LogoutButton";

export async function MemberHeader() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="flex flex-col gap-3 border-b border-member-border bg-member-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <Link
          href="/lessons"
          className="inline-block min-h-[44px] font-serif text-xl font-semibold text-member-primary sm:text-2xl hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-member-primary"
        >
          {memberCourseTitle}
        </Link>
      </div>
      <div className="flex flex-wrap items-center gap-3 text-sm">
        {user?.email ? (
          <span className="text-member-textMuted" title={user.email}>
            {user.email}
          </span>
        ) : null}
        <Link
          href="/account"
          className="min-h-[44px] inline-flex items-center text-member-primary underline-offset-2 hover:underline"
        >
          Account
        </Link>
        <LogoutButton />
      </div>
    </header>
  );
}
