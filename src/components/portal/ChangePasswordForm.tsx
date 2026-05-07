"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function ChangePasswordForm({ email }: { email: string }) {
  const router = useRouter();
  const [current, setCurrent] = useState("");
  const [nextPass, setNextPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setMessage(null);
    if (nextPass.length < 8) {
      setError("New password must be at least 8 characters.");
      return;
    }
    if (nextPass !== confirm) {
      setError("New passwords do not match.");
      return;
    }
    setLoading(true);
    const supabase = createClient();
    const { error: signError } = await supabase.auth.signInWithPassword({
      email,
      password: current,
    });
    if (signError) {
      setError("Current password is incorrect.");
      setLoading(false);
      return;
    }
    const { error: updateError } = await supabase.auth.updateUser({ password: nextPass });
    setLoading(false);
    if (updateError) {
      setError(updateError.message);
      return;
    }
    setMessage("Password updated.");
    setCurrent("");
    setNextPass("");
    setConfirm("");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 flex max-w-md flex-col gap-4 rounded-xl border border-member-border bg-member-white p-6 shadow-sm">
      <h2 className="font-serif text-xl font-semibold text-member-primary">Change password</h2>
      <div className="flex flex-col gap-1">
        <label htmlFor="current-password" className="text-sm font-medium text-member-text">
          Current password
        </label>
        <input
          id="current-password"
          name="current"
          type="password"
          autoComplete="current-password"
          required
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
          className="min-h-[44px] rounded-lg border border-member-border bg-member-white px-3 text-member-text outline-none ring-member-primary focus:ring-2"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="new-password" className="text-sm font-medium text-member-text">
          New password
        </label>
        <input
          id="new-password"
          name="new"
          type="password"
          autoComplete="new-password"
          required
          minLength={8}
          value={nextPass}
          onChange={(e) => setNextPass(e.target.value)}
          className="min-h-[44px] rounded-lg border border-member-border bg-member-white px-3 text-member-text outline-none ring-member-primary focus:ring-2"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="confirm-password" className="text-sm font-medium text-member-text">
          Confirm new password
        </label>
        <input
          id="confirm-password"
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
        {loading ? "Updating…" : "Update password"}
      </button>
    </form>
  );
}
