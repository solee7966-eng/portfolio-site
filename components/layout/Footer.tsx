import Link from "next/link";

import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-surface shadow-[0_-1px_0_0_rgba(15,23,42,0.04)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-muted">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link
            href={siteConfig.links.github}
            className="text-muted transition-colors hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link
            href={siteConfig.links.email}
            className="text-muted transition-colors hover:text-accent"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
