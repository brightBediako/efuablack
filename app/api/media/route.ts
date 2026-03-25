import { NextResponse } from "next/server";
import { listMedia } from "@/services/mediaService";

export async function GET() {
  const rows = await listMedia();
  return NextResponse.json({ ok: true, data: rows });
}
