import Link from "next/link";
import { ArrowRight, Lock, Car, MapPin, Smartphone } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* 메인 헤딩 */}
          <h1 className="text-4xl md:text-6xl font-bold text-text mb-6 animate-fade-in">
            스마트한 일상의
            <span className="text-primary block">시작</span>
          </h1>
          
          <p className="text-xl text-muted max-w-3xl mx-auto mb-8 animate-slide-up">
            스마트락커와 공유 모빌리티를 통해 
            더 편리하고 효율적인 도시 생활을 경험하세요
          </p>

          {/* CTA 버튼 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up">
            <Link
              href="/signup"
              className="bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 group"
            >
              <span>지금 시작하기</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#services"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300"
            >
              서비스 둘러보기
            </Link>
          </div>

          {/* 서비스 소개 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* 스마트락커 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="bg-primary-100 p-4 rounded-lg w-fit mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                <Lock className="h-8 w-8 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-text mb-2">스마트락커</h3>
              <p className="text-muted text-sm mb-4">
                안전하고 편리한 개인 보관함 서비스
              </p>
              <div className="text-sm text-primary font-medium">
                실시간 사용 가능: <span className="text-accent">142개</span>
              </div>
            </div>

            {/* 공유 자전거 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="bg-secondary-100 p-4 rounded-lg w-fit mx-auto mb-4 group-hover:bg-secondary transition-colors duration-300">
                <Car className="h-8 w-8 text-secondary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-text mb-2">공유 자전거</h3>
              <p className="text-muted text-sm mb-4">
                친환경 이동 수단으로 건강한 생활
              </p>
              <div className="text-sm text-secondary font-medium">
                주변 이용 가능: <span className="text-accent">28대</span>
              </div>
            </div>

            {/* 전동킥보드 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="bg-accent-100 p-4 rounded-lg w-fit mx-auto mb-4 group-hover:bg-accent transition-colors duration-300">
                <MapPin className="h-8 w-8 text-accent group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-text mb-2">전동킥보드</h3>
              <p className="text-muted text-sm mb-4">
                빠르고 스마트한 단거리 이동
              </p>
              <div className="text-sm text-accent font-medium">
                주변 이용 가능: <span className="text-accent">15대</span>
              </div>
            </div>
          </div>

          {/* 실시간 현황 */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-text mb-6">실시간 서비스 현황</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">142</div>
                <div className="text-sm text-muted">사용 가능한 락커</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">43</div>
                <div className="text-sm text-muted">이용 중인 모빌리티</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">1,247</div>
                <div className="text-sm text-muted">오늘 총 이용 횟수</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted">고객 만족도</div>
              </div>
            </div>
          </div>

          {/* 앱 다운로드 섹션 */}
          <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-white">
            <div className="flex items-center justify-center mb-4">
              <Smartphone className="h-12 w-12 mr-4" />
              <div className="text-left">
                <h3 className="text-2xl font-bold">모바일 앱으로 더 편리하게</h3>
                <p className="text-white/80">언제 어디서나 쉽고 빠르게 이용하세요</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#"
                className="bg-white text-text px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                App Store에서 다운로드
              </Link>
              <Link
                href="#"
                className="bg-white text-text px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                Google Play에서 다운로드
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}