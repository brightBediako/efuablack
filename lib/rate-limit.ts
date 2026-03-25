import { createHash } from "crypto";
import { connectDB } from "@/lib/db";
import { RateLimitHit } from "@/models/RateLimitHit";

export class RateLimitedError extends Error {
  constructor() {
    super("Too many requests");
    this.name = "RateLimitedError";
  }
}

function hashIp(ip: string): string {
  const salt = process.env.RATE_LIMIT_SALT?.trim() || "efua-rate-limit";
  return createHash("sha256").update(`${salt}:${ip}`, "utf8").digest("hex");
}

/** Sliding window: max `maxRequests` per `windowMs` per route + client. */
export async function consumeRateSlot(
  route: string,
  clientIp: string,
  maxRequests: number,
  windowMs: number,
): Promise<void> {
  await connectDB();
  const ipHash = hashIp(clientIp);
  const since = new Date(Date.now() - windowMs);
  const count = await RateLimitHit.countDocuments({
    route,
    ipHash,
    createdAt: { $gte: since },
  });
  if (count >= maxRequests) {
    throw new RateLimitedError();
  }
  await RateLimitHit.create({ route, ipHash });
}
