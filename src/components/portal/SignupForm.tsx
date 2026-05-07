"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export function SignupForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

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
    const { error: signError } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        emailRedirectTo: siteUrl ? `${siteUrl.replace(/\/$/, "")}/lessons` : undefined,
      },
    });
    setLoading(false);
    if (signError) {
      setError(signError.message);
      return;
    }
    router.replace("/lessons");
    router.refresh();
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
