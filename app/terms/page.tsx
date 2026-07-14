import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "이용약관 | Cosduck",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav bar */}
      <nav className="border-b border-gray-100 px-6 py-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-sm text-gray-500 hover:text-black transition-colors">
            ← 홈으로
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-black mb-2">이용약관</h1>
        <p className="text-gray-400 text-sm mb-10">최종 수정일: 2026년 7월 14일</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-black mb-3">제1조 (목적)</h2>
            <p>
              이 약관은 (주)마야크루(이하 "회사")가 운영하는 코스덕(Cosduck) 서비스(이하 "서비스")의
              이용 조건 및 절차, 회사와 이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-3">제2조 (정의)</h2>
            <p>이 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>"서비스"란 회사가 제공하는 TikTok Shop 운영 대행 및 관련 마케팅 서비스를 의미합니다.</li>
              <li>"이용자"란 본 약관에 따라 서비스를 이용하는 기업 및 개인을 의미합니다.</li>
              <li>"콘텐츠"란 서비스 이용과 관련하여 생성·제공되는 텍스트, 이미지, 영상 등 일체를 의미합니다.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-3">제3조 (약관의 효력 및 변경)</h2>
            <p>
              본 약관은 서비스를 이용하고자 하는 자에게 공시함으로써 효력이 발생합니다.
              회사는 필요한 경우 약관을 변경할 수 있으며, 변경된 약관은 서비스 내 공지를 통해 고지합니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-3">제4조 (서비스 제공)</h2>
            <p>회사는 다음 서비스를 제공합니다.</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>TikTok Shop 운영 대행 (상품 리스팅, 리뷰 관리, FBT 처리, CS 대응)</li>
              <li>크리에이터 소싱 및 어필리에이트 마케팅</li>
              <li>틱톡 광고(GMV Max 등) 운영 및 최적화</li>
              <li>성과 분석 및 대시보드 제공</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-3">제5조 (이용자의 의무)</h2>
            <p>이용자는 다음 행위를 해서는 안 됩니다.</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>허위 정보 제공 및 타인의 정보 도용</li>
              <li>서비스 운영을 방해하는 일체의 행위</li>
              <li>회사의 지식재산권 침해</li>
              <li>관련 법령 위반 행위</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-3">제6조 (책임 제한)</h2>
            <p>
              회사는 천재지변, TikTok 플랫폼 정책 변경 등 불가항력적 사유로 인한 서비스 제공 불능에 대해
              책임을 지지 않습니다. 또한 서비스 이용으로 인해 발생한 간접적·결과적 손해에 대해 책임을
              지지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-3">제7조 (준거법 및 관할)</h2>
            <p>
              본 약관은 대한민국 법률에 따라 해석되며, 서비스와 관련한 분쟁은 서울중앙지방법원을
              전속 관할로 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-3">제8조 (문의)</h2>
            <p>
              이용약관에 관한 문의사항은 아래로 연락 주시기 바랍니다.
              <br />이메일: hyuny@cosduck.com
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-gray-100 py-6 mt-10">
        <div className="max-w-3xl mx-auto px-6 text-xs text-gray-400">
          (주)마야크루 | 대표: 오준호 | 사업자등록번호: 875-81-00475 | 서울특별시 마포구 와우산로 121, 3층
        </div>
      </footer>
    </div>
  );
}
