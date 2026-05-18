import { PageSection } from "@/components/ui/PageSection";

const PAGE_ROLES = [
  {
    title: "Home",
    description:
      "핵심 소개와 Projects, Process, GitHub로 이어지는 진입점을 제공합니다.",
  },
  {
    title: "Projects",
    description:
      "구현 결과와 프로젝트별 상세 기능, 문제 해결 과정을 보여줍니다.",
  },
  {
    title: "Process",
    description:
      "포트폴리오 사이트를 어떤 기준으로 정리하고 검증했는지 설명합니다.",
  },
  {
    title: "About",
    description:
      "개인 정보, 연락처, 학력, 자격증, 훈련 이수 내역을 모아 둡니다.",
  },
  {
    title: "Footer",
    description:
      "GitHub와 Email만 남겨 전역 연락 진입점으로 사용합니다.",
  },
] as const;

const IMPLEMENTATION_ITEMS = [
  "Next.js App Router 기반 페이지 구성",
  "공통 섹션 컴포넌트 재사용",
  "데이터 배열 기반 렌더링",
  "Tailwind CSS 기반 레이아웃 구성",
] as const;

const TOOL_ITEMS = [
  "Cursor: 구조 정리, 구현 보조, 수정 반복",
  "ChatGPT: 문구 정리, 구조 검토, 개선 방향 도출",
  "Git/GitHub: 변경 이력 관리",
  "Vercel: 배포",
  "npm lint/build: 검증",
] as const;

const VALIDATION_ITEMS = [
  "삭제한 라우트의 남은 링크 확인",
  "unused import 제거",
  "npm run lint",
  "npm run build",
  "이후 UI polish 단계에서 인터랙션 개선 예정",
] as const;

export function ProcessPageContent() {
  return (
    <div>
      <header className="border-b border-border pb-12 sm:pb-14">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Portfolio process
        </p>
        <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          포트폴리오 사이트 제작 과정
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          <span className="block">기존 프로젝트 경험을 방문자가 읽기 쉬운 구조로 재배치하고, </span>
          <span className="block">각 페이지가 다른 역할을 갖도록 설계했습니다.</span>
        </p>
      </header>

      <div className="divide-y divide-border">
        <PageSection
          id="structure"
          title="구조 설계"
          subtitle="각 페이지가 맡을 정보를 나누고 중복 설명을 줄였습니다."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PAGE_ROLES.map((role) => (
              <article
                key={role.title}
                className="rounded-lg border border-border bg-surface p-5 shadow-sm"
              >
                <div className="mb-3 h-1 w-8 rounded-full bg-accent/60" />
                <h3 className="text-base font-semibold text-foreground">{role.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {role.description}
                </p>
              </article>
            ))}
          </div>
        </PageSection>

        <PageSection
          id="implementation"
          title="구현 방식"
          subtitle="기존 구조를 크게 바꾸지 않고 필요한 단위만 정리했습니다."
        >
          <div className="rounded-lg border border-border bg-surface p-6 shadow-sm md:p-7">
            <ul className="grid gap-4 text-sm leading-relaxed text-muted md:grid-cols-2">
              {IMPLEMENTATION_ITEMS.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </PageSection>

        <PageSection
          id="tools"
          title="사용 도구"
          subtitle="도구는 제작 과정을 보조하는 역할로만 정리했습니다."
        >
          <div className="rounded-lg border border-border bg-surface p-6 shadow-sm md:p-7">
            <ul className="grid gap-4 text-sm leading-relaxed text-muted md:grid-cols-2">
              {TOOL_ITEMS.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </PageSection>

        <PageSection
          id="validation"
          title="검증과 개선"
          subtitle="라우트 삭제와 구조 변경 후 기본 안정성을 확인했습니다."
        >
          <div className="rounded-lg border border-border bg-surface p-6 shadow-sm md:p-7">
            <ul className="grid gap-4 text-sm leading-relaxed text-muted md:grid-cols-2">
              {VALIDATION_ITEMS.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </PageSection>
      </div>
    </div>
  );
}
