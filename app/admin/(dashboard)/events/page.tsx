import { AdminCreateEventForm } from "@/components/admin/AdminCreateEventForm";
import { connectDB } from "@/lib/db";
import type { EventDoc } from "@/models/Event";
import { Event } from "@/models/Event";
import { EventRegistration } from "@/models/EventRegistration";
import { AdminCard } from "@/components/admin/AdminCard";
import { AdminEmptyState } from "@/components/admin/AdminEmptyState";
import { AdminRowActions } from "@/components/admin/AdminRowActions";
import { AdminSectionHeader } from "@/components/admin/AdminSectionHeader";

export const dynamic = "force-dynamic";

export default async function AdminEventsPage() {
  await connectDB();
  const [events, registrationCounts, registrations] = await Promise.all([
    Event.find().sort({ createdAt: -1 }).limit(200).lean(),
    EventRegistration.aggregate<{ _id: string; count: number }>([
      { $group: { _id: "$eventId", count: { $sum: 1 } } },
    ]),
    EventRegistration.find()
      .sort({ createdAt: -1 })
      .limit(2000)
      .lean(),
  ]);

  const countByEvent = new Map<string, number>(
    registrationCounts.map((x) => [String(x._id), x.count]),
  );

  const rows = events as (EventDoc & { _id: unknown })[];
  const registrationsByEvent = new Map<
    string,
    Array<{ _id: unknown; name: string; email: string; phone: string; createdAt?: Date }>
  >();
  for (const reg of registrations) {
    const key = String(reg.eventId);
    const list = registrationsByEvent.get(key) ?? [];
    list.push({
      _id: reg._id,
      name: reg.name,
      email: reg.email,
      phone: reg.phone,
      createdAt: reg.createdAt,
    });
    registrationsByEvent.set(key, list);
  }

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
                  <th scope="col" className="px-4 py-3">Attendees</th>
                  <th scope="col" className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="font-body">
                {rows.map((r, idx) => {
                  const attendeeRows = registrationsByEvent.get(String(r._id)) ?? [];
                  return (
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
                      <td className="px-4 py-3">
                        {attendeeRows.length > 0 ? (
                          <details>
                            <summary className="cursor-pointer text-secondary">View ({attendeeRows.length})</summary>
                            <div className="mt-2 space-y-2">
                              {attendeeRows.slice(0, 20).map((attendee) => (
                                <div key={String(attendee._id)} className="rounded border border-outline-variant/40 p-2 text-xs">
                                  <p className="font-medium text-primary">{attendee.name}</p>
                                  <p className="text-on-surface-variant">
                                    <a href={`mailto:${attendee.email}`} className="hover:underline">
                                      {attendee.email}
                                    </a>
                                  </p>
                                  <p className="text-on-surface-variant">{attendee.phone}</p>
                                </div>
                              ))}
                            </div>
                          </details>
                        ) : (
                          <span className="text-xs text-on-surface-variant">No attendees yet</span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <AdminRowActions
                          id={String(r._id)}
                          endpoint="/api/admin/events"
                          current={{
                            title: r.title,
                            description: r.description,
                            coverPicture: r.coverPicture,
                            eventDate: r.eventDate,
                            location: r.location,
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </AdminCard>
      )}
    </div>
  );
}
