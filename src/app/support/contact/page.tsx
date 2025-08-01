"use client";

import { useState } from "react";
import { Phone, Mail, MessageCircle, MapPin, Clock, Send } from "lucide-react";

interface ContactForm {
  category: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const categories = [
  "서비스 이용 문의",
  "스마트락커 문의",
  "공유모빌리티 문의",
  "결제/환불 문의",
  "기술적 문제",
  "제휴/협력 문의",
  "기타"
];

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({
    category: "",
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 문의 제출 로직 구현
    console.log("문의 제출:", formData);
    alert("문의가 성공적으로 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* 페이지 헤더 */}
      <section className="bg-gradient-to-r from-secondary to-secondary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <MessageCircle className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              문의하기
            </h1>
            <p className="text-xl text-secondary-100 max-w-2xl mx-auto">
              궁금한 점이나 문제가 있으시면 언제든지 연락주세요
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* 연락처 정보 */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-text mb-8">연락처 정보</h2>
            
            <div className="space-y-6">
              {/* 전화 상담 */}
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md">
                <div className="bg-secondary-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-text mb-1">전화 상담</h3>
                  <p className="text-muted text-sm mb-2">평일 09:00 - 18:00</p>
                  <a href="tel:1588-1234" className="text-secondary font-medium hover:text-secondary-600">
                    1588-1234
                  </a>
                </div>
              </div>

              {/* 이메일 */}
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-text mb-1">이메일</h3>
                  <p className="text-muted text-sm mb-2">24시간 접수 가능</p>
                  <a href="mailto:support@smartmobilityhub.com" className="text-primary font-medium hover:text-primary-600">
                    support@smartmobilityhub.com
                  </a>
                </div>
              </div>

              {/* 주소 */}
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md">
                <div className="bg-accent-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-text mb-1">본사 주소</h3>
                  <p className="text-muted text-sm">
                    서울특별시 강남구 테헤란로 123<br />
                    스마트빌딩 15층
                  </p>
                </div>
              </div>

              {/* 운영 시간 */}
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md">
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-bold text-text mb-1">운영 시간</h3>
                  <div className="text-muted text-sm space-y-1">
                    <p>평일: 09:00 - 18:00</p>
                    <p>토요일: 09:00 - 15:00</p>
                    <p>일요일/공휴일: 휴무</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 긴급 상황 안내 */}
            <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-bold text-red-800 mb-2">긴급 상황</h3>
              <p className="text-red-700 text-sm mb-2">
                사고나 응급상황 시에는 먼저 119에 신고하신 후, 
                고객센터로 연락주세요.
              </p>
              <a href="tel:1588-1234" className="text-red-600 font-medium text-sm">
                긴급 문의: 1588-1234
              </a>
            </div>
          </div>

          {/* 문의 폼 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-text mb-8">온라인 문의</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 문의 분류 */}
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-text mb-2">
                    문의 분류 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary"
                  >
                    <option value="">문의 분류를 선택하세요</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* 이름 */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                      이름 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary"
                      placeholder="이름을 입력하세요"
                    />
                  </div>

                  {/* 이메일 */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                      이메일 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary"
                      placeholder="이메일을 입력하세요"
                    />
                  </div>
                </div>

                {/* 전화번호 */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
                    전화번호
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary"
                    placeholder="010-0000-0000"
                  />
                </div>

                {/* 제목 */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text mb-2">
                    제목 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary"
                    placeholder="문의 제목을 입력하세요"
                  />
                </div>

                {/* 내용 */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                    문의 내용 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary resize-none"
                    placeholder="문의 내용을 자세히 입력해주세요"
                  />
                </div>

                {/* 개인정보 수집 동의 */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-muted mb-2">
                    <strong>개인정보 수집 및 이용 동의</strong>
                  </p>
                  <p className="text-xs text-muted">
                    문의 처리를 위해 개인정보(이름, 이메일, 전화번호)를 수집하며, 
                    목적 달성 후 즉시 파기됩니다. 동의하지 않을 경우 문의 접수가 제한될 수 있습니다.
                  </p>
                </div>

                {/* 제출 버튼 */}
                <button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary-600 text-white py-4 px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>문의 제출</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}