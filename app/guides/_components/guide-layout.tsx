import Link from "next/link";
import Image from "next/image";

const ORANGE = "#F5A623";

export default function GuideLayout({
  title,
  updatedAt,
  tldr,
  relatedService,
  jsonLd,
  children,
}: {
  title: string;
  updatedAt: string;
  tldr: string[];
  relatedService: { href: string; label: string };
  jsonLd: object;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Nav */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <Image src="/cosduck-logo.png" alt="Cosduck" width={100} height={30} />
          </Link>
          <div className="text-xs text-gray-400">
            <Link href="/" className="hover:text-gray-600 transition-colors">홈</Link>
            <span className="mx-2">›</span>
            <Link href="/guides" className="hover:text-gray-600 transition-colors">가이드</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 py-14 md:py-20">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-black text-white mb-5"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Guide
          </span>
          <h1
            className="text-2xl md:text-3xl font-black tracking-tight leading-tight text-black mb-4"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            {title}
          </h1>
          <p className="text-xs text-gray-400">
            마지막 업데이트: {updatedAt} · 작성: Cosduck 팀
          </p>
        </div>
      </header>

      {/* 3줄 요약 */}
      <div className="max-w-3xl mx-auto px-6 pt-10 pb-2">
        <div className="rounded-xl p-5 border-2" style={{ borderColor: ORANGE, backgroundColor: `${ORANGE}08` }}>
          <p className="text-xs font-black uppercase tracking-wider mb-3" style={{ color: ORANGE }}>3줄 요약</p>
          <ul className="space-y-1.5">
            {tldr.map((line, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700 leading-relaxed">
                <span className="font-black mt-0.5" style={{ color: ORANGE }}>{i + 1}.</span>
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Body */}
      <main className="max-w-3xl mx-auto px-6 py-10">
        <article className="space-y-10">
          {children}
        </article>
      </main>

      {/* 관련 서비스 CTA */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 py-12 text-center">
          <p className="text-sm text-gray-500 mb-4">이 글과 관련된 코스덕 서비스</p>
          <a
            href={relatedService.href}
            className="inline-flex items-center px-7 py-3.5 text-black font-bold rounded-full text-sm transition-opacity hover:opacity-80"
            style={{ backgroundColor: ORANGE }}
          >
            {relatedService.label} →
          </a>
          <div className="mt-4">
            <a
              href="https://calendar.app.google/MgBaSncV44LqQHVz6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              상담 일정 예약하기
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 py-8 text-center">
          <Link href="/">
            <Image src="/cosduck-logo.png" alt="Cosduck" width={80} height={24} className="mx-auto mb-4" />
          </Link>
          <p className="text-[10px] text-gray-400">Copyright © Cosduck. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
