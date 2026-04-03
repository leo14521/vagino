"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SlingMediaPlaceholder } from "./SlingMediaPlaceholder";

/**
 * 히어로: 미니슬링 원리 "받쳐 올린다" — 곡선 하나로 직관·고급스럽게.
 */
export function SlingHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const curveY = useTransform(scrollYProgress, [0, 0.55, 0.85, 1], [980, 480, 400, 380]);
  const dotY = useTransform(scrollYProgress, [0, 0.55, 0.85, 1], [980, 460, 380, 360]);
  const curveOpacity = useTransform(scrollYProgress, [0, 0.15], [0.4, 1]);
  const dotScale = useTransform(scrollYProgress, [0.4, 0.6], [0.92, 1.08]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.2], [0, -32]);
  const completeOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);
  const completeY = useTransform(scrollYProgress, [0.9, 1], [20, 0]);

  const curvePath = useTransform(curveY, (y) => `M -60 480 Q 720 ${y} 1500 480`);
  const curveGlow = useTransform(curveY, (y) => `M -60 495 Q 720 ${y + 25} 1500 495`);

  return (
    <section ref={containerRef} className="relative h-[300vh] z-0">
      <div
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, #FFFCF9 0%, #F8F6F2 45%, #F2EFE9 100%)" }}
      >
        {/* 그리드: 아주 은은하게 */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.6]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(28,32,30,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(28,32,30,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "4rem 4rem",
            maskImage: "linear-gradient(to bottom, black 0%, transparent 58%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 58%)",
          }}
        />

        {/* 타이틀 */}
        <motion.div
          style={{ opacity: titleOpacity, y: titleY }}
          className="relative z-10 flex flex-col items-center text-center px-5 -mt-14 md:-mt-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-6 px-4 py-1.5 rounded-full border border-[#E5E0D8] bg-[#FFFEFC]/90 backdrop-blur-md"
          >
            <span className="text-[10px] font-medium tracking-[0.28em] text-[#8A857B] uppercase">
              Stress Urinary Incontinence
            </span>
          </motion.div>
          <h1 className="flex flex-col items-center font-serif text-[#1C201D] leading-[1.06] tracking-[-0.04em]">
            <span className="!text-[2.75rem] sm:!text-6xl md:!text-[4.25rem] lg:!text-[5rem] font-semibold break-keep">
              요실금,
            </span>
            <span className="mt-4 mb-2 !text-xl sm:!text-2xl md:!text-[1.65rem] font-normal text-[#6B655C] break-keep tracking-[-0.02em]">
              참지 마세요.
            </span>
            <span className="!text-[2.75rem] sm:!text-6xl md:!text-[4.25rem] lg:!text-[5rem] font-semibold break-keep">
              미니슬링<span className="text-[#A39E94]">으로.</span>
            </span>
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="mt-12 flex flex-col items-center gap-1"
          >
            <span className="text-[10px] font-medium tracking-[0.32em] text-[#A39E94] uppercase">
              Scroll
            </span>
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="block w-px h-6 rounded-full bg-[#C8C2B8]"
            />
          </motion.div>
        </motion.div>

        {/* 완료 블록: 인터랙션 이후 등장 */}
        <motion.div
          style={{ opacity: completeOpacity, y: completeY }}
          className="absolute top-[22%] z-20 text-center w-full px-4 pointer-events-none"
        >
          <div className="pointer-events-auto max-w-xl mx-auto">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#252D27] flex items-center justify-center text-white shadow-[0_8px_32px_rgba(37,45,39,0.2)] ring-1 ring-[#252D27]/20 mb-6">
              <CheckCircle2 className="w-6 h-6" strokeWidth={2} />
            </div>
            <h2 className="font-serif text-[1.75rem] md:text-4xl text-[#252D27] mb-2 tracking-[-0.03em]">
              복압에 강한 지지
            </h2>
            <p className="text-[#6B655C] text-[0.9375rem] font-light tracking-[-0.01em] leading-relaxed mb-8">
              기침·재채기 시에도 안심. 최소 침습, 빠른 회복.
            </p>
            <div className="h-px w-12 mx-auto bg-[#E5E0D8] mb-8" />
            <SlingMediaPlaceholder
              variant="image"
              aspectRatio="video"
              title="[이미지 영역]"
              description="요실금 전후 비교 또는 미니슬링 삽입 위치 인포그래픽을 넣으면 좋습니다."
            />
          </div>
        </motion.div>

        {/* 인터랙션: 받쳐 올리는 곡선 — 직관적·고급스러운 한 줄 */}
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 1000"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden
          >
            <defs>
              <linearGradient id="slingCurveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#252D27" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#252D27" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#252D27" stopOpacity="0.2" />
              </linearGradient>
              <filter id="curveGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <motion.path
              d={curveGlow}
              fill="none"
              stroke="url(#slingCurveGrad)"
              strokeWidth="14"
              strokeLinecap="round"
              opacity={curveOpacity}
              style={{ filter: "url(#curveGlow)" }}
            />
            <motion.path
              d={curvePath}
              fill="none"
              stroke="#252D27"
              strokeWidth="2"
              strokeLinecap="round"
              opacity={curveOpacity}
            />
            <motion.circle
              cx="720"
              cy={dotY}
              r="5"
              fill="#C4B896"
              stroke="#FFFEFC"
              strokeWidth="2"
              style={{
                filter: "drop-shadow(0 2px 12px rgba(196,184,150,0.4))",
                scale: dotScale,
              }}
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
