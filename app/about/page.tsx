import type { Metadata } from "next";
import Link from "next/link";
import { FooterLegal } from "@/components/FooterLegal";
import { MaterialSymbol } from "@/components/MaterialSymbol";
import { SiteNav } from "@/components/SiteNav";
import { defaultDescription } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: `Biography, collaborations, and ministry — ${defaultDescription}`,
};

export default function AboutPage() {
  return (
    <>
      <SiteNav shell="about" active="about" />
      <main className="pt-20">
        <header className="relative min-h-[819px] flex items-center overflow-hidden px-8 md:px-24 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="z-10 relative">
              <span className="font-label text-secondary uppercase tracking-[0.3em] mb-4 block">
                The Soul Behind the Sound
              </span>
              <h1 className="text-6xl md:text-8xl font-serif italic text-primary leading-tight -ml-1">
                About Efua Black
              </h1>
              <p className="mt-8 text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed font-body">
                A voice seasoned with grace, a heart anchored in worship. Efua Black is more than an
                artist; she is a vessel of divine storytelling.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-surface-container-low overflow-visible rounded-xl">
                <img
                  alt="Elegant portrait of Efua Black with a serene expression, soft lighting, warm purple and gold studio background"
                  className="w-full h-full object-cover rounded-xl shadow-2xl relative z-10 scale-105 md:translate-x-4 md:-translate-y-4"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_sLjLLSgdj-2ReUt1rSTMush2efTTTbbrNksUE3vLNjUetVF7o4xK0dnPm4C-JMB1deyHDaU6h8T6c-OM_vt1XNpESWCC3XRD9WiJ2rlEwdfP72pvUjauMoDpMaCmsJPYKx76SAq292Y-omRwjL7RbqNUXDomIw-u1k5zFGPw-Qv1KQemm0VqQwzh7BW7BTxsrcnvY_P_0ivsLKfNmIvJKnrqcarodoYGhoYn7xN4GC9QnXrX3V72klyvwUuNJCmeAxQvdadjnBg"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-tertiary-fixed rounded-full blur-3xl opacity-40 -z-0" />
            </div>
          </div>
        </header>

        <section className="py-32 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8 md:px-24">
            <div className="grid md:grid-cols-12 gap-16">
              <div className="md:col-span-5">
                <h2 className="text-4xl md:text-5xl font-serif italic text-primary-container leading-tight sticky top-32">
                  The Sacred Call: A Journey of Faith
                </h2>
              </div>
              <div className="md:col-span-7 space-y-12">
                <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed font-body">
                  <p>
                    Born into a lineage of worshippers, Efua&apos;s journey began in the humble pews of
                    her childhood church. It wasn&apos;t just the melody that captured her, but the
                    transformative power of the Message behind the music. Her faith is the foundation
                    upon which every note is built.
                  </p>
                  <p>
                    Over the past decade, she has navigated the complexities of the modern music
                    industry without compromising the purity of her ministry. Her music career has been
                    a testament to patience and divine timing, evolving from local praise leader to a
                    globally recognized voice in contemporary Gospel.
                  </p>
                  <div className="p-8 bg-surface-container-lowest rounded-xl border-l-4 border-secondary shadow-sm">
                    <p className="italic font-serif text-2xl text-primary leading-relaxed">
                      &quot;I don&apos;t sing to be heard; I sing so that He can be known. Every performance is
                      an altar.&quot;
                    </p>
                  </div>
                  <p>
                    From the intimate settings of small-town revivals to the grand stages of
                    international festivals, Efua maintains a singular focus: to usher listeners into a
                    personal encounter with the Divine. Her songwriting reflects the raw, honest dialogue
                    of a soul in pursuit of its Creator.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 bg-surface">
          <div className="max-w-7xl mx-auto px-8 md:px-24">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
              <h2 className="text-4xl font-serif text-primary">Notable Collaborations</h2>
              <div className="h-px flex-grow mx-8 bg-outline-variant opacity-30 hidden md:block" />
              <span className="font-label text-on-surface-variant uppercase tracking-widest text-sm">
                Harmonizing with Spirits
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Minister David G.",
                  sub: 'Single: "Holy Ground"',
                  body: "A powerful atmospheric worship collaboration that topped gospel charts for twelve weeks.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQ4iF-LjxuFSmq5nbnK2MUjr3Lx1T8-ejv4XU-R7D2sr3JRCufX_583lcUMug8fRHKeL9iq7DJel6Fv4amvVBm-yoyMloSCMn1KsjUtdC48owM-qO-klOHpg5X0kUnL9p9G1yn5_Yz3VfIDIJHwVCtMlD0mTaG5DcUKAok5eabCy5xlnzknSR56nWoB-8fz1lwyOcZ96tL5c9TMSUEX45mCT-xV9KmVvURS2_1bKpUzxDSgs5Guq-DiLm8L7_4i_yj4DPdm4uKHZ0",
                },
                {
                  title: "The Grace Choir",
                  sub: 'Album: "Voices of Zion"',
                  body: "Lending her signature mezzo-soprano to the lead tracks of the year's most acclaimed choral project.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuASxyCbKJoMFifAeMhYHFL6omqgMlsKskhKzidzlhlXK2bSEEQgY58IpnJUQ3zjzOoJHP3LPjh5HiT4ZJKMNIctrMn0rKeBxHFQPxPZi1o_cWUHFyMgd7rI12JqPYnIIM3PKf39-2IFJ8bfZK7NoaMLsIhTSEpZAzUU6rjivk9mRSPuyMsUZGlYVN2u4aln4FEqnnUwnzF51i7reoc4zHpHrq_N9PuJVh9KuwP5blRyGOggOe1ZDPmeltVX3VEpXTHbFynRrpwbvD0",
                },
                {
                  title: "Sarah J. Worship",
                  sub: 'Live Concert: "The Awakening"',
                  body: "A memorable duet that defined the worship experience for thousands at the National Cathedral.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkrWnPcw_P6ljBHkpHkwPihoAl0J9RIXoHeNlGQfLTNcuMk90QYcTXeGOKQefFhUupBWrS7insYkvdAHzUhxnU7_ddH4xN9vahRjHZIXa-qR3LNsDRusG51OuB0Pm7ohsBoFBs_J7i7ylVNx5rYuqrzDHiu02pFlm_0uUC-cuVnFniajpOq10z_UaAtwc-v7hPHKFW0dRIc0OEkO2_l4-GUpUMpysQhTAPJRV80izcjkRcI-rliLXLPrXnZgqf5fgQJ4rk9VbhRro",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="group relative bg-surface-container-high p-8 rounded-xl transition-all duration-500 hover:bg-primary-container hover:-translate-y-2"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-outline-variant">
                      <img alt="" className="w-full h-full object-cover" src={c.img} />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-primary group-hover:text-tertiary-fixed transition-colors">
                        {c.title}
                      </h3>
                      <p className="text-sm font-label text-on-surface-variant group-hover:text-on-primary-container transition-colors">
                        {c.sub}
                      </p>
                    </div>
                  </div>
                  <p className="text-on-surface-variant group-hover:text-white/80 transition-colors leading-relaxed">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 bg-surface-container-low overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 md:px-24">
            <h2 className="text-5xl font-serif italic text-primary mb-12 text-center md:text-left">
              Captured Moments
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[800px]">
              <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-xl">
                <img
                  alt="Efua Black performing on a grand stage with cinematic lighting and a silhouette of the audience"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSw5iP5xKzFKi71p3bMZVT5qy3q7_HoQObhTH6Kzb8w2JGwnFhyfVQZVCwPLEgc0A9lbRpMBAIJoFq9k5Yp_wEJSvF-jiX_B1UNp4tWJPvftYArDBd2wyUREO1werxXPswFkxOxmrZ3iHoUcl71HGbSfGTyO3lxwAAle7ywGsBugKtRPnXkGhBqnb_9XFUqiuKvONEDAN-82R0YjPbrU6BqlxcbV--FyofmgyPdOe8f7Ahr78qmO0Eo7dxNmnrFaYhy7wFFlnMcAA"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <p className="text-white font-serif italic text-xl">Live at the National Stadium</p>
                </div>
              </div>
              <div className="col-span-2 row-span-1 relative group overflow-hidden rounded-xl">
                <img
                  alt="Candid photo of Efua Black laughing in a recording studio with headphones around her neck"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCt7mroo2bzmcjpC-xR0zF94Apn3GFIL_2DDkMjIXE6UER9niUjmjE1n1427GLIZGSaGXKJnlTaIfC6UqaRighylj45IhiyQ-y6B6tsMxkESfuekM_Jpn28jgBsiGw6KiwXghh-BJmYpPKdvb0E4FOS8MbVzo3P7QmE2wQcgJCOOeOwPKtc4oQYhvNm-qOca4TEqPALdXKqW7WF7qOVxaLAuTsuElEgnkmzBZaGIPhRY4WT5grgK-DFjCZz38DDCj4lHjCcibU2bAI"
                />
              </div>
              <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-xl">
                <img
                  alt="Close up of Efua's hands resting on a piano keyboard with warm sunlight streaming through a window"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvjhToKGQhuxjotznJFhid4ytLe3aDgLrmczbWKhoh4Wyou7pHxMR1dukDbv-c9msHYcQQ810yoJcIBlZyD_oxz0GCyrWw-Lmd_eRFthWescGDWSO6jIbHVCmrnxlRBhjEBd6fcigQQSyxmsTMlnogsnvODPsqciGfLzv4Z5tf1HjCPmoPnFjXL6mQdLX4EuQi8hq0q1KJrisI2wSdISV-o6qiqguFRp2_GEJDjTk_xEEBNrZJVyXBJ4mlyLU0wmdEJ74LDDUQ4Jo"
                />
              </div>
              <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-xl">
                <img
                  alt="A textured close up of a vintage bible and a gold cross pendant on a dark surface"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoYDMFpNDHiXOT1NzP-hP_ngpCKTb3IdhMykvoqbBP4RIR4hy5OjQOgP_mtbE8GgM9ZV4e2rs9cTV3wujreC_t8NNppHfj0Gs7QmVyXKIM_IWBmub5tohMoJCUz3iuT3UtXR79-vuHIPuJErm_-8nSneAZwI4KyQEXhFJ7R8GiXvNTTBXlSZ3MJvVrHXUxoDl6f96h0uepPrQ4Q-4FKxQW7XWaulb49dPlcEjcIJWO3KFgl3xPnZ6iWygd1mkFMkyDuNxmTp1vo4"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-40 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-on-primary-container via-transparent to-transparent" />
          </div>
          <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-serif italic text-tertiary-fixed mb-8 leading-tight">
              Bring the Ministry to Your Sanctuary
            </h2>
            <p className="text-lg md:text-xl text-on-primary opacity-80 mb-12 font-body max-w-2xl mx-auto">
              Whether it&apos;s a worship night, a conference, or a personal ministry session, Efua is
              dedicated to bringing a presence-centered experience to your event.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link
                href="/booking"
                className="px-10 py-5 bg-gradient-to-r from-primary to-primary-container border border-secondary text-secondary-fixed font-label uppercase tracking-widest hover:bg-secondary-container hover:text-on-secondary-container transition-all duration-300 rounded-lg"
              >
                Book Efua for Ministry
              </Link>
              <Link
                href="/contact?topic=media-kit"
                className="px-10 py-5 text-on-primary font-label uppercase tracking-widest hover:text-secondary-fixed transition-colors"
              >
                Download Media Kit
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#f7f2f8] w-full pt-20 pb-10">
        <div className="flex flex-col items-center justify-center gap-8 px-8 w-full max-w-screen-2xl mx-auto">
          <div className="font-serif text-3xl italic text-[#320b44]">Efua Black</div>
          <FooterLegal />
          <div className="flex gap-6 mt-4">
            <Link href="/music" className="text-[#320b44] opacity-60 hover:opacity-100 transition-opacity" aria-label="Music">
              <MaterialSymbol name="music_note" />
            </Link>
            <Link href="/contact" className="text-[#320b44] opacity-60 hover:opacity-100 transition-opacity" aria-label="Contact">
              <MaterialSymbol name="share" />
            </Link>
            <a
              href="mailto:management@efuablack.com"
              className="text-[#320b44] opacity-60 hover:opacity-100 transition-opacity"
              aria-label="Email"
            >
              <MaterialSymbol name="mail" />
            </a>
          </div>
          <div className="mt-8 text-[#320b44] opacity-60 font-sans text-xs tracking-widest">
            © 2024 Efua Black Ministry. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
