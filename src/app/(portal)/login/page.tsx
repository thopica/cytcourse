import { LoginForm } from "@/components/portal/LoginForm";
import { Suspense } from "react";

export default function LoginPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const reset = typeof searchParams.reset === "string" ? searchParams.reset : undefined;

  return (
    <div className="flex min-h-screen flex-col justify-center px-4 py-10">
      <div className="mx-auto w-full max-w-md rounded-xl border border-member-border bg-member-white p-6 shadow-sm">
        <h1 className="mb-2 font-serif text-2xl font-semibold text-member-primary">Log in</h1>
        <p className="mb-6 text-sm text-member-textMuted">Member area for course videos and progress.</p>
        {reset === "success" ? (
          <p className="mb-4 rounded-lg bg-member-primaryLight px-3 py-2 text-sm text-member-text" role="status">
            Password updated. You can log in with your new password.
          </p>
        ) : null}
        <Suspense fallback={<p className="text-sm text-member-textMuted">Loading form…</p>}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
