import { Lock, MapPin, Clock, CreditCard } from "lucide-react";

export default function LockerPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* 페이지 헤더 */}
      <section className="bg-gradient-to-r from-primary to-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Lock className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              스마트락커 서비스
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              24시간 언제든지 안전하고 편리하게 이용할 수 있는 스마트 보관함 서비스
            </p>
          </div>
        </div>
      </section>

      {/* 실시간 락커 현황 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">실시간 락커 현황</h2>
            <p className="text-muted">현재 이용 가능한 락커를 확인하세요</p>
          </div>

          {/* 현황 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-accent mb-2">142</div>
              <div className="text-sm text-muted">사용 가능</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-primary mb-2">58</div>
              <div className="text-sm text-muted">사용 중</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-secondary mb-2">8</div>
              <div className="text-sm text-muted">점검 중</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-text mb-2">208</div>
              <div className="text-sm text-muted">전체 락커</div>
            </div>
          </div>

          {/* 락커 크기별 요금 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-center mb-6">
                <div className="bg-primary-100 p-4 rounded-lg w-fit mx-auto mb-4">
                  <Lock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text mb-2">소형 락커</h3>
                <p className="text-muted text-sm">30cm × 30cm × 40cm</p>
              </div>
              <div className="text-center mb-6">
                <div className="text-2xl font-bold text-primary mb-1">1,000원</div>
                <div className="text-sm text-muted">시간당</div>
              </div>
              <button className="w-full bg-primary hover:bg-primary-600 text-white py-3 rounded-lg font-medium transition-colors">
                예약하기
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-2 border-primary">
              <div className="text-center mb-6">
                <div className="bg-primary-100 p-4 rounded-lg w-fit mx-auto mb-4">
                  <Lock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text mb-2">중형 락커</h3>
                <p className="text-muted text-sm">40cm × 40cm × 50cm</p>
                <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">인기</span>
              </div>
              <div className="text-center mb-6">
                <div className="text-2xl font-bold text-primary mb-1">1,500원</div>
                <div className="text-sm text-muted">시간당</div>
              </div>
              <button className="w-full bg-primary hover:bg-primary-600 text-white py-3 rounded-lg font-medium transition-colors">
                예약하기
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-center mb-6">
                <div className="bg-primary-100 p-4 rounded-lg w-fit mx-auto mb-4">
                  <Lock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text mb-2">대형 락커</h3>
                <p className="text-muted text-sm">50cm × 50cm × 60cm</p>
              </div>
              <div className="text-center mb-6">
                <div className="text-2xl font-bold text-primary mb-1">2,000원</div>
                <div className="text-sm text-muted">시간당</div>
              </div>
              <button className="w-full bg-primary hover:bg-primary-600 text-white py-3 rounded-lg font-medium transition-colors">
                예약하기
              </button>
            </div>
          </div>

          {/* 이용 방법 */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold text-text mb-8 text-center">이용 방법</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-bold text-text mb-2">1. 위치 선택</h4>
                <p className="text-sm text-muted">원하는 위치의 락커를 선택하세요</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-bold text-text mb-2">2. 시간 설정</h4>
                <p className="text-sm text-muted">이용할 시간을 설정하세요</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-bold text-text mb-2">3. 결제</h4>
                <p className="text-sm text-muted">간편하게 결제를 완료하세요</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <Lock className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-bold text-text mb-2">4. QR 이용</h4>
                <p className="text-sm text-muted">QR코드로 락커를 열고 이용하세요</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}