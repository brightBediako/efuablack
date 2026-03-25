import type { Metadata } from "next";
import Link from "next/link";
import { FooterLegal } from "@/components/FooterLegal";
import { BookingForm } from "@/components/forms/BookingForm";
import { MaterialSymbol } from "@/components/MaterialSymbol";
import { SiteNav } from "@/components/SiteNav";
import { defaultDescription } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Booking",
  description: `Book Efua Black for ministry and events — ${defaultDescription}`,
};

export default function BookingPage() {
  return (
    <>
      <SiteNav shell="booking" active="booking" />
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <header className="mb-20 text-center md:text-left">
          <h1 className="text-6xl md:text-8xl font-serif italic text-primary tracking-tight leading-tight">
            Book Efua Black
          </h1>
          <p className="mt-6 text-on-surface-variant max-w-2xl text-lg font-body font-light tracking-wide leading-relaxed">
            Invite a soulful presence to your next gathering. Whether for ministry, concert, or special
            engagement, we seek to create an atmosphere of divine connection.
          </p>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          <section className="lg:col-span-8 bg-surface-container-low rounded-xl p-8 md:p-12 shadow-sm">
            <BookingForm />
          </section>
          <aside className="lg:col-span-4 space-y-12">
            <div className="relative overflow-visible group">
              <img
                alt="Efua Black performing"
                className="w-full aspect-[4/5] object-cover rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD888_MdovlAKFmRUYwcErgMxtV6RUm1TUHRDuMORn9mFzG8LS-RJrnLRZHIWoMq2IZXOR2xCa58SA8pPPUA46A3XTZ-hhFjMYdkrL-rUQQaf-YWi8Wrpz-HUlTT0Sf8mMsSW30bs3HCPnsffUQ3ykTatrAAdvy0Ock4sK9QlFu3VqNSdmsg_5sjrX3e3WVQh01R7F_WeFZKgTIQB57Tpm7yTmCyYUTyetPg_CkPvuJ76jPNpjYcT25PnK-WF5RoCp52SVAEeUm4mI"
              />
              <div className="absolute -bottom-6 -right-6 p-6 bg-secondary-container text-on-secondary-container rounded-lg shadow-xl max-w-[200px]">
                <p className="font-serif italic text-lg leading-snug">
                  &quot;Music is the bridge between the human and the divine.&quot;
                </p>
              </div>
            </div>
            <div className="space-y-8 pt-8">
              <div>
                <h3 className="text-2xl font-serif text-primary italic mb-4">Expectations</h3>
                <ul className="space-y-4 font-body text-on-surface-variant">
                  <li className="flex gap-4 items-start">
                    <MaterialSymbol name="verified" className="text-secondary" />
                    <span>Initial response within 48 business hours.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <MaterialSymbol name="verified" className="text-secondary" />
                    <span>Professional rider and tech requirements provided upon confirmation.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <MaterialSymbol name="verified" className="text-secondary" />
                    <span>Commitment to excellence and spiritual integrity.</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 bg-tertiary-fixed rounded-xl border-l-4 border-secondary">
                <h3 className="text-xs uppercase tracking-widest text-secondary font-extrabold mb-4">
                  Direct Inquiry
                </h3>
                <p className="font-body text-primary-container leading-relaxed">
                  For urgent media requests or time-sensitive invitations:
                  <br />
                  <br />
                  <Link href="mailto:management@efuablack.com" className="font-bold block hover:underline">
                    management@efuablack.com
                  </Link>
                  <span className="opacity-70 block">+1 (555) EFUA-ART</span>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <footer className="bg-[#f7f2f8] dark:bg-[#1a0a25] w-full pt-20 pb-10">
        <div className="flex flex-col items-center justify-center gap-8 px-8 w-full">
          <div className="font-serif text-xl italic text-[#320b44] dark:text-[#eedbff]">Efua Black Ministry</div>
          <FooterLegal />
          <div className="text-[#320b44] opacity-40 font-sans text-[10px] tracking-widest uppercase dark:text-[#eedbff]">
            © 2024 Efua Black Ministry. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
