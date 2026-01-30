"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export function BrandVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 초기 상태: 소리는 꺼져있고(Muted), 재생 중(Playing)이어야 자동 재생됨
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // 패럴랙스 효과
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // [핵심] 컴포넌트 마운트 시 강제로 영상 재생 시도
  useEffect(() => {
    if (videoRef.current) {
      // 브라우저 정책상 반드시 Muted 상태여야 자동재생됨
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Autoplay prevented:", error);
          // 자동재생 실패 시 (브라우저 차단 등) UI를 정지 상태로 변경
          setIsPlaying(false);
        });
      }
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      // Mute 상태를 토글
      const nextMuteState = !isMuted;
      videoRef.current.muted = nextMuteState;
      setIsMuted(nextMuteState);
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[80vh] md:h-screen bg-[#0A0C0A] overflow-hidden flex items-center justify-center"
    >
      {/* 1. 배경 비디오 */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover opacity-60"
          playsInline // 모바일에서 전체화면 되지 않고 인라인 재생
          autoPlay    // 자동 재생 속성
          muted       // 음소거 속성 (필수)
          loop        // 반복 재생
        >
          {/* 파일 경로 확인: public/videos/brand-film.mp4 */}
          <source src="/videos/brand-film.mp4" type="video/mp4" />
          브라우저가 비디오 태그를 지원하지 않습니다.
        </video>
        
        {/* 비디오 위 오버레이 (텍스트 가독성 확보) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C0A] via-[#0A0C0A]/40 to-[#0A0C0A]/60" />
      </motion.div>


      {/* 2. 콘텐츠 영역 */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 container px-4 md:px-6 text-center"
      >
        <span className="inline-block py-1 px-3 rounded-full border border-[#A89B8C]/30 bg-[#A89B8C]/10 text-[#A89B8C] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-md">
          Trinity Brand Film
        </span>

        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#EAE8E4] leading-tight mb-8">
          10년의 노하우, <br />
          <span className="text-[#A89B8C] italic">결과</span>로 증명합니다.
        </h2>

        <p className="font-sans text-[#EAE8E4]/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          "환자분들이 만족할 수 있는 수술 결과를 약속드립니다." <br className="hidden md:block" />
          체계화된 여성성형 시스템과 숙련된 의료진이 당신의 회복을 설계합니다.
        </p>

        {/* 컨트롤 버튼 그룹 */}
        <div className="flex items-center justify-center gap-6">
          
          {/* Play/Pause Button */}
          <button 
            onClick={togglePlay}
            className="group relative flex items-center justify-center w-20 h-20 rounded-full bg-[#EAE8E4]/10 backdrop-blur-sm border border-[#EAE8E4]/20 hover:bg-[#A89B8C] hover:border-[#A89B8C] transition-all duration-500"
          >
            {/* 버튼 주위로 퍼지는 파동 효과 (재생 중일 때만) */}
            {isPlaying && (
              <span className="absolute inset-0 rounded-full border border-[#EAE8E4]/30 animate-ping opacity-20" />
            )}
            
            {isPlaying ? (
              <Pause className="w-8 h-8 text-[#EAE8E4] fill-current group-hover:text-[#121412]" />
            ) : (
              <Play className="w-8 h-8 text-[#EAE8E4] fill-current ml-1 group-hover:text-[#121412]" />
            )}
          </button>

          {/* Mute Toggle */}
          <button 
            onClick={toggleMute}
            className="flex items-center gap-2 text-[#EAE8E4]/60 hover:text-[#A89B8C] transition-colors text-sm font-medium tracking-wider uppercase group"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            <span className="group-hover:underline underline-offset-4 decoration-[#A89B8C]">
              {isMuted ? "Unmute Sound" : "Mute Sound"}
            </span>
          </button>

        </div>
      </motion.div>

      {/* 3. 하단 스크롤 유도선 */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-b from-[#A89B8C] to-transparent opacity-30" />
    </section>
  );
}