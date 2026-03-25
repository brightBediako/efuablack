import { AdminNav } from "@/components/admin/AdminNav";
import { requireAdmin } from "@/lib/admin-guard";

export const dynamic = "force-dynamic";

export default async function AdminDashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  await requireAdmin();

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <AdminNav />
      <main
        id="admin-main"
        className="min-w-0 flex-1 p-6 md:p-10"
        aria-label="Admin main content"
      >
        {children}
      </main>
    </div>
  );
}
