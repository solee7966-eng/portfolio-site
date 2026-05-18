import type { Metadata } from "next";

import { ProcessPageContent } from "@/components/process/ProcessPageContent";

export const metadata: Metadata = {
  title: "Process",
  description:
    "기존 협업 프로젝트 경험을 포트폴리오 관점으로 재구성하고 Next.js 기반 개인 웹사이트로 정리한 과정",
};

export default function ProcessPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-16">
      <ProcessPageContent />
    </div>
  );
}
