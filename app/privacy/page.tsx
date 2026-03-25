import type { Metadata } from "next";
import Link from "next/link";
import { FooterLegal } from "@/components/FooterLegal";
import { SiteNav } from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Efua Black Ministry collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteNav shell="booking" active="none" />
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-3xl mx-auto">
        <h1 className="font-headline text-5xl italic text-primary mb-8">Privacy Policy</h1>
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
      <footer className="bg-[#f7f2f8] w-full pt-16 pb-10">
        <div className="flex flex-col items-center gap-6 px-8">
          <FooterLegal />
          <div className="font-sans text-xs tracking-widest uppercase text-[#320b44] opacity-40">
            © 2024 Efua Black Ministry
          </div>
        </div>
      </footer>
    </>
  );
}
