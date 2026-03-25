import { connectDB } from "@/lib/db";
import { Contact } from "@/models/Contact";
import type { ContactInput } from "@/lib/validators";
import { notifyContactToAdmin, sendContactConfirmationToUser } from "./emailService";

export type ContactPayload = Omit<ContactInput, "company">;

export async function createContact(input: ContactPayload) {
  await connectDB();

  const doc = await Contact.create({
    name: input.name,
    email: input.email,
    phone: input.phone || undefined,
    subject: input.subject,
    message: input.message,
  });

  const plain = doc.toObject();
  await Promise.all([notifyContactToAdmin(plain), sendContactConfirmationToUser(plain)]);

  return doc;
}
