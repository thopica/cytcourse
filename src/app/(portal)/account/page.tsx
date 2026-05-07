import { ChangePasswordForm } from "@/components/portal/ChangePasswordForm";
import { LogoutButton } from "@/components/portal/LogoutButton";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AccountPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.email) {
    redirect("/login");
  }

  return (
    <div>
      <Link
        href="/lessons"
        className="mb-6 inline-flex min-h-[44px] items-center text-sm font-medium text-member-primary underline-offset-2 hover:underline"
      >
        ← All Lessons
      </Link>
      <h1 className="font-serif text-2xl font-semibold text-member-primary">Account</h1>
      <p className="mt-2 text-sm text-member-textMuted">
        Signed in as <span className="font-medium text-member-text">{user.email}</span>
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <LogoutButton />
      </div>
      <ChangePasswordForm email={user.email} />
    </div>
  );
}
