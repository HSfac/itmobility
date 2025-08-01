"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, MapPin, Lock, Car } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-primary p-2 rounded-lg">
                <Car className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-text">
                SmartMobility Hub
              </span>
            </Link>
          </div>

          {/* 데스크톱 네비게이션 */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-text hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                홈
              </Link>
              <Link
                href="/locker"
                className="text-muted hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1"
              >
                <Lock className="h-4 w-4" />
                <span>스마트락커</span>
              </Link>
              <Link
                href="/mobility"
                className="text-muted hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1"
              >
                <MapPin className="h-4 w-4" />
                <span>공유모빌리티</span>
              </Link>
              <Link
                href="/mypage"
                className="text-muted hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                마이페이지
              </Link>
            </div>
          </div>

          {/* 로그인/회원가입 버튼 */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-muted hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              로그인
            </Link>
            <Link
              href="/signup"
              className="bg-primary hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              회원가입
            </Link>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-muted hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                href="/"
                className="text-text hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                홈
              </Link>
              <Link
                href="/locker"
                className="text-muted hover:text-primary block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Lock className="h-4 w-4" />
                <span>스마트락커</span>
              </Link>
              <Link
                href="/mobility"
                className="text-muted hover:text-primary block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <MapPin className="h-4 w-4" />
                <span>공유모빌리티</span>
              </Link>
              <Link
                href="/mypage"
                className="text-muted hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                마이페이지
              </Link>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center space-x-3">
                  <Link
                    href="/login"
                    className="text-muted hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    로그인
                  </Link>
                  <Link
                    href="/signup"
                    className="bg-primary hover:bg-primary-600 text-white block px-3 py-2 rounded-md text-base font-medium w-full text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    회원가입
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}