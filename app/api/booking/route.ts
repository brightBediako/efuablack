import { NextResponse } from "next/server";
import { RATE, RECAPTCHA_ACTIONS } from "@/lib/form-api-policy";
import { consumeRateSlot } from "@/lib/rate-limit";
import { assertRecaptchaToken } from "@/lib/recaptcha";
import { publicFormErrorResponse } from "@/lib/public-api-error";
import { getClientIp } from "@/lib/request-ip";
import { bookingApiSchema } from "@/lib/validators";
import { zodIssuesToFields } from "@/lib/zod-api";
import { createBooking } from "@/services/bookingService";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = bookingApiSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Validation failed.", fields: zodIssuesToFields(parsed.error) },
      { status: 400 },
    );
  }

  const { recaptchaToken, website: _h, ...payload } = parsed.data;

  try {
    await assertRecaptchaToken(recaptchaToken, RECAPTCHA_ACTIONS.booking);
    await consumeRateSlot(
      RATE.booking.route,
      getClientIp(req),
      RATE.booking.max,
      RATE.windowMs,
    );
    await createBooking(payload);
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (e) {
    return publicFormErrorResponse(e, "[api/booking]");
  }
}
