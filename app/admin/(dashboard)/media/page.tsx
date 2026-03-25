import { AdminCreateMediaForm } from "@/components/admin/AdminCreateMediaForm";
import { connectDB } from "@/lib/db";
import type { MediaDoc } from "@/models/Media";
import { Media } from "@/models/Media";

export const dynamic = "force-dynamic";

export default async function AdminMediaPage() {
  await connectDB();
  const rows = (await Media.find().sort({ createdAt: -1 }).limit(300).lean()) as (MediaDoc & {
    _id: unknown;
  })[];

  return (
    <div className="space-y-6">
      <AdminCreateMediaForm />
      <section className="overflow-x-auto rounded-xl border border-outline-variant/50 bg-surface-container-lowest shadow-sm">
        <table className="w-full min-w-[860px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-outline-variant/60 bg-surface-container-low font-label text-xs uppercase tracking-wider text-on-surface-variant">
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Picture</th>
              <th className="px-4 py-3">Description</th>
            </tr>
          </thead>
          <tbody className="font-body">
            {rows.map((r) => (
              <tr key={String(r._id)} className="border-b border-outline-variant/40 align-top">
                <td className="px-4 py-3 font-medium text-primary">{r.title}</td>
                <td className="px-4 py-3">
                  <a href={r.picture} className="text-secondary underline-offset-2 hover:underline" target="_blank" rel="noreferrer">
                    Open
                  </a>
                </td>
                <td className="max-w-[500px] px-4 py-3 text-on-surface-variant">{r.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
