export type SkillCategory = "frontend" | "backend" | "tooling" | "collaboration";

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
    description: "웹 UI, React·Next.js, 포트폴리오 사이트 제작",
  },
  backend: {
    label: "Backend",
    description: "Java·Spring 기반 API, DB, 인증·실시간 통신",
  },
  tooling: {
    label: "Tooling",
    description: "Git, CI/CD, 컨테이너·클라우드 배포, 코드 품질",
  },
  collaboration: {
    label: "Collaboration",
    description: "AI 도구 활용 협업·문서화·워크플로",
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
  { name: "MCP", category: "collaboration" },
  { name: "ChatGPT", category: "collaboration" },
  { name: "Cursor", category: "collaboration" },
] as const;

export function getSkillsByCategory(
  category: SkillCategory,
): readonly Skill[] {
  return skills.filter((s) => s.category === category);
}
