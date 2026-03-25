"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AdminLogoutButton } from "@/components/admin/AdminLogoutButton";

const items = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/bookings", label: "Bookings" },
  { href: "/admin/contacts", label: "Contacts" },
  { href: "/admin/subscribers", label: "Subscribers" },
];

export function AdminNav() {
  const pathname = usePathname();

  return (
    <aside className="border-outline-variant/30 bg-primary text-on-primary md:min-h-screen md:w-56 md:shrink-0 md:border-r">
      <div className="flex flex-col gap-4 p-5 md:sticky md:top-0">
        <p className="font-label text-[10px] uppercase tracking-[0.25em] text-on-primary/60">Efua Black</p>
        <p className="font-headline text-lg leading-tight">Admin</p>
        <nav className="flex flex-row flex-wrap gap-1 md:flex-col">
          {items.map((item) => {
            const active = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm transition-colors md:text-left ${
                  active ? "bg-white/15 font-semibold text-on-primary" : "text-on-primary/85 hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-2 border-t border-white/10 pt-4 md:mt-auto">
          <AdminLogoutButton />
        </div>
      </div>
    </aside>
  );
}
