'use client';

import Link from "next/link";
import { ArrowRight, Lock, Car, MapPin, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';

const AnimatedCounter = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}</span>;
};

const FloatingElement = ({ delay = 0, children, className = "" }: { delay?: number; children: React.ReactNode; className?: string }) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 py-20 overflow-hidden">
      {/* 배경 애니메이션 요소들 */}
      <div className="absolute inset-0">
        <FloatingElement delay={0} className="top-10 left-10 w-20 h-20 opacity-20">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-secondary"></div>
        </FloatingElement>
        <FloatingElement delay={1} className="top-32 right-20 w-16 h-16 opacity-30">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-secondary to-accent"></div>
        </FloatingElement>
        <FloatingElement delay={2} className="bottom-20 left-32 w-12 h-12 opacity-25">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-accent to-primary"></div>
        </FloatingElement>
        <FloatingElement delay={0.5} className="bottom-32 right-10 w-24 h-24 opacity-15">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-secondary"></div>
        </FloatingElement>
        
        {/* 모빌리티 관련 아이콘들 */}
        <FloatingElement delay={1.5} className="top-1/4 left-1/4 opacity-10">
          <Lock className="w-8 h-8 text-primary" />
        </FloatingElement>
        <FloatingElement delay={2.5} className="top-1/3 right-1/3 opacity-10">
          <Car className="w-8 h-8 text-secondary" />
        </FloatingElement>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* 메인 헤딩 */}
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-text mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              스마트한 일상의
            </motion.span>
            <motion.span 
              className="text-primary block"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              시작
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-muted max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            스마트락커와 공유 모빌리티를 통해 <br />
            <span className="text-primary font-semibold">더 편리하고 효율적인</span> 도시 생활을 경험하세요
          </motion.p>

          {/* CTA 버튼 */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/signup"
                className="bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 group shadow-lg hover:shadow-xl"
              >
                <span>지금 시작하기</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#services"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                서비스 둘러보기
              </Link>
            </motion.div>
          </motion.div>

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
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-8 mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-text mb-6">실시간 서비스 현황</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: 142, label: '사용 가능한 락커', color: 'primary' },
                { number: 43, label: '이용 중인 모빌리티', color: 'secondary' },
                { number: 1247, label: '오늘 총 이용 횟수', color: 'accent' },
                { number: 98, label: '고객 만족도', color: 'primary', suffix: '%' }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                >
                  <div className={`text-3xl font-bold text-${stat.color} mb-2`}>
                    <AnimatedCounter end={stat.number} />
                    {stat.suffix || ''}
                  </div>
                  <div className="text-sm text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

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