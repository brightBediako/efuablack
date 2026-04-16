"use client";

import { useState } from "react";

type Props = {
  eventId: string;
  eventTitle: string;
};

type FieldErrors = Partial<Record<"name" | "email" | "phone" | "eventId", string>>;

export function EventRegistrationForm({ eventId, eventTitle }: Props) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setLoading(true);
    setError(null);
    setSuccess(null);
    setFieldErrors({});

    const payload = {
      eventId,
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
    };

    try {
      const res = await fetch("/api/events/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as {
        ok?: boolean;
        message?: string;
        fields?: FieldErrors;
      };

      if (!res.ok || !json.ok) {
        setError(json.message ?? "Could not register for this event.");
        setFieldErrors(json.fields ?? {});
        setLoading(false);
        return;
      }

      form.reset();
      setSuccess(`You're registered for ${eventTitle}.`);
      setLoading(false);
    } catch {
      setError("Something went wrong while submitting your registration.");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-3 rounded-lg border border-outline-variant/40 p-4">
      <p className="font-label text-[11px] uppercase tracking-widest text-on-surface-variant">
        Register for this event
      </p>
      <div className="grid gap-2 sm:grid-cols-3">
        <input
          type="text"
          name="name"
          placeholder="Full name"
          className="rounded-lg border border-outline-variant/60 bg-surface px-3 py-2 text-sm text-on-surface"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="rounded-lg border border-outline-variant/60 bg-surface px-3 py-2 text-sm text-on-surface"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          className="rounded-lg border border-outline-variant/60 bg-surface px-3 py-2 text-sm text-on-surface"
          required
        />
      </div>
      {Object.values(fieldErrors).some(Boolean) ? (
        <p className="text-xs text-error">Please review your details and try again.</p>
      ) : null}
      {error ? <p className="text-xs text-error">{error}</p> : null}
      {success ? <p className="text-xs text-secondary">{success}</p> : null}
      <button
        type="submit"
        disabled={loading}
        className="rounded-lg bg-primary px-5 py-2 text-xs font-bold uppercase tracking-widest text-on-primary disabled:opacity-60"
      >
        {loading ? "Submitting..." : "Register"}
      </button>
    </form>
  );
}
