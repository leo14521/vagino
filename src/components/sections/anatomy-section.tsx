"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function AnatomySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const gapSize = useTransform(scrollYProgress, [0, 0.8], ["45%", "15%"]);

  const leftWallPath = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "M 0 0 Q 20 50 0 100 Q 20 150 0 200 Q 20 250 0 300 Q 20 350 0 400 Q 20 450 0 500 L -150 500 L -150 0 Z",
      "M 80 0 Q 110 50 80 100 Q 110 150 80 200 Q 110 250 80 300 Q 110 350 80 400 Q 110 450 80 500 L -150 500 L -150 0 Z",
    ]
  );
  const rightWallPath = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "M 0 0 Q -20 50 0 100 Q -20 150 0 200 Q -20 250 0 300 Q -20 350 0 400 Q -20 450 0 500 L 150 500 L 150 0 Z",
      "M -80 0 Q -110 50 -80 100 Q -110 150 -80 200 Q -110 250 -80 300 Q -110 350 -80 400 Q -110 450 -80 500 L 150 500 L 150 0 Z",
    ]
  );

  const wallColor = useTransform(scrollYProgress, [0, 1], ["#E68A8A", "#D15C5C"]);
  const rugaeIntensity = useTransform(scrollYProgress, [0, 1], [0.3, 0.8]);
  const beforeLabelOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const afterLabelOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  const arrowOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const rugaeLineOpacity = useTransform(scrollYProgress, [0.1, 0.8], [0.05, 0.6]);
  const rugaeLineScaleX = useTransform(scrollYProgress, [0, 1], [0.8, 1.1]);
  const beforeCaptionDisplay = useTransform(scrollYProgress, (v) => (v < 0.5 ? "block" : "none"));
  const afterCaptionDisplay = useTransform(scrollYProgress, (v) => (v >= 0.5 ? "block" : "none"));

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#1A1F16]">
      <div className="sticky top-0 left-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden">
        <div className="anatomy-grid-bg pointer-events-none absolute inset-0 opacity-30" aria-hidden />

        <div className="absolute top-24 z-20 w-full px-4 text-center md:top-32">
          <motion.div style={{ opacity: beforeLabelOpacity }} className="absolute left-0 right-0 top-0 text-[#E68A8A]">
            <h2 className="mb-2 text-3xl font-bold md:text-4xl">Before</h2>
            <p className="text-sm opacity-80">이완되어 늘어지고 주름이 얕은 상태</p>
          </motion.div>
          <motion.div style={{ opacity: afterLabelOpacity }} className="absolute left-0 right-0 top-0">
            <h2 className="mb-2 text-3xl font-bold text-[#D15C5C] md:text-4xl">After</h2>
            <p className="text-sm font-bold text-white">탄력 있는 볼륨과 촘촘한 주름 완성</p>
          </motion.div>
        </div>

        <div className="relative mt-10 flex h-[50vh] w-full max-w-5xl items-center justify-center overflow-hidden px-4 md:h-[600px] md:px-8">
          <motion.div
            style={{ backgroundColor: wallColor }}
            className="absolute inset-0 z-0 scale-90 opacity-200 mix-blend-overlay blur-3xl"
          />

          <motion.div className="relative z-10 flex h-full w-[35%] items-center justify-end">
            <svg viewBox="-25 0 100 400" className="absolute right-0 h-full w-full overflow-visible">
              <defs>
                <filter id="rugae-glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feSpecularLighting
                    surfaceScale="5"
                    specularConstant="1"
                    specularExponent="20"
                    lightingColor="#ffffff"
                    in="coloredBlur"
                    result="specular"
                  >
                    <fePointLight x="-50" y="250" z="200" />
                  </feSpecularLighting>
                  <feComposite in="specular" in2="SourceAlpha" operator="in" result="specular" />
                  <feComposite in="SourceGraphic" in2="specular" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
                </filter>
              </defs>
              <motion.path
                d={leftWallPath}
                fill={wallColor}
                stroke="rgba(235, 130, 130, 0.7)"
                strokeWidth="1"
                filter="url(#rugae-glow)"
              />
              <motion.path
                d={leftWallPath}
                fill="none"
                stroke="rgba(0,0,0,0.2)"
                strokeWidth="3"
                style={{ opacity: rugaeIntensity }}
                transform="translate(-2, 0)"
              />
            </svg>
          </motion.div>

          <motion.div
            style={{ width: gapSize }}
            className="relative z-0 mx-1 flex h-full flex-col items-center justify-center overflow-hidden"
          >
            <div className="pointer-events-none flex h-full w-full flex-col justify-around py-12">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  style={{ opacity: rugaeLineOpacity, scaleX: rugaeLineScaleX }}
                  className="h-px w-full bg-gradient-to-r from-transparent via-white/50 to-transparent blur-[0.5px]"
                />
              ))}
            </div>
            <motion.div style={{ opacity: arrowOpacity }} className="absolute flex gap-2 text-white/100">
              <ArrowRight className="h-4 w-4 animate-pulse" aria-hidden />
              <ArrowRight className="h-4 w-4 rotate-180 animate-pulse" aria-hidden />
            </motion.div>
          </motion.div>

          <motion.div className="relative z-10 flex h-full w-[35%] items-center justify-start">
            <svg viewBox="-75 0 100 400" className="absolute left-0 h-full w-full overflow-visible">
              <motion.path
                d={rightWallPath}
                fill={wallColor}
                stroke="rgba(219, 113, 113, 0.2)"
                strokeWidth="1"
                filter="url(#rugae-glow)"
              />
              <motion.path
                d={rightWallPath}
                fill="none"
                stroke="rgba(0,0,0,0.2)"
                strokeWidth="3"
                style={{ opacity: rugaeIntensity }}
                transform="translate(2, 0)"
              />
            </svg>
          </motion.div>
        </div>

        <div className="absolute bottom-10 z-30 w-full max-w-2xl px-6 text-center md:bottom-16">
          <div className="rounded-3xl border border-white/10 bg-black/60 p-6 shadow-2xl backdrop-blur-xl">
            <motion.div style={{ display: beforeCaptionDisplay }}>
              <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#E68A8A]">Step 01. 진단</span>
              <h3 className="mb-1 text-xl font-bold text-white">늘어지고 얕은 주름</h3>
              <p className="text-sm text-white/50">탄력이 떨어져 통로가 넓고 주름이 평평해진 상태입니다.</p>
            </motion.div>

            <motion.div style={{ display: afterCaptionDisplay }}>
              <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#D15C5C]">Step 02. 완성</span>
              <h3 className="mb-1 text-xl font-bold text-white">탄력 있는 볼륨과 깊은 주름</h3>
              <p className="text-sm text-white/50">통로가 좁아지고, 건강하고 촘촘한 엠보싱 주름이 복원되었습니다.</p>
            </motion.div>

            <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-white/5">
              <motion.div
                style={{ scaleX: scrollYProgress }}
                className="h-full origin-left bg-gradient-to-r from-[#E68A8A] to-[#D15C5C]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
