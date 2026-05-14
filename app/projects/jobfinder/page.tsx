import type { Metadata } from "next";
import Link from "next/link";

import { TechBadge } from "@/components/ui/TechBadge";
import { getProjectBySlug } from "@/data/projects";

export const metadata: Metadata = {
  title: "JobFinder",
  description: "JobFinder 프로젝트 케이스 스터디 (초안)",
};

export default function JobFinderProjectPage() {
  const project = getProjectBySlug("jobfinder");

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
          이후 이 페이지에 문제 정의, 사용자 흐름, 기술 스택 선정, 트레이드오프,
          배포 링크 등을 섹션별로 추가하면 됩니다.
        </p>
      </div>
    </div>
  );
}
