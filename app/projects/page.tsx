import type { Metadata } from "next";

import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "포트폴리오 프로젝트 목록",
};

export default function ProjectsPage() {
  return (
    <div className="animate-page-enter mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-16">
      <p className="text-sm font-medium uppercase tracking-widest text-accent">
        Projects
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        구현 프로젝트
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
        <span className="block">JobFinder와 DeviceMarket에서 구현한 기능과 문제 해결 과정을 정리했습니다.</span>
        <span className="block">각 카드에서 상세 페이지로 이동할 수 있습니다.</span>
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
