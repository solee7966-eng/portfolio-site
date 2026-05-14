import type { Metadata } from "next";

import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "포트폴리오 프로젝트 목록",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-16">
      <SectionTitle
        title="Projects"
        subtitle="JobFinder, 쇼핑몰 등 진행한 프로젝트 목록입니다. 각 카드에서 상세 페이지로 이동합니다."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
