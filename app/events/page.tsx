import type { Metadata } from "next";
import Link from "next/link";
import { FooterLegal } from "@/components/FooterLegal";
import { MaterialSymbol } from "@/components/MaterialSymbol";
import { SiteNav } from "@/components/SiteNav";
import { defaultDescription } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Events",
  description: `Upcoming worship gatherings and ministry events — ${defaultDescription}`,
};

export default function EventsPage() {
  return (
    <>
      <SiteNav shell="events" active="events" />
      <main className="pt-32 pb-24">
        <header className="px-12 max-w-screen-2xl mx-auto mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-label text-sm uppercase tracking-[0.3em] text-secondary mb-4 block">
                Upcoming Gatherings
              </span>
              <h1 className="font-serif text-7xl md:text-9xl italic font-bold text-primary-container -ml-1">
                Events
              </h1>
            </div>
            <div className="max-w-md">
              <p className="font-body text-lg text-on-surface-variant leading-relaxed">
                Join us in atmosphere of worship and divine encounter. Every gathering is an intentional
                space for the soul to find its melody.
              </p>
            </div>
          </div>
        </header>

        <section className="px-12 max-w-screen-2xl mx-auto mb-32">
          <div className="relative bg-surface-container-low rounded-xl overflow-hidden min-h-[600px] flex items-center group">
            <div className="absolute inset-0 z-0">
              <img
                alt="Worship Concert"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdRNgrudNpMXyJfLmo3G7IDxcLC74N-pvh5X0jFIz_GLdC02-1Qo_2Fakr7ETu6FA2WFfr-GyK7yzm1mmtpg9usvQvv6EoXbpXMA42tHQokTiH2cJ02ar4smkhIlxyMWNlP4SHbMCuHJ8InusRMmJrbNcoHe1OAyHU2ePFFy1sZhdpcDEJJmueRCnxEsr90D8SGY6vDUJgIiPtZ3IzyagsoJXC1iehQl3K5hSQlIYTajc4aOF0vzdXJDsdQkerZPzswyyXOTfj9kA"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low via-surface-container-low/80 to-transparent" />
            </div>
            <div className="relative z-10 p-12 md:p-24 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full mb-8">
                <MaterialSymbol name="star" className="text-sm" filled />
                <span className="font-label text-xs font-bold uppercase tracking-widest">Featured Event</span>
              </div>
              <h2 className="font-serif text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
                The Midnight Cry: Global Worship Night
              </h2>
              <p className="font-body text-xl text-on-surface-variant mb-10 leading-relaxed">
                A dedicated night of intercession and prophetic worship. Join Efua Black and the ministry
                team for an unforgettable encounter with the Divine.
              </p>
              <div className="flex flex-wrap gap-12 mb-12">
                <div>
                  <span className="block font-label text-xs uppercase tracking-widest text-outline mb-1">
                    Date
                  </span>
                  <span className="font-serif text-2xl italic text-primary">December 24, 2024</span>
                </div>
                <div>
                  <span className="block font-label text-xs uppercase tracking-widest text-outline mb-1">
                    Venue
                  </span>
                  <span className="font-serif text-2xl italic text-primary">The Cathedral of Grace</span>
                </div>
              </div>
              <button
                type="button"
                className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-5 rounded-lg font-label font-bold tracking-widest uppercase hover:opacity-90 transition-all flex items-center gap-4"
              >
                Secure Access
                <MaterialSymbol name="arrow_forward" />
              </button>
            </div>
          </div>
        </section>

        <section className="px-12 max-w-screen-2xl mx-auto mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-surface-container-high p-10 rounded-xl flex flex-col justify-between min-h-[400px]">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="text-left">
                    <span className="font-serif text-5xl italic font-bold text-secondary">15</span>
                    <span className="block font-label text-sm uppercase tracking-widest text-on-surface-variant">
                      Nov 2024
                    </span>
                  </div>
                  <span className="font-label text-xs font-bold uppercase tracking-widest text-on-secondary-container bg-secondary-container/30 px-3 py-1 rounded">
                    London, UK
                  </span>
                </div>
                <h3 className="font-serif text-4xl font-bold text-primary mb-4">
                  Sovereign Grace Tour: Opening Night
                </h3>
                <p className="font-body text-on-surface-variant max-w-md">
                  An intimate evening of storytelling and psalms at the historic Tabernacle Hall. Limited
                  seating available for this spiritual journey.
                </p>
              </div>
              <div className="pt-8">
                <a className="text-secondary font-label font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all" href="#">
                  View Details <MaterialSymbol name="chevron_right" />
                </a>
              </div>
            </div>
            <div className="bg-surface-container-low p-10 rounded-xl flex flex-col justify-between border-b-4 border-secondary/20">
              <div>
                <div className="mb-8">
                  <span className="font-serif text-5xl italic font-bold text-primary-container">02</span>
                  <span className="block font-label text-sm uppercase tracking-widest text-on-surface-variant">
                    Dec 2024
                  </span>
                </div>
                <h3 className="font-serif text-3xl font-bold text-primary mb-4">Worship &amp; The Word Workshop</h3>
                <p className="font-body text-on-surface-variant">
                  A specialized session for ministry leaders and worship teams on the theology of song.
                </p>
              </div>
              <div className="pt-8">
                <a className="text-secondary font-label font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all" href="#">
                  Register <MaterialSymbol name="chevron_right" />
                </a>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-xl flex flex-col justify-between shadow-sm">
              <div>
                <div className="mb-8">
                  <span className="font-serif text-5xl italic font-bold text-primary-container">12</span>
                  <span className="block font-label text-sm uppercase tracking-widest text-on-surface-variant">
                    Jan 2025
                  </span>
                </div>
                <h3 className="font-serif text-3xl font-bold text-primary mb-4">New Year Revival Gathering</h3>
                <p className="font-body text-on-surface-variant">
                  Starting the year with consecration. A morning of deep spiritual alignment and community
                  prayer.
                </p>
              </div>
              <div className="pt-8">
                <a className="text-secondary font-label font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all" href="#">
                  Learn More <MaterialSymbol name="chevron_right" />
                </a>
              </div>
            </div>
            <div className="md:col-span-2 relative bg-primary text-on-primary rounded-xl overflow-hidden flex flex-col md:flex-row min-h-[400px]">
              <div className="p-10 flex flex-col justify-between flex-1 relative z-10">
                <div>
                  <div className="mb-8">
                    <span className="font-serif text-5xl italic font-bold text-tertiary-fixed">20</span>
                    <span className="block font-label text-sm uppercase tracking-widest opacity-60">Feb 2025</span>
                  </div>
                  <h3 className="font-serif text-4xl font-bold mb-4">Lagos Gospel Fest</h3>
                  <p className="opacity-80 max-w-sm">
                    Returning home for the largest gospel gathering in West Africa. A celebration of faith
                    and African heritage.
                  </p>
                </div>
                <div className="pt-8">
                  <a className="text-secondary-fixed font-label font-bold uppercase tracking-widest flex items-center gap-2" href="#">
                    Event Map <MaterialSymbol name="location_on" />
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2 min-h-[250px] relative">
                <img
                  alt="Map Location"
                  className="w-full h-full object-cover opacity-60 grayscale"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCM1vX4SANBy23RNGRFlo4_wnjauOLSG8uCGkg5I25wKtUf0lexZS69hqXDCBsDwrlQTMo6a_SRiPQm7FfGqOSPP2v40F8sDiE0oqCdg5aea0NwICqNcOXn9YYpMWSYRF9LAK5ONOI2bHVywieS3KjEMag82jNcYtkRFogbHB5J_T-wzICtOQ9v_YJgHVxeT-hxOJuSAabE2PgGgSjLNhwH07LxQJOCPS0kO43USl9QFvNUwWUOmOk74ze9re9aazOv2Wpfc1zz6c"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary" />
              </div>
            </div>
          </div>
        </section>

        <section className="px-12 max-w-screen-2xl mx-auto">
          <div className="bg-tertiary-fixed p-16 md:p-24 rounded-xl text-center flex flex-col items-center">
            <MaterialSymbol name="auto_awesome" className="text-6xl text-primary mb-8" filled />
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-primary mb-8 italic">
              Invite Efua to Minister
            </h2>
            <p className="font-body text-xl text-on-tertiary-fixed-variant max-w-2xl mb-12 leading-relaxed">
              Bring the atmosphere of heaven to your city, church, or event. We are currently reviewing
              invitations for the 2025 Ministry Season.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/booking"
                className="bg-primary text-on-primary px-12 py-5 rounded-lg font-label font-bold tracking-widest uppercase hover:bg-primary-container transition-all text-center"
              >
                Request Booking
              </Link>
              <Link
                href="/contact?topic=media-kit"
                className="border-2 border-primary text-primary px-12 py-5 rounded-lg font-label font-bold tracking-widest uppercase hover:bg-primary hover:text-on-primary transition-all text-center"
              >
                View Media Kit
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full pt-20 pb-10 bg-[#f7f2f8] dark:bg-[#1a0a25]">
        <div className="flex flex-col items-center justify-center gap-8 px-8 w-full">
          <div className="font-serif text-3xl italic text-[#320b44] dark:text-[#eedbff]">Efua Black</div>
          <FooterLegal />
          <div className="mt-8 opacity-40 text-xs font-sans tracking-widest uppercase text-[#320b44] dark:text-[#eedbff]">
            © 2024 Efua Black Ministry. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
