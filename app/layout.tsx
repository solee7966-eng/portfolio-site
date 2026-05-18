import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

import "./globals.css";

const SITE_URL = "https://taehoon-portfolio.vercel.app";

const siteName = "안태훈 포트폴리오";
const defaultTitle = "안태훈 | Backend & Fullstack Developer";
const description =
  "안태훈 — Backend & Fullstack Developer. Spring Boot·Java·Oracle·MyBatis·Docker·Jenkins·AWS EC2와 Next.js·TypeScript·Tailwind CSS 기반의 백엔드·풀스택 프로젝트와 경험을 소개합니다.";

const keywords = [
  "안태훈",
  "Backend Developer",
  "Fullstack Developer",
  "Spring Boot",
  "Java",
  "Oracle",
  "MyBatis",
  "Docker",
  "Jenkins",
  "AWS EC2",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
] as const;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | 안태훈`,
  },
  description,
  keywords: [...keywords],
  applicationName: siteName,
  authors: [{ name: "안태훈", url: SITE_URL }],
  creator: "안태훈",
  publisher: "안태훈",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName,
    title: defaultTitle,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "안태훈 포트폴리오",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  /** `public/favicon.ico` 또는 `app/favicon.ico` 추가 시 자동 연결 */
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full min-h-dvh bg-slate-50 antialiased`}
    >
      <body className="flex min-h-dvh flex-col bg-slate-50 text-foreground">
        <Header />
        <main className="min-h-0 flex-1 bg-slate-50">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
