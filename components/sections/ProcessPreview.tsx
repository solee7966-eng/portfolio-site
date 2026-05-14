import Link from "next/link";

import { SectionTitle } from "@/components/ui/SectionTitle";

export function ProcessPreview() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionTitle
          title="How I work"
          subtitle="MCP 기반 멀티에이전트 협업·리뷰·문서화 흐름을 한곳에 모아 소개합니다."
        />
        <div className="mt-8 rounded-lg border border-border bg-surface p-6 shadow-sm md:p-8">
          <p className="text-sm leading-relaxed text-muted md:text-base">
            이 영역은 홈에서의 미리보기입니다. 역할 분리, 컨텍스트 전달, 품질
            게이트 등 실제 워크플로는{" "}
            <Link
              href="/process"
              className="font-medium text-accent hover:text-accent-hover"
            >
              Process
            </Link>{" "}
            페이지에서 단계별로 정리할 예정입니다.
          </p>
          <Link
            href="/process"
            className="mt-6 inline-flex text-sm font-medium text-accent hover:text-accent-hover"
          >
            Read the process →
          </Link>
        </div>
      </div>
    </section>
  );
}
