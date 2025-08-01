import { BookOpen, Lock, Car, Smartphone, CreditCard, MapPin, Shield } from "lucide-react";

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* 페이지 헤더 */}
      <section className="bg-gradient-to-r from-primary to-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BookOpen className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              이용 가이드
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              SmartMobility Hub를 처음 이용하시나요? 
              단계별 가이드를 통해 쉽게 시작하세요
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 시작하기 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-text mb-8 text-center">시작하기</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 p-6 rounded-full w-fit mx-auto mb-4">
                <Smartphone className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text mb-2">1. 회원가입</h3>
              <p className="text-muted">
                웹사이트 또는 모바일 앱에서 간편하게 회원가입하세요
              </p>
            </div>

            <div className="text-center">
              <div className="bg-secondary-100 p-6 rounded-full w-fit mx-auto mb-4">
                <CreditCard className="h-12 w-12 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-text mb-2">2. 결제수단 등록</h3>
              <p className="text-muted">
                신용카드나 간편결제를 등록하여 빠른 이용이 가능합니다
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent-100 p-6 rounded-full w-fit mx-auto mb-4">
                <MapPin className="h-12 w-12 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-text mb-2">3. 서비스 이용</h3>
              <p className="text-muted">
                원하는 서비스를 선택하고 바로 이용을 시작하세요
              </p>
            </div>
          </div>
        </section>

        {/* 스마트락커 이용 가이드 */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="bg-primary-100 p-3 rounded-lg mr-4">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-text">스마트락커 이용 가이드</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-text mb-4">📍 락커 찾기 및 예약</h3>
                <ol className="space-y-3 text-muted">
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                    <span>웹사이트나 앱에서 &apos;스마트락커&apos; 메뉴를 선택하세요</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                    <span>지도에서 원하는 위치의 락커를 확인하세요</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                    <span>락커 크기(소형/중형/대형)를 선택하세요</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                    <span>이용 시간을 설정하고 결제를 완료하세요</span>
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="text-lg font-bold text-text mb-4">🔓 락커 이용</h3>
                <ol className="space-y-3 text-muted">
                  <li className="flex items-start">
                    <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                    <span>예약한 락커 위치로 이동하세요</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                    <span>락커의 QR코드를 앱으로 스캔하세요</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                    <span>락커가 자동으로 열리면 물품을 보관하세요</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                    <span>문을 닫으면 자동으로 잠금됩니다</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* 락커 요금 정보 */}
            <div className="mt-8 p-6 bg-primary-50 rounded-lg">
              <h3 className="font-bold text-text mb-4">💰 요금 정보</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="font-bold text-primary">소형 락커</div>
                  <div className="text-sm text-muted">30×30×40cm</div>
                  <div className="text-lg font-bold text-text">1,000원/시간</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-primary">중형 락커</div>
                  <div className="text-sm text-muted">40×40×50cm</div>
                  <div className="text-lg font-bold text-text">1,500원/시간</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-primary">대형 락커</div>
                  <div className="text-sm text-muted">50×50×60cm</div>
                  <div className="text-lg font-bold text-text">2,000원/시간</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 공유모빌리티 이용 가이드 */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="bg-secondary-100 p-3 rounded-lg mr-4">
                <Car className="h-8 w-8 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-text">공유모빌리티 이용 가이드</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-text mb-4">🚴‍♂️ 모빌리티 찾기</h3>
                <ol className="space-y-3 text-muted">
                  <li className="flex items-start">
                    <span className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                    <span>&apos;공유모빌리티&apos; 메뉴에서 지도를 확인하세요</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                    <span>가까운 자전거, 킥보드, 전동휠을 찾으세요</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                    <span>배터리 잔량과 상태를 확인하세요</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                    <span>예약 또는 바로 이용을 선택하세요</span>
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="text-lg font-bold text-text mb-4">🛴 이용 및 반납</h3>
                <ol className="space-y-3 text-muted">
                  <li className="flex items-start">
                    <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                    <span>모빌리티의 QR코드를 스캔하여 잠금 해제</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                    <span>헬멧을 착용하고 안전하게 이용하세요</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                    <span>지정된 반납 구역에서 이용을 종료하세요</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                    <span>앱에서 반납을 완료하고 요금을 확인하세요</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* 모빌리티 요금 정보 */}
            <div className="mt-8 p-6 bg-secondary-50 rounded-lg">
              <h3 className="font-bold text-text mb-4">💰 요금 정보</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="font-bold text-secondary">자전거</div>
                  <div className="text-sm text-muted">기본 30분</div>
                  <div className="text-lg font-bold text-text">1,000원</div>
                  <div className="text-xs text-muted">+15분마다 500원</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-secondary">전동킥보드</div>
                  <div className="text-sm text-muted">기본 30분</div>
                  <div className="text-lg font-bold text-text">1,500원</div>
                  <div className="text-xs text-muted">+15분마다 700원</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-secondary">전동휠</div>
                  <div className="text-sm text-muted">기본 30분</div>
                  <div className="text-lg font-bold text-text">2,000원</div>
                  <div className="text-xs text-muted">+15분마다 1,000원</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 안전 수칙 */}
        <section className="mb-16">
          <div className="bg-red-50 border border-red-200 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-3 rounded-lg mr-4">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-red-800">안전 수칙</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-red-800 mb-4">⚠️ 필수 안전 수칙</h3>
                <ul className="space-y-2 text-red-700">
                  <li>• 반드시 헬멧을 착용하세요</li>
                  <li>• 2인 이상 탑승을 금지합니다</li>
                  <li>• 음주운전을 절대 금지합니다</li>
                  <li>• 교통법규를 준수하세요</li>
                  <li>• 보행자 전용도로 이용을 금지합니다</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-red-800 mb-4">🚫 금지 사항</h3>
                <ul className="space-y-2 text-red-700">
                  <li>• 위험물질 보관 금지 (락커)</li>
                  <li>• 개조 및 임의 조작 금지</li>
                  <li>• 무단 이동 및 점유 금지</li>
                  <li>• 지정 구역 외 반납 금지</li>
                  <li>• 상업적 이용 금지</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 문제 해결 */}
        <section>
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-text mb-6">❓ 자주 발생하는 문제와 해결방법</h2>
            
            <div className="space-y-6">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-bold text-text mb-2">Q. QR코드가 스캔되지 않아요</h3>
                <p className="text-muted text-sm">
                  A. 카메라 렌즈를 깨끗이 닦고, QR코드에 손상이 없는지 확인해주세요. 
                  그래도 문제가 있다면 고객센터(1588-1234)로 연락주세요.
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-bold text-text mb-2">Q. 결제가 되지 않아요</h3>
                <p className="text-muted text-sm">
                  A. 등록된 결제수단을 확인하고, 카드 한도나 잔액을 점검해주세요. 
                  마이페이지에서 결제수단을 다시 등록할 수 있습니다.
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-bold text-text mb-2">Q. 장비에 고장이 있어요</h3>
                <p className="text-muted text-sm">
                  A. 즉시 이용을 중단하고 앱의 신고 기능을 이용하거나 고객센터로 연락주세요. 
                  안전을 위해 고장난 장비는 절대 이용하지 마세요.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted mb-4">더 궁금한 점이 있으시나요?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/support/faq"
                  className="bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium text-center transition-colors"
                >
                  FAQ 보기
                </a>
                <a
                  href="/support/contact"
                  className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-medium text-center transition-colors"
                >
                  문의하기
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}