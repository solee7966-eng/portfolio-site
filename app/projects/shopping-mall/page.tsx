import type { Metadata } from "next";
import Link from "next/link";

import { ShoppingMallCaseStudy } from "@/components/projects/shopping-mall/ShoppingMallCaseStudy";

export const metadata: Metadata = {
  title: "DeviceMarket 쇼핑몰",
  description:
    "JSP/Servlet 기반 MVC2 전자기기 쇼핑몰 DeviceMarket — 상품 옵션 관리, DB 설계, FrontController 패턴 경험 정리",
};

export default function ShoppingMallProjectPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-16">
      <p className="text-sm text-muted">
        <Link href="/projects" className="hover:text-accent">
          Projects
        </Link>
        <span className="mx-2 text-border">/</span>
        <span className="text-foreground">DeviceMarket 쇼핑몰</span>
      </p>
      <div className="mt-6">
        <ShoppingMallCaseStudy />
      </div>
    </div>
  );
}
