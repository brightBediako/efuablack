import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { MaterialSymbol } from "@/components/MaterialSymbol";
import { SiteNav } from "@/components/SiteNav";
import { defaultDescription } from "@/lib/site-config";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (slug !== "testify") return { title: "Song" };
  return {
    title: "Testify",
    description: `Lyrics, streaming, and story — ${defaultDescription}`,
  };
}

export default async function SongPage({ params }: Props) {
  const { slug } = await params;
  if (slug !== "testify") notFound();

  return (
    <>
      <SiteNav shell="song" active="music" />
      <main className="overflow-x-hidden pt-24 sm:pt-28">
        <section className="relative flex min-h-[min(716px,90dvh)] w-full items-center justify-center overflow-hidden md:h-[716px] md:min-h-0">
          <div className="absolute inset-0 bg-primary z-0">
            <img
              alt="Efua Black performing passionately on stage with soft purple spotlight and ethereal atmospheric smoke behind her"
              className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgf6OTpUztJ5lFRKRdSHEVz-FIRkE0z-1kTGdg5i6e-6bEAgivGy4nPi2A2SELHMRZHNLfSp44NyR3AF3Ruk_XTCq60mRlWTApZAYACJpICJ_Cp_S_H33L0xxaskCMGLHt-KTzQu7li_PPYlYs_XN1BQ54iOF5_zjG2MvrvFUDB-d_2fvKySOIWw-uKnehtNzTfPRNSlAQ5ezJ0ZZ0v-iJ5e6ok0SSLdtINzxVMOzHN8pCvBbWhpme6cLWA5Yi0WxH1ZFXZ3LIA24"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-primary/20" />
          </div>
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <span className="font-label text-sm uppercase tracking-[0.3em] text-secondary mb-4 block">
              New Release
            </span>
            <h1 className="mb-6 font-headline text-5xl font-bold italic tracking-tight text-on-primary-fixed sm:text-6xl md:text-8xl lg:text-9xl">
              Testify
            </h1>
            <p className="text-xl md:text-2xl font-headline italic text-on-surface-variant max-w-2xl mx-auto opacity-90">
              A soul-stirring anthem of grace, redemption, and the unwavering light that guides us through
              the shadows.
            </p>
          </div>
        </section>

        <div className="relative z-20 mx-auto -mt-16 max-w-screen-xl px-4 pb-24 sm:-mt-20 sm:px-6 md:-mt-24 md:px-12 md:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-12">
              <div className="aspect-video bg-surface-container-lowest rounded-xl shadow-2xl overflow-hidden group relative">
                <img
                  alt="Cinematic still from Testify music video showing light rays filtering through an old cathedral window"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdV6zNUCK5Lx5HZSm6V428vbKEa3vteE2txp9U5A3S0bWJGhP24-C-R3-jhZFfeIbEzhVPGeVw2xPAioJ49KJmE2hM0vUx6SrnFYnFdN3QpgK58C8P57SzDMlADGDn4tMJjgG-t29xfG9OWs62Ed1CAOv2r3vId7HjCfsubCP83kbG4w6ecQcWhcuWn6IgRzr9mFM9HP-EK4wxRCq43Jen78KoxNeFpdUTG476YoDXl7NKGtahFCBK1Lny7KJ4LsBaanqWiixNzJw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-primary/30 group-hover:bg-primary/40 transition-colors">
                  <div className="w-20 h-20 rounded-full bg-secondary text-on-secondary flex items-center justify-center cursor-pointer transform hover:scale-110 transition-transform shadow-lg">
                    <MaterialSymbol name="play_arrow" className="text-4xl" filled />
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-low p-10 md:p-14 rounded-xl">
                <h2 className="text-4xl font-headline italic mb-8 text-primary-container">
                  The Heart Behind the Song
                </h2>
                <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
                  <p>
                    Written during a season of profound reflection, &quot;Testify&quot; serves as a musical
                    testimony to the transformative power of faith. Efua Black blends her signature gospel
                    roots with a contemporary cinematic soundscape, creating a journey that is both intimate
                    and expansive.
                  </p>
                  <p>
                    The track features a lush orchestral arrangement paired with powerful choral backing,
                    emphasizing the communal aspect of worship and the personal joy of spiritual liberation.
                  </p>
                </div>
                <div className="mt-12 flex flex-wrap gap-4">
                  <button
                    type="button"
                    className="flex items-center gap-3 px-8 py-4 bg-primary text-on-primary rounded-full hover:bg-primary-container transition-all"
                  >
                    <MaterialSymbol name="music_note" />
                    <span className="font-label font-bold uppercase tracking-wider text-sm">Apple Music</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center gap-3 px-8 py-4 bg-surface-container-highest text-primary-container rounded-full hover:bg-surface-variant transition-all"
                  >
                    <MaterialSymbol name="podcasts" />
                    <span className="font-label font-bold uppercase tracking-wider text-sm">Spotify</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center gap-3 px-8 py-4 border-2 border-outline-variant text-primary rounded-full hover:bg-surface-container-high transition-all"
                  >
                    <MaterialSymbol name="download" />
                    <span className="font-label font-bold uppercase tracking-wider text-sm">Download</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-12">
              <div className="flex items-center justify-between p-6 bg-surface-container-lowest rounded-xl shadow-sm">
                <div className="flex items-center gap-4">
                  <button type="button" className="p-3 rounded-full hover:bg-secondary-container transition-colors group">
                    <MaterialSymbol name="share" className="text-outline group-hover:text-on-secondary-container" />
                  </button>
                  <button type="button" className="p-3 rounded-full hover:bg-error-container transition-colors group">
                    <MaterialSymbol name="favorite" className="text-outline group-hover:text-error" />
                  </button>
                  <button type="button" className="p-3 rounded-full hover:bg-tertiary-fixed transition-colors group">
                    <MaterialSymbol name="playlist_add" className="text-outline group-hover:text-primary" />
                  </button>
                </div>
                <span className="text-sm font-label text-outline uppercase tracking-widest">Share the Light</span>
              </div>
              <div className="bg-surface-container-low p-10 md:p-12 rounded-xl border-t-4 border-secondary">
                <div className="flex justify-between items-baseline mb-10">
                  <h3 className="text-3xl font-headline italic text-primary-container">Lyrics</h3>
                  <span className="font-label text-xs uppercase tracking-widest text-secondary font-bold">
                    Read &amp; Reflect
                  </span>
                </div>
                <div className="font-body text-lg leading-[2.2rem] text-on-surface-variant space-y-10">
                  <div>
                    <p className="mb-2 italic opacity-60 text-sm font-label tracking-widest uppercase">
                      Verse 1
                    </p>
                    <p>I was walking through the valley</p>
                    <p>Where the shadows felt like stone</p>
                    <p>Every whisper was a burden</p>
                    <p>And I felt so far from home</p>
                  </div>
                  <div className="font-semibold text-primary-container">
                    <p className="mb-2 italic opacity-60 text-sm font-label tracking-widest uppercase">
                      Chorus
                    </p>
                    <p>But then Your mercy called my name</p>
                    <p>And the fire put the dark to shame</p>
                    <p>Now I’ll stand upon the mountain high</p>
                    <p>And let my spirit testify</p>
                  </div>
                  <div>
                    <p className="mb-2 italic opacity-60 text-sm font-label tracking-widest uppercase">
                      Verse 2
                    </p>
                    <p>Every scar is now a story</p>
                    <p>Of a grace that set me free</p>
                    <p>In the silence of the morning</p>
                    <p>You were reaching out for me</p>
                  </div>
                  <div className="border-l-2 border-outline-variant pl-6 italic">
                    <p className="mb-2 opacity-60 text-sm font-label tracking-widest uppercase not-italic">
                      Bridge
                    </p>
                    <p>The world will see the wonders</p>
                    <p>Of a heart that’s been made whole</p>
                    <p>There’s a symphony of worship</p>
                    <p>Rising deep within my soul</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="mt-12 w-full py-4 border-b border-outline-variant text-center font-label text-sm uppercase tracking-[0.2em] text-secondary hover:text-primary transition-colors"
                >
                  Copy Lyrics
                </button>
              </div>
              <div className="px-6 py-8 bg-surface-container-lowest rounded-xl">
                <h4 className="font-label text-xs uppercase tracking-[0.2em] text-outline mb-4">Song Credits</h4>
                <ul className="space-y-3 text-sm text-on-surface-variant">
                  <li className="flex justify-between">
                    <span>Composer</span> <span className="font-bold">Efua Black</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Producer</span> <span className="font-bold">Gabriel Stone</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Backing Vocals</span> <span className="font-bold">The Grace Ensemble</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Release Date</span> <span className="font-bold">Nov 12, 2024</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-surface-container-low py-32">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12">
            <div className="flex justify-between items-end mb-16">
              <div>
                <span className="font-label text-secondary uppercase tracking-[0.3em] text-sm mb-2 block">
                  Exploration
                </span>
                <h2 className="text-5xl font-headline italic text-primary-container">More from the Ministry</h2>
              </div>
              <Link
                href="/music"
                className="text-secondary font-bold font-label text-sm uppercase tracking-widest hover:underline decoration-2 underline-offset-8"
              >
                View Discography
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-xl aspect-square">
                <img
                  alt="Album cover art featuring a golden sun rising over a purple ocean horizon with minimalist typography"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIbMZARVtyyG2d4ChQfpN7qhyxMLKCXBvFI7LlMiuzmUU2yCwuCUtu7zsj5hNVCT8QW9N44b_cz8JQOOHd5XS1qowGiLizgvvd_U7tvQg_diiKuVMkriZB4PJFg6ANgH82cEzXLHYmYH_RTu38eU_M-d7n1yXhbTWspTocjdeYvPACWYjo-Vlqww8eH4TJ65MyFJq7Hq0WCIYPy9cvDe0VZ9NmBWiyXUNxOujUMhRObWADyla8AVuqTZRM6i92L8PxTKp7iudte8g"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8">
                  <span className="text-secondary-fixed text-xs font-label uppercase tracking-widest mb-2">
                    Popular Single
                  </span>
                  <h3 className="text-3xl font-headline italic text-on-primary mb-4">The Morning Light</h3>
                  <button
                    type="button"
                    className="text-on-primary border border-on-primary/30 w-fit px-6 py-2 rounded-full text-xs font-label uppercase tracking-widest hover:bg-on-primary hover:text-primary transition-all"
                  >
                    Listen Now
                  </button>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl aspect-square">
                <img
                  alt="Abstract musical notation floating in a deep violet space with golden dust particles"
                  className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5XgUgRrYUsWE4UBsRMwPokkvSQ4G-nXPguHO0B6B-203XDODrGZcZWQ7rT-NTapJbb6YX5UjhRn52BizDCPAGGndMGhCvK7kU7d96Op7WdRzI5d9zaobRvf3sOdwplv5a0kpxdtg5n8hqlmA0RqBLkBlAnKAiH-C7QHuKPs71_y72u-IbvXj9tZp9a7jOfdeajgEoBHLREEvotVhJ0c_zBFOiFFIhuXESV2utX_2C6awTO53qZSrWsVPcYew3BSQgrvzn2G4r4VQ"
                />
                <div className="absolute inset-0 bg-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-on-primary font-headline italic text-xl">Grace Abounds</h3>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl aspect-square">
                <img
                  alt="Efua Black in a white flowing dress walking through a field of lavender at dusk"
                  className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX6sFSYWkktgaCvd3Q92XS4NJDfsuCkNssqj1W9ZsTd2dJvNN12rF9OhGEFbgnfcTavuAczjZ2IACF-6mYBSkehw6iT7aiMgc28wQmuxPR6d5Cwlqx2b5ydb-MNi4QrXv9ftyHS-stPHxFoLT_iQhF_YFnHFXL9YHw0_U1WXQ0BU040wVfBMmNBARoBX6tol3jN-oRqpGj_P2jsAEhswtej9fcY11V0fijW33_9pV1hG5Z9eYnwbUli5vfPLH9lkt2bECUsSnFVtU"
                />
                <div className="absolute inset-0 bg-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-on-primary font-headline italic text-xl">Sanctuary</h3>
                </div>
              </div>
              <div className="md:col-span-2 group relative overflow-hidden rounded-xl aspect-[2/1]">
                <img
                  alt="Live concert audience with hands raised towards a glowing stage in a dark auditorium"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC30nh4rNbi3TFsu66Yt45zFjfUpA52WwcpDN3tEV49MAwYqVqjfFgrnfKJOHaD-QTRNkuFS8JnPLXCPTfVOa3hql8inEWQnQOYFwsMlBKFjdRdlUFjmgmpEPn6ivPGd4wjgIMgyXtCqfX4HaNd9BbkXF8xcHiF4hSrleYSMQHS2c7tpcv85-7dIuHhyBBHlWZ3_tVVRSMM0hb_UG60U347W2hkTVIzFE3pt0UNsAZAhLOjz1GPfA-cdrw1R2-afplE1PJbx78uzjg"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex flex-col justify-center p-8">
                  <h3 className="text-2xl font-headline italic text-on-primary mb-2">Live in London</h3>
                  <p className="text-on-primary/60 text-sm max-w-xs mb-4">
                    Experience the full spiritual journey of our last tour.
                  </p>
                  <MaterialSymbol name="play_circle" className="text-secondary text-4xl" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
