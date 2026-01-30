"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { NAVIGATION_LINKS, SITE_CONFIG } from "@/lib/constants";

export function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 스크롤 감지 로직
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50 && !isScrolled) setIsScrolled(true);
    else if (latest <= 50 && isScrolled) setIsScrolled(false);
  });

  // 모바일 메뉴 열림 시 Body 스크롤 잠금
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled || isMobileMenuOpen // 모바일 메뉴가 열렸을 때도 배경색 유지 (가독성 위함)
          ? "bg-white/90 backdrop-blur-md border-b border-[#3E522D]/10 py-3 shadow-sm"
          : "bg-transparent py-6"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container px-4 md:px-6 flex items-center justify-between">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2 group z-50 relative">
          <div className="w-8 h-8 bg-[#3E522D] rounded-full flex items-center justify-center text-white font-serif font-bold text-xl group-hover:scale-110 transition-transform">
            T
          </div>
          <span
            className={cn(
              "font-serif text-xl font-bold tracking-tight transition-colors",
              isScrolled || isMobileMenuOpen ? "text-[#3E522D]" : "text-[#3E522D]"
            )}
          >
            {SITE_CONFIG.name}
          </span>
        </Link>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:flex items-center gap-8">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-[#1A1F16]/80 hover:text-[#3E522D] transition-colors hover:underline underline-offset-4"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* 우측 버튼 (데스크탑) */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden lg:flex text-[#3E522D] hover:text-[#3E522D]/80 hover:bg-[#3E522D]/10">
            로그인
          </Button>
          <Button variant="default" size="sm" className="rounded-full px-6 bg-[#3E522D] hover:bg-[#2A381E] text-white">
            상담 예약하기
          </Button>
        </div>

        {/* 모바일 햄버거 버튼 */}
        <button
          className="md:hidden p-2 text-[#3E522D] z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <Menu />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* 모바일 메뉴 오버레이 */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 md:hidden h-screen"
            // 모바일 메뉴가 헤더 높이만큼 아래에서 시작하지 않고 전체를 덮되 헤더 내용은 z-index로 위에 띄움
            style={{ top: 0 }} 
          >
            <div className="flex flex-col items-center gap-6 w-full px-8">
              {NAVIGATION_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-2xl font-serif font-bold text-[#1A1F16] hover:text-[#3E522D] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="w-full px-8 flex flex-col gap-4 mt-4"
            >
              <Button 
                className="w-full rounded-full py-6 text-lg bg-[#3E522D] hover:bg-[#2A381E] text-white" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                상담 예약하기
              </Button>
              <Button 
                variant="ghost" 
                className="w-full py-4 text-[#3E522D] hover:bg-[#3E522D]/10" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                로그인
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}