"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, Search } from "lucide-react";

interface FAQItem {
  id: number;
  category: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    category: "스마트락커",
    question: "스마트락커는 어떻게 이용하나요?",
    answer: "스마트락커는 앱에서 원하는 위치와 크기를 선택한 후 결제하시면 이용 가능합니다. QR코드를 스캔하여 락커를 열고 닫을 수 있습니다."
  },
  {
    id: 2,
    category: "스마트락커",
    question: "락커 이용 요금은 어떻게 계산되나요?",
    answer: "소형(1,000원/시간), 중형(1,500원/시간), 대형(2,000원/시간)으로 시간당 요금이 부과됩니다. 최소 이용 시간은 1시간입니다."
  },
  {
    id: 3,
    category: "스마트락커",
    question: "락커에 보관할 수 없는 물품이 있나요?",
    answer: "위험물, 인화성 물질, 생물, 부패성 식품, 고가품(100만원 이상), 불법 물품은 보관하실 수 없습니다."
  },
  {
    id: 4,
    category: "공유모빌리티",
    question: "공유 모빌리티는 어디서 이용할 수 있나요?",
    answer: "서울시 전역의 지정된 대여소에서 이용 가능합니다. 앱의 지도 기능으로 가까운 대여소를 찾을 수 있습니다."
  },
  {
    id: 5,
    category: "공유모빌리티",
    question: "헬멧은 어떻게 구하나요?",
    answer: "각 대여소에 헬멧이 비치되어 있으며, 개인 헬멧 착용도 가능합니다. 안전을 위해 반드시 헬멧을 착용해주세요."
  },
  {
    id: 6,
    category: "공유모빌리티",
    question: "모빌리티 고장 시 어떻게 하나요?",
    answer: "앱의 신고 기능을 이용하거나 고객센터(1588-1234)로 연락주세요. 즉시 대체 수단을 안내해드립니다."
  },
  {
    id: 7,
    category: "결제/환불",
    question: "어떤 결제 방법을 사용할 수 있나요?",
    answer: "신용카드, 체크카드, 카카오페이, 네이버페이, 삼성페이를 지원합니다. 정기결제도 가능합니다."
  },
  {
    id: 8,
    category: "결제/환불",
    question: "환불은 언제까지 가능한가요?",
    answer: "이용 시작 전에는 전액 환불 가능하며, 이용 중 취소 시 이용 시간만큼 차감 후 환불됩니다."
  },
  {
    id: 9,
    category: "회원/계정",
    question: "비밀번호를 잊어버렸어요.",
    answer: "로그인 페이지의 '비밀번호 찾기'를 클릭하거나, 고객센터로 연락주시면 도움을 드리겠습니다."
  },
  {
    id: 10,
    category: "회원/계정",
    question: "회원탈퇴는 어떻게 하나요?",
    answer: "마이페이지 > 설정 > 회원탈퇴에서 진행하실 수 있습니다. 탈퇴 시 모든 데이터가 삭제됩니다."
  }
];

const categories = ["전체", "스마트락커", "공유모빌리티", "결제/환불", "회원/계정"];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<number[]>([]);

  const filteredFAQs = faqData.filter(item => {
    const matchesCategory = selectedCategory === "전체" || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* 페이지 헤더 */}
      <section className="bg-gradient-to-r from-accent to-accent-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <HelpCircle className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              자주 묻는 질문
            </h1>
            <p className="text-xl text-accent-100 max-w-2xl mx-auto">
              궁금한 것이 있으시면 먼저 FAQ를 확인해보세요
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 검색 */}
        <div className="mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted" />
            </div>
            <input
              type="text"
              placeholder="궁금한 내용을 검색해보세요"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
            />
          </div>
        </div>

        {/* 카테고리 필터 */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-accent text-white"
                    : "bg-white text-muted border border-gray-300 hover:bg-accent-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ 목록 */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map(item => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="bg-accent-100 text-accent text-xs px-2 py-1 rounded">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-medium text-text">{item.question}</h3>
                    </div>
                    <div className="ml-4">
                      {openItems.includes(item.id) ? (
                        <ChevronUp className="h-5 w-5 text-muted" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted" />
                      )}
                    </div>
                  </div>
                </button>
                
                {openItems.includes(item.id) && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-muted leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-muted">검색 결과가 없습니다.</p>
            </div>
          )}
        </div>

        {/* 추가 도움말 */}
        <div className="mt-12 bg-accent-50 rounded-lg p-6">
          <h3 className="text-lg font-bold text-text mb-4">원하는 답변을 찾지 못하셨나요?</h3>
          <p className="text-muted mb-4">
            추가 문의사항이 있으시면 고객센터로 연락주세요. 
            언제든지 친절하게 도움을 드리겠습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/support/contact"
              className="bg-accent hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-medium text-center transition-colors"
            >
              문의하기
            </a>
            <a
              href="tel:1588-1234"
              className="border border-accent text-accent hover:bg-accent hover:text-white px-6 py-3 rounded-lg font-medium text-center transition-colors"
            >
              전화 상담: 1588-1234
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}