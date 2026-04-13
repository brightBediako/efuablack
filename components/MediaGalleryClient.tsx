"use client";

import { useState } from "react";
import { MaterialSymbol } from "./MaterialSymbol";

const LB_IMG =
  "https://res.cloudinary.com/dkg8ovask/image/upload/q_auto/f_auto/v1776050992/10_zp5mml.jpg";

export function MediaGalleryClient() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="max-w-screen-2xl mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="md:col-span-8 group relative overflow-hidden bg-surface-container-high aspect-video md:aspect-auto md:h-[600px] text-left"
          >
            <img
              alt="Live Performance"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://res.cloudinary.com/dkg8ovask/image/upload/q_auto/f_auto/v1776050993/11_vkmwcb.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10 pointer-events-none">
              <span className="text-secondary-fixed font-label text-xs tracking-[0.2em] uppercase mb-2">
                Featured Performance
              </span>
              <h3 className="font-headline text-3xl text-on-primary italic">The Holy Ghost Concert</h3>
            </div>
          </button>
          <div className="md:col-span-4 group relative overflow-hidden bg-surface-container-high h-[400px] md:h-[600px]">
            <img
              alt="Studio Session"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://res.cloudinary.com/dkg8ovask/image/upload/q_auto/f_auto/v1776050992/10_zp5mml.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex flex-col justify-end p-8">
              <h3 className="font-headline text-2xl text-on-primary italic">Efua Black with Amy Newman</h3>
              <MaterialSymbol name="play_circle" className="text-secondary text-4xl mt-4" />
            </div>
          </div>
          <div className="md:col-span-4 group relative overflow-hidden bg-surface-container-high aspect-square">
            <img
              alt="Backstage Moments"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://res.cloudinary.com/dkg8ovask/image/upload/q_auto/f_auto/v1776050993/18_sutdkf.jpg"
            />
          </div>
          <div className="md:col-span-4 group relative overflow-hidden bg-surface-container-high aspect-square">
            <img
              alt="Cathedral Concert"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://res.cloudinary.com/dkg8ovask/image/upload/q_auto/f_auto/v1776050992/19_m8uid1.jpg"
            />
          </div>
          <div className="md:col-span-4 group relative overflow-hidden bg-surface-container-high aspect-square">
            <img
              alt="Piano Details"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://res.cloudinary.com/dkg8ovask/image/upload/q_auto/f_auto/v1776050992/9_etmms2.jpg"
            />
          </div>
          <div className="md:col-span-12 group relative overflow-hidden bg-surface-container-low h-[500px]">
            <img
              alt="Spirit of Worship"
              className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
              src="https://res.cloudinary.com/dkg8ovask/image/upload/q_auto/f_auto/v1776050990/1_di4sq2.jpg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h2 className="font-headline text-5xl md:text-7xl text-primary italic mb-6">Testify</h2>
                <a
                  href="https://www.youtube.com/watch?v=BwjSkfRhD2A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-on-primary px-10 py-4 rounded-full font-label text-sm tracking-widest uppercase hover:scale-105 transition-all"
                >
                  Watch Music Video
                </a>
           
              </div>
            </div>
          </div>
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
        className={`fixed inset-0 z-[100] bg-primary/95 backdrop-blur-md flex flex-col ${open ? "flex" : "hidden"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Gallery lightbox"
      >
        <div className="flex justify-end p-8">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="text-on-primary hover:text-secondary transition-colors"
            aria-label="Close"
          >
            <MaterialSymbol name="close" className="text-4xl" />
          </button>
        </div>
        <div className="flex-grow flex items-center justify-center p-12">
          <div className="max-w-5xl w-full">
            <img
              alt="Lightbox"
              className="w-full object-contain max-h-[716px]"
              src={LB_IMG}
            />
            <div className="mt-8 text-center">
              <h4 className="font-headline text-3xl text-on-primary italic">The Divine Resonance</h4>
              <p className="text-on-primary-container/60 font-body mt-2">Live from the Grand Hall, 2024</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center p-12 max-w-screen-xl mx-auto w-full">
          <button type="button" className="text-on-primary hover:text-secondary flex items-center gap-2">
            <MaterialSymbol name="arrow_back_ios" />
            <span className="font-label text-xs uppercase tracking-widest">Previous</span>
          </button>
          <button type="button" className="text-on-primary hover:text-secondary flex items-center gap-2">
            <span className="font-label text-xs uppercase tracking-widest">Next</span>
            <MaterialSymbol name="arrow_forward_ios" />
          </button>
        </div>
      </div>
    </>
  );
}
