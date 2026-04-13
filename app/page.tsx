import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SubscribeForm } from "@/components/forms/SubscribeForm";
import { MaterialSymbol } from "@/components/MaterialSymbol";
import { SiteNav } from "@/components/SiteNav";
import { defaultDescription } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Gospel Musician & Worship Minister",
  description: defaultDescription,
  openGraph: {
    description: defaultDescription,
  },
};

export default function HomePage() {
  return (
    <>
      <SiteNav shell="home" active="home" />
      <main id="main-content">
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 z-0 hero-gradient"
            role="img"
            aria-label="powerful live worship scene with warm spotlights, hazy atmosphere, and silhouettes of a choir behind a female singer"
          />
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <span className="font-label text-secondary-fixed-dim tracking-[0.3em] uppercase mb-6 block">
              New Release
            </span>
            <h1 className="font-headline text-5xl text-on-primary italic font-bold mb-8 leading-tight sm:mb-12 sm:text-7xl md:text-9xl">
              Testify
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link
                href="https://www.youtube.com/watch?v=BwjSkfRhD2A"
                className="px-10 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-label tracking-widest uppercase hover:opacity-90 transition-all w-full md:w-auto text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch Now
              </Link>
              <Link
                href="/booking"
                className="px-10 py-4 border border-outline-variant/30 text-on-primary font-label tracking-widest uppercase backdrop-blur-sm hover:bg-white/10 transition-all w-full md:w-auto text-center"
              >
                Book Efua
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface-container-low">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
              <div className="lg:col-span-8">
                <h2 className="font-headline text-5xl md:text-6xl text-primary leading-none mb-4">
                  A Sacred Visual Journey
                </h2>
                <p className="font-body text-lg text-on-surface-variant max-w-2xl">
                  Experience the divine presence through the official music video for &quot;Testify,&quot; a
                  song born from deep prayer and gratitude.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-end">
                <span className="font-headline text-8xl text-outline-variant/20 italic select-none">
                  Experience
                </span>
              </div>
            </div>
            <div className="aspect-video w-full bg-black relative overflow-hidden rounded-lg">
              <iframe
                className="absolute inset-0 h-full w-full border-0 rounded-lg"
                src="https://www.youtube.com/embed/BwjSkfRhD2A?rel=0"
                title="Efua Black ft. Diana Hamilton – TESTIFY [ Official Video ]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-center">
              <a
                href="https://www.youtube.com/watch?v=BwjSkfRhD2A"
                target="_blank"
                rel="noopener noreferrer"
                className="font-label text-sm text-secondary underline-offset-4 hover:underline"
              >
                Open on YouTube
              </a>
            </p>
          </div>
        </section>

        <section className="py-24 bg-surface overflow-hidden">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-20">
              <div className="md:w-1/2 relative">
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-tertiary-fixed rounded-full blur-3xl opacity-30 -z-10" />
                <img
                  alt="artistic portrait of Efua Black wearing elegant purple attire, holding a vintage microphone, warm soft lighting"
                  className="w-full aspect-[4/5] object-cover rounded-xl shadow-2xl relative z-10"
                  src="https://res.cloudinary.com/dkg8ovask/image/upload/q_auto/f_auto/v1776050993/12_tyayqz.jpg"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="relative z-20 mb-8 inline-block bg-surface/90 p-4 font-headline text-4xl italic text-primary backdrop-blur-sm sm:text-5xl md:-ml-12 md:backdrop-blur-sm lg:-ml-24">
                  The Voice Behind the Worship
                </h2>
                <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
                  <p>
                    Efua Black is more than a vocalist; she is a vessel of divine inspiration whose
                    music bridges the gap between the mundane and the celestial. For over a decade, she
                    has led thousands into deep worship.
                  </p>
                  <p>
                    Her journey began in the humble choirs of her hometown, evolving into a global
                    ministry that resonates with the broken-hearted and the seekers of truth.
                  </p>
                </div>
                <Link
                  href="/about"
                  className="mt-10 font-label text-secondary font-bold tracking-widest uppercase flex items-center gap-2 group"
                >
                  Read Full Story
                  <MaterialSymbol
                    name="arrow_right_alt"
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface-container-low">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <h2 className="font-headline text-5xl text-primary">Sacred Discography</h2>
              <p className="font-label text-secondary uppercase tracking-[0.2em]">Latest Tracks</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden bg-surface-container-highest">
                <img
                  alt="album art for Testify, abstract golden textures and spiritual symbolism with elegant typography"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  src="https://res.cloudinary.com/dkg8ovask/image/upload/q_auto/f_auto/v1776050990/1_di4sq2.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent p-12 flex flex-col justify-end">
                  <span className="text-tertiary-fixed text-sm font-label uppercase tracking-widest mb-2">
                    2026
                  </span>
                  <h3 className="font-headline text-4xl text-on-primary mb-4">Testify</h3>
                  <div className="flex gap-4">
                    <MaterialSymbol
                      name="play_circle"
                      className="text-secondary-fixed text-3xl cursor-pointer"
                      filled
                    />
                    <MaterialSymbol
                      name="add_circle"
                      className="text-on-primary/60 text-3xl cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              <div className="group relative aspect-square overflow-hidden bg-surface-container-high">
                <img
                  alt="album art for Mercy, soft lavender colors and a simple ethereal cross symbol"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="https://res.cloudinary.com/dkg8ovask/image/upload/q_auto/f_auto/v1776050990/4_cjztqn.jpg"
                />
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/60 transition-colors flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="font-headline text-2xl text-on-primary">Me Hia Wo</h3>
                  <p className="text-on-primary/70 text-sm">2024</p>
                </div>
              </div>
              <div className="group relative aspect-square overflow-hidden bg-surface-container-high">
                <img
                  alt="album art for Abundant Grace, vibrant warm sunrise tones and modern serif typography"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="https://res.cloudinary.com/dkg8ovask/image/upload/q_auto/f_auto/v1776050990/5_derlqf.jpg"
                />
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/60 transition-colors flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="font-headline text-2xl text-on-primary">Amazing God</h3>
                  <p className="text-on-primary/70 text-sm">2023</p>
                </div>
              </div>

              {/* <div className="md:col-span-2 group relative aspect-[2/1] overflow-hidden bg-surface-container-high">
                <img
                  alt="album art for Live in London, wide shot of an arena concert with purple and gold stage lights"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlCC6vyFvUZk5sBRgwuRLLRaJQ3No6p6tgyF52v0yFiXyH15Rg9TU-Cvt-vzOg3IqYCc7GbAp7xIZUdcHqicWmbP9z2x9ydlNZZzvCntXJ83Ykgr0t7fm7Pj6c5my_-D5oiw0JQQEq9-GiG62Hwd03gkwx75XNcTsRfZ9XegaIb4GtGp2-1-eJDURCPXHaSdg9JQHBusWk0rFlmyn5W1AHAigwl7AnaFxiLivy2ocuoWa2a2DKLMCe_-7LU4-_Dlxo0HR0qNOkNJc"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent p-8 flex flex-col justify-center">
                  <span className="text-secondary-fixed text-sm font-label uppercase mb-1">Live Album</span>
                  <h3 className="font-headline text-3xl text-on-primary">The Encounter: Live</h3>
                  <p className="text-on-primary/70 text-sm">2021</p>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
            <div className="text-center mb-20">
              <h2 className="font-headline text-6xl text-primary mb-4 italic">The Invitation</h2>
              <p className="font-body text-on-surface-variant max-w-lg mx-auto uppercase tracking-widest text-sm">
                Join us in presence and in truth
              </p>
            </div>
            <div className="space-y-4">
              {[
                { m: "APRIL", d: "26", title: "Holy Ghost Experience", loc: "Word of Life - Assemlies of God, Anaji Takoradi", cta: "Reserve Seat" },
              ].map((ev) => (
                <div
                  key={ev.title}
                  className="group flex flex-col md:flex-row items-center justify-between p-8 bg-surface-container-high hover:bg-surface-container-highest transition-colors"
                >
                  <div className="flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
                    <div className="font-headline text-5xl text-secondary">
                      <span className="block">{ev.m}</span>
                      <span className="block font-bold">{ev.d}</span>
                    </div>
                    <div>
                      <h3 className="font-headline text-3xl text-primary mb-1">{ev.title}</h3>
                      <p className="font-body text-on-surface-variant">{ev.loc}</p>
                    </div>
                  </div>
                  <div className="mt-8 md:mt-0">
                    <button
                      type="button"
                      className="font-label text-primary font-bold tracking-widest uppercase border-b-2 border-primary/20 hover:border-secondary transition-colors pb-2"
                    >
                      {ev.cta}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 bg-primary overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
            <img
              alt="abstract flowing lines and divine light patterns on a dark background"
              className="w-full h-full object-cover rotate-12"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1fRqkvXlCNRXYRRD9EqKH0f8U-ohqbDF0FVWInsY_AduqBGwyr4SQbNk2X5CeG0hmDLWej4PVX8F8O_bhvvXrRygvyUUuov9w_C3QQCw1HsmKG-HScmClTiZt9VrC7tT1nP2EzkohxcFA5wNTGA9eUr92sa-nNmaUb7rSQ_mEoKSvt_QcY_8pfKEfKqrmFEIGsRHwKcdTRyp-0SGNUBWj87-K_3YjcFb7apybCXTCbpSsQBkQvmjRb2jZYbfkGP27GtRsiImmY5c"
            />
          </div>
          <div className="max-w-screen-md mx-auto px-6 text-center relative z-10">
            <h2 className="font-headline text-5xl text-on-primary mb-6">Stay Connected</h2>
            <p className="font-body text-tertiary-fixed-dim mb-12 text-lg">
              Receive spiritual encouragement, exclusive music previews, and ministry updates directly
              to your soul&apos;s inbox.
            </p>
            <SubscribeForm variant="hero" />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
