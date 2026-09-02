"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// ─── Brand tokens ─────────────────────────────────────────────────────────────
const ORANGE = "#F5A623";
const BLUE   = "#2196F3";

// ─── Logo ────────────────────────────────────────────────────────────────────
function CosduckLogo() {
  return (
    <Image src="/cosduck-logo.png" alt="Cosduck" width={120} height={36} priority />
  );
}

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav({ onOpenPdfGate, onOpenModal }: { onOpenPdfGate: () => void; onOpenModal: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#pdf-gate", label: "서비스 소개서" },
    { href: "#solution", label: "Why Cosduck" },
    { href: "#case-study", label: "케이스 스터디" },
    { href: "#pricing", label: "비용" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#">
          <CosduckLogo />
        </a>

        <div className="hidden md:flex items-center gap-7 text-sm font-medium">
          {links.map((l) =>
            l.href === "#pdf-gate" ? (
              <button
                key={l.href}
                onClick={onOpenPdfGate}
                className="text-gray-600 transition-colors hover:text-black"
              >
                {l.label}
              </button>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="text-gray-600 transition-colors hover:text-black"
              >
                {l.label}
              </a>
            )
          )}
        </div>

        <button
          onClick={onOpenModal}
          className="hidden md:inline-flex items-center px-5 py-2.5 text-black text-sm font-bold rounded-full transition-opacity hover:opacity-80"
          style={{ backgroundColor: ORANGE }}
        >
          상담 신청
        </button>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-4 shadow-lg">
          {links.map((l) =>
            l.href === "#pdf-gate" ? (
              <button
                key={l.href}
                className="block w-full text-left py-3 text-sm font-medium text-gray-700 border-b border-gray-100 last:border-0"
                onClick={() => { setMenuOpen(false); onOpenPdfGate(); }}
              >
                {l.label}
              </button>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="block py-3 text-sm font-medium text-gray-700 border-b border-gray-100 last:border-0"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            )
          )}
          <button
            className="mt-4 block w-full text-center px-5 py-3 text-black text-sm font-bold rounded-full"
            style={{ backgroundColor: ORANGE }}
            onClick={() => { setMenuOpen(false); onOpenModal(); }}
          >
            상담 신청
          </button>
        </div>
      )}
      </div>
      {/* PDF banner below header */}
      <a
        href="/cosduck-service-intro.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
        style={{ backgroundColor: BLUE }}
      >
        📄 Go Global with TikTok Shop — 서비스 소개서 보기 →
      </a>
    </nav>
  );
}

// ─── Animated counter ─────────────────────────────────────────────────────────
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const steps = 50;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 1400 / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

// ─── Layout helpers ───────────────────────────────────────────────────────────
function Section({ id, bg = "bg-white", children }: { id?: string; bg?: string; children: React.ReactNode }) {
  return (
    <section id={id} className={`py-14 md:py-20 ${bg}`} style={{ scrollMarginTop: "7rem" }}>
      <div className="max-w-6xl mx-auto px-6">{children}</div>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-black text-white mb-5">
      {children}
    </span>
  );
}

function Title({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <h2 className={`text-2xl md:text-3xl font-black tracking-tight leading-tight ${light ? "text-white" : "text-black"}`}>
      {children}
    </h2>
  );
}

function Sub({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`mt-2 mb-8 text-sm leading-relaxed ${light ? "text-white/50" : "text-gray-500"}`}>
      {children}
    </p>
  );
}

// ─── Contact Modal ────────────────────────────────────────────────────────────
function ContactModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ brand: "", name: "", contact: "", brandSite: "", meetingType: "유선", hasTiktokShop: "아니오", direction: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("done");
        window.gtag?.("event", "generate_lead", { event_category: "contact", brand: form.brand });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={onClose}>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl">✕</button>

        {status === "done" ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-4">🎉</div>
            <p className="text-xl font-black mb-2">신청 완료!</p>
            <p className="text-gray-500 text-sm">빠른 시일 내에 연락드리겠습니다.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:hyuny@cosduck.com"
                className="px-6 py-2.5 rounded-full border border-gray-200 text-gray-600 font-bold text-sm hover:border-black hover:text-black transition-colors"
              >
                담당자에게 이메일 보내기
              </a>
              <button onClick={onClose} className="px-6 py-2.5 rounded-full text-black font-bold text-sm" style={{ backgroundColor: ORANGE }}>닫기</button>
            </div>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-black mb-1">상담 신청</h2>
            <p className="text-gray-400 text-sm mb-6">아래 정보를 입력하시면 빠른 시일 내로 연락드리겠습니다.</p>
            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-gray-500 block mb-1">브랜드명 <span className="text-red-500">*</span></label>
                <input required value={form.brand} onChange={(e) => set("brand", e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-black" placeholder="예) 코스덕" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 block mb-1">담당자 (직함 포함) <span className="text-red-500">*</span></label>
                <input required value={form.name} onChange={(e) => set("name", e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-black" placeholder="예) 김마케팅 대리" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 block mb-1">담당자 연락처 <span className="text-red-500">*</span></label>
                <input required value={form.contact} onChange={(e) => set("contact", e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-black" placeholder="예) name@company.com 또는 010-1234-5678" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 block mb-1">틱톡샵 개설 여부 <span className="text-red-500">*</span></label>
                <div className="flex gap-2">
                  {["예", "아니오"].map((v) => (
                    <button key={v} type="button" onClick={() => set("hasTiktokShop", v)}
                      className={`flex-1 py-2 rounded-xl text-sm font-bold border transition-colors ${form.hasTiktokShop === v ? "bg-black text-white border-black" : "border-gray-200 text-gray-500"}`}>
                      {v}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 block mb-1">원하는 대행 역량 및 방향성 <span className="text-red-500">*</span></label>
                <input required value={form.direction} onChange={(e) => set("direction", e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-black" placeholder="예) 틱톡샵 풀 대행, 크리에이터 운영 중심" />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3.5 rounded-full text-black font-bold text-sm transition-opacity hover:opacity-80 disabled:opacity-50 mt-2"
                style={{ backgroundColor: ORANGE }}
              >
                {status === "loading" ? "전송 중..." : "신청하기 →"}
              </button>
              {status === "error" && <p className="text-red-500 text-xs text-center">오류가 발생했습니다. 다시 시도해주세요.</p>}
            </form>
            <a href="mailto:hyuny@cosduck.com" className="block text-center text-xs text-gray-400 hover:text-gray-600 transition-colors mt-4">
              이메일로 문의하기
            </a>
          </>
        )}
      </div>
    </div>
  );
}

// ─── PDF Gate Modal ──────────────────────────────────────────────────────────
function PdfGateModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ brand: "", name: "", contact: "", brandSite: "", interest: "", direction: "" });
  const [status, setStatus] = useState<"idle" | "loading">("idle");

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const interests = [
    "틱톡샵 운영 대행",
    "크리에이터 시딩",
    "기타",
  ];

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.interest) return;
    setStatus("loading");
    try {
      await fetch("/api/pdf-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch {
      // still open the PDF even if Slack fails
    }
    window.open("/cosduck-service-intro-full.pdf", "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 overflow-y-auto" onClick={onClose}>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl">✕</button>

        <h2 className="text-base sm:text-xl font-black mb-1 text-black">간단 정보 입력 후 바로 열람하실 수 있습니다.</h2>
        <p className="text-gray-400 text-xs sm:text-sm mb-6">서비스 소개서를 확인하시려면 아래 정보를 입력해 주세요.</p>

        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-gray-500 block mb-1">브랜드명 <span className="text-red-500">*</span></label>
            <input
              required
              value={form.brand}
              onChange={(e) => set("brand", e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-black"
              placeholder="예) 코스덕"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-gray-500 block mb-1">담당자명 <span className="text-red-500">*</span></label>
            <input
              required
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-black"
              placeholder="예) 김마케팅"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-gray-500 block mb-1">연락처 (이메일 또는 전화번호) <span className="text-red-500">*</span></label>
            <input
              required
              value={form.contact}
              onChange={(e) => set("contact", e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-black"
              placeholder="예) name@company.com 또는 010-1234-5678"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-gray-500 block mb-1.5">
              관심 서비스를 선택해 주세요 <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2">
              {interests.map((v) => (
                <label
                  key={v}
                  onClick={() => set("interest", v)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-colors ${
                    form.interest === v ? "border-black bg-gray-50" : "border-gray-200"
                  }`}
                >
                  <div
                    className="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors"
                    style={{
                      borderColor: form.interest === v ? "black" : "#D1D5DB",
                    }}
                  >
                    {form.interest === v && (
                      <div className="w-2.5 h-2.5 rounded-full bg-black" />
                    )}
                  </div>
                  <span className="text-sm text-gray-700">{v}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="text-xs font-bold text-gray-500 block mb-1">원하는 대행 역량 및 방향성 (선택)</label>
            <input
              value={form.direction}
              onChange={(e) => set("direction", e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-black"
              placeholder="예) 틱톡샵 풀 대행, 크리에이터 운영 중심"
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading" || !form.interest}
            className="w-full py-3.5 rounded-full text-black font-bold text-sm transition-opacity hover:opacity-80 disabled:opacity-50 mt-2"
            style={{ backgroundColor: ORANGE }}
          >
            {status === "loading" ? "처리 중..." : "확인"}
          </button>
        </form>

        <p className="text-[10px] sm:text-xs text-gray-400 text-center mt-4">
          (주)마야크루 · 정보 수집 및 제공 동의, 개인정보 수집 및 이용 동의
        </p>
      </div>
    </div>
  );
}

// ─── Scroll Dots ─────────────────────────────────────────────────────────────
const SCROLL_SECTIONS = [
  { id: "hero",         label: "홈" },
  { id: "services",     label: "서비스" },
  { id: "case-study",   label: "케이스 스터디" },
  { id: "pricing",      label: "비용" },
  { id: "contact",      label: "문의" },
];

function ScrollDots() {
  const [active, setActive] = useState("hero");
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visible = new Map<string, number>();

    SCROLL_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          visible.set(id, entry.intersectionRatio);
          // pick the section with highest visibility
          let best = "hero";
          let bestRatio = -1;
          visible.forEach((ratio, sectionId) => {
            if (ratio > bestRatio) { bestRatio = ratio; best = sectionId; }
          });
          setActive(best);
        },
        { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="fixed right-5 top-1/2 z-40 -translate-y-1/2 flex flex-col items-center gap-3 hidden md:flex">
      {SCROLL_SECTIONS.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <div key={id} className="relative flex items-center justify-end group">
            {/* Tooltip */}
            <span
              className="absolute right-5 whitespace-nowrap text-xs font-semibold text-white bg-black/80 px-2.5 py-1 rounded-full pointer-events-none transition-all duration-200"
              style={{ opacity: hovered === id ? 1 : 0, transform: hovered === id ? "translateX(0)" : "translateX(4px)" }}
            >
              {label}
            </span>
            {/* Dot */}
            <a
              href={`#${id}`}
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
              className="block rounded-full transition-all duration-300"
              style={{
                width:  isActive ? 10 : 6,
                height: isActive ? 10 : 6,
                backgroundColor: isActive ? ORANGE : "#D1D5DB",
                boxShadow: isActive ? `0 0 0 3px ${ORANGE}30` : "none",
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

// ─── Floating CTA ────────────────────────────────────────────────────────────
function FloatingCTA({ onOpenModal }: { onOpenModal: () => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let heroVisible = true;
    let contactVisible = false;

    const update = () => setVisible(!heroVisible && !contactVisible);

    const heroObserver = new IntersectionObserver(
      ([e]) => { heroVisible = e.isIntersecting; update(); },
      { threshold: 0.1 }
    );
    const contactObserver = new IntersectionObserver(
      ([e]) => { contactVisible = e.isIntersecting; update(); },
      { threshold: 0.1 }
    );

    const hero = document.querySelector("#hero");
    const contact = document.querySelector("#contact");
    if (hero) heroObserver.observe(hero);
    if (contact) contactObserver.observe(contact);

    return () => { heroObserver.disconnect(); contactObserver.disconnect(); };
  }, []);

  return (
    <>
      <div
        className="fixed bottom-8 left-1/2 z-40 transition-all duration-500"
        style={{
          transform: `translateX(-50%) translateY(${visible ? "0px" : "20px"})`,
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? "auto" : "none",
        }}
      >
        <button
          onClick={onOpenModal}
          className="inline-flex items-center gap-2 px-7 py-4 text-black font-bold rounded-full text-sm shadow-2xl hover:opacity-80 transition-opacity"
          style={{ backgroundColor: ORANGE }}
        >
          소개서 열람하기 →
        </button>
      </div>
    </>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────
function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section id="hero" className="relative flex flex-col justify-center bg-white overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-40 pb-28">
        {/* Badge */}
        <span
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs font-bold mb-8"
          style={{ backgroundColor: BLUE }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          TikTok Shop Agency
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] tracking-tight mb-5 text-black">
          K‑뷰티 브랜드의 <span style={{ color: ORANGE }}>글로벌 틱톡샵</span> 성장 파트너
        </h1>

        <p className="text-base text-gray-500 max-w-lg mb-8 leading-relaxed">
          데이터 기반 운영 · 자체 분석 솔루션 · 크리에이터 네트워크
          <br />
          성과로 증명되는 성장 파트너, Cosduck.
        </p>

        <div className="flex flex-row gap-3">
          <button
            onClick={onOpenModal}
            className="inline-flex items-center justify-center px-7 py-3.5 text-black font-bold rounded-full text-sm transition-opacity hover:opacity-80"
            style={{ backgroundColor: ORANGE }}
          >
            상담 신청 →
          </button>
          <a
            href="#case-study"
            className="inline-flex items-center justify-center px-7 py-3.5 text-white font-bold rounded-full text-sm transition-opacity hover:opacity-80"
            style={{ backgroundColor: BLUE }}
          >
            성과 보기
          </a>
        </div>

        {/* Stats */}
        <div className="mt-12 pt-8 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: 600,   suffix: "K/월", label: "파트너 브랜드 월 최고 매출 (US)", prefix: "$", color: BLUE   },
            { value: 29619, suffix: "개",   label: "6주 누적 판매 달성",              prefix: "",  color: BLUE   },
            { value: 8,     suffix: "개",   label: "파트너 브랜드 운영 (1년)",          prefix: "",  color: ORANGE },
            { value: 4,     suffix: "개월", label: "샵티어 T5 달성 기간",              prefix: "",  color: ORANGE },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl md:text-3xl font-black" style={{ color: s.color }}>
                {s.prefix}<Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-sm text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── WHY NOW ─────────────────────────────────────────────────────────────────
function WhyNow() {
  const cards = [
    {
      num: "01",
      title: "폭발적으로 성장하는 채널",
      facts: ["2025 글로벌 GMV $64B+", "2024 $33B → 약 2배 (+94%)", "2026 전망 $112B · 16국 확장"],
      tagline: "매년 2배씩 크는 채널, 지금이 진입 적기",
    },
    {
      num: "02",
      title: "활짝 열린 시장",
      facts: ["미국 $15.1B (+68% YoY)", "인도네시아 $13.1B · 글로벌 2위", "동남아 전체 $45.6B · 전년 대비 2배"],
      tagline: "코스덕이 직접 운영·검증한 시장",
    },
    {
      num: "03",
      title: "세계 2위로 올라선 K‑뷰티",
      facts: ["한국 화장품 수출 $11.4B", "세계 2위 수출국 · 최대시장 미국 $2.2B", "뷰티 = 틱톡샵 1위 카테고리"],
      tagline: "세계가 인정한 K‑뷰티, 지금이 기회",
    },
  ];

  return (
    <Section id="why-now" bg="bg-gray-50">
      <Badge>Why Now</Badge>
      <Title>지금이 K‑뷰티 × 틱톡샵의 골든타임입니다</Title>
      <Sub>폭발하는 채널, 열려 있는 핵심 시장, 세계 2위로 올라선 K‑뷰티. 세 흐름이 지금 겹칩니다.</Sub>

      <div className="grid md:grid-cols-3 gap-5">
        {cards.map((c) => (
          <div key={c.num} className="bg-white rounded-2xl p-8 border border-gray-100">
            <div className="text-sm font-black mb-1" style={{ color: BLUE }}>{c.num}</div>
            <h3 className="text-xl font-bold mb-5 text-black">{c.title}</h3>
            <ul className="space-y-2 mb-6">
              {c.facts.map((f) => (
                <li key={f} className="flex items-start gap-2 text-gray-600 text-sm">
                  <span className="mt-0.5 font-bold" style={{ color: BLUE }}>·</span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="pt-5 border-t border-gray-100 text-sm font-semibold" style={{ color: BLUE }}>
              {c.tagline}
            </div>
          </div>
        ))}
      </div>

      <div
        className="mt-6 rounded-2xl px-8 py-5 text-center font-semibold text-base text-white"
        style={{ backgroundColor: BLUE }}
      >
        성장하는 채널 × 열려 있는 시장 × 세계 2위 K‑뷰티.{" "}
        <span className="underline decoration-white/40">먼저 올라탄 브랜드가 선점합니다.</span>
      </div>
    </Section>
  );
}

// ─── PROBLEM ─────────────────────────────────────────────────────────────────
function Problem() {
  const problems = [
    {
      num: "01",
      title: "크리에이터 수급 장벽",
      sub: "현지 크리에이터 발굴·관리 역량 부족",
      desc: "양질의 콘텐츠 수급이 불안정해지고, 전체 샵 매출이 정체됩니다.",
    },
    {
      num: "02",
      title: "데이터 분석의 한계",
      sub: "집중할 콘텐츠·크리에이터 발굴의 어려움",
      desc: "어떤 콘텐츠가 전환되는지 알 수 없어, 광고비는 낭비되고 ROI는 떨어집니다.",
    },
    {
      num: "03",
      title: "운영 리소스 부족",
      sub: "인비테이션 발송·FBT·CS·리뷰 관리 등 반복 업무에 전담 인력 소진",
      desc: "핵심 성장 업무에 집중하지 못하고, 셀러 패널티와 평점 하락으로 이어집니다.",
    },
  ];

  return (
    <Section id="problem" bg="bg-white">
      <Badge>Problem</Badge>
      <Title>K‑뷰티 브랜드의 틱톡샵 진출, 왜 실패하는가</Title>
      <Sub>틱톡샵은 K‑뷰티에게 최고의 기회입니다. 하지만 대부분의 브랜드가 첫 6개월 안에 성장 정체를 겪습니다.</Sub>

      <div className="grid md:grid-cols-3 gap-5">
        {problems.map((p) => (
          <div key={p.num} className="rounded-2xl border border-gray-200 p-8 bg-white">
            <div className="text-sm font-black mb-1 text-gray-300">{p.num}</div>
            <h3 className="text-xl font-bold mb-3 text-black">{p.title}</h3>
            <p className="text-gray-700 font-medium text-sm mb-4">{p.sub}</p>
            <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-500">{p.desc}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── SOLUTION ────────────────────────────────────────────────────────────────
function Solution() {
  const solutions = [
    {
      num: "01",
      title: "글로벌 크리에이터 운영 역량",
      desc: "전 팀원 영어 능통 및 해외 거주 경험 보유. 현지 크리에이터 직접 소통·소싱·관리",
      highlight: "충성 크리에이터를 확보해 고품질 콘텐츠를 안정적으로 수급합니다.",
      tag: "Discord 기반 실시간 관리 · 100% 글로벌 역량 팀",
    },
    {
      num: "02",
      title: "공식을 찾는 콘텐츠 실험",
      desc: "꾸준한 가설·검증 기반의 콘텐츠 실험 운영, 브랜드별 성공 공식 발굴",
      highlight: "우리 브랜드만의 성공 공식을 찾아냅니다.",
      tag: "Creative Boost로 실험 부스팅, 성공 공식 발굴",
    },
    {
      num: "03",
      title: "풀퍼널 운영 대행 및 자동화 (AX-Ops)",
      desc: "반복 업무는 자동화로 처리, 더 중요한 일에 인력을 집중",
      highlight: "운영은 시스템이, 사람은 성장에 집중합니다.",
      tag: "브랜딩 전담 AM 1:1 배정 + 운영 자동화 엔진",
    },
  ];

  return (
    <Section id="solution" bg="bg-gray-50">
      <Badge>Why Cosduck</Badge>
      <Title>코스덕은 이 세 가지 장벽을 운영 구조로 해결합니다</Title>
      <Sub>글로벌 커뮤니케이션 AM, 내부 분석 도구(AX), 풀퍼널 운영 자동화를 기반으로 브랜드의 틱톡샵 성장을 설계합니다.</Sub>

      <div className="grid md:grid-cols-3 gap-5">
        {solutions.map((s) => (
          <div key={s.num} className="bg-white rounded-2xl border border-gray-100 p-8">
            <div className="text-sm font-black mb-1" style={{ color: BLUE }}>{s.num}</div>
            <h3 className="text-xl font-bold mb-3 text-black">{s.title}</h3>
            <p className="text-gray-500 text-sm mb-4">{s.desc}</p>
            <div
              className="rounded-xl p-4 text-sm font-medium text-black mb-3"
              style={{ backgroundColor: `${BLUE}12` }}
            >
              {s.highlight}
            </div>
            <p className="text-xs text-gray-400">[{s.tag}]</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── CORE ADVANTAGES ─────────────────────────────────────────────────────────
function CoreAdvantages() {
  return (
    <Section id="advantages" bg="bg-white">
      <Badge>Core Advantage</Badge>
      <Title>차별화된 자산과 실행력으로 틱톡샵을 성장시킵니다</Title>
      <Sub>코스덕은 수작업 대신 자체 개발한 운영 툴과 자동화 시스템으로 크리에이터, 콘텐츠, 커뮤니티 운영을 통합 관리합니다.</Sub>

      <div className="grid grid-cols-2 gap-5">
        {[
          {
            icon: "📊",
            title: "광고 선별 · 효율 고도화",
            desc: "브랜드에 맞는 콘텐츠를 선별하고, 데이터로 검증하며 집행 효율을 높입니다.",
          },
          {
            icon: "🎯",
            title: "제품 협찬 대시보드",
            desc: "크리에이터가 원하는 캠페인에 쉽게 참여할 수 있는 코스덕 솔루션을 운영합니다.",
          },
          {
            icon: "⚡",
            title: "AX 자동화 시스템",
            desc: "틱톡샵의 반복 업무를 AX 시스템으로 처리합니다. 인력을 성장에 집중시킵니다.",
          },
          {
            icon: "📈",
            title: "통합 분석 대시보드",
            desc: "주요 지표를 한 화면에 통합, 집중할 곳과 막힌 곳을 동시에 파악합니다.",
          },
        ].map((a) => (
          <div key={a.title} className="bg-white rounded-2xl p-5 sm:p-8 border border-gray-200">
            <div
              className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center text-base sm:text-2xl mb-3 sm:mb-5"
              style={{ backgroundColor: `${BLUE}15` }}
            >
              {a.icon}
            </div>
            <h3 className="text-xs sm:text-lg font-bold mb-1.5 sm:mb-3 text-black">{a.title}</h3>
            <p className="text-gray-500 text-[11px] sm:text-sm leading-relaxed">{a.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── CASE STUDY ─────────────────────────────────────────────────────────────
function CaseStudy() {
  const brands = [
    {
      label: "BRAND A · US",
      title: "런칭 4개월 만에 샵티어 T5 달성",
      metrics: [
        { val: "$600K", unit: "월 매출 (BFCM)" },
        { val: "T5", unit: "틱톡샵 셀러 등급" },
        { val: "4개월", unit: "달성 기간" },
      ],
      note: "동일 카테고리 경쟁 브랜드 평균 대비 3배 빠른 성장 속도",
    },
    {
      label: "BRAND B · US",
      title: "런칭 6주 만에 샵티어 T4 달성",
      metrics: [
        { val: "$294.9K", unit: "누적 매출" },
        { val: "T4", unit: "틱톡샵 셀러 등급" },
        { val: "29,619개", unit: "누적 판매" },
      ],
      note: "신규 런칭 6주 만에 29,619개 판매 / 23,958건 주문 / 23,400명 고객",
    },
    {
      label: "BRAND C · US",
      title: "미국 진출 6개월차, 단 2일 만에 샘플 리퀘스트 1,200건 돌파",
      metrics: [
        { val: "6,400건+", unit: "누적 샘플 신청수" },
        { val: "19,300명", unit: "월 크리에이터 컨택" },
        { val: "1,800건+", unit: "2주간 샘플 발송" },
      ],
      note: "타깃 크리에이터 대상 대규모 인비테이션을 통해 단기간에 샘플 신청을 확보하고, 크리에이터 풀을 빠르게 확장",
    },
    {
      label: "BRAND D · 인도네시아",
      title: "시장 진입 7개월 만에 일 매출 2,000만원 돌파",
      metrics: [
        { val: "2,000만원", unit: "일 최고 매출" },
        { val: "421건", unit: "일 최고 판매" },
        { val: "7개월", unit: "달성 기간" },
      ],
      note: "2025.11 ~ 2026.05 GMV·판매량 지속 우상향 추세 확인",
    },
  ];

  return (
    <Section id="case-study" bg="bg-gray-50">
      <Badge>Case Studies</Badge>
      <Title>코스덕이 직접 만들어 온 성과입니다</Title>
      <Sub>북미·인도네시아에서 브랜드와 함께한 코스덕의 경험을 소개합니다.</Sub>

      <div className="grid md:grid-cols-2 gap-5">
        {brands.map((b) => (
          <div key={b.label + b.title} className="rounded-2xl border border-gray-200 p-5 sm:p-8 bg-white">
            <span
              className="inline-block px-2.5 sm:px-3 py-1 rounded-full text-black text-[10px] sm:text-xs font-bold mb-3 sm:mb-6"
              style={{ backgroundColor: ORANGE }}
            >
              {b.label}
            </span>
            <h3 className="text-base sm:text-xl font-black text-black mb-3 sm:mb-6 leading-snug">{b.title}</h3>
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-6 text-center">
              {b.metrics.map((m) => (
                <div key={m.unit}>
                  <div className="text-lg sm:text-2xl font-black" style={{ color: ORANGE }}>{m.val}</div>
                  <div className="text-[10px] sm:text-xs text-gray-400 mt-1">{m.unit}</div>
                </div>
              ))}
            </div>
            <p className="text-[10px] sm:text-xs text-gray-400 border-t border-gray-100 pt-3 sm:pt-4">{b.note}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-gray-400">
        * 실제 운영 데이터 기준이며, 샵·상품에 따라 결과는 달라질 수 있습니다.
      </p>
    </Section>
  );
}

// ─── SERVICES ────────────────────────────────────────────────────────────────
function Services() {
  return (
    <Section id="services" bg="bg-gray-50">
      <Badge>Services</Badge>
      <Title>상품 세팅부터 고객 관리까지, TikTok Shop 운영 전 과정을 직접 수행합니다</Title>
      <Sub>브랜드 상황에 맞는 두 가지 서비스 모델을 제공합니다.</Sub>

      <div className="grid md:grid-cols-2 gap-5 mb-8">
        {/* Full-Funnel */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200">
          <span
            className="inline-block px-4 py-2 rounded-full text-black text-sm font-bold mb-6"
            style={{ backgroundColor: ORANGE }}
          >
            Full-Funnel
          </span>
          <h3 className="text-2xl font-black text-black mb-2">틱톡샵 풀퍼널 대행</h3>
          <p className="text-sm font-semibold mb-3" style={{ color: BLUE }}>코스덕이 제일 잘하는 분야입니다</p>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            샵 세팅부터 광고·시딩·CS까지, 틱톡샵 운영 전 과정을 코스덕이 직접 수행합니다.
          </p>
          <div className="space-y-2.5">
            {[
              "TikTok Shop 운영 (리뷰·리스팅·FBT·CS)",
              "어필리에이트 무가 시딩",
              "콘텐츠 기획 및 크리에이터 관리",
              "성과 분석 및 대시보드 제공",
              "GMV MAX 캠페인",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2.5 text-sm">
                <span className="mt-0.5" style={{ color: ORANGE }}>✓</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-5 border-t border-gray-100">
            <p className="text-xs text-gray-400">틱톡샵을 처음 시작하거나, 운영 전체를 맡기고 싶은 브랜드에 추천합니다.</p>
          </div>
        </div>

        {/* Affiliate Partnership */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200">
          <span
            className="inline-block px-4 py-2 rounded-full text-white text-sm font-bold mb-6"
            style={{ backgroundColor: BLUE }}
          >
            Affiliate Partnership
          </span>
          <h3 className="text-2xl font-black text-black mb-3">어필리에이트 파트너십</h3>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            크리에이터 어필리에이트 운영만 필요한 경우, 핵심 운영에 집중하는 파트너십입니다.
          </p>
          <div className="space-y-2.5">
            {[
              "크리에이터 확보 및 인비테이션",
              "콘텐츠 발행 및 관리",
              "판매 성과 분석",
              "어필리에이트 성과 창출 집중",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2.5 text-sm">
                <span className="mt-0.5" style={{ color: BLUE }}>✓</span>
                <span className="text-gray-600">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-5 border-t border-gray-100">
            <p className="text-xs font-bold text-black mb-2">이런 경우 추천합니다</p>
            <ul className="space-y-1.5">
              {[
                "이미 틱톡샵 운영 인프라가 구축되어 있는 브랜드",
                "크리에이터 어필리에이트에 집중하고 싶은 브랜드",
                "성과 기반으로 콘텐츠를 빠르게 테스트하고 싶은 브랜드",
              ].map((item) => (
                <li key={item} className="text-xs text-gray-400 flex gap-1.5">
                  <span>·</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <p className="text-[10px] sm:text-xs text-gray-400 mt-4">
        * 틱톡샵 운영 및 광고 대행의 계약기간은 6개월 단위로 진행되며, 샵 초기 세팅 기간 1개월은 별도로 소요됩니다.
      </p>
    </Section>
  );
}

// ─── PRICING ─────────────────────────────────────────────────────────────────
function Pricing({ onOpenPdfGate }: { onOpenPdfGate: () => void }) {
  return (
    <Section id="pricing" bg="bg-white">
      <Badge>Pricing</Badge>
      <Title>투자 대비 예상 수익: 7개월 ROI 시뮬레이션</Title>
      <Sub>
        고정 운영비 + 성과 연동형 수수료 구조를 적용합니다.
        브랜드 상황에 맞는 맞춤 견적을 제공해 드립니다.
      </Sub>

      <div className="mb-8">
        <div className="bg-black text-white rounded-2xl p-8 text-center">
          <span
            className="inline-block px-4 py-2 rounded-full text-white text-sm font-bold mb-6"
            style={{ backgroundColor: BLUE }}
          >
            파트너십 비용 구조
          </span>
          <div className="text-center py-4">
            <div className="text-base text-white/70 mb-3">고정 운영비 + 성과 연동형 수수료</div>
            <div className="text-xl font-black text-white mb-4">
              브랜드 맞춤 견적을 제공합니다
            </div>
            <button
              onClick={onOpenPdfGate}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-black font-bold text-sm transition-opacity hover:opacity-80"
              style={{ backgroundColor: ORANGE }}
            >
              소개서 열람하기 →
            </button>
          </div>
        </div>
      </div>

      {/* Package inclusion banner */}
      <div
        className="mb-8 rounded-2xl border p-6"
        style={{ borderColor: `${ORANGE}60`, backgroundColor: `${ORANGE}08` }}
      >
        <p className="text-sm font-black text-black mb-4">
          🎁 파트너 계약 시 아래 서비스가 패키지에 포함됩니다. <span style={{ color: ORANGE }}>제품비만 부담하세요.</span>
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              label: "AX 봇 운영 서비스",
              normal: "₩2,565,900/월",
              included: "패키지 포함",
              desc: "틱톡샵 반복 운영 업무 자동화 봇",
            },
            {
              label: "시딩 영상 제작",
              normal: "₩20,000/건",
              included: "패키지 포함",
              desc: "크리에이터 무가 시딩 영상 한 편당 20,000원 상당",
            },
          ].map((b) => (
            <div key={b.label} className="bg-white rounded-xl p-3 sm:p-5 border border-gray-100 flex gap-3 sm:gap-4 items-start">
              <div
                className="mt-0.5 w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg flex items-center justify-center text-xs sm:text-sm shrink-0 font-black text-black"
                style={{ backgroundColor: ORANGE }}
              >
                ✓
              </div>
              <div>
                <div className="font-black text-black text-[11px] sm:text-sm mb-0.5 sm:mb-1">{b.label}</div>
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                  <span className="text-[10px] sm:text-xs text-gray-400 line-through">{b.normal}</span>
                  <span
                    className="text-[10px] sm:text-xs font-bold text-white px-1.5 sm:px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: BLUE }}
                  >
                    {b.included}
                  </span>
                </div>
                <p className="text-[10px] sm:text-xs text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </Section>
  );
}

// ─── ROADMAP ─────────────────────────────────────────────────────────────────
function Roadmap() {
  const months = [
    { title: "크리에이터 발굴 및 컨택", goal: "핵심 크리에이터 선별 & 확보" },
    { title: "틱톡샵 오픈", goal: "샵 세팅 완료 & 캠페인 세팅" },
    { title: "광고 캠페인 최적화", goal: "콘텐츠 수급 & 광고 캠페인 최적화" },
    { title: "틱톡샵 활성화", goal: "히어로 스큐 선별 & 히어로 번들상품 구성" },
    { title: "운영 자동화", goal: "자동화 루틴 설계, T3 달성 목표" },
    { title: "스케일업", goal: "T3 유지, 복제 가능한 확장 모델 정착" },
    { title: "빌드업", goal: "T4 목표 설정 및 브랜드 확장" },
  ];

  return (
    <Section id="roadmap" bg="bg-gray-50">
      <Badge>Roadmap</Badge>
      <Title>7개월 TikTok Shop 성장 전략 로드맵</Title>
      <Sub>틱톡샵 운영 및 어필리에이트 마케팅의 단계별 실행 플랜으로 구성되어 있습니다.</Sub>

      <div className="space-y-2">
        {months.map((m, i) => (
          <div key={i} className="flex items-center gap-4 bg-white rounded-lg px-5 py-3.5 border border-gray-100">
            <div
              className="w-8 h-8 rounded-full text-white text-xs font-black flex items-center justify-center shrink-0"
              style={{ backgroundColor: i < 3 ? BLUE : ORANGE }}
            >
              {i + 1}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-black text-sm">{m.title}</div>
            </div>
            <span className="text-xs font-semibold text-white bg-black px-2.5 py-1 rounded-full shrink-0">
              {m.goal}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── PARTNER FIT ─────────────────────────────────────────────────────────────
function PartnerFit() {
  return (
    <Section id="partner-fit" bg="bg-gray-700">
      <div>
        <Badge>Who We Work With</Badge>
        <Title light>
          솔직하게 말씀드립니다.
          <br />
          지금 틱톡샵은 포화 시장입니다.
        </Title>
        <p className="mt-4 mb-10 text-white text-sm sm:text-lg leading-relaxed max-w-2xl">
          T4 브랜드조차 ROAS 1이 나올 만큼, 진입 장벽이 높아졌습니다.
        </p>

        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-10">
          {[
            { icon: "📉", title: "광고 효율 저조", desc: "초기엔 ROAS보다 데이터 축적이 우선입니다." },
            { icon: "⏳", title: "장기 관점 필수", desc: "최소 6개월 이상 투자할 준비가 필요합니다." },
            { icon: "💸", title: "버틸 체력이 관건", desc: "빠르게 흐름을 타기 전까지 견딜 여력이 있어야 합니다." },
          ].map((c) => (
            <div key={c.title} className="rounded-xl sm:rounded-2xl border border-white/10 p-3 sm:p-6 bg-white/5">
              <div className="text-lg sm:text-2xl mb-1.5 sm:mb-3">{c.icon}</div>
              <h3 className="font-bold text-white text-[11px] sm:text-sm mb-1 sm:mb-2">{c.title}</h3>
              <p className="text-white/80 text-[10px] sm:text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <div
          className="rounded-2xl p-8 border"
          style={{ borderColor: `${ORANGE}50`, backgroundColor: `${ORANGE}10` }}
        >
          <p className="text-white font-bold text-sm sm:text-lg mb-2">
            그럼에도 불구하고, 틱톡샵은 북미 시장 공략에서 절대 놓쳐선 안 될 채널입니다.
          </p>
          <p className="text-white text-xs sm:text-sm leading-relaxed mb-6">
            북미 틱톡 문화에 대한 이해도와 운영 역량이 승패를 가릅니다.
            코스덕은 장기적으로 함께 성장할 의지가 있는 브랜드 파트너사를 찾고 있습니다.
          </p>
        </div>
      </div>
    </Section>
  );
}

// ─── CONTACT ─────────────────────────────────────────────────────────────────
function Contact({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <Section id="contact" bg="bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <Badge>Next Step</Badge>
        <Title>
          브랜드 맞춤 시뮬레이션을
          <br />
          지금 바로 받아보세요
        </Title>
        <Sub>담당자: 임 현 | hyuny@cosduck.com</Sub>

        <button
          onClick={onOpenModal}
          className="inline-flex items-center justify-center px-8 py-4 text-black font-black text-sm rounded-full transition-opacity hover:opacity-85"
          style={{ backgroundColor: ORANGE }}
        >
          진단 상담 신청하기 →
        </button>
      </div>
    </Section>
  );
}

// ─── GO GLOBAL POPUP ─────────────────────────────────────────────────────────
function GoGlobalPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("go-global-dismissed");
    if (!dismissed) setOpen(true);
  }, []);

  const close = () => {
    setOpen(false);
    sessionStorage.setItem("go-global-dismissed", "1");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4" onClick={close}>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
      <div className="relative max-w-lg w-full" onClick={(e) => e.stopPropagation()}>
        <button onClick={close} className="absolute -top-3 -right-3 z-10 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-500 hover:text-black text-lg">✕</button>
        <a href="/cosduck-service-intro.pdf" target="_blank" rel="noopener noreferrer" onClick={close} className="block">
          <Image
            src="/go-global-popup.png"
            alt="Go Global with TikTok Shop"
            width={1120}
            height={480}
            className="w-full h-auto rounded-t-2xl"
          />
          <div className="bg-white rounded-b-2xl py-3 text-center text-sm font-bold text-black shadow-2xl">
            Go Global with TikTok Shop 서비스 소개서 열람하기 →
          </div>
        </a>
      </div>
    </div>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 pt-8 pb-6">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top row: logo + legal links */}
        <div className="flex flex-col items-center gap-3 mb-6">
          <CosduckLogo />
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <a href="/terms" className="hover:text-black transition-colors">이용약관</a>
            <span className="text-gray-300">|</span>
            <a href="/privacy" className="hover:text-black transition-colors font-semibold">개인정보처리방침</a>
          </div>
        </div>

        {/* Business info */}
        <div className="border-t border-gray-200 pt-4 space-y-1 text-center">
          <p className="text-[10px] sm:text-xs text-gray-400 leading-relaxed">
            대표: 오준호 &nbsp;|&nbsp; 사업자등록번호: 875-81-00475 &nbsp;|&nbsp; 법인등록번호: 110111-6212601
          </p>
          <p className="text-[10px] sm:text-xs text-gray-400">
            주소: 서울특별시 마포구 와우산로 121, 3층(서교동) &nbsp;|&nbsp; 이메일: hyuny@cosduck.com
          </p>
          <p className="text-[10px] sm:text-xs text-gray-400 pt-2">
            Copyright © Cosduck. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [pdfGateOpen, setPdfGateOpen] = useState(false);
  return (
    <>
      <Nav onOpenPdfGate={() => setPdfGateOpen(true)} onOpenModal={() => setModalOpen(true)} />
      {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
      {pdfGateOpen && <PdfGateModal onClose={() => setPdfGateOpen(false)} />}
      <ScrollDots />
      <FloatingCTA onOpenModal={() => setPdfGateOpen(true)} />
      <main>
        <Hero onOpenModal={() => setModalOpen(true)} />
        <Services />
        <WhyNow />
        <Problem />
        <Solution />
        <CoreAdvantages />
        <CaseStudy />
        <Pricing onOpenPdfGate={() => setPdfGateOpen(true)} />
        <Roadmap />
        <PartnerFit />
        <Contact onOpenModal={() => setModalOpen(true)} />
      </main>
      <Footer />
      <GoGlobalPopup />
    </>
  );
}
