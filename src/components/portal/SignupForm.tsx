"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

type Step = "form" | "check-email";

function authCallbackUrl(siteUrl: string) {
  const base = siteUrl.replace(/\/$/, "");
  return `${base}/auth/callback?next=/lessons`;
}

export function SignupForm() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("form");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [resendMessage, setResendMessage] = useState<string | null>(null);
  const [resendLoading, setResendLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    setLoading(true);
    const supabase = createClient();
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "";
    const trimmedEmail = email.trim();
    const { data, error: signError } = await supabase.auth.signUp({
      email: trimmedEmail,
      password,
      options: {
        emailRedirectTo: siteUrl ? authCallbackUrl(siteUrl) : undefined,
      },
    });
    setLoading(false);
    if (signError) {
      setError(signError.message);
      return;
    }
    if (data.session) {
      router.replace("/lessons");
      router.refresh();
      return;
    }
    setEmail(trimmedEmail);
    setStep("check-email");
  }

  async function onResend() {
    setResendMessage(null);
    setError(null);
    setResendLoading(true);
    const supabase = createClient();
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "";
    const { error: resendError } = await supabase.auth.resend({
      type: "signup",
      email,
      options: {
        emailRedirectTo: siteUrl ? authCallbackUrl(siteUrl) : undefined,
      },
    });
    setResendLoading(false);
    if (resendError) {
      setError(resendError.message);
      return;
    }
    setResendMessage("Confirmation email sent again. Check your inbox.");
  }

  function onStartOver() {
    setStep("form");
    setPassword("");
    setConfirm("");
    setError(null);
    setResendMessage(null);
  }

  if (step === "check-email") {
    return (
      <div className="flex flex-col gap-5" role="status">
        <div className="rounded-lg bg-member-primaryLight px-4 py-3">
          <h2 className="font-serif text-lg font-semibold text-member-primary">
            Check your email to finish signing up
          </h2>
          <p className="mt-2 text-sm text-member-text">
            We sent a confirmation link to{" "}
            <strong className="break-all">{email}</strong>.
          </p>
        </div>

        <ol className="list-decimal space-y-2 pl-5 text-sm text-member-text">
          <li>Open the confirmation email we sent you</li>
          <li>Click the link in that email</li>
          <li>Come back here and log in</li>
        </ol>

        <p className="text-sm text-member-textMuted">
          If you do not see the email within a few minutes, check your spam or promotions folder.
        </p>

        {error ? (
          <p className="text-sm text-red-700" role="alert">
            {error}
          </p>
        ) : null}
        {resendMessage ? (
          <p className="text-sm text-member-text" role="status">
            {resendMessage}
          </p>
        ) : null}

        <Link
          href="/login"
          className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-member-cta px-4 text-center font-semibold text-white transition-colors hover:bg-member-ctaHover"
        >
          Go to log in
        </Link>

        <button
          type="button"
          onClick={() => void onResend()}
          disabled={resendLoading}
          className="min-h-[44px] rounded-lg border border-member-border bg-member-white px-4 text-sm font-medium text-member-text transition-colors hover:bg-member-primaryLight disabled:opacity-60"
        >
          {resendLoading ? "Sending…" : "Resend confirmation email"}
        </button>

        <button
          type="button"
          onClick={onStartOver}
          className="text-sm text-member-primary underline-offset-2 hover:underline"
        >
          Wrong email? Start over
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="signup-email" className="text-sm font-medium text-member-text">
          Email
        </label>
        <input
          id="signup-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-h-[44px] rounded-lg border border-member-border bg-member-white px-3 text-member-text outline-none ring-member-primary focus:ring-2"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="signup-password" className="text-sm font-medium text-member-text">
          Password (min 8 characters)
        </label>
        <input
          id="signup-password"
          name="password"
          type="password"
          autoComplete="new-password"
          required
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="min-h-[44px] rounded-lg border border-member-border bg-member-white px-3 text-member-text outline-none ring-member-primary focus:ring-2"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="signup-confirm" className="text-sm font-medium text-member-text">
          Confirm password
        </label>
        <input
          id="signup-confirm"
          name="confirm"
          type="password"
          autoComplete="new-password"
          required
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          className="min-h-[44px] rounded-lg border border-member-border bg-member-white px-3 text-member-text outline-none ring-member-primary focus:ring-2"
        />
      </div>
      {error ? (
        <p className="text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={loading}
        className="min-h-[48px] rounded-lg bg-member-cta px-4 font-semibold text-white transition-colors hover:bg-member-ctaHover disabled:opacity-60"
      >
        {loading ? "Creating account…" : "Create account"}
      </button>
      <p className="text-center text-sm text-member-textMuted">
        Already have an account?{" "}
        <Link href="/login" className="text-member-primary underline-offset-2 hover:underline">
          Log in
        </Link>
      </p>
    </form>
  );
}
