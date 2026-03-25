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
                href="/music/testify"
                className="px-10 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-label tracking-widest uppercase hover:opacity-90 transition-all w-full md:w-auto text-center"
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
            <div className="aspect-video w-full bg-primary-container relative group cursor-pointer overflow-hidden rounded-lg">
              <img
                alt="cinematic close-up of Efua Black singing with eyes closed in a dimly lit cathedral environment"
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAILrFs4ECV87-Hs35Gj96ZFW7Loadc2SzMTA6Z_B9GObdNxg7XgWsKiN0PsNWOAZLZngX3LL1uqU2PvIIi2HwdkyT2knBV7k01dFcQv4Y5qsHltkkEkfTsonypBCYcfdXR0z0YglDTVc-sQAYjWD1B4oRJykVtaineRvLgpKi_kBWIQQsIe315hUvBoa5Pg6F7X7S919zhtuihMMmhhq20tl_22-OQ9sRvMPMxSHGePRHBqr3jD14RMWa_HWRZgngyiM-AnLQD7Nk"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-secondary flex items-center justify-center rounded-full shadow-xl group-hover:scale-110 transition-transform">
                  <MaterialSymbol name="play_arrow" className="text-on-secondary text-5xl" filled />
                </div>
              </div>
            </div>
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUbFWARBKxmr--BcsbLMDazm4E7c2VqSfoanSnQTPGCGNpEygA-L5V1WFAyoGf6xDZyIHcH-nyt9nolFX14jJgeNKSzUcv5htBg9RyhAaJQWytlvvSUVDW9aqaN_JWWUw3d2AolUCL7ClUICI7-wMBh1PLzRWPIHSWHK5LIWOk1fcULUAXsTfPC6quu3jWfAocYK5xxNHSQuAm4ESBF99LPETlvhmStoU9309pYhMHLVGR--nx9zGxa0cWFw3YkC-EPFbOX-wawu0"
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBA4TRSqNJgv11HqV64CsooWIIF2H6Ng1xxxJIIUHhscLV9alRg_5mvVxZUQCu_nKELEduF8hhP1rRUAwcP3a3KNed399_eUTGz4MpH-z2YRfbhlxxx1D9d7KVPyIEtE5B0N6ECWZr4JT4556W4n2WqUYitahNDg7V4WH4JsrgBJRzqix5tAvGwHfADSqwFOG5iTdz4g1hNvCtEwB1xdox0mk6VTTqDNJZSlYMuJ1IvdrRB7eTebXkXooWuol8M_W27HchKhUMhE"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent p-12 flex flex-col justify-end">
                  <span className="text-tertiary-fixed text-sm font-label uppercase tracking-widest mb-2">
                    2024
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdehfyNpxnghWY6smfaN3THiGlS1efpWamPBnqCI38euAQAcNF_77mpzNYeCUe4DiPDynF8qb7copvO6uvpHuUtQjbQV6JDXlOj2ND_bQxD0gIYFNrQzOr1vgqisrIaBHUC5Jg3gDENe7RKtTj5mxVLXgbtjlyKJ7tutACoiD5R7jEojxVH2zntMA-sTRJFLaO0ZwBig1ZedFySJ0yJVgWd-z2XxyGxtCGeRBuwtBX8Xk4zgzuR8O9NX1KvQq0fbnnDw6fkbRkMW8"
                />
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/60 transition-colors flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="font-headline text-2xl text-on-primary">Mercy Flows</h3>
                  <p className="text-on-primary/70 text-sm">2023</p>
                </div>
              </div>
              <div className="group relative aspect-square overflow-hidden bg-surface-container-high">
                <img
                  alt="album art for Abundant Grace, vibrant warm sunrise tones and modern serif typography"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl14mwdLWe1-fcD-EVoFWN9HnaKStFVjlOhJ_-L9PUiZ2UFrBa4iiYhbdzpMcx6PPmp5V_SL7_WUtWZqOnqFoKSCRv3k3DRWT6bkbQHUrQ4xQMADqXyjvZhem-9qhCRQ0CkHjP1sBuqtT-lFeKjc2clNRWH17ip2IIE7ROWb28xa-3Byg6K_eBX90Py8e15LYhhUqYOCWSUnvyI8k1YEipj1DBBIy6SmiXO0djHSuqrPs5PkMFwmtaTFTfv-EiAC4wJNQOfXa_k7c"
                />
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/60 transition-colors flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="font-headline text-2xl text-on-primary">Abundant Grace</h3>
                  <p className="text-on-primary/70 text-sm">2022</p>
                </div>
              </div>
              <div className="md:col-span-2 group relative aspect-[2/1] overflow-hidden bg-surface-container-high">
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
              </div>
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
                { m: "OCT", d: "12", title: "Night of Wonders", loc: "Lagos Convention Center, Nigeria", cta: "Reserve Seat" },
                {
                  m: "NOV",
                  d: "05",
                  title: "Worship Without Borders",
                  loc: "Royal Albert Hall, London",
                  cta: "Reserve Seat",
                },
                {
                  m: "DEC",
                  d: "24",
                  title: "A Christmas Encounter",
                  loc: "Online Global Broadcast",
                  cta: "Join Stream",
                },
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
