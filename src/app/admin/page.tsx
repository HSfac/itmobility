import { 
  BarChart3, 
  Users, 
  MapPin, 
  TrendingUp, 
  AlertTriangle, 
  DollarSign,
  Lock,
  Car,
  Battery,
  Settings
} from "lucide-react";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* 페이지 헤더 */}
      <section className="bg-gradient-to-r from-text to-gray-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BarChart3 className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              관리자 대시보드
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              시스템 전체 현황을 모니터링하고 운영 데이터를 분석하세요
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 주요 지표 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-primary-100 p-3 rounded-lg">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-text">1,247</div>
                <div className="text-sm text-muted">총 사용자</div>
              </div>
            </div>
            <div className="flex items-center text-sm">
              <TrendingUp className="h-4 w-4 text-accent mr-1" />
              <span className="text-accent">+12.5%</span>
              <span className="text-muted ml-1">지난 주 대비</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-secondary-100 p-3 rounded-lg">
                <DollarSign className="h-6 w-6 text-secondary" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-text">₩3.2M</div>
                <div className="text-sm text-muted">일일 매출</div>
              </div>
            </div>
            <div className="flex items-center text-sm">
              <TrendingUp className="h-4 w-4 text-accent mr-1" />
              <span className="text-accent">+8.2%</span>
              <span className="text-muted ml-1">어제 대비</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-accent-100 p-3 rounded-lg">
                <Lock className="h-6 w-6 text-accent" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-text">208</div>
                <div className="text-sm text-muted">총 락커</div>
              </div>
            </div>
            <div className="flex items-center text-sm">
              <span className="text-accent">142개</span>
              <span className="text-muted ml-1">사용 가능</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-secondary-100 p-3 rounded-lg">
                <Car className="h-6 w-6 text-secondary" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-text">86</div>
                <div className="text-sm text-muted">총 모빌리티</div>
              </div>
            </div>
            <div className="flex items-center text-sm">
              <span className="text-accent">43대</span>
              <span className="text-muted ml-1">사용 가능</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* 실시간 시스템 상태 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-text mb-6">실시간 시스템 상태</h3>
            
            {/* 락커 상태 */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-muted">스마트락커</span>
                <span className="text-sm text-accent">68% 가동률</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-primary h-3 rounded-full" style={{width: '68%'}}></div>
              </div>
              <div className="flex justify-between text-xs text-muted mt-1">
                <span>사용중: 58개</span>
                <span>사용가능: 142개</span>
                <span>점검중: 8개</span>
              </div>
            </div>

            {/* 모빌리티 상태 */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-muted">공유 모빌리티</span>
                <span className="text-sm text-accent">50% 가동률</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-secondary h-3 rounded-full" style={{width: '50%'}}></div>
              </div>
              <div className="flex justify-between text-xs text-muted mt-1">
                <span>사용중: 43대</span>
                <span>사용가능: 43대</span>
              </div>
            </div>

            {/* 알림 */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                <span className="font-medium text-yellow-800">시스템 알림</span>
              </div>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• 강남역 락커 #L102 점검 필요</li>
                <li>• 킥보드 #KB034 배터리 부족</li>
                <li>• 홍대입구역 모빌리티 재배치 필요</li>
              </ul>
            </div>
          </div>

          {/* 일일 사용량 차트 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-text mb-6">일일 사용량 추이</h3>
            <div className="h-64 flex items-end justify-between space-x-2">
              {/* 가상 차트 데이터 */}
              {[65, 45, 78, 52, 89, 67, 94, 71, 83, 56, 75, 82].map((height, index) => (
                <div key={index} className="flex-1 bg-primary rounded-t" style={{height: `${height}%`}}></div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-muted mt-4">
              <span>00:00</span>
              <span>06:00</span>
              <span>12:00</span>
              <span>18:00</span>
              <span>24:00</span>
            </div>
          </div>
        </div>

        {/* 상세 관리 섹션 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 사용자 관리 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-text">사용자 관리</h3>
              <button className="text-primary hover:text-primary-600 text-sm font-medium">
                전체 보기
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted">신규 가입</span>
                <span className="font-medium text-accent">+23</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted">활성 사용자</span>
                <span className="font-medium text-text">1,089</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted">골드 멤버</span>
                <span className="font-medium text-text">156</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted">탈퇴 신청</span>
                <span className="font-medium text-red-500">2</span>
              </div>
            </div>
          </div>

          {/* 장비 관리 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-text">장비 관리</h3>
              <button className="text-primary hover:text-primary-600 text-sm font-medium">
                상세 관리
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Battery className="h-4 w-4 text-accent" />
                  <span className="text-muted">배터리 부족</span>
                </div>
                <span className="font-medium text-red-500">3대</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Settings className="h-4 w-4 text-muted" />
                  <span className="text-muted">점검 필요</span>
                </div>
                <span className="font-medium text-yellow-500">8개</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-secondary" />
                  <span className="text-muted">위치 이탈</span>
                </div>
                <span className="font-medium text-red-500">1대</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-accent" />
                  <span className="text-muted">정상 운영</span>
                </div>
                <span className="font-medium text-accent">276개</span>
              </div>
            </div>
          </div>

          {/* 매출 분석 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-text">매출 분석</h3>
              <button className="text-primary hover:text-primary-600 text-sm font-medium">
                상세 분석
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-muted">락커 매출</span>
                  <span className="font-medium">₩1.8M</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-muted">모빌리티 매출</span>
                  <span className="font-medium">₩1.4M</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-secondary h-2 rounded-full" style={{width: '40%'}}></div>
                </div>
              </div>
              <div className="pt-2 border-t">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-text">총 매출</span>
                  <span className="font-bold text-accent">₩3.2M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}