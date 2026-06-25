"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { createPortal } from "react-dom";
import { useCallback, useEffect, useId, useMemo, useState } from "react";
import { ExternalLink, Menu, Phone, X } from "lucide-react";
import { TrinityBrandLogo } from "@/components/brand/trinity-brand-logo";
import { PERINEUM_ROUTES } from "@/lib/site";
import { cn } from "@/lib/utils";

const TRINITY_OFFICIAL = "https://www.trinityclinic.co.kr/";
const TRINITY_RFA = "https://trinityrfa.netlify.app/";

export function SiteHeader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const menuId = useId();

  const isVaginal = pathname === "/women" || pathname === "/";
  const isLaser = pathname === "/laser";
  const perineumTab = useMemo(() => {
    if (!pathname.startsWith("/perineum")) return null;
    const raw = searchParams.get("tab");
    if (raw === "minora" || raw === "laser" || raw === "whiten") return raw;
    return "labia";
  }, [pathname, searchParams]);
  const isLabia = perineumTab === "labia";
  const isMinora = perineumTab === "minora";

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    closeMobile();
  }, [pathname, closeMobile]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen, closeMobile]);

  const navPill = (active: boolean) =>
    cn(
      "shrink-0 whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-bold transition-colors md:px-3.5 md:py-2 md:text-[13px]",
      active
        ? "bg-[#3E522D] text-white"
        : "text-[#555D4E] hover:bg-[#F1F4ED] hover:text-[#3E522D]"
    );

  const mobileNavRow = (active: boolean) =>
    cn(
      "flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold transition-colors",
      active ? "bg-[#3E522D] text-white" : "bg-[#F5F2EC] text-[#1A1F16] hover:bg-[#EDE9E0]"
    );

  const mobileDrawer =
    mounted && mobileOpen ? (
      <div className="fixed inset-0 z-[220] md:hidden" role="presentation">
        <button
          type="button"
          className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
          aria-label="메뉴 닫기"
          onClick={closeMobile}
        />
        <aside
          id={menuId}
          role="dialog"
          aria-modal="true"
          aria-label="사이트 메뉴"
          className="absolute right-0 top-0 flex h-full w-[min(100%,19.5rem)] flex-col border-l border-[#E9E4DB] bg-[#FDFBF7] shadow-[-12px_0_40px_rgba(0,0,0,0.08)]"
        >
          <div className="flex min-w-0 items-center justify-between gap-2 border-b border-[#E9E4DB] px-4 py-3">
            <Link
              href="/"
              onClick={closeMobile}
              className="flex min-w-0 flex-1 items-center gap-2.5 transition-opacity hover:opacity-90"
              aria-label="트리니티 여성성형센터 홈"
            >
              <TrinityBrandLogo className="h-7 max-w-[120px] shrink-0 sm:h-8 sm:max-w-[132px]" />
              <span className="text-left text-[11px] font-bold leading-snug break-keep text-[#1A1F16] sm:text-xs">
                트리니티 여성성형센터
              </span>
            </Link>
            <button
              type="button"
              onClick={closeMobile}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#3E522D] transition-colors hover:bg-[#F1F4ED]"
              aria-label="메뉴 닫기"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-2 overflow-y-auto p-4" aria-label="주요 메뉴">
            <Link href="/women" className={mobileNavRow(isVaginal)} onClick={closeMobile}>
              질성형
            </Link>
            <Link href="/laser" className={mobileNavRow(isLaser)} onClick={closeMobile}>
              질레이저
            </Link>
            <Link href={PERINEUM_ROUTES.labia} className={mobileNavRow(isLabia)} onClick={closeMobile}>
              대음순수술
            </Link>
            <Link href={PERINEUM_ROUTES.minora} className={mobileNavRow(isMinora)} onClick={closeMobile}>
              소음순수술
            </Link>
            <p className="mt-4 px-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A1A89A]">
              관련 링크
            </p>
            <a
              href={TRINITY_OFFICIAL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-2 rounded-xl border border-[#E9E4DB] bg-white px-4 py-3.5 text-sm font-semibold text-[#3E522D]"
              onClick={closeMobile}
            >
              병원 공식 홈
              <ExternalLink className="h-4 w-4 shrink-0 opacity-70" aria-hidden />
            </a>
            <a
              href={TRINITY_RFA}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-2 rounded-xl border border-[#E9E4DB] bg-white px-4 py-3.5 text-sm font-semibold text-[#3E522D]"
              onClick={closeMobile}
            >
              비수술 자궁보존센터
              <ExternalLink className="h-4 w-4 shrink-0 opacity-70" aria-hidden />
            </a>
          </nav>
        </aside>
      </div>
    ) : null;

  return (
    <>
      <div className="border-b border-[#E9E4DB]/80 bg-[#FDFBF7]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-3 py-2.5 sm:px-4 md:gap-4 md:px-6 md:py-3">
          <Link
            href="/"
            className="flex min-w-0 flex-1 shrink-0 items-center gap-2.5 transition-opacity hover:opacity-90 sm:gap-3 md:flex-initial"
            aria-label="트리니티 여성성형센터 홈"
          >
            <TrinityBrandLogo priority className="max-h-9 shrink-0 md:max-h-10" />
            <span className="min-w-0 text-left text-[12px] font-bold leading-snug break-keep text-[#1A1F16] sm:text-sm md:text-[15px]">
              트리니티 여성성형센터
            </span>
          </Link>

          <nav
            className="scrollbar-none hidden min-w-0 flex-1 flex-wrap items-center justify-center gap-2 md:flex md:gap-2.5"
            aria-label="주요 메뉴"
          >
            <Link href="/women" className={navPill(isVaginal)}>
              질성형
            </Link>
            <Link href="/laser" className={navPill(isLaser)}>
              질레이저
            </Link>
            <Link href={PERINEUM_ROUTES.labia} className={navPill(isLabia)}>
              대음순수술
            </Link>
            <Link href={PERINEUM_ROUTES.minora} className={navPill(isMinora)}>
              소음순수술
            </Link>

            <span className="mx-0.5 hidden h-4 w-px shrink-0 bg-[#E9E4DB] md:inline" aria-hidden />

            <a
              href={TRINITY_OFFICIAL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden shrink-0 items-center gap-1 rounded-full px-3 py-2 text-[12px] font-semibold text-[#3E522D] hover:bg-[#F1F4ED] md:inline-flex lg:text-[13px]"
            >
              병원 공식 홈
              <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-70" aria-hidden />
            </a>
            <a
              href={TRINITY_RFA}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden shrink-0 items-center gap-1 rounded-full px-3 py-2 text-[12px] font-semibold text-[#3E522D] hover:bg-[#F1F4ED] md:inline-flex lg:text-[13px]"
            >
              <span className="max-w-[10rem] truncate lg:max-w-none">비수술 자궁보존센터</span>
              <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-70" aria-hidden />
            </a>
          </nav>

          <div className="flex shrink-0 items-center gap-1.5">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E9E4DB] bg-white text-[#3E522D] shadow-sm transition-colors hover:bg-[#F1F4ED] md:hidden"
              aria-expanded={mobileOpen}
              aria-controls={menuId}
              aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
            </button>
            <a
              href="tel:02-512-8875"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3E522D] text-white shadow-sm transition-colors hover:bg-[#2D3B1A] md:hidden"
              aria-label="전화 상담 02-512-8875"
            >
              <Phone className="h-4 w-4" aria-hidden />
            </a>
            <a
              href="tel:02-512-8875"
              className="hidden items-center gap-1.5 rounded-full bg-[#3E522D] px-3 py-2 text-xs font-bold text-white hover:bg-[#2D3B1A] md:inline-flex"
            >
              <Phone className="h-3.5 w-3.5 opacity-95" aria-hidden />
              <span>02-512-8875</span>
            </a>
          </div>
        </div>
      </div>
      {mounted && mobileDrawer ? createPortal(mobileDrawer, document.body) : null}
    </>
  );
}
