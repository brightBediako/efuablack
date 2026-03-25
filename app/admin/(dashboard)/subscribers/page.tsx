import { connectDB } from "@/lib/db";
import type { SubscriberDoc } from "@/models/Subscriber";
import { Subscriber } from "@/models/Subscriber";

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
      <div>
        <h1 className="font-headline text-3xl text-primary">Subscribers</h1>
        <p className="mt-1 font-body text-sm text-on-surface-variant">Mailing list signups (latest 1000).</p>
      </div>

      {rows.length === 0 ? (
        <p className="rounded-xl border border-outline-variant/50 bg-surface-container-low p-8 text-on-surface-variant">No subscribers yet.</p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-outline-variant/50 bg-surface-container-lowest shadow-sm">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-outline-variant/60 bg-surface-container-low font-label text-xs uppercase tracking-wider text-on-surface-variant">
                <th className="px-4 py-3">Subscribed</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Source</th>
              </tr>
            </thead>
            <tbody className="font-body">
              {rows.map((r) => (
                <tr key={String(r._id)} className="border-b border-outline-variant/40 align-top hover:bg-surface-container-low/80">
                  <td className="whitespace-nowrap px-4 py-3 text-on-surface-variant">{formatDate(r.createdAt)}</td>
                  <td className="px-4 py-3">
                    <a href={`mailto:${encodeURIComponent(r.email)}`} className="font-medium text-secondary underline-offset-2 hover:underline">
                      {r.email}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-on-surface-variant">{r.source ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
