import { NextResponse } from "next/server";
import { eventRegistrationSchema } from "@/lib/content-validators";
import { zodIssuesToFields } from "@/lib/zod-api";
import { registerForEvent } from "@/services/eventService";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON body." }, { status: 400 });
  }

  const input = (body ?? {}) as Record<string, unknown>;
  const parsed = eventRegistrationSchema.safeParse({
    eventId: input.eventId ?? input.event_id,
    name: input.name,
    email: input.email,
    phone: input.phone,
  });
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Validation failed.", fields: zodIssuesToFields(parsed.error) },
      { status: 400 },
    );
  }

  try {
    const registration = await registerForEvent(parsed.data);
    return NextResponse.json({ ok: true, data: registration.toObject() }, { status: 201 });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Unable to register.";
    const status = msg === "Event not found." || msg === "Invalid event id." ? 404 : 500;
    return NextResponse.json({ ok: false, message: msg }, { status });
  }
}
