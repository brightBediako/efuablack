import { NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/admin-api-guard";
import { musicCreateSchema } from "@/lib/content-validators";
import { zodIssuesToFields } from "@/lib/zod-api";
import { createMusic, deleteMusicById, listMusic, updateMusicById } from "@/services/musicService";

export async function GET(req: Request) {
  const unauthorized = await requireAdminApi(req);
  if (unauthorized) return unauthorized;
  const rows = await listMusic();
  return NextResponse.json({ ok: true, data: rows });
}

export async function POST(req: Request) {
  const unauthorized = await requireAdminApi(req);
  if (unauthorized) return unauthorized;

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON body." }, { status: 400 });
  }

  const input = (body ?? {}) as Record<string, unknown>;
  const parsed = musicCreateSchema.safeParse({
    title: input.title,
    description: input.description ?? input.desc,
    coverPicture: input.coverPicture ?? input.cover_picture ?? input.cover,
    yearRelease: input.yearRelease ?? input.year_release ?? input.year,
    spotify: input.spotify,
    appleMusic: input.appleMusic ?? input.apple_music,
    youtubeMusic: input.youtubeMusic ?? input.youtube_music,
  });
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Validation failed.", fields: zodIssuesToFields(parsed.error) },
      { status: 400 },
    );
  }

  const doc = await createMusic(parsed.data);
  return NextResponse.json({ ok: true, data: doc.toObject() }, { status: 201 });
}

export async function PUT(req: Request) {
  const unauthorized = await requireAdminApi(req);
  if (unauthorized) return unauthorized;

  const id = new URL(req.url).searchParams.get("id");
  if (!id) return NextResponse.json({ ok: false, message: "Missing id." }, { status: 400 });

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON body." }, { status: 400 });
  }

  const input = (body ?? {}) as Record<string, unknown>;
  const parsed = musicCreateSchema.safeParse({
    title: input.title,
    description: input.description ?? input.desc,
    coverPicture: input.coverPicture ?? input.cover_picture ?? input.cover,
    yearRelease: input.yearRelease ?? input.year_release ?? input.year,
    spotify: input.spotify,
    appleMusic: input.appleMusic ?? input.apple_music,
    youtubeMusic: input.youtubeMusic ?? input.youtube_music,
  });
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Validation failed.", fields: zodIssuesToFields(parsed.error) },
      { status: 400 },
    );
  }

  const doc = await updateMusicById(id, parsed.data);
  if (!doc) return NextResponse.json({ ok: false, message: "Music record not found." }, { status: 404 });
  return NextResponse.json({ ok: true, data: doc.toObject() });
}

export async function DELETE(req: Request) {
  const unauthorized = await requireAdminApi(req);
  if (unauthorized) return unauthorized;

  const id = new URL(req.url).searchParams.get("id");
  if (!id) return NextResponse.json({ ok: false, message: "Missing id." }, { status: 400 });

  const deleted = await deleteMusicById(id);
  if (!deleted) return NextResponse.json({ ok: false, message: "Music record not found." }, { status: 404 });
  return NextResponse.json({ ok: true });
}
