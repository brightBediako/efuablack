import Link from "next/link";

type Props = {
  className?: string;
  linkClassName?: string;
};

const defaultLink =
  "text-[#320b44] opacity-60 font-sans text-sm tracking-widest uppercase hover:opacity-100 hover:text-[#775a19] transition-all dark:text-[#eedbff]";

export function FooterLegal({ className }: Props) {
  return (
    <div className={`flex flex-wrap justify-center gap-8 ${className ?? ""}`}>
      <Link href="/privacy" className={defaultLink}>
        Privacy Policy
      </Link>
      <Link href="/terms" className={defaultLink}>
        Terms of Service
      </Link>
      <Link href="/contact" className={defaultLink}>
        Contact
      </Link>
      <Link href="/contact?topic=media-kit" className={defaultLink}>
        Media Kit
      </Link>
      <Link href="/admin/login" className={defaultLink}>
        Admin
      </Link>
    </div>
  );
}
