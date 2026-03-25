import { NextResponse } from "next/server";
import { RATE, RECAPTCHA_ACTIONS } from "@/lib/form-api-policy";
import { consumeRateSlot } from "@/lib/rate-limit";
import { assertRecaptchaToken } from "@/lib/recaptcha";
import { publicFormErrorResponse } from "@/lib/public-api-error";
import { getClientIp } from "@/lib/request-ip";
import { contactApiSchema } from "@/lib/validators";
import { zodIssuesToFields } from "@/lib/zod-api";
import { createContact } from "@/services/contactService";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = contactApiSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Validation failed.", fields: zodIssuesToFields(parsed.error) },
      { status: 400 },
    );
  }

  const { recaptchaToken, company: _h, ...payload } = parsed.data;

  try {
    await assertRecaptchaToken(recaptchaToken, RECAPTCHA_ACTIONS.contact);
    await consumeRateSlot(
      RATE.contact.route,
      getClientIp(req),
      RATE.contact.max,
      RATE.windowMs,
    );
    await createContact(payload);
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (e) {
    return publicFormErrorResponse(e, "[api/contact]");
  }
}
