import mongoose, { Schema, model, models } from "mongoose";

export type BookingDoc = {
  name: string;
  org: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  location: string;
  message: string;
  createdAt?: Date;
  updatedAt?: Date;
};

const bookingSchema = new Schema<BookingDoc>(
  {
    name: { type: String, required: true },
    org: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, required: true },
    eventType: { type: String, required: true },
    eventDate: { type: String, required: true },
    location: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true },
);

bookingSchema.index({ createdAt: -1 });
bookingSchema.index({ email: 1 });

export const Booking = models.Booking ?? model<BookingDoc>("Booking", bookingSchema);
