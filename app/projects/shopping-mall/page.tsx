import type { Metadata } from "next";
import Link from "next/link";

import { TechBadge } from "@/components/ui/TechBadge";
import { getProjectBySlug } from "@/data/projects";

export const metadata: Metadata = {
  title: "Shopping Mall",
  description: "쇼핑몰 프로젝트 케이스 스터디 (초안)",
};

export default function ShoppingMallProjectPage() {
  const project = getProjectBySlug("shopping-mall");

  if (!project) {
    return null;
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
      <p className="text-sm text-muted">
        <Link href="/projects" className="hover:text-accent">
          Projects
        </Link>
        <span className="mx-2 text-border">/</span>
        <span className="text-foreground">{project.title}</span>
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {project.title}
      </h1>
      <p className="mt-2 text-muted">{project.summary}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <TechBadge key={tech} label={tech} />
        ))}
      </div>
      <div className="mt-10 space-y-4 rounded-lg border border-border bg-surface p-6 text-sm leading-relaxed text-muted shadow-sm md:text-base">
        <p>
          <strong className="text-foreground">Placeholder.</strong>{" "}
          {project.description}
        </p>
        <p>
          이후 카탈로그, 장바구니, 결제, 관리자, 성능·보안 고려 사항 등을
          섹션으로 나누어 작성할 수 있습니다.
        </p>
      </div>
    </div>
  );
}
