export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://efuablack.com";

export const siteName = "Efua Black";
export const defaultDescription =
  "Gospel musician and worship minister — music, ministry, events, and bookings.";

export type SocialPlatform = "youtube" | "facebook" | "x" | "tiktok" | "instagram";

export type SocialLink = {
  platform: SocialPlatform;
  href: string;
  label: string;
};

export const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "efuablack@gmail.com";
export const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE?.trim() || "+233 532 702 003";

export const socialLinks: SocialLink[] = [
  { platform: "youtube", href: "https://www.youtube.com/@EfuaBlack", label: "YouTube" },
  {
    platform: "facebook",
    href: "https://web.facebook.com/efuaBLACKK?_rdc=1&_rdr",
    label: "Facebook",
  },
  { platform: "x", href: "https://x.com/EfuaBlackk", label: "Twitter" },
  { platform: "tiktok", href: "https://www.tiktok.com/@efuablack", label: "TikTok" },
  { platform: "instagram", href: "https://www.instagram.com/efuablackk", label: "Instagram" },
];
