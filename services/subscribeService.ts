import { connectDB } from "@/lib/db";
import { Subscriber } from "@/models/Subscriber";
import type { SubscribeInput } from "@/lib/validators";
import { sendSubscriberWelcome } from "./emailService";

export type SubscribePayload = Omit<SubscribeInput, "website">;

export type SubscribeResult =
  | { status: "created"; email: string; source?: string }
  | { status: "exists"; email: string; source?: string };

function isMongoDuplicateKey(err: unknown): boolean {
  return typeof err === "object" && err !== null && "code" in err && (err as { code: number }).code === 11000;
}

export async function subscribeOrSkip(input: SubscribePayload): Promise<SubscribeResult> {
  await connectDB();
  const email = input.email.toLowerCase().trim();
  const source = input.source;

  const existing = await Subscriber.findOne({ email }).lean();
  if (existing) {
    return { status: "exists", email, source };
  }

  try {
    await Subscriber.create({ email, source });
  } catch (e) {
    if (isMongoDuplicateKey(e)) {
      return { status: "exists", email, source };
    }
    throw e;
  }

  await sendSubscriberWelcome(email, source);

  return { status: "created", email, source };
}
