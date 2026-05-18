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
  badgeLabel?: string;
  /** App Router path to case study */
  href: `/projects/${ProjectSlug}`;
};

export const projects: readonly Project[] = [
  {
    slug: "jobfinder",
    title: "JobFinder",
    summary: "Spring Boot 기반 MSA 채용 플랫폼",
    description:
      "채용 플랫폼의 기업 기능, 결제, 실시간 채팅 확장과 Jenkins/Docker 기반 배포 개선을 담았습니다.",
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
    badgeLabel: "대표 프로젝트",
    href: "/projects/jobfinder",
  },
  {
    slug: "shopping-mall",
    title: "DeviceMarket 쇼핑몰",
    summary: "JSP/Servlet 기반 MVC 패턴 휴대폰 쇼핑몰",
    description:
      "상품 옵션 구조를 분리해 옵션별 가격·재고를 관리하고, MVC2 흐름으로 구현한 팀 프로젝트입니다.",
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
