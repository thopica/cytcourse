import { ResetPasswordForm } from "@/components/portal/ResetPasswordForm";
import { Suspense } from "react";

export default function ResetPasswordPage() {
  return (
    <div className="flex min-h-screen flex-col justify-center px-4 py-10">
      <div className="mx-auto w-full max-w-md rounded-xl border border-member-border bg-member-white p-6 shadow-sm">
        <h1 className="mb-2 font-serif text-2xl font-semibold text-member-primary">Reset password</h1>
        <p className="mb-6 text-sm text-member-textMuted">Choose a new password for your account.</p>
        <Suspense fallback={<p className="text-sm text-member-textMuted">Loading…</p>}>
          <ResetPasswordForm />
        </Suspense>
      </div>
    </div>
  );
}
