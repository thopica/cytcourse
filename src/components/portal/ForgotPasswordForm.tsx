"use client";

import { createClient } from "@/lib/supabase/client";
import { useState } from "react";
import Link from "next/link";

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setMessage(null);
    setLoading(true);
    const supabase = createClient();
    const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/$/, "");
    const redirectTo = siteUrl ? `${siteUrl}/reset-password` : undefined;
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo,
    });
    setLoading(false);
    if (resetError) {
      setError(resetError.message);
      return;
    }
    setMessage("Check your email for a reset link.");
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="forgot-email" className="text-sm font-medium text-member-text">
          Email
        </label>
        <input
          id="forgot-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-h-[44px] rounded-lg border border-member-border bg-member-white px-3 text-member-text outline-none ring-member-primary focus:ring-2"
        />
      </div>
      {error ? (
        <p className="text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}
      {message ? (
        <p className="text-sm text-member-textMuted" role="status">
          {message}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={loading}
        className="min-h-[48px] rounded-lg bg-member-cta px-4 font-semibold text-white transition-colors hover:bg-member-ctaHover disabled:opacity-60"
      >
        {loading ? "Sending…" : "Send reset link"}
      </button>
      <p className="text-center text-sm text-member-textMuted">
        <Link href="/login" className="text-member-primary underline-offset-2 hover:underline">
          Back to login
        </Link>
      </p>
    </form>
  );
}
