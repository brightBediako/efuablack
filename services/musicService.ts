import { connectDB } from "@/lib/db";
import type { MusicCreateInput } from "@/lib/content-validators";
import { Music } from "@/models/Music";

function toSlug(input: string): string {
  return input
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/^-+|-+$/g, "")
    .slice(0, 80);
}

export async function createMusic(input: MusicCreateInput) {
  await connectDB();
  const base = toSlug(input.title) || "track";
  let slug = base;
  let i = 2;
  while (await Music.exists({ slug })) {
    slug = `${base}-${i}`;
    i += 1;
  }

  return Music.create({
    ...input,
    slug,
    spotify: input.spotify?.trim() || undefined,
    appleMusic: input.appleMusic?.trim() || undefined,
    youtubeMusic: input.youtubeMusic?.trim() || undefined,
  });
}

export async function listMusic() {
  await connectDB();
  return Music.find().sort({ yearRelease: -1, createdAt: -1 }).lean();
}
