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
  home: "fixed top-0 z-50 flex w-full flex-col items-stretch bg-[#fdf8fd]/80 backdrop-blur-xl dark:bg-[#0f0019]/80",
  about: "fixed top-0 z-50 flex w-full flex-col items-stretch bg-[#fdf8fd]/80 backdrop-blur-xl",
  music: "fixed top-0 z-50 flex w-full flex-col items-stretch bg-[#fdf8fd]/80 backdrop-blur-xl",
  ministry: "fixed top-0 z-50 flex w-full flex-col items-stretch glass-nav",
  events: "fixed top-0 z-50 flex w-full flex-col items-stretch bg-[#fdf8fd]/80 backdrop-blur-xl dark:bg-[#0f0019]/80",
  media: "fixed top-0 z-50 flex w-full flex-col items-stretch bg-[#fdf8fd]/80 backdrop-blur-xl dark:bg-[#0f0019]/80",
  booking: "fixed top-0 z-50 flex w-full flex-col items-stretch bg-[#fdf8fd]/80 backdrop-blur-xl dark:bg-[#0f0019]/80",
  contact: "fixed top-0 z-50 flex w-full flex-col items-stretch bg-[#fdf8fd]/80 backdrop-blur-xl dark:bg-[#0f0019]/80",
  song: "fixed top-0 z-50 flex w-full flex-col items-stretch bg-[#fdf8fd]/80 backdrop-blur-xl",
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
    ? "text-xl font-serif font-bold text-[#320b44] tracking-tighter sm:text-2xl"
    : "text-xl font-serif font-bold text-[#320b44] dark:text-[#eedbff] tracking-tighter sm:text-2xl";
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
    <nav className={navClass} aria-label="Main">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-4 sm:px-8 sm:py-5 md:px-12">
        <Link href="/" className={logoClass(shell)} onClick={() => setMobileOpen(false)}>
          Efua Black
        </Link>
        <div className="hidden flex-1 flex-wrap items-center justify-center gap-6 pl-8 lg:flex xl:gap-8">
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
        <div className="flex items-center">
          <button
            type="button"
            className="rounded-md p-2 text-[#320b44] dark:text-[#eedbff] lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <MaterialSymbol name="close" className="text-2xl" />
            ) : (
              <MaterialSymbol name="menu" className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="lg:hidden w-full max-h-[min(85dvh,calc(100dvh-5rem))] overflow-y-auto overscroll-y-contain border-t border-outline-variant/25 bg-[#fdf8fd] dark:bg-[#1a0a25] shadow-inner [text-rendering:optimizeLegibility]"
        >
          <ul className="mx-auto flex w-full max-w-screen-2xl list-none flex-col px-2 py-3 sm:px-4">
            {NAV.map((item) => {
              const isActive =
                active !== "none" &&
                (active === item.key || (item.key === "music" && active === "song"));
              return (
                <li key={item.href} className="border-b border-outline-variant/20 last:border-0">
                  <Link
                    href={item.href}
                    prefetch={false}
                    className={`block rounded-lg px-3 py-3.5 text-base font-body font-medium antialiased transition-colors sm:py-4 sm:text-lg ${
                      isActive
                        ? "bg-secondary/10 text-secondary dark:text-secondary-fixed"
                        : "text-[#320b44] dark:text-[#eedbff] active:bg-surface-container-high"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </nav>
  );
}
