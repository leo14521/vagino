"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// ==============================================
// 1. Hero Section: Sticky Scroll "U-Lift"
// ==============================================
export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 전체 스크롤 영역의 높이를 300vh로 설정하여 애니메이션 재생 시간을 확보
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // [Animation Logic]
  // 스크롤 0% ~ 100% 동안: 곡선이 800(축 처짐) -> 250(팽팽함)으로 이동
  const curveDepth = useTransform(scrollYProgress, [0, 1], [800, 450]);
  
  // 텍스트 투명도 조절 (스크롤 초반에 타이틀 사라짐)
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  // 완료 메시지 등장 (스크롤 후반부에 '복원 완료' 메시지 뜸)
  const completeOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  const completeY = useTransform(scrollYProgress, [0.8, 1], [20, 150]);

  // SVG Path 동적 생성
  const curvePath = useTransform(curveDepth, (depth) => {
    return `M -100 400 Q 720 ${depth} 1540 400`;
  });

  const subCurvePath = useTransform(curveDepth, (depth) => {
    return `M -100 450 Q 720 ${depth + 50} 1540 450`;
  });

  return (
    // [핵심] h-[300vh]: 스크롤 할 거리를 길게 잡아둠 (애니메이션 재생 시간 확보)
    <section ref={containerRef} className="relative h-[300vh] bg-[#FDFBF7]">
      
      {/* [핵심] sticky top-0: 스크롤을 내려도 화면은 고정됨 */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* 배경 그리드 */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2E3A3008_1px,transparent_1px),linear-gradient(to_bottom,#2E3A3008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        {/* 1. 처음 보이는 타이틀 (스크롤 내리면 사라짐) */}
        <motion.div 
          style={{ opacity: titleOpacity, scale: titleScale }}
          className="relative z-10 text-center px-4 -mt-20"
        >
          <div className="inline-block mb-6 px-5 py-2 rounded-full border border-[#D4C6B5] bg-[#FDFBF7]/80 backdrop-blur-md">
            <span className="text-xs font-bold tracking-[0.2em] text-[#A89B8C] uppercase">
              Anatomical Restoration
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-[84px] leading-[1.1] text-[#2E3A30] mb-6 tracking-tight">
            여성의 몸을 <br />
            <span className="italic relative inline-block">
              설계<span className="font-light text-[#A89B8C]">합니다.</span>
            </span>
          </h1>
          
          <p className="text-[#A89B8C] text-sm tracking-widest uppercase mt-8 animate-bounce">
            Scroll Down to Lift
          </p>
        </motion.div>

        {/* 2. 애니메이션 완료 후 나타나는 메시지 */}
        <motion.div 
          style={{ opacity: completeOpacity, y: completeY }}
          className="absolute top-1/3 z-20 text-center"
        >
          <div className="w-16 h-16 mx-auto bg-[#2E3A30] rounded-full flex items-center justify-center text-white mb-6 shadow-xl">
             <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2E3A30] mb-4">
            완벽한 복원
          </h2>
          <p className="text-[#5C5C5C] text-lg">
            해부학적 구조와 기능의 회복
          </p>
        </motion.div>


        {/* --- The U-Lift Curves --- */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <svg className="w-full h-full" viewBox="0 0 1440 1000" preserveAspectRatio="xMidYMid slice">
            {/* Main Elastic Curve */}
            <motion.path 
              d={curvePath}
              fill="none" 
              stroke="#2E3A30" 
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Sub Curve */}
            <motion.path 
              d={subCurvePath}
              fill="none" 
              stroke="#A89B8C" 
              strokeWidth="1.5"
              strokeDasharray="6 6"
              opacity="0.6"
            />
            {/* Central Line */}
            <motion.line 
              x1="720" y1="0" x2="720" y2="1000" 
              stroke="#D4C6B5" 
              strokeWidth="1" 
              opacity="0.3" 
            />
          </svg>

          {/* Target Dot (곡선을 따라 올라감) */}
          <motion.div 
            className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#C5A065] rounded-full shadow-[0_0_20px_rgba(197,160,101,0.8)] border-2 border-white"
            style={{ top: curveDepth }} 
          />
        </div>

      </div>
    </section>
  );
}


// ==============================================
// 2. Insight Section
// ==============================================
export function InsightSection() {
  return (
    <section className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-[#FDFBF7] text-[#2E3A30] z-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left: Text Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8 text-[#2E3A30]">
              트리니티의 수술은 <br/>
              <span className="relative inline-block text-[#2E3A30]">
                기능 회복
                <span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#D4C6B5]/50 -z-10" />
              </span>
              을 기준으로 합니다.
            </h2>
            
            <div className="space-y-6 text-[#5C5C5C] text-lg font-light leading-relaxed mb-10">
              <p>
                <strong className="text-[#2E3A30] font-medium">넓어진 질과 골반근육의 완벽한 복원.</strong><br/>
                단순히 입구만 좁히는 1차원적인 수술이 아닙니다.
              </p>
              <p>
                해부학적 구조에 맞춰 근육의 탄력을 재건하고,<br/> 
                성적 만족도와 여성의 자존감을 동시에 회복합니다.
              </p>
            </div>

            <div className="flex gap-4">
               <Button className="h-14 px-8 rounded-full bg-[#2E3A30] text-white hover:bg-[#1A211B] text-lg shadow-lg shadow-[#2E3A30]/10">
                진료 예약하기
              </Button>
              <Button variant="outline" className="h-14 px-8 rounded-full border-[#2E3A30] text-[#2E3A30] hover:bg-[#2E3A30] hover:text-white text-lg">
                의료진 소개 <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Right: Empathy Cards */}
        <div className="relative">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#D4C6B5]/20 rounded-full blur-3xl" />
          <div className="space-y-4">
             {[
              { text: "이게 정말 노화일까요?", highlight: true },
              { text: "다들 참고 사는 걸까요?", highlight: false },
              { text: "원래 이 정도는 정상일까요?", highlight: false },
             ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className={`p-6 rounded-xl border transition-all duration-300 flex items-center gap-4
                  ${item.highlight 
                    ? "bg-[#2E3A30] border-[#2E3A30] text-white shadow-xl translate-x-[-10px]" 
                    : "bg-white border-[#EAE8E4] text-[#5C5C5C] hover:border-[#A89B8C]"
                  }`}
              >
                {item.highlight ? (
                   <CheckCircle2 className="w-6 h-6 text-[#C5A065]" />
                ) : (
                   <MessageCircle className="w-6 h-6 text-[#D4C6B5]" />
                )}
                <span className={`text-lg font-serif ${item.highlight ? "italic" : ""}`}>
                  "{item.text}"
                </span>
              </motion.div>
             ))}
          </div>
        </div>

      </div>
    </section>
  );
}