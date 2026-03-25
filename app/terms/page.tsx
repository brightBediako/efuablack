import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of use for the Efua Black official website.",
};

export default function TermsPage() {
  return (
    <>
      <SiteNav shell="booking" active="none" />
      <main className="mx-auto max-w-3xl px-4 pb-24 pt-28 sm:px-6 sm:pt-32 md:px-12">
        <h1 className="mb-8 font-headline text-3xl italic text-primary sm:text-4xl md:text-5xl">Terms of Service</h1>
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
      <SiteFooter />
    </>
  );
}
