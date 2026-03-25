"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { FormEvent } from "react";
import { MaterialSymbol } from "@/components/MaterialSymbol";

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
      className="space-y-6 rounded-2xl border border-outline-variant/60 bg-surface-container-lowest/70 p-6 shadow-sm backdrop-blur"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary/20 text-secondary ring-1 ring-secondary/30">
            <MaterialSymbol name="photo_library" className="text-2xl" filled />
          </span>
          <div>
            <h2 className="font-headline text-xl text-primary">Add Media</h2>
            <p className="mt-1 text-sm font-body text-on-surface-variant">Upload a picture and a short description.</p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="media-title" className="text-xs font-label font-semibold uppercase tracking-widest text-secondary">
          Title
        </label>
        <input id="media-title" name="title" placeholder="Title" className={fieldClass} required />
      </div>

      <div className="space-y-2">
        <label htmlFor="media-description" className="text-xs font-label font-semibold uppercase tracking-widest text-secondary">
          Description
        </label>
        <textarea
          id="media-description"
          name="description"
          placeholder="Description"
          className={`${fieldClass} min-h-28`}
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="media-pictureFile" className="text-xs font-label font-semibold uppercase tracking-widest text-secondary">
          Picture
        </label>
        <input
          id="media-pictureFile"
          name="pictureFile"
          type="file"
          accept="image/*"
          className={`${fieldClass} file:cursor-pointer file:border-0 file:bg-secondary/20 file:py-2 file:text-sm file:font-semibold file:text-secondary file:hover:bg-secondary/25`}
          required
        />
        <p className="text-xs font-body text-on-surface-variant">Images only. Stored in Cloudinary.</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-gradient-to-r from-primary to-primary-container px-4 py-2 text-sm font-semibold text-on-primary shadow-sm transition-opacity hover:opacity-95 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-secondary/70"
        >
          {loading ? "Saving..." : "Add Media"}
        </button>
        {message ? <p className="text-sm text-on-surface-variant">{message}</p> : null}
      </div>
    </form>
  );
}
