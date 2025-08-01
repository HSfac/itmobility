import { Shield, Calendar, AlertTriangle } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* 페이지 헤더 */}
      <section className="bg-gradient-to-r from-accent to-accent-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              개인정보처리방침
            </h1>
            <p className="text-xl text-accent-100 max-w-2xl mx-auto">
              SmartMobility Hub 개인정보처리방침
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 시행일 */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-blue-600" />
            <span className="font-medium text-blue-800">시행일: 2024년 1월 1일</span>
          </div>
        </div>

        {/* 법적 고지 */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
          <div className="flex items-start space-x-2">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
            <div className="text-yellow-800 text-sm">
              <p className="font-medium mb-1">법적 고지</p>
              <p>
                본 개인정보처리방침은 샘플 버전입니다. 실제 서비스 운영 시에는 개인정보보호 전문가의 검토를 거쳐 
                정식 방침이 작성되어야 합니다.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="prose max-w-none">
            <h2 className="text-xl font-bold text-text mb-4">1. 개인정보 수집·이용 목적</h2>
            <p className="text-muted mb-2">회사는 다음의 목적을 위하여 개인정보를 처리합니다:</p>
            <ul className="list-disc list-inside text-muted space-y-2 mb-6">
              <li>회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리</li>
              <li>스마트락커 및 공유모빌리티 서비스 제공, 예약 및 결제 처리</li>
              <li>민원사무 처리, 고객 상담 및 고객 불만 처리</li>
              <li>서비스 개선을 위한 통계 분석 및 마케팅 활용</li>
              <li>법령 및 회사약관을 위반하는 회원에 대한 이용 제한 조치, 부정 이용 행위를 포함하여 서비스의 원활한 운영에 지장을 주는 행위에 대한 방지 및 제재</li>
            </ul>

            <h2 className="text-xl font-bold text-text mb-4">2. 수집하는 개인정보 항목</h2>
            <div className="mb-6">
              <h3 className="text-lg font-medium text-text mb-2">가. 회원가입 시</h3>
              <ul className="list-disc list-inside text-muted space-y-1 mb-4">
                <li>필수항목: 이름, 이메일, 비밀번호, 휴대전화번호</li>
                <li>선택항목: 생년월일, 성별</li>
              </ul>

              <h3 className="text-lg font-medium text-text mb-2">나. 서비스 이용 시</h3>
              <ul className="list-disc list-inside text-muted space-y-1 mb-4">
                <li>결제정보: 카드번호, 유효기간, CVC, 카드소유자명</li>
                <li>이용기록: 서비스 이용시간, 위치정보, 기기정보</li>
                <li>자동 수집 정보: IP주소, 쿠키, 접속 로그, 기기 고유번호</li>
              </ul>
            </div>

            <h2 className="text-xl font-bold text-text mb-4">3. 개인정보의 처리 및 보유기간</h2>
            <p className="text-muted mb-2">회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다:</p>
            <ul className="list-disc list-inside text-muted space-y-2 mb-6">
              <li>회원 정보: 회원 탈퇴 시까지 (단, 관계 법령에 따라 보존이 필요한 경우 해당 기간까지)</li>
              <li>서비스 이용기록: 3년</li>
              <li>결제 관련 정보: 5년 (전자상거래법)</li>
              <li>소비자 불만 처리기록: 3년 (전자상거래법)</li>
            </ul>

            <h2 className="text-xl font-bold text-text mb-4">4. 개인정보 제3자 제공</h2>
            <p className="text-muted mb-2">회사는 원칙적으로 정보주체의 개인정보를 수집·이용 목적으로 명시한 범위 내에서 처리하며, 다음의 경우에만 제3자에게 제공합니다:</p>
            <ul className="list-disc list-inside text-muted space-y-2 mb-6">
              <li>정보주체로부터 별도의 동의를 받은 경우</li>
              <li>법률에 특별한 규정이 있는 경우</li>
              <li>정보주체 또는 법정대리인이 의사표시를 할 수 없는 상태에 있거나 주소불명 등으로 사전 동의를 받을 수 없는 경우로서 명백히 정보주체 또는 제3자의 급박한 생명, 신체, 재산의 이익을 위하여 필요하다고 인정되는 경우</li>
            </ul>

            <h2 className="text-xl font-bold text-text mb-4">5. 개인정보처리 위탁</h2>
            <p className="text-muted mb-2">회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다:</p>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 border-b text-left font-medium text-text">위탁받는 자</th>
                    <th className="px-4 py-2 border-b text-left font-medium text-text">위탁하는 업무</th>
                    <th className="px-4 py-2 border-b text-left font-medium text-text">보유기간</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b text-muted">○○결제대행업체</td>
                    <td className="px-4 py-2 border-b text-muted">결제처리 및 결제정보 관리</td>
                    <td className="px-4 py-2 border-b text-muted">위탁계약 종료시까지</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b text-muted">○○클라우드서비스</td>
                    <td className="px-4 py-2 border-b text-muted">서버 호스팅 및 데이터 관리</td>
                    <td className="px-4 py-2 border-b text-muted">위탁계약 종료시까지</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-xl font-bold text-text mb-4">6. 정보주체의 권리·의무 및 행사방법</h2>
            <p className="text-muted mb-2">정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다:</p>
            <ul className="list-disc list-inside text-muted space-y-2 mb-6">
              <li>개인정보 처리현황 통지요구</li>
              <li>개인정보 처리정지 요구</li>
              <li>개인정보의 정정·삭제 요구</li>
              <li>개인정보 처리정지 요구</li>
            </ul>

            <h2 className="text-xl font-bold text-text mb-4">7. 개인정보의 안전성 확보조치</h2>
            <p className="text-muted mb-2">회사는 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다:</p>
            <ul className="list-disc list-inside text-muted space-y-2 mb-6">
              <li>개인정보 취급 직원의 최소화 및 교육</li>
              <li>개인정보에 대한 접근 제한</li>
              <li>개인정보를 안전하게 저장·전송할 수 있는 암호화 기법 사용</li>
              <li>해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위한 보안프로그램 설치</li>
              <li>개인정보처리시스템 등의 접근권한 관리</li>
              <li>접속기록의 보관 및 위변조 방지</li>
            </ul>

            <h2 className="text-xl font-bold text-text mb-4">8. 개인정보 보호책임자</h2>
            <div className="mb-6">
              <p className="text-muted mb-4">회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다:</p>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium text-text mb-2">개인정보 보호책임자</p>
                <ul className="text-muted text-sm space-y-1">
                  <li>성명: 개인정보보호담당자</li>
                  <li>직책: 개인정보보호팀장</li>
                  <li>연락처: privacy@smartmobilityhub.com</li>
                  <li>전화: 1588-1234</li>
                </ul>
              </div>
            </div>

            <h2 className="text-xl font-bold text-text mb-4">9. 권익침해 구제방법</h2>
            <p className="text-muted mb-2">정보주체는 아래의 기관에 대해 개인정보 침해신고를 할 수 있습니다:</p>
            <ul className="list-disc list-inside text-muted space-y-2 mb-6">
              <li>개인정보보호위원회 (privacy.go.kr / 국번없이 182)</li>
              <li>개인정보 침해신고센터 (privacy.korea.kr / 국번없이 182)</li>
              <li>대검찰청 사이버범죄수사단 (www.spo.go.kr / 02-3480-3573)</li>
              <li>경찰청 사이버수사국 (ecrm.cyber.go.kr / 국번없이 182)</li>
            </ul>

            <h2 className="text-xl font-bold text-text mb-4">10. 개인정보 처리방침 변경</h2>
            <p className="text-muted mb-6">
              이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
            </p>

            <div className="border-t pt-6 mt-8">
              <p className="text-sm text-muted">
                <strong>부칙</strong><br />
                이 방침은 2024년 1월 1일부터 적용됩니다.
              </p>
            </div>
          </div>
        </div>

        {/* 문의 안내 */}
        <div className="mt-8 bg-gray-50 rounded-lg p-6 text-center">
          <h3 className="font-bold text-text mb-2">개인정보보호에 대한 문의</h3>
          <p className="text-muted text-sm mb-4">
            개인정보 처리에 대해 궁금한 점이 있으시면 개인정보보호담당자에게 연락주세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:privacy@smartmobilityhub.com"
              className="bg-accent hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              이메일 문의
            </a>
            <a
              href="tel:1588-1234"
              className="border border-gray-300 text-muted hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              전화 상담: 1588-1234
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}