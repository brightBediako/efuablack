import { getRecaptchaSecret } from "@/config/env";

export class RecaptchaVerificationError extends Error {
  constructor(message = "Verification failed.") {
    super(message);
    this.name = "RecaptchaVerificationError";
  }
}

type SiteverifyResponse = {
  success?: boolean;
  score?: number;
  action?: string;
  "error-codes"?: string[];
};

function minScore(): number {
  const n = Number(process.env.RECAPTCHA_MIN_SCORE ?? "0.5");
  return Number.isFinite(n) ? Math.min(1, Math.max(0, n)) : 0.5;
}

/** When RECAPTCHA_SECRET_KEY is unset, verification is skipped (local dev). */
export function isRecaptchaEnforced(): boolean {
  return Boolean(getRecaptchaSecret());
}

export async function assertRecaptchaToken(token: string | undefined, expectedAction: string): Promise<void> {
  const secret = getRecaptchaSecret();
  if (!secret) {
    return;
  }
  if (!token?.trim()) {
    throw new RecaptchaVerificationError("Security check required. Please refresh and try again.");
  }

  const body = new URLSearchParams({ secret, response: token.trim() });
  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  let data: SiteverifyResponse = {};
  try {
    data = (await res.json()) as SiteverifyResponse;
  } catch {
    throw new RecaptchaVerificationError("Could not verify security check.");
  }

  if (!data.success) {
    console.warn("[recaptcha] siteverify failed:", data["error-codes"]);
    throw new RecaptchaVerificationError("Security check failed. Please try again.");
  }
  if (data.action && data.action !== expectedAction) {
    throw new RecaptchaVerificationError("Security check mismatch.");
  }
  if (typeof data.score === "number" && data.score < minScore()) {
    throw new RecaptchaVerificationError("Request could not be verified. Please try again later.");
  }
}
