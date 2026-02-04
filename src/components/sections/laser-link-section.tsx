"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LaserLinkSection() {
  return (
    <section className="py-16 bg-[#F4EBE2]/30 border-y border-[#E9E4DB]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          
          {/* 1. 텍스트 영역: 수술의 대안으로서 제안 */}
          <div className="text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#3E522D]/10 text-[#3E522D] text-[11px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              Non-Surgical Option
            </div>
            
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1F16] mb-3">
              "탄력만 빠르게 채우고 싶다면?"
            </h3>
            
            <p className="text-[#5C5C5C] text-sm md:text-base leading-relaxed">
              시간과 비용이 부담되시나요? <br className="md:hidden"/>
              트리니티는 <strong>비비브, 질쎄라</strong> 등 <br></br>최상급 레이저 장비도 완비하고 있습니다.<br className="hidden md:block"/>
              <br></br>부담없는 질 타이트닝 효과를 경험해보세요.
            </p>
          </div>

          {/* 2. 기기 키워드 & 버튼 영역 */}
          <div className="flex flex-col items-center md:items-end gap-6">
            
            {/* 기기 이름 태그들 (심플하게 나열) */}
            <div className="flex flex-wrap justify-center md:justify-end gap-2">
              {["질필러", "비비브", "모나리자터치", "리비브", "질쎄라"].map((item) => (
                <span key={item} className="px-3 py-1.5 bg-white border border-[#E9E4DB] rounded-lg text-xs font-bold text-[#A1A89A]">
                  {item}
                </span>
              ))}
            </div>

            {/* 상담 신청 또는 레이저 페이지 이동 버튼 */}
            {/* 레이저 상세 페이지가 있다면 Link로 감싸주세요. 없다면 상담 섹션으로 이동 */}
            <a href="#consultation"> 
              <Button 
                variant="outline" 
                className="group border-[#3E522D] text-[#3E522D] hover:bg-[#3E522D] hover:text-white transition-all px-8 py-6 text-base rounded-full"
              >
                1 Day 간편시술 문의
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}