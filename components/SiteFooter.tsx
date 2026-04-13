import { FooterLegal } from "@/components/FooterLegal";
import { SocialIcon } from "@/components/SocialIcon";
import { socialLinks } from "@/lib/site-config";

type Props = {
  /** e.g. `mt-16` when the main block is short */
  className?: string;
};

export function SiteFooter({ className }: Props) {
  return (
    <footer
      className={`w-full bg-[#f7f2f8] pb-8 pt-16 dark:bg-[#1a0a25] sm:pb-10 sm:pt-20 ${className ?? ""}`}
    >
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-center gap-6 px-4 sm:gap-8 sm:px-8">
        <div className="text-center font-serif text-2xl italic text-[#320b44] dark:text-[#eedbff] sm:text-3xl">
          Efua Black
        </div>
        <FooterLegal className="max-w-md justify-center gap-x-5 gap-y-3 sm:max-w-none" />
        <div className="mt-1 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {socialLinks.map((social) => (
            <SocialIcon
              key={social.platform}
              platform={social.platform}
              href={social.href}
              label={social.label}
            />
          ))}
        </div>
        <p className="mt-2 text-center font-sans text-[10px] uppercase tracking-widest text-[#320b44] opacity-40 dark:text-[#eedbff] sm:text-xs">
          &copy; {new Date().getFullYear()} Efua Black Ministry. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
