"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const AEO_BLOCKS = [
  {
    id: "why",
    title: "질성형수술·이쁜이수술·질축소수술이 필요한 이유",
    paragraphs: [
      "출산, 노화, 호르몬 변화로 질 점막이 늘어지고 골반기저근이 약해지면 질 이완증이 나타날 수 있습니다. 성관계 만족도 저하, 요실금, 방광염·질염 반복, 바람 빠지는 느낌 등이 일상에 영향을 줄 때 질성형수술(이쁜이수술)을 고려합니다.",
      "단순 미용을 넘어 골반 장기 탈출증 예방과 기능적 여성 건강 회복이 목적입니다. 여의사 전문의 1:1 상담으로 수술 적응 여부를 판단합니다.",
    ],
  },
  {
    id: "principle",
    title: "트리니티 3중 복원 질성형수술의 원리",
    paragraphs: [
      "늘어진 질 점막을 정밀 접합하고 약해진 골반기저근·질 근육층을 함께 복원합니다. 점막만 조이는 단순 시술과 달리 근육·점막·지지 구조를 단계적으로 재건해 탄력과 촘촘한 주름을 회복합니다.",
      "수술 시간은 보통 30~60분, 수면마취 또는 국소마취 후 당일 퇴원이 가능합니다. 초음파 등으로 상태를 확인한 뒤 개인 해부 구조에 맞춘 맞춤 설계를 진행합니다.",
    ],
  },
  {
    id: "difference",
    title: "타 병원과의 차별점 및 부작용 예방",
    paragraphs: [
      "대학병원·전문병원 출신 여의사 2인이 직접 집도하며, 통증·출혈 최소화 프로토콜과 수면마취 전문의 협진을 적용합니다. 당일 퇴원 데이케어와 프라이빗 회복실로 외부 노출을 줄입니다.",
      "과도한 절제·비대칭·감각 저하·출혈·감염 예방을 위해 정밀 봉합과 무균 수술 환경을 유지합니다. 질성형재수술이 필요한 경우 원인 분석 후 단계적 복원 계획을 수립합니다.",
    ],
  },
  {
    id: "recovery",
    title: "질축소수술 후 관리 및 회복 기간",
    paragraphs: [
      "수술 직후 1~2주는 무리한 활동·성관계·탕 목욕을 피하고, 처방 소염제·연고를 꾸준히 사용합니다. 많은 분들이 수술 당일부터 가벼운 일상 활동이 가능하며, 완전한 조직 안정은 보통 4~6주(금욕 기간) 후로 판단합니다.",
      "정기 추적 진료로 회복을 확인하고, 퇴원 후 1:1 케어 코디네이터가 관리 방법을 안내합니다. 내원 횟수는 보통 1~2회입니다.",
    ],
  },
] as const;

export function WomenAeoSection() {
  const [openId, setOpenId] = useState<string | null>("why");

  return (
    <section
      id="women-seo-guide"
      className="scroll-mt-28 border-t border-[#E9E4DB]/60 bg-[#FDFBF7] py-20 lg:py-24"
      aria-labelledby="women-aeo-heading"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#3E522D]">
            Clinical Guide
          </p>
          <h2
            id="women-aeo-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-[#1A1F16] sm:text-3xl break-keep"
          >
            강남 질성형수술 · 이쁜이수술 · 질축소수술 상세 안내
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-[#5A6354] break-keep">
            트리니티여성의원의 3중 복원 질성형에 대해 자주 찾는 정보를 정리했습니다.
          </p>
        </header>

        <article className="space-y-3">
          {AEO_BLOCKS.map((block) => {
            const isOpen = openId === block.id;

            return (
              <div
                key={block.id}
                className="overflow-hidden rounded-2xl border border-[#E9E4DB] bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : block.id)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-base font-bold text-[#1A1F16] sm:text-lg break-keep">
                    {block.title}
                  </h3>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-[#3E522D] transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                    aria-hidden
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-4 border-t border-[#E9E4DB]/80 px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5">
                        {block.paragraphs.map((paragraph, i) => (
                          <p
                            key={i}
                            className="text-[15px] leading-[1.75] text-[#4A5248] break-keep"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}
