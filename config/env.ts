/** Returns notify inbox for admin alerts (falls back for dev). */
export function getNotifyEmail(): string {
  return process.env.NOTIFY_EMAIL?.trim() || "management@efuablack.com";
}

export function getEmailFrom(): string {
  return process.env.EMAIL_FROM?.trim() || "noreply@efuablack.com";
}

export function getMongoUri(): string | null {
  const uri = process.env.MONGODB_URI?.trim();
  return uri || null;
}

export function isSmtpConfigured(): boolean {
  return Boolean(
    process.env.SMTP_HOST?.trim() &&
      process.env.SMTP_USER?.trim() &&
      process.env.SMTP_PASS?.trim(),
  );
}

export function getSmtpConfig() {
  return {
    host: process.env.SMTP_HOST?.trim() ?? "",
    port: Number(process.env.SMTP_PORT ?? "587"),
    user: process.env.SMTP_USER?.trim() ?? "",
    pass: process.env.SMTP_PASS?.trim() ?? "",
  };
}

/** reCAPTCHA v3 secret; when set, APIs require a valid token. */
export function getRecaptchaSecret(): string | null {
  return process.env.RECAPTCHA_SECRET_KEY?.trim() || null;
}

/** Plaintext admin login password (set in deployment). */
export function getAdminPassword(): string {
  return process.env.ADMIN_PASSWORD?.trim() ?? "";
}

/**
 * HMAC secret for admin session cookie. Prefer a long random string.
 * Falls back to ADMIN_PASSWORD if unset (weaker but simpler for small teams).
 */
export function getAdminSessionSecret(): string {
  return (
    process.env.ADMIN_SESSION_SECRET?.trim() ||
    process.env.ADMIN_PASSWORD?.trim() ||
    ""
  );
}
