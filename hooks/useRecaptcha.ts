"use client";

import { useCallback } from "react";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

function loadScript(): Promise<void> {
  if (!SITE_KEY || typeof window === "undefined") {
    return Promise.resolve();
  }
  if (window.grecaptcha?.execute) {
    return Promise.resolve();
  }
  return new Promise((resolve, reject) => {
    const src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(SITE_KEY)}`;
    const existing = document.querySelector(`script[src^="https://www.google.com/recaptcha/api.js"]`);
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("reCAPTCHA load failed")), { once: true });
      return;
    }
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("reCAPTCHA script failed"));
    document.head.appendChild(s);
  });
}

/** reCAPTCHA v3 token; returns undefined when no site key (dev). */
export function useRecaptcha() {
  const getToken = useCallback(async (action: string): Promise<string | undefined> => {
    const siteKey = SITE_KEY;
    if (!siteKey) {
      return undefined;
    }
    await loadScript();
    if (!window.grecaptcha) {
      throw new Error("reCAPTCHA not available");
    }
    return new Promise((resolve, reject) => {
      window.grecaptcha!.ready(() => {
        window
          .grecaptcha!.execute(siteKey, { action })
          .then((token) => resolve(token))
          .catch(reject);
      });
    });
  }, []);

  return { getToken, siteKeyConfigured: Boolean(SITE_KEY) };
}
