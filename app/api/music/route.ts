import { NextResponse } from "next/server";
import { listMusic } from "@/services/musicService";

export async function GET() {
  const rows = await listMusic();
  return NextResponse.json({ ok: true, data: rows });
}
