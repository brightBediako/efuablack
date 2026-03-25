import type { Metadata } from "next";
import Link from "next/link";
import { FooterLegal } from "@/components/FooterLegal";
import { SiteNav } from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of use for the Efua Black official website.",
};

export default function TermsPage() {
  return (
    <>
      <SiteNav shell="booking" active="none" />
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-3xl mx-auto">
        <h1 className="font-headline text-5xl italic text-primary mb-8">Terms of Service</h1>
        <p className="text-on-surface-variant text-sm mb-10">Last updated: March 2026</p>
        <div className="space-y-6 text-on-surface-variant leading-relaxed">
          <p>
            These Terms of Service govern your use of this website. A complete terms document will be
            published before the site goes live; this page is a placeholder so footer links resolve
            correctly.
          </p>
          <p>
            Content, imagery, and recordings on this site are protected by applicable copyright and
            trademark laws. Do not use materials without permission.
          </p>
          <p>
            Questions?{" "}
            <Link href="/contact" className="text-secondary font-medium hover:underline">
              Contact us
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
