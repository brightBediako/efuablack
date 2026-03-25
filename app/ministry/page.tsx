import type { Metadata } from "next";
import Link from "next/link";
import { FooterLegal } from "@/components/FooterLegal";
import { MaterialSymbol } from "@/components/MaterialSymbol";
import { SiteNav } from "@/components/SiteNav";
import { defaultDescription } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Ministry",
  description: `Devotionals, video ministrations, and outreach — ${defaultDescription}`,
};

export default function MinistryPage() {
  return (
    <>
      <SiteNav shell="ministry" active="ministry" />
      <main className="pt-24">
        <section className="relative h-[819px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Spiritual landscape"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuD1DvnaPCUdZSoE-s9fFQtmjFopHpV-3HN86mTQsjrKUKcrX3r0DrhG6dfevjxSnohoan6wA1VZE8GkhiBGDXT5AX-WGeB883NVIakYP-rUUmO-gIApjko52wfB_ZH8GLXJyR6yar4YS8j3Oa3gxF0_huzmblSY7KfiGTHbtIcBpgVksi9E2HQYQo9EAHvK7jVxtIUT8d3YtkCgPZ40KZBeQxCBgqoXP8S9JoX0XvsSEEzkxslwU2UNZ1RxXFHP-ciEuew45xSQI"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />
          </div>
          <div className="relative z-10 px-12 max-w-4xl mx-auto md:mx-0 md:ml-24">
            <h1 className="font-headline text-8xl md:text-9xl text-surface italic font-bold tracking-tighter -ml-4">
              Ministry
            </h1>
            <p className="mt-6 text-xl text-surface-variant font-light max-w-lg leading-relaxed">
              A sacred space where faith meets melody. Exploring the depths of the Word and the heights
              of worship as one community.
            </p>
            <div className="mt-10">
              <button
                type="button"
                className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-label text-sm uppercase tracking-widest hover:opacity-90 transition-all flex items-center gap-3"
              >
                Join Our Community
                <MaterialSymbol name="favorite" className="text-sm" />
              </button>
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
              <div>
                <span className="text-secondary font-label text-sm tracking-[0.2em] uppercase">
                  Spiritual Growth
                </span>
                <h2 className="font-headline text-5xl md:text-6xl text-primary mt-2 italic">
                  Devotionals &amp; Messages
                </h2>
              </div>
              <Link
                href="/contact"
                className="text-secondary font-label text-sm border-b border-secondary pb-1 tracking-widest uppercase"
              >
                View All Insights
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  tag: "Faith",
                  title: "Finding Peace in the Silence",
                  excerpt:
                    "How to cultivate a heart of worship when the world feels loud and overwhelming...",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBPLlOzjQgxOj-KeJHsG6McvMfc2CBRt6yiN2ensJHDy8f0HOSI1J4h1FjkJ3VP7n8CKBgl8o47bIvFv7b8eYf5Er1s6OSEY_Rkdy0nzefnKh0SY0VizgKXJp0kWAipVawfiYQJO7N2LqN1K3GpAhVfpgKcj6LS_Qlu3ochBbeHKHhZYOo9tgrWgE2lKP85RGhRbFG_mOop6hMmwSQw4-FS5XdqCncoZNze-HEP92tOsjMeLZvWHlfbv0htP7imRr9xdabiah8xdk",
                  alt: "Open Bible on a rustic wooden table next to a steaming cup of tea, soft morning light streaming through a window, serene atmosphere",
                },
                {
                  tag: "Hope",
                  title: "The Strength of a New Dawn",
                  excerpt:
                    "Exploring the promise of renewal and the grace that meets us at the break of every day...",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAA05MG2WVcyBsEe2RstHgqJHkaYkvaZmNpoyibDdMWEjOeyRoMCrhYJ5YQCdcmLAuqBvmzsfW3O5FHcyfoUdriSoBHUpFxiu7rOm6CeLFCkK3IPvh7IqfRn4nq4JiQm1CAzg5ADhevQ7wVyUiP_dnM4OAemxEiQVPuyIuaHcXx_pl5wPz1hSHuNluRi7CwvkuQV39EOndHZ5PUiiwKc3iLmbfrIvsMJB85ujxUbHwnQuxp8EOJ1I34Xc3XTqH_Lq2T2q-F6ILf4sI",
                  alt: "Sunlight piercing through a thick forest canopy, creating long god rays and highlighting mist, deep green and golden color palette",
                },
                {
                  tag: "Wisdom",
                  title: "Walking by Ancient Paths",
                  excerpt:
                    "Applying timeless biblical truths to the complexities of modern digital life...",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7Vff9COanETan2b5Q_WJjtTg2ALHEEqWI3nBYYPQQNXP0AhjlFUbdoJYflFcHpNNSOo-UD9e64BqyBVhQTqYun_5oSqjCC_Mz3G9DeNYneUg3bA0nHrdG__9P323gNmqWRTU50wf3VHWF25qVUkRydCO8bVwJJyD4HdLLn9cw9eFMFL2UwhAGjK1ej8OfkuNgXwzTZNGrxC2wGYaYuzwJ3bc2klec_QDps2Nn0qYSxxAmpQ3Fdx4fpEggRgCj_ndjqFRy89Dfw1U",
                  alt: "Close-up of ancient parchment with elegant handwritten script, warm lighting, shallow depth of field, focus on ink details",
                },
              ].map((d) => (
                <div key={d.title} className="group cursor-pointer">
                  <div className="aspect-[4/5] bg-surface-container-low overflow-hidden rounded-xl mb-6 relative">
                    <img alt={d.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={d.img} />
                    <div className="absolute top-4 left-4">
                      <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-label uppercase tracking-widest">
                        {d.tag}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-headline text-2xl text-primary italic">{d.title}</h3>
                  <p className="mt-3 text-on-surface-variant line-clamp-2">{d.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface-container-low px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-secondary font-label text-sm tracking-[0.2em] uppercase">
                Immersive Worship
              </span>
              <h2 className="font-headline text-5xl md:text-7xl text-primary mt-4 italic">Video Ministrations</h2>
            </div>
            <div className="relative group aspect-video bg-primary-container rounded-2xl overflow-hidden shadow-2xl">
              <img
                alt="Worship concert"
                className="w-full h-full object-cover opacity-60"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRCTmocROT7MVzH6F_0QAoCTETMkv_TfBuBaSQuEbJgN7-u3Ce01YftZLWp0m4_SkiscOAMzPmD4nNV6p2hl_eJL-lZ9djauLiZm7KOgtirM6QCRqIFWssPXDqgEmzHarCN_afjyZ1rsChO_0al1RgdFuqcRbm6YN2MTaig-SwWYB9_AjhcWnH_yLOY72UUAj_-35Nxtp4TJdxBb6q5sEvDAiR-one5GqkIx7l-X6c90Of2X1DINcDkCvZVwpS60Kl8jVx2emF41U"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-surface/20 backdrop-blur-md rounded-full flex items-center justify-center border border-surface/30 group-hover:scale-110 transition-transform cursor-pointer">
                  <MaterialSymbol name="play_arrow" className="text-surface text-5xl translate-x-1" filled />
                </div>
              </div>
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div>
                  <h4 className="text-surface font-headline text-3xl italic">The Sanctuary Session (Live)</h4>
                  <p className="text-surface-variant text-sm tracking-widest uppercase mt-2">
                    Duration: 45:12 • Filmed at The Cathedral of Grace
                  </p>
                </div>
                <span className="text-secondary-fixed bg-primary-container/80 px-4 py-2 rounded-full text-xs font-label tracking-widest uppercase">
                  Latest Release
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 bg-surface px-12 overflow-hidden">
          <div className="max-w-7xl mx-auto relative">
            <div className="absolute -top-16 -left-16 text-[15rem] font-serif text-tertiary-fixed opacity-30 select-none">
              “
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-secondary font-label text-sm tracking-[0.2em] uppercase">
                  Lives Transformed
                </span>
                <h2 className="font-headline text-5xl md:text-6xl text-primary mt-4 italic leading-tight">
                  Stories of Grace
                </h2>
                <p className="mt-8 text-on-surface-variant text-lg leading-relaxed">
                  The ministry is more than just Efua&apos;s voice; it&apos;s about the lives touched, the hearts
                  healed, and the communities strengthened through the power of worship and the Word.
                </p>
                <div className="mt-12 flex gap-4">
                  <button
                    type="button"
                    className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-high transition-colors"
                  >
                    <MaterialSymbol name="arrow_back" />
                  </button>
                  <button
                    type="button"
                    className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-high transition-colors"
                  >
                    <MaterialSymbol name="arrow_forward" />
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-surface-container-low p-12 rounded-2xl relative z-10">
                  <p className="text-2xl font-headline italic text-primary leading-relaxed">
                    &quot;Efua&apos;s ministry hasn&apos;t just been music to my ears; it&apos;s been medicine for my soul.
                    During my darkest seasons, her devotionals provided the anchor I needed to keep
                    going.&quot;
                  </p>
                  <div className="mt-10 flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-surface-container-highest">
                      <img
                        alt="User testimony"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6cdyVClz_ewtg1dxb9Q8O3hs2-7menjIeiN_sxmyZPZ8IFLFKKcWzfyjTPjZsyvvhitwkvKewTP5DoXzuNphf0Q4XppnSTnlDzP53-xflHlKp__fPKny3wlUal6rW02xuI_7rc7sljCBAAjw7Z-lsfSLRRosoyg6ln0L2UIssDm3ySObqjK2WbY5PSytB1c6HwnBu_jxuhKO59DYQBgXApXibaf1doXjGv2nw37OWdnwb7Wk2vvcIYHN8wQM3aV0BFb__fYVt2QQ"
                      />
                    </div>
                    <div>
                      <h5 className="font-bold text-primary">Sarah Jenkins</h5>
                      <p className="text-sm text-secondary font-medium">Community Member since 2021</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-full h-full bg-tertiary-fixed/30 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-primary text-surface px-12">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <span className="text-secondary-fixed font-label text-sm tracking-[0.2em] uppercase">Outreach</span>
              <h2 className="font-headline text-5xl md:text-7xl mt-4 italic">Healing Hands, Serving Hearts</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-4 h-auto md:h-[800px]">
              <div className="md:col-span-8 md:row-span-2 relative group overflow-hidden rounded-2xl">
                <img
                  alt="Orphanage visit"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2t-cy5emtotRnz90U5O0AZfKFg7nE2Bms4qsxj2DvidFogWAPhvmDUiSTJPy5q5cFTT9Uq3Tt5wN7Kk5_lsnvuS2ZL4nGF_YHv2_ddW2v3YXzhANGJIqALDF-hcBBy1TWz2-jfF8WhNqWFjsyhQljqhGaZNi5GaStU0itzufWsBBxLFKwcnUs6nV2nezuU9bLuRBJxiLKO6Bb4rk1Foov2A2F9cKm3vQ1en8pUNdTjU29FJYxFzl0HZCGC-4ZHiLlvj65QdQiVpQ"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 max-w-lg">
                  <h3 className="font-headline text-4xl italic mb-4">The Grace Orphanage Project</h3>
                  <p className="text-surface-variant font-light leading-relaxed">
                    Monthly visits focused on music therapy, spiritual guidance, and providing essential
                    needs to the children of St. Mary&apos;s Home.
                  </p>
                </div>
              </div>
              <div className="md:col-span-4 md:row-span-1 relative group overflow-hidden rounded-2xl">
                <img
                  alt="Food drive"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBTBSqJ6jxrRKRrhMiT1kr0CgzA0dXBhhCTa_wMYvglhlZsF7cH-H-HtLE9U80CA3TSqqoRqvyNboyMjH-ufRe47nPdol-7J9VHO5RDINcoNxlQ2QrIPSWKqYBUbQXNAxgdLwrV9KatodhsQLPUsx2bf7jWWTnT-rBv4xR6HdCDh4uaO9i8JYZ_4pzzVdyGQb0azq7-P7u0bnn4oxnPybu22sD3Yt3Jh5TPCf7v91VVPMAZKiBXugqEMLofjoo7eTpCJUSqr7JEcE"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h4 className="font-headline text-2xl italic">Manna Missions</h4>
                </div>
              </div>
              <div className="md:col-span-4 md:row-span-1 relative group overflow-hidden rounded-2xl">
                <img
                  alt="Holding hands"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0mF4yybP6AucQfdl4gdO4048WocnGiQPgPVWdjXdIR86Y0-XncDLkbh3Bx39ez-_HHcusmnfP1532tVi-3wnu2qqXyPHUuv2lfsPO_KPL0cFYIqDKkHfD_Pjqu7Tjj_tkPngA7FqSZ4awRkewuUaBuj5XeUr1TsnonfTGYdo-jVG31KpcJQ5DPwra26cau6D_UHYkYSChBc30MBf10052tqQl03ZXXGO-Teex2AcxwyTdKHi-g-_WVd30PYzmFZW1_XBrqobKkKc"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h4 className="font-headline text-2xl italic">Healing Melodies</h4>
                </div>
              </div>
            </div>
            <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-surface/10 pt-12">
              <p className="text-xl italic font-headline text-surface-variant max-w-xl">
                &quot;Pure religion and undefiled before God and the Father is this, to visit the fatherless and
                widows in their affliction.&quot;
              </p>
              <button
                type="button"
                className="bg-surface text-primary px-10 py-5 rounded-full font-label text-sm uppercase tracking-widest hover:bg-secondary-fixed transition-colors"
              >
                Support Our Outreach
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#f7f2f8] dark:bg-[#1a0a25] w-full pt-20 pb-10">
        <div className="flex flex-col items-center justify-center gap-8 px-8 w-full max-w-screen-2xl mx-auto">
          <div className="font-serif text-3xl italic text-[#320b44] dark:text-[#eedbff]">Efua Black Ministry</div>
          <FooterLegal />
          <div className="flex gap-6 mt-4">
            <Link
              href="/contact"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-surface text-primary hover:text-secondary transition-colors shadow-sm"
              aria-label="Share"
            >
              <span className="material-symbols-outlined text-lg">share</span>
            </Link>
            <a
              href="mailto:management@efuablack.com"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-surface text-primary hover:text-secondary transition-colors shadow-sm"
              aria-label="Email"
            >
              <span className="material-symbols-outlined text-lg">mail</span>
            </a>
            <Link
              href="/contact"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-surface text-primary hover:text-secondary transition-colors shadow-sm"
              aria-label="Updates"
            >
              <span className="material-symbols-outlined text-lg">rss_feed</span>
            </Link>
          </div>
          <p className="font-sans text-xs tracking-widest uppercase text-[#320b44] opacity-40 mt-8 dark:text-[#eedbff]">
            © 2024 Efua Black Ministry. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
