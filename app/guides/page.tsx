import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "틱톡샵 운영 가이드 | Cosduck",
  description:
    "틱톡샵 입점, 운영, 크리에이터 섭외까지 — 실제 운영 경험을 바탕으로 작성한 가이드를 확인하세요.",
  alternates: { canonical: "/guides" },
  openGraph: {
    title: "틱톡샵 운영 가이드 | Cosduck",
    description: "실제 운영 경험 기반 틱톡샵 가이드",
    url: "https://cosduck.com/guides",
  },
};

const ORANGE = "#F5A623";

const categories = [
  {
    label: "입점 준비",
    guides: [
      {
        href: "/guides/us-tiktok-shop-setup",
        title: "미국 틱톡샵 입점 방법: 한국 브랜드가 준비해야 할 것 총정리",
        desc: "계정 생성, 카테고리 인증, 상품 리스팅, FBT 입고까지 전체 절차와 소요 기간",
      },
      {
        href: "/guides/id-tiktok-shop-cosmetics-setup",
        title: "인도네시아 틱톡샵 화장품 입점 절차와 필요 서류",
        desc: "BPOM 등록, 할랄 인증 등 인도네시아 화장품 입점에 필요한 서류와 절차",
      },
      {
        href: "/guides/tiktok-shop-beauty-category-approval",
        title: "틱톡샵 뷰티 카테고리 인증, 반려되는 이유와 해결법",
        desc: "반려 사유별 대응 방법을 실제 대행 경험을 바탕으로 정리",
      },
      {
        href: "/guides/tiktok-shop-fbt-guide",
        title: "틱톡샵 FBT란? 입고 절차와 일반 배송과의 차이",
        desc: "Fulfilled by TikTok의 의미, 입고 절차, 비용, 자체 배송과의 비교",
      },
    ],
  },
];

export default function GuidesIndex() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <Image src="/cosduck-logo.png" alt="Cosduck" width={100} height={30} />
          </Link>
          <div className="text-xs text-gray-400">
            <Link href="/" className="hover:text-gray-600 transition-colors">홈</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-600">가이드</span>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-black text-white mb-5"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Guides
          </span>
          <h1
            className="text-2xl md:text-4xl font-black tracking-tight leading-tight text-black mb-4"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            틱톡샵 운영 가이드
          </h1>
          <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-2xl">
            틱톡샵 입점부터 운영까지, 코스덕이 직접 운영하며 쌓은 경험을 바탕으로 작성했습니다.
          </p>
        </div>
      </header>

      {/* Guide List */}
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        {categories.map((cat) => (
          <div key={cat.label} className="mb-12">
            <h2
              className="text-lg font-black text-black mb-5"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              {cat.label}
            </h2>
            <div className="space-y-3">
              {cat.guides.map((g) => (
                <Link
                  key={g.href}
                  href={g.href}
                  className="group block border border-gray-200 rounded-xl p-5 bg-white hover:border-gray-400 transition-colors"
                >
                  <h3 className="text-sm font-black text-black group-hover:opacity-70 transition-opacity mb-1">
                    {g.title}
                  </h3>
                  <p className="text-xs text-gray-500">{g.desc}</p>
                  <span className="text-xs font-bold mt-2 inline-block group-hover:translate-x-1 transition-transform" style={{ color: ORANGE }}>
                    읽기 →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center">
          <Link href="/">
            <Image src="/cosduck-logo.png" alt="Cosduck" width={80} height={24} className="mx-auto mb-4" />
          </Link>
          <p className="text-[10px] text-gray-400">Copyright © Cosduck. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
