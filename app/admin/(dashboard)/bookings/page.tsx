import { connectDB } from "@/lib/db";
import type { BookingDoc } from "@/models/Booking";
import { Booking } from "@/models/Booking";

export const dynamic = "force-dynamic";

function formatDate(d: Date | string | undefined) {
  if (!d) return "—";
  const x = typeof d === "string" ? new Date(d) : d;
  return Number.isNaN(x.getTime()) ? "—" : x.toLocaleString();
}

function truncate(s: string, n: number) {
  if (s.length <= n) return s;
  return `${s.slice(0, n)}…`;
}

export default async function AdminBookingsPage() {
  await connectDB();
  const rows = (await Booking.find().sort({ createdAt: -1 }).limit(500).lean()) as (BookingDoc & {
    _id: unknown;
  })[];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-headline text-3xl text-primary">Bookings</h1>
        <p className="mt-1 font-body text-sm text-on-surface-variant">Latest 500 inquiries.</p>
      </div>

      {rows.length === 0 ? (
        <p className="rounded-xl border border-outline-variant/50 bg-surface-container-low p-8 text-on-surface-variant">No bookings yet.</p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-outline-variant/50 bg-surface-container-lowest shadow-sm">
          <table className="w-full min-w-[960px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-outline-variant/60 bg-surface-container-low font-label text-xs uppercase tracking-wider text-on-surface-variant">
                <th className="px-4 py-3">Received</th>
                <th className="px-4 py-3">Name / Org</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Event</th>
                <th className="px-4 py-3">When</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Message</th>
              </tr>
            </thead>
            <tbody className="font-body">
              {rows.map((r) => (
                <tr key={String(r._id)} className="border-b border-outline-variant/40 align-top hover:bg-surface-container-low/80">
                  <td className="whitespace-nowrap px-4 py-3 text-on-surface-variant">{formatDate(r.createdAt)}</td>
                  <td className="px-4 py-3">
                    <span className="font-medium text-primary">{r.name}</span>
                    <span className="mt-0.5 block text-xs text-on-surface-variant">{r.org}</span>
                  </td>
                  <td className="px-4 py-3">
                    <a href={`mailto:${encodeURIComponent(r.email)}`} className="text-secondary underline-offset-2 hover:underline">
                      {r.email}
                    </a>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-on-surface-variant">{r.phone}</td>
                  <td className="px-4 py-3">{r.eventType}</td>
                  <td className="whitespace-nowrap px-4 py-3">{r.eventDate}</td>
                  <td className="max-w-[180px] px-4 py-3 text-on-surface-variant">{r.location}</td>
                  <td className="max-w-[280px] px-4 py-3 text-on-surface-variant" title={r.message}>
                    <span className="line-clamp-3 whitespace-pre-wrap">{truncate(r.message, 400)}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
