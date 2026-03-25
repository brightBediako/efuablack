import { Schema, model, models } from "mongoose";

export type MediaDoc = {
  title: string;
  description: string;
  picture: string;
  createdAt?: Date;
  updatedAt?: Date;
};

const mediaSchema = new Schema<MediaDoc>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    picture: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

mediaSchema.index({ createdAt: -1 });

export const Media = models.Media ?? model<MediaDoc>("Media", mediaSchema);
