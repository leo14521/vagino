"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils"; // utils 파일이 없다면 생략하고 className에 직접 작성 가능

// 투어 단계 데이터 (내용 수정은 여기서 하세요)
// src/components/home/FacilityTour.tsx 내부 수정

const TOUR_STEPS = [
  {
    id: 1,
    title: "병원 입구",
    desc: "트리니티에 오신 것을 환영합니다.\n들어오시는 순간부터 청결하고 쾌적한 환경을 약속드립니다.",
    label: "01. Entrance",
    // 👇 점(.)을 빼고 /images/... 로 수정했습니다.
    imgSrc: "/images/tour-entrance.webp", 
    fallbackSrc: "https://images.unsplash.com/photo-1519494080410-4f1e3ee27fa2"
  },
  {
    id: 2,
    title: "안내 데스크",
    desc: "전문 코디네이터의 안내로 대기 시간을 최소화합니다.\n예약 확인부터 접수까지 빠르고 친절하게 도와드립니다.",
    label: "02. Reception",
    imgSrc: "/images/tour-desk.webp",
    fallbackSrc: "https://images.unsplash.com/photo-1504439468489-c8920d796a29"
  },
  {
    id: 3,
    title: "전용 대기실",
    desc: "진료를 기다리는 시간조차 휴식이 되도록,\n넓은 좌석과 따뜻한 조명으로 안락함을 더했습니다.",
    label: "03. Lounge",
    imgSrc: "/images/tour-lounge.webp",
    fallbackSrc: "https://images.unsplash.com/photo-1600607686527-6fb886090705"
  },
  {
    id: 4,
    title: "심층 진료실",
    desc: "단순한 문진을 넘어 환자의 삶을 이해하는 공간입니다.\n1:1 프라이빗 공간에서 깊이 있는 상담이 이루어집니다.",
    label: "04. Consulting Room",
    imgSrc: "/images/tour-consult.webp",
    fallbackSrc: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133"
  },
  {
    id: 5,
    title: "정밀 초음파실",
    desc: "대학병원급 하이엔드 장비로 병변을 입체적으로 분석합니다.\n모니터를 함께 보며 현재 상태를 명확히 설명해 드립니다.",
    label: "05. Ultra-Sound",
    imgSrc: "/images/tour-ultra.webp",
    fallbackSrc: "https://images.unsplash.com/photo-1579684385127-1ef15d508118"
  },
  {
    id: 6,
    title: "VIP 회복실",
    desc: "시술 후 호텔급 침구에서 편안하게 휴식을 취하세요.\n전담 간호사가 퇴원 시까지 세심하게 케어합니다.",
    label: "06. Recovery Room",
    imgSrc: "/images/tour-recovery.webp",
    fallbackSrc: "https://images.unsplash.com/photo-1512918760513-95f192972701"
  },
];

export function FacilityTour() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="tour" className="bg-[#FDFCFB] relative border-t border-[#E9E4DB]/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        
        {/* 섹션 헤더 */}
        <div className="mb-20 lg:mb-32 text-center">
          <span className="text-[#3E522D] font-bold tracking-[0.3em] text-[11px] uppercase mb-4 block">
            Facility Tour
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1F16] font-serif leading-tight">
            공간이 주는 <span className="italic text-[#3E522D]">위로와 안식</span>
          </h2>
          <p className="text-[#6B7264] mt-6 font-medium text-[17px] max-w-xl mx-auto break-keep">
            트리니티의 모든 공간은 환자분의 동선을 최우선으로 배려하여 설계되었습니다.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* [Left Column] Sticky Images (Desktop Only) */}
          <div className="lg:w-1/2 lg:block hidden sticky top-32 h-fit self-start">
            <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-[#E9E4DB] bg-[#EAE8E4]">
              {TOUR_STEPS.map((step, index) => (
                <div
                  key={step.id}
                  className={cn(
                    "absolute inset-0 w-full h-full transition-all duration-1000 ease-[cubic-bezier(0.2,1,0.3,1)]",
                    activeStep === index ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  )}
                >
                  {/* 이미지 필터 스타일 적용 */}
                  <img
                    src={step.imgSrc}
                    alt={step.title}
                    className="w-full h-full object-cover brightness-[1.03] contrast-[1.05] saturate-[0.85] sepia-[0.15]"
                    onError={(e) => (e.currentTarget.src = step.fallbackSrc)}
                  />
                  
                  {/* 하단 라벨 (활성화되었을 때만 보임) */}
                  <div className={cn(
                    "absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-8 flex justify-between items-end transition-opacity duration-700",
                    activeStep === index ? "opacity-100" : "opacity-0"
                  )}>
                    <span className="text-white font-bold text-lg tracking-wider font-serif italic">
                      {step.label}
                    </span>
                    <div className="h-[1px] w-12 bg-white/50 mb-2" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* [Right Column] Scrollable Text Steps */}
          <div className="lg:w-1/2 flex flex-col gap-[10vh] lg:gap-[40vh] py-10 lg:pl-10 border-l border-[#3E522D]/10 relative">
            
            {/* 세로 진행 라인 (Desktop only) */}
            <div className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#3E522D] via-[#3E522D]/30 to-transparent z-10 hidden lg:block" />

            {TOUR_STEPS.map((step, index) => (
              <TourStepItem
                key={step.id}
                step={step}
                index={index}
                isActive={activeStep === index}
                onInView={setActiveStep}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// 개별 스텝 컴포넌트 (InView 감지 로직 분리)
function TourStepItem({ 
  step, 
  index, 
  isActive, 
  onInView 
}: { 
  step: typeof TOUR_STEPS[0], 
  index: number, 
  isActive: boolean, 
  onInView: (idx: number) => void 
}) {
  const ref = useRef(null);
  // 화면의 50% 지점에 왔을 때 감지 (margin: -50% ...)
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      onInView(index);
    }
  }, [isInView, index, onInView]);

  return (
    <div
      ref={ref}
      className={cn(
        "tour-step transition-all duration-500 pl-6 lg:pl-0",
        isActive ? "opacity-100 lg:translate-x-0" : "lg:opacity-30 lg:translate-x-4" // 모바일은 항상 잘보이게, 데스크탑은 흐리게
      )}
    >
      {/* Mobile Image (Inline) */}
      <div className="lg:hidden mb-6 rounded-[1.5rem] overflow-hidden shadow-lg aspect-[4/3]">
        <img
          src={step.imgSrc}
          alt={step.title}
          className="w-full h-full object-cover brightness-[1.03] contrast-[1.05] saturate-[0.85] sepia-[0.15]"
          onError={(e) => (e.currentTarget.src = step.fallbackSrc)}
        />
      </div>

      <span className="text-[#3E522D] font-bold text-xs uppercase tracking-widest mb-3 block">
        Step 0{index + 1}
      </span>
      <h3 className="text-2xl md:text-3xl font-bold text-[#1A1F16] mb-4 font-serif">
        {step.title}
      </h3>
      <p className="text-[#555D4E] text-base md:text-lg leading-relaxed whitespace-pre-line">
        {step.desc}
      </p>
    </div>
  );
}