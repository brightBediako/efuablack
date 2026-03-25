"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecaptcha } from "@/hooks/useRecaptcha";
import { RECAPTCHA_ACTIONS } from "@/lib/form-api-policy";
import { bookingSchema, type BookingInput } from "@/lib/validators";

const field =
  "bg-surface-container-lowest border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-secondary transition-colors py-3 px-0 placeholder:text-outline/50 font-body";

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const { getToken } = useRecaptcha();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingInput>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      org: "",
      email: "",
      phone: "",
      eventType: "Ministry Service",
      date: "",
      location: "",
      message: "",
      website: "",
    },
  });

  async function onSubmit(data: BookingInput) {
    let recaptchaToken: string | undefined;
    try {
      recaptchaToken = await getToken(RECAPTCHA_ACTIONS.booking);
    } catch {
      setError("root.server", {
        type: "server",
        message: "Security check could not load. Please refresh and try again.",
      });
      return;
    }
    const res = await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, recaptchaToken }),
    });
    let json: { ok?: boolean; message?: string; fields?: Record<string, string> } = {};
    try {
      json = await res.json();
    } catch {
      /* ignore */
    }
    if (!res.ok) {
      if (json.fields) {
        for (const [key, msg] of Object.entries(json.fields)) {
          const k = key as keyof BookingInput;
          if (k in data) {
            setError(k, { type: "server", message: msg });
          }
        }
      }
      setError("root.server", {
        type: "server",
        message: json.message ?? "Something went wrong. Please try again.",
      });
      return;
    }
    setSubmitted(true);
    reset();
  }

  if (submitted) {
    return (
      <div className="rounded-xl bg-surface-container-low p-10 text-center" role="status">
        <p className="font-body text-lg text-primary">
          Thank you for your inquiry. We&apos;ve received your details and will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-10" onSubmit={handleSubmit(onSubmit)} noValidate>
      <input type="text" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden {...register("website")} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-widest text-secondary font-bold" htmlFor="booking-name">
            Name
          </label>
          <input id="booking-name" type="text" autoComplete="name" className={field} placeholder="Full Name" {...register("name")} />
          {errors.name && <p className="text-error text-sm">{errors.name.message}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-widest text-secondary font-bold" htmlFor="booking-org">
            Organization/Church
          </label>
          <input id="booking-org" type="text" className={field} placeholder="Entity Name" {...register("org")} />
          {errors.org && <p className="text-error text-sm">{errors.org.message}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-widest text-secondary font-bold" htmlFor="booking-email">
            Email
          </label>
          <input id="booking-email" type="email" autoComplete="email" className={field} placeholder="email@example.com" {...register("email")} />
          {errors.email && <p className="text-error text-sm">{errors.email.message}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-widest text-secondary font-bold" htmlFor="booking-phone">
            Phone
          </label>
          <input id="booking-phone" type="tel" autoComplete="tel" className={field} placeholder="+1 (000) 000-0000" {...register("phone")} />
          {errors.phone && <p className="text-error text-sm">{errors.phone.message}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-widest text-secondary font-bold" htmlFor="booking-event-type">
            Event Type
          </label>
          <select id="booking-event-type" className={`${field} appearance-none`} {...register("eventType")}>
            <option>Ministry Service</option>
            <option>Concert Performance</option>
            <option>Conference</option>
            <option>Private Event</option>
            <option>Workshop/Masterclass</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-widest text-secondary font-bold" htmlFor="booking-date">
            Event Date
          </label>
          <input id="booking-date" type="date" className={field} {...register("date")} />
          {errors.date && <p className="text-error text-sm">{errors.date.message}</p>}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs uppercase tracking-widest text-secondary font-bold" htmlFor="booking-location">
          Location
        </label>
        <input id="booking-location" type="text" className={field} placeholder="City, State / Venue Name" {...register("location")} />
        {errors.location && <p className="text-error text-sm">{errors.location.message}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs uppercase tracking-widest text-secondary font-bold" htmlFor="booking-message">
          Message &amp; Special Requests
        </label>
        <textarea id="booking-message" className={`${field} resize-none`} rows={4} placeholder="Tell us more about your vision for the event..." {...register("message")} />
        {errors.message && <p className="text-error text-sm">{errors.message.message}</p>}
      </div>
      {errors.root?.server && (
        <p className="text-error text-sm" role="alert">
          {errors.root.server.message}
        </p>
      )}
      <div className="pt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto px-12 py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary font-body font-bold uppercase tracking-widest rounded-full hover:shadow-xl transition-all active:scale-95 disabled:opacity-60"
        >
          {isSubmitting ? "Sending…" : "Submit Inquiry"}
        </button>
      </div>
    </form>
  );
}
