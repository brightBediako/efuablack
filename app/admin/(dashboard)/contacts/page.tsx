import { connectDB } from "@/lib/db";
import type { ContactDoc } from "@/models/Contact";
import { Contact } from "@/models/Contact";
import { AdminCard } from "@/components/admin/AdminCard";
import { AdminEmptyState } from "@/components/admin/AdminEmptyState";
import { AdminSectionHeader } from "@/components/admin/AdminSectionHeader";

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

export default async function AdminContactsPage({
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
    ? {
        $or: [
          { name: { $regex: query, $options: "i" } },
          { email: { $regex: query, $options: "i" } },
          { subject: { $regex: query, $options: "i" } },
        ],
      }
    : {};
  const total = await Contact.countDocuments(where);
  const rows = (await Contact.find(where)
    .sort({ createdAt: -1 })
    .skip((page - 1) * pageSize)
    .limit(pageSize)
    .lean()) as (ContactDoc & { _id: unknown })[];
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  return (
    <div className="space-y-6">
      <AdminSectionHeader
        title="Contacts"
        subtitle="Contact messages."
        icon="mail"
      />
      <AdminCard className="p-4">
        <form className="flex items-center gap-2">
          <input
            name="q"
            defaultValue={query}
            placeholder="Search name/email/subject"
            className="rounded-lg border border-outline-variant/60 bg-surface px-3 py-2 text-sm"
          />
          <button type="submit" className="rounded-lg border border-outline-variant px-3 py-2 text-xs uppercase">
            Search
          </button>
        </form>
      </AdminCard>

      {rows.length === 0 ? (
        <AdminEmptyState
          title="No contact messages yet."
          description="When visitors send a message, their submissions will appear here."
          icon="mail"
        />
      ) : (
        <AdminCard className="p-0">
          <div className="overflow-x-auto rounded-2xl">
            <table className="w-full min-w-[880px] border-collapse border-spacing-0 text-left text-sm">
              <thead>
                <tr className="border-b border-outline-variant/60 bg-surface-container-low font-label text-xs uppercase tracking-wider text-on-surface-variant">
                  <th scope="col" className="px-4 py-3">Received</th>
                  <th scope="col" className="px-4 py-3">Name</th>
                  <th scope="col" className="px-4 py-3">Email</th>
                  <th scope="col" className="px-4 py-3">Phone</th>
                  <th scope="col" className="px-4 py-3">Subject</th>
                  <th scope="col" className="px-4 py-3">Message</th>
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
                    <td className="px-4 py-3 font-medium text-primary">{r.name}</td>
                    <td className="px-4 py-3">
                      <a
                        href={`mailto:${encodeURIComponent(r.email)}`}
                        className="text-secondary underline-offset-2 hover:underline"
                      >
                        {r.email}
                      </a>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-on-surface-variant">{r.phone ?? "—"}</td>
                    <td className="max-w-[200px] px-4 py-3">{r.subject}</td>
                    <td className="max-w-[320px] px-4 py-3 text-on-surface-variant" title={r.message}>
                      <span className="line-clamp-4 whitespace-pre-wrap">{truncate(r.message, 500)}</span>
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
