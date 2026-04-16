import { NextResponse } from "next/server";
import { eventRegistrationSchema } from "@/lib/content-validators";
import { zodIssuesToFields } from "@/lib/zod-api";
import { notifyEventRegistrationToAdmin, sendEventRegistrationConfirmationToUser } from "@/services/emailService";
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
    const { registration, event } = await registerForEvent(parsed.data);
    const emailJobs = await Promise.allSettled([
      notifyEventRegistrationToAdmin({
        registration,
        eventTitle: event.title,
        eventDate: event.eventDate,
        eventLocation: event.location,
      }),
      sendEventRegistrationConfirmationToUser({
        registration,
        eventTitle: event.title,
        eventDate: event.eventDate,
        eventLocation: event.location,
      }),
    ]);
    const emailStatus = {
      admin: emailJobs[0]?.status === "fulfilled" ? "sent" : "failed",
      attendee: emailJobs[1]?.status === "fulfilled" ? "sent" : "failed",
    } as const;
    for (const result of emailJobs) {
      if (result.status === "rejected") {
        console.error("[api/events/register] email notification failed", {
          error: result.reason instanceof Error ? result.reason.message : "unknown",
        });
      }
    }
    return NextResponse.json(
      {
        ok: true,
        data: registration.toObject(),
        email: emailStatus,
      },
      { status: 201 },
    );
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Unable to register.";
    if (msg === "Email already registered for this event.") {
      return NextResponse.json(
        { ok: false, message: msg, fields: { email: msg } },
        { status: 409 },
      );
    }
    if (msg === "Phone already registered for this event.") {
      return NextResponse.json(
        { ok: false, message: msg, fields: { phone: msg } },
        { status: 409 },
      );
    }
    const status = msg === "Event not found." || msg === "Invalid event id." ? 404 : 500;
    return NextResponse.json({ ok: false, message: msg }, { status });
  }
}
