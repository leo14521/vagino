"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import {
  BRAND_FILM_VIDEO_SRC,
  CLINIC,
  HERO_BRAND_FILM_LOOP,
  withBasePathOnce,
} from "@/lib/site";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

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
      if (video.currentTime >= end - 0.06) {
        video.currentTime = start;
      }
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
          "transition-opacity duration-700 ease-out opacity-100"
        )}
        autoPlay
        muted
        playsInline
        preload="metadata"
        disablePictureInPicture
      >
        <source src={sources[sourceIndex]} type="video/mp4" />
      </video>
      {/* 왼쪽 카피 가독 / 오른쪽 수술실·의료진 노출 */}
      <div className="absolute inset-0 bg-[#111610]/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#111610]/97 via-[#111610]/82 to-[#111610]/25 sm:via-[#111610]/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111610]/85 via-[#111610]/15 to-[#111610]/40" />
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-[min(100svh,52rem)] items-center overflow-hidden bg-[#111610] text-white">
      <HeroBackgroundVideo />

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_65%_50%_at_12%_35%,rgba(62,82,45,0.32),transparent_62%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8">
        <div className="mx-auto max-w-xl text-center sm:max-w-2xl lg:mx-0 lg:max-w-[34rem] lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease }}
            className="mx-auto inline-flex rounded-full border border-white/15 bg-[#111610]/50 px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-white/90 backdrop-blur-md sm:px-4 sm:text-[12px] lg:mx-0"
          >
            트리니티 여성성형센터
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06, ease }}
            className="mt-6 sm:mt-7 lg:mt-8 [text-shadow:0_2px_28px_rgba(0,0,0,0.55)]"
          >
            <span className="sr-only">강남 트리니티여성의원 질성형수술 이쁜이수술 질축소수술</span>
            <span aria-hidden="true">
              <span className="block text-[clamp(1.75rem,5.8vw,2.65rem)] font-extrabold leading-[1.18] tracking-[-0.04em] text-white sm:leading-[1.14] lg:text-[clamp(2.25rem,3.8vw,3.35rem)] break-keep">
                여성의 몸을,
              </span>
              <span className="mt-1 block text-[clamp(1.85rem,6.2vw,2.85rem)] font-extrabold leading-[1.16] tracking-[-0.04em] sm:mt-1.5 lg:text-[clamp(2.35rem,4.2vw,3.55rem)] break-keep">
                <span className="text-gradient-gold">여성의 관점에서</span>
              </span>
              <span className="mt-1 block text-[clamp(1.75rem,5.8vw,2.65rem)] font-extrabold leading-[1.18] tracking-[-0.04em] text-white sm:mt-1.5 lg:text-[clamp(2.25rem,3.8vw,3.35rem)] break-keep">
                설계합니다.
              </span>
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14, ease }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:mt-9 sm:gap-3 lg:justify-start"
          >
            <Link
              href="#insight"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[#3E522D] px-5 text-[13px] font-extrabold text-white shadow-[0_8px_28px_rgba(62,82,45,0.45)] transition-transform hover:scale-[1.02] hover:bg-[#344625] sm:h-12 sm:px-6 sm:text-sm"
            >
              자가 진단 시작
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a
              href={`tel:${CLINIC.telephoneDisplay}`}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[#C5A065] px-5 text-[13px] font-extrabold text-[#1A1F16] shadow-[0_8px_24px_rgba(197,160,101,0.32)] transition-transform hover:scale-[1.02] hover:bg-[#D4B075] sm:h-12 sm:px-6 sm:text-sm"
              aria-label={`전화 상담 ${CLINIC.telephoneDisplay}`}
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden />
              전화 상담
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t border-white/15 pt-7 text-[11px] font-semibold tracking-wide text-white/55 sm:gap-x-6 sm:text-[12px] lg:justify-start"
          >
            <li>여의사 질성형</li>
            <li className="hidden h-3 w-px bg-white/20 sm:block" aria-hidden />
            <li>당일 퇴원 · 프라이빗 케어</li>
            <li className="hidden h-3 w-px bg-white/20 sm:block" aria-hidden />
            <li>강남구 신사역</li>
          </motion.ul>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-white via-white/75 to-transparent sm:h-28"
        aria-hidden
      />
    </section>
  );
}
