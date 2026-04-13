import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Efua Black Ministry collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteNav shell="booking" active="none" />
      <main className="mx-auto max-w-3xl px-4 pb-24 pt-28 sm:px-6 sm:pt-32 md:px-12">
        <h1 className="mb-8 font-headline text-3xl italic text-primary sm:text-4xl md:text-5xl">Privacy Policy</h1>
        <p className="text-on-surface-variant text-sm mb-10">Last updated: March 2026</p>
        <div className="space-y-6 text-on-surface-variant leading-relaxed">
          <p>
            Efua Black Ministry (&quot;we,&quot; &quot;us&quot;) collects only the information needed to
            respond to bookings, contact requests, and newsletter subscriptions. Information may include
            your name, email, phone number, organization, and message details that you voluntarily submit.
          </p>
          <p>
            We use this information to reply to inquiries, coordinate ministry events, deliver requested
            communications, and improve our services. We do not sell your personal information. We may use
            trusted service providers for hosting, email delivery, spam protection, and media delivery.
          </p>
          <p>
            Submitted records may be retained for ministry operations, legal obligations, and anti-abuse
            monitoring. You may request access, correction, or deletion of your personal data by contacting
            us directly.
          </p>
          <p>
            For questions or privacy requests, please{" "}
            <Link href="/contact" className="text-secondary font-medium hover:underline">
              contact us
            </Link>
            .
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
