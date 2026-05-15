export type ProjectSlug = "jobfinder" | "shopping-mall";

export type Project = {
  slug: ProjectSlug;
  title: string;
  /** One line for cards and lists */
  summary: string;
  /** Longer blurb for detail placeholders */
  description: string;
  /** Card thumbnail path under public/ */
  thumbnail?: string;
  thumbnailAlt?: string;
  techStack: readonly string[];
  featured: boolean;
  /** App Router path to case study */
  href: `/projects/${ProjectSlug}`;
};

export const projects: readonly Project[] = [
  {
    slug: "jobfinder",
    title: "JobFinder",
    summary: "Spring Boot 기반 MSA 채용 플랫폼",
    description:
      "기업 공고·지원자·제안·PortOne 결제·스케줄러. MSA 전환, Jenkins/Docker, 개인 확장 실시간 채팅까지.",
    thumbnail: "/projects/jobfinder/jobfinder-main.png",
    thumbnailAlt: "JobFinder 메인 화면",
    techStack: [
      "Spring Boot",
      "Oracle",
      "PortOne",
      "WebSocket",
      "Docker",
      "Jenkins",
    ],
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
