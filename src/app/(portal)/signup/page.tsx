import { SignupForm } from "@/components/portal/SignupForm";

export default function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col justify-center px-4 py-10">
      <div className="mx-auto w-full max-w-md rounded-xl border border-member-border bg-member-white p-6 shadow-sm">
        <h1 className="mb-2 font-serif text-2xl font-semibold text-member-primary">Create account</h1>
        <p className="mb-6 text-sm text-member-textMuted">Use the same email you used at checkout.</p>
        <SignupForm />
      </div>
    </div>
  );
}
