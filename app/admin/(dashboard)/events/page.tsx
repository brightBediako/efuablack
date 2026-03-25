import { AdminCreateEventForm } from "@/components/admin/AdminCreateEventForm";
import { connectDB } from "@/lib/db";
import type { EventDoc } from "@/models/Event";
import { Event } from "@/models/Event";
import { EventRegistration } from "@/models/EventRegistration";
import { AdminCard } from "@/components/admin/AdminCard";
import { AdminEmptyState } from "@/components/admin/AdminEmptyState";
import { AdminSectionHeader } from "@/components/admin/AdminSectionHeader";

export const dynamic = "force-dynamic";

export default async function AdminEventsPage() {
  await connectDB();
  const [events, registrationCounts] = await Promise.all([
    Event.find().sort({ createdAt: -1 }).limit(200).lean(),
    EventRegistration.aggregate<{ _id: string; count: number }>([
      { $group: { _id: "$eventId", count: { $sum: 1 } } },
    ]),
  ]);

  const countByEvent = new Map<string, number>(
    registrationCounts.map((x) => [String(x._id), x.count]),
  );

  const rows = events as (EventDoc & { _id: unknown })[];

  return (
    <div className="space-y-6">
      <AdminSectionHeader title="Events" subtitle="Add and track event registrations." icon="event" />
      <AdminCreateEventForm />

      {rows.length === 0 ? (
        <AdminEmptyState
          title="No events yet."
          description="Upload an event cover and details to see registration counts here."
          icon="event"
        />
      ) : (
        <AdminCard className="p-0">
          <div className="overflow-x-auto rounded-2xl">
            <table className="w-full min-w-[900px] border-collapse border-spacing-0 text-left text-sm">
              <thead>
                <tr className="border-b border-outline-variant/60 bg-surface-container-low font-label text-xs uppercase tracking-wider text-on-surface-variant">
                  <th scope="col" className="px-4 py-3">Title</th>
                  <th scope="col" className="px-4 py-3">Date</th>
                  <th scope="col" className="px-4 py-3">Location</th>
                  <th scope="col" className="px-4 py-3">Registrations</th>
                  <th scope="col" className="px-4 py-3">Cover</th>
                </tr>
              </thead>
              <tbody className="font-body">
                {rows.map((r, idx) => (
                  <tr
                    key={String(r._id)}
                    className={`border-b border-outline-variant/40 align-top hover:bg-surface-container-low/80 ${
                      idx % 2 === 0 ? "bg-surface-container-lowest/40" : "bg-surface-container-low/10"
                    }`}
                  >
                    <td className="px-4 py-3">
                      <p className="font-medium text-primary">{r.title}</p>
                      <p className="line-clamp-2 max-w-[360px] text-xs text-on-surface-variant">
                        {r.description}
                      </p>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3">{r.eventDate}</td>
                    <td className="px-4 py-3">{r.location}</td>
                    <td className="px-4 py-3">{countByEvent.get(String(r._id)) ?? 0}</td>
                    <td className="px-4 py-3">
                      <a
                        href={r.coverPicture}
                        className="text-secondary underline-offset-2 hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AdminCard>
      )}
    </div>
  );
}
