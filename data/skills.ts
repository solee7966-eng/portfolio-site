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
    description: "UI, 접근성, 상태 관리",
  },
  backend: {
    label: "Backend",
    description: "API, 데이터, 인증",
  },
  tooling: {
    label: "Tooling",
    description: "빌드, 품질, 배포",
  },
  collaboration: {
    label: "Collaboration",
    description: "에이전트·워크플로·문서화",
  },
};

export const skills: readonly Skill[] = [
  { name: "TypeScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "Git", category: "tooling" },
  { name: "ESLint", category: "tooling" },
  { name: "Vercel", category: "tooling" },
  { name: "MCP", category: "collaboration" },
  { name: "Multi-agent workflows", category: "collaboration" },
] as const;

export function getSkillsByCategory(
  category: SkillCategory,
): readonly Skill[] {
  return skills.filter((s) => s.category === category);
}
