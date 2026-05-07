import { ForgotPasswordForm } from "@/components/portal/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen flex-col justify-center px-4 py-10">
      <div className="mx-auto w-full max-w-md rounded-xl border border-member-border bg-member-white p-6 shadow-sm">
        <h1 className="mb-2 font-serif text-2xl font-semibold text-member-primary">Forgot password</h1>
        <p className="mb-6 text-sm text-member-textMuted">We&apos;ll email you a reset link.</p>
        <ForgotPasswordForm />
      </div>
    </div>
  );
}
