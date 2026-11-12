import Link from "next/link";
import Image from "next/image";

const ORANGE = "#F5A623";

export default function ServicePageLayout({
  badge,
  title,
  intro,
  breadcrumbLabel,
  jsonLd,
  children,
}: {
  badge: string;
  title: string;
  intro: string;
  breadcrumbLabel: string;
  jsonLd: object;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb Nav */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <Image src="/cosduck-logo.png" alt="Cosduck" width={100} height={30} />
          </Link>
          <div className="text-xs text-gray-400">
            <Link href="/" className="hover:text-gray-600 transition-colors">홈</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-600">{breadcrumbLabel}</span>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-black text-white mb-5"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            {badge}
          </span>
          <h1
            className="text-2xl md:text-4xl font-black tracking-tight leading-tight text-black mb-4"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            {title}
          </h1>
          <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-2xl">
            {intro}
          </p>
        </div>
      </header>

      {/* Body */}
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        {children}
      </main>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-14 text-center">
          <h2
            className="text-xl md:text-2xl font-black text-black mb-3"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            지금 바로 상담받아 보세요
          </h2>
          <p className="text-sm text-gray-500 mb-8">
            담당자: 임 현 · hyuny@cosduck.com
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://calendar.app.google/MgBaSncV44LqQHVz6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-3.5 text-black font-bold rounded-full text-sm transition-opacity hover:opacity-80"
              style={{ backgroundColor: ORANGE }}
            >
              상담 일정 예약하기 →
            </a>
            <a
              href="mailto:hyuny@cosduck.com"
              className="inline-flex items-center px-7 py-3.5 text-gray-600 font-bold rounded-full text-sm border border-gray-200 transition-colors hover:border-gray-400"
            >
              이메일 문의
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center">
          <Link href="/">
            <Image src="/cosduck-logo.png" alt="Cosduck" width={80} height={24} className="mx-auto mb-4" />
          </Link>
          <div className="flex items-center justify-center gap-4 text-xs text-gray-400 mb-3">
            <Link href="/terms" className="hover:text-gray-600 transition-colors">이용약관</Link>
            <Link href="/privacy" className="hover:text-gray-600 transition-colors">개인정보처리방침</Link>
          </div>
          <p className="text-[10px] text-gray-400">
            (주)마야크루 · 대표: 오준호 · 사업자등록번호: 875-81-00475
          </p>
          <p className="text-[10px] text-gray-400">
            서울특별시 마포구 와우산로 121, 3층(서교동) · hyuny@cosduck.com
          </p>
          <p className="text-[10px] text-gray-400 mt-2">Copyright © Cosduck. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
