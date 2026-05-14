import Link from "next/link";

import { siteConfig } from "@/data/site";

export function HeroSection() {
  return (
    <section className="border-b border-border bg-gradient-to-b from-surface via-background to-background py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Portfolio
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          {siteConfig.title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {siteConfig.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
          >
            View projects
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-surface-muted"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
