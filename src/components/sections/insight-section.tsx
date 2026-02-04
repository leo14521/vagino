"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check, ArrowRight, HeartOff, Droplets, AlertCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// [데이터 정의]
const SYMPTOMS_DATA = [
  {
    id: "check-1",
    title: "관계 시 불편함",
    description: "질 근육 이완으로 인한 마찰력 감소는 본인과 파트너 모두의 만족도를 저하시킵니다.",
    icon: HeartOff,
    checkpoints: [
      "관계 중 민망한 소리(질방귀)가 난다",
      "예전과 달리 헐거운 느낌이 든다",
      "성감이 둔화되어 관계를 피하게 된다",
      "출산 후 조임이 예전 같지 않다"
    ]
  },
  {
    id: "check-2",
    title: "일상생활 불편함",
    description: "넓어진 질 입구는 목욕탕 이용이나 운동 시 불편함을 초래하며 자신감을 떨어뜨립니다.",
    icon: Droplets,
    checkpoints: [
      "탕 목욕 후 물이 흐르는 느낌이 든다",
      "밑이 빠지는 듯한 묵직한 불쾌감",
      "뛰거나 웃을 때 소변이 샌다 (요실금)",
      "요가/필라테스 동작 시 불편하다"
    ]
  },
  {
    id: "check-3",
    title: "여성 질환 재발",
    description: "개방된 질 입구는 외부 세균 침입을 용이하게 하여 만성적인 여성 질환의 원인이 됩니다.",
    icon: AlertCircle,
    checkpoints: [
      "질염이 자주 재발한다",
      "질 건조증이 심해졌다",
      "만성적인 분비물 증가",
      "방광염이 자주 동반된다"
    ]
  }
];

// ==============================================
// 통합 Insight Section
// ==============================================
export function InsightSection() {
  return (
    <div className="flex flex-col w-full font-pretendard">
      <style jsx global>{`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
        .font-pretendard { font-family: 'Pretendard', sans-serif; }
      `}</style>

      {/* Part 1: Storytelling (스크롤 애니메이션) */}
      <StorytellingPart />

      {/* Part 2: Interactive Symptom Check (자가진단 UX) */}
      <InteractiveCheckPart />
    </div>
  );
}

// ------------------------------------------------------------------
// [Part 1] Storytelling Component (겹침 문제 해결됨)
// ------------------------------------------------------------------
// ------------------------------------------------------------------
// [Part 1] Storytelling Component (거리 조절 완료: solY -130)
// ------------------------------------------------------------------
function StorytellingPart() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  // 1. PC 감지 상태
  const [isPc, setIsPc] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsPc(window.innerWidth >= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // [Stage 1] 질문들
  const qOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [0, 1, 0]);
  const qScale = useTransform(scrollYProgress, [0, 0.25], [0.90, 1.05]);
  const qBlur = useTransform(scrollYProgress, [0.2, 0.25], ["0px", "5px"]);

  // [Stage 2] 솔루션 타이틀 ("단순히 입구만...")
  const solOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]); 
  
  // [수정 1] 타이틀 위치: 중앙(0)에서 위로 -280px 이동 (박스 자리 확보)
  const solY = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.85], [50, 0, 0, -160]);
  
  // 크기 애니메이션 (PC일 때만 줄어듦)
  const solScaleAnim = useTransform(scrollYProgress, [0.6, 0.75], [1, 0.85]);
  const solScale = isPc ? solScaleAnim : 1;

  // [Stage 3] 체크리스트 박스
  const detailOpacity = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);
  
  // [수정 2] 박스 위치: 아래(300)에서 중앙(0)으로 이동. 타이틀이 -280으로 갔으니 중앙에 오면 딱 붙음.
  const detailY = useTransform(scrollYProgress, [0.7, 0.85], [300, 0]);
  
  const bgColor = useTransform(scrollYProgress, [0, 0.5], ["#FDFBF7", "#F4F1EB"]);

  return (
    <motion.section ref={containerRef} style={{ backgroundColor: bgColor }} className="relative h-[300vh] w-full">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-6">
        
        {/* 배경 장식 */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           <motion.div style={{ scale: useTransform(scrollYProgress, [0, 1], [0.5, 1.5]), opacity: 0.05 }} className="w-[80vw] h-[80vw] rounded-full border border-[#2E3A30]" />
           <motion.div style={{ scale: useTransform(scrollYProgress, [0, 1], [0.8, 2]), opacity: 0.03 }} className="absolute w-[60vw] h-[60vw] rounded-full border border-[#2E3A30]" />
        </div>

        {/* Stage 1: 질문들 */}
        <motion.div style={{ opacity: qOpacity, scale: qScale, filter: `blur(${qBlur})` }} className="absolute z-10 flex flex-col items-center gap-4 md:gap-6 text-center w-full">
          <div className="w-1 h-12 bg-[#D4C6B5] mb-4 mx-auto" />
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl text-[#2E3A30]/60 italic leading-snug tracking-tight">“이게 정말 <span className="text-[#2E3A30] font-bold">노화</span>일까요?”</h2>
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl text-[#2E3A30]/60 italic leading-snug tracking-tight">“다들 <span className="text-[#2E3A30] font-bold">참고 사는</span> 걸까요?”</h2>
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl text-[#2E3A30]/60 italic leading-snug tracking-tight">“원래 이 정도는 <span className="text-[#2E3A30] font-bold">정상</span>일까요?”</h2>
        </motion.div>

        {/* Stage 2: 솔루션 타이틀 */}
        <motion.div 
          style={{ opacity: solOpacity, y: solY, scale: solScale }} 
          className="absolute z-20 text-center w-full max-w-4xl px-4"
        >
          <span className="block text-[#A89B8C] text-xs font-bold tracking-[0.2em] uppercase mb-4 md:mb-6">The Trinity Solution</span>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-[80px] leading-[1.1] text-[#2E3A30] mb-6 md:mb-8 tracking-tighter break-keep">
            단순히 입구만 좁히는 <br />
            <span className="italic relative inline-block z-10">
              수술이 아닙니다.
              <span className="absolute bottom-2 md:bottom-3 left-0 w-full h-[0.3em] bg-[#D4C6B5]/60 -z-10" />
            </span>
          </h2>
          <p className="font-pretendard text-lg md:text-2xl text-[#5C5C5C] font-light leading-relaxed break-keep">
            <strong className="text-[#2E3A30] font-semibold">넓어진 질과 골반근육의 완벽한 복원.</strong> <br/>
            여성의 잃어버린 자신감을 되찾아 드립니다.
          </p>
        </motion.div>

        {/* Stage 3: 체크리스트 박스 */}
        <motion.div 
          style={{ opacity: detailOpacity, y: detailY }} 
          // [핵심 수정] top-1/2, left-1/2, translate-x/y-1/2를 사용하여 무조건 화면 정중앙에 고정
          className="absolute z-30 top-1/2 center-1/2 translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center bg-white/80 backdrop-blur-md border border-[#EAE8E4] p-6 md:p-8 rounded-3xl shadow-xl">
            <div className="space-y-3 md:space-y-4">
               {["성적 만족도와 기능 개선을 한번에", "골반기저근의 해부학적 복원", "재발 없는 반영구적 효과"].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-3">
                   <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2E3A30] flex items-center justify-center">
                     <Check className="w-3 h-3 text-white" />
                   </div>
                   <span className="font-pretendard text-[#2E3A30] text-base md:text-lg font-medium">{item}</span>
                 </div>
               ))}
            </div>
            <div className="flex justify-start md:justify-end mt-6 md:mt-0">
            <Button 
              // ▼▼▼ [수정] 클릭 시 'consultation' ID를 가진 섹션으로 부드럽게 이동 ▼▼▼
              onClick={() => {
                const section = document.getElementById('consultation');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full md:w-auto h-14 md:h-16 px-8 md:px-10 rounded-full bg-[#2E3A30] text-white hover:bg-[#1A211B] text-lg md:text-xl shadow-lg transition-transform hover:scale-105 font-pretendard"
            >
              1:1 상담 신청하기 <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

// ------------------------------------------------------------------
// [Part 2] Interactive Check Component (기존 유지)
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
    <section className="py-24 md:py-32 bg-[#F9F9F9] relative z-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
           <span className="text-[#3E522D] font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Medical Self-Check</span>
           <h2 className="font-serif text-2xl md:text-5xl font-bold text-[#1A1F16] mb-6">나에게도 <span className="text-[#3E522D] italic">치료</span>가 필요할까요?</h2>
           <p className="font-pretendard text-[#6B7264] text-lg max-w-2xl mx-auto break-keep">
             아래 증상 중 해당하는 항목을 선택해보세요. <br className="hidden md:block"/>
             체크된 항목이 많을수록 전문의와의 상담이 권장됩니다.
           </p>
        </div>

        {/* Card Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {SYMPTOMS_DATA.map((data) => {
            const isSelected = selectedCard === data.id;

            return (
              <motion.div
                key={data.id}
                layout
                onClick={() => setSelectedCard(isSelected ? null : data.id)}
                className={`relative rounded-[2rem] p-6 md:p-8 cursor-pointer transition-all duration-500 border-2 overflow-hidden group
                  ${isSelected 
                    ? "bg-[#2E3A30] border-[#2E3A30] shadow-2xl scale-[1.02] z-10" 
                    : "bg-white border-transparent hover:border-[#D4C6B5] shadow-lg hover:shadow-xl"
                  }`}
              >
                {/* Card Header */}
                <div className="flex flex-col items-start gap-4 md:gap-6 mb-6">
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-colors duration-500
                    ${isSelected ? "bg-[#3E522D] text-white" : "bg-[#F4EBE2] text-[#3E522D]"}`}>
                    <data.icon size={28} className="md:w-8 md:h-8" />
                  </div>
                  <div>
                    <h3 className={`font-serif text-xl md:text-2xl font-bold mb-2 transition-colors duration-500 ${isSelected ? "text-white" : "text-[#1A1F16]"}`}>
                      {data.title}
                    </h3>
                    <p className={`font-pretendard text-sm leading-relaxed transition-colors duration-500 ${isSelected ? "text-[#A89B8C]" : "text-[#6B7264]"}`}>
                      {data.description}
                    </p>
                  </div>
                </div>

                {/* Check List */}
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
                        className={`flex items-start gap-3 p-3 md:p-4 rounded-xl transition-all duration-300 group/item cursor-pointer
                          ${isSelected 
                            ? (isChecked ? "bg-[#3E522D]/50 border border-[#A89B8C]" : "bg-[#1A211B] border border-[#3E522D]/30 hover:bg-[#3E522D]/30")
                            : "bg-[#F9F9F9] border border-transparent hover:bg-[#F4EBE2]"
                          }`}
                      >
                        <div className={`mt-0.5 w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300
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
                  <div className="absolute top-6 right-6 md:top-8 md:right-8 text-[#D4C6B5] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ChevronRight size={24} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Result Action Bar (체크가 하나라도 있으면 등장) */}
        {checkedItems.size > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
          >
            <div className="bg-[#2E3A30] text-white px-6 py-3 md:px-8 md:py-4 rounded-full shadow-2xl flex items-center gap-4 md:gap-6 pointer-events-auto cursor-pointer hover:scale-105 transition-transform">
              <div className="flex flex-col">
                <span className="text-[#A89B8C] text-[10px] md:text-xs font-bold uppercase tracking-wider">Checked Symptoms</span>
                <span className="font-serif text-base md:text-lg">총 <strong className="text-[#C5A065]">{checkedItems.size}</strong>개의 증상이 선택됨</span>
              </div>
              <div className="h-6 w-[1px] bg-white/20" />
              <div className="flex items-center gap-2 font-pretendard font-bold text-sm md:text-base text-[#EAE8E4]">
                전문 상담 예약하기 <ArrowRight size={16} className="md:w-[18px] md:h-[18px]" />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}