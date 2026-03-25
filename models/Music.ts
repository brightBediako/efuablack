import { Schema, model, models } from "mongoose";

export type MusicDoc = {
  title: string;
  description: string;
  coverPicture: string;
  yearRelease: number;
  spotify?: string;
  appleMusic?: string;
  youtubeMusic?: string;
  slug: string;
  createdAt?: Date;
  updatedAt?: Date;
};

const musicSchema = new Schema<MusicDoc>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    coverPicture: { type: String, required: true, trim: true },
    yearRelease: { type: Number, required: true },
    spotify: { type: String, trim: true },
    appleMusic: { type: String, trim: true },
    youtubeMusic: { type: String, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
  },
  { timestamps: true },
);

musicSchema.index({ createdAt: -1 });
musicSchema.index({ yearRelease: -1 });

export const Music = models.Music ?? model<MusicDoc>("Music", musicSchema);
