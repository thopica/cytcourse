"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [exchanging, setExchanging] = useState(true);

  useEffect(() => {
    const code = searchParams.get("code");
    if (!code) {
      setExchanging(false);
      return;
    }
    const supabase = createClient();
    void (async () => {
      const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);
      if (exchangeError) {
        setError(exchangeError.message);
        setExchanging(false);
        return;
      }
      setExchanging(false);
      router.replace("/reset-password");
    })();
  }, [searchParams, router]);

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
    const { error: updateError } = await supabase.auth.updateUser({ password });
    setLoading(false);
    if (updateError) {
      setError(updateError.message);
      return;
    }
    setSuccess(true);
    await supabase.auth.signOut();
    router.replace("/login?reset=success");
  }

  if (exchanging) {
    return (
      <p className="text-center text-member-textMuted" role="status">
        Verifying reset link…
      </p>
    );
  }

  if (success) {
    return (
      <p className="text-center text-member-textMuted" role="status">
        Password updated. Redirecting to log in…
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="reset-password" className="text-sm font-medium text-member-text">
          New password
        </label>
        <input
          id="reset-password"
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
        <label htmlFor="reset-confirm" className="text-sm font-medium text-member-text">
          Confirm new password
        </label>
        <input
          id="reset-confirm"
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
        {loading ? "Saving…" : "Update password"}
      </button>
      <p className="text-center text-sm text-member-textMuted">
        <Link href="/login" className="text-member-primary underline-offset-2 hover:underline">
          Back to login
        </Link>
      </p>
    </form>
  );
}
