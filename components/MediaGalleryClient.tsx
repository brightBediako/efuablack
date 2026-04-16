"use client";

import { useState } from "react";
import { MaterialSymbol } from "./MaterialSymbol";

type MediaGalleryItem = {
  id: string;
  title: string;
  description: string;
  picture: string;
};

const FALLBACK_IMAGE =
  "https://res.cloudinary.com/dkg8ovask/image/upload/q_auto/f_auto/v1776050990/1_di4sq2.jpg";

export function MediaGalleryClient({ items }: { items: MediaGalleryItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const safeItems = items.length
    ? items
    : [
        {
          id: "placeholder",
          title: "Gallery Coming Soon",
          description: "New moments will appear here soon.",
          picture: FALLBACK_IMAGE,
        },
      ];
  const active = openIndex === null ? null : safeItems[openIndex];

  return (
    <>
      <section className="max-w-screen-2xl mx-auto px-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 items-start">
          {safeItems.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setOpenIndex(idx)}
              className="group relative overflow-hidden bg-surface-container-high aspect-square text-left"
            >
              <img
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={item.picture || FALLBACK_IMAGE}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 pointer-events-none">
                <h3 className="font-headline text-2xl text-on-primary italic">
                  {item.description || item.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </section>

      <div className="mt-20 flex justify-center">
        <button type="button" className="group flex flex-col items-center gap-4">
          <span className="text-on-surface-variant font-label text-sm tracking-[0.3em] uppercase group-hover:text-secondary transition-colors">
            Explore More
          </span>
          <MaterialSymbol name="expand_more" className="text-secondary text-3xl animate-bounce" />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-[100] bg-primary/95 backdrop-blur-md flex flex-col ${active ? "flex" : "hidden"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Gallery lightbox"
      >
        <div className="flex justify-end p-8">
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            className="text-on-primary hover:text-secondary transition-colors"
            aria-label="Close"
          >
            <MaterialSymbol name="close" className="text-4xl" />
          </button>
        </div>
        <div className="flex-grow flex items-center justify-center p-12">
          <div className="max-w-5xl w-full">
            {active?.picture ? (
              <img
                alt={active.title}
                className="w-full object-contain max-h-[716px]"
                src={active.picture}
              />
            ) : (
              <img
                alt={active?.title ?? "Lightbox image"}
                className="w-full object-contain max-h-[716px]"
                src={FALLBACK_IMAGE}
              />
            )}
            <div className="mt-8 text-center">
              <h4 className="font-headline text-3xl text-on-primary italic">
                {active?.description || active?.title}
              </h4>
              <p className="text-on-primary-container/60 font-body mt-2">{active?.title}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center p-12 max-w-screen-xl mx-auto w-full">
          <button
            type="button"
            className="text-on-primary hover:text-secondary flex items-center gap-2"
            onClick={() =>
              setOpenIndex((prev) => (prev === null ? null : (prev - 1 + safeItems.length) % safeItems.length))
            }
          >
            <MaterialSymbol name="arrow_back_ios" />
            <span className="font-label text-xs uppercase tracking-widest">Previous</span>
          </button>
          <button
            type="button"
            className="text-on-primary hover:text-secondary flex items-center gap-2"
            onClick={() =>
              setOpenIndex((prev) => (prev === null ? null : (prev + 1) % safeItems.length))
            }
          >
            <span className="font-label text-xs uppercase tracking-widest">Next</span>
            <MaterialSymbol name="arrow_forward_ios" />
          </button>
        </div>
      </div>
    </>
  );
}
