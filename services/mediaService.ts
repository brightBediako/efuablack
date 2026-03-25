import { connectDB } from "@/lib/db";
import type { MediaCreateInput } from "@/lib/content-validators";
import { Media } from "@/models/Media";

export async function createMedia(input: MediaCreateInput) {
  await connectDB();
  return Media.create(input);
}

export async function listMedia() {
  await connectDB();
  return Media.find().sort({ createdAt: -1 }).lean();
}
