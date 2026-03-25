import { NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/admin-api-guard";
import { uploadImageToCloudinary } from "@/lib/cloudinary-upload";

export async function POST(req: Request) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  const formData = await req.formData();

  const folderRaw = formData.get("folder");
  const folder = typeof folderRaw === "string" && folderRaw.trim().length ? folderRaw.trim() : "media";

  const fileLike =
    formData.get("file") ?? formData.get("image") ?? formData.get("upload") ?? formData.get("picture");

  type ArrayBufferCapable = {
    arrayBuffer: () => Promise<ArrayBuffer>;
    name?: string;
    type?: string;
  };

  const entry = fileLike as unknown as ArrayBufferCapable | null;
  if (!entry || typeof entry.arrayBuffer !== "function") {
    return NextResponse.json({ ok: false, message: "Missing image file." }, { status: 400 });
  }

  const buffer = Buffer.from(await entry.arrayBuffer());

  const mimeType = entry.type || "image/*";
  const publicIdBase = (entry.name ?? "").replace(/\.[^/.]+$/, "");

  const result = await uploadImageToCloudinary({
    buffer,
    folder,
    mimeType,
    publicIdBase,
  });

  return NextResponse.json({ ok: true, data: { url: result.url, secureUrl: result.secureUrl, publicId: result.publicId } });
}

