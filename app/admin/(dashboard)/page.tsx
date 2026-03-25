import { connectDB } from "@/lib/db";
import { Booking } from "@/models/Booking";
import { Contact } from "@/models/Contact";
import { Event } from "@/models/Event";
import { Media } from "@/models/Media";
import { Music } from "@/models/Music";
import { Subscriber } from "@/models/Subscriber";

export const dynamic = "force-dynamic";

function StatCard({ label, count }: { label: string; count: number }) {
  return (
    <div className="rounded-xl border border-outline-variant/50 bg-surface-container-low p-6 shadow-sm">
      <p className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant">{label}</p>
      <p className="mt-2 font-headline text-4xl tabular-nums text-primary">{count}</p>
    </div>
  );
}

export default async function AdminOverviewPage() {
  await connectDB();
  const [bookings, contacts, subscribers, music, events, media] = await Promise.all([
    Booking.countDocuments(),
    Contact.countDocuments(),
    Subscriber.countDocuments(),
    Music.countDocuments(),
    Event.countDocuments(),
    Media.countDocuments(),
  ]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-3xl text-primary">Overview</h1>
        <p className="mt-1 font-body text-on-surface-variant">Submissions stored in MongoDB.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard label="Bookings" count={bookings} />
        <StatCard label="Contacts" count={contacts} />
        <StatCard label="Subscribers" count={subscribers} />
        <StatCard label="Music" count={music} />
        <StatCard label="Events" count={events} />
        <StatCard label="Media" count={media} />
      </div>
    </div>
  );
}
