import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process",
  description: "MCP 멀티에이전트 협업 방식 소개",
};

export default function ProcessPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        Process
      </h1>
      <p className="mt-2 text-muted">MCP 멀티에이전트 협업 구조 (초안)</p>
      <div className="mt-10 space-y-4 rounded-lg border border-border bg-surface p-6 text-sm leading-relaxed text-muted shadow-sm md:text-base">
        <p>
          <strong className="text-foreground">Placeholder.</strong> 여기에 MCP
          서버 구성, 에이전트 역할 분담, 컨텍스트·산출물 흐름, 코드 리뷰·문서화
          패턴 등을 다이어그램과 함께 정리할 예정입니다.
        </p>
        <p>
          홈의 &quot;How I work&quot; 미리보기와 연결되어, 동일한 스토리를 더
          깊게 펼칩니다.
        </p>
      </div>
    </div>
  );
}
