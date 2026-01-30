"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

// FAQ 데이터
const FAQ_DATA = [
  {
    id: "01",
    category: "수술 과정",
    question: "수술 시간과 입원 여부가 궁금합니다.",
    answer: "수술은 수면 마취 하에 약 1시간 내외로 진행됩니다. 수술 당일은 금식 후 입원하게 되며, 특별한 문제가 없는 경우 대부분 당일 퇴원이 가능합니다."
  },
  {
    id: "02",
    category: "통증 및 회복",
    question: "많이 아픈가요? 일상은 언제부터 가능한가요?",
    answer: "수술 당일부터 일상적인 활동은 가능합니다. 다만 2~3일간은 부기나 통증이 있을 수 있으며, 이는 처방해드리는 항생제와 소염제로 조절 가능합니다. 회복 기간은 약 6주 정도 소요됩니다."
  },
  {
    id: "03",
    category: "수술 효과",
    question: "질성형 수술을 하면 구체적으로 어떤 점이 좋아지나요?",
    answer: "단순히 질 입구만 좁히는 것이 아닙니다. 골반기저근을 복원하여 골반 장기 탈출증을 완화하고, 자궁과 방광을 제자리에 고정합니다. 성감 회복과 배변 기능 개선 효과도 기대할 수 있습니다."
  },
  {
    id: "04",
    category: "수술 후 관리",
    question: "수술 후 분비물이 나오는데 정상인가요?",
    answer: "네, 정상적인 회복 과정입니다. 수술 후 며칠에서 한 달 정도는 소량의 출혈이나 피 섞인 분비물이 나올 수 있습니다. 이후 몇 주간 나오는 분비물은 봉합사가 흡수되는 과정이니 안심하셔도 됩니다."
  },
  {
    id: "05",
    category: "주의사항",
    question: "샤워나 운동, 성관계는 언제부터 가능한가요?",
    answer: "가벼운 샤워는 가능하지만 탕 목욕은 6주간 피해주세요. 무거운 물건을 들거나 격렬한 운동, 그리고 성관계와 탐폰 사용은 수술 부위가 완전히 아물 때까지 6주 동안 피해주셔야 합니다."
  }
];

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-[#F4F5F0] text-[#222A25] font-pretendard relative">
      {/* 폰트 로드 */}
      <style jsx global>{`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
        .font-pretendard { font-family: 'Pretendard', sans-serif; }
      `}</style>
      
      {/* 배경 노이즈 텍스처 (매트한 질감 추가) */}
      <div className="absolute inset-0 opacity-[0.4] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row items-baseline justify-between border-b border-[#222A25]/20 pb-6">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none text-[#222A25]">
            FAQ
          </h2>
          <span className="text-lg md:text-xl font-medium text-[#5A6B5D] mb-2 md:mb-0">
            Frequently Asked Questions
          </span>
        </div>

        {/* FAQ List */}
        <div>
          {FAQ_DATA.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div 
                key={item.id}
                onClick={() => setActiveIndex(isActive ? null : index)}
                className="group border-b border-[#222A25]/10 cursor-pointer"
              >
                <div className={`py-8 md:py-10 transition-all duration-300 px-4 md:px-8 rounded-lg
                  ${isActive ? "bg-[#EAECE6]" : "hover:bg-[#EAECE6]/50"}`}>
                  
                  <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-start">
                    
                    {/* Numbering */}
                    <span className={`text-sm font-bold tracking-widest pt-1 transition-colors duration-300 w-12
                      ${isActive ? "text-[#222A25]" : "text-[#222A25]/30"}`}>
                      {item.id}
                    </span>

                    <div className="flex-grow w-full">
                      {/* Question Row */}
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex flex-col gap-2">
                          <span className={`text-xs font-bold uppercase tracking-wider transition-colors duration-300
                            ${isActive ? "text-[#627B65]" : "text-[#222A25]/40"}`}>
                            {item.category}
                          </span>
                          
                          <h3 className={`text-2xl md:text-3xl font-semibold tracking-tight transition-colors duration-300 leading-snug
                            ${isActive ? "text-[#222A25]" : "text-[#222A25]/80 group-hover:text-[#222A25]"}`}>
                            {item.question}
                          </h3>
                        </div>

                        {/* Icon Button */}
                        <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center transition-transform duration-500 ease-out
                          ${isActive ? "rotate-45" : "group-hover:rotate-90"}`}>
                           <Plus className={`w-6 h-6 ${isActive ? "text-[#222A25]" : "text-[#222A25]/30"}`} />
                        </div>
                      </div>

                      {/* Answer Area */}
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
        
        {/* Bottom Call to Action */}
        <div className="mt-20 text-center">
            <p className="text-[#222A25]/50 mb-4 font-medium">더 궁금한 점이 있으신가요?</p>
            <button className="text-lg font-bold border-b border-[#222A25] pb-1 text-[#222A25] hover:text-[#627B65] hover:border-[#627B65] transition-colors">
                1:1 상담 바로가기
            </button>
        </div>

      </div>
    </section>
  );
}