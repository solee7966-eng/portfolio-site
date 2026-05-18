import Link from "next/link";

import { SectionTitle } from "@/components/ui/SectionTitle";

const WORK_STEPS = [
  {
    title: "요구사항 정리",
  },
  {
    title: "페이지 역할 분리",
  },
  {
    title: "검증과 개선 반복",
  },
] as const;

// 메인에서는 상세 설명보다 Process 페이지로 이어지는 짧은 안내 역할만 맡는다.
export function ProcessPreview() {
  return (
    <section className="py-14 md:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionTitle
          title="포트폴리오 제작 과정"
          subtitle="프로젝트 경험을 어떤 기준으로 정리했는지 짧게 기록했습니다."
        />
        <div className="mt-7 max-w-3xl rounded-lg border border-border bg-surface p-5 shadow-sm md:p-6">
          <div className="flex flex-wrap gap-2.5">
            {WORK_STEPS.map((step) => (
              <span
                key={step.title}
                className="rounded-full border border-border bg-surface-muted px-3 py-1.5 text-sm font-medium text-muted"
              >
                {step.title}
              </span>
            ))}
          </div>
          <Link
            href="/process"
            className="mt-6 inline-flex text-sm font-medium text-accent transition-colors duration-300 ease-out hover:text-accent-hover"
          >
            제작 과정 자세히 보기 →
          </Link>
        </div>
      </div>
    </section>
  );
}
