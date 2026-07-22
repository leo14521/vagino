"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  BRAND_FILM_VIDEO_SRC,
  HERO_BRAND_FILM_LOOP,
  withBasePathOnce,
} from "@/lib/site";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

/** 질성형 메인 히어로와 동일한 브랜드 필름 배경 (5~8초 구간 루프) */
function HeroBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [sourceIndex, setSourceIndex] = useState(0);
  const sources = [withBasePathOnce(BRAND_FILM_VIDEO_SRC)];

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReducedMotion(prefersReduced);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;

    const { start, end } = HERO_BRAND_FILM_LOOP;
    let cancelled = false;

    const seekToLoopStart = () => {
      if (cancelled) return;
      try {
        video.currentTime = start;
      } catch {
        /* ignore */
      }
    };
    const onSeeked = () => {
      if (cancelled) return;
      if (video.currentTime < start - 0.5 || video.currentTime > start + 0.5) return;
      void video.play().catch(() => {
        /* autoplay may fail on some browsers */
      });
    };
    const onTimeUpdate = () => {
      if (video.currentTime >= end - 0.06) video.currentTime = start;
    };

    const onError = () => {
      if (cancelled) return;
      setSourceIndex(0);
    };

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.preload = "auto";
    video.src = sources[sourceIndex];

    video.addEventListener("loadedmetadata", seekToLoopStart);
    video.addEventListener("seeked", onSeeked);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("error", onError);
    video.load();

    return () => {
      cancelled = true;
      video.removeEventListener("loadedmetadata", seekToLoopStart);
      video.removeEventListener("seeked", onSeeked);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("error", onError);
    };
  }, [reducedMotion, sourceIndex]);

  if (reducedMotion) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <video
        ref={videoRef}
        key={sources[sourceIndex]}
        className={cn(
          "absolute inset-0 h-full w-full object-cover object-[72%_24%] sm:object-[76%_22%] lg:object-[80%_20%]",
          "transition-opacity duration-700 ease-out opacity-100",
        )}
        autoPlay
        muted
        playsInline
        preload="metadata"
        disablePictureInPicture
      >
        <source src={sources[sourceIndex]} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[#111610]/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#111610]/97 via-[#111610]/82 to-[#111610]/25 sm:via-[#111610]/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111610]/85 via-[#111610]/15 to-[#111610]/40" />
    </div>
  );
}

/** 리턴 14 소음순수술 히어로 (질성형 메인과 동일한 비디오·색감, 텍스트만 소음순) */
export function Return14Hero() {
  return (
    <section
      aria-labelledby="minora-hero-heading"
      className="relative flex min-h-[min(92svh,46rem)] items-center overflow-hidden bg-[#111610] text-white">
      <HeroBackgroundVideo />

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_65%_50%_at_12%_35%,rgba(62,82,45,0.32),transparent_62%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-xl text-center sm:max-w-2xl lg:mx-0 lg:max-w-[38rem] lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease }}
            className="text-[12px] font-bold uppercase tracking-[0.28em] text-[#C5A065] sm:text-[13px]">
            Return 14 · 소음순 성형
          </motion.p>

          <motion.h1
            id="minora-hero-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06, ease }}
            className="mt-5 [text-shadow:0_2px_28px_rgba(0,0,0,0.5)]">
            <span className="block text-[clamp(2rem,6.2vw,2.9rem)] font-extrabold leading-[1.12] tracking-[-0.04em] lg:text-[clamp(2.6rem,4.4vw,3.7rem)]">
              <span className="text-gradient-gold">리턴 14</span>
            </span>
            <span className="mt-1 block text-[clamp(2rem,6.2vw,2.9rem)] font-extrabold leading-[1.12] tracking-[-0.04em] text-white lg:text-[clamp(2.6rem,4.4vw,3.7rem)]">
              소음순수술
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14, ease }}
            className="mx-auto mt-7 max-w-xl text-[15px] leading-relaxed text-white/75 sm:text-base lg:mx-0 break-keep">
            미세레이저와 프리미엄 봉합사로 섬세하게, 수술시간이 아닌 회복시간이 빠른 수술.
            비대·비대칭·착색·쓸림 통증까지, 위쪽 음핵 주름부터 아래쪽 회음부까지 이어지는 전체
            밸런스를 1:1로 맞춥니다.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease }}
            className="mx-auto mt-10 grid max-w-lg gap-5 border-t border-white/15 pt-8 sm:grid-cols-3 lg:mx-0">
            {[
              ["레이저 조각", "미세 레이저 즉시 지혈"],
              ["빠른 회복", "미세봉합사 정교 봉합"],
              ["1:1 디자인", "대칭·색감 맞춤 설계"],
            ].map(([t, d]) => (
              <li key={t} className="border-l-2 border-[#C5A065]/60 pl-4 text-left">
                <p className="text-sm font-bold text-white">{t}</p>
                <p className="mt-1 text-[12px] leading-relaxed text-white/55 break-keep">{d}</p>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-white via-white/70 to-transparent sm:h-28"
        aria-hidden
      />
    </section>
  );
}
