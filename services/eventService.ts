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
  const eventObjectId = new Types.ObjectId(input.eventId);
  const normalizedEmail = input.email.trim().toLowerCase();
  const normalizedPhone = input.phone.trim();

  const event = await Event.findById(eventObjectId).lean();
  if (!event) {
    throw new Error("Event not found.");
  }
  const duplicate = await EventRegistration.findOne({
    eventId: eventObjectId,
    $or: [{ email: normalizedEmail }, { phone: normalizedPhone }],
  })
    .select({ email: 1, phone: 1 })
    .lean();
  if (duplicate) {
    if (duplicate.email === normalizedEmail) {
      throw new Error("Email already registered for this event.");
    }
    throw new Error("Phone already registered for this event.");
  }

  const registration = await EventRegistration.create({
    eventId: eventObjectId,
    name: input.name,
    email: normalizedEmail,
    phone: normalizedPhone,
  });
  return { registration, event };
}

export async function updateEventById(id: string, input: EventCreateInput) {
  await connectDB();
  return Event.findByIdAndUpdate(id, input, { new: true });
}

export async function deleteEventById(id: string) {
  await connectDB();
  await EventRegistration.deleteMany({ eventId: id });
  return Event.findByIdAndDelete(id);
}
