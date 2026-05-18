import Link from "next/link";

import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-surface shadow-[0_-1px_0_0_rgba(15,23,42,0.04)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm leading-relaxed text-muted">
          © {year} {siteConfig.name} · Built with Next.js & Tailwind CSS
        </p>
        <div className="flex flex-wrap gap-4 text-sm font-medium">
          <Link
            href={siteConfig.links.github}
            className="inline-flex text-muted transition-[color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link
            href={siteConfig.links.email}
            className="inline-flex text-muted transition-[color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:text-accent"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
