"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AdminLogoutButton } from "@/components/admin/AdminLogoutButton";
import { MaterialSymbol } from "@/components/MaterialSymbol";

const items = [
  { href: "/admin", label: "Overview", icon: "dashboard" },
  { href: "/admin/music", label: "Music", icon: "music_note" },
  { href: "/admin/events", label: "Events", icon: "event" },
  { href: "/admin/media", label: "Media", icon: "photo_library" },
  { href: "/admin/bookings", label: "Bookings", icon: "event_available" },
  { href: "/admin/contacts", label: "Contacts", icon: "mail" },
  { href: "/admin/subscribers", label: "Subscribers", icon: "groups" },
];

export function AdminNav() {
  const pathname = usePathname();

  return (
    <aside className="w-full border-b border-outline-variant/40 bg-primary text-on-primary md:min-h-screen md:w-64 md:shrink-0 md:border-b-0 md:border-r md:sticky md:top-0">
      <div className="flex flex-col gap-4 p-5">
        <div className="space-y-1">
          <p className="font-label text-[10px] uppercase tracking-[0.25em] text-on-primary/60">Efua Black</p>
          <p className="font-headline text-lg leading-tight">Admin</p>
        </div>
        <nav className="flex max-w-full flex-row gap-1 overflow-x-auto md:flex-col md:overflow-visible">
          {items.map((item) => {
            const active = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors md:text-left ${
                  active ? "bg-white/15 font-semibold text-on-primary" : "text-on-primary/85 hover:bg-white/10"
                }`}
              >
                <span className="inline-flex items-center justify-center">
                  <MaterialSymbol name={item.icon} className="text-2xl" filled={active} />
                </span>
                <span className="whitespace-nowrap">{item.label}</span>
                {active ? <span className="absolute left-2 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-secondary" /> : null}
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
