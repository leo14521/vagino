"use client";

import { useState } from "react";
import { Check, ArrowRight, HeartOff, Droplets, AlertCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SYMPTOMS_DATA = [
  {
    id: "check-1",
    title: "관계 시 불편함",
    description: "질 근육 이완으로 인한 마찰력 감소는 본인과 파트너 모두의 만족도를 저하시킵니다.",
    icon: HeartOff,
    checkpoints: [
      "관계 중 민망한 소리(질방귀)가 난다",
      "예전과 달리 헐거운 느낌이 든다",
      "성감이 둔화되어 관계를 피하게 된다",
      "출산 후 조임이 예전 같지 않다",
    ],
  },
  {
    id: "check-2",
    title: "일상생활 불편함",
    description: "넓어진 질 입구는 목욕탕 이용이나 운동 시 불편함을 초래하며 자신감을 떨어뜨립니다.",
    icon: Droplets,
    checkpoints: [
      "탕 목욕 후 물이 흐르는 느낌이 든다",
      "밑이 빠지는 듯한 묵직한 불쾌감",
      "뛰거나 웃을 때 소변이 샌다 (요실금)",
      "요가/필라테스 동작 시 불편하다",
    ],
  },
  {
    id: "check-3",
    title: "여성 질환 재발",
    description: "개방된 질 입구는 외부 세균 침입을 용이하게 하여 만성적인 여성 질환의 원인이 됩니다.",
    icon: AlertCircle,
    checkpoints: [
      "질염이 자주 재발한다",
      "질 건조증이 심해졌다",
      "만성적인 분비물 증가",
      "방광염이 자주 동반된다",
    ],
  },
];

export function InsightSection() {
  return (
    <div className="flex w-full flex-col">
      <StorytellingPart />
      <InteractiveCheckPart />
    </div>
  );
}

function StorytellingPart() {
  return (
    <section className="w-full bg-[#F4F1EB]">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center md:py-20">
        <div className="mx-auto mb-8 h-12 w-px bg-[#D4C6B5]" />
        <div className="space-y-4 md:space-y-5">
          <h2 className="text-2xl font-bold leading-snug tracking-tight text-[#2E3A30]/70 md:text-4xl">
            “이게 정말 <span className="text-[#2E3A30]">노화</span>일까요?”
          </h2>
          <h2 className="text-2xl font-bold leading-snug tracking-tight text-[#2E3A30]/70 md:text-4xl">
            “다들 <span className="text-[#2E3A30]">참고 사는</span> 걸까요?”
          </h2>
          <h2 className="text-2xl font-bold leading-snug tracking-tight text-[#2E3A30]/70 md:text-4xl">
            “원래 이 정도는 <span className="text-[#2E3A30]">정상</span>일까요?”
          </h2>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 pb-12 text-center md:pb-16">
        <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#A89B8C]">
          The Trinity Solution
        </span>
        <h2 className="mb-6 text-3xl font-extrabold leading-[1.15] tracking-tight text-[#2E3A30] md:text-5xl break-keep">
          단순히 입구만 좁히는
          <br />
          수술이 아닙니다.
        </h2>
        <p className="text-lg font-medium leading-relaxed text-[#5C5C5C] md:text-xl break-keep">
          <strong className="font-bold text-[#2E3A30]">넓어진 질과 골반근육의 완벽한 복원.</strong>
          <br />
          여성의 잃어버린 자신감을 되찾아 드립니다.
        </p>
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-16 md:pb-20">
        <div className="grid grid-cols-1 items-center gap-6 rounded-3xl border border-[#EAE8E4] bg-white p-6 shadow-lg md:grid-cols-2 md:gap-8 md:p-8">
          <div className="space-y-3 md:space-y-4">
            {["성적 만족도와 기능 개선을 한번에", "골반기저근의 해부학적 복원", "재발 없는 반영구적 효과"].map(
              (item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2E3A30]">
                    <Check className="h-3 w-3 text-white" aria-hidden />
                  </div>
                  <span className="text-base font-semibold text-[#2E3A30] md:text-lg">{item}</span>
                </div>
              )
            )}
          </div>
          <div className="flex justify-start md:justify-end">
            <Button
              onClick={() => document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" })}
              className="h-14 w-full rounded-full bg-[#2E3A30] px-8 text-lg font-bold text-white hover:bg-[#1A211B] md:h-16 md:w-auto md:px-10 md:text-xl"
            >
              1:1 상담 신청하기 <ArrowRight className="ml-2 h-5 w-5" aria-hidden />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function InteractiveCheckPart() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleCheck = (item: string) => {
    const newSet = new Set(checkedItems);
    if (newSet.has(item)) newSet.delete(item);
    else newSet.add(item);
    setCheckedItems(newSet);
  };

  return (
    <section className="relative z-20 overflow-hidden bg-[#F9F9F9] py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center md:mb-20">
          <span className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-[#3E522D]">
            Medical Self-Check
          </span>
          <h2 className="mb-6 text-2xl font-extrabold text-[#1A1F16] md:text-5xl">
            나에게도 <span className="text-[#3E522D]">치료</span>가 필요할까요?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#6B7264] break-keep">
            아래 증상 중 해당하는 항목을 선택해보세요.
            <br className="hidden md:block" />
            체크된 항목이 많을수록 전문의와의 상담이 권장됩니다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {SYMPTOMS_DATA.map((data) => {
            const isSelected = selectedCard === data.id;
            return (
              <div
                key={data.id}
                onClick={() => setSelectedCard(isSelected ? null : data.id)}
                className={`group relative cursor-pointer overflow-hidden rounded-[2rem] border-2 p-6 transition-colors md:p-8 ${
                  isSelected
                    ? "z-10 border-[#2E3A30] bg-[#2E3A30] shadow-2xl"
                    : "border-transparent bg-white shadow-lg hover:border-[#D4C6B5] hover:shadow-xl"
                }`}
              >
                <div className="mb-6 flex flex-col items-start gap-4 md:gap-6">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl md:h-16 md:w-16 ${
                      isSelected ? "bg-[#3E522D] text-white" : "bg-[#F4EBE2] text-[#3E522D]"
                    }`}
                  >
                    <data.icon size={28} className="md:h-8 md:w-8" aria-hidden />
                  </div>
                  <div>
                    <h3 className={`mb-2 text-xl font-bold md:text-2xl ${isSelected ? "text-white" : "text-[#1A1F16]"}`}>
                      {data.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${isSelected ? "text-[#A89B8C]" : "text-[#6B7264]"}`}>
                      {data.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {data.checkpoints.map((point) => {
                    const isChecked = checkedItems.has(point);
                    return (
                      <div
                        key={point}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCheck(point);
                        }}
                        className={`flex cursor-pointer items-start gap-3 rounded-xl p-3 md:p-4 ${
                          isSelected
                            ? isChecked
                              ? "border border-[#A89B8C] bg-[#3E522D]/50"
                              : "border border-[#3E522D]/30 bg-[#1A211B] hover:bg-[#3E522D]/30"
                            : "border border-transparent bg-[#F9F9F9] hover:bg-[#F4EBE2]"
                        }`}
                      >
                        <div
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                            isChecked ? "border-[#C5A065] bg-[#C5A065] text-white" : "border-[#D4C6B5] text-transparent"
                          }`}
                        >
                          <Check size={12} strokeWidth={4} aria-hidden />
                        </div>
                        <span className={`text-sm font-medium ${isSelected ? "text-[#EAE8E4]" : "text-[#333]"}`}>
                          {point}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {!isSelected && (
                  <div className="absolute right-6 top-6 text-[#D4C6B5] opacity-0 transition-opacity group-hover:opacity-100 md:right-8 md:top-8">
                    <ChevronRight size={24} aria-hidden />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {checkedItems.size > 0 && (
          <div className="pointer-events-none fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4">
            <div className="pointer-events-auto flex cursor-pointer items-center gap-4 rounded-full bg-[#2E3A30] px-6 py-3 text-white shadow-2xl md:gap-6 md:px-8 md:py-4">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#A89B8C] md:text-xs">
                  Checked Symptoms
                </span>
                <span className="text-base font-bold md:text-lg">
                  총 <strong className="text-[#C5A065]">{checkedItems.size}</strong>개의 증상이 선택됨
                </span>
              </div>
              <div className="h-6 w-px bg-white/20" />
              <div className="flex items-center gap-2 text-sm font-bold text-[#EAE8E4] md:text-base">
                전문 상담 예약하기 <ArrowRight size={16} className="md:h-[18px] md:w-[18px]" aria-hidden />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
