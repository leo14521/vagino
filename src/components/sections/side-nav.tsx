"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { scroller } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

/** 공유·북마크용 절대 URL (Netlify 기본값, 로컬은 .env로 덮어쓰기 가능) */
const SITE_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://trinityrejuve.netlify.app";

// page.tsx·푸터의 실제 id와 순서 일치
const NAV_ITEMS = [
  { id: "hero", label: "홈" },
  { id: "insight", label: "자가 진단" },
  { id: "comparison", label: "수술 원리" },
  { id: "anatomy", label: "3D 복원" },
  { id: "pain-free", label: "통증 케어" },
  { id: "laser-link", label: "레이저 옵션" },
  { id: "brand-video", label: "브랜드 필름" },
  { id: "doctors", label: "의료진 소개" },
  { id: "review", label: "리얼 후기" },
  { id: "faq", label: "FAQ" },
  { id: "tour", label: "시설 투어" },
  { id: "consultation", label: "상담 신청" },
  { id: "hours", label: "진료시간" },
  { id: "location", label: "오시는길" },
] as const;

type NavId = (typeof NAV_ITEMS)[number]["id"];

function canonicalHref(id: NavId) {
  return `${SITE_ORIGIN}/#${id}`;
}

export function SideNav() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const isHome = pathname === "/";

  const scrollToSection = useCallback((id: NavId) => {
    scroller.scrollTo(id, {
      duration: 800,
      smooth: true,
      offset: 0,
    });
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${id}`);
    }
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: NavId) => {
      if (isHome) {
        e.preventDefault();
        scrollToSection(id);
      }
      /* 그 외 경로(/sling 등)는 기본 동작으로 SITE_ORIGIN/#id 이동 */
    },
    [isHome, scrollToSection]
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
      { threshold: 0.3 }
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
      {/* Desktop: 라벨 항상 표시(확장된 내비) */}
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-5">
        <div className="absolute left-[7px] top-0 bottom-0 w-[1px] bg-[#1A1F16]/10 -z-10" />

        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={canonicalHref(item.id)}
              title={canonicalHref(item.id)}
              onClick={(e) => handleNavClick(e, item.id)}
              className="group flex items-center gap-4 cursor-pointer relative"
            >
              <div
                className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 relative z-10
                  ${
                    isActive
                      ? "bg-[#3E522D] border-[#3E522D] scale-100"
                      : "bg-[#FDFBF7] border-[#1A1F16]/20 scale-75 group-hover:border-[#3E522D] group-hover:scale-90"
                  }`}
              />

              <span
                className={`text-[10px] font-bold tracking-widest uppercase transition-all duration-300 whitespace-nowrap
                  ${
                    isActive
                      ? "text-[#3E522D]"
                      : "text-[#1A1F16]/55 group-hover:text-[#3E522D]/80"
                  }`}
              >
                {item.label}
              </span>
            </a>
          );
        })}
      </nav>

      <div className="lg:hidden fixed top-6 right-6 z-50">
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-3 bg-[#121412]/80 backdrop-blur-md rounded-full border border-white/10 text-white shadow-lg"
          aria-label="메뉴 열기"
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
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-3 text-white/50 hover:text-white"
              aria-label="메뉴 닫기"
            >
              <X className="w-8 h-8" />
            </button>

            <ul className="space-y-6 text-center max-h-[80vh] overflow-y-auto px-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={canonicalHref(item.id)}
                    title={canonicalHref(item.id)}
                    onClick={(e) => {
                      handleNavClick(e, item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-xl font-serif font-medium transition-colors cursor-pointer block
                      ${
                        activeSection === item.id
                          ? "text-[#C5A065]"
                          : "text-white hover:text-[#C5A065]/60"
                      }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
