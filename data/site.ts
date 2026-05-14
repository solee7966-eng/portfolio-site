export type NavItem = {
  href: string;
  label: string;
};

export type SiteLinks = {
  github: string;
  email: string;
};

export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  /** Canonical site URL — replace before production deploy */
  url: string;
  nav: readonly NavItem[];
  links: SiteLinks;
};

export const siteConfig: SiteConfig = {
  name: "Developer",
  title: "Developer Portfolio",
  description:
    "Next.js 기반 개발자 포트폴리오 — JobFinder, 쇼핑몰, MCP 멀티에이전트 협업 경험.",
  url: "https://example.com",
  nav: [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/process", label: "Process" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  links: {
    github: "https://github.com/yourusername",
    email: "mailto:you@example.com",
  },
};
