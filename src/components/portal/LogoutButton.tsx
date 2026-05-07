"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onLogout() {
    setLoading(true);
    const supabase = createClient();
    await supabase.auth.signOut();
    router.replace("/login");
    router.refresh();
    setLoading(false);
  }

  return (
    <button
      type="button"
      onClick={onLogout}
      disabled={loading}
      className="min-h-[44px] rounded-lg border border-member-border bg-member-white px-4 text-sm font-medium text-member-text hover:bg-member-primaryLight disabled:opacity-60"
    >
      {loading ? "Signing out…" : "Log out"}
    </button>
  );
}
