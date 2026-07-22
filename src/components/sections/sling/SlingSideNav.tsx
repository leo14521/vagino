"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const SLING_NAV_ITEMS = [
  { id: "hero", label: "홈" },
  { id: "insight", label: "자가 진단" },
  { id: "comparison", label: "미니슬링 vs 일반" },
  { id: "procedure", label: "수술 과정" },
  { id: "faq", label: "FAQ" },
  { id: "consultation", label: "상담 신청" },
];

export function SlingSideNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    SLING_NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <>
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-5">
        <div className="absolute left-[7px] top-0 bottom-0 w-[1px] bg-[#1A1F16]/10 -z-10" />
        {SLING_NAV_ITEMS.map((item) => {
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
              <div
                className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 relative z-10
                  ${isActive ? "bg-[#3E522D] border-[#3E522D] scale-100" : "bg-[#FDFBF7] border-[#1A1F16]/20 scale-75 group-hover:border-[#3E522D] group-hover:scale-90"}`}
              />
              <span
                className={`text-[10px] font-bold tracking-widest uppercase transition-all duration-300 whitespace-nowrap
                  ${isActive ? "text-[#3E522D] opacity-100 translate-x-0" : "text-[#1A1F16] opacity-0 -translate-x-4 group-hover:opacity-60 group-hover:translate-x-0"}`}
              >
                {item.label}
              </span>
            </ScrollLink>
          );
        })}
      </nav>

      <div className="lg:hidden fixed top-6 right-6 z-50 flex items-center gap-3">
        <Link
          href="/menu3-1/"
          className="text-[10px] font-bold text-[#3E522D] uppercase tracking-wider"
        >
          질성형
        </Link>
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
              {SLING_NAV_ITEMS.map((item) => (
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
              <li>
                <Link
                  href="/menu3-1/"
                  className="text-lg text-white/60 hover:text-[#C5A065]"
                >
                  질성형 수술 페이지 →
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
