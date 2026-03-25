import { AdminCreateMusicForm } from "@/components/admin/AdminCreateMusicForm";
import { connectDB } from "@/lib/db";
import type { MusicDoc } from "@/models/Music";
import { Music } from "@/models/Music";

export const dynamic = "force-dynamic";

export default async function AdminMusicPage() {
  await connectDB();
  const rows = (await Music.find().sort({ createdAt: -1 }).limit(200).lean()) as (MusicDoc & {
    _id: unknown;
  })[];

  return (
    <div className="space-y-6">
      <AdminCreateMusicForm />
      <section className="overflow-x-auto rounded-xl border border-outline-variant/50 bg-surface-container-lowest shadow-sm">
        <table className="w-full min-w-[860px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-outline-variant/60 bg-surface-container-low font-label text-xs uppercase tracking-wider text-on-surface-variant">
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Year</th>
              <th className="px-4 py-3">Cover</th>
              <th className="px-4 py-3">Links</th>
            </tr>
          </thead>
          <tbody className="font-body">
            {rows.map((r) => (
              <tr key={String(r._id)} className="border-b border-outline-variant/40 align-top">
                <td className="px-4 py-3">
                  <p className="font-medium text-primary">{r.title}</p>
                  <p className="line-clamp-2 max-w-[360px] text-xs text-on-surface-variant">{r.description}</p>
                </td>
                <td className="whitespace-nowrap px-4 py-3">{r.yearRelease}</td>
                <td className="px-4 py-3">
                  <a href={r.coverPicture} className="text-secondary underline-offset-2 hover:underline" target="_blank" rel="noreferrer">
                    Open
                  </a>
                </td>
                <td className="px-4 py-3 text-xs text-on-surface-variant">
                  {[r.spotify, r.appleMusic, r.youtubeMusic].filter(Boolean).length} platforms
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
