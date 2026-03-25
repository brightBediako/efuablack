import { AdminCreateMusicForm } from "@/components/admin/AdminCreateMusicForm";
import { connectDB } from "@/lib/db";
import type { MusicDoc } from "@/models/Music";
import { Music } from "@/models/Music";
import { AdminCard } from "@/components/admin/AdminCard";
import { AdminEmptyState } from "@/components/admin/AdminEmptyState";
import { AdminSectionHeader } from "@/components/admin/AdminSectionHeader";

export const dynamic = "force-dynamic";

export default async function AdminMusicPage() {
  await connectDB();
  const rows = (await Music.find().sort({ createdAt: -1 }).limit(200).lean()) as (MusicDoc & {
    _id: unknown;
  })[];

  return (
    <div className="space-y-6">
      <AdminSectionHeader title="Music" subtitle="Add and manage song releases." icon="music_note" />
      <AdminCreateMusicForm />

      {rows.length === 0 ? (
        <AdminEmptyState
          title="No music releases yet."
          description="Upload the cover and provide release details to populate this table."
          icon="music_note"
        />
      ) : (
        <AdminCard className="p-0">
          <div className="overflow-x-auto rounded-2xl">
            <table className="w-full min-w-[860px] border-collapse border-spacing-0 text-left text-sm">
              <thead>
                <tr className="border-b border-outline-variant/60 bg-surface-container-low font-label text-xs uppercase tracking-wider text-on-surface-variant">
                  <th scope="col" className="px-4 py-3">Title</th>
                  <th scope="col" className="px-4 py-3">Year</th>
                  <th scope="col" className="px-4 py-3">Cover</th>
                  <th scope="col" className="px-4 py-3">Links</th>
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
                    <td className="whitespace-nowrap px-4 py-3">{r.yearRelease}</td>
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
                    <td className="px-4 py-3 text-xs text-on-surface-variant">
                      {[r.spotify, r.appleMusic, r.youtubeMusic].filter(Boolean).length} platforms
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
