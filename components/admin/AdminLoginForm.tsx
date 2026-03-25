"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function AdminLoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setPending(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; message?: string };
      if (!res.ok) {
        setError(data.message ?? "Could not sign in.");
        setPending(false);
        return;
      }
      router.push("/admin");
      router.refresh();
    } catch {
      setError("Network error. Try again.");
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-sm space-y-6 rounded-xl border border-outline-variant/60 bg-surface-container-low p-8 shadow-sm">
      <div>
        <h1 className="font-headline text-2xl text-primary">Admin sign in</h1>
        <p className="mt-1 font-body text-sm text-on-surface-variant">Enter the site admin password.</p>
      </div>
      <div className="space-y-2">
        <label htmlFor="admin-password" className="text-xs font-label font-semibold uppercase tracking-widest text-secondary">
          Password
        </label>
        <input
          id="admin-password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border-0 border-b-2 border-outline-variant bg-transparent py-3 font-body outline-none transition-colors focus:border-secondary"
          disabled={pending}
          required
        />
      </div>
      {error && (
        <p className="text-sm text-error" role="alert">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-primary px-6 py-3 font-label text-sm font-bold uppercase tracking-widest text-on-primary transition-opacity hover:opacity-95 disabled:opacity-60"
      >
        {pending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
