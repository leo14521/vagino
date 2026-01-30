"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// 섹션 정의 (ID는 page.tsx의 id와 일치해야 합니다)
const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "insight", label: "Insight" },
  { id: "comparison", label: "Solution" },
  { id: "anatomy", label: "Anatomy" },
  { id: "pain-free", label: "Pain Free" },
  { id: "brand-video", label: "Brand Film" },
  { id: "authority", label: "Doctors" },
  { id: "review", label: "Reviews" },
  { id: "faq", label: "FAQ" },
  { id: "tour", label: "Facility" }, // 시설 안내 추가됨
  { id: "consultation", label: "Contact" },
];

export function SideNav() {
  const [activeSection, setActiveSection] = useState("");

  // 스크롤 감지 및 활성 섹션 업데이트
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px", // 화면 중앙에 왔을 때 감지
      }
    );

    SECTIONS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // 클릭 시 부드러운 스크롤 이동
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed left-10 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-5 items-start">
      {SECTIONS.map((section) => {
        const isActive = activeSection === section.id;

        return (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group flex items-center gap-3 cursor-pointer outline-none"
            aria-label={`Go to ${section.label}`}
          >
            {/* 1. 도트 (Dot) */}
            <div
              className={cn(
                "transition-all duration-300 ease-in-out order-1", // order-1로 도트 먼저 배치
                isActive
                  ? "w-1.5 h-8 rounded-lg bg-[#3E522D]" // 활성: 길어짐 (Height 30px 느낌)
                  : "w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#3E522D] group-hover:scale-150" // 비활성: 원형
              )}
            />

            {/* 2. 라벨 (Label) */}
            <span
              className={cn(
                "order-2 text-xs font-bold tracking-tight px-2.5 py-1 rounded bg-white/90 text-[#3E522D] shadow-sm whitespace-nowrap transition-all duration-300 transform",
                isActive
                  ? "opacity-100 translate-x-0" // 활성 상태면 항상 보임
                  : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" // 비활성이면 호버시에만 보임
              )}
            >
              {section.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}