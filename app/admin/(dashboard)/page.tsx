import { connectDB } from "@/lib/db";
import { Booking } from "@/models/Booking";
import { Contact } from "@/models/Contact";
import { Event } from "@/models/Event";
import { Media } from "@/models/Media";
import { Music } from "@/models/Music";
import { Subscriber } from "@/models/Subscriber";
import { MaterialSymbol } from "@/components/MaterialSymbol";
import { AdminCard } from "@/components/admin/AdminCard";
import { AdminSectionHeader } from "@/components/admin/AdminSectionHeader";

export const dynamic = "force-dynamic";

function StatCard({ label, count, icon }: { label: string; count: number; icon: string }) {
  return (
    <AdminCard className="p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <p className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant">
            {label}
          </p>
          <p className="font-headline text-4xl tabular-nums text-primary">{count}</p>
        </div>
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary/20 text-secondary ring-1 ring-secondary/30">
          <MaterialSymbol name={icon} className="text-2xl" filled />
        </span>
      </div>
    </AdminCard>
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
    <div className="space-y-6">
      <AdminSectionHeader
        title="Overview"
        subtitle="Submissions stored in MongoDB."
        icon="dashboard"
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard label="Bookings" count={bookings} icon="event_available" />
        <StatCard label="Contacts" count={contacts} icon="mail" />
        <StatCard label="Subscribers" count={subscribers} icon="groups" />
        <StatCard label="Music" count={music} icon="music_note" />
        <StatCard label="Events" count={events} icon="event" />
        <StatCard label="Media" count={media} icon="photo_library" />
      </div>
    </div>
  );
}
