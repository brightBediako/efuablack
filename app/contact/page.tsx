import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactForm } from "@/components/forms/ContactForm";
import { MaterialSymbol } from "@/components/MaterialSymbol";
import { SiteNav } from "@/components/SiteNav";
import { defaultDescription } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: `General inquiries, partnerships, and ministry connections — ${defaultDescription}`,
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string }>;
}) {
  const sp = await searchParams;
  const defaultSubject = sp.topic === "media-kit" ? "Media kit request" : "";

  return (
    <>
      <SiteNav shell="contact" active="contact" />
      <main className="mx-auto max-w-7xl px-4 pb-24 pt-28 sm:px-6 sm:pt-32 md:px-12">
        <header className="mb-16 text-center md:text-left">
          <h1 className="font-serif text-4xl italic leading-tight tracking-tight text-primary sm:text-5xl md:text-7xl lg:text-8xl">
            Contact
          </h1>
          <p className="mt-6 text-on-surface-variant max-w-2xl text-lg font-body font-light tracking-wide leading-relaxed">
            For ministry invitations, collaboration, press, or general questions — we&apos;d love to hear from
            you.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <section className="lg:col-span-7 bg-surface-container-low rounded-xl p-8 md:p-12 shadow-sm">
            <ContactForm key={defaultSubject || "default"} defaultSubject={defaultSubject} />
          </section>
          <aside className="lg:col-span-5 space-y-10">
            <div className="p-8 bg-tertiary-fixed rounded-xl border-l-4 border-secondary">
              <h2 className="text-xs uppercase tracking-widest text-secondary font-extrabold mb-4">
                Direct lines
              </h2>
              <p className="font-body text-primary-container leading-relaxed space-y-2">
                <span className="block">
                  <span className="font-label text-xs uppercase tracking-widest text-on-tertiary-fixed-variant">
                    Email
                  </span>
                  <Link href="mailto:management@efuablack.com" className="font-bold block hover:underline">
                    management@efuablack.com
                  </Link>
                </span>
                <span className="block pt-2">
                  <span className="font-label text-xs uppercase tracking-widest text-on-tertiary-fixed-variant">
                    Phone
                  </span>
                  <span className="font-bold block">+1 (555) EFUA-ART</span>
                </span>
              </p>
            </div>
            <div>
              <h2 className="font-serif text-2xl text-primary italic mb-4">Social</h2>
              <div className="flex gap-4">
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-high transition-colors"
                  aria-label="YouTube"
                >
                  <MaterialSymbol name="play_circle" className="text-secondary" />
                </a>
                <a
                  href="https://open.spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-high transition-colors"
                  aria-label="Spotify"
                >
                  <MaterialSymbol name="music_note" className="text-secondary" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-high transition-colors"
                  aria-label="Instagram"
                >
                  <MaterialSymbol name="photo_camera" className="text-secondary" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <SiteFooter className="mt-16" />
    </>
  );
}
