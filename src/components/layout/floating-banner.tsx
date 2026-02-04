// src/components/layout/floating-banner.tsx
"use client";

import { Phone, Calendar, MousePointer2, CalendarCheck } from "lucide-react";

export default function FloatingBanner() {
  return (
    <>
      {/* --- 데스크탑 버전 (PC) --- */}
      <div className="hidden lg:flex fixed bottom-10 right-10 z-[9999] flex-col gap-3 font-pretendard">
        {/* 네이버 예약 */}
        <a
          href="https://booking.naver.com/booking/13/bizes/318986"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 pl-4 pr-1 py-1 bg-white border border-[#03C75A]/20 rounded-full shadow-lg hover:shadow-xl group overflow-hidden w-[180px] hover:w-[190px] transition-all duration-300"
        >
          <span className="flex-1 text-sm font-bold text-[#1A1F16]">
            네이버 예약
          </span>
          <div className="w-10 h-10 rounded-full bg-[#03C75A] flex items-center justify-center shrink-0 text-white">
            <span className="font-black text-sm">N</span>
          </div>
        </a>

        {/* 카카오 상담 */}
        <a
          href="https://pf.kakao.com/_NCAlxb"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 pl-4 pr-1 py-1 bg-white border border-[#FEE500]/20 rounded-full shadow-lg hover:shadow-xl group overflow-hidden w-[180px] hover:w-[190px] transition-all duration-300"
        >
          <span className="flex-1 text-sm font-bold text-[#1A1F16]">
            카카오 상담
          </span>
          <div className="w-10 h-10 rounded-full bg-[#FEE500] flex items-center justify-center shrink-0">
            {/* 카카오 SVG 아이콘 */}
            <svg
              className="w-5 h-5 fill-[#3C1E1E]"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 3C7.58 3 4 5.79 4 9.24C4 11.22 5.21 12.96 7.06 14.12L6.34 16.74C6.29 16.93 6.47 17.1 6.66 17.02L9.84 15.69C10.53 15.82 11.26 15.89 12 15.89C16.42 15.89 20 13.1 20 9.65C20 6.21 16.42 3 12 3Z" />
            </svg>
          </div>
        </a>

        {/* 온라인 예약 */}
        <a
          href="https://www.trinityclinic.co.kr/board/reservation/write"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 pl-4 pr-1 py-1 bg-white border border-[#E9E4DB] rounded-full shadow-lg hover:shadow-xl group overflow-hidden w-[180px] hover:w-[190px] transition-all duration-300"
        >
          <span className="flex-1 text-sm font-bold text-[#1A1F16]">
            간편 온라인 예약
          </span>
          <div className="w-10 h-10 rounded-full bg-[#1A1F16] flex items-center justify-center shrink-0">
            <MousePointer2 className="w-5 h-5 text-white" />
          </div>
        </a>

        {/* 전화 상담 */}
        <a
          href="tel:02-512-8875"
          className="flex items-center gap-3 pl-4 pr-1 py-1 bg-[#3E522D] border border-[#3E522D] rounded-full shadow-lg hover:shadow-xl group overflow-hidden w-[180px] hover:w-[190px] mt-2 transition-all duration-300"
        >
          <span className="flex-1 text-sm font-bold text-white">전화 상담</span>
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 animate-pulse">
            <Phone className="w-5 h-5 text-white" />
          </div>
        </a>
      </div>

      {/* --- 모바일 버전 (하단 고정 바) --- */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full z-[9999] bg-white border-t border-[#E9E4DB] shadow-[0_-5px_20px_rgba(0,0,0,0.05)] pb-[env(safe-area-inset-bottom)]">
        <div className="grid grid-cols-4 h-[60px]">
          {/* 네이버 */}
          <a
            href="https://booking.naver.com/booking/13/bizes/318986"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 active:bg-gray-50 border-r border-[#E9E4DB]/50"
          >
            <span
              className="text-lg font-black text-[#03C75A] mb-0.5"
              style={{ lineHeight: 1 }}
            >
              N
            </span>
            <span className="text-[10px] font-bold text-[#1A1F16]">
              네이버예약
            </span>
          </a>

          {/* 카카오 */}
          <a
            href="https://pf.kakao.com/_NCAlxb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 active:bg-gray-50 border-r border-[#E9E4DB]/50"
          >
            <svg
              className="w-5 h-5 fill-[#3C1E1E]"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 3C7.58 3 4 5.79 4 9.24C4 11.22 5.21 12.96 7.06 14.12L6.34 16.74C6.29 16.93 6.47 17.1 6.66 17.02L9.84 15.69C10.53 15.82 11.26 15.89 12 15.89C16.42 15.89 20 13.1 20 9.65C20 6.21 16.42 3 12 3Z" />
            </svg>
            <span className="text-[10px] font-bold text-[#1A1F16]">
              카카오상담
            </span>
          </a>

          {/* 온라인예약 */}
          <a
            href="https://www.trinityclinic.co.kr/board/reservation/write"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 active:bg-gray-50 border-r border-[#E9E4DB]/50"
          >
            <CalendarCheck className="w-5 h-5 text-[#3E522D]" />
            <span className="text-[10px] font-bold text-[#1A1F16]">
              온라인예약
            </span>
          </a>

          {/* 전화상담 */}
          <a
            href="tel:02-512-8875"
            className="bg-[#3E522D] flex flex-col items-center justify-center gap-1 active:bg-[#2D3B1A]"
          >
            <Phone className="w-5 h-5 text-white" />
            <span className="text-[10px] font-bold text-white">전화상담</span>
          </a>
        </div>
      </div>
    </>
  );
}