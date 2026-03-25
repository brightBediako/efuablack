import { z } from "zod";
import { sanitizeLine, sanitizeMultiline } from "@/lib/sanitize";

const urlField = z
  .string()
  .trim()
  .url({ message: "Enter a valid URL." })
  .max(2048)
  .transform(sanitizeLine);

export const musicCreateSchema = z.object({
  title: z.string().trim().min(2).max(180).transform(sanitizeLine),
  description: z.string().trim().min(10).max(4000).transform(sanitizeMultiline),
  coverPicture: urlField,
  yearRelease: z.coerce.number().int().min(1900).max(3000),
  spotify: z.string().trim().max(2048).optional().or(z.literal("")),
  appleMusic: z.string().trim().max(2048).optional().or(z.literal("")),
  youtubeMusic: z.string().trim().max(2048).optional().or(z.literal("")),
});

export const eventCreateSchema = z.object({
  title: z.string().trim().min(2).max(180).transform(sanitizeLine),
  description: z.string().trim().min(10).max(4000).transform(sanitizeMultiline),
  coverPicture: urlField,
  eventDate: z.string().trim().min(2).max(120).transform(sanitizeLine),
  location: z.string().trim().min(2).max(280).transform(sanitizeLine),
});

export const eventRegistrationSchema = z.object({
  eventId: z.string().trim().min(1),
  name: z.string().trim().min(2).max(120).transform(sanitizeLine),
  email: z.string().trim().email({ message: "Enter a valid email." }).max(254).transform(sanitizeLine),
  phone: z.string().trim().min(6).max(40).transform(sanitizeLine),
});

export const mediaCreateSchema = z.object({
  title: z.string().trim().min(2).max(180).transform(sanitizeLine),
  description: z.string().trim().min(10).max(4000).transform(sanitizeMultiline),
  picture: urlField,
});

export type MusicCreateInput = z.infer<typeof musicCreateSchema>;
export type EventCreateInput = z.infer<typeof eventCreateSchema>;
export type EventRegistrationInput = z.infer<typeof eventRegistrationSchema>;
export type MediaCreateInput = z.infer<typeof mediaCreateSchema>;
