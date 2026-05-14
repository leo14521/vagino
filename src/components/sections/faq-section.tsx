"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { WOMEN_FAQ_ENTRIES } from "@/data/faq-women";

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-[#F4F5F0] text-[#222A25] font-pretendard relative">
      <div className="absolute inset-0 opacity-[0.4] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row items-baseline justify-between border-b border-[#222A25]/20 pb-6">
          <h2 className="text-4xl font-bold tracking-tighter leading-none text-[#222A25] md:text-6xl lg:text-8xl">
            FAQ
          </h2>
          <span className="text-lg md:text-xl font-medium text-[#5A6B5D] mb-2 md:mb-0">
            자주 여쭤보시는 질문들
          </span>
        </div>

        {/* FAQ List */}
        <div>
          {WOMEN_FAQ_ENTRIES.map((item, index) => {
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