import { Car, MapPin, Clock, Navigation } from "lucide-react";

export default function MobilityPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* 페이지 헤더 */}
      <section className="bg-gradient-to-r from-secondary to-secondary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Car className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              공유 모빌리티
            </h1>
            <p className="text-xl text-secondary-100 max-w-2xl mx-auto">
              친환경적이고 편리한 이동 수단으로 스마트한 도시 생활을 경험하세요
            </p>
          </div>
        </div>
      </section>

      {/* 실시간 모빌리티 현황 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">실시간 모빌리티 현황</h2>
            <p className="text-muted">주변에서 이용 가능한 모빌리티를 확인하세요</p>
          </div>

          {/* 현황 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-accent mb-2">28</div>
              <div className="text-sm text-muted">자전거 이용가능</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-secondary mb-2">15</div>
              <div className="text-sm text-muted">킥보드 이용가능</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-primary mb-2">43</div>
              <div className="text-sm text-muted">현재 이용 중</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-text mb-2">86</div>
              <div className="text-sm text-muted">전체 모빌리티</div>
            </div>
          </div>

          {/* 모빌리티 종류별 정보 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* 자전거 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🚴‍♂️</div>
                <h3 className="text-xl font-bold text-text mb-2">공유 자전거</h3>
                <p className="text-muted text-sm">친환경 이동 수단</p>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted">기본 요금</span>
                  <span className="font-medium">30분 1,000원</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">추가 요금</span>
                  <span className="font-medium">15분마다 500원</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">이용 가능</span>
                  <span className="font-medium text-accent">28대</span>
                </div>
              </div>
              <button className="w-full bg-secondary hover:bg-secondary-600 text-white py-3 rounded-lg font-medium transition-colors">
                지도에서 찾기
              </button>
            </div>

            {/* 전동킥보드 */}
            <div className="bg-white p-8 rounded-xl shadow-md border-2 border-secondary">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🛴</div>
                <h3 className="text-xl font-bold text-text mb-2">전동킥보드</h3>
                <p className="text-muted text-sm">빠른 단거리 이동</p>
                <span className="bg-secondary text-white text-xs px-2 py-1 rounded-full">인기</span>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted">기본 요금</span>
                  <span className="font-medium">30분 1,500원</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">추가 요금</span>
                  <span className="font-medium">15분마다 700원</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">이용 가능</span>
                  <span className="font-medium text-accent">15대</span>
                </div>
              </div>
              <button className="w-full bg-secondary hover:bg-secondary-600 text-white py-3 rounded-lg font-medium transition-colors">
                지도에서 찾기
              </button>
            </div>

            {/* 전동휠 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🛞</div>
                <h3 className="text-xl font-bold text-text mb-2">전동휠</h3>
                <p className="text-muted text-sm">개성있는 이동 수단</p>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted">기본 요금</span>
                  <span className="font-medium">30분 2,000원</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">추가 요금</span>
                  <span className="font-medium">15분마다 1,000원</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">이용 가능</span>
                  <span className="font-medium text-accent">5대</span>
                </div>
              </div>
              <button className="w-full bg-secondary hover:bg-secondary-600 text-white py-3 rounded-lg font-medium transition-colors">
                지도에서 찾기
              </button>
            </div>
          </div>

          {/* 이용 방법 */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <h3 className="text-2xl font-bold text-text mb-8 text-center">이용 방법</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-secondary-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-secondary" />
                </div>
                <h4 className="font-bold text-text mb-2">1. 위치 확인</h4>
                <p className="text-sm text-muted">지도에서 주변 모빌리티를 찾으세요</p>
              </div>
              <div className="text-center">
                <div className="bg-secondary-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <Car className="h-8 w-8 text-secondary" />
                </div>
                <h4 className="font-bold text-text mb-2">2. 예약/이용</h4>
                <p className="text-sm text-muted">QR코드를 스캔하여 이용을 시작하세요</p>
              </div>
              <div className="text-center">
                <div className="bg-secondary-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <Navigation className="h-8 w-8 text-secondary" />
                </div>
                <h4 className="font-bold text-text mb-2">3. 이동</h4>
                <p className="text-sm text-muted">안전하게 목적지까지 이동하세요</p>
              </div>
              <div className="text-center">
                <div className="bg-secondary-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <Clock className="h-8 w-8 text-secondary" />
                </div>
                <h4 className="font-bold text-text mb-2">4. 반납</h4>
                <p className="text-sm text-muted">지정된 장소에서 반납을 완료하세요</p>
              </div>
            </div>
          </div>

          {/* 안전 수칙 */}
          <div className="bg-gradient-to-r from-accent-50 to-accent-100 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-text mb-6 text-center">안전 이용 수칙</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                  <p className="text-muted">헬멧 착용을 권장합니다</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                  <p className="text-muted">교통법규를 준수하세요</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                  <p className="text-muted">보행자 전용도로 이용을 금지합니다</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</div>
                  <p className="text-muted">2인 이상 탑승을 금지합니다</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">5</div>
                  <p className="text-muted">지정된 장소에만 반납하세요</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">6</div>
                  <p className="text-muted">음주운전을 절대 금지합니다</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}