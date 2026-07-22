"use client";

import { useRef, useState, useEffect } from "react";
import { BRAND_FILM_VIDEO_SRC, withBasePathOnce } from "@/lib/site";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export function BrandVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
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
      const nextMuteState = !isMuted;
      videoRef.current.muted = nextMuteState;
      setIsMuted(nextMuteState);
    }
  };

  return (
    <section className="relative flex h-[80vh] w-full items-center justify-center overflow-hidden bg-[#0A0C0A] md:h-screen">
      <div className="absolute inset-0 h-full w-full">
        <video
          ref={videoRef}
          className="h-full w-full object-cover opacity-60"
          playsInline
          autoPlay
          muted
          loop
        >
          <source src={withBasePathOnce(BRAND_FILM_VIDEO_SRC)} type="video/mp4" />
          브라우저가 비디오 태그를 지원하지 않습니다.
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C0A] via-[#0A0C0A]/40 to-[#0A0C0A]/60" />
      </div>

      <div className="relative z-10 container px-4 text-center md:px-6">
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
      </div>

      <div className="absolute bottom-10 left-1/2 h-16 w-px -translate-x-1/2 bg-gradient-to-b from-[#A89B8C] to-transparent opacity-30" />
    </section>
  );
}