import type { ZodError } from "zod";

/** Maps Zod issues to a flat field key → first message (for API JSON). */
export function zodIssuesToFields(error: ZodError): Record<string, string> {
  const out: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = issue.path.length ? issue.path.join(".") : "_form";
    if (!out[key]) out[key] = issue.message;
  }
  return out;
}
