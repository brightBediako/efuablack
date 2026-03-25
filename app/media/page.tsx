import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
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
      <main className="px-4 pb-24 pt-28 sm:px-6 sm:pt-32">
        <header className="mx-auto mb-12 max-w-screen-2xl text-center sm:mb-20 md:px-4 md:text-left lg:px-12">
          <h1 className="font-headline text-4xl italic leading-tight tracking-tighter text-primary sm:text-5xl md:text-7xl lg:text-8xl mb-4">
            The Gallery of <span className="text-secondary">Grace</span>
          </h1>
          <p className="font-body text-on-surface-variant text-lg max-w-2xl leading-relaxed">
            Capturing the moments where divinity meets melody. A visual chronicle of the journey through
            sound, spirit, and soul.
          </p>
        </header>

        <div className="mx-auto mb-12 flex max-w-screen-2xl flex-wrap items-center gap-4 px-4 sm:px-6 lg:px-12">
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

      <SiteFooter />
    </>
  );
}
