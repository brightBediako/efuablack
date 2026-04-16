"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  id: string;
  endpoint: "/api/admin/music" | "/api/admin/media" | "/api/admin/events";
  current: Record<string, string | number | undefined>;
};

export function AdminRowActions({ id, endpoint, current }: Props) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onDelete() {
    const ok = window.confirm("Delete this item? This action cannot be undone.");
    if (!ok) return;

    setLoading(true);
    const res = await fetch(`${endpoint}?id=${encodeURIComponent(id)}`, { method: "DELETE" });
    setLoading(false);
    if (!res.ok) {
      window.alert("Could not delete this record.");
      return;
    }
    router.refresh();
  }

  async function onEdit() {
    const title = window.prompt("Title", String(current.title ?? ""));
    if (title === null) return;
    const description = window.prompt("Description", String(current.description ?? ""));
    if (description === null) return;

    const payload: Record<string, string | number> = { title, description };
    if (typeof current.coverPicture === "string") {
      const coverPicture = window.prompt("Cover URL", current.coverPicture);
      if (coverPicture === null) return;
      payload.coverPicture = coverPicture;
    }
    if (typeof current.picture === "string") {
      const picture = window.prompt("Picture URL", current.picture);
      if (picture === null) return;
      payload.picture = picture;
    }
    if (typeof current.yearRelease === "number") {
      const yearRaw = window.prompt("Year", String(current.yearRelease));
      if (yearRaw === null) return;
      payload.yearRelease = Number(yearRaw);
      payload.spotify = String(current.spotify ?? "");
      payload.appleMusic = String(current.appleMusic ?? "");
      payload.youtubeMusic = String(current.youtubeMusic ?? "");
    }
    if (typeof current.eventDate === "string") {
      const eventDate = window.prompt("Event date", current.eventDate);
      if (eventDate === null) return;
      payload.eventDate = eventDate;
    }
    if (typeof current.location === "string") {
      const location = window.prompt("Location", current.location);
      if (location === null) return;
      payload.location = location;
    }

    setLoading(true);
    const res = await fetch(`${endpoint}?id=${encodeURIComponent(id)}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setLoading(false);
    if (!res.ok) {
      window.alert("Could not update this record.");
      return;
    }
    router.refresh();
  }

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        disabled={loading}
        onClick={onEdit}
        className="rounded border border-outline-variant px-2 py-1 text-xs text-on-surface-variant hover:bg-surface-container-low"
      >
        Edit
      </button>
      <button
        type="button"
        disabled={loading}
        onClick={onDelete}
        className="rounded border border-error/40 px-2 py-1 text-xs text-error hover:bg-error-container"
      >
        Delete
      </button>
    </div>
  );
}
