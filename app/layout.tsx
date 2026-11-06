import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cosduck | K-뷰티 브랜드의 글로벌 틱톡샵 성장 파트너",
  description:
    "데이터 기반 운영 · 자체 분석 솔루션 · 크리에이터 네트워크로 K-뷰티 브랜드의 TikTok Shop 성장을 설계하고 실행합니다.",
  keywords: ["TikTok Shop", "K-beauty", "K-뷰티", "틱톡샵", "cosduck", "코스덕", "에이전시"],
  openGraph: {
    title: "Cosduck | K-뷰티 글로벌 틱톡샵 성장 파트너",
    description: "데이터 기반 운영 · 자체 분석 솔루션 · 크리에이터 네트워크",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Unbounded:wght@400;700;900&family=Bricolage+Grotesque:wght@400;700;800&family=Gaegu:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="min-h-full break-keep">{children}</body>
      <GoogleAnalytics gaId="G-1WTXPCKVYY" />
    </html>
  );
}
