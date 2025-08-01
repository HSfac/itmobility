import { FileText, Calendar, AlertTriangle } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* 페이지 헤더 */}
      <section className="bg-gradient-to-r from-text to-gray-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FileText className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              이용약관
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              SmartMobility Hub 서비스 이용약관
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
                본 약관은 샘플 버전입니다. 실제 서비스 운영 시에는 법무 전문가의 검토를 거쳐 
                정식 약관이 작성되어야 합니다.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="prose max-w-none">
            <h2 className="text-xl font-bold text-text mb-4">제1조 (목적)</h2>
            <p className="text-muted mb-6">
              이 약관은 ㈜스마트모빌리티허브(이하 "회사")가 제공하는 스마트락커 및 공유모빌리티 서비스(이하 "서비스")의 
              이용조건 및 절차, 회사와 이용자 간의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.
            </p>

            <h2 className="text-xl font-bold text-text mb-4">제2조 (정의)</h2>
            <p className="text-muted mb-2">이 약관에서 사용하는 용어의 정의는 다음과 같습니다:</p>
            <ol className="list-decimal list-inside text-muted space-y-2 mb-6">
              <li>"서비스"라 함은 회사가 제공하는 스마트락커 및 공유모빌리티 서비스를 의미합니다.</li>
              <li>"이용자"라 함은 회사의 서비스에 접속하여 이 약관에 따라 서비스를 이용하는 회원 및 비회원을 의미합니다.</li>
              <li>"회원"이라 함은 회사에 개인정보를 제공하여 회원등록을 한 자로서, 회사의 정보를 지속적으로 제공받으며, 회사가 제공하는 서비스를 계속적으로 이용할 수 있는 자를 의미합니다.</li>
              <li>"스마트락커"라 함은 QR코드 등 전자적 방식으로 개폐가 가능한 보관함 서비스를 의미합니다.</li>
              <li>"공유모빌리티"라 함은 자전거, 전동킥보드, 전동휠 등의 이동수단 공유 서비스를 의미합니다.</li>
            </ol>

            <h2 className="text-xl font-bold text-text mb-4">제3조 (약관의 효력 및 변경)</h2>
            <ol className="list-decimal list-inside text-muted space-y-2 mb-6">
              <li>이 약관은 서비스를 이용하고자 하는 모든 이용자에 대하여 그 효력을 발생합니다.</li>
              <li>회사는 관련법령을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.</li>
              <li>약관이 개정되는 경우 회사는 개정된 약관의 적용일자 및 개정사유를 명시하여 현행약관과 함께 적용일자 7일 이전부터 공지합니다.</li>
            </ol>

            <h2 className="text-xl font-bold text-text mb-4">제4조 (회원가입)</h2>
            <ol className="list-decimal list-inside text-muted space-y-2 mb-6">
              <li>이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로써 회원가입을 신청합니다.</li>
              <li>회사는 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.</li>
              <li>가입신청자가 이 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우</li>
              <li>등록 내용에 허위, 기재누락, 오기가 있는 경우</li>
              <li>기타 회원으로 등록하는 것이 회사의 기술상 현저히 지장이 있다고 판단되는 경우</li>
            </ol>

            <h2 className="text-xl font-bold text-text mb-4">제5조 (서비스의 제공)</h2>
            <ol className="list-decimal list-inside text-muted space-y-2 mb-6">
              <li>회사가 제공하는 서비스는 다음과 같습니다:
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>스마트락커 예약 및 이용 서비스</li>
                  <li>공유모빌리티(자전거, 전동킥보드, 전동휠) 대여 서비스</li>
                  <li>기타 회사가 추가 개발하거나 다른 회사와의 제휴계약 등을 통해 회원에게 제공하는 일체의 서비스</li>
                </ul>
              </li>
              <li>회사는 서비스를 일정범위로 분할하여 각 범위별로 이용가능시간을 별도로 지정할 수 있습니다.</li>
            </ol>

            <h2 className="text-xl font-bold text-text mb-4">제6조 (서비스 이용요금)</h2>
            <ol className="list-decimal list-inside text-muted space-y-2 mb-6">
              <li>회사가 제공하는 서비스는 기본적으로 유료입니다.</li>
              <li>서비스 이용요금은 회사 홈페이지에 게시하거나 별도로 공지하는 바에 따릅니다.</li>
              <li>이용요금의 결제는 신용카드, 직불카드, 간편결제 등 회사가 제공하는 결제수단을 이용할 수 있습니다.</li>
            </ol>

            <h2 className="text-xl font-bold text-text mb-4">제7조 (이용자의 의무)</h2>
            <ol className="list-decimal list-inside text-muted space-y-2 mb-6">
              <li>이용자는 다음 행위를 하여서는 안 됩니다:
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>신청 또는 변경 시 허위내용의 등록</li>
                  <li>타인의 정보 도용</li>
                  <li>회사가 게시한 정보의 변경</li>
                  <li>회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</li>
                  <li>회사 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
                  <li>회사 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
                  <li>외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 서비스에 공개 또는 게시하는 행위</li>
                </ul>
              </li>
            </ol>

            <h2 className="text-xl font-bold text-text mb-4">제8조 (서비스 이용제한)</h2>
            <ol className="list-decimal list-inside text-muted space-y-2 mb-6">
              <li>회사는 이용자가 이 약관의 의무를 위반하거나 서비스의 정상적인 운영을 방해한 경우, 경고, 일시정지, 영구이용정지 등으로 서비스 이용을 단계적으로 제한할 수 있습니다.</li>
              <li>회사는 전항에도 불구하고, 주민등록법을 위반한 명의도용 및 결제도용, 전화번호 도용, 저작권법 및 컴퓨터프로그램보호법을 위반한 불법프로그램의 제공 및 운영방해, 정보통신망법을 위반한 불법통신 및 해킹, 악성프로그램의 배포, 접속권한 초과행위 등과 같이 관련법을 위반한 경우에는 즉시 영구이용정지를 할 수 있습니다.</li>
            </ol>

            <h2 className="text-xl font-bold text-text mb-4">제9조 (손해배상)</h2>
            <ol className="list-decimal list-inside text-muted space-y-2 mb-6">
              <li>회사는 무료로 제공되는 서비스와 관련하여 회원에게 어떠한 손해가 발생하더라도 동 손해가 회사의 고의 또는 중대한 과실에 의한 경우를 제외하고 이에 대하여 책임을 부담하지 아니합니다.</li>
              <li>회사가 제공하는 서비스로 인하여 회원에게 손해가 발생한 경우, 회사의 고의 또는 과실에 의한 경우에 한하여 손해를 배상합니다.</li>
            </ol>

            <h2 className="text-xl font-bold text-text mb-4">제10조 (면책조항)</h2>
            <ol className="list-decimal list-inside text-muted space-y-2 mb-6">
              <li>회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</li>
              <li>회사는 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.</li>
              <li>회사는 회원이 서비스를 이용하여 기대하는 수익을 상실한 것에 대하여 책임을 지지 않으며, 그 밖에 서비스를 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않습니다.</li>
            </ol>

            <h2 className="text-xl font-bold text-text mb-4">제11조 (관할법원)</h2>
            <p className="text-muted mb-6">
              서비스 이용으로 발생한 분쟁에 대해 소송이 제기되는 경우 회사의 본사 소재지를 관할하는 법원을 관할 법원으로 합니다.
            </p>

            <div className="border-t pt-6 mt-8">
              <p className="text-sm text-muted">
                <strong>부칙</strong><br />
                이 약관은 2024년 1월 1일부터 적용됩니다.
              </p>
            </div>
          </div>
        </div>

        {/* 문의 안내 */}
        <div className="mt-8 bg-gray-50 rounded-lg p-6 text-center">
          <h3 className="font-bold text-text mb-2">약관에 대한 문의</h3>
          <p className="text-muted text-sm mb-4">
            이용약관에 대해 궁금한 점이 있으시면 고객센터로 연락주세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/support/contact"
              className="bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              문의하기
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