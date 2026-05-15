import Link from "next/link";

import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getFeaturedProjects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            title="주요 프로젝트"
            subtitle="구현·배포·개선 경험이 담긴 대표 프로젝트입니다. 상세 내용은 각 프로젝트 페이지에서 확인할 수 있습니다."
          />
          <Link
            href="/projects"
            className="shrink-0 text-sm font-medium text-accent hover:text-accent-hover"
          >
            전체 프로젝트 보기 →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
