import { User, History, CreditCard, Settings, Lock, Car } from "lucide-react";

export default function MyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* 페이지 헤더 */}
      <section className="bg-gradient-to-r from-accent to-accent-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <User className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              마이페이지
            </h1>
            <p className="text-xl text-accent-100 max-w-2xl mx-auto">
              이용 내역과 설정을 관리하고 더 나은 서비스를 경험하세요
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 사이드바 메뉴 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="bg-accent-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <User className="h-12 w-12 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-text">홍길동님</h3>
                <p className="text-muted text-sm">gold@smartmobility.com</p>
                <span className="bg-accent text-white text-xs px-3 py-1 rounded-full">골드 멤버</span>
              </div>
              
              <nav className="space-y-2">
                <a href="#profile" className="flex items-center space-x-3 p-3 rounded-lg bg-accent-50 text-accent">
                  <User className="h-5 w-5" />
                  <span>프로필 관리</span>
                </a>
                <a href="#history" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 text-muted hover:text-text transition-colors">
                  <History className="h-5 w-5" />
                  <span>이용 내역</span>
                </a>
                <a href="#payment" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 text-muted hover:text-text transition-colors">
                  <CreditCard className="h-5 w-5" />
                  <span>결제 관리</span>
                </a>
                <a href="#settings" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 text-muted hover:text-text transition-colors">
                  <Settings className="h-5 w-5" />
                  <span>설정</span>
                </a>
              </nav>
            </div>
          </div>

          {/* 메인 콘텐츠 */}
          <div className="lg:col-span-2 space-y-8">
            {/* 이용 현황 요약 */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-text mb-6">이번 달 이용 현황</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <Lock className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary mb-1">12</div>
                  <div className="text-sm text-muted">락커 이용</div>
                </div>
                <div className="text-center p-4 bg-secondary-50 rounded-lg">
                  <Car className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-secondary mb-1">8</div>
                  <div className="text-sm text-muted">모빌리티 이용</div>
                </div>
                <div className="text-center p-4 bg-accent-50 rounded-lg">
                  <CreditCard className="h-8 w-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-accent mb-1">32,500원</div>
                  <div className="text-sm text-muted">총 이용 금액</div>
                </div>
              </div>
            </div>

            {/* 최근 이용 내역 */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-text">최근 이용 내역</h3>
                <button className="text-accent hover:text-accent-600 text-sm font-medium">
                  전체 보기
                </button>
              </div>
              
              <div className="space-y-4">
                {/* 이용 내역 아이템 */}
                <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                  <div className="bg-primary-100 p-2 rounded-lg">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-text">강남역 스마트락커 중형</div>
                    <div className="text-sm text-muted">2024.01.15 14:30 ~ 16:00 (1시간 30분)</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-text">2,250원</div>
                    <div className="text-sm text-accent">완료</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                  <div className="bg-secondary-100 p-2 rounded-lg">
                    <Car className="h-5 w-5 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-text">전동킥보드 #KB0234</div>
                    <div className="text-sm text-muted">2024.01.14 09:15 ~ 09:45 (30분)</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-text">1,500원</div>
                    <div className="text-sm text-accent">완료</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                  <div className="bg-secondary-100 p-2 rounded-lg">
                    <Car className="h-5 w-5 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-text">공유자전거 #BC0156</div>
                    <div className="text-sm text-muted">2024.01.13 18:20 ~ 19:10 (50분)</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-text">1,500원</div>
                    <div className="text-sm text-accent">완료</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 멤버십 정보 */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-text mb-6">멤버십 정보</h3>
              <div className="bg-gradient-to-r from-accent to-accent-600 text-white p-6 rounded-xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-2xl font-bold mb-1">골드 멤버</div>
                    <div className="text-accent-100">2024.12.31까지 유효</div>
                  </div>
                  <div className="text-right">
                    <div className="text-accent-100 text-sm">누적 포인트</div>
                    <div className="text-2xl font-bold">2,450P</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>락커 할인</span>
                    <span>20% 할인</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>모빌리티 할인</span>
                    <span>15% 할인</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>무료 이용</span>
                    <span>월 3회</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 결제 방법 */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-text">등록된 결제 방법</h3>
                <button className="bg-accent hover:bg-accent-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  + 추가
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <CreditCard className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-text">신한카드 **** 1234</div>
                    <div className="text-sm text-muted">기본 결제 수단</div>
                  </div>
                  <button className="text-muted hover:text-text text-sm">관리</button>
                </div>

                <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <div className="h-5 w-5 bg-green-600 rounded text-white text-xs flex items-center justify-center">K</div>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-text">카카오페이</div>
                    <div className="text-sm text-muted">간편결제</div>
                  </div>
                  <button className="text-muted hover:text-text text-sm">관리</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}