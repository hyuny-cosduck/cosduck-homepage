import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "케이스 스터디 | 틱톡샵 성장 사례 | Cosduck",
  description:
    "코스덕과 함께 틱톡샵을 성장시킨 브랜드들의 실제 사례를 확인하세요. 미국·인도네시아 시장의 입점부터 매출 성장까지.",
  alternates: { canonical: "/cases" },
  openGraph: {
    title: "케이스 스터디 | Cosduck",
    description: "코스덕과 함께 틱톡샵을 성장시킨 브랜드 사례",
    url: "https://cosduck.com/cases",
  },
};

const ORANGE = "#F5A623";

const cases = [
  {
    href: "/cases/us-skincare-t5-in-4-months",
    badge: "US · 색조",
    title: "4개월 만에 샵티어 T5 달성",
    desc: "샘플 대량 발송 + 콘텐츠 광고 부스팅으로 최고 등급을 달성한 색조 브랜드",
    stat: "T5",
    statLabel: "달성 티어",
  },
  {
    href: "/cases/us-beauty-t4-in-6-weeks",
    badge: "US · 색조",
    title: "6주 만에 샵티어 T4 달성",
    desc: "체험단 100건 + 인비테이션 자동화를 병행하여 빠르게 T4에 도달한 색조 브랜드",
    stat: "6주",
    statLabel: "소요 기간",
  },
  {
    href: "/cases/us-cosmetics-1000-samples-weekly",
    badge: "US · 스킨케어",
    title: "주간 샘플 1,000건 인입",
    desc: "인비테이션을 단계적으로 확대하여 크리에이터 자발 신청 선순환을 만든 스킨케어 브랜드",
    stat: "1,000건",
    statLabel: "주간 샘플",
  },
  {
    href: "/cases/id-beauty-20m-daily-revenue",
    badge: "Indonesia · 스킨케어",
    title: "일 매출 2,000만원 돌파",
    desc: "인도네시아 크리에이터 풀 474K+를 활용해 7개월 만에 일 매출 2,000만원을 달성한 스킨케어 브랜드",
    stat: "2,000만원",
    statLabel: "일 매출",
  },
];

export default function CasesIndex() {
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
            <span className="text-gray-600">케이스 스터디</span>
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
            Case Studies
          </span>
          <h1
            className="text-2xl md:text-4xl font-black tracking-tight leading-tight text-black mb-4"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            틱톡샵 성장 사례
          </h1>
          <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-2xl">
            코스덕과 함께 틱톡샵을 성장시킨 브랜드들의 실제 운영 데이터입니다.
            미국과 인도네시아 시장에서의 입점, 자동화, 매출 성장 사례를 확인해 보세요.
          </p>
        </div>
      </header>

      {/* Cases Grid */}
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-5">
          {cases.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group border border-gray-200 rounded-xl p-6 bg-white hover:border-gray-400 transition-colors"
            >
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{c.badge}</span>
              <h2 className="text-lg font-black text-black mt-2 mb-2 group-hover:opacity-70 transition-opacity" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                {c.title}
              </h2>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">{c.desc}</p>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div>
                  <p className="text-xl font-black text-black" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{c.stat}</p>
                  <p className="text-[10px] text-gray-400">{c.statLabel}</p>
                </div>
                <span className="text-xs font-bold group-hover:translate-x-1 transition-transform" style={{ color: ORANGE }}>
                  자세히 보기 →
                </span>
              </div>
            </Link>
          ))}
        </div>
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
