import type { Metadata } from "next";
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
      <body className="min-h-full">{children}</body>
    </html>
  );
}
