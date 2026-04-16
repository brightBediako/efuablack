import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE, createAdminSessionToken, isAdminConfigured, verifyAdminPassword } from "@/lib/admin-auth";
import { RateLimitedError, consumeRateSlot } from "@/lib/rate-limit";
import { getClientIp } from "@/lib/request-ip";

export async function POST(req: Request) {
  if (!isAdminConfigured()) {
    return NextResponse.json(
      { ok: false, message: "Admin login is not configured. Set ADMIN_PASSWORD on the server." },
      { status: 503 },
    );
  }

  try {
    await consumeRateSlot("/api/admin/login", getClientIp(req), 6, 10 * 60 * 1000);
  } catch (e) {
    if (e instanceof RateLimitedError) {
      return NextResponse.json(
        { ok: false, message: "Too many login attempts. Please try again later." },
        { status: 429 },
      );
    }
    throw e;
  }

  let body: { password?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON." }, { status: 400 });
  }

  if (!verifyAdminPassword(body.password ?? "")) {
    return NextResponse.json({ ok: false, message: "Invalid password." }, { status: 401 });
  }

  let token: string;
  try {
    token = createAdminSessionToken();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Session could not be created. Check ADMIN_SESSION_SECRET or ADMIN_PASSWORD." },
      { status: 500 },
    );
  }

  const jar = await cookies();
  const secure = process.env.NODE_ENV === "production";
  jar.set(ADMIN_SESSION_COOKIE, token, {
    httpOnly: true,
    secure,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return NextResponse.json({ ok: true });
}
