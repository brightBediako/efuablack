import { Schema, model, models } from "mongoose";

export type EventDoc = {
  title: string;
  description: string;
  coverPicture: string;
  eventDate: string;
  location: string;
  createdAt?: Date;
  updatedAt?: Date;
};

const eventSchema = new Schema<EventDoc>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    coverPicture: { type: String, required: true, trim: true },
    eventDate: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

eventSchema.index({ createdAt: -1 });

export const Event = models.Event ?? model<EventDoc>("Event", eventSchema);
