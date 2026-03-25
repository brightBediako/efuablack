import type { Metadata } from "next";
import { FooterLegal } from "@/components/FooterLegal";
import { MediaGalleryClient } from "@/components/MediaGalleryClient";
import { SiteNav } from "@/components/SiteNav";
import { defaultDescription } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Media Gallery",
  description: `Photos and performances — ${defaultDescription}`,
};

export default function MediaPage() {
  return (
    <>
      <SiteNav shell="media" active="media" />
      <main className="pt-32 pb-24">
        <header className="max-w-screen-2xl mx-auto px-12 mb-20 text-center md:text-left">
          <h1 className="font-headline text-6xl md:text-8xl italic text-primary leading-tight mb-4 tracking-tighter">
            The Gallery of <span className="text-secondary">Grace</span>
          </h1>
          <p className="font-body text-on-surface-variant text-lg max-w-2xl leading-relaxed">
            Capturing the moments where divinity meets melody. A visual chronicle of the journey through
            sound, spirit, and soul.
          </p>
        </header>

        <div className="max-w-screen-2xl mx-auto px-12 mb-12 flex flex-wrap gap-4 items-center">
          <button
            type="button"
            className="bg-primary text-on-primary px-8 py-3 rounded-full font-label text-sm tracking-widest uppercase transition-all hover:opacity-90"
          >
            All Media
          </button>
          <button
            type="button"
            className="bg-surface-container-low text-on-surface-variant px-8 py-3 rounded-full font-label text-sm tracking-widest uppercase hover:bg-surface-container-high transition-all"
          >
            Photography
          </button>
          <button
            type="button"
            className="bg-surface-container-low text-on-surface-variant px-8 py-3 rounded-full font-label text-sm tracking-widest uppercase hover:bg-surface-container-high transition-all"
          >
            Performances
          </button>
          <button
            type="button"
            className="bg-surface-container-low text-on-surface-variant px-8 py-3 rounded-full font-label text-sm tracking-widest uppercase hover:bg-surface-container-high transition-all"
          >
            Behind the Scenes
          </button>
        </div>

        <MediaGalleryClient />
      </main>

      <footer className="bg-[#f7f2f8] dark:bg-[#1a0a25] w-full pt-20 pb-10">
        <div className="flex flex-col items-center justify-center gap-8 px-8 w-full">
          <div className="font-serif text-xl italic text-[#320b44] dark:text-[#eedbff]">Efua Black Ministry</div>
          <FooterLegal />
          <p className="text-[#320b44] opacity-40 text-[10px] tracking-widest uppercase mt-4 dark:text-[#eedbff]">
            © 2024 Efua Black Ministry. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
