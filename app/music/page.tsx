import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SubscribeForm } from "@/components/forms/SubscribeForm";
import { MaterialSymbol } from "@/components/MaterialSymbol";
import { SiteNav } from "@/components/SiteNav";
import { defaultDescription } from "@/lib/site-config";
import { listMusic } from "@/services/musicService";

export const metadata: Metadata = {
  title: "Music",
  description: `Sacred discography and releases — ${defaultDescription}`,
};

export default async function MusicPage() {
  const songs = await listMusic();
  const featured = songs[0];
  return (
    <>
      <SiteNav shell="music" active="music" />
      <main className="mx-auto max-w-screen-2xl px-4 pb-24 pt-28 sm:px-6 sm:pt-32 md:px-12">
        <header className="mb-12 sm:mb-20">
          <h1 className="font-headline text-5xl font-light italic leading-none tracking-tighter text-primary sm:text-7xl md:text-8xl lg:text-9xl md:-ml-2 lg:-ml-4">
            Music
          </h1>
          <p className="font-body text-lg text-on-surface-variant max-w-xl mt-6 uppercase tracking-widest opacity-80">
            A collection of spiritual anthems and soulful expressions of faith.
          </p>
        </header>

        <section className="mb-32 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 bg-surface-container-low overflow-hidden relative group">
              {featured?.youtubeMusic ? (
                <Link
                  href={featured.youtubeMusic}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-video w-full bg-primary overflow-hidden block"
                >
                  <img
                    alt={`Featured track ${featured?.title ?? "Efua Black"}`}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                    src={featured?.coverPicture ?? "https://res.cloudinary.com/dkg8ovask/image/upload/q_auto/f_auto/v1776050990/1_di4sq2.jpg"}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="w-24 h-24 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow-2xl active:scale-90 transition-transform">
                      <MaterialSymbol
                        name="play_arrow"
                        className="text-5xl"
                        filled
                      />
                    </span>
                  </div>
                </Link>
              ) : (
                <div className="aspect-video w-full bg-primary overflow-hidden">
                  <img
                    alt={`Featured track ${featured?.title ?? "Efua Black"}`}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                    src={featured?.coverPicture ?? "https://res.cloudinary.com/dkg8ovask/image/upload/q_auto/f_auto/v1776050990/1_di4sq2.jpg"}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="w-24 h-24 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow-2xl">
                      <MaterialSymbol
                        name="play_arrow"
                        className="text-5xl"
                        filled
                      />
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div className="lg:col-span-4 lg:pl-8">
              <div className="bg-tertiary-fixed p-1 inline-block mb-4">
                <span className="font-label text-xs uppercase tracking-widest text-on-tertiary-fixed-variant px-3 py-1">
                  Featured Release
                </span>
              </div>
              <h2 className="font-headline text-6xl italic text-primary mb-6">
                <Link href={featured?.youtubeMusic || "#"}>
                  {featured?.title ?? "Latest Release"}
                </Link>
              </h2>
              <p className="font-body text-on-surface-variant leading-relaxed mb-10">
                {featured?.description ??
                  "Experience the latest worship release from Efua Black and discover songs that minister to the soul."}
              </p>
              <div className="space-y-4">
                <p className="font-label text-xs uppercase tracking-[0.2em] text-outline mb-6">
                  Listen on your platform
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { label: "Spotify", href: featured?.spotify },
                    { label: "Apple Music", href: featured?.appleMusic },
                    { label: "YouTube Music", href: featured?.youtubeMusic },
                  ]
                    .filter((item) => item.href)
                    .map((item) => (
                    <Link
                      key={item.label}
                      href={item.href!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full px-6 py-4 bg-surface-container-lowest hover:bg-surface-container-high transition-colors text-primary group"
                    >
                      <span className="font-label text-sm uppercase tracking-widest">
                        {item.label}
                      </span>
                      <MaterialSymbol
                        name="arrow_outward"
                        className="text-xl group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-40">
          <div className="flex justify-between items-end mb-12">
            <h3 className="font-headline text-4xl italic text-primary">
              The Collection
            </h3>
            <div className="h-px bg-outline-variant flex-grow mx-8 mb-4 opacity-30 hidden md:block" />
            <span className="font-label text-sm text-outline uppercase tracking-widest">
              {songs.length} Tracks Released
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {songs.map((s) => (
              <div key={s.title} className="group">
                <div className="relative bg-surface-container-low overflow-hidden aspect-square mb-6">
                  {s.youtubeMusic ? (
                    <Link href={s.youtubeMusic} target="_blank" rel="noopener noreferrer" className="block h-full w-full">
                      <img
                        alt={s.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                        src={s.coverPicture}
                      />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="w-16 h-16 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow-xl active:scale-90 transition-transform">
                          <MaterialSymbol
                            name="play_arrow"
                            className="text-3xl"
                            filled
                          />
                        </span>
                      </div>
                    </Link>
                  ) : (
                    <>
                      <img
                        alt={s.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                        src={s.coverPicture}
                      />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="w-16 h-16 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow-xl">
                          <MaterialSymbol
                            name="play_arrow"
                            className="text-3xl"
                            filled
                          />
                        </span>
                      </div>
                    </>
                  )}
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-headline text-2xl italic text-primary">
                      {s.title}
                    </h4>
                    <p className="font-label text-sm text-on-surface-variant opacity-70">
                      {s.yearRelease}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="text-secondary hover:text-on-secondary-container transition-colors"
                  >
                    <MaterialSymbol name="more_vert" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-40 bg-surface-container-low p-12 md:p-24 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-headline text-5xl italic text-primary mb-6 leading-tight">
              Be the first to hear new melodies.
            </h2>
            <p className="font-body text-on-surface-variant mb-10 text-lg">
              Join Efua&apos;s mailing list for early access to releases, live
              sessions, and spiritual reflections.
            </p>
            <SubscribeForm variant="section" />
          </div>
          <div className="absolute -right-20 -bottom-20 opacity-10 pointer-events-none">
            <MaterialSymbol
              name="music_note"
              className="text-[300px] text-secondary"
            />
          </div>
        </section>
      </main>

      <SiteFooter />

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl">
        <div className="bg-surface/80 backdrop-blur-2xl px-6 py-4 flex items-center gap-6 shadow-2xl border border-outline-variant/10 rounded-full">
          <img
            alt="Current track thumbnail"
            className="w-12 h-12 rounded-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLd5JnNU8JZu6irH8yKcpXpokmSp7j6eA2zrxvjdZbSz20VCxIy-VviHiZkSW3uxwnixeh69n4vuJBbaPHbTkspuWzlR11b0WJsJ07zVFvttITCvmrjWLrAoHyG7FOo7XPsJicg5hK9mth9Fu4JOQpeM7AZtrG5kJ-tWS_tmNa2nNAoi0mvOI4_jVNjTb8sfjFDz5iS0amVHHO7a_F616rUQ_6gt7eGURP1-Dn3LpRkHBBQkBG4wyybaUvi72EQ7uwIXarG-JHkwU"
          />
          <div className="flex-grow">
            <p className="font-headline italic text-lg text-primary leading-none">
              Testify
            </p>
            <p className="font-label text-[10px] uppercase tracking-widest text-outline">
              Efua Black
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="text-primary hover:text-secondary transition-colors"
            >
              <MaterialSymbol name="skip_previous" className="text-2xl" />
            </button>
            <button
              type="button"
              className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow-lg"
            >
              <MaterialSymbol name="pause" className="text-2xl" filled />
            </button>
            <button
              type="button"
              className="text-primary hover:text-secondary transition-colors"
            >
              <MaterialSymbol name="skip_next" className="text-2xl" />
            </button>
          </div>
          <div className="hidden sm:flex items-center gap-2 w-32 ml-4">
            <MaterialSymbol name="volume_up" className="text-lg text-outline" />
            <div className="h-1 bg-outline-variant/30 flex-grow rounded-full overflow-hidden">
              <div className="h-full bg-secondary w-2/3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
