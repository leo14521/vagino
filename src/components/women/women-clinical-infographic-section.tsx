"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Check,
  Clock,
  Heart,
  Home,
  Sparkles,
  Syringe,
  UserCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  WOMEN_ANATOMY_IMAGES,
  WOMEN_SURGERY_CANDIDATES,
  WOMEN_SURGERY_DEFINITION,
  WOMEN_SURGERY_EFFECTS,
  WOMEN_SURGERY_FACTS,
  WOMEN_SURGERY_FEATURES,
  WOMEN_SURGERY_SEO_ALT,
} from "@/data/women-seo-content";

const FACT_ICONS = {
  clock: Clock,
  syringe: Syringe,
  home: Home,
  calendar: Calendar,
  heart: Heart,
} as const;

const TABS = [
  { id: "about", label: "수술이란", icon: Sparkles },
  { id: "who", label: "추천대상", icon: UserCheck },
  { id: "effect", label: "효과", icon: Heart },
  { id: "points", label: "특징", icon: Check },
] as const;

type TabId = (typeof TABS)[number]["id"];

const ANATOMY_CALLOUTS = {
  before: {
    badge: "Before",
    title: "이완·늘어짐",
    points: ["질벽 간격이 넓어짐", "골반기저근 지지력 저하"],
    tone: "text-[#8B6B6B] bg-[#F8F2F2] border-[#E8D8D8]",
    bar: "w-full max-w-[88px]",
  },
  after: {
    badge: "After",
    title: "수축·탄력 복원",
    points: ["질벽이 촘촘하게 수축", "골반기저 지지력 회복"],
    tone: "text-[#3E522D] bg-[#F0F4EE] border-[#D4DFD0]",
    bar: "w-full max-w-[52px]",
  },
} as const;

function VaginalWidthDiagram({ side }: { side: "before" | "after" }) {
  const data = ANATOMY_CALLOUTS[side];
  const isBefore = side === "before";

  return (
    <div className="flex flex-col items-center gap-1.5" aria-hidden>
      <div className="relative flex h-14 w-[100px] items-center justify-center sm:h-16 sm:w-[110px]">
        <div
          className={cn(
            "rounded-full border-2",
            isBefore ? "h-12 w-[88px] border-[#D4B8B8] bg-[#FAF5F5]" : "h-12 w-[88px] border-[#B8C9B0] bg-[#F5F8F3]"
          )}
        />
        <div
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full",
            isBefore ? "h-9 w-7 bg-[#C9A0A0]/45" : "h-9 w-3.5 bg-[#6B8F5E]/50"
          )}
        />
      </div>
      <div
        className={cn(
          "h-1 rounded-full bg-current opacity-40",
          data.bar,
          isBefore ? "text-[#C9A0A0]" : "text-[#6B8F5E]"
        )}
      />
      <p className="text-[10px] font-semibold text-[#5A6354] sm:text-[11px]">
        {isBefore ? "질강 폭 · 넓음" : "질강 폭 · 좁아짐"}
      </p>
    </div>
  );
}

function AnatomyPanel({
  side,
  compact,
  priority,
}: {
  side: "before" | "after";
  compact?: boolean;
  priority?: boolean;
}) {
  const img = WOMEN_ANATOMY_IMAGES[side];
  const callout = ANATOMY_CALLOUTS[side];

  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <div className="overflow-hidden rounded-xl bg-[#1A2B1F]">
        <Image
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
          className="h-auto w-full object-contain"
          sizes={compact ? "45vw" : "(max-width: 640px) 45vw, 320px"}
          priority={priority}
        />
      </div>
      <div className={cn("mt-2.5 rounded-xl border px-3 py-2.5 sm:mt-3 sm:px-4 sm:py-3", callout.tone)}>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-extrabold uppercase tracking-wider opacity-70">
            {callout.badge}
          </span>
          <span className="text-[12px] font-bold sm:text-[13px]">{callout.title}</span>
        </div>
        <ul className="mt-1.5 space-y-0.5">
          {callout.points.map((point) => (
            <li key={point} className="flex items-start gap-1.5 text-[11px] leading-snug sm:text-[12px]">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-current opacity-50" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function AnatomyComparison({
  variant = "full",
  className,
}: {
  variant?: "full" | "compact";
  className?: string;
}) {
  const isCompact = variant === "compact";

  return (
    <figure
      className={cn(
        "overflow-hidden rounded-2xl border border-[#E9E4DB] bg-white p-3 shadow-md sm:p-4",
        isCompact && "rounded-xl shadow-sm p-2.5 sm:p-3",
        className
      )}
    >
      <div className={cn("grid grid-cols-2 gap-2 sm:gap-4", isCompact && "gap-2")}>
        <AnatomyPanel side="before" compact={isCompact} priority={!isCompact} />
        <AnatomyPanel side="after" compact={isCompact} />
      </div>

      <div
        className={cn(
          "mt-3 grid grid-cols-2 gap-2 rounded-xl border border-[#E9E4DB] bg-[#F4F5F0] px-3 py-3 sm:mt-4 sm:gap-4 sm:px-5 sm:py-4",
          isCompact && "mt-2.5 px-2 py-2.5"
        )}
      >
        <VaginalWidthDiagram side="before" />
        <VaginalWidthDiagram side="after" />
      </div>

      <figcaption
        className={cn(
          "mt-3 text-center text-[11px] leading-relaxed text-[#5A6354] sm:mt-4 sm:text-xs",
          isCompact && "mt-2.5 text-[10px]"
        )}
      >
        질성형수술은 늘어진 질 점막·이완된 근육을 수축·봉합하여 질강 폭을 줄이고 골반기저 지지력을
        회복합니다.
      </figcaption>
    </figure>
  );
}

function FactStrip() {
  return (
    <div className="-mx-4 overflow-x-auto px-4 pb-1 scrollbar-none sm:mx-0 sm:px-0">
      <ul className="flex min-w-min gap-2 sm:grid sm:min-w-0 sm:grid-cols-5 sm:gap-3">
        {WOMEN_SURGERY_FACTS.map((fact) => {
          const Icon = FACT_ICONS[fact.icon];
          return (
            <li
              key={fact.label}
              className="flex w-[5.5rem] shrink-0 flex-col items-center rounded-2xl border border-[#E9E4DB] bg-white px-3 py-3 text-center shadow-sm sm:w-auto sm:px-4 sm:py-4"
            >
              <Icon className="mb-1.5 h-4 w-4 text-[#3E522D]" aria-hidden />
              <span className="text-[10px] font-bold text-[#A89B8C]">{fact.label}</span>
              <span className="mt-0.5 text-[13px] font-extrabold leading-tight text-[#1A1F16] break-keep">
                {fact.value}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function TabPanel({ tab }: { tab: TabId }) {
  if (tab === "about") {
    return (
      <div className="space-y-4">
        <div className="space-y-3 text-[14px] leading-[1.75] text-[#4A5248] sm:text-[15px] break-keep">
          {WOMEN_SURGERY_DEFINITION.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <p className="rounded-xl bg-[#3E522D]/8 px-4 py-3 text-[13px] font-medium text-[#3E522D] break-keep">
          질성형수술 · 이쁜이수술 · 질축소수술은 표현만 다를 뿐, 늘어진 질 점막과
          골반기저근을 복원하는 동일 계열의 여성 성형수술을 가리키는 경우가 많습니다.
        </p>
      </div>
    );
  }

  if (tab === "who") {
    return (
      <ul className="space-y-2.5">
        {WOMEN_SURGERY_CANDIDATES.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 rounded-xl border border-[#E9E4DB] bg-white px-4 py-3.5 shadow-sm"
          >
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3E522D]">
              <Check className="h-3 w-3 text-white" strokeWidth={3} aria-hidden />
            </span>
            <span className="text-[14px] font-medium leading-snug text-[#1A1F16] break-keep">
              {item}
            </span>
          </li>
        ))}
      </ul>
    );
  }

  if (tab === "effect") {
    return (
      <div className="space-y-4">
        <AnatomyComparison variant="compact" />
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
          {WOMEN_SURGERY_EFFECTS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#E9E4DB] bg-white p-4 shadow-sm"
            >
              <h4 className="text-[14px] font-bold text-[#3E522D] break-keep">{item.title}</h4>
              <p className="mt-1 text-[12px] leading-relaxed text-[#5A6354] break-keep">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="-mx-1 overflow-x-auto px-1 pb-1 scrollbar-none sm:mx-0 sm:overflow-visible sm:px-0">
      <ol className="flex min-w-min snap-x snap-mandatory gap-2.5 sm:grid sm:min-w-0 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
        {WOMEN_SURGERY_FEATURES.map((feature) => (
          <li
            key={feature.no}
            className="w-[9.5rem] shrink-0 snap-start rounded-2xl border border-[#E9E4DB] bg-white p-4 shadow-sm sm:w-auto"
          >
            <span className="text-[11px] font-bold text-[#3E522D]/60">{feature.no}</span>
            <h4 className="mt-1 text-[13px] font-bold leading-snug text-[#1A1F16] break-keep">
              {feature.title}
            </h4>
            <p className="mt-1.5 text-[12px] leading-relaxed text-[#5A6354] break-keep">
              {feature.desc}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function WomenClinicalInfographicSection() {
  const [activeTab, setActiveTab] = useState<TabId>("about");

  return (
    <section
      id="surgery-guide"
      className="scroll-mt-28 border-t border-[#E9E4DB]/60 bg-[#F4F5F0] py-14 sm:py-20"
      aria-labelledby="surgery-guide-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:max-w-4xl sm:px-6 lg:max-w-5xl lg:px-8">
        <header className="mb-6 text-center sm:mb-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#3E522D] sm:text-[11px]">
            Clinical Guide
          </p>
          <h2
            id="surgery-guide-heading"
            className="mt-2 text-xl font-bold tracking-tight text-[#1A1F16] sm:text-2xl lg:text-3xl break-keep"
          >
            {WOMEN_SURGERY_DEFINITION.lead}
            <span className="mt-1 block text-[#3E522D]">{WOMEN_SURGERY_DEFINITION.title}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-[13px] leading-relaxed text-[#5A6354] sm:text-[14px] break-keep">
            {WOMEN_SURGERY_DEFINITION.aliases.join(" · ")} — 강남 트리니티여성의원
          </p>
        </header>

        <AnatomyComparison className="mb-6 sm:mb-8" />

        <FactStrip />

        <div className="mt-6 sm:mt-8">
          <div
            role="tablist"
            aria-label="질성형수술 안내"
            className="-mx-4 flex gap-1.5 overflow-x-auto px-4 pb-1 scrollbar-none sm:mx-0 sm:px-0"
          >
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`surgery-panel-${tab.id}`}
                  id={`surgery-tab-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "inline-flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-[12px] font-bold transition-all sm:px-4 sm:text-[13px]",
                    isActive
                      ? "bg-[#3E522D] text-white shadow-md"
                      : "bg-white text-[#5A6354] ring-1 ring-[#E9E4DB] hover:ring-[#3E522D]/30"
                  )}
                >
                  <Icon className="h-3.5 w-3.5" aria-hidden />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="mt-4 rounded-2xl border border-[#E9E4DB]/80 bg-[#FDFBF7] p-4 sm:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                id={`surgery-panel-${activeTab}`}
                role="tabpanel"
                aria-labelledby={`surgery-tab-${activeTab}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <TabPanel tab={activeTab} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <p className="sr-only">{WOMEN_SURGERY_SEO_ALT}</p>
      </div>
    </section>
  );
}
