export type NavItem = {
  href: string;
  label: string;
};

export type SiteLinks = {
  github: string;
  email: string;
};

export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  /** Canonical site URL — replace before production deploy */
  url: string;
  nav: readonly NavItem[];
  links: SiteLinks;
};

export const siteConfig: SiteConfig = {
  name: "안태훈",
  title: "안태훈 | 신입 웹 개발자 포트폴리오",
  description:
    "신입 웹 개발자 안태훈의 포트폴리오입니다. JobFinder에서 Spring Boot·Oracle·MyBatis 기반 기업 기능, 결제, 스케줄러, WebSocket 채팅 확장과 Docker·Jenkins·AWS EC2 배포를 경험했으며, 프로젝트 경험을 구조와 문제 해결 흐름 중심으로 정리했습니다.",
  url: "https://taehoon-portfolio.vercel.app",
  nav: [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/process", label: "Process" },
    { href: "/about", label: "About" },
  ],
  links: {
    github: "https://github.com/solee7966-eng",
    email: "mailto:solee7966@naver.com",
  },
};
