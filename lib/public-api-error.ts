import { NextResponse } from "next/server";
import { MongoNotConfiguredError } from "@/lib/db";
import { RateLimitedError } from "@/lib/rate-limit";
import { RecaptchaVerificationError } from "@/lib/recaptcha";

/** Map caught errors from public form API routes to HTTP responses. */
export function publicFormErrorResponse(e: unknown, logLabel: string): NextResponse {
  if (e instanceof RecaptchaVerificationError) {
    return NextResponse.json({ ok: false, message: e.message }, { status: 400 });
  }
  if (e instanceof RateLimitedError) {
    return NextResponse.json(
      { ok: false, message: "Too many requests. Please try again in a few minutes." },
      { status: 429 },
    );
  }
  if (e instanceof MongoNotConfiguredError) {
    return NextResponse.json(
      {
        ok: false,
        code: "MONGO_NOT_CONFIGURED",
        message:
          "We can't accept submissions from the site right now. Please use the email or phone on this page to reach us.",
      },
      { status: 503 },
    );
  }

  console.error(logLabel, e);
  const msg = e instanceof Error ? e.message : "Server error";
  if (msg.includes("MONGODB_URI")) {
    return NextResponse.json(
      {
        ok: false,
        code: "MONGO_NOT_CONFIGURED",
        message:
          "We can't accept submissions from the site right now. Please use the email or phone on this page to reach us.",
      },
      { status: 503 },
    );
  }

  return NextResponse.json(
    { ok: false, message: "Something went wrong. Please try again later." },
    { status: 500 },
  );
}
