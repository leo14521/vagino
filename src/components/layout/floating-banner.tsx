// src/components/layout/floating-banner.tsx
"use client";

import { Phone, MousePointer2, CalendarCheck, MessageCircle } from "lucide-react";
import { NAVER_BOOKING_URL, NAVER_TALK_URL } from "@/lib/site";

export default function FloatingBanner() {
  return (
    <>
      {/* --- 데스크탑 버전 (PC) --- */}
      <div className="hidden lg:flex fixed bottom-10 right-10 z-[9999] flex-col gap-3 font-pretendard">
        {/* 네이버 예약 */}
        <a
          href={NAVER_BOOKING_URL}
          target="_blank"
          rel="noopener"
          className="flex items-center gap-3 pl-4 pr-1 py-1 bg-white border border-[#03C75A]/20 rounded-full shadow-lg hover:shadow-xl group overflow-hidden w-[180px] hover:w-[190px] transition-all duration-300"
        >
          <span className="flex-1 text-sm font-bold text-[#1A1F16]">
            네이버 예약
          </span>
          <div className="w-10 h-10 rounded-full bg-[#03C75A] flex items-center justify-center shrink-0 text-white">
            <span className="font-black text-sm">N</span>
          </div>
        </a>

        {/* 네이버 톡톡 */}
        <a
          href={NAVER_TALK_URL}
          target="_blank"
          rel="noopener"
          className="flex items-center gap-3 pl-4 pr-1 py-1 bg-white border border-[#03C75A]/20 rounded-full shadow-lg hover:shadow-xl group overflow-hidden w-[180px] hover:w-[190px] transition-all duration-300"
        >
          <span className="flex-1 text-sm font-bold text-[#1A1F16]">
            네이버 톡톡
          </span>
          <div className="w-10 h-10 rounded-full bg-[#03C75A] flex items-center justify-center shrink-0 text-white">
            <MessageCircle className="w-5 h-5" strokeWidth={2.2} />
          </div>
        </a>

        {/* 온라인 예약 */}
        <a
          href="https://www.trinityclinic.co.kr/board/reservation/write"
          target="_blank"
          rel="noopener"
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
            href={NAVER_BOOKING_URL}
            target="_blank"
            rel="noopener"
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

          {/* 네이버 톡톡 */}
          <a
            href={NAVER_TALK_URL}
            target="_blank"
            rel="noopener"
            className="flex flex-col items-center justify-center gap-1 active:bg-gray-50 border-r border-[#E9E4DB]/50"
          >
            <div className="w-5 h-5 rounded-full bg-[#03C75A] flex items-center justify-center text-white">
              <MessageCircle className="w-3.5 h-3.5" strokeWidth={2.2} />
            </div>
            <span className="text-[10px] font-bold text-[#1A1F16]">
              네이버톡톡
            </span>
          </a>

          {/* 온라인예약 */}
          <a
            href="https://www.trinityclinic.co.kr/board/reservation/write"
            target="_blank"
            rel="noopener"
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