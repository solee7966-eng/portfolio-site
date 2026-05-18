import type { Metadata } from "next";

import { ProcessPageContent } from "@/components/process/ProcessPageContent";

export const metadata: Metadata = {
  title: "Process",
  description:
    "포트폴리오 사이트의 요구사항 정리, 페이지 역할 분리, 컴포넌트 구성, 검증 흐름을 정리한 과정입니다.",
};

export default function ProcessPage() {
  return (
    <div className="animate-page-enter mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-16">
      <ProcessPageContent />
    </div>
  );
}
