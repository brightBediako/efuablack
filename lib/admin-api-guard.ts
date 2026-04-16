import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE, verifyAdminSessionToken } from "@/lib/admin-auth";
import { getClientIp } from "@/lib/request-ip";

/** Returns a 401 response when the request is not from an authenticated admin session. */
export async function requireAdminApi(req?: Request): Promise<NextResponse | null> {
  const jar = await cookies();
  const token = jar.get(ADMIN_SESSION_COOKIE)?.value;
  if (!verifyAdminSessionToken(token)) {
    if (req) {
      console.warn("[admin-api] unauthorized", {
        path: new URL(req.url).pathname,
        ip: getClientIp(req),
      });
    }
    return NextResponse.json({ ok: false, message: "Unauthorized." }, { status: 401 });
  }
  if (req) {
    console.info("[admin-api] authorized", {
      path: new URL(req.url).pathname,
      ip: getClientIp(req),
    });
  }
  return null;
}
