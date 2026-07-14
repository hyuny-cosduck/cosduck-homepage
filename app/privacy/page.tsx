import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보처리방침 | Cosduck",
};

export default function PrivacyPage() {
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
        <h1 className="text-3xl font-black mb-2">개인정보처리방침</h1>
        <p className="text-gray-400 text-sm mb-10">최종 수정일: 2026년 7월 14일</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-black mb-3">1. 개인정보 수집 목적 및 항목</h2>
            <p>(주)마야크루(이하 "회사")는 다음과 같은 목적으로 개인정보를 수집합니다.</p>
            <table className="w-full text-sm mt-3 border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200">수집 목적</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200">수집 항목</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3">서비스 문의 및 상담</td>
                  <td className="px-4 py-3">이름, 이메일, 회사명, 문의 내용</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3">서비스 계약 및 운영</td>
                  <td className="px-4 py-3">담당자 정보, 사업자 정보</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">서비스 개선</td>
                  <td className="px-4 py-3">서비스 이용 기록, 접속 로그</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-3">2. 개인정보 보유 및 이용 기간</h2>
            <p>
              수집한 개인정보는 이용 목적이 달성된 후 즉시 파기하는 것을 원칙으로 합니다.
              단, 관련 법령에 따라 일정 기간 보존이 필요한 경우 해당 기간 동안 보관합니다.
            </p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>계약 또는 청약 철회 등에 관한 기록: 5년 (전자상거래법)</li>
              <li>소비자 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래법)</li>
              <li>서비스 이용 기록: 3개월 (통신비밀보호법)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-3">3. 개인정보 제3자 제공</h2>
            <p>
              회사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다.
              다만, 이용자의 동의가 있거나 법령에 의한 경우는 예외로 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-3">4. 개인정보 처리 위탁</h2>
            <p>회사는 서비스 제공을 위해 아래와 같이 개인정보 처리 업무를 위탁할 수 있습니다.</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>클라우드 서버 운영 (Vercel, Inc.)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-3">5. 이용자의 권리</h2>
            <p>이용자는 언제든지 다음 권리를 행사할 수 있습니다.</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>개인정보 열람 요구</li>
              <li>개인정보 정정·삭제 요구</li>
              <li>개인정보 처리 정지 요구</li>
            </ul>
            <p className="mt-2">권리 행사는 이메일(hyuny@cosduck.com)로 요청하실 수 있습니다.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-3">6. 개인정보 보호 책임자</h2>
            <ul className="space-y-1">
              <li>책임자: 오준호 (대표이사)</li>
              <li>이메일: hyuny@cosduck.com</li>
              <li>주소: 서울특별시 마포구 와우산로 121, 3층(서교동)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-3">7. 개인정보 처리방침 변경</h2>
            <p>
              본 방침은 법령·정책 변경에 따라 수정될 수 있습니다.
              변경 시 웹사이트 공지를 통해 사전 안내드립니다.
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
