"use client";

import React from "react"; // ★ 이 줄이 추가되었습니다 (Fragment 사용을 위해)
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { COMPARISON_DATA } from "@/lib/constants";

export function ComparisonSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-[#3E522D] font-bold tracking-widest text-xs uppercase mb-3 block">
            Why Trinity?
          </span>
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#1A1F16]">
            똑같은 '질성형'이 아닙니다<br />
            <span className="text-[#3E522D] text-underline-point">결과의 차이</span>를 확인하세요
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* 모바일용 카드 뷰 (반응형) */}
          <div className="md:hidden space-y-6">
             {/* 모바일에서는 심플하게 트리니티 장점만 강조 */}
             {COMPARISON_DATA.map((item, idx) => (
               <div key={idx} className="bg-[#F4EBE2] p-6 rounded-2xl border border-[#3E522D]/20">
                 <h3 className="font-bold text-[#3E522D] mb-2">{item.category}</h3>
                 <div className="flex items-start gap-2 mb-2 opacity-50 text-sm">
                    <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                    <span className="line-through">{item.others}</span>
                 </div>
                 <div className="flex items-start gap-2 font-bold text-[#1A1F16]">
                    <Check className="w-4 h-4 text-[#3E522D] mt-0.5 shrink-0" />
                    <span>{item.trinity}</span>
                 </div>
               </div>
             ))}
          </div>

          {/* PC용 비교 테이블 */}
          <div className="hidden md:grid grid-cols-3 gap-0 border border-[#E5E0D8] rounded-3xl overflow-hidden shadow-xl">
            {/* 헤더 */}
            <div className="bg-[#F9F9F9] p-8 flex items-center justify-center font-bold text-[#6B7264] border-b border-[#E5E0D8]">
              구분
            </div>
            <div className="bg-[#F9F9F9] p-8 flex items-center justify-center font-bold text-[#6B7264] border-b border-[#E5E0D8]">
              일반 질성형
            </div>
            <div className="bg-[#3E522D] p-8 flex items-center justify-center font-bold text-white border-b border-[#3E522D]">
              트리니티 3중 복원술
            </div>

            {/* 내용 - ★ 여기가 수정된 부분입니다 ★ */}
            {COMPARISON_DATA.map((item, idx) => (
              <React.Fragment key={idx}>
                <div className="bg-white p-6 flex items-center justify-center font-bold text-[#1A1F16] border-b border-[#E5E0D8] border-r">
                  {item.category}
                </div>
                <div className="bg-white p-6 flex items-center justify-center text-[#6B7264] border-b border-[#E5E0D8] border-r relative overflow-hidden group">
                   <span className="relative z-10">{item.others}</span>
                   <X className="absolute text-red-500/10 w-24 h-24 -right-4 -bottom-4 rotate-12" />
                </div>
                <div className="bg-[#F4EBE2]/30 p-6 flex items-center justify-center font-bold text-[#3E522D] border-b border-[#E5E0D8] relative overflow-hidden">
                   <span className="relative z-10">{item.trinity}</span>
                   <div className="absolute inset-0 bg-[#3E522D]/5" />
                   <Check className="absolute text-[#3E522D]/10 w-24 h-24 -right-4 -bottom-4 rotate-12" />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}