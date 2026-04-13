import type { SocialPlatform } from "@/lib/site-config";

type SocialIconProps = {
  platform: SocialPlatform;
  href: string;
  label: string;
  className?: string;
};

const baseClasses =
  "w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-high transition-colors";

function PlatformGlyph({ platform }: { platform: SocialPlatform }) {
  if (platform === "youtube") {
    return (
      <svg
        className="h-5 w-5 text-secondary"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M23.5 6.2a2.9 2.9 0 0 0-2-2C19.6 3.7 12 3.7 12 3.7s-7.6 0-9.5.5a2.9 2.9 0 0 0-2 2A30.4 30.4 0 0 0 0 12a30.4 30.4 0 0 0 .5 5.8 2.9 2.9 0 0 0 2 2c1.9.5 9.5.5 9.5.5s7.6 0 9.5-.5a2.9 2.9 0 0 0 2-2A30.4 30.4 0 0 0 24 12a30.4 30.4 0 0 0-.5-5.8ZM9.6 15.7V8.3l6.5 3.7-6.5 3.7Z" />
      </svg>
    );
  }

  if (platform === "facebook") {
    return (
      <svg
        className="h-5 w-5 text-secondary"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.7V12h2.7V9.8c0-2.7 1.6-4.2 4.1-4.2 1.2 0 2.4.2 2.4.2v2.6h-1.4c-1.4 0-1.9.9-1.9 1.8V12h3.2l-.5 2.9h-2.7v7A10 10 0 0 0 22 12Z" />
      </svg>
    );
  }

  if (platform === "x") {
    return (
      <svg
        className="h-5 w-5 text-secondary"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.9 2H22l-6.9 7.9L23.2 22h-6.4l-5-6.6L6 22H2.9l7.4-8.4L.8 2h6.5l4.5 6 5.1-6Zm-1.1 18h1.8L6.4 3.9H4.5L17.8 20Z" />
      </svg>
    );
  }

  if (platform === "tiktok") {
    return (
      <svg
        className="h-5 w-5 text-secondary"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.8 4c.8 1.8 2.1 2.9 4.2 3.1v3.2a7.9 7.9 0 0 1-4.1-1.2v6.2a5.8 5.8 0 1 1-5.8-5.8c.3 0 .6 0 .9.1v3.2a2.5 2.5 0 1 0 1.6 2.4V2h3.2v2Z" />
      </svg>
    );
  }

  return (
    <svg
      className="h-5 w-5 text-secondary"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SocialIcon({ platform, href, label, className = "" }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${className}`.trim()}
      aria-label={label}
    >
      <PlatformGlyph platform={platform} />
    </a>
  );
}
