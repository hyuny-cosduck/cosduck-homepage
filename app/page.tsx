"use client";

import { useState, useEffect, useRef } from "react";

// ─── Brand tokens ─────────────────────────────────────────────────────────────
const ORANGE = "#F5A623";
const BLUE   = "#2196F3";

// ─── Logo ────────────────────────────────────────────────────────────────────
function CosduckLogo({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`font-black tracking-tight text-xl ${dark ? "text-white" : "text-black"}`}>
      <span style={{ color: ORANGE }}>c</span>osduck
    </span>
  );
}

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#why-now", label: "시장 기회" },
    { href: "#solution", label: "솔루션" },
    { href: "#track-record", label: "성과" },
    { href: "#services", label: "서비스" },
    { href: "#pricing", label: "요금" },
    { href: "#team", label: "팀" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/96 backdrop-blur-sm border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#">
          <CosduckLogo dark={!scrolled} />
        </a>

        <div className="hidden md:flex items-center gap-7 text-sm font-medium">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`transition-colors hover:opacity-70 ${scrolled ? "text-gray-700" : "text-white/80"}`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 text-black text-sm font-bold rounded-full transition-opacity hover:opacity-80"
          style={{ backgroundColor: ORANGE }}
        >
          무료 진단 미팅
        </a>

        <button
          className={`md:hidden ${scrolled ? "text-gray-700" : "text-white"}`}
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
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-3 text-sm font-medium text-gray-700 border-b border-gray-100 last:border-0"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 block text-center px-5 py-3 text-black text-sm font-bold rounded-full"
            style={{ backgroundColor: ORANGE }}
            onClick={() => setMenuOpen(false)}
          >
            무료 진단 미팅
          </a>
        </div>
      )}
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
    <section id={id} className={`py-20 md:py-28 ${bg}`}>
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
    <h2 className={`text-3xl md:text-4xl font-black tracking-tight leading-tight ${light ? "text-white" : "text-black"}`}>
      {children}
    </h2>
  );
}

function Sub({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`mt-3 mb-12 text-lg leading-relaxed ${light ? "text-white/50" : "text-gray-500"}`}>
      {children}
    </p>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-black text-white overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20">
        {/* Badge */}
        <span
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs font-bold mb-8"
          style={{ backgroundColor: BLUE }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          TikTok Shop Agency
        </span>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6">
          K-뷰티 브랜드의
          <br />
          <span style={{ color: ORANGE }}>글로벌 틱톡샵</span>
          <br />
          성장 파트너
        </h1>

        <p className="text-xl text-white/55 max-w-lg mb-10 leading-relaxed">
          데이터 기반 운영 · 자체 분석 솔루션 · 크리에이터 네트워크
          <br />
          성과로 증명되는 성장 파트너,{" "}
          <span className="font-black text-white">
            <span style={{ color: ORANGE }}>c</span>osduck
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-black font-bold rounded-full text-base transition-opacity hover:opacity-80"
            style={{ backgroundColor: ORANGE }}
          >
            무료 진단 미팅 신청 →
          </a>
          <a
            href="#track-record"
            className="inline-flex items-center justify-center px-8 py-4 text-white font-bold rounded-full text-base transition-opacity hover:opacity-80"
            style={{ backgroundColor: BLUE }}
          >
            성과 보기
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: 64,  suffix: "B+",  label: "2025 틱톡샵 글로벌 GMV", prefix: "$",  color: BLUE   },
            { value: 600, suffix: "K/월", label: "최고 매출 브랜드 (US)",  prefix: "$",  color: BLUE   },
            { value: 500, suffix: "명+",  label: "글로벌 크리에이터 풀",   prefix: "",   color: ORANGE },
            { value: 7,   suffix: "개월", label: "집중 성장 로드맵",        prefix: "",   color: ORANGE },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-black" style={{ color: s.color }}>
                {s.prefix}<Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-sm text-white/45 mt-1">{s.label}</div>
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
      title: "세계 2위로 올라선 K-뷰티",
      facts: ["한국 화장품 수출 $11.4B", "세계 2위 수출국 · 최대시장 미국 $2.2B", "뷰티 = 틱톡샵 1위 카테고리"],
      tagline: "세계가 인정한 K-뷰티, 지금이 기회",
    },
  ];

  return (
    <Section id="why-now" bg="bg-gray-50">
      <Badge>Why Now</Badge>
      <Title>지금이 K-뷰티 × 틱톡샵의 골든타임입니다</Title>
      <Sub>폭발하는 채널, 열려 있는 핵심 시장, 세계 2위로 올라선 K-뷰티. 세 흐름이 지금 겹칩니다.</Sub>

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
        성장하는 채널 × 열려 있는 시장 × 세계 2위 K-뷰티.{" "}
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
      <Title>K-뷰티 브랜드의 틱톡샵 진출, 왜 실패하는가</Title>
      <Sub>틱톡샵은 K-뷰티에게 최고의 기회입니다. 하지만 대부분의 브랜드가 첫 6개월 안에 성장 정체를 겪습니다.</Sub>

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
      <Badge>Solution</Badge>
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

      <div className="grid md:grid-cols-3 gap-5 mb-8">
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
        ].map((a) => (
          <div key={a.title} className="bg-white rounded-2xl p-8 border border-gray-200">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
              style={{ backgroundColor: `${BLUE}15` }}
            >
              {a.icon}
            </div>
            <h3 className="text-lg font-bold mb-3 text-black">{a.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{a.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
        <h3 className="text-xl font-bold mb-2 text-black">통합 분석 대시보드</h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          틱톡샵 매출·크리에이터 성과·주문 상태·GMV MAX 캠페인까지 주요 지표를 한 화면에 통합,{" "}
          <strong className="text-black">집중할 곳과 막힌 곳을 동시에 파악합니다.</strong>
        </p>
      </div>
    </Section>
  );
}

// ─── TRACK RECORD ────────────────────────────────────────────────────────────
function TrackRecord() {
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
      label: "BRAND C · 인도네시아",
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
    <Section id="track-record" bg="bg-[#0B1628]">
      <Badge>Track Record</Badge>
      <Title light>북미·인도네시아에서, 최단기간에 매출 최상위권에 올렸습니다</Title>
      <Sub light>대행 시작 단 4개월 만에 브랜드A를 T5(월 매출 $600K)까지, 브랜드B는 런칭 6주 만에 T4를 달성했습니다.</Sub>

      <div className="grid md:grid-cols-3 gap-5">
        {brands.map((b) => (
          <div key={b.label} className="rounded-2xl border border-white/10 p-8 bg-white/5">
            <span
              className="inline-block px-3 py-1 rounded-full text-black text-xs font-bold mb-6"
              style={{ backgroundColor: ORANGE }}
            >
              {b.label}
            </span>
            <h3 className="text-xl font-black text-white mb-6 leading-snug">{b.title}</h3>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {b.metrics.map((m) => (
                <div key={m.unit}>
                  <div className="text-2xl font-black" style={{ color: ORANGE }}>{m.val}</div>
                  <div className="text-xs text-white/45 mt-1">{m.unit}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-white/40 border-t border-white/10 pt-4">{b.note}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-white/25">
        * 실제 운영 데이터 기준이며, 샵·상품에 따라 결과는 달라질 수 있습니다.
      </p>
    </Section>
  );
}

// ─── SERVICES ────────────────────────────────────────────────────────────────
function Services() {
  const cosduckScope = [
    { cat: "TikTok Shop 운영 대행", items: ["리뷰 작업", "상품 리스팅", "FBT 처리", "CS 및 리뷰 답글 관리"] },
    { cat: "틱톡 시딩 및 광고 대행", items: ["어필리에이트 무가 시딩", "콘텐츠 기획 및 크리에이터 관리", "성과 분석 및 대시보드 제공", "GMV MAX 캠페인"] },
  ];
  const brandScope = [
    { cat: "커머스", items: ["FBT 입고 및 재고 관리", "상품 썸네일 및 디자인 제공", "브랜딩 & 상세페이지", "배송 이슈 처리"] },
    { cat: "마케팅", items: ["프로모션 & 할인 정책 설정", "예산 관련 의사결정"] },
  ];

  return (
    <Section id="services" bg="bg-gray-50">
      <Badge>Services</Badge>
      <Title>상품 세팅부터 고객 관리까지, TikTok Shop 운영 전 과정을 직접 수행합니다</Title>
      <Sub>단순 대행이 아닌, 코스덕만의 방법론으로 각 단계에서 성과를 만듭니다.</Sub>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="bg-white rounded-2xl p-8 border border-gray-200">
          <span
            className="inline-block px-4 py-2 rounded-full text-white text-sm font-bold mb-6"
            style={{ backgroundColor: BLUE }}
          >
            코스덕 업무 범위
          </span>
          {cosduckScope.map((s) => (
            <div key={s.cat} className="mb-6 last:mb-0">
              <h4 className="font-bold text-sm mb-2 text-black">✅ {s.cat}</h4>
              <ul className="space-y-1.5 ml-5">
                {s.items.map((item) => (
                  <li key={item} className="text-sm text-gray-500 flex gap-2">
                    <span className="text-gray-300">–</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 border border-gray-200">
          <span className="inline-block px-4 py-2 rounded-full bg-black text-white text-sm font-bold mb-6">
            브랜드사 업무 범위
          </span>
          {brandScope.map((s) => (
            <div key={s.cat} className="mb-6 last:mb-0">
              <h4 className="font-bold text-sm mb-2 text-black">✅ {s.cat}</h4>
              <ul className="space-y-1.5 ml-5">
                {s.items.map((item) => (
                  <li key={item} className="text-sm text-gray-500 flex gap-2">
                    <span className="text-gray-300">–</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-5 text-xs text-gray-400 text-center">
        * 틱톡샵 운영 및 광고 대행의 계약기간은 6개월 단위로 진행되며, 샵 초기 세팅 기간 1개월은 별도로 소요됩니다.
      </p>
    </Section>
  );
}

// ─── PRICING ─────────────────────────────────────────────────────────────────
function Pricing() {
  return (
    <Section id="pricing" bg="bg-white">
      <Badge>Pricing</Badge>
      <Title>투자 대비 예상 수익: 7개월 ROI 시뮬레이션</Title>
      <Sub>
        고정 운영비 + 성과 연동형 수수료 구조를 적용합니다.
        성과 수수료는 실제 발생 GMV 기준이라, 코스덕이 성과를 내야 코스덕도 수익을 얻습니다.
      </Sub>

      <div className="grid md:grid-cols-2 gap-5 mb-8">
        <div className="bg-black text-white rounded-2xl p-8">
          <span
            className="inline-block px-4 py-2 rounded-full text-white text-sm font-bold mb-6"
            style={{ backgroundColor: BLUE }}
          >
            파트너십 비용 구조
          </span>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-2xl mb-2">💰</div>
              <div className="text-xs text-white/50 mb-1">고정 운영비</div>
              <div className="text-2xl font-black">
                ₩10,000,000<span className="text-base font-normal text-white/50">/월</span>
              </div>
            </div>
            <div>
              <div className="text-2xl mb-2">📈</div>
              <div className="text-xs text-white/50 mb-1">성과 수수료</div>
              <div className="text-2xl font-black">
                GMV <span style={{ color: ORANGE }}>10%</span>
              </div>
              <div className="text-xs text-white/40 mt-1">TikTok Shop GMV 기준</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
          <span
            className="inline-block px-4 py-2 rounded-full text-white text-sm font-bold mb-6"
            style={{ backgroundColor: BLUE }}
          >
            7개월 예상 성과 요약
          </span>
          <div className="space-y-3">
            {[
              { label: "총 광고 예산", value: "약 3.5억 원" },
              { label: "예상 누적 매출", value: "약 4.4억 원 +" },
              { label: "평균 광고 ROAS", value: "1.25 (보수적 산출)" },
              { label: "유가협업 효과", value: "샵 노출 및 구매 전환율 상승" },
            ].map((r) => (
              <div key={r.label} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <span className="text-sm text-gray-500">{r.label}</span>
                <span className="font-bold text-black text-sm">{r.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-black text-white">
              <th className="px-5 py-3.5 text-left font-semibold">구분</th>
              {["1M", "2M", "3M", "4M", "5M", "6M", "7M", "합계"].map((m) => (
                <th key={m} className="px-4 py-3.5 text-right font-semibold">{m}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              { label: "총 광고 예산 (만원)", values: ["-", "900", "2,000", "4,000", "6,000", "9,000", "13,000", "34,900"] },
              { label: "광고 효율 (ROAS)", values: ["-", "0.5", "0.7", "1.0", "1.1", "1.3", "1.5", "1.25"] },
              { label: "Ads 기반 매출 (만원)", values: ["-", "450", "1,400", "4,000", "6,600", "11,700", "19,500", "43,650"] },
            ].map((row, i) => (
              <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-5 py-3 font-medium text-gray-700">{row.label}</td>
                {row.values.map((v, j) => (
                  <td
                    key={j}
                    className={`px-4 py-3 text-right ${j === 7 ? "font-bold text-black" : "text-gray-500"}`}
                  >
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
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

      <div className="space-y-3">
        {months.map((m, i) => (
          <div key={i} className="flex items-center gap-5 bg-white rounded-xl px-6 py-5 border border-gray-100">
            <div
              className="w-10 h-10 rounded-full text-white text-sm font-black flex items-center justify-center shrink-0"
              style={{ backgroundColor: i < 3 ? BLUE : ORANGE }}
            >
              {i + 1}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs text-gray-400 mb-0.5">{i + 1}개월차</div>
              <div className="font-bold text-black text-sm">{m.title}</div>
            </div>
            <span className="text-xs font-semibold text-white bg-black px-3 py-1.5 rounded-full shrink-0">
              {m.goal}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── TEAM ────────────────────────────────────────────────────────────────────
function Team() {
  const members = [
    { role: "팀장", name: "Hyuny", strength: "틱톡팀 운영 경력 2년, 다수 브랜드 런칭·총괄", result: "자체 운영 툴 AX 개발, 북미·ID 시장 동시 운영" },
    { role: "전담 AM", name: "Jade", strength: "데이터 기반 성과 분석·최적화", result: "브랜드C GMV Max ROI 0.5→1.3 개선" },
    { role: "전담 AM", name: "Dani", strength: "영상 콘텐츠 기획·제작 디렉팅", result: "브랜드B 일매출 1800만원 달성" },
    { role: "전담 AM", name: "Lucy", strength: "메디컬·뷰티 카테고리 전문 셀링", result: "신규 SKU 런칭 2주 내 리뷰 50+건 확보" },
    { role: "전담 AM", name: "Jenna", strength: "트렌드 분석·콘텐츠 기획", result: "월 28,000건 어필리에이트 제안 발송" },
    { role: "전담 AM", name: "Elena", strength: "퍼포먼스 광고 세팅·최적화", result: "브랜드C 캠페인 일 주문 500건 달성" },
    { role: "전담 AM", name: "Rin", strength: "글로벌 크리에이터 소싱·관리", result: "북미 크리에이터 풀 500명+ 구축·운영" },
  ];

  return (
    <Section id="team" bg="bg-white">
      <Badge>Team</Badge>
      <Title>전담은 1명, 역량은 팀 전체</Title>
      <Sub>브랜드별 전담 AM이 1:1로 책임지고, 팀장과 팀 전체가 함께 백업합니다. 전 구성원이 해외 경험을 갖춰 글로벌 크리에이터 협업을 직접 수행합니다.</Sub>

      <div className="rounded-2xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-black text-white">
              <th className="px-5 py-4 text-left font-semibold">역할</th>
              <th className="px-5 py-4 text-left font-semibold">이름</th>
              <th className="px-5 py-4 text-left font-semibold hidden md:table-cell">핵심 강점</th>
              <th className="px-5 py-4 text-left font-semibold hidden lg:table-cell">주요 실적</th>
            </tr>
          </thead>
          <tbody>
            {members.map((m, i) => (
              <tr key={m.name} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <td className="px-5 py-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                      m.role === "팀장" ? "text-black" : "bg-gray-100 text-gray-600"
                    }`}
                    style={m.role === "팀장" ? { backgroundColor: ORANGE } : {}}
                  >
                    {m.role}
                  </span>
                </td>
                <td className="px-5 py-4 font-bold text-black">{m.name}</td>
                <td className="px-5 py-4 text-gray-500 hidden md:table-cell">{m.strength}</td>
                <td className="px-5 py-4 text-gray-700 font-medium hidden lg:table-cell">{m.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

// ─── CONTACT ─────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <Section id="contact" bg="bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <Badge>Next Step</Badge>
        <Title>
          브랜드 맞춤 시뮬레이션을
          <br />
          무료로 받아보세요
        </Title>
        <p className="mt-3 mb-10 text-gray-500 text-lg leading-relaxed">
          30분 무료 진단 미팅에서 브랜드에 맞는 성장 로드맵과 예상 프로젝션을 제공합니다.
          1개월 세팅 → 6개월 성장 파트너십으로 함께합니다.
        </p>

        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 mb-8">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: "📞", label: "Phone", value: "010.3027.0750" },
              { icon: "📧", label: "Email", value: "hyuny@cosduck.com" },
              { icon: "👤", label: "담당자", value: "임 현 | 코스덕 총괄" },
            ].map((c) => (
              <div key={c.label}>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl mx-auto mb-3"
                  style={{ backgroundColor: `${BLUE}18` }}
                >
                  {c.icon}
                </div>
                <div className="text-xs text-gray-400 mb-1">{c.label}</div>
                <div className="font-semibold text-gray-900 text-sm">{c.value}</div>
              </div>
            ))}
          </div>
        </div>

        <a
          href="mailto:hyuny@cosduck.com"
          className="inline-flex items-center justify-center px-10 py-5 text-black font-black text-lg rounded-full transition-opacity hover:opacity-85"
          style={{ backgroundColor: ORANGE }}
        >
          무료 진단 미팅 신청하기 →
        </a>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-5 text-sm text-gray-400">
          <span>✅ 무료 진단 미팅 (30분)</span>
          <span>✅ 브랜드 맞춤 시뮬레이션 제공</span>
          <span>✅ 1개월 세팅 → 6개월 파트너십</span>
        </div>
      </div>
    </Section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <CosduckLogo />
        <p className="text-gray-400 text-sm">Copyright © Cosduck. All rights reserved.</p>
      </div>
    </footer>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhyNow />
        <Problem />
        <Solution />
        <CoreAdvantages />
        <TrackRecord />
        <Services />
        <Pricing />
        <Roadmap />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
