import { NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/admin-api-guard";
import { mediaCreateSchema } from "@/lib/content-validators";
import { zodIssuesToFields } from "@/lib/zod-api";
import { createMedia, listMedia } from "@/services/mediaService";

export async function GET() {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;
  const rows = await listMedia();
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
  const parsed = mediaCreateSchema.safeParse({
    title: input.title,
    description: input.description ?? input.desc,
    picture: input.picture ?? input.image ?? input.imageUrl,
  });
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Validation failed.", fields: zodIssuesToFields(parsed.error) },
      { status: 400 },
    );
  }

  const doc = await createMedia(parsed.data);
  return NextResponse.json({ ok: true, data: doc.toObject() }, { status: 201 });
}
