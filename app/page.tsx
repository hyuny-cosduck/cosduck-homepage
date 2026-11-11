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
    { href: "#services", label: "서비스" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="w-full mx-auto px-8 lg:px-16 flex items-center justify-between h-16">
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
    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-black text-white mb-5" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
      {children}
    </span>
  );
}

function Title({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <h2 className={`text-2xl md:text-3xl font-black tracking-tight leading-tight ${light ? "text-white" : "text-black"}`} style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
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
  const [form, setForm] = useState({ brand: "", company: "", name: "", email: "", phone: "", brandSite: "", meetingType: "유선", interests: [] as string[], startDate: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [interestOpen, setInterestOpen] = useState(false);

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));
  const toggleInterest = (v: string) =>
    setForm((f) => ({
      ...f,
      interests: f.interests.includes(v) ? f.interests.filter((i) => i !== v) : [...f.interests, v],
    }));

  const interestOptions = [
    "인비테이션 대량 발송",
    "IM Card 발송",
    "CS 처리",
    "샘플 신청 수락",
    "가이드라인 전달",
    "제품 체험단",
    "GMV Max 연동 서비스",
    "크리에이터 연락처 수집",
    "크리에이터 배치태깅",
  ];

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, interest: form.interests.join(", ") }),
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
            <p className="text-gray-500 text-sm mb-2">빠른 시일 내에 연락드리겠습니다.</p>
            <p className="text-gray-400 text-xs mb-6">바로 상담 일정을 잡으시려면 아래 버튼을 눌러주세요.</p>
            <div className="mt-4 flex flex-col gap-3 justify-center">
              <a
                href="https://calendar.app.google/MgBaSncV44LqQHVz6"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full text-white font-bold text-sm transition-opacity hover:opacity-80"
                style={{ backgroundColor: BLUE }}
              >
                📅 상담 일정 예약하기
              </a>
              <a
                href="mailto:hyuny@cosduck.com"
                className="px-6 py-2.5 rounded-full border border-gray-200 text-gray-600 font-bold text-sm hover:border-black hover:text-black transition-colors"
              >
                담당자에게 이메일 보내기
              </a>
              <button onClick={onClose} className="px-6 py-2.5 text-gray-400 text-sm">닫기</button>
            </div>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-black mb-1">상담 신청</h2>
            <p className="text-gray-400 text-sm mb-6">아래 정보를 입력하시면 빠른 시일 내로 연락드리겠습니다.</p>
            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-gray-500 block mb-1">기업명 <span className="text-red-500">*</span></label>
                <input required value={form.company} onChange={(e) => set("company", e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-black" placeholder="예) (주)마야크루" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 block mb-1">브랜드명 <span className="text-red-500">*</span></label>
                <input required value={form.brand} onChange={(e) => set("brand", e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-black" placeholder="예) 코스덕" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 block mb-1">담당자 (직함 포함) <span className="text-red-500">*</span></label>
                <input required value={form.name} onChange={(e) => set("name", e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-black" placeholder="예) 김마케팅 대리" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 block mb-1">이메일 <span className="text-red-500">*</span></label>
                <input required type="email" value={form.email} onChange={(e) => set("email", e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-black" placeholder="예) name@company.com" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 block mb-1">전화번호 <span className="text-red-500">*</span></label>
                <input required type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-black" placeholder="예) 010-1234-5678" />
              </div>
              <div className="relative">
                <label className="text-xs font-bold text-gray-500 block mb-1">
                  관심 서비스 (복수 선택 가능) <span className="text-red-500">*</span>
                </label>
                <button
                  type="button"
                  onClick={() => setInterestOpen((o) => !o)}
                  className={`w-full border rounded-xl px-4 py-2.5 text-sm text-left flex items-center justify-between focus:outline-none transition-colors ${
                    interestOpen ? "border-black" : "border-gray-200"
                  }`}
                >
                  <span className={form.interests.length ? "text-gray-800" : "text-gray-400"}>
                    {form.interests.length ? form.interests.join(", ") : "서비스를 선택해 주세요"}
                  </span>
                  <svg className={`w-4 h-4 text-gray-400 transition-transform ${interestOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {interestOpen && (
                  <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-56 overflow-y-auto">
                    {interestOptions.map((v) => (
                      <label
                        key={v}
                        className="flex items-center gap-3 px-4 py-2.5 cursor-pointer hover:bg-gray-50 transition-colors"
                        onClick={() => toggleInterest(v)}
                      >
                        <div className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                          form.interests.includes(v) ? "border-black bg-black" : "border-gray-300"
                        }`}>
                          {form.interests.includes(v) && (
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                          )}
                        </div>
                        <span className="text-sm text-gray-700">{v}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 block mb-1">예상하는 시작날짜</label>
                <input value={form.startDate} onChange={(e) => set("startDate", e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-black" placeholder="예) 2026년 12월, 미정" />
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
  const [form, setForm] = useState({ brand: "", company: "", name: "", email: "", phone: "", brandSite: "", interests: [] as string[], startDate: "" });
  const [status, setStatus] = useState<"idle" | "loading">("idle");
  const [interestOpen, setInterestOpen] = useState(false);

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));
  const toggleInterest = (v: string) =>
    setForm((f) => ({
      ...f,
      interests: f.interests.includes(v) ? f.interests.filter((i) => i !== v) : [...f.interests, v],
    }));

  const interestOptions = [
    "인비테이션 대량 발송",
    "IM Card 발송",
    "CS 처리",
    "샘플 신청 수락",
    "가이드라인 전달",
    "제품 체험단",
    "GMV Max 연동 서비스",
    "크리에이터 연락처 수집",
    "크리에이터 배치태깅",
  ];

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.interests.length === 0) return;
    setStatus("loading");
    try {
      await fetch("/api/pdf-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, interest: form.interests.join(", ") }),
      });
    } catch {
      // still open the PDF even if Slack fails
    }
    window.open("/cosduck-service-intro-2026.pdf", "_blank");
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
            <label className="text-xs font-bold text-gray-500 block mb-1">기업명 <span className="text-red-500">*</span></label>
            <input
              required
              value={form.company}
              onChange={(e) => set("company", e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-black"
              placeholder="예) (주)마야크루"
            />
          </div>
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
            <label className="text-xs font-bold text-gray-500 block mb-1">이메일 <span className="text-red-500">*</span></label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-black"
              placeholder="예) name@company.com"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-gray-500 block mb-1">핸드폰 <span className="text-red-500">*</span></label>
            <input
              required
              type="tel"
              value={form.phone}
              onChange={(e) => set("phone", e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-black"
              placeholder="예) 010-1234-5678"
            />
          </div>
          <div className="relative">
            <label className="text-xs font-bold text-gray-500 block mb-1">
              관심 서비스 (복수 선택 가능) <span className="text-red-500">*</span>
            </label>
            <button
              type="button"
              onClick={() => setInterestOpen((o) => !o)}
              className={`w-full border rounded-xl px-4 py-2.5 text-sm text-left flex items-center justify-between focus:outline-none transition-colors ${
                interestOpen ? "border-black" : "border-gray-200"
              }`}
            >
              <span className={form.interests.length ? "text-gray-800" : "text-gray-400"}>
                {form.interests.length ? form.interests.join(", ") : "서비스를 선택해 주세요"}
              </span>
              <svg className={`w-4 h-4 text-gray-400 transition-transform ${interestOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {interestOpen && (
              <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-56 overflow-y-auto">
                {interestOptions.map((v) => (
                  <label
                    key={v}
                    className="flex items-center gap-3 px-4 py-2.5 cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => toggleInterest(v)}
                  >
                    <div className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                      form.interests.includes(v) ? "border-black bg-black" : "border-gray-300"
                    }`}>
                      {form.interests.includes(v) && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      )}
                    </div>
                    <span className="text-sm text-gray-700">{v}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
          <div>
            <label className="text-xs font-bold text-gray-500 block mb-1">예상하는 시작날짜</label>
            <input
              value={form.startDate}
              onChange={(e) => set("startDate", e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-black"
              placeholder="예) 2026년 12월, 미정"
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading" || form.interests.length === 0}
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
  { id: "faq",          label: "FAQ" },
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
    const footer = document.querySelector("footer");
    if (hero) heroObserver.observe(hero);
    if (contact) contactObserver.observe(contact);
    if (footer) contactObserver.observe(footer);

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
          style={{ backgroundColor: ORANGE, fontFamily: "'Unbounded', sans-serif" }}
        >
          솔루션 신청 →
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

      <div className="relative max-w-7xl mx-auto px-8 lg:px-16 pt-40 pb-28">
        <div className="flex items-center gap-8 md:gap-16">
          {/* Left — text */}
          <div className="flex-1">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs font-bold mb-8"
              style={{ backgroundColor: BLUE }}
            >
              TikTok Shop AI Partner
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] tracking-tight mb-5 text-black" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
              <span style={{ color: ORANGE }}>TikTok Shop</span> 자동화 파트너
            </h1>

            <p className="text-sm text-gray-500 max-w-lg mb-8 leading-relaxed">
              틱톡샵 인비테이션 자동 발송 | 틱톡샵 샘플 자동 수락 | 틱톡샵 콘텐츠용 가이드라인 자동 전달 | 틱톡샵 Customer Message 자동 CS처리 | 틱톡샵 제품리뷰 체험단 | 틱톡샵 크리에이터풀 US 365k+ &amp; ID 474k+ | 틱톡샵 Shop Ads 예산 자동 조절
            </p>

            <div className="flex flex-row gap-3">
              <button
                onClick={onOpenModal}
                className="inline-flex items-center justify-center px-7 py-3.5 text-black font-bold rounded-full text-sm transition-opacity hover:opacity-80"
                style={{ backgroundColor: ORANGE, fontFamily: "'Unbounded', sans-serif" }}
              >
                솔루션 신청 →
              </button>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-7 py-3.5 text-white font-bold rounded-full text-sm transition-opacity hover:opacity-80"
                style={{ backgroundColor: BLUE, fontFamily: "'Unbounded', sans-serif" }}
              >
                성과 보기
              </a>
            </div>
          </div>

          {/* Right — bot illustration */}
          <div className="hidden md:block shrink-0" style={{ marginLeft: "-2rem" }}>
            <img src="/bot_brand.png" alt="Cosduck Bot & Brand" style={{ width: "380px" }} />
          </div>
        </div>

      </div>
    </section>
  );
}

// ─── BRAND PARTNERS ──────────────────────────────────────────────────────────
function TickerRow({ items, duration, reverse, height }: { items: { name: string; logo: string; className?: string }[]; duration: number; reverse?: boolean; height: string }) {
  const renderGroup = (keyPrefix: string) => (
    <div className="flex items-center gap-8 sm:gap-14 pr-8 sm:pr-14 shrink-0">
      {items.map((b) => (
        <img
          key={`${keyPrefix}-${b.name}`}
          src={b.logo}
          alt={b.name}
          className={`${b.className || "h-5 sm:h-7"} w-auto shrink-0 opacity-70`}
        />
      ))}
    </div>
  );
  return (
    <div className={`${height} overflow-hidden`}>
      <div
        className="flex w-max h-full items-center"
        style={{
          animation: `${reverse ? "tickerRight" : "tickerLeft"} ${duration}s linear infinite`,
        }}
      >
        {renderGroup("a")}
        {renderGroup("b")}
        {renderGroup("c")}
        {renderGroup("d")}
      </div>
    </div>
  );
}

function BrandPartners() {
  const partners = [
    { name: "Laka", logo: "/brands/laka.png", className: "h-4 sm:h-6" },
    { name: "Colorgram", logo: "/brands/colorgram.png", className: "h-5 sm:h-7 translate-y-0.5" },
    { name: "Pongdang", logo: "/brands/pongdang.png", className: "h-3 sm:h-5" },
    { name: "Glowbeast", logo: "/brands/glowbeast.png", className: "h-6 sm:h-8" },
    { name: "Zeroid", logo: "/brands/zeroid.png", className: "h-3 sm:h-5" },
    { name: "Beplain", logo: "/brands/beplain.png", className: "h-5 sm:h-7" },
    { name: "Heeda", logo: "/brands/heeda.png", className: "h-5 sm:h-7" },
    { name: "Kimchip", logo: "/brands/kimchip.png", className: "h-5 sm:h-7" },
  ];

  const seedingRows = [
    [
      { name: "oliveyoung", logo: "/brands/oliveyoung.png", className: "h-6 sm:h-8" },
      { name: "kurly", logo: "/brands/kurly.png", className: "h-6 sm:h-8" },
      { name: "dongkook", logo: "/brands/dongkook.png", className: "h-6 sm:h-8" },
      { name: "tocobo", logo: "/brands/tocobo.png", className: "h-4 sm:h-5" },
      { name: "whipped", logo: "/brands/whipped.png" },
      { name: "roundlab", logo: "/brands/roundlab.png" },
      { name: "sungbooneditor", logo: "/brands/sungbooneditor.png" },
      { name: "ndp", logo: "/brands/ndp.png", className: "h-4 sm:h-5" },
    ],
    [
      { name: "shaishaishai", logo: "/brands/shaishaishai.png" },
      { name: "lepique", logo: "/brands/lepique.png", className: "h-4 sm:h-5" },
      { name: "entropy", logo: "/brands/entropy.png" },
      { name: "oliveinternational", logo: "/brands/oliveinternational.png" },
      { name: "dinto", logo: "/brands/dinto.png" },
      { name: "cisab", logo: "/brands/cisab.png", className: "h-4 sm:h-5" },
      { name: "drdiary", logo: "/brands/drdiary.png" },
      { name: "delphyr", logo: "/brands/delphyr.png" },
    ],
    [
      { name: "ivoskin", logo: "/brands/ivoskin.png" },
      { name: "onthelook", logo: "/brands/onthelook.png" },
      { name: "skinandlab", logo: "/brands/skinandlab.png", className: "h-4 sm:h-5" },
      { name: "hetras", logo: "/brands/hetras.png" },
      { name: "javindeseoul", logo: "/brands/javindeseoul.png" },
      { name: "redence", logo: "/brands/redence.png" },
      { name: "blancnature", logo: "/brands/blancnature.png", className: "h-3 sm:h-5" },
      { name: "qforet", logo: "/brands/qforet.png" },
      { name: "cellfusionc", logo: "/brands/cellfusionc.png", className: "h-3 sm:h-4" },
    ],
    [
      { name: "ongredients", logo: "/brands/ongredients.png" },
      { name: "skin1004", logo: "/brands/skin1004.png", className: "h-7 sm:h-10" },
      { name: "dalpha", logo: "/brands/dalpha.png" },
      { name: "rejuran", logo: "/brands/rejuran.png", className: "h-6 sm:h-9" },
      { name: "abib", logo: "/brands/abib.png", className: "h-4 sm:h-5" },
      { name: "hapakristin", logo: "/brands/hapakristin.png", className: "h-3 sm:h-5" },
      { name: "maxclinic", logo: "/brands/maxclinic.png" },
      { name: "ruminae", logo: "/brands/ruminae.png", className: "h-4 sm:h-5" },
    ],
  ];

  return (
    <section className="py-10 sm:py-14 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-lg sm:text-2xl font-black text-gray-700 mb-6">코스덕과 함께 해온 브랜드들</p>
      </div>
      <div className="space-y-2">
        <TickerRow items={partners} duration={25} reverse height="h-10 sm:h-14" />
        {seedingRows.map((row, ri) => (
          <TickerRow key={ri} items={row} duration={30 + ri * 5} reverse={ri % 2 === 1} height="h-8 sm:h-10" />
        ))}
      </div>
    </section>
  );
}


// ─── CASE STUDY ─────────────────────────────────────────────────────────────
// ─── SERVICES (통합: 타임라인 + Before→After) ─────────────────────────────────
function Services() {
  const brands = [
    {
      label: "BRAND A · US",
      steps: [
        { time: "출시", week: 0, text: "TikTok Shop 런칭" },
        { time: "2주", week: 2, text: "샘플 주 500건 발송" },
        { time: "1개월", week: 4, text: "어필리에이트 콘텐츠 광고 부스팅" },
        { time: "3개월", week: 12, text: "샵티어 T4 달성" },
        { time: "4개월", week: 16, text: "샵티어 T5 달성", highlight: true },
      ],
    },
    {
      label: "BRAND B · US",
      steps: [
        { time: "출시", week: 0, text: "TikTok Shop 런칭" },
        { time: "2주", week: 2, text: "틱톡샵 체험단 100건 진행" },
        { time: "4주", week: 4, text: "인비테이션 주 7,000건 발송" },
        { time: "5주", week: 5, text: "샘플 주 500건 발송" },
        { time: "6주", week: 6, text: "샵티어 T4 달성", highlight: true },
      ],
    },
    {
      label: "BRAND C · US",
      steps: [
        { time: "출시", week: 0, text: "TikTok Shop 런칭" },
        { time: "2주", week: 2, text: "틱톡샵 체험단 60건 진행" },
        { time: "4주", week: 4, text: "인비테이션 주 7,000건 발송" },
        { time: "3개월", week: 12, text: "샘플 주 200건 + 체험단 50건 진행" },
        { time: "4개월", week: 16, text: "인비테이션 주 2만건 발송" },
        { time: "6개월", week: 24, text: "샘플 주 1,000건 인입", highlight: true },
      ],
    },
    {
      label: "BRAND D · 인도네시아",
      steps: [
        { time: "출시", week: 0, text: "TikTok Shop 런칭" },
        { time: "초기", week: 2, text: "인비테이션 주 2만건 발송" },
        { time: "7개월", week: 28, text: "일 매출 2,000만원 돌파", highlight: true },
      ],
    },
  ];
  const maxWeek = 28;

  return (
    <Section id="services" bg="bg-gray-50">
      <Badge>Services</Badge>
      <Title>직접 해봤기에, 자동화할 수 있습니다</Title>
      <Sub>틱톡샵 운영 전 과정을 수동으로 대행해 본 경험이, 지금의 자동화 솔루션을 만들었습니다.</Sub>

      {/* Before → After + 봇 */}
      <div className="flex gap-5 max-w-5xl mx-auto items-stretch">
      <div className="grid md:grid-cols-2 gap-5 flex-1">
        {/* Before */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-400 border border-gray-200 mb-5">
            Before
          </span>
          <h3 className="text-lg font-black text-gray-400 mb-1">수동 초기세팅 대행</h3>
          <p className="text-gray-400 text-xs mb-5">직접 운영하며 쌓은 노하우</p>
          <div className="space-y-2">
            {[
              "Business Center ↔ Seller Center ↔ Ads Center 연동",
              "카테고리 인증",
              "상품 리스팅",
              "FBT Inbound Order",
              "Shop Ads 세팅",
              "TikTok Chatbot 세팅",
              "상시할인가 세팅",
              "IPPC 서류 등록",
              "초기 리뷰 부스팅",
            ].map((item) => (
              <div key={item} className="flex items-start gap-1.5 text-xs text-gray-400 line-through">
                <span className="mt-0.5 no-underline">✓</span>{item}
              </div>
            ))}
          </div>
          <div className="mt-5 pt-4 border-t border-gray-100">
            <p className="text-[10px] text-gray-400">이 경험이 있기에</p>
          </div>
        </div>

        {/* After */}
        <div className="rounded-2xl p-8 border-2" style={{ borderColor: ORANGE, backgroundColor: `${ORANGE}08` }}>
          <span
            className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white mb-5"
            style={{ backgroundColor: ORANGE }}
          >
            Now
          </span>
          <h3 className="text-lg font-black text-black mb-1">AI 자동화 솔루션</h3>
          <p className="text-gray-600 text-xs mb-5">반복 업무를 자동으로 처리합니다</p>
          <div className="space-y-2">
            {[
              "인비테이션 자동 발송",
              "샘플 자동 수락",
              "콘텐츠용 가이드라인 자동 전달",
              "Customer Message 자동 CS처리",
              "제품리뷰 체험단",
              "크리에이터풀 US 365k+ & ID 474k+",
              "Shop Ads 예산 자동 조절",
            ].map((item) => (
              <div key={item} className="flex items-start gap-1.5 text-xs font-medium text-black">
                <span className="mt-0.5" style={{ color: ORANGE }}>✦</span>{item}
              </div>
            ))}
          </div>
          <div className="mt-5 pt-4 border-t" style={{ borderColor: `${ORANGE}30` }}>
            <p className="text-[10px] font-bold" style={{ color: ORANGE }}>자동화가 가능합니다</p>
          </div>
        </div>
      </div>
      {/* 봇 일러스트 오른쪽 */}
      <div className="hidden md:flex items-center shrink-0">
        <img src="/bot-squad.png" alt="코스덕 자동화 봇" className="w-80 lg:w-96" />
      </div>
      </div>

      {/* 타임라인 — 하나의 카드에 4개 브랜드 */}
      <div className="mt-8 rounded-2xl border border-gray-200 p-5 sm:p-8 bg-white max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <img src="/bot_laptop.png" alt="데이터 대시보드" className="w-12 h-12" />
          <h3 className="text-sm font-black text-black">수동 대행으로 만든 성과</h3>
        </div>
        <div className="space-y-8">
          {brands.map((b) => {
            const lastWeek = b.steps[b.steps.length - 1].week;
            const endPct = Math.max(Math.min((lastWeek / maxWeek) * 100, 88), 60);
            const positions = b.steps.map((_s, i) => {
              if (i === 0) return 0;
              if (i === b.steps.length - 1) return endPct;
              return (i / (b.steps.length - 1)) * endPct;
            });
            return (
              <div key={b.label}>
                <span
                  className="inline-block px-2.5 py-0.5 rounded-full text-black text-[10px] font-bold mb-3"
                  style={{ backgroundColor: ORANGE }}
                >
                  {b.label}
                </span>
                <div className="relative">
                  <div className="absolute top-[5px] left-0 h-0.5" style={{ backgroundColor: ORANGE, width: `${endPct}%` }} />
                  <div className="flex relative">
                    {b.steps.map((s, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center text-center absolute"
                        style={{ left: `${positions[i]}%`, transform: i === 0 ? "none" : "translateX(-50%)" }}
                      >
                        <div
                          className={`rounded-full shrink-0 relative z-10 ${s.highlight ? "w-3 h-3" : "w-2.5 h-2.5"}`}
                          style={{ backgroundColor: s.highlight ? ORANGE : "#ccc", border: s.highlight ? `2px solid ${ORANGE}40` : "none" }}
                        />
                        <span className="text-[9px] font-bold mt-1.5 block whitespace-nowrap" style={{ color: s.highlight ? ORANGE : "#999" }}>
                          {s.time}
                        </span>
                        <p className={`text-[9px] leading-tight mt-0.5 whitespace-nowrap ${s.highlight ? "font-black text-black" : "text-gray-500"}`}>
                          {s.text}
                        </p>
                      </div>
                    ))}
                  </div>
                  {/* spacer */}
                  <div className="h-14" />
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-center text-[10px] text-gray-400 mt-6 pt-4 border-t border-gray-100">
          * 실제 운영 데이터 기준이며, 샵·상품에 따라 결과는 달라질 수 있습니다.
        </p>
      </div>
    </Section>
  );
}


// ─── REVIEW PROGRAM ──────────────────────────────────────────────────────────
function ReviewProgram() {
  return (
    <Section id="review" bg="bg-white">
      <div className="flex items-start gap-4 mb-6">
        <div>
          <Badge>Plus · Review Program</Badge>
          <Title>코스덕 유저 풀로 틱톡샵 체험단도 운영합니다</Title>
        </div>
        <img src="/bot_products.png" alt="제품" className="hidden sm:block w-20 shrink-0" />
      </div>
      <Sub>코스덕 체험단 유저들이 미국에 새로 진출한 브랜드의 제품을 먼저 써보고, 솔직한 리뷰를 남깁니다.</Sub>

      <div className="flex items-center justify-center gap-3 mt-8 max-w-3xl mx-auto">
        {[
          { num: "01", icon: "📋", title: "체험단 캠페인 오픈", desc: "신제품 출시 시 코스덕 솔루션으로 제품 체험단 캠페인을 엽니다." },
          { num: "02", icon: "🛒", title: "코스덕 유저 참여", desc: "캠페인에 참여한 코스덕 유저들이 직접 구매하고 사용합니다." },
          { num: "03", icon: "⭐", title: "샵 리뷰 작성", desc: "실사용 후기를 샵 리뷰로 남기고, 캠페인 현황도 투명하게 관리합니다." },
        ].map((step, i) => (
          <div key={step.num} className="flex items-center gap-3">
            <div className="rounded-2xl border border-gray-200 p-5 bg-gray-50 text-center w-44 shrink-0">
              <div className="text-2xl mb-2">{step.icon}</div>
              <div className="text-[10px] font-black mb-1" style={{ color: BLUE }}>{step.num}</div>
              <h3 className="text-sm font-black text-black mb-1.5">{step.title}</h3>
              <p className="text-[10px] text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
            {i < 2 && <span className="text-gray-300 text-xl font-bold shrink-0">→</span>}
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "비용은 어떻게 되나요?",
    a: "인비테이션 발송만 이용하실 경우 월 100만 원이며, IM Card 발송과 크리에이터 배치태깅까지 포함한 풀 패키지는 월 190만 원입니다. 그 외 맞춤 서비스는 상담을 통해 안내드립니다.",
  },
  {
    q: "최소 계약 기간이 있나요?",
    a: "기본 계약 기간은 2개월 단위입니다.",
  },
  {
    q: "최소 조건이 있나요?",
    a: "별도의 최소 조건은 없습니다. 브랜드 규모와 관계없이 상담 후 바로 시작하실 수 있습니다.",
  },
  {
    q: "어떤 국가를 지원하나요?",
    a: "현재 미국(US)과 인도네시아(ID)를 중심으로 운영하고 있으며, 그 외 국가도 상담을 통해 지원 가능합니다.",
  },
  {
    q: "틱톡샵을 아직 개설하지 않았는데 가능한가요?",
    a: "틱톡샵 계정 개설부터 초기 세팅(카테고리 인증, 상품 리스팅, Ads 연동 등)은 별도의 상담을 통해 진행 가능합니다.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <Section id="faq" bg="bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <Badge>FAQ</Badge>
        <Title>자주 묻는 질문</Title>
        <Sub>궁금한 점이 있으시면 언제든 상담 신청해 주세요.</Sub>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-xl bg-white overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <span className="text-sm font-bold text-black">{faq.q}</span>
                <svg
                  className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── CONTACT ─────────────────────────────────────────────────────────────────
function Contact({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section id="contact" className="py-8 md:py-12 bg-white" style={{ scrollMarginTop: "7rem" }}>
      <div className="max-w-6xl mx-auto px-6">
      <div className="max-w-2xl mx-auto text-center">
        <img src="/bot_wink.png" alt="코스덕 봇" className="w-40 mx-auto mb-4" />
        <Badge>Next Step</Badge>
        <Title>
          지금 바로 받아보세요
        </Title>
        <Sub>담당자: 임 현 | hyuny@cosduck.com</Sub>

        <button
          onClick={onOpenModal}
          className="inline-flex items-center justify-center px-8 py-4 text-black font-black text-sm rounded-full transition-opacity hover:opacity-85"
          style={{ backgroundColor: ORANGE, fontFamily: "'Unbounded', sans-serif" }}
        >
          유선 상담 신청하기 →
        </button>
      </div>
      </div>
    </section>
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
      <FloatingCTA onOpenModal={() => setModalOpen(true)} />
      <main>
        <Hero onOpenModal={() => setModalOpen(true)} />
        <BrandPartners />
        <Services />
        <ReviewProgram />
        <FAQ />
        <Contact onOpenModal={() => setModalOpen(true)} />
      </main>
      <Footer />
    </>
  );
}
