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
            This Privacy Policy describes how Efua Black Ministry (&quot;we,&quot; &quot;us&quot;) handles
            information when you use this website. A full legal policy will be finalized before launch;
            this page is a placeholder so navigation and footer links work correctly.
          </p>
          <p>
            When you submit forms (subscribe, booking, contact), your data should be processed only as
            described in the final policy and any consent you provide. Server-side storage and
            third-party services (email, analytics) will be listed here once configured.
          </p>
          <p>
            For questions, please{" "}
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
