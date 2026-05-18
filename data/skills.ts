export type SkillCategory = "frontend" | "backend" | "tooling";

export type Skill = {
  name: string;
  category: SkillCategory;
};

export const skillCategories: Record<
  SkillCategory,
  { label: string; description: string }
> = {
  frontend: {
    label: "Frontend",
    description: "포트폴리오 UI와 JSP 기반 화면 구현 경험",
  },
  backend: {
    label: "Backend",
    description: "Spring Boot 기반 API, 인증, DB 연동, 실시간 통신 구현",
  },
  tooling: {
    label: "Tooling",
    description: "Docker·Jenkins·AWS EC2 기반 배포와 품질 점검 경험",
  },
};

export const skills: readonly Skill[] = [
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Java", category: "backend" },
  { name: "Spring Boot", category: "backend" },
  { name: "Spring Security", category: "backend" },
  { name: "MyBatis", category: "backend" },
  { name: "Oracle", category: "backend" },
  { name: "MySQL", category: "backend" },
  { name: "WebSocket", category: "backend" },
  { name: "STOMP", category: "backend" },
  { name: "Docker", category: "tooling" },
  { name: "Jenkins", category: "tooling" },
  { name: "AWS EC2", category: "tooling" },
  { name: "Nginx", category: "tooling" },
  { name: "Git", category: "tooling" },
  { name: "GitHub", category: "tooling" },
  { name: "Vercel", category: "tooling" },
  { name: "SonarQube", category: "tooling" },
] as const;

export function getSkillsByCategory(
  category: SkillCategory,
): readonly Skill[] {
  return skills.filter((s) => s.category === category);
}
