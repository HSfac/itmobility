import Link from "next/link";
import { Car, Phone, Mail, MapPin, Smartphone, Download } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-text text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary p-2 rounded-lg">
                <Car className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">SmartMobility Hub</span>
            </div>
            <p className="text-gray-300 text-sm">
              스마트락커와 공유 모빌리티를 통해 
              더 편리하고 스마트한 일상을 만들어갑니다.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>서울특별시 강남구 테헤란로 123</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="h-4 w-4" />
                <span>1588-1234</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="h-4 w-4" />
                <span>info@smartmobilityhub.com</span>
              </div>
            </div>
          </div>

          {/* 서비스 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">서비스</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/locker"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  스마트락커
                </Link>
              </li>
              <li>
                <Link
                  href="/mobility"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  공유모빌리티
                </Link>
              </li>
              <li>
                <Link
                  href="/mypage"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  마이페이지
                </Link>
              </li>
              <li>
                <Link
                  href="/admin"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  관리자
                </Link>
              </li>
            </ul>
          </div>

          {/* 고객 지원 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">고객 지원</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/support/faq"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link
                  href="/support/contact"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  문의하기
                </Link>
              </li>
              <li>
                <Link
                  href="/support/guide"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  이용 가이드
                </Link>
              </li>
              <li>
                <Link
                  href="/support/terms"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  이용약관
                </Link>
              </li>
              <li>
                <Link
                  href="/support/privacy"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  개인정보처리방침
                </Link>
              </li>
            </ul>
          </div>

          {/* 앱 다운로드 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">앱 다운로드</h3>
            <p className="text-gray-300 text-sm">
              모바일 앱으로 더욱 편리하게 이용하세요
            </p>
            <div className="space-y-3">
              <Link
                href="#"
                className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 transition-colors px-4 py-2 rounded-lg"
              >
                <Smartphone className="h-5 w-5" />
                <div className="text-left">
                  <div className="text-xs text-gray-400">다운로드</div>
                  <div className="text-sm font-medium">App Store</div>
                </div>
              </Link>
              <Link
                href="#"
                className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 transition-colors px-4 py-2 rounded-lg"
              >
                <Download className="h-5 w-5" />
                <div className="text-left">
                  <div className="text-xs text-gray-400">다운로드</div>
                  <div className="text-sm font-medium">Google Play</div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* 하단 구분선 및 저작권 */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 SmartMobility Hub. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/support/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                이용약관
              </Link>
              <Link
                href="/support/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                개인정보처리방침
              </Link>
              <Link
                href="/support/contact"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                고객센터
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}