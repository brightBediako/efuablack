"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecaptcha } from "@/hooks/useRecaptcha";
import { RECAPTCHA_ACTIONS } from "@/lib/form-api-policy";
import { subscribeSchema, type SubscribeInput } from "@/lib/validators";

const inputClass =
  "flex-grow bg-surface-container-lowest/10 border-0 border-b-2 border-outline-variant/30 focus:border-secondary focus:ring-0 text-on-primary placeholder:text-on-primary/40 font-body py-4 px-0";

type Variant = "hero" | "section";

type Props = {
  variant?: Variant;
};

export function SubscribeForm({ variant = "hero" }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const { getToken } = useRecaptcha();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SubscribeInput>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: {
      email: "",
      website: "",
      source: variant === "hero" ? "home" : "music",
    },
  });

  async function onSubmit(data: SubscribeInput) {
    let recaptchaToken: string | undefined;
    try {
      recaptchaToken = await getToken(RECAPTCHA_ACTIONS.subscribe);
    } catch {
      setError("root.server", {
        type: "server",
        message: "Security check could not load. Please refresh and try again.",
      });
      return;
    }
    const res = await fetch("/api/subscribe", {
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
          const k = key as keyof SubscribeInput;
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
    setSuccessMessage(
      json.message ??
        (variant === "hero"
          ? "Thank you. You're on the list."
          : "Thank you — you're subscribed."),
    );
    setSubmitted(true);
    reset({ email: "", website: "", source: variant === "hero" ? "home" : "music" });
  }

  if (variant === "section") {
    return (
      <div>
        {submitted ? (
          <p className="font-body text-on-surface-variant" role="status">
            {successMessage}
          </p>
        ) : (
          <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)} noValidate>
            <input type="hidden" {...register("source")} />
            <div className="flex flex-col md:flex-row gap-4">
              <label htmlFor="subscribe-music-email" className="sr-only">
                Email address
              </label>
              <input
                id="subscribe-music-email"
                type="email"
                autoComplete="email"
                placeholder="YOUR EMAIL ADDRESS"
                className="flex-grow bg-surface-container-lowest border-none border-b-2 border-outline-variant focus:border-secondary focus:ring-0 text-sm tracking-widest px-6 py-4 uppercase"
                aria-invalid={!!errors.email}
                {...register("email")}
              />
              <input type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden {...register("website")} />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-on-primary font-label text-xs uppercase tracking-[0.2em] px-10 py-4 hover:bg-primary-container transition-colors disabled:opacity-60"
              >
                {isSubmitting ? "…" : "Subscribe"}
              </button>
            </div>
            {errors.email && <p className="text-error text-sm">{errors.email.message}</p>}
            {errors.root?.server && (
              <p className="text-error text-sm" role="alert">
                {errors.root.server.message}
              </p>
            )}
          </form>
        )}
      </div>
    );
  }

  return (
    <div>
      {submitted ? (
        <p className="font-body text-on-primary/90 text-lg" role="status">
          {successMessage}
        </p>
      ) : (
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)} noValidate>
          <input type="hidden" {...register("source")} />
          <div className="flex flex-col md:flex-row gap-4">
            <label htmlFor="subscribe-email" className="sr-only">
              Email address
            </label>
            <input
              id="subscribe-email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email address"
              className={inputClass}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "subscribe-email-error" : undefined}
              {...register("email")}
            />
            <input type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden {...register("website")} />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-secondary text-on-secondary font-label tracking-widest uppercase px-12 py-4 hover:bg-secondary-fixed transition-colors disabled:opacity-60"
            >
              {isSubmitting ? "…" : "Subscribe"}
            </button>
          </div>
          {errors.email && (
            <p id="subscribe-email-error" className="text-error-container text-sm">
              {errors.email.message}
            </p>
          )}
          {errors.root?.server && (
            <p className="text-error-container text-sm" role="alert">
              {errors.root.server.message}
            </p>
          )}
        </form>
      )}
      <p className="mt-6 text-on-primary/30 text-xs font-label uppercase tracking-widest">
        Privacy is sacred. We never share your details.
      </p>
    </div>
  );
}
