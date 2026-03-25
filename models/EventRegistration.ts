import { Schema, Types, model, models } from "mongoose";

export type EventRegistrationDoc = {
  eventId: Types.ObjectId;
  name: string;
  email: string;
  phone: string;
  createdAt?: Date;
  updatedAt?: Date;
};

const eventRegistrationSchema = new Schema<EventRegistrationDoc>(
  {
    eventId: { type: Schema.Types.ObjectId, ref: "Event", required: true, index: true },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

eventRegistrationSchema.index({ eventId: 1, createdAt: -1 });
eventRegistrationSchema.index({ email: 1 });

export const EventRegistration =
  models.EventRegistration ?? model<EventRegistrationDoc>("EventRegistration", eventRegistrationSchema);
