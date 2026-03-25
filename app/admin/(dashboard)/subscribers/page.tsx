import { connectDB } from "@/lib/db";
import type { SubscriberDoc } from "@/models/Subscriber";
import { Subscriber } from "@/models/Subscriber";
import { AdminCard } from "@/components/admin/AdminCard";
import { AdminEmptyState } from "@/components/admin/AdminEmptyState";
import { AdminSectionHeader } from "@/components/admin/AdminSectionHeader";

export const dynamic = "force-dynamic";

function formatDate(d: Date | string | undefined) {
  if (!d) return "—";
  const x = typeof d === "string" ? new Date(d) : d;
  return Number.isNaN(x.getTime()) ? "—" : x.toLocaleString();
}

export default async function AdminSubscribersPage() {
  await connectDB();
  const rows = (await Subscriber.find().sort({ createdAt: -1 }).limit(1000).lean()) as (SubscriberDoc & {
    _id: unknown;
  })[];

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        title="Subscribers"
        subtitle="Mailing list signups (latest 1000)."
        icon="groups"
      />

      {rows.length === 0 ? (
        <AdminEmptyState
          title="No subscribers yet."
          description="When someone subscribes via the site form, they'll appear here."
          icon="groups"
        />
      ) : (
        <AdminCard className="p-0">
          <div className="overflow-x-auto rounded-2xl">
            <table className="w-full min-w-[640px] border-collapse border-spacing-0 text-left text-sm">
              <thead>
                <tr className="border-b border-outline-variant/60 bg-surface-container-low font-label text-xs uppercase tracking-wider text-on-surface-variant">
                  <th scope="col" className="px-4 py-3">Subscribed</th>
                  <th scope="col" className="px-4 py-3">Email</th>
                  <th scope="col" className="px-4 py-3">Source</th>
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
                    <td className="whitespace-nowrap px-4 py-3 text-on-surface-variant">{formatDate(r.createdAt)}</td>
                    <td className="px-4 py-3">
                      <a
                        href={`mailto:${encodeURIComponent(r.email)}`}
                        className="font-medium text-secondary underline-offset-2 hover:underline"
                      >
                        {r.email}
                      </a>
                    </td>
                    <td className="px-4 py-3 text-on-surface-variant">{r.source ?? "—"}</td>
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
