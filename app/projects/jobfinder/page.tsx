import type { Metadata } from "next";
import Link from "next/link";

import { JobFinderCaseStudy } from "@/components/projects/jobfinder/JobFinderCaseStudy";

export const metadata: Metadata = {
  title: "JobFinder",
  description:
    "기업 도메인·PortOne 결제·스케줄러·MSA·CI/CD. 팀(4인) 본편과 WebSocket 채팅 개인 확장을 아우른 JobFinder 케이스 스터디",
};

export default function JobFinderProjectPage() {
  return (
    <div className="animate-page-enter mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-16">
      <p className="text-sm text-muted">
        <Link
          href="/projects"
          className="transition-colors duration-300 ease-out hover:text-accent"
        >
          Projects
        </Link>
        <span className="mx-2 text-border">/</span>
        <span className="text-foreground">JobFinder</span>
      </p>
      <div className="mt-6">
        <JobFinderCaseStudy />
      </div>
    </div>
  );
}
