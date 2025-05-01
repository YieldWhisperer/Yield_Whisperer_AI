// SocialIcons.tsx
import * as React from "react";

export const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="none" width={20} height={20} {...props} aria-hidden="true">
    <rect width="32" height="32" rx="16" fill="#000" />
    <path d="M11 9h2.6l3.4 4.6L20.8 9H23l-5 6.7L23 23h-2.6l-3.7-5-3.7 5H9l5.1-6.8L9 9zm2.6 10.2l2.4-3.2 2.3 3.2H13.6z" fill="#fff" />
  </svg>
);

export const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="none" width={20} height={20} {...props} aria-hidden="true">
    <rect width="32" height="32" rx="16" fill="#229ED9" />
    <path d="M23.6 10.6a1 1 0 00-1.1-.2l-12 4.7c-.5.2-.8.6-.8 1.1s.3.9.8 1.1l2.7 1 1 2.7c.2.5.6.8 1.1.8.2 0 .3 0 .5-.1l4.7-12c.2-.5.1-1.1-.2-1.1zM14 20.7l-1-2.7 7.6-7.6-6.6 10.3z" fill="#fff" />
  </svg>
);

// Github Icon
export const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" width={20} height={20} {...props} aria-hidden="true">
    <circle cx="12" cy="12" r="12" fill="#181717" />
    <path fillRule="evenodd" clipRule="evenodd" d="M12 6.3c-3.17 0-5.75 2.58-5.75 5.75 0 2.54 1.64 4.7 3.92 5.46.29.05.39-.13.39-.28 0-.14-.01-.51-.01-.99-1.6.35-1.94-.77-1.94-.77-.26-.66-.64-.84-.64-.84-.53-.36.04-.36.04-.36.58.04.89.6.89.6.52.89 1.36.63 1.69.48.05-.38.2-.63.36-.78-1.28-.15-2.63-.64-2.63-2.85 0-.63.22-1.15.59-1.56-.06-.15-.26-.77.06-1.6 0 0 .49-.16 1.6.6a5.52 5.52 0 012.92 0c1.1-.76 1.6-.6 1.6-.6.32.83.12 1.45.06 1.6.37.41.59.93.59 1.56 0 2.21-1.36 2.7-2.65 2.85.21.18.39.53.39 1.07 0 .77-.01 1.39-.01 1.58 0 .15.1.33.4.28A6.01 6.01 0 0017.75 12c0-3.17-2.58-5.75-5.75-5.75z" fill="#fff" />
  </svg>
);
