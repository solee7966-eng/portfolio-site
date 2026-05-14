export type ProjectSlug = "jobfinder" | "shopping-mall";

export type Project = {
  slug: ProjectSlug;
  title: string;
  /** One line for cards and lists */
  summary: string;
  /** Longer blurb for detail placeholders */
  description: string;
  techStack: readonly string[];
  featured: boolean;
  /** App Router path to case study */
  href: `/projects/${ProjectSlug}`;
};

export const projects: readonly Project[] = [
  {
    slug: "jobfinder",
    title: "JobFinder",
    summary: "채용/구직 관련 웹 애플리케이션 (요약)",
    description:
      "JobFinder 프로젝트 상세 페이지입니다. 문제 정의, 아키텍처, 기술 선택 이유 등을 이후 섹션으로 확장할 수 있습니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: true,
    href: "/projects/jobfinder",
  },
  {
    slug: "shopping-mall",
    title: "Shopping Mall",
    summary: "이커머스/쇼핑몰 프로젝트 (요약)",
    description:
      "쇼핑몰 프로젝트 상세 페이지입니다. 결제·장바구니·관리자 흐름 등을 단계적으로 채워 넣을 수 있습니다.",
    techStack: ["React", "TypeScript", "Node.js"],
    featured: true,
    href: "/projects/shopping-mall",
  },
] as const;

export function getProjectBySlug(slug: ProjectSlug): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): readonly Project[] {
  return projects.filter((p) => p.featured);
}
