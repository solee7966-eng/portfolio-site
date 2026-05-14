import Link from "next/link";

import { siteConfig } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/90 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-surface/80">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
        >
          {siteConfig.name}
        </Link>
        <nav aria-label="Main" className="hidden sm:block">
          <ul className="flex items-center gap-1 md:gap-2">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-2 py-1.5 text-sm text-muted transition-colors hover:bg-surface-muted hover:text-foreground md:px-3"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <details className="relative sm:hidden">
          <summary className="cursor-pointer list-none rounded-md border border-border px-3 py-1.5 text-sm text-foreground marker:hidden [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <ul className="absolute right-0 mt-2 w-48 rounded-lg border border-border bg-surface py-1 shadow-md ring-1 ring-slate-900/5">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-sm text-muted hover:bg-surface-muted hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </header>
  );
}
