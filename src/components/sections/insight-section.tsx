"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, CheckCircle2, HeartOff, Droplets, AlertCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SYMPTOMS_DATA } from "@/lib/constants";

// 아이콘 매핑
const ICONS = {
  HeartOff: HeartOff,
  Droplets: Droplets,
  AlertCircle: AlertCircle,
};

// ==============================================
// 통합 Insight Section (스토리텔링 + 인터랙티브 체크)
// ==============================================
export function InsightSection() {
  return (
    <div className="flex flex-col w-full font-pretendard">
      {/* 폰트 로드 (CDN) */}
      <style jsx global>{`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
        @font-face {
            font-family: 'GmarketSansMedium';
            src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
            font-weight: normal; font-style: normal;
        }
        @font-face {
            font-family: 'KoPubBatang';
            src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/KoPubBatangMedium.woff') format('woff');
            font-weight: normal; font-style: normal;
        }
        .font-pretendard { font-family: 'Pretendard', sans-serif; }
        .font-gmarket { font-family: 'GmarketSansMedium', sans-serif; }
        .font-kopub { font-family: 'KoPubBatang', serif; }
      `}</style>

      {/* Part 1: Storytelling (기존 코드 유지) */}
      <StorytellingPart />

      {/* Part 2: Interactive Symptom Check (UX 전면 개편) */}
      <InteractiveCheckPart />
    </div>
  );
}

// ------------------------------------------------------------------
// [Part 1] Storytelling Component (기존 유지)
// ------------------------------------------------------------------
function StorytellingPart() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  // ... (기존 애니메이션 값들 동일)
  const qOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [0, 1, 0]);
  const qScale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1.1]);
  const qBlur = useTransform(scrollYProgress, [0.2, 0.3], ["0px", "10px"]);
  const solOpacity = useTransform(scrollYProgress, [0.3, 0.4, 0.7], [0, 1, 1]);
  const solY = useTransform(scrollYProgress, [0.3, 0.5], [50, 0]);
  const detailOpacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);
  const detailY = useTransform(scrollYProgress, [0.6, 0.8], [30, 0]);
  const bgColor = useTransform(scrollYProgress, [0, 0.5], ["#FDFBF7", "#F4F1EB"]);

  return (
    <motion.section ref={containerRef} style={{ backgroundColor: bgColor }} className="relative h-[300vh] w-full">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-6">
        {/* ... (기존 장식 요소들) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           <motion.div style={{ scale: useTransform(scrollYProgress, [0, 1], [0.5, 1.5]), opacity: 0.05 }} className="w-[80vw] h-[80vw] rounded-full border border-[#2E3A30]" />
           <motion.div style={{ scale: useTransform(scrollYProgress, [0, 1], [0.8, 2]), opacity: 0.03 }} className="absolute w-[60vw] h-[60vw] rounded-full border border-[#2E3A30]" />
        </div>

        {/* Stage 1 */}
        <motion.div style={{ opacity: qOpacity, scale: qScale, filter: `blur(${qBlur})` }} className="absolute z-10 flex flex-col items-center gap-6 text-center">
          <div className="w-1 h-12 bg-[#D4C6B5] mb-4 mx-auto" />
          <h2 className="font-kopub text-3xl md:text-5xl text-[#2E3A30]/60 italic leading-snug tracking-tight">“이게 정말 <span className="text-[#2E3A30] font-bold">노화</span>일까요?”</h2>
          <h2 className="font-kopub text-3xl md:text-5xl text-[#2E3A30]/60 italic leading-snug tracking-tight">“다들 <span className="text-[#2E3A30] font-bold">참고 사는</span> 걸까요?”</h2>
          <h2 className="font-kopub text-3xl md:text-5xl text-[#2E3A30]/60 italic leading-snug tracking-tight">“원래 이 정도는 <span className="text-[#2E3A30] font-bold">정상</span>일까요?”</h2>
        </motion.div>

        {/* Stage 2 */}
        <motion.div style={{ opacity: solOpacity, y: solY }} className="absolute z-20 text-center max-w-4xl">
          <span className="block font-gmarket text-[#A89B8C] text-xs font-bold tracking-[0.2em] uppercase mb-6">The Trinity Solution</span>
          <h2 className="font-kopub text-5xl md:text-7xl lg:text-[80px] leading-[1.1] text-[#2E3A30] mb-8 tracking-tighter">단순히 입구만 좁히는 <br /><span className="italic relative inline-block z-10">수술이 아닙니다.<span className="absolute bottom-3 left-0 w-full h-[0.3em] bg-[#D4C6B5]/60 -z-10" /></span></h2>
          <p className="font-pretendard text-xl md:text-2xl text-[#5C5C5C] font-light leading-relaxed"><strong className="text-[#2E3A30] font-semibold">넓어진 질과 골반근육의 완벽한 복원.</strong> <br/>여성의 잃어버린 자신감을 되찾아 드립니다.</p>
        </motion.div>

        {/* Stage 3 */}
        <motion.div style={{ opacity: detailOpacity, y: detailY }} className="absolute z-30 bottom-12 md:bottom-24 w-full max-w-5xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white/60 backdrop-blur-md border border-[#EAE8E4] p-8 rounded-3xl shadow-xl">
            <div className="space-y-4">
               {["성적 만족도와 기능 개선을 한번에", "골반기저근의 해부학적 복원", "재발 없는 반영구적 효과"].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-3">
                   <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2E3A30] flex items-center justify-center"><Check className="w-3 h-3 text-white" /></div>
                   <span className="font-pretendard text-[#2E3A30] text-lg font-medium">{item}</span>
                 </div>
               ))}
            </div>
            <div className="flex justify-start md:justify-end">
               <Button className="h-16 px-10 rounded-full bg-[#2E3A30] text-white hover:bg-[#1A211B] text-xl shadow-lg transition-transform hover:scale-105 font-pretendard">1:1 상담 신청하기 <ArrowRight className="ml-2 w-5 h-5" /></Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

// ------------------------------------------------------------------
// [Part 2] Interactive Check Component (New UX)
// ------------------------------------------------------------------
function InteractiveCheckPart() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  // 체크 토글 함수
  const toggleCheck = (item: string) => {
    const newSet = new Set(checkedItems);
    if (newSet.has(item)) newSet.delete(item);
    else newSet.add(item);
    setCheckedItems(newSet);
  };

  return (
    <section className="py-32 bg-[#F9F9F9] relative z-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-20">
           <span className="font-gmarket text-[#3E522D] font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Medical Self-Check</span>
           <h2 className="font-kopub text-4xl md:text-5xl font-bold text-[#1A1F16] mb-6">나에게도 <span className="text-[#3E522D] italic">치료</span>가 필요할까요?</h2>
           <p className="font-pretendard text-[#6B7264] text-lg max-w-2xl mx-auto">
             아래 증상 중 해당하는 항목을 선택해보세요. <br className="hidden md:block"/>
             체크된 항목이 많을수록 전문의와의 상담이 권장됩니다.
           </p>
        </div>

        {/* Card Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SYMPTOMS_DATA.map((data) => {
            const Icon = ICONS[data.icon as keyof typeof ICONS];
            const isSelected = selectedCard === data.id;

            return (
              <motion.div
                key={data.id}
                layout
                onClick={() => setSelectedCard(isSelected ? null : data.id)}
                className={`relative rounded-[2rem] p-8 cursor-pointer transition-all duration-500 border-2 overflow-hidden group
                  ${isSelected 
                    ? "bg-[#2E3A30] border-[#2E3A30] shadow-2xl scale-[1.02] z-10" 
                    : "bg-white border-transparent hover:border-[#D4C6B5] shadow-lg hover:shadow-xl"
                  }`}
              >
                {/* Card Header */}
                <div className="flex flex-col items-start gap-6 mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-500
                    ${isSelected ? "bg-[#3E522D] text-white" : "bg-[#F4EBE2] text-[#3E522D]"}`}>
                    <Icon size={32} />
                  </div>
                  <div>
                    <h3 className={`font-kopub text-2xl font-bold mb-2 transition-colors duration-500 ${isSelected ? "text-white" : "text-[#1A1F16]"}`}>
                      {data.title}
                    </h3>
                    <p className={`font-pretendard text-sm leading-relaxed transition-colors duration-500 ${isSelected ? "text-[#A89B8C]" : "text-[#6B7264]"}`}>
                      {data.description}
                    </p>
                  </div>
                </div>

                {/* Check List (Always Visible but styled differently) */}
                <div className="space-y-3">
                  {data.checkpoints.map((point, idx) => {
                    const isChecked = checkedItems.has(point);
                    return (
                      <div 
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation(); // 카드 닫힘 방지
                          toggleCheck(point);
                        }}
                        className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-300 group/item cursor-pointer
                          ${isSelected 
                            ? (isChecked ? "bg-[#3E522D]/50 border border-[#A89B8C]" : "bg-[#1A211B] border border-[#3E522D]/30 hover:bg-[#3E522D]/30")
                            : "bg-[#F9F9F9] border border-transparent hover:bg-[#F4EBE2]"
                          }`}
                      >
                        <div className={`mt-0.5 w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-300
                          ${isChecked 
                            ? "bg-[#C5A065] border-[#C5A065] text-white" 
                            : (isSelected ? "border-[#A89B8C] text-transparent" : "border-[#D4C6B5] text-transparent")
                          }`}>
                          <Check size={12} strokeWidth={4} />
                        </div>
                        <span className={`font-pretendard text-sm font-medium transition-colors duration-300
                          ${isSelected ? "text-[#EAE8E4]" : "text-[#333]"}`}>
                          {point}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Hover Effect Icon */}
                {!isSelected && (
                  <div className="absolute top-8 right-8 text-[#D4C6B5] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ChevronRight size={24} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Result Action Bar (체크가 하나라도 있으면 등장) */}
        <AnimatePresence>
          {checkedItems.size > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-8 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
            >
              <div className="bg-[#2E3A30] text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-6 pointer-events-auto cursor-pointer hover:scale-105 transition-transform">
                <div className="flex flex-col">
                  <span className="font-gmarket text-[#A89B8C] text-xs font-bold uppercase tracking-wider">Checked Symptoms</span>
                  <span className="font-kopub text-lg">총 <strong className="text-[#C5A065]">{checkedItems.size}</strong>개의 증상이 선택됨</span>
                </div>
                <div className="h-8 w-[1px] bg-white/20" />
                <div className="flex items-center gap-2 font-pretendard font-bold text-[#EAE8E4]">
                  전문 상담 예약하기 <ArrowRight size={18} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}