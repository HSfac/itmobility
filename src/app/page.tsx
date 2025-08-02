'use client';

import HeroSection from "@/components/HeroSection";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div>
      <HeroSection />
      
      {/* 추가 서비스 소개 섹션 */}
      <motion.section 
        id="services" 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              혁신적인 <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">스마트 서비스</span>
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              첨단 기술과 사용자 중심 디자인으로 만든 
              차세대 도시 생활 솔루션을 만나보세요
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 스마트락커 소개 */}
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-text mb-4">
                🔐 스마트락커 시스템
              </h3>
              <p className="text-muted mb-6">
                QR코드와 모바일 앱을 통한 간편한 보관함 이용 서비스입니다. 
                안전한 개인 물품 보관과 24시간 접근이 가능합니다.
              </p>
              <ul className="space-y-2 text-muted">
                {[
                  "24시간 언제든지 이용 가능",
                  "QR코드로 간편한 잠금/해제", 
                  "다양한 크기의 보관함 선택",
                  "실시간 사용 현황 확인"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    ✅ {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="order-1 lg:order-2 bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <motion.div 
                  className="text-6xl mb-4"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  🔐
                </motion.div>
                <div className="text-primary font-bold text-lg">스마트락커</div>
              </div>
            </motion.div>

            {/* 공유모빌리티 소개 */}
            <motion.div 
              className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-8 rounded-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <motion.div 
                  className="text-6xl mb-4"
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                >
                  🚴‍♂️
                </motion.div>
                <div className="text-secondary font-bold text-lg">공유모빌리티</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-text mb-4">
                🚴‍♂️ 공유 모빌리티
              </h3>
              <p className="text-muted mb-6">
                자전거, 전동킥보드 등 다양한 친환경 이동 수단을 
                필요할 때 언제든 이용할 수 있는 서비스입니다.
              </p>
              <ul className="space-y-2 text-muted">
                {[
                  "친환경 이동 수단",
                  "실시간 위치 및 상태 확인",
                  "간편한 예약 및 결제", 
                  "안전한 반납 시스템"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    ✅ {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
