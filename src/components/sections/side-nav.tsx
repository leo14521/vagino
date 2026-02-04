"use client";

import { useState, useEffect } from "react";
// react-scroll 라이브러리 필요 (npm install react-scroll)
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

// [수정됨] page.tsx의 실제 섹션 ID와 순서를 정확히 매칭했습니다.
const NAV_ITEMS = [
  { id: "hero", label: "홈" },
  { id: "insight", label: "자가 진단" },
  { id: "comparison", label: "수술 원리" },
  { id: "anatomy", label: "3D 복원" },
  { id: "pain-free", label: "통증 케어" },
  { id: "laser-option", label: "레이저 옵션" }, // 새로 추가된 섹션
  { id: "brand-video", label: "브랜드 필름" },
  { id: "authority", label: "의료진 소개" },
  { id: "review", label: "리얼 후기" },
  { id: "faq", label: "FAQ" },
  { id: "tour", label: "시설 투어" }, // 새로 추가된 섹션
  { id: "consultation", label: "상담 신청" },
];

export function SideNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // 하이드레이션 에러 방지
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Intersection Observer로 현재 보고 있는 섹션 감지
  useEffect(() => {
    if (!isMounted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } // 섹션의 30%가 보이면 활성화
    );

    NAV_ITEMS.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <>
      {/* 1. Desktop Side Navigation (Left Fixed) */}
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-5">
        {/* 가이드 라인 (선) */}
        <div className="absolute left-[7px] top-0 bottom-0 w-[1px] bg-[#1A1F16]/10 -z-10" />

        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <ScrollLink
              key={item.id}
              to={item.id}
              smooth={true}
              duration={800}
              offset={0}
              spy={true}
              className="group flex items-center gap-4 cursor-pointer relative"
              onSetActive={() => setActiveSection(item.id)}
            >
              {/* Dot Indicator */}
              <div 
                className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 relative z-10
                  ${isActive 
                    ? "bg-[#3E522D] border-[#3E522D] scale-100" // 활성 색상 변경 (Dark Green)
                    : "bg-[#FDFBF7] border-[#1A1F16]/20 scale-75 group-hover:border-[#3E522D] group-hover:scale-90"}`}
              />

              {/* Label */}
              <span 
                className={`text-[10px] font-bold tracking-widest uppercase transition-all duration-300 whitespace-nowrap
                  ${isActive 
                    ? "text-[#3E522D] opacity-100 translate-x-0" // 활성 텍스트 색상 변경
                    : "text-[#1A1F16] opacity-0 -translate-x-4 group-hover:opacity-60 group-hover:translate-x-0"}`}
              >
                {item.label}
              </span>
            </ScrollLink>
          );
        })}
      </nav>

      {/* 2. Mobile Navigation (Hamburger Menu) */}
      <div className="lg:hidden fixed top-6 right-6 z-50">
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-3 bg-[#121412]/80 backdrop-blur-md rounded-full border border-white/10 text-white shadow-lg"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-[#121412] flex flex-col items-center justify-center lg:hidden"
          >
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-3 text-white/50 hover:text-white"
            >
              <X className="w-8 h-8" />
            </button>

            <ul className="space-y-6 text-center">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <ScrollLink
                    to={item.id}
                    smooth={true}
                    duration={800}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-xl font-serif font-medium transition-colors cursor-pointer
                      ${activeSection === item.id ? "text-[#C5A065]" : "text-white hover:text-[#C5A065]/60"}`}
                  >
                    {item.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}