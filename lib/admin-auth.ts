import { createHash, createHmac, randomBytes, timingSafeEqual } from "crypto";
import { getAdminPassword, getAdminSessionSecret } from "@/config/env";

export const ADMIN_SESSION_COOKIE = "efua_admin_session";

const SESSION_MAX_MS7_DAYS = 7 * 24 * 60 * 60 * 1000;

export function isAdminConfigured(): boolean {
  return Boolean(getAdminPassword());
}

/** Compare password without leaking length via timingSafeEqual on fixed-size digests. */
export function verifyAdminPassword(attempt: string): boolean {
  const expected = getAdminPassword();
  if (!expected || !attempt) {
    return false;
  }
  const a = createHash("sha256").update(attempt, "utf8").digest();
  const b = createHash("sha256").update(expected, "utf8").digest();
  return a.length === b.length && timingSafeEqual(a, b);
}

type SessionPayload = { exp: number; nonce: string };

export function createAdminSessionToken(): string {
  const secret = getAdminSessionSecret();
  if (!secret) {
    throw new Error("Admin session secret not configured");
  }
  const payload: SessionPayload = {
    exp: Date.now() + SESSION_MAX_MS7_DAYS,
    nonce: randomBytes(8).toString("hex"),
  };
  const payloadB64 = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const sig = createHmac("sha256", secret).update(payloadB64).digest("base64url");
  return `${payloadB64}.${sig}`;
}

export function verifyAdminSessionToken(token: string | undefined): boolean {
  if (!token || !token.includes(".")) {
    return false;
  }
  const secret = getAdminSessionSecret();
  if (!secret) {
    return false;
  }
  const dot = token.lastIndexOf(".");
  const payloadB64 = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  const expectedSig = createHmac("sha256", secret).update(payloadB64).digest("base64url");
  if (sig.length !== expectedSig.length) {
    return false;
  }
  try {
    if (!timingSafeEqual(Buffer.from(sig, "utf8"), Buffer.from(expectedSig, "utf8"))) {
      return false;
    }
  } catch {
    return false;
  }
  try {
    const payload = JSON.parse(Buffer.from(payloadB64, "base64url").toString("utf8")) as SessionPayload;
    if (typeof payload.exp !== "number" || Date.now() > payload.exp) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
}
