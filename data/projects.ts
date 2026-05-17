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
      "기업 공고·지원자·제안·PortOne 결제·스케줄러. MSA 전환, Jenkins/Docker, 개인 확장 실시간 채팅까지 구현한 프로젝트입니다.",
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
    title: "DeviceMarket 쇼핑몰",
    summary: "JSP/Servlet 기반 MVC 패턴 휴대폰 쇼핑몰",
    description:
      "상품·옵션·이미지를 분리한 데이터 구조로 옵션별 가격과 재고를 관리하고, FrontController 기반 MVC2 구조로 구현한 팀 프로젝트입니다.",
    thumbnail: "/projects/shopping-mall/shopping-main.png",
    thumbnailAlt: "DeviceMarket 쇼핑몰 메인 화면",
    techStack: ["Java", "JSP", "Servlet", "Oracle", "JDBC", "MVC2"],
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
