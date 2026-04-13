import { connectDB } from "@/lib/db";
import type { SubscriberDoc } from "@/models/Subscriber";
import { Subscriber } from "@/models/Subscriber";
import { AdminCard } from "@/components/admin/AdminCard";
import { AdminDeleteButton } from "@/components/admin/AdminDeleteButton";
import { AdminEmptyState } from "@/components/admin/AdminEmptyState";
import { AdminSectionHeader } from "@/components/admin/AdminSectionHeader";

export const dynamic = "force-dynamic";

function formatDate(d: Date | string | undefined) {
  if (!d) return "—";
  const x = typeof d === "string" ? new Date(d) : d;
  return Number.isNaN(x.getTime()) ? "—" : x.toLocaleString();
}

export default async function AdminSubscribersPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; page?: string }>;
}) {
  const sp = await searchParams;
  const query = (sp.q ?? "").trim();
  const page = Math.max(1, Number(sp.page ?? "1") || 1);
  const pageSize = 100;
  await connectDB();
  const where = query
    ? { $or: [{ email: { $regex: query, $options: "i" } }, { source: { $regex: query, $options: "i" } }] }
    : {};
  const total = await Subscriber.countDocuments(where);
  const rows = (await Subscriber.find(where)
    .sort({ createdAt: -1 })
    .skip((page - 1) * pageSize)
    .limit(pageSize)
    .lean()) as (SubscriberDoc & { _id: unknown })[];
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        title="Subscribers"
        subtitle="Mailing list signups."
        icon="groups"
      />
      <AdminCard className="p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <form className="flex items-center gap-2">
            <input
              name="q"
              defaultValue={query}
              placeholder="Search email/source"
              className="rounded-lg border border-outline-variant/60 bg-surface px-3 py-2 text-sm"
            />
            <button type="submit" className="rounded-lg border border-outline-variant px-3 py-2 text-xs uppercase">
              Search
            </button>
          </form>
          <a
            href="/api/admin/subscribers?format=csv"
            className="rounded-lg bg-primary px-3 py-2 text-xs uppercase tracking-widest text-on-primary"
          >
            Export CSV
          </a>
        </div>
      </AdminCard>

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
                  <th scope="col" className="px-4 py-3">Actions</th>
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
                    <td className="px-4 py-3">
                      <AdminDeleteButton endpoint="/api/admin/subscribers" id={String(r._id)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between border-t border-outline-variant/40 px-4 py-3 text-xs text-on-surface-variant">
            <p>
              Page {page} of {totalPages} ({total} total)
            </p>
            <div className="flex gap-2">
              {page > 1 ? (
                <a href={`?q=${encodeURIComponent(query)}&page=${page - 1}`} className="rounded border px-2 py-1">
                  Prev
                </a>
              ) : null}
              {page < totalPages ? (
                <a href={`?q=${encodeURIComponent(query)}&page=${page + 1}`} className="rounded border px-2 py-1">
                  Next
                </a>
              ) : null}
            </div>
          </div>
        </AdminCard>
      )}
    </div>
  );
}
