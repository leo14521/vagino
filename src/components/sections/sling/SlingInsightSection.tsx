"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check, ArrowRight, Droplets, Activity, AlertCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SlingMediaPlaceholder } from "./SlingMediaPlaceholder";

const SLING_SYMPTOMS_DATA = [
  {
    id: "stress-1",
    title: "복압성 요실금",
    description: "기침, 재채기, 웃음, 운동 시 배에 힘이 들어갈 때 소변이 새는 증상입니다.",
    icon: Droplets,
    checkpoints: [
      "기침·재채기할 때 소변이 샌다",
      "웃거나 뛸 때 조금씩 새는 느낌",
      "운동(달리기, 점프) 시 불편하다",
      "출산 후부터 증상이 생겼다"
    ]
  },
  {
    id: "stress-2",
    title: "일상 제한",
    description: "패드 착용, 화장실 위치 확인 등 일상이 요실금에 맞춰져 있습니다.",
    icon: Activity,
    checkpoints: [
      "외출 시 패드를 항상 착용한다",
      "화장실이 없는 곳은 피하게 된다",
      "물을 줄이거나 참는 습관이 생겼다",
      "운동이나 여행을 포기한 적이 있다"
    ]
  },
  {
    id: "stress-3",
    title: "심리적 부담",
    description: "누수 냄새나 옷 번짐에 대한 걱정으로 자신감이 떨어집니다.",
    icon: AlertCircle,
    checkpoints: [
      "냄새가 날까 봐 걱정된다",
      "옷이 젖는 게 보일까 불안하다",
      "친구·동료와의 모임을 피한다",
      "오래 참다 보면 방광염이 잦다"
    ]
  }
];

function StorytellingPart() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const [isPc, setIsPc] = useState(false);

  useEffect(() => {
    const check = () => setIsPc(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const qOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [0, 1, 0]);
  const qScale = useTransform(scrollYProgress, [0, 0.25], [0.9, 1.05]);
  const qBlur = useTransform(scrollYProgress, [0.2, 0.25], ["0px", "5px"]);
  const solOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const solY = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.85], [50, 0, 0, -160]);
  const solScaleAnim = useTransform(scrollYProgress, [0.6, 0.75], [1, 0.85]);
  const solScale = isPc ? solScaleAnim : 1;
  const detailOpacity = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);
  const detailY = useTransform(scrollYProgress, [0.7, 0.85], [300, 0]);
  const bgColor = useTransform(scrollYProgress, [0, 0.5], ["#FDFBF7", "#F4F1EB"]);

  return (
    <motion.section ref={containerRef} style={{ backgroundColor: bgColor }} className="relative h-[300vh] w-full">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div style={{ scale: useTransform(scrollYProgress, [0, 1], [0.5, 1.5]), opacity: 0.05 }} className="w-[80vw] h-[80vw] rounded-full border border-[#2E3A30]" />
          <motion.div style={{ scale: useTransform(scrollYProgress, [0, 1], [0.8, 2]), opacity: 0.03 }} className="absolute w-[60vw] h-[60vw] rounded-full border border-[#2E3A30]" />
        </div>

        <motion.div style={{ opacity: qOpacity, scale: qScale, filter: `blur(${qBlur})` }} className="absolute z-10 flex flex-col items-center gap-4 md:gap-6 text-center w-full">
          <div className="w-1 h-12 bg-[#D4C6B5] mb-4 mx-auto" />
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl text-[#2E3A30]/60 italic leading-snug tracking-tight">
            &ldquo;나만 <span className="text-[#2E3A30] font-bold">그런 걸까</span>요?&rdquo;
          </h2>
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl text-[#2E3A30]/60 italic leading-snug tracking-tight">
            &ldquo;나이 들어서 <span className="text-[#2E3A30] font-bold">당연한 건가</span>요?&rdquo;
          </h2>
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl text-[#2E3A30]/60 italic leading-snug tracking-tight">
            &ldquo;수술 없이 <span className="text-[#2E3A30] font-bold">참아야 할까</span>요?&rdquo;
          </h2>
        </motion.div>

        <motion.div style={{ opacity: solOpacity, y: solY, scale: solScale }} className="absolute z-20 text-center w-full max-w-4xl px-4">
          <span className="block text-[#A89B8C] text-xs font-bold tracking-[0.2em] uppercase mb-4 md:mb-6">The Trinity Solution</span>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-[80px] leading-[1.1] text-[#2E3A30] mb-6 md:mb-8 tracking-tighter break-keep">
            참지 마세요.
            <br />
            <span className="italic relative inline-block z-10">
              미니슬링으로 해결합니다.
              <span className="absolute bottom-2 md:bottom-3 left-0 w-full h-[0.3em] bg-[#D4C6B5]/60 -z-10" />
            </span>
          </h2>
          <p className="font-pretendard text-lg md:text-2xl text-[#5C5C5C] font-light leading-relaxed break-keep">
            <strong className="text-[#2E3A30] font-semibold">최소 침습 미니슬링 수술.</strong>
            <br />
            짧은 수술 시간, 당일 퇴원, 빠른 회복으로 일상을 되찾아 드립니다.
          </p>
        </motion.div>

        <motion.div
          style={{ opacity: detailOpacity, y: detailY }}
          className="absolute z-30 inset-0 flex items-center justify-center px-4 pointer-events-none"
        >
          <div className="pointer-events-auto w-full max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center bg-white/80 backdrop-blur-md border border-[#EAE8E4] p-6 md:p-8 rounded-3xl shadow-xl">
            <div className="space-y-3 md:space-y-4">
              {["요실금 전용 미니슬링, 30분 내외 수술", "절개 최소화로 당일 퇴원 가능", "복압성 요실금에 효과적"].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2E3A30] flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="font-pretendard text-[#2E3A30] text-base md:text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-start md:justify-end mt-6 md:mt-0">
              <Button
                onClick={() => document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full md:w-auto h-14 md:h-16 px-8 md:px-10 rounded-full bg-[#2E3A30] text-white hover:bg-[#1A211B] text-lg md:text-xl shadow-lg transition-transform hover:scale-105 font-pretendard"
              >
                1:1 상담 신청하기 <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

function InteractiveCheckPart() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleCheck = (item: string) => {
    const next = new Set(checkedItems);
    if (next.has(item)) next.delete(item);
    else next.add(item);
    setCheckedItems(next);
  };

  return (
    <section className="py-24 md:py-32 bg-[#F9F9F9] relative z-20 overflow-hidden">
      <style jsx global>{`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
        .font-pretendard { font-family: 'Pretendard', sans-serif; }
      `}</style>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[#3E522D] font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Medical Self-Check</span>
          <h2 className="font-serif text-2xl md:text-5xl font-bold text-[#1A1F16] mb-6">
            요실금 증상, <span className="text-[#3E522D] italic">나에게도</span> 해당할까요?
          </h2>
          <p className="font-pretendard text-[#6B7264] text-lg max-w-2xl mx-auto break-keep">
            아래 증상 중 해당하는 항목을 선택해보세요. 체크가 많을수록 전문의 상담을 권장합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {SLING_SYMPTOMS_DATA.map((data) => {
            const isSelected = selectedCard === data.id;
            return (
              <motion.div
                key={data.id}
                layout
                onClick={() => setSelectedCard(isSelected ? null : data.id)}
                className={`relative rounded-[2rem] p-6 md:p-8 cursor-pointer transition-all duration-500 border-2 overflow-hidden group
                  ${isSelected ? "bg-[#2E3A30] border-[#2E3A30] shadow-2xl scale-[1.02] z-10" : "bg-white border-transparent hover:border-[#D4C6B5] shadow-lg hover:shadow-xl"}`}
              >
                <div className="flex flex-col items-start gap-4 md:gap-6 mb-6">
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-colors duration-500 ${isSelected ? "bg-[#3E522D] text-white" : "bg-[#F4EBE2] text-[#3E522D]"}`}>
                    <data.icon size={28} className="md:w-8 md:h-8" />
                  </div>
                  <div>
                    <h3 className={`font-serif text-xl md:text-2xl font-bold mb-2 transition-colors duration-500 ${isSelected ? "text-white" : "text-[#1A1F16]"}`}>
                      {data.title}
                    </h3>
                    <p className={`font-pretendard text-sm leading-relaxed transition-colors duration-500 ${isSelected ? "text-[#A89B8C]" : "text-[#6B7264]"}`}>
                      {data.description}
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {data.checkpoints.map((point, idx) => {
                    const isChecked = checkedItems.has(point);
                    return (
                      <div
                        key={idx}
                        onClick={(e) => { e.stopPropagation(); toggleCheck(point); }}
                        className={`flex items-start gap-3 p-3 md:p-4 rounded-xl transition-all duration-300 cursor-pointer
                          ${isSelected ? (isChecked ? "bg-[#3E522D]/50 border border-[#A89B8C]" : "bg-[#1A211B] border border-[#3E522D]/30 hover:bg-[#3E522D]/30") : "bg-[#F9F9F9] border border-transparent hover:bg-[#F4EBE2]"}`}
                      >
                        <div className={`mt-0.5 w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300
                          ${isChecked ? "bg-[#C5A065] border-[#C5A065] text-white" : isSelected ? "border-[#A89B8C] text-transparent" : "border-[#D4C6B5] text-transparent"}`}>
                          <Check size={12} strokeWidth={4} />
                        </div>
                        <span className={`font-pretendard text-sm font-medium transition-colors duration-300 ${isSelected ? "text-[#EAE8E4]" : "text-[#333]"}`}>
                          {point}
                        </span>
                      </div>
                    );
                  })}
                </div>
                {!isSelected && (
                  <div className="absolute top-6 right-6 md:top-8 md:right-8 text-[#D4C6B5] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ChevronRight size={24} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 md:mt-20">
          <SlingMediaPlaceholder
            variant="video"
            aspectRatio="video"
            title="[영상 또는 이미지 영역]"
            description="요실금 증상·원인을 설명하는 30~60초 짧은 영상, 또는 복압성 요실금 발생 원인(골반근·요도 등)을 보여주는 인포그래픽/일러스트를 넣으면 좋습니다. 병원 유튜브 링크 삽입도 가능합니다."
          />
        </div>

        {checkedItems.size > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
          >
            <button
              onClick={() => document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-[#2E3A30] text-white px-6 py-3 md:px-8 md:py-4 rounded-full shadow-2xl flex items-center gap-4 md:gap-6 pointer-events-auto cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="flex flex-col">
                <span className="text-[#A89B8C] text-[10px] md:text-xs font-bold uppercase tracking-wider">Checked Symptoms</span>
                <span className="font-serif text-base md:text-lg">총 <strong className="text-[#C5A065]">{checkedItems.size}</strong>개 선택됨</span>
              </div>
              <span className="font-pretendard font-bold text-sm md:text-base text-[#EAE8E4] flex items-center gap-2">
                상담 예약하기 <ArrowRight size={16} className="md:w-[18px] md:h-[18px]" />
              </span>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export function SlingInsightSection() {
  return (
    <div className="flex flex-col w-full font-pretendard">
      <StorytellingPart />
      <InteractiveCheckPart />
    </div>
  );
}
