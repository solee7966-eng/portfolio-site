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
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        Contact
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
        프로젝트와 코드 기록은 GitHub에서 확인할 수 있으며, 연락은 이메일로
        가능합니다.
      </p>
      <ul className="mt-10 space-y-5 rounded-xl border border-border bg-surface p-6 text-base shadow-sm md:p-8">
        <li className="border-b border-border pb-5">
          <span className="text-sm font-medium uppercase tracking-wide text-muted">
            GitHub
          </span>
          <div className="mt-2 wrap-break-word">
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
          <div className="mt-2 wrap-break-word">
            <Link href={links.email} className="text-accent hover:text-accent-hover">
              {links.email.replace(/^mailto:/, "")}
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}
