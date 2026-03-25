"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecaptcha } from "@/hooks/useRecaptcha";
import { RECAPTCHA_ACTIONS } from "@/lib/form-api-policy";
import { contactSchema, type ContactInput } from "@/lib/validators";

const field =
  "bg-surface-container-lowest border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-secondary transition-colors py-3 px-0 placeholder:text-outline/50 font-body";

type Props = {
  defaultSubject?: string;
};

export function ContactForm({ defaultSubject = "" }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const { getToken } = useRecaptcha();
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: defaultSubject,
      message: "",
      company: "",
    },
  });

  async function onSubmit(data: ContactInput) {
    let recaptchaToken: string | undefined;
    try {
      recaptchaToken = await getToken(RECAPTCHA_ACTIONS.contact);
    } catch {
      setError("root.server", {
        type: "server",
        message: "Security check could not load. Please refresh and try again.",
      });
      return;
    }
    const res = await fetch("/api/contact", {
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
          const k = key as keyof ContactInput;
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
          Thank you for reaching out. We&apos;ve received your message and will reply as soon as we can.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)} noValidate>
      <input type="text" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden {...register("company")} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-widest text-secondary font-bold" htmlFor="contact-name">
            Name
          </label>
          <input id="contact-name" type="text" autoComplete="name" className={field} placeholder="Your name" {...register("name")} />
          {errors.name && <p className="text-error text-sm">{errors.name.message}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase tracking-widest text-secondary font-bold" htmlFor="contact-email">
            Email
          </label>
          <input id="contact-email" type="email" autoComplete="email" className={field} placeholder="you@example.com" {...register("email")} />
          {errors.email && <p className="text-error text-sm">{errors.email.message}</p>}
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-xs uppercase tracking-widest text-secondary font-bold" htmlFor="contact-phone">
            Phone <span className="text-on-surface-variant font-normal">(optional)</span>
          </label>
          <input id="contact-phone" type="tel" autoComplete="tel" className={field} placeholder="+1 (000) 000-0000" {...register("phone")} />
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-xs uppercase tracking-widest text-secondary font-bold" htmlFor="contact-subject">
            Subject
          </label>
          <input id="contact-subject" type="text" className={field} placeholder="How can we help?" {...register("subject")} />
          {errors.subject && <p className="text-error text-sm">{errors.subject.message}</p>}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs uppercase tracking-widest text-secondary font-bold" htmlFor="contact-message">
          Message
        </label>
        <textarea id="contact-message" className={`${field} resize-none min-h-[160px]`} placeholder="Your message..." {...register("message")} />
        {errors.message && <p className="text-error text-sm">{errors.message.message}</p>}
      </div>
      {errors.root?.server && (
        <p className="text-error text-sm" role="alert">
          {errors.root.server.message}
        </p>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto px-12 py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary font-body font-bold uppercase tracking-widest rounded-full hover:shadow-xl transition-all active:scale-95 disabled:opacity-60"
      >
        {isSubmitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
