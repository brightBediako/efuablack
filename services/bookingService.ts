import { connectDB } from "@/lib/db";
import { Booking } from "@/models/Booking";
import type { BookingInput } from "@/lib/validators";
import { notifyBookingToAdmin, sendBookingConfirmationToUser } from "./emailService";

export type BookingPayload = Omit<BookingInput, "website">;

export async function createBooking(input: BookingPayload) {
  await connectDB();

  const doc = await Booking.create({
    name: input.name,
    org: input.org,
    email: input.email,
    phone: input.phone,
    eventType: input.eventType,
    eventDate: input.date,
    location: input.location,
    message: input.message,
  });

  const plain = doc.toObject();
  await Promise.all([notifyBookingToAdmin(plain), sendBookingConfirmationToUser(plain)]);

  return doc;
}
