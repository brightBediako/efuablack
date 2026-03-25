import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
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
      <main className="mx-auto max-w-7xl px-4 pb-24 pt-28 sm:px-6 sm:pt-32 md:px-12">
        <header className="mb-12 text-center md:mb-20 md:text-left">
          <h1 className="font-serif text-4xl italic leading-tight tracking-tight text-primary sm:text-5xl md:text-7xl lg:text-8xl">
            Book Efua Black
          </h1>
          <p className="mt-6 text-on-surface-variant max-w-2xl text-lg font-body font-light tracking-wide leading-relaxed">
            Invite a soulful presence to your next gathering. Whether for ministry, concert, or special
            engagement, we seek to create an atmosphere of divine connection.
          </p>
        </header>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-20">
          <section className="rounded-xl bg-surface-container-low p-6 shadow-sm sm:p-8 md:p-12 lg:col-span-8">
            <BookingForm />
          </section>
          <aside className="lg:col-span-4 space-y-12">
            <div className="group relative overflow-visible">
              <img
                alt="Efua Black performing"
                className="aspect-[4/5] w-full rounded-lg object-cover shadow-2xl grayscale transition-all duration-700 hover:grayscale-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD888_MdovlAKFmRUYwcErgMxtV6RUm1TUHRDuMORn9mFzG8LS-RJrnLRZHIWoMq2IZXOR2xCa58SA8pPPUA46A3XTZ-hhFjMYdkrL-rUQQaf-YWi8Wrpz-HUlTT0Sf8mMsSW30bs3HCPnsffUQ3ykTatrAAdvy0Ock4sK9QlFu3VqNSdmsg_5sjrX3e3WVQh01R7F_WeFZKgTIQB57Tpm7yTmCyYUTyetPg_CkPvuJ76jPNpjYcT25PnK-WF5RoCp52SVAEeUm4mI"
              />
              <div className="relative mt-4 max-w-[220px] rounded-lg bg-secondary-container p-5 text-on-secondary-container shadow-xl sm:absolute sm:-bottom-6 sm:-right-6 sm:mt-0 sm:max-w-[200px] sm:p-6">
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

      <SiteFooter />
    </>
  );
}
