"use client";

import { motion } from "framer-motion";
import { Stethoscope, Scissors, Heart, CheckCircle2 } from "lucide-react";
import { SlingMediaPlaceholder } from "./SlingMediaPlaceholder";

const PROCEDURE_STEPS = [
  {
    number: "01",
    title: "상담·진단",
    subtitle: "Consultation",
    description: "요실금 정도와 원인을 확인하고, 미니슬링 적합 여부를 판단합니다. 기저 질환이 있으면 함께 점검합니다.",
    icon: Stethoscope,
  },
  {
    number: "02",
    title: "수술 (미니슬링)",
    subtitle: "Mini Sling",
    description: "수면 마취 하에 질 내 작은 절개로 슬링을 요도 중간부 아래에 위치시켜 복압 시 요도를 지지합니다.",
    icon: Scissors,
  },
  {
    number: "03",
    title: "회복·퇴원",
    subtitle: "Recovery",
    description: "수술 후 2~4시간 정도 안정을 취한 뒤 당일 퇴원 가능합니다. 1~2주 내 일상 활동을 재개할 수 있습니다.",
    icon: Heart,
  },
  {
    number: "04",
    title: "사후 관리",
    subtitle: "Follow-up",
    description: "정기 검진으로 슬링 위치와 효과를 확인합니다. 무리한 운동·물건 들기는 회복기간 동안 피해 주세요.",
    icon: CheckCircle2,
  },
];

export function SlingProcedureSection() {
  return (
    <section className="py-24 md:py-32 bg-[#F4EBE2]">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[#3E522D] font-bold tracking-[0.2em] text-xs uppercase mb-3 block">
            Procedure
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1A1F16] mb-4">
            미니슬링 수술, <span className="text-[#3E522D]">어떻게</span> 진행되나요?
          </h2>
          <p className="font-pretendard text-[#6B7264] text-lg max-w-2xl mx-auto">
            상담부터 퇴원·사후관리까지, 트리니티만의 체계적인 프로세스입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {PROCEDURE_STEPS.map((step, idx) => {
            const StepIcon = step.icon;
            return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-[#E5E0D8] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#2E3A30] flex items-center justify-center text-white">
                  <StepIcon className="w-7 h-7 md:w-8 md:h-8" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[#A89B8C] text-xs font-bold tracking-widest">{step.number}</span>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-[#1A1F16] mt-1 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[#3E522D] text-sm font-medium mb-3">{step.subtitle}</p>
                  <p className="font-pretendard text-[#6B7264] text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <SlingMediaPlaceholder
            variant="image"
            aspectRatio="video"
            title="[수술 과정 이미지 1]"
            description="미니슬링 수술 단계(삽입 위치, 절개 부위)를 보여주는 의료 일러스트 또는 3D 해부도. 상담·진단 → 수술 → 퇴원 흐름 중 ‘수술’ 단계 시각 자료로 활용 가능합니다."
          />
          <SlingMediaPlaceholder
            variant="video"
            aspectRatio="video"
            title="[수술 과정 영상]"
            description="수술 과정 소개용 짧은 영상(1~2분) 또는 의료진 인터뷰·시설 영상을 넣으면 좋습니다. 실제 수술 영상 대신 애니메이션/인포그래픽 영상도 적합합니다."
          />
        </div>
      </div>
    </section>
  );
}
