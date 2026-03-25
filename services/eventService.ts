import { Types } from "mongoose";
import { connectDB } from "@/lib/db";
import type { EventCreateInput, EventRegistrationInput } from "@/lib/content-validators";
import { Event } from "@/models/Event";
import { EventRegistration } from "@/models/EventRegistration";

export async function createEvent(input: EventCreateInput) {
  await connectDB();
  return Event.create(input);
}

export async function listEvents() {
  await connectDB();
  return Event.find().sort({ createdAt: -1 }).lean();
}

export async function registerForEvent(input: EventRegistrationInput) {
  await connectDB();
  if (!Types.ObjectId.isValid(input.eventId)) {
    throw new Error("Invalid event id.");
  }
  const event = await Event.findById(input.eventId).lean();
  if (!event) {
    throw new Error("Event not found.");
  }
  return EventRegistration.create({
    eventId: new Types.ObjectId(input.eventId),
    name: input.name,
    email: input.email,
    phone: input.phone,
  });
}
