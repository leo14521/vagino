"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

// ==============================================
// 1. Hero Section: 메인 스크롤 애니메이션 (Curve)
// ==============================================
export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const curveDepth = useTransform(scrollYProgress, [0, 1], [1000, 450]);
  const curveDepth2 = useTransform(scrollYProgress, [0, 1], [1000, 350]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.2], [0, -40]);
  const completeOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);
  const completeY = useTransform(scrollYProgress, [0.85, 1], [50, 100]);

  const curvePath = useTransform(curveDepth, (depth) => {
    return `M -100 400 Q 720 ${depth} 1540 400`;
  });

  const subCurvePath = useTransform(curveDepth, (depth) => {
    return `M -100 450 Q 720 ${depth + 50} 1540 450`;
  });

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#FDFBF7] z-0">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* 배경 그리드 */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2E3A3005_1px,transparent_1px),linear-gradient(to_bottom,#2E3A3005_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <motion.div 
          style={{ opacity: titleOpacity, y: titleY }}
          className="relative z-10 flex flex-col items-center text-center px-4 -mt-10 md:-mt-16"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 px-4 py-1.0 rounded-full border border-[#D4C6B5] bg-[#FFFDF9]"
          >
            <span className="text-[11px] font-bold tracking-[0.15em] text-[#8C857B] uppercase">
              Anatomical Restoration
            </span>
          </motion.div>

          <h1 className="flex flex-col items-center font-serif text-[#1F2621] leading-[1.1] tracking-[-0.04em]">
            <span className="!text-4xl sm:!text-6xl md:!text-[80px] font-semibold break-keep">
              여성의 몸을,
            </span>
            <span className="mt-4 mb-2 !text-2xl sm:!text-3xl md:!text-[36px] font-medium text-[#5A544B] break-keep">
              여성의 관점에서
            </span>
            <span className="!text-4xl sm:!text-6xl md:!text-[80px] font-semibold break-keep">
              설계<span className="text-[#9C948A]">합니다.</span>
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-[#A89B8C] text-xs font-medium tracking-[0.3em] uppercase mt-12 animate-pulse"
          >
            Scroll Down
          </motion.p>
        </motion.div>

        <motion.div 
          style={{ opacity: completeOpacity, y: completeY }}
          className="absolute top-2/6 z-20 text-center pointer-events-none"
        >
          <div className="w-16 h-16 mx-auto bg-[#2E3A30] rounded-full flex items-center justify-center text-white mb-6 shadow-xl ring-4 ring-[#FDFBF7]">
             <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-[#2E3A30] mb-4 tracking-[-0.03em]">
            완벽한 탄력 복원
          </h2>
          <p className="text-[#5C5C5C] text-lg font-light tracking-[-0.02em]">
            본래의 아름다움과 기능을 되찾습니다.
          </p>
        </motion.div>

        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <svg className="w-full h-full" viewBox="0 0 1440 1000" preserveAspectRatio="xMidYMid slice">
            <motion.path 
              d={curvePath}
              fill="none" 
              stroke="#2E3A30" 
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <motion.path 
              d={subCurvePath}
              fill="none" 
              stroke="#A89B8C" 
              strokeWidth="2"
              strokeDasharray="4 4"
              opacity="0.4"
            />
            <motion.line 
              x1="720" y1="0" x2="720" y2="1000" 
              stroke="#D4C6B5" 
              strokeWidth="1" 
              opacity="0.2" 
            />
          </svg>
          <motion.div 
            className="absolute left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-[#C5A065] rounded-full shadow-[0_0_15px_rgba(197,160,101,0.9)] border border-[#FDFBF7]"
            style={{ top: curveDepth2 }} 
          />
        </div>
      </div>
    </section>
  );
}