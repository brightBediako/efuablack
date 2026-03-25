import mongoose, { Schema, model, models } from "mongoose";

export type SubscriberDoc = {
  email: string;
  source?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

const subscriberSchema = new Schema<SubscriberDoc>(
  {
    email: { type: String, required: true, lowercase: true, trim: true, unique: true },
    source: { type: String, trim: true },
  },
  { timestamps: true },
);

export const Subscriber = models.Subscriber ?? model<SubscriberDoc>("Subscriber", subscriberSchema);
