"use client";

import { useState } from "react";
import { MaterialSymbol } from "./MaterialSymbol";

const LB_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAAhwP1mLTZNL-wYeOi2YAjkNqXXoMR26XWjypcg9lVIi-K_XTler585THLui31RRZE30H8LUqVzhtWDBAdTXyta_VATCQ3lNAjE9imekiuQozwWarrrlc82VeFxmeHJlDn92RNbWuopVqHs88Wkbvw_h-cZQ321smzaDAq8ZDJ1qnkyqSBcI5_OmEQqf6veJA_8HDRcDZBDpN_gSsm3r7g6A9VYMzR-L0364bZoA07g_z0r5eGDRxSXtZTbFnxRGXZEnSclYg-A2Y";

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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-iHk_zorvmNNBtGxNk0nfncJEdWUjznrCuEjpAAv8ukwRPlj-_b8jT-XdxZAIbUDF0TowefA_Y_Lz1tsmgM1Kn9F7-EUR_onQI0ggYc9doheH9xFrAZTTi0aTrsVmd8t6OkzVahXLur43YiAzb4ynogFgtjN5iT4coDKgu80k4JomM7s4GrdPIUVrxw_dg_pqJS00WOYEoNqXoVpMsUIy_p0tw8V1a7uP0Vir-msGDRoi0MlipBU3Q8ivlPmBJU_m6TXuzcQ4Zm0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10 pointer-events-none">
              <span className="text-secondary-fixed font-label text-xs tracking-[0.2em] uppercase mb-2">
                Featured Performance
              </span>
              <h3 className="font-headline text-3xl text-on-primary italic">Sunday Night Sanctuary Live</h3>
            </div>
          </button>
          <div className="md:col-span-4 group relative overflow-hidden bg-surface-container-high h-[400px] md:h-[600px]">
            <img
              alt="Studio Session"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_wMzMua66S19zL84YYsd-KoiIm03AdU3-rAStthPO2m79xGWuhNm8SyVPTYSDfQuEVy83-5O_zZ81-JjbYILhQunmWcmbMZnI6k_7dX4JGEL_zh4ZTxLqR6uGfWpdzWMtRDf7bagBd-7Ebwos2ZihP9t8HCOhm4wlv65yXdeSjBKn1BseJN4mzs-LfTAD5CbXPHmmFjFEAp56_3Ehx6BOtEHkkCGiLU8E2KYyg_Z3zN1LYDgoWgUhxFQvobHK37vQi_ao_DYZt54"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex flex-col justify-end p-8">
              <h3 className="font-headline text-2xl text-on-primary italic">The Recording Process</h3>
              <MaterialSymbol name="play_circle" className="text-secondary text-4xl mt-4" />
            </div>
          </div>
          <div className="md:col-span-4 group relative overflow-hidden bg-surface-container-high aspect-square">
            <img
              alt="Backstage Moments"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWgkraUmSos4uti1EmvNQ2UAFRcgtXXdTDMeu6ZTDjfgQ1F9eeLLQToXF0MVIHPYaegnZvB2EWTfCD76q31WdpE4Ta2itJ2OkimzldeX3KgnCsIN2GSfynTlWNDroNON39CGSQHxgvmDS-KOBBLYpUAIm1sgTns58U6ShJHGIxaap4GMElHAvxEexrtSkyZijamfdXp-7YKJZbQNbetdJf_Bwp4SQp7GuAGGCU3jV2X7cW3vG0B1UW618duNns9zHBSa00sXA9HY"
            />
          </div>
          <div className="md:col-span-4 group relative overflow-hidden bg-surface-container-high aspect-square">
            <img
              alt="Cathedral Concert"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuArNQOW7QqgqMvVmf9MfEEUxwZoVDGk9-nBh1k8MDbJi0Wsli3oq0UdOXiG75u8Yn_o_8CckSr14r5m3YpIvGVWG8FT-ajsdoM9tqE3GXkqcyJj9-zHo3-hphGT-S5IYPklnHAFnYZq9WSeMS_qlsv07fgcvutqfRMrhfydbF-GTFD1Id-P0RDWJCVtZbs4xgipCzFeYz2disY6Cka7S3dCDzGdJlkVBd2U3gk4ptgAdD6X3JpKCSh78NLPlb6smzDMFz2MhitdVfc"
            />
          </div>
          <div className="md:col-span-4 group relative overflow-hidden bg-surface-container-high aspect-square">
            <img
              alt="Piano Details"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuDoWdMZJA_ekaEUmxMuq3xJDNQrpz-isYaKkUBPkOPxwEaMmkbFqoxemKxM3wXAMc3CMx1LrvLqYpMZZ_I6XTSHQFM3nA_CqtAkPMfYQQTqd5FjWVwukOn8xoERcSKJYdQc8ngcmShL2D57AFFP7YI7SD6XM0YHvMbXgxZCqdRfOPVdudYIiHI7tb2dw0s-r2R4nK9Srjrs4E885tzeyyxvH6bjD5p3-k8GhD6dYWN1OXPUouA0aKk8IkTJBZ3g4FTP-R358BrqM"
            />
          </div>
          <div className="md:col-span-12 group relative overflow-hidden bg-surface-container-low h-[500px]">
            <img
              alt="Spirit of Worship"
              className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ826sZsl2KL3wGJ4XBW62nk7bQi6AFhEHutuSZWn6-rXrmnrG3-5qXU_lNFRlUdPb3dnhAskuWNnyWetVOotFPzZpiYpXC3hahKhEyCH7goGFFCzwKVT2LazYZm3_If3x6cdAhdqHkvyH0nrzVq79moh6Eqir5VX9O36swfRohpeTfZ1T95TqNFJZmBW5kltgoG0IomnMD6TuoRUpUDTsnUxWyHLl3dybZQrVANE7dlIhfZq9E7CYwysW64qYT0iN98_0CEncGRc"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h2 className="font-headline text-5xl md:text-7xl text-primary italic mb-6">Awakening the Soul</h2>
                <button
                  type="button"
                  className="bg-primary text-on-primary px-10 py-4 rounded-full font-label text-sm tracking-widest uppercase hover:scale-105 transition-all"
                >
                  Watch Music Video
                </button>
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
