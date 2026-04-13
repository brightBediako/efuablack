"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  endpoint: string;
  id: string;
  confirmText?: string;
};

export function AdminDeleteButton({ endpoint, id, confirmText = "Delete this record?" }: Props) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onDelete() {
    if (!window.confirm(confirmText)) return;
    setLoading(true);
    const res = await fetch(`${endpoint}?id=${encodeURIComponent(id)}`, { method: "DELETE" });
    setLoading(false);
    if (!res.ok) {
      window.alert("Delete failed.");
      return;
    }
    router.refresh();
  }

  return (
    <button
      type="button"
      disabled={loading}
      onClick={onDelete}
      className="rounded border border-error/40 px-2 py-1 text-xs text-error hover:bg-error-container disabled:opacity-60"
    >
      Delete
    </button>
  );
}
