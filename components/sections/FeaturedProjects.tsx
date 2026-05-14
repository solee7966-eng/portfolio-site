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
            title="Featured projects"
            subtitle="대표 프로젝트 요약. 상세 케이스 스터디는 각 프로젝트 페이지에서 확장합니다."
          />
          <Link
            href="/projects"
            className="shrink-0 text-sm font-medium text-accent hover:text-accent-hover"
          >
            All projects →
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
