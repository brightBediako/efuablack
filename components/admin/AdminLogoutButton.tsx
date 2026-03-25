"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = { className?: string };

export function AdminLogoutButton({ className }: Props) {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function logout() {
    setPending(true);
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } finally {
      setPending(false);
    }
  }

  return (
    <button
      type="button"
      onClick={logout}
      disabled={pending}
      className={
        className ??
        "rounded-lg px-3 py-2 text-left text-sm text-on-primary/80 hover:bg-white/10 hover:text-on-primary disabled:opacity-60"
      }
    >
      {pending ? "Signing out…" : "Sign out"}
    </button>
  );
}
