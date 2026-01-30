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

  // --- [애니메이션 변수: 이미지 12 -> 13 완벽 재현] ---

  // 1. 통로 너비: 넓은 상태(Before) -> 좁고 탄탄한 상태(After)
  const gapSize = useTransform(scrollYProgress, [0, 0.8], ["45%", "15%"]);
  
  // 2. 벽 형태(Path): 올록볼록한 주름이 있는 점막 형태
  // Before: 주름이 얕고 넓게 퍼진 형태 (이미지 12 기반)
  // After: 주름이 깊고 촘촘하게 조여진 형태 (이미지 13 기반)
  const leftWallPath = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "M 0 0 Q 20 50 0 100 Q 20 150 0 200 Q 20 250 0 300 Q 20 350 0 400 Q 20 450 0 500 L -150 500 L -150 0 Z", 
      "M 80 0 Q 110 50 80 100 Q 110 150 80 200 Q 110 250 80 300 Q 110 350 80 400 Q 110 450 80 500 L -150 500 L -150 0 Z" 
    ]
  );
  const rightWallPath = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "M 0 0 Q -20 50 0 100 Q -20 150 0 200 Q -20 250 0 300 Q -20 350 0 400 Q -20 450 0 500 L 150 500 L 150 0 Z", 
      "M -80 0 Q -110 50 -80 100 Q -110 150 -80 200 Q -110 250 -80 300 Q -110 350 -80 400 Q -110 450 -80 500 L 150 500 L 150 0 Z" 
    ]
  );

  // 3. 색상 변화: 이미지에서 추출한 리얼 점막 컬러
  // Before: 선명한 핑크빛 점막 (이미지 12)
  // After: 더 진하고 탄력 있는 붉은색 점막 (이미지 13)
  const wallColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#E68A8A", "#D15C5C"] // 이미지 기반 핑크 -> 진한 레드
  );

  // 4. 주름(Rugae) 하이라이트 및 그림자 강도
  const rugaeIntensity = useTransform(scrollYProgress, [0, 1], [0.3, 0.8]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#1A1F16]">
      
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">
        
        {/* [배경] 어두운 그리드 */}
        <div className="absolute inset-0 opacity-30 pointer-events-none" 
             style={{ 
               backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
               backgroundSize: '0.5px 0.5px' 
             }} 
        />

        {/* [텍스트] 상단 상태 표시 */}
        <div className="absolute top-24 md:top-32 z-20 text-center w-full px-4">
          <motion.div style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0]) }} className="absolute left-0 right-0 top-0 text-[#E68A8A]">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-2">Before</h2>
            <p className="text-sm opacity-80">이완되어 늘어지고 주름이 얕은 상태</p>
          </motion.div>
          <motion.div style={{ opacity: useTransform(scrollYProgress, [0.5, 1], [0, 1]) }} className="absolute left-0 right-0 top-0">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-2 text-[#D15C5C]">After</h2>
            <p className="text-sm font-bold text-white">탄력 있는 볼륨과 촘촘한 주름 완성</p>
          </motion.div>
        </div>

        {/* [메인 시뮬레이션] */}
        <div className="relative w-full max-w-5xl h-[50vh] md:h-[600px] flex items-center justify-center px-4 md:px-8 mt-10 overflow-hidden">
          
          {/* 통로 안쪽 배경색 (깊이감 표현) */}
          <motion.div 
            style={{ backgroundColor: wallColor }}
            className="absolute inset-0 z-0 opacity-200 blur-3xl scale-90 mix-blend-overlay"
          />

          {/* 왼쪽 점막 벽 (SVG) */}
          <motion.div className="h-full relative flex items-center justify-end z-10" style={{ width: "35%" }}>
            <svg viewBox="-25 0 100 400" className="h-full w-full absolute right-0 overflow-visible">
              <defs>
                {/* 주름 입체감을 위한 필터 */}
                <filter id="rugae-glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feSpecularLighting surfaceScale="5" specularConstant="1" specularExponent="20" lightingColor="#ffffff" in="coloredBlur" result="specular">
                    <fePointLight x="-50" y="250" z="200" />
                  </feSpecularLighting>
                  <feComposite in="specular" in2="SourceAlpha" operator="in" result="specular"/>
                  <feComposite in="SourceGraphic" in2="specular" operator="arithmetic" k1="0" k2="1" k3="1" k4="0"/>
                </filter>
              </defs>
              
              {/* 점막 형태 및 색상 */}
              <motion.path 
                d={leftWallPath} 
                fill={wallColor} 
                stroke="rgba(235, 130, 130, 0.7)"
                strokeWidth="1"
                filter="url(#rugae-glow)"
              />
              
              {/* 주름 그림자 강조 레이어 */}
              <motion.path d={leftWallPath} fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="3" style={{ opacity: rugaeIntensity }} transform="translate(-2, 0)" />
            </svg>
          </motion.div>

          {/* 중앙 통로 */}
         {/* 중앙 통로 (수정된 부분) */}
<motion.div 
  style={{ width: gapSize }} 
  // ★ border-x를 삭제해서 세로줄을 없앴습니다.
  className="h-full flex flex-col items-center justify-center relative mx-1 z-0 overflow-hidden"
>
  {/* ★ 가로 주름(Rugae) 레이어 추가 */}
  <div className="w-full h-full flex flex-col justify-around py-12 pointer-events-none">
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        style={{
          // 스크롤에 따라 주름이 점점 선명해지고 쫀득하게 변함
          opacity: useTransform(scrollYProgress, [0.1, 0.8], [0.05, 0.6]),
          scaleX: useTransform(scrollYProgress, [0, 1], [0.8, 1.1]),
        }}
        // 하얀 빛이 도는 가로선 (가운데가 밝고 양끝이 퍼지는 그라데이션)
        className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent blur-[0.5px]"
      />
    ))}
  </div>

  {/* 기존 화살표 (선택사항: 가로줄과 겹쳐서 지저분하면 삭제하셔도 됩니다) */}
  <motion.div 
    style={{ opacity: useTransform(scrollYProgress, [0, 0.8], [1, 0]) }} 
    className="absolute flex gap-2 text-white/100"
  >
    <ArrowRight className="animate-pulse w-4 h-4" />
    <ArrowRight className="rotate-180 animate-pulse w-4 h-4" />
  </motion.div>
</motion.div>

          {/* 오른쪽 점막 벽 (SVG) */}
          <motion.div className="h-full relative flex items-center justify-start z-10" style={{ width: "35%" }}>
            <svg viewBox="-75 0 100 400" className="h-full w-full absolute left-0 overflow-visible">
              <motion.path 
                d={rightWallPath} 
                fill={wallColor} 
                stroke="rgba(219, 113, 113, 0.2)"
                strokeWidth="1"
                filter="url(#rugae-glow)"
              />
               <motion.path d={rightWallPath} fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="3" style={{ opacity: rugaeIntensity }} transform="translate(2, 0)" />
            </svg>
          </motion.div>

        </div>

        {/* [하단] 텍스트 설명 (자막) */}
        <div className="absolute bottom-10 md:bottom-16 w-full max-w-2xl px-6 text-center z-30">
          <div className="bg-black/60 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-2xl">
            <motion.div style={{ display: useTransform(scrollYProgress, (v) => v < 0.5 ? "block" : "none") }}>
              <span className="text-[#E68A8A] text-xs font-bold uppercase tracking-widest mb-2 block">Step 01. 진단</span>
              <h3 className="text-xl font-bold text-white mb-1">늘어지고 얕은 주름</h3>
              <p className="text-white/50 text-sm">탄력이 떨어져 통로가 넓고 주름이 평평해진 상태입니다.</p>
            </motion.div>
            
            <motion.div style={{ display: useTransform(scrollYProgress, (v) => v >= 0.5 ? "block" : "none") }}>
              <span className="text-[#D15C5C] text-xs font-bold uppercase tracking-widest mb-2 block">Step 02. 완성</span>
              <h3 className="text-xl font-bold text-white mb-1">탄력 있는 볼륨과 깊은 주름</h3>
              <p className="text-white/50 text-sm">통로가 좁아지고, 건강하고 촘촘한 엠보싱 주름이 복원되었습니다.</p>
            </motion.div>

            <div className="w-full h-1 bg-white/5 mt-6 rounded-full overflow-hidden">
               <motion.div style={{ scaleX: scrollYProgress }} className="h-full bg-gradient-to-r from-[#E68A8A] to-[#D15C5C] origin-left" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}