import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "연락처 및 소셜 링크",
};

export default function ContactPage() {
  const { links } = siteConfig;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        Contact
      </h1>
      <p className="mt-2 text-muted">연락처 / GitHub / 이메일 (초안)</p>
      <ul className="mt-10 space-y-4 text-base">
        <li>
          <span className="text-sm font-medium uppercase tracking-wide text-muted">
            GitHub
          </span>
          <div className="mt-1">
            <Link
              href={links.github}
              className="text-accent hover:text-accent-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              {links.github}
            </Link>
          </div>
        </li>
        <li>
          <span className="text-sm font-medium uppercase tracking-wide text-muted">
            Email
          </span>
          <div className="mt-1">
            <Link href={links.email} className="text-accent hover:text-accent-hover">
              {links.email.replace(/^mailto:/, "")}
            </Link>
          </div>
        </li>
      </ul>
      <p className="mt-8 rounded-lg border border-border bg-surface p-4 text-sm text-muted shadow-sm">
        실제 주소는{" "}
        <code className="rounded border border-border/60 bg-surface-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
          data/site.ts
        </code>{" "}
        의{" "}
        <code className="rounded border border-border/60 bg-surface-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
          links
        </code>{" "}
        를 수정하세요.
      </p>
    </div>
  );
}
