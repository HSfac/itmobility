import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      
      {/* 추가 서비스 소개 섹션 */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              혁신적인 스마트 서비스
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              첨단 기술과 사용자 중심 디자인으로 만든 
              차세대 도시 생활 솔루션을 만나보세요
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 스마트락커 소개 */}
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-text mb-4">
                🔐 스마트락커 시스템
              </h3>
              <p className="text-muted mb-6">
                QR코드와 모바일 앱을 통한 간편한 보관함 이용 서비스입니다. 
                안전한 개인 물품 보관과 24시간 접근이 가능합니다.
              </p>
              <ul className="space-y-2 text-muted">
                <li>✅ 24시간 언제든지 이용 가능</li>
                <li>✅ QR코드로 간편한 잠금/해제</li>
                <li>✅ 다양한 크기의 보관함 선택</li>
                <li>✅ 실시간 사용 현황 확인</li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-xl">
              <div className="text-center">
                <div className="text-6xl mb-4">🔐</div>
                <div className="text-primary font-bold text-lg">스마트락커</div>
              </div>
            </div>

            {/* 공유모빌리티 소개 */}
            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-8 rounded-xl">
              <div className="text-center">
                <div className="text-6xl mb-4">🚴‍♂️</div>
                <div className="text-secondary font-bold text-lg">공유모빌리티</div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-text mb-4">
                🚴‍♂️ 공유 모빌리티
              </h3>
              <p className="text-muted mb-6">
                자전거, 전동킥보드 등 다양한 친환경 이동 수단을 
                필요할 때 언제든 이용할 수 있는 서비스입니다.
              </p>
              <ul className="space-y-2 text-muted">
                <li>✅ 친환경 이동 수단</li>
                <li>✅ 실시간 위치 및 상태 확인</li>
                <li>✅ 간편한 예약 및 결제</li>
                <li>✅ 안전한 반납 시스템</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
