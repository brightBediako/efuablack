import nodemailer from "nodemailer";
import { getEmailFrom, getNotifyEmail, getSmtpConfig, isSmtpConfigured } from "@/config/env";
import type { BookingDoc } from "@/models/Booking";
import type { ContactDoc } from "@/models/Contact";

function getTransport() {
  if (!isSmtpConfigured()) return null;
  const smtp = getSmtpConfig();
  return nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.port === 465,
    auth: { user: smtp.user, pass: smtp.pass },
  });
}

async function send(options: {
  to: string;
  subject: string;
  text: string;
  html: string;
}): Promise<{ sent: boolean; skipped?: boolean }> {
  const transport = getTransport();
  const from = getEmailFrom();
  if (!transport) {
    console.warn("[email] SMTP not configured; skipped:", options.subject);
    return { sent: false, skipped: true };
  }
  await transport.sendMail({
    from: `"Efua Black" <${from}>`,
    to: options.to,
    subject: options.subject,
    text: options.text,
    html: options.html,
  });
  return { sent: true };
}

export async function notifyBookingToAdmin(doc: BookingDoc): Promise<void> {
  const notify = getNotifyEmail();
  const text = [
    `New booking inquiry from ${doc.name}`,
    "",
    `Organisation: ${doc.org}`,
    `Email: ${doc.email}`,
    `Phone: ${doc.phone}`,
    `Event type: ${doc.eventType}`,
    `Preferred date: ${doc.eventDate}`,
    `Location: ${doc.location}`,
    "",
    "Message:",
    doc.message,
  ].join("\n");

  const html = `
    <h2>New booking inquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(doc.name)}<br/>
    <strong>Organisation:</strong> ${escapeHtml(doc.org)}<br/>
    <strong>Email:</strong> ${escapeHtml(doc.email)}<br/>
    <strong>Phone:</strong> ${escapeHtml(doc.phone)}<br/>
    <strong>Event type:</strong> ${escapeHtml(doc.eventType)}<br/>
    <strong>Preferred date:</strong> ${escapeHtml(doc.eventDate)}<br/>
    <strong>Location:</strong> ${escapeHtml(doc.location)}</p>
    <p><strong>Message</strong></p>
    <p>${escapeHtml(doc.message).replace(/\n/g, "<br/>")}</p>
  `;

  await send({ to: notify, subject: `[Efua Black] Booking: ${doc.eventType}`, text, html });
}

export async function sendBookingConfirmationToUser(doc: BookingDoc): Promise<void> {
  const text = [
    `Dear ${doc.name},`,
    "",
    "Thank you for your booking inquiry. Our team has received your request and will review the details.",
    "",
    "We'll be in touch shortly to confirm availability and next steps.",
    "",
    "Warm regards,",
    "Efua Black Management",
  ].join("\n");

  const html = `
    <p>Dear ${escapeHtml(doc.name)},</p>
    <p>Thank you for your booking inquiry. Our team has received your request and will review the details.</p>
    <p>We'll be in touch shortly to confirm availability and next steps.</p>
    <p>Warm regards,<br/>Efua Black Management</p>
  `;

  await send({
    to: doc.email,
    subject: "We received your booking inquiry",
    text,
    html,
  });
}

export async function notifyContactToAdmin(doc: ContactDoc): Promise<void> {
  const notify = getNotifyEmail();
  const phoneLine = doc.phone ? `Phone: ${doc.phone}\n` : "";
  const text = [
    `New contact message from ${doc.name}`,
    "",
    `Email: ${doc.email}`,
    phoneLine.trimEnd(),
    `Subject: ${doc.subject}`,
    "",
    "Message:",
    doc.message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <h2>New contact message</h2>
    <p><strong>Name:</strong> ${escapeHtml(doc.name)}<br/>
    <strong>Email:</strong> ${escapeHtml(doc.email)}<br/>
    ${doc.phone ? `<strong>Phone:</strong> ${escapeHtml(doc.phone)}<br/>` : ""}
    <strong>Subject:</strong> ${escapeHtml(doc.subject)}</p>
    <p>${escapeHtml(doc.message).replace(/\n/g, "<br/>")}</p>
  `;

  await send({ to: notify, subject: `[Efua Black] Contact: ${doc.subject}`, text, html });
}

export async function sendContactConfirmationToUser(doc: ContactDoc): Promise<void> {
  const text = [
    `Dear ${doc.name},`,
    "",
    "Thank you for reaching out. We've received your message and will respond as soon as we can.",
    "",
    "Warm regards,",
    "Efua Black Management",
  ].join("\n");

  const html = `
    <p>Dear ${escapeHtml(doc.name)},</p>
    <p>Thank you for reaching out. We've received your message and will respond as soon as we can.</p>
    <p>Warm regards,<br/>Efua Black Management</p>
  `;

  await send({
    to: doc.email,
    subject: "We received your message",
    text,
    html,
  });
}

export async function sendSubscriberWelcome(email: string, source?: string): Promise<void> {
  const text = [
    "Thank you for subscribing.",
    "",
    "You'll hear from us with updates on new music, ministry moments, and upcoming events.",
    source ? `You signed up from: ${source}` : "",
    "",
    "Warm regards,",
    "Efua Black",
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <p>Thank you for subscribing.</p>
    <p>You'll hear from us with updates on new music, ministry moments, and upcoming events.</p>
    ${source ? `<p><small>You signed up from: ${escapeHtml(source)}</small></p>` : ""}
    <p>Warm regards,<br/>Efua Black</p>
  `;

  await send({
    to: email,
    subject: "Welcome — you're on the list",
    text,
    html,
  });
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
