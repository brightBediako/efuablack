/** Sliding window limits per client IP (see lib/rate-limit.ts). */
export const RATE = {
  windowMs: 15 * 60 * 1000,
  booking: { route: "booking", max: 8 },
  contact: { route: "contact", max: 8 },
  subscribe: { route: "subscribe", max: 20 },
} as const;

export const RECAPTCHA_ACTIONS = {
  booking: "booking",
  contact: "contact",
  subscribe: "subscribe",
} as const;
