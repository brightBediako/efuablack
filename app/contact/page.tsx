import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactForm } from "@/components/forms/ContactForm";
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
            For ministry invitations, collaboration, press, or general questions
            — we&apos;d love to hear from you.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <section className="lg:col-span-7 bg-surface-container-low rounded-xl p-8 md:p-12 shadow-sm">
            <ContactForm
              key={defaultSubject || "default"}
              defaultSubject={defaultSubject}
            />
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
                  <Link
                    href="mailto:management@efuablack.com"
                    className="font-bold block hover:underline"
                  >
                    efuablack@gmail.com
                  </Link>
                </span>
                <span className="block pt-2">
                  <span className="font-label text-xs uppercase tracking-widest text-on-tertiary-fixed-variant">
                    Phone
                  </span>
                  <span className="font-bold block">+233 532 702 003</span>
                </span>
              </p>
            </div>
            <div>
              <h2 className="font-serif text-2xl text-primary italic mb-4">
                Social
              </h2>
              <div className="flex gap-4">
                <a
                  href="https://www.youtube.com/@EfuaBlack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-high transition-colors"
                  aria-label="YouTube"
                >
                  <svg
                    className="h-5 w-5 text-secondary"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M23.5 6.2a2.9 2.9 0 0 0-2-2C19.6 3.7 12 3.7 12 3.7s-7.6 0-9.5.5a2.9 2.9 0 0 0-2 2A30.4 30.4 0 0 0 0 12a30.4 30.4 0 0 0 .5 5.8 2.9 2.9 0 0 0 2 2c1.9.5 9.5.5 9.5.5s7.6 0 9.5-.5a2.9 2.9 0 0 0 2-2A30.4 30.4 0 0 0 24 12a30.4 30.4 0 0 0-.5-5.8ZM9.6 15.7V8.3l6.5 3.7-6.5 3.7Z" />
                  </svg>
                </a>
                <a
                  href="https://web.facebook.com/efuaBLACKK?_rdc=1&_rdr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-high transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    className="h-5 w-5 text-secondary"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.7V12h2.7V9.8c0-2.7 1.6-4.2 4.1-4.2 1.2 0 2.4.2 2.4.2v2.6h-1.4c-1.4 0-1.9.9-1.9 1.8V12h3.2l-.5 2.9h-2.7v7A10 10 0 0 0 22 12Z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/EfuaBlackk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-high transition-colors"
                  aria-label="Twitter"
                >
                  <svg
                    className="h-5 w-5 text-secondary"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M18.9 2H22l-6.9 7.9L23.2 22h-6.4l-5-6.6L6 22H2.9l7.4-8.4L.8 2h6.5l4.5 6 5.1-6Zm-1.1 18h1.8L6.4 3.9H4.5L17.8 20Z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@efuablack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-high transition-colors"
                  aria-label="TikTok"
                >
                  <svg
                    className="h-5 w-5 text-secondary"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M16.8 4c.8 1.8 2.1 2.9 4.2 3.1v3.2a7.9 7.9 0 0 1-4.1-1.2v6.2a5.8 5.8 0 1 1-5.8-5.8c.3 0 .6 0 .9.1v3.2a2.5 2.5 0 1 0 1.6 2.4V2h3.2v2Z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/efuablackk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-high transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-5 w-5 text-secondary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
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
