import { Readable } from "stream";
import { v2 as cloudinary } from "cloudinary";
import { getCloudinaryConfig } from "@/config/env";

export type CloudinaryUploadResult = {
  url: string;
  secureUrl: string;
  publicId?: string;
};

let configured = false;
function ensureCloudinaryConfigured() {
  if (configured) return;
  const { cloudName, apiKey, apiSecret } = getCloudinaryConfig();
  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error("Cloudinary is not configured. Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET.");
  }
  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
  });
  configured = true;
}

export async function uploadImageToCloudinary(args: {
  buffer: Buffer;
  folder?: string;
  publicIdBase?: string;
  mimeType?: string;
}): Promise<CloudinaryUploadResult> {
  ensureCloudinaryConfigured();

  const { buffer, folder, publicIdBase, mimeType } = args;

  if (mimeType && !mimeType.startsWith("image/")) {
    throw new Error("Only image uploads are supported.");
  }

  const publicId =
    publicIdBase?.trim() && publicIdBase.trim().length > 0
      ? `${publicIdBase.trim().slice(0, 60)}_${Date.now()}`
      : `upload_${Date.now()}`;

  const uploadResponse = await new Promise<CloudinaryUploadResult>((resolve, reject) => {
    const stream = new Readable();
    stream._read = () => {};
    stream.on("error", reject);

    const s = cloudinary.uploader.upload_stream(
      {
        folder,
        public_id: publicId,
        resource_type: "image",
        overwrite: false,
      },
      (err, result) => {
        if (err) return reject(err);
        if (!result) return reject(new Error("Cloudinary returned empty result."));
        const url = String(result.url ?? "");
        const secureUrl = String(result.secure_url ?? url);
        resolve({ url, secureUrl, publicId: result.public_id });
      },
    );

    s.on("error", reject);

    stream.pipe(s);
    stream.push(buffer);
    stream.push(null);
  });

  return uploadResponse;
}

