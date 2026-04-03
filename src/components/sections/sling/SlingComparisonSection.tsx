"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { SlingMediaPlaceholder } from "./SlingMediaPlaceholder";

const SLING_COMPARISON_DATA = [
  { category: "수술 시간", others: "1시간 이상 (전신 마취·대수술)", trinity: "약 30분 내외, 수면 마취" },
  { category: "절개 범위", others: "복부·질 등 넓은 절개", trinity: "질 내 최소 절개, 미니슬링 삽입" },
  { category: "입원·회복", others: "수일 입원, 2~4주 회복", trinity: "당일 퇴원, 1~2주 내 일상 복귀" },
  { category: "적응증", others: "심한 요실금·복합 수술", trinity: "복압성 요실금(기침·재채기 시 누수)" },
];

export function SlingComparisonSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-[#3E522D] font-bold tracking-widest text-xs uppercase mb-3 block">
            Why Mini Sling?
          </span>
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#1A1F16]">
            일반 요실금 수술과 <span className="text-[#3E522D]">미니슬링</span>은
            <br />
            <span className="text-[#3E522D] text-underline-point">다릅니다</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="md:hidden space-y-6">
            {SLING_COMPARISON_DATA.map((item, idx) => (
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

          <div className="hidden md:grid grid-cols-3 gap-0 border border-[#E5E0D8] rounded-3xl overflow-hidden shadow-xl">
            <div className="bg-[#F9F9F9] p-8 flex items-center justify-center font-bold text-[#6B7264] border-b border-[#E5E0D8]">
              구분
            </div>
            <div className="bg-[#F9F9F9] p-8 flex items-center justify-center font-bold text-[#6B7264] border-b border-[#E5E0D8]">
              일반 요실금 수술
            </div>
            <div className="bg-[#3E522D] p-8 flex items-center justify-center font-bold text-white border-b border-[#3E522D]">
              트리니티 미니슬링
            </div>

            {SLING_COMPARISON_DATA.map((item, idx) => (
              <React.Fragment key={idx}>
                <div className="bg-white p-6 flex items-center justify-center font-bold text-[#1A1F16] border-b border-[#E5E0D8] border-r">
                  {item.category}
                </div>
                <div className="bg-white p-6 flex items-center justify-center text-[#6B7264] border-b border-[#E5E0D8] border-r relative overflow-hidden group">
                  <span className="relative z-10 text-sm">{item.others}</span>
                  <X className="absolute text-red-500/10 w-24 h-24 -right-4 -bottom-4 rotate-12" />
                </div>
                <div className="bg-[#F4EBE2]/30 p-6 flex items-center justify-center font-bold text-[#3E522D] border-b border-[#E5E0D8] relative overflow-hidden">
                  <span className="relative z-10 text-sm">{item.trinity}</span>
                  <div className="absolute inset-0 bg-[#3E522D]/5" />
                  <Check className="absolute text-[#3E522D]/10 w-24 h-24 -right-4 -bottom-4 rotate-12" />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <SlingMediaPlaceholder
            variant="image"
            aspectRatio="wide"
            title="[비교 이미지 영역]"
            description="일반 요실금 수술(넓은 절개) vs 미니슬링(최소 절개) 비교 다이어그램 또는 before/after 개념 일러스트를 넣으면 좋습니다. 슬링이 요도 중간부를 지지하는 위치를 보여주는 단면도도 적합합니다."
          />
        </div>
      </div>
    </section>
  );
}
