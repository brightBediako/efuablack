"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const fieldClass =
  "w-full rounded-lg border border-outline-variant/60 bg-surface px-3 py-2 text-sm text-on-surface focus:border-secondary focus:outline-none";

function getFormString(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

export function AdminCreateEventForm() {
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
      eventDate: getFormString(formData, "eventDate"),
      location: getFormString(formData, "location"),
    };

    const res = await fetch("/api/admin/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const json = (await res.json()) as { ok?: boolean; message?: string };
    if (!res.ok || !json.ok) {
      setMessage(json.message ?? "Could not create event.");
      setLoading(false);
      return;
    }

    setMessage("Event added successfully.");
    setLoading(false);
    router.refresh();
  }

  return (
    <form
      action={onSubmit}
      className="space-y-4 rounded-xl border border-outline-variant/50 bg-surface-container-low p-5"
    >
      <h2 className="font-headline text-xl text-primary">Add Event</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        <input name="title" placeholder="Title" className={fieldClass} required />
        <input name="eventDate" placeholder="Event Date" className={fieldClass} required />
      </div>
      <input name="location" placeholder="Location" className={fieldClass} required />
      <textarea
        name="description"
        placeholder="Description"
        className={`${fieldClass} min-h-28`}
        required
      />
      <input name="coverPicture" placeholder="Cover Picture URL" className={fieldClass} required />
      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-on-primary disabled:opacity-50"
        >
          {loading ? "Saving..." : "Add Event"}
        </button>
        {message ? <p className="text-sm text-on-surface-variant">{message}</p> : null}
      </div>
    </form>
  );
}
