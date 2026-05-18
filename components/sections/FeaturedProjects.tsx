import Link from "next/link";

import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getFeaturedProjects } from "@/data/projects";

// 대표 프로젝트와 보조 프로젝트의 성격 차이가 드러나도록 카드 설명을 구성한다.
export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className="py-14 md:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            title="주요 프로젝트"
            subtitle="운영·배포 경험을 담은 JobFinder와 설계·비즈니스 로직을 중심으로 구현한 DeviceMarket을 정리했습니다."
          />
          <Link
            href="/projects"
            className="shrink-0 text-sm font-medium text-accent hover:text-accent-hover"
          >
            전체 프로젝트 보기 →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
