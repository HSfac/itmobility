"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Lock, Mail, User, Phone, Car } from "lucide-react";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    passwordConfirm: "",
    agreeTerms: false,
    agreePrivacy: false,
    agreeMarketing: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 비밀번호 확인
    if (formData.password !== formData.passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    // 필수 약관 동의 확인
    if (!formData.agreeTerms || !formData.agreePrivacy) {
      alert("필수 약관에 동의해주세요.");
      return;
    }

    // TODO: 회원가입 로직 구현
    console.log("회원가입 시도:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* 로고 및 헤더 */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-primary p-4 rounded-xl">
              <Car className="h-12 w-12 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-text">회원가입</h2>
          <p className="mt-2 text-muted">
            SmartMobility Hub와 함께 스마트한 일상을 시작하세요
          </p>
        </div>

        {/* 회원가입 폼 */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* 이름 입력 */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                이름 <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-muted" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-muted text-text rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:z-10"
                  placeholder="이름을 입력하세요"
                />
              </div>
            </div>

            {/* 이메일 입력 */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                이메일 <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-muted" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-muted text-text rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:z-10"
                  placeholder="이메일을 입력하세요"
                />
              </div>
            </div>

            {/* 전화번호 입력 */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
                전화번호
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-muted" />
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-muted text-text rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:z-10"
                  placeholder="010-0000-0000"
                />
              </div>
            </div>

            {/* 비밀번호 입력 */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-text mb-2">
                비밀번호 <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-muted" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="appearance-none relative block w-full pl-10 pr-10 py-3 border border-gray-300 placeholder-muted text-text rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:z-10"
                  placeholder="8자 이상의 비밀번호"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-muted hover:text-text" />
                  ) : (
                    <Eye className="h-5 w-5 text-muted hover:text-text" />
                  )}
                </button>
              </div>
            </div>

            {/* 비밀번호 확인 */}
            <div>
              <label htmlFor="passwordConfirm" className="block text-sm font-medium text-text mb-2">
                비밀번호 확인 <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-muted" />
                </div>
                <input
                  id="passwordConfirm"
                  name="passwordConfirm"
                  type={showPasswordConfirm ? "text" : "password"}
                  required
                  value={formData.passwordConfirm}
                  onChange={handleInputChange}
                  className="appearance-none relative block w-full pl-10 pr-10 py-3 border border-gray-300 placeholder-muted text-text rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:z-10"
                  placeholder="비밀번호를 다시 입력하세요"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
                >
                  {showPasswordConfirm ? (
                    <EyeOff className="h-5 w-5 text-muted hover:text-text" />
                  ) : (
                    <Eye className="h-5 w-5 text-muted hover:text-text" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* 약관 동의 */}
          <div className="space-y-3">
            <div className="flex items-center">
              <input
                id="agreeTerms"
                name="agreeTerms"
                type="checkbox"
                checked={formData.agreeTerms}
                onChange={handleInputChange}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="agreeTerms" className="ml-2 block text-sm text-text">
                <span className="text-red-500">*</span> 
                <Link href="/support/terms" className="text-primary hover:text-primary-600 underline">
                  이용약관
                </Link>에 동의합니다
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="agreePrivacy"
                name="agreePrivacy"
                type="checkbox"
                checked={formData.agreePrivacy}
                onChange={handleInputChange}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="agreePrivacy" className="ml-2 block text-sm text-text">
                <span className="text-red-500">*</span> 
                <Link href="/support/privacy" className="text-primary hover:text-primary-600 underline">
                  개인정보처리방침
                </Link>에 동의합니다
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="agreeMarketing"
                name="agreeMarketing"
                type="checkbox"
                checked={formData.agreeMarketing}
                onChange={handleInputChange}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="agreeMarketing" className="ml-2 block text-sm text-muted">
                마케팅 정보 수신에 동의합니다 (선택)
              </label>
            </div>
          </div>

          {/* 회원가입 버튼 */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
            >
              회원가입
            </button>
          </div>

          {/* 로그인 링크 */}
          <div className="text-center">
            <p className="text-sm text-muted">
              이미 계정이 있으신가요?{" "}
              <Link href="/login" className="font-medium text-primary hover:text-primary-600">
                로그인
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}