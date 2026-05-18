import { FeatureCard } from "@/components/ui/FeatureCard";
import { PageSection } from "@/components/ui/PageSection";

// 기존 협업 프로젝트와 포트폴리오 재구성 과정의 역할을 분리한다.
const PROJECT_CONTEXTS = [
  {
    title: "협업 프로젝트",
    description:
      "JobFinder와 DeviceMarket은 팀 단위로 진행한 프로젝트입니다. 담당 기능을 직접 구현하고, DB 구조와 서비스 흐름을 이해하며 개발 경험을 쌓았습니다.",
  },
  {
    title: "포트폴리오 사이트",
    description:
      "기존 프로젝트 경험을 다시 분석하고, 핵심 기능과 설계 의도를 포트폴리오 관점으로 재구성한 개인 프로젝트입니다.",
  },
  {
    title: "정리 방식",
    description:
      "프로젝트 경험을 기능, 설계 의도, 화면 흐름으로 다시 나누고 포트폴리오에 맞는 정보 구조로 재배치했습니다.",
  },
] as const;


// FlowSection: 문제 정의→설계→구현→검증 흐름이 보이도록 단계형 카드 구조를 사용한다.
const PROCESS_STEPS = [
  {
    title: "1. 문제 정의",
    description:
      "사용성, 정보 밀도, 데이터 흐름에서 먼저 해결해야 할 문제를 정리합니다. 바로 구현하기보다 페이지와 기능이 왜 필요한지 먼저 좁힙니다.",
  },
  {
    title: "2. 구조 설계",
    description:
      "섹션 역할, 컴포넌트 구조, 데이터 흐름을 먼저 잡습니다. 수정 범위를 작게 나누어 변경 영향이 커지지 않도록 합니다.",
  },
  {
    title: "3. 초안 작성",
    description:
      "구조화한 요구사항을 바탕으로 문구와 화면 초안을 작성합니다. 필요한 파일과 변경 범위를 명확히 제한합니다.",
  },
  {
    title: "4. 검증",
    description:
      "lint/build 확인, 실제 화면 검수, 문구 흐름 재검토를 통해 변경 사항이 의도대로 반영됐는지 확인합니다.",
  },
  {
    title: "5. 개선 반복",
    description:
      "스크린샷과 실제 사용 흐름을 기준으로 다시 조정합니다. 기능 추가보다 밀도, 여백, 가독성 개선에 집중합니다.",
  },
] as const;

// 실제 포트폴리오 작업에서 반복한 before/after 개선 사례를 짧게 보여준다.
const EXAMPLES = [
  {
    title: "Hero 문구 압축",
    before: "기술, 프로젝트, 포트폴리오 제작 방식, AI 활용 설명이 한 영역에 섞여 있었습니다.",
    after:
      "신입 웹 개발자로서의 방향성과 구현·배포 경험만 먼저 보이도록 문구를 줄였습니다.",
  },
  {
    title: "프로젝트 카드 설명 압축",
    before: "기능과 기술이 길게 나열되어 카드의 핵심 차이가 한눈에 보이지 않았습니다.",
    after:
      "JobFinder는 운영·배포, DeviceMarket은 옵션 구조·데이터 설계가 먼저 보이도록 정리했습니다.",
  },
  {
    title: "작업 방식 섹션 개선",
    before: "임시 안내 문구가 남아 있어 실제 포트폴리오 페이지처럼 보이지 않았습니다.",
    after:
      "문제 정의, 구조 설계, 구현·검증의 흐름을 3단계 카드로 바꿔 작업 방식이 보이게 했습니다.",
  },
] as const;

// WorkflowPrinciples: 도구보다 직접 검토와 검증 흐름을 강조한다.
const WORKFLOW_PRINCIPLES = [
  "구조와 방향은 직접 설계합니다.",
  "반복 구현 도구는 정리한 기준을 화면에 옮기는 보조 수단으로 사용합니다.",
  "변경 사항은 직접 읽고 화면 기준으로 다시 검토합니다.",
  "lint/build 결과로 기본 품질을 확인합니다.",
  "최종 판단은 실제 UI 흐름과 Git 변경 기록을 기준으로 합니다.",
] as const;

export function ProcessPageContent() {
  return (
    <div>
      {/* Hero: 포트폴리오 재구성 과정이 먼저 보이도록 페이지 역할을 명확히 한다. */}
      <header className="border-b border-border pb-12 sm:pb-14">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Portfolio process
        </p>
        <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          기존 프로젝트 경험을 포트폴리오로 재구성한 과정
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          JobFinder와 DeviceMarket에서 쌓은 협업 프로젝트 경험을 다시 분석하고,
          핵심 기능과 설계 의도가 잘 드러나도록 개인 포트폴리오 사이트로 정리한
          과정을 담았습니다.
        </p>
      </header>

      <PageSection
        id="context"
        title="프로젝트 성격 구분"
        subtitle="협업 프로젝트와 포트폴리오 사이트 제작 과정이 같은 방식으로 보이지 않도록 역할을 분리했습니다."
      >
        <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
          {PROJECT_CONTEXTS.map((item) => (
            <FeatureCard
              key={item.title}
              title={item.title}
              description={item.description}
              className="h-full p-6"
            />
          ))}
        </div>
      </PageSection>

      <div className="divide-y divide-border">
        <PageSection
          id="flow"
          title="포트폴리오 제작 흐름"
          subtitle="기존 프로젝트 경험을 정리하고, 페이지 구조와 문구를 검증 가능한 단위로 나누어 개선했습니다."
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS_STEPS.map((step) => (
              <FeatureCard
                key={step.title}
                title={step.title}
                description={step.description}
                className="h-full"
              />
            ))}
          </div>
        </PageSection>

        <PageSection
          id="examples"
          title="포트폴리오 개선 예시"
          subtitle="포트폴리오 사이트 제작 과정에서 화면을 보며 문구, 정보 밀도, 섹션 역할을 반복적으로 조정한 사례입니다."
        >
          <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
            {EXAMPLES.map((example) => (
              <article
                key={example.title}
                className="rounded-lg border border-border bg-surface p-6 shadow-sm"
              >
                <h3 className="text-base font-semibold text-foreground">
                  {example.title}
                </h3>
                <div className="mt-5 space-y-5 text-sm leading-relaxed">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Before
                    </p>
                    <p className="mt-2 text-muted">{example.before}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                      After
                    </p>
                    <p className="mt-2 text-muted">{example.after}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </PageSection>

        <PageSection
          id="ai-principles"
          title="구조화와 검토 원칙"
          subtitle="포트폴리오 제작 과정에서는 도구 사용보다 기준을 세우고 직접 검토하는 흐름을 우선했습니다."
        >
          <div className="rounded-lg border border-border bg-surface p-6 shadow-sm md:p-7">
            <ul className="grid gap-4 text-sm leading-relaxed text-muted md:grid-cols-2 md:gap-x-8">
              {WORKFLOW_PRINCIPLES.map((principle) => (
                <li key={principle} className="flex gap-3">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </div>
        </PageSection>

        <PageSection id="closing" title="마무리">
          <div className="rounded-lg border border-border bg-surface p-6 text-sm leading-relaxed text-muted shadow-sm md:p-8 md:text-base">
            <p>
              <span className="block">단순히 화면을 빠르게 만드는 것보다, 기존 프로젝트 경험을 어떤 기준으로 보여줄지 먼저 정리하고 구조화하는 과정을 중요하게 생각합니다.</span>
              <span className="block">이 포트폴리오 사이트도 문구, 컴포넌트, 데이터 구조, 화면 밀도를 나누어 검토하며 개선했습니다.</span>
            </p>
          </div>
        </PageSection>
      </div>
    </div>
  );
}
