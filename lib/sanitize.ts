/** Remove null bytes and zero-width characters; normalize line endings. */
export function sanitizeMultiline(input: string): string {
  return input
    .replace(/\0/g, "")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .trim();
}

/** Single-line fields: collapse internal whitespace. */
export function sanitizeLine(input: string): string {
  return input
    .replace(/\0/g, "")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
