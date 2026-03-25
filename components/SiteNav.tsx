"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MaterialSymbol } from "./MaterialSymbol";

export type NavKey =
  | "home"
  | "about"
  | "music"
  | "ministry"
  | "events"
  | "media"
  | "booking"
  | "contact"
  | "song"
  /** No primary nav item selected (e.g. legal pages) */
  | "none";

export type NavShell =
  | "home"
  | "about"
  | "music"
  | "ministry"
  | "events"
  | "media"
  | "booking"
  | "contact"
  | "song";

const shellClass: Record<NavShell, string> = {
  home: "fixed top-0 w-full z-50 bg-[#fdf8fd]/70 dark:bg-[#0f0019]/70 backdrop-blur-xl",
  about: "fixed top-0 w-full z-50 bg-[#fdf8fd]/70 backdrop-blur-xl",
  music: "fixed top-0 w-full z-50 bg-[#fdf8fd]/70 backdrop-blur-xl",
  ministry: "fixed top-0 w-full z-50 glass-nav",
  events: "fixed top-0 w-full z-50 bg-[#fdf8fd]/70 dark:bg-[#0f0019]/70 backdrop-blur-xl",
  media: "fixed top-0 w-full z-50 bg-[#fdf8fd]/70 dark:bg-[#0f0019]/70 backdrop-blur-xl",
  booking: "fixed top-0 w-full z-50 bg-[#fdf8fd]/70 dark:bg-[#0f0019]/70 backdrop-blur-xl",
  contact: "fixed top-0 w-full z-50 bg-[#fdf8fd]/70 dark:bg-[#0f0019]/70 backdrop-blur-xl",
  song: "fixed top-0 w-full z-50 bg-[#fdf8fd]/70 backdrop-blur-xl",
};

function lightLinks(shell: NavShell) {
  return shell === "about" || shell === "music" || shell === "song";
}

function linkInactive(shell: NavShell) {
  return lightLinks(shell)
    ? "text-[#320b44] opacity-80 font-serif text-lg italic tracking-wide hover:text-[#775a19] transition-colors duration-300"
    : "text-[#320b44] dark:text-[#eedbff] opacity-80 hover:text-[#775a19] transition-colors duration-300 font-serif text-lg italic tracking-wide";
}

function linkActiveClass(shell: NavShell) {
  if (lightLinks(shell)) {
    return "text-[#775a19] font-bold border-b-2 border-[#775a19] pb-1 font-serif text-lg italic tracking-wide";
  }
  return "text-[#775a19] dark:text-[#fed488] font-bold border-b-2 border-[#775a19] pb-1 font-serif text-lg italic tracking-wide";
}

function logoClass(shell: NavShell) {
  return lightLinks(shell)
    ? "text-2xl font-serif font-bold text-[#320b44] tracking-tighter"
    : "text-2xl font-serif font-bold text-[#320b44] dark:text-[#eedbff] tracking-tighter";
}

const NAV: { href: string; key: NavKey; label: string }[] = [
  { href: "/", key: "home", label: "Home" },
  { href: "/about", key: "about", label: "About" },
  { href: "/music", key: "music", label: "Music" },
  { href: "/ministry", key: "ministry", label: "Ministry" },
  { href: "/events", key: "events", label: "Events" },
  { href: "/media", key: "media", label: "Media" },
  { href: "/booking", key: "booking", label: "Booking" },
  { href: "/contact", key: "contact", label: "Contact" },
];

type Props = {
  shell: NavShell;
  active: NavKey;
};

export function SiteNav({ shell, active }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navClass = shellClass[shell];

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav className={navClass}>
      <div className="flex justify-between items-center px-6 sm:px-12 py-6 max-w-screen-2xl mx-auto">
        <Link href="/" className={logoClass(shell)} onClick={() => setMobileOpen(false)}>
          Efua Black
        </Link>
        <div className="hidden lg:flex gap-6 xl:gap-8 items-center flex-wrap justify-end">
          {NAV.map((item) => {
            const isActive =
              active !== "none" &&
              (active === item.key || (item.key === "music" && active === "song"));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive ? linkActiveClass(shell) : linkInactive(shell)}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-3 lg:gap-4">
          <span
            className={
              lightLinks(shell)
                ? "material-symbols-outlined text-[#320b44] cursor-pointer hover:text-[#775a19] transition-transform text-2xl"
                : "material-symbols-outlined text-[#320b44] dark:text-[#eedbff] cursor-pointer hover:text-[#775a19] transition-transform text-2xl"
            }
            aria-hidden
          >
            account_circle
          </span>
          <button
            type="button"
            className="lg:hidden text-[#320b44] dark:text-[#eedbff] p-1"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <MaterialSymbol name="close" className="text-2xl" /> : <MaterialSymbol name="menu" className="text-2xl" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="lg:hidden fixed inset-0 top-[72px] z-[60] bg-surface/98 backdrop-blur-xl border-t border-outline-variant/20 px-6 py-8 flex flex-col gap-1 overflow-y-auto" id="mobile-nav">
          {NAV.map((item) => {
            const isActive =
              active !== "none" &&
              (active === item.key || (item.key === "music" && active === "song"));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`py-3 font-serif text-xl italic border-b border-outline-variant/20 ${
                  isActive ? "text-[#775a19] font-bold" : "text-[#320b44] dark:text-[#eedbff]"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      ) : null}
    </nav>
  );
}
