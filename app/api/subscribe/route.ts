import { NextResponse } from "next/server";
import { RATE, RECAPTCHA_ACTIONS } from "@/lib/form-api-policy";
import { consumeRateSlot, RateLimitedError } from "@/lib/rate-limit";
import { assertRecaptchaToken, RecaptchaVerificationError } from "@/lib/recaptcha";
import { getClientIp } from "@/lib/request-ip";
import { subscribeApiSchema } from "@/lib/validators";
import { zodIssuesToFields } from "@/lib/zod-api";
import { subscribeOrSkip } from "@/services/subscribeService";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = subscribeApiSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Validation failed.", fields: zodIssuesToFields(parsed.error) },
      { status: 400 },
    );
  }

  const { recaptchaToken, website: _h, ...payload } = parsed.data;

  try {
    await assertRecaptchaToken(recaptchaToken, RECAPTCHA_ACTIONS.subscribe);
    await consumeRateSlot(
      RATE.subscribe.route,
      getClientIp(req),
      RATE.subscribe.max,
      RATE.windowMs,
    );
    const result = await subscribeOrSkip(payload);
    const message =
      result.status === "exists"
        ? "You're already subscribed — thank you for your support."
        : "You're on the list. Check your inbox for a confirmation.";

    return NextResponse.json({ ok: true, alreadySubscribed: result.status === "exists", message }, { status: 200 });
  } catch (e) {
    if (e instanceof RecaptchaVerificationError) {
      return NextResponse.json({ ok: false, message: e.message }, { status: 400 });
    }
    if (e instanceof RateLimitedError) {
      return NextResponse.json(
        { ok: false, message: "Too many requests. Please try again in a few minutes." },
        { status: 429 },
      );
    }
    console.error("[api/subscribe]", e);
    const msg = e instanceof Error ? e.message : "Server error";
    if (msg.includes("MONGODB_URI")) {
      return NextResponse.json({ ok: false, message: "Service unavailable." }, { status: 503 });
    }
    return NextResponse.json({ ok: false, message: "Something went wrong. Please try again later." }, { status: 500 });
  }
}
