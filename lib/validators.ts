import { z } from "zod";
import { sanitizeLine, sanitizeMultiline } from "@/lib/sanitize";

export const subscribeSchema = z
  .object({
    email: z.string().trim().email("Enter a valid email address.").max(254),
    website: z.string().optional(),
    source: z.enum(["home", "music"]).optional(),
  })
  .refine((d) => !d.website?.length, { path: ["website"], message: "" });

export const subscribeApiSchema = subscribeSchema.extend({
  recaptchaToken: z.string().optional(),
});

export const bookingSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "Name is required.")
      .max(120)
      .transform(sanitizeLine),
    org: z.string().trim().min(1, "Organization is required.").max(200).transform(sanitizeLine),
    email: z.string().trim().email("Enter a valid email.").max(254).transform(sanitizeLine),
    phone: z.string().trim().min(6, "Phone number is required.").max(40).transform(sanitizeLine),
    eventType: z.string().min(1).max(80).transform(sanitizeLine),
    date: z.string().min(1, "Choose a date.").max(32).transform(sanitizeLine),
    location: z.string().trim().min(2, "Location is required.").max(300).transform(sanitizeLine),
    message: z
      .string()
      .trim()
      .min(10, "Please share a few more details.")
      .max(8000)
      .transform(sanitizeMultiline),
    website: z.string().optional(),
  })
  .refine((d) => !d.website?.length, { path: ["website"], message: "" });

export const bookingApiSchema = bookingSchema.extend({
  recaptchaToken: z.string().optional(),
});

export const contactSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "Name is required.")
      .max(120)
      .transform(sanitizeLine),
    email: z.string().trim().email("Enter a valid email.").max(254).transform(sanitizeLine),
    phone: z.string().trim().max(40).transform((s) => sanitizeLine(s)),
    subject: z.string().trim().min(2, "Subject is required.").max(200).transform(sanitizeLine),
    message: z
      .string()
      .trim()
      .min(10, "Please write a message.")
      .max(8000)
      .transform(sanitizeMultiline),
    company: z.string().optional(),
  })
  .refine((d) => !d.company?.length, { path: ["company"], message: "" });

export const contactApiSchema = contactSchema.extend({
  recaptchaToken: z.string().optional(),
});

export type SubscribeInput = z.infer<typeof subscribeSchema>;
export type BookingInput = z.infer<typeof bookingSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
