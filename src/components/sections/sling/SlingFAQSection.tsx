"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SlingMediaPlaceholder } from "./SlingMediaPlaceholder";

const SLING_FAQ_DATA = [
  {
    id: "01",
    category: "수술 적합성",
    question: "누가 미니슬링 수술을 받을 수 있나요?",
    answer: "기침, 재채기, 웃음, 운동 시 소변이 새는 복압성 요실금이 있는 분이 대상입니다. 심한 골반 장기 탈출이나 혼합성 요실금이 있으면 검사 후 다른 치료가 필요할 수 있어, 상담 시 정확한 진단이 필요합니다."
  },
  {
    id: "02",
    category: "수술·회복",
    question: "수술 시간과 입원은 어떻게 되나요?",
    answer: "수술은 수면 마취 하에 약 30분 내외로 진행됩니다. 당일 퇴원이 일반적이며, 수술 후 2~4시간 정도 회복실에서 안정을 취한 뒤 퇴원합니다. 1~2주 내 가벼운 일상 활동이 가능합니다."
  },
  {
    id: "03",
    category: "효과·유지",
    question: "미니슬링 효과는 얼마나 유지되나요?",
    answer: "미니슬링은 요도를 지지하는 반영구적 이식물로, 적합한 경우 장기간 효과를 기대할 수 있습니다. 개인에 따라 다르며, 정기 검진으로 상태를 확인하는 것이 좋습니다."
  },
  {
    id: "04",
    category: "주의사항",
    question: "수술 후 피해야 할 것이 있나요?",
    answer: "회복기간(약 4~6주) 동안 무거운 물건 들기, 격렬한 운동, 성관계는 피해 주세요. 변비가 있으면 복압이 올라가 부담이 될 수 있으므로 식이·운동으로 관리하는 것이 좋습니다."
  },
  {
    id: "05",
    category: "비용",
    question: "비용과 보험 적용이 궁금해요.",
    answer: "요실금 수술은 건강보험 적용 대상일 수 있습니다. 증상과 검사 결과에 따라 상이하므로, 병원 상담 시 보험 적용 여부와 비용을 확인해 보시면 됩니다."
  }
];

export function SlingFAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-[#F4F5F0] text-[#222A25] font-pretendard relative">
      <div className="absolute inset-0 opacity-[0.4] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-6xl relative z-10">
        <div className="mb-12 max-w-4xl mx-auto">
          <SlingMediaPlaceholder
            variant="image"
            aspectRatio="wide"
            title="[요실금·미니슬링 소개 이미지/영상]"
            description="FAQ 위에 배치할 대표 이미지 또는 30초~1분 소개 영상. 요실금 극복 후기, 병원/의료진 신뢰를 주는 분위기의 사진·영상을 넣으면 좋습니다."
          />
        </div>
        <div className="mb-20 flex flex-col md:flex-row items-baseline justify-between border-b border-[#222A25]/20 pb-6">
          <h2 className="text-4xl font-bold tracking-tighter leading-none text-[#222A25] md:text-6xl lg:text-8xl">
            FAQ
          </h2>
          <span className="text-lg md:text-xl font-medium text-[#5A6B5D] mb-2 md:mb-0">
            요실금·미니슬링 자주 묻는 질문
          </span>
        </div>

        <div>
          {SLING_FAQ_DATA.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(isActive ? null : index)}
                className="group border-b border-[#222A25]/10 cursor-pointer"
              >
                <div className={`py-8 md:py-10 transition-all duration-300 px-4 md:px-8 rounded-lg ${isActive ? "bg-[#EAECE6]" : "hover:bg-[#EAECE6]/50"}`}>
                  <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-start">
                    <span className={`text-sm font-bold tracking-widest pt-1 transition-colors duration-300 w-12 ${isActive ? "text-[#222A25]" : "text-[#222A25]/30"}`}>
                      {item.id}
                    </span>
                    <div className="flex-grow w-full">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex flex-col gap-2">
                          <span className={`text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${isActive ? "text-[#627B65]" : "text-[#222A25]/40"}`}>
                            {item.category}
                          </span>
                          <h3 className={`text-2xl md:text-3xl font-semibold tracking-tight transition-colors duration-300 leading-snug ${isActive ? "text-[#222A25]" : "text-[#222A25]/80 group-hover:text-[#222A25]"}`}>
                            {item.question}
                          </h3>
                        </div>
                        <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center transition-transform duration-500 ease-out ${isActive ? "rotate-45" : "group-hover:rotate-90"}`}>
                          <Plus className={`w-6 h-6 ${isActive ? "text-[#222A25]" : "text-[#222A25]/30"}`} />
                        </div>
                      </div>
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                            className="overflow-hidden"
                          >
                            <div className="pt-8 md:pt-10 pb-2 max-w-3xl">
                              <p className="text-lg md:text-xl text-[#222A25]/70 leading-relaxed font-normal">
                                {item.answer}
                              </p>
                              <div className="w-12 h-[2px] bg-[#222A25] mt-8 opacity-20" />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <p className="text-[#222A25]/50 mb-4 font-medium">더 궁금한 점이 있으신가요?</p>
          <button
            onClick={() => document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" })}
            className="text-lg font-bold border-b border-[#222A25] pb-1 text-[#222A25] hover:text-[#627B65] hover:border-[#627B65] transition-colors cursor-pointer"
          >
            1:1 상담 바로가기
          </button>
        </div>
      </div>
    </section>
  );
}
