import mongoose, { Schema, model, models } from "mongoose";

export type ContactDoc = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt?: Date;
  updatedAt?: Date;
};

const contactSchema = new Schema<ContactDoc>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, trim: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true },
);

contactSchema.index({ createdAt: -1 });
contactSchema.index({ email: 1 });

export const Contact = models.Contact ?? model<ContactDoc>("Contact", contactSchema);
