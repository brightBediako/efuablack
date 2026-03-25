"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const fieldClass =
  "w-full rounded-lg border border-outline-variant/60 bg-surface px-3 py-2 text-sm text-on-surface focus:border-secondary focus:outline-none";

function getFormString(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

export function AdminCreateMusicForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(formData: FormData) {
    setLoading(true);
    setMessage(null);
    const payload = {
      title: getFormString(formData, "title"),
      description: getFormString(formData, "description"),
      coverPicture: getFormString(formData, "coverPicture"),
      yearRelease: Number(getFormString(formData, "yearRelease") || 0),
      spotify: getFormString(formData, "spotify"),
      appleMusic: getFormString(formData, "appleMusic"),
      youtubeMusic: getFormString(formData, "youtubeMusic"),
    };

    const res = await fetch("/api/admin/music", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const json = (await res.json()) as { ok?: boolean; message?: string };
    if (!res.ok || !json.ok) {
      setMessage(json.message ?? "Could not create music.");
      setLoading(false);
      return;
    }

    setMessage("Music added successfully.");
    setLoading(false);
    router.refresh();
  }

  return (
    <form
      action={onSubmit}
      className="space-y-4 rounded-xl border border-outline-variant/50 bg-surface-container-low p-5"
    >
      <h2 className="font-headline text-xl text-primary">Add Music</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        <input name="title" placeholder="Title" className={fieldClass} required />
        <input name="yearRelease" type="number" placeholder="Year Release" className={fieldClass} required />
      </div>
      <textarea
        name="description"
        placeholder="Description"
        className={`${fieldClass} min-h-28`}
        required
      />
      <input name="coverPicture" placeholder="Cover Picture URL" className={fieldClass} required />
      <div className="grid gap-3 sm:grid-cols-3">
        <input name="spotify" placeholder="Spotify URL" className={fieldClass} />
        <input name="appleMusic" placeholder="Apple Music URL" className={fieldClass} />
        <input name="youtubeMusic" placeholder="YouTube Music URL" className={fieldClass} />
      </div>
      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-on-primary disabled:opacity-50"
        >
          {loading ? "Saving..." : "Add Music"}
        </button>
        {message ? <p className="text-sm text-on-surface-variant">{message}</p> : null}
      </div>
    </form>
  );
}
