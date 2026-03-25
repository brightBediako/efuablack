import { NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/admin-api-guard";
import { eventCreateSchema } from "@/lib/content-validators";
import { zodIssuesToFields } from "@/lib/zod-api";
import { createEvent, listEvents } from "@/services/eventService";

export async function GET() {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;
  const rows = await listEvents();
  return NextResponse.json({ ok: true, data: rows });
}

export async function POST(req: Request) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON body." }, { status: 400 });
  }

  const input = (body ?? {}) as Record<string, unknown>;
  const parsed = eventCreateSchema.safeParse({
    title: input.title,
    description: input.description ?? input.desc,
    coverPicture: input.coverPicture ?? input.cover_picture ?? input.cover,
    eventDate: input.eventDate ?? input.date,
    location: input.location,
  });
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Validation failed.", fields: zodIssuesToFields(parsed.error) },
      { status: 400 },
    );
  }

  const doc = await createEvent(parsed.data);
  return NextResponse.json({ ok: true, data: doc.toObject() }, { status: 201 });
}
