import type { Metadata } from "next";
import Link from "next/link";
import { EventRegistrationForm } from "@/components/events/EventRegistrationForm";
import { SiteFooter } from "@/components/SiteFooter";
import { MaterialSymbol } from "@/components/MaterialSymbol";
import { SiteNav } from "@/components/SiteNav";
import { connectDB } from "@/lib/db";
import { defaultDescription } from "@/lib/site-config";
import { EventRegistration } from "@/models/EventRegistration";
import { listEvents } from "@/services/eventService";

export const metadata: Metadata = {
  title: "Events",
  description: `Upcoming worship gatherings and ministry events — ${defaultDescription}`,
};

export default async function EventsPage() {
  const events = await listEvents();
  await connectDB();
  const registrationCounts = await EventRegistration.aggregate<{ _id: string; count: number }>([
    { $group: { _id: "$eventId", count: { $sum: 1 } } },
  ]);
  const countByEvent = new Map<string, number>(
    registrationCounts.map((item) => [String(item._id), item.count]),
  );
  const [featured, ...upcoming] = events;

  return (
    <>
      <SiteNav shell="events" active="events" />
      <main className="px-4 pb-24 pt-28 sm:px-6 sm:pt-32 md:px-8">
        <header className="mx-auto mb-12 max-w-screen-2xl sm:mb-20 md:px-4 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-label text-sm uppercase tracking-[0.3em] text-secondary mb-4 block">
                Upcoming Gatherings
              </span>
              <h1 className="font-serif text-4xl font-bold italic text-primary-container sm:text-6xl md:text-8xl lg:text-9xl">
                Events
              </h1>
            </div>
            <div className="max-w-md">
              <p className="font-body text-lg text-on-surface-variant leading-relaxed">
                Join us in atmosphere of worship and divine encounter. Every
                gathering is an intentional space for the soul to find its
                melody.
              </p>
            </div>
          </div>
        </header>

        <section className="max-w-screen-2xl mx-auto mb-20 px-0 sm:px-4 md:px-8 lg:px-12 sm:mb-24 md:mb-32">
          {featured ? (
            <div className="relative bg-surface-container-low rounded-xl overflow-hidden min-h-[520px] flex items-center group">
              <div className="absolute inset-0 z-0">
                <img
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40"
                  src={featured.coverPicture}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low via-surface-container-low/80 to-transparent" />
              </div>
              <div className="relative z-10 w-full max-w-3xl p-5 sm:p-8 md:p-16 lg:p-24">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-secondary-container text-on-secondary-container rounded-full mb-5 sm:mb-8">
                  <MaterialSymbol name="star" className="text-sm" filled />
                  <span className="font-label text-xs font-bold uppercase tracking-widest">
                    Featured Event
                  </span>
                </div>
                <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-primary mb-4 sm:mb-6 leading-tight break-words">
                  {featured.title}
                </h2>
                <p className="font-body text-base sm:text-lg md:text-xl text-on-surface-variant mb-6 sm:mb-8 leading-relaxed break-words">
                  {featured.description}
                </p>
                <div className="grid grid-cols-1 gap-4 sm:gap-8 mb-6 sm:grid-cols-2">
                  <div className="min-w-0">
                    <span className="block font-label text-xs uppercase tracking-widest text-outline mb-1">
                      Date
                    </span>
                    <span className="font-serif text-xl sm:text-2xl italic text-primary break-words">
                      {featured.eventDate}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <span className="block font-label text-xs uppercase tracking-widest text-outline mb-1">
                      Venue
                    </span>
                    <span className="font-serif text-xl sm:text-2xl italic text-primary break-words">
                      {featured.location}
                    </span>
                  </div>
                </div>
                <p className="font-label text-xs uppercase tracking-widest text-outline">
                  {countByEvent.get(String(featured._id)) ?? 0} Registrations
                </p>
                <EventRegistrationForm eventId={String(featured._id)} eventTitle={featured.title} />
              </div>
            </div>
          ) : (
            <div className="rounded-xl bg-surface-container-low p-10 text-center text-on-surface-variant">
              No events have been published yet. Check back soon.
            </div>
          )}
        </section>

        {upcoming.length > 0 ? (
          <section className="max-w-screen-2xl mx-auto mb-24 px-0 sm:px-4 md:px-8 lg:px-12">
            <h3 className="mb-6 font-serif text-3xl italic text-primary">More Upcoming Events</h3>
            <div className="grid gap-8 md:grid-cols-2">
              {upcoming.map((event) => (
                <article key={String(event._id)} className="rounded-xl bg-surface-container-low p-5 sm:p-8">
                  <h4 className="font-serif text-2xl sm:text-3xl text-primary break-words">{event.title}</h4>
                  <p className="mt-3 text-on-surface-variant break-words">{event.description}</p>
                  <p className="mt-4 text-sm uppercase tracking-widest text-outline break-words">
                    {event.eventDate} • {event.location}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-widest text-outline">
                    {countByEvent.get(String(event._id)) ?? 0} Registrations
                  </p>
                  <EventRegistrationForm eventId={String(event._id)} eventTitle={event.title} />
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <section className="px-12 max-w-screen-2xl mx-auto">
          <div className="bg-tertiary-fixed p-16 md:p-24 rounded-xl text-center flex flex-col items-center">
            <MaterialSymbol
              name="auto_awesome"
              className="text-6xl text-primary mb-8"
              filled
            />
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-primary mb-8 italic">
              Invite Efua to Minister
            </h2>
            <p className="font-body text-xl text-on-tertiary-fixed-variant max-w-2xl mb-12 leading-relaxed">
              Bring the atmosphere of heaven to your city, church, or event. We
              are currently reviewing invitations for the 2025 Ministry Season.
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

      <SiteFooter />
    </>
  );
}
