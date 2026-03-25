"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { FormEvent } from "react";

const fieldClass =
  "w-full rounded-lg border border-outline-variant/60 bg-surface px-3 py-2 text-sm text-on-surface focus:border-secondary focus:outline-none";

function getFormString(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

async function uploadPictureToCloudinary(file: File): Promise<string> {
  const fd = new FormData();
  fd.append("file", file);
  fd.append("folder", "media");

  const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
  const json = (await res.json()) as { ok?: boolean; message?: string; data?: { secureUrl?: string; url?: string } };

  if (!res.ok || !json.ok) {
    throw new Error(json.message ?? "Upload failed.");
  }

  const secureUrl = json.data?.secureUrl;
  const url = json.data?.url;
  if (!secureUrl && !url) throw new Error("Upload returned no URL.");
  return (secureUrl ?? url)!;
}

export function AdminCreateMediaForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    setLoading(true);
    setMessage(null);

    const pictureFile = formData.get("pictureFile");
    if (!(pictureFile instanceof File) || pictureFile.size === 0) {
      setMessage("Please select a picture.");
      setLoading(false);
      return;
    }

    let picture: string;
    try {
      picture = await uploadPictureToCloudinary(pictureFile);
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Upload failed.");
      setLoading(false);
      return;
    }

    const payload = {
      title: getFormString(formData, "title"),
      description: getFormString(formData, "description"),
      picture,
    };

    const res = await fetch("/api/admin/media", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const json = (await res.json()) as { ok?: boolean; message?: string };
    if (!res.ok || !json.ok) {
      setMessage(json.message ?? "Could not create media item.");
      setLoading(false);
      return;
    }

    setMessage("Media item added successfully.");
    setLoading(false);
    router.refresh();
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-xl border border-outline-variant/50 bg-surface-container-low p-5"
    >
      <h2 className="font-headline text-xl text-primary">Add Media</h2>
      <input name="title" placeholder="Title" className={fieldClass} required />
      <textarea
        name="description"
        placeholder="Description"
        className={`${fieldClass} min-h-28`}
        required
      />
      <input name="pictureFile" type="file" accept="image/*" className={fieldClass} required />
      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-on-primary disabled:opacity-50"
        >
          {loading ? "Saving..." : "Add Media"}
        </button>
        {message ? <p className="text-sm text-on-surface-variant">{message}</p> : null}
      </div>
    </form>
  );
}
