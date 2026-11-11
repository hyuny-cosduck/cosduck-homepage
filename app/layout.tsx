import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cosduck.com"),
  title: "Cosduck | K-뷰티 브랜드의 글로벌 틱톡샵 성장 파트너",
  description:
    "데이터 기반 운영 · 자체 분석 솔루션 · 크리에이터 네트워크로 K-뷰티 브랜드의 TikTok Shop 성장을 설계하고 실행합니다.",
  keywords: ["TikTok Shop", "K-beauty", "K-뷰티", "틱톡샵", "cosduck", "코스덕", "에이전시", "틱톡샵 대행", "크리에이터 시딩", "AI 자동화"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Cosduck | K-뷰티 글로벌 틱톡샵 성장 파트너",
    description: "데이터 기반 운영 · 자체 분석 솔루션 · 크리에이터 네트워크",
    url: "https://cosduck.com",
    images: ["/og.png"],
    locale: "ko_KR",
    siteName: "Cosduck",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <meta name="naver-site-verification" content="e205fd02f9ad7d539b3bec43e0bab243cde8b2c8" />
        <meta name="msvalidate.01" content="3FD890DD76B00CCE6B977511A5278E22" />
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
      <body className="min-h-full break-keep">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "Cosduck (코스덕)",
                  url: "https://cosduck.com",
                  logo: "https://cosduck.com/cosduck-logo.png",
                  description:
                    "K-뷰티 브랜드의 TikTok Shop 글로벌 성장을 설계하고 실행하는 자동화 파트너. 데이터 기반 운영, 자체 분석 솔루션, 크리에이터 네트워크를 제공합니다.",
                  foundingDate: "2024",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "와우산로 121, 3층",
                    addressLocality: "마포구",
                    addressRegion: "서울특별시",
                    postalCode: "04054",
                    addressCountry: "KR",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    email: "hyuny@cosduck.com",
                    telephone: "+82-10-3027-0750",
                    contactType: "sales",
                  },
                  sameAs: [
                    "https://www.linkedin.com/company/cosduck",
                  ],
                },
                {
                  "@type": "WebSite",
                  name: "Cosduck",
                  url: "https://cosduck.com",
                },
                {
                  "@type": "Service",
                  name: "TikTok Shop 운영 대행",
                  provider: { "@type": "Organization", name: "Cosduck" },
                  description:
                    "틱톡샵 초기 세팅부터 크리에이터 시딩, 어필리에이트 운영, Shop Ads, CS 처리까지 풀퍼널 대행 서비스",
                  areaServed: ["US", "ID", "KR"],
                },
                {
                  "@type": "Service",
                  name: "AI 자동화 솔루션",
                  provider: { "@type": "Organization", name: "Cosduck" },
                  description:
                    "인비테이션 대량 발송, 샘플 자동 수락, 가이드라인 자동 전달, CS 자동 처리 등 TikTok Shop 반복 업무 자동화",
                },
                {
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "코스덕 서비스 비용은 어떻게 되나요?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "인비테이션 발송만 이용하실 경우 월 100만 원이며, IM Card 발송과 크리에이터 배치태깅까지 포함한 풀 패키지는 월 190만 원입니다. 그 외 맞춤 서비스는 상담을 통해 안내드립니다.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "코스덕 최소 계약 기간이 있나요?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "기본 계약 기간은 2개월 단위입니다.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "코스덕은 어떤 국가를 지원하나요?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "현재 미국(US)과 인도네시아(ID)를 중심으로 운영하고 있으며, 그 외 국가도 상담을 통해 지원 가능합니다.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "틱톡샵을 아직 개설하지 않았는데 코스덕 서비스를 이용할 수 있나요?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "틱톡샵 계정 개설부터 초기 세팅(카테고리 인증, 상품 리스팅, Ads 연동 등)은 별도의 상담을 통해 진행 가능합니다.",
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
        {children}
      </body>
      <GoogleAnalytics gaId="G-1WTXPCKVYY" />
    </html>
  );
}
