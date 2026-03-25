import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { ADMIN_SESSION_COOKIE, verifyAdminSessionToken } from "@/lib/admin-auth";

export default async function AdminLoginPage() {
  const jar = await cookies();
  if (verifyAdminSessionToken(jar.get(ADMIN_SESSION_COOKIE)?.value)) {
    redirect("/admin");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-16">
      <AdminLoginForm />
      <p className="mt-10 font-body text-sm text-on-surface-variant">
        <Link href="/" className="text-secondary underline underline-offset-4 hover:text-primary">
          Back to site
        </Link>
      </p>
    </div>
  );
}
