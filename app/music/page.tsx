import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SubscribeForm } from "@/components/forms/SubscribeForm";
import { MaterialSymbol } from "@/components/MaterialSymbol";
import { SiteNav } from "@/components/SiteNav";
import { defaultDescription } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Music",
  description: `Sacred discography and releases — ${defaultDescription}`,
};

const songs = [
  {
    title: "Glow",
    year: "2023",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzfkvU6H2S6hA9WZVMMqGRZ40zNM9rjwOmNcJ1uAeFaz_Q0Tuk7oe6sCCOaYNoxJeQjRw54GcmYwR3-SfeJ-A4zCZqPn7tyA3LqlNFJAmmiAxsKDMmIWrpAIE05VEKGBncFh_02N0P73fvK0sw-UInA5orzagUTJv1lNw0E-7AD37l6I4CnE4wQT4THiZX70OnCF_dtSmW2RtRyVqRkdDk2tqbP-8ikC2M2N0UXm50HWDm4-g6RnduYvMjTTf6O7ghqmDnKSJv8KU",
    alt: "Abstract musical cover art with swirling purple and gold light trails against a dark deep velvet background",
  },
  {
    title: "Grace Found Me",
    year: "2022",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRdQpHFRvgeXY-DTRfHXWAPFMtL3pwZRu_tiWFPqH8-3k65gX9uEXCKQYT1Nmj6zdS7RObFF8vs18_VB7oflXINYubSAu5Y6qy5XnK4R6r0iOuvk0v_5A-x-HNKxWvDnSABoolEgZ4pZOa-0DhlUUEr2eVwEw_aEAmnA4IJTyCqUt-Kw2faE0_btahUQcJ8gFxeY5Ps5DDZIvjnpCuTpxsJaGM8jO7KqvtHgLpHjv1gPEs5aKyYW400ixyB0oxGggrYjy1ritZxp8",
    alt: "Modern minimalist cover art showing a single spotlight beam cutting through a misty violet void onto a golden stone",
  },
  {
    title: "Midnight Prayer",
    year: "2022",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAl-u2cqzyhmDWBaNYGG6SAh5w3PFq17Ij1_7sr2H2AsHeZoXEGUBdLFkx3Vqq-srm8fYOPY7p5dv5MQJLRLeppW9Y9Qb0VcsaUgXBaxKT8jcfMZTcSaDNwpzpyn3CK4tWdtA6mSNmgc1JKN8Wtdm0EzM_339oV5Tn3D4ylpF_ojTklGS3QKMmO3iG0UYBpCeJh7AWLZ1j0NhiGj6Rup5UvILb6HHYtgM6XbuH1Vs8O08--Bq3VHgyMmVhKZ5Oe63Skz5MSiud9QYQ",
    alt: "Atmospheric cover art featuring a dark starry sky reflecting in a still lake with a subtle purple horizon glow",
  },
  {
    title: "Sovereign",
    year: "2021",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9fhb5PrN0bqdcLY5dGaCj7ycrjzcI907Nq0F_4QTxhnYY7J2xf74OmyCUg9MM9vNwl_dvY1H6nRvK9Cg0L7eXnDzx9TGV8Bgd3nwoRb7KjmYDcKymyolmaUC2gChDnqp_zOWRLc8ljNzg46VGm_zIoUU5TvWfnIpZEHyu28WjKotp3IGEOa8F_6kSHxbxjFnVfgij0xCIUUwN4ES-CsTQmHXYGTkeFNPaGVXwWc5uPnysU5xS9GBiibG9CoPDAVXvFuQoYrSn9S0",
    alt: "Ethereal image of clouds at twilight illuminated by an unseen celestial source with deep indigo and soft magenta tones",
  },
  {
    title: "Higher Ground",
    year: "2020",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaFJTYt6VcRFd-CzcpEeg0-0aOwNU8kiCRUqUCFtcR33Tp_bgMIM1xD28yEzief1VzwhQTOvCQMRLeywbxBEOJ13MTd_xUVMph9-rcGDv58lnzXmQ-Zd0236x9s6wmn9CURD_s3fsrTQmz9_NxPO11Mx1BZfIQKDESAJpRAPNCHAJ_TNVmoBUMn7g6_7DLYTQVc8dckHbMGsADt5wZinrcm_LykhHP3nSC7VUziBfdMI5j8ZX5Ew4Iv5UQF8o6uC6BM7fk0RBqsAw",
    alt: "Landscape shot of misty mountain peaks at dawn with a soft golden sun beginning to break through the fog",
  },
  {
    title: "Echoes of Joy",
    year: "2019",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1Wm_p9vefKi0QNmx66H-UUP8Hisq7VwbUxjDooLhQVmQMm27WDNlJ-pB8tnBNYMPmV9-vbBRemgGvOvBZ0oja9-Gngf5gg5irw9sNwqKil7KJ1Tuww5u7g52CSgPW6xuqlako-6V3FyqbeEweqZp_yXVTi03eOWOPzl14XyanBV3dycXDRAJ1o4jz-fEvt5VykZM9L-Xfug4ba0AZp9dwJo_aF_Sb2pdxZ1FUYcVJhu2yJVDC0l0Jz51y4NLoRj9VgS6xSUa6dP0",
    alt: "Close up of piano keys with a soft warm focus and floating golden particles like tiny embers or sparks of light",
  },
];

export default function MusicPage() {
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
              <div className="aspect-video w-full bg-primary overflow-hidden">
                <img
                  alt="Featured track Testify"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd3OH9kJoGzHS7eBAXxj5Qssfmy1LLhDYJUm8f9c3yerpuxC2usszVw48d2rCWDcweSWxNf-T7m9TqMFXl9bTLsd4qvjJEbZfHEaRM89Uyqaa8hhBzfQMKleRJTpvBRkj1sxMAyRv4vdRqvx1nzrASES0CEtXgtTjmKfRYqn4b-U6T7EwRkM8of3tMPs7Q1xAwNNVXv074vn1ZLfxFxpTUGkPV_P9O9QzHKsaZg98htEIgrOYwDfZKOIjaR3wRlhBGE13Cf8Gt5mA"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    type="button"
                    className="w-24 h-24 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow-2xl active:scale-90 transition-transform"
                  >
                    <MaterialSymbol name="play_arrow" className="text-5xl" filled />
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 lg:pl-8">
              <div className="bg-tertiary-fixed p-1 inline-block mb-4">
                <span className="font-label text-xs uppercase tracking-widest text-on-tertiary-fixed-variant px-3 py-1">
                  Featured Release
                </span>
              </div>
              <h2 className="font-headline text-6xl italic text-primary mb-6">
                <Link href="/music/testify">Testify</Link>
              </h2>
              <p className="font-body text-on-surface-variant leading-relaxed mb-10">
                An uplifting journey through grace and redemption. This single captures the essence of
                divine presence in the quietest moments of life.
              </p>
              <div className="space-y-4">
                <p className="font-label text-xs uppercase tracking-[0.2em] text-outline mb-6">
                  Listen on your platform
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {["Spotify", "Apple Music", "YouTube Music"].map((label) => (
                    <button
                      key={label}
                      type="button"
                      className="flex items-center justify-between w-full px-6 py-4 bg-surface-container-lowest hover:bg-surface-container-high transition-colors text-primary group"
                    >
                      <span className="font-label text-sm uppercase tracking-widest">{label}</span>
                      <MaterialSymbol
                        name="arrow_outward"
                        className="text-xl group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-40">
          <div className="flex justify-between items-end mb-12">
            <h3 className="font-headline text-4xl italic text-primary">The Collection</h3>
            <div className="h-px bg-outline-variant flex-grow mx-8 mb-4 opacity-30 hidden md:block" />
            <span className="font-label text-sm text-outline uppercase tracking-widest">12 Tracks Released</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {songs.map((s) => (
              <div key={s.title} className="group">
                <div className="relative bg-surface-container-low overflow-hidden aspect-square mb-6">
                  <img alt={s.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src={s.img} />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      type="button"
                      className="w-16 h-16 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow-xl active:scale-90 transition-transform"
                    >
                      <MaterialSymbol name="play_arrow" className="text-3xl" filled />
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-headline text-2xl italic text-primary">{s.title}</h4>
                    <p className="font-label text-sm text-on-surface-variant opacity-70">{s.year}</p>
                  </div>
                  <button type="button" className="text-secondary hover:text-on-secondary-container transition-colors">
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
              Join Efua&apos;s mailing list for early access to releases, live sessions, and spiritual
              reflections.
            </p>
            <SubscribeForm variant="section" />
          </div>
          <div className="absolute -right-20 -bottom-20 opacity-10 pointer-events-none">
            <MaterialSymbol name="music_note" className="text-[300px] text-secondary" />
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
            <p className="font-headline italic text-lg text-primary leading-none">Testify</p>
            <p className="font-label text-[10px] uppercase tracking-widest text-outline">Efua Black</p>
          </div>
          <div className="flex items-center gap-4">
            <button type="button" className="text-primary hover:text-secondary transition-colors">
              <MaterialSymbol name="skip_previous" className="text-2xl" />
            </button>
            <button
              type="button"
              className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow-lg"
            >
              <MaterialSymbol name="pause" className="text-2xl" filled />
            </button>
            <button type="button" className="text-primary hover:text-secondary transition-colors">
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
