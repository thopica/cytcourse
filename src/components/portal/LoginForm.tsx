"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

function formatLoginError(message: string) {
  const lower = message.toLowerCase();
  if (lower.includes("email not confirmed") || lower.includes("not confirmed")) {
    return "Please confirm your email first — check your inbox for the link we sent when you signed up. Look in spam or promotions if you do not see it.";
  }
  return message;
}

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/lessons";
  const callbackError = searchParams.get("error") === "auth_callback";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const supabase = createClient();
    const { error: signError } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });
    setLoading(false);
    if (signError) {
      setError(formatLoginError(signError.message));
      return;
    }
    router.replace(next.startsWith("/") ? next : "/lessons");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      {callbackError ? (
        <p className="rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-950" role="alert">
          That confirmation link did not work or has expired. Try logging in, or sign up again to get a new email.
        </p>
      ) : null}
      <div className="flex flex-col gap-1">
        <label htmlFor="login-email" className="text-sm font-medium text-member-text">
          Email
        </label>
        <input
          id="login-email"
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
        <label htmlFor="login-password" className="text-sm font-medium text-member-text">
          Password
        </label>
        <input
          id="login-password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="min-h-[44px] rounded-lg border border-member-border bg-member-white px-3 text-member-text outline-none ring-member-primary focus:ring-2"
        />
      </div>
      {error ? (
        <div className="text-sm text-red-700" role="alert">
          <p>{error}</p>
          {error.includes("confirm your email") ? (
            <p className="mt-2">
              Need a new link?{" "}
              <Link href="/signup" className="text-member-primary underline-offset-2 hover:underline">
                Sign up again
              </Link>{" "}
              to resend the confirmation email.
            </p>
          ) : null}
        </div>
      ) : null}
      <button
        type="submit"
        disabled={loading}
        className="min-h-[48px] rounded-lg bg-member-cta px-4 font-semibold text-white transition-colors hover:bg-member-ctaHover disabled:opacity-60"
      >
        {loading ? "Signing in…" : "Log in"}
      </button>
      <p className="text-center text-sm text-member-textMuted">
        <Link href="/forgot-password" className="text-member-primary underline-offset-2 hover:underline">
          Forgot password?
        </Link>
        {" · "}
        <Link href="/signup" className="text-member-primary underline-offset-2 hover:underline">
          Sign up
        </Link>
      </p>
    </form>
  );
}
