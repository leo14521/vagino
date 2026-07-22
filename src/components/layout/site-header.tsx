"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { TrinityBrandLogo } from "@/components/brand/trinity-brand-logo";
import {
  isWomenSurgeryNavLinkActive,
  TRINITY_NAV_CATEGORIES,
  WOMEN_SURGERY_QUICK_LINKS,
  resolveActiveNavCategory,
  resolveActiveWomenLink,
  type NavLink,
} from "@/lib/site-navigation";
import { CLINIC, HOME_ROUTE } from "@/lib/site";
import { cn } from "@/lib/utils";

const CLINIC_DISPLAY_NAME = "트리니티 여성의원";

function NavAnchor({
  item,
  className,
  onNavigate,
}: {
  item: NavLink;
  className?: string;
  onNavigate?: () => void;
}) {
  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener"
        className={className}
        onClick={onNavigate}
      >
        {item.label}
      </a>
    );
  }
  return (
    <Link href={item.href} className={className} onClick={onNavigate}>
      {item.label}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCategory, setMobileCategory] = useState<string | null>("women-surgery");
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const menuId = useId();
  const headerRef = useRef<HTMLElement>(null);

  const activeWomen = useMemo(() => resolveActiveWomenLink(pathname), [pathname]);
  const activeCategory = useMemo(() => resolveActiveNavCategory(pathname), [pathname]);

  const closeDesktopMenu = useCallback(() => setOpenCategory(null), []);
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    closeMobile();
    closeDesktopMenu();
  }, [pathname, closeMobile, closeDesktopMenu]);

  useEffect(() => {
    if (!openCategory) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDesktopMenu();
    };

    const onPointerDown = (e: MouseEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) {
        closeDesktopMenu();
      }
    };

    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [openCategory, closeDesktopMenu]);

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

  const isLinkActive = (item: NavLink) => isWomenSurgeryNavLinkActive(item, pathname);

  const mobileDrawer =
    mounted && mobileOpen ? (
      <div className="fixed inset-0 z-[220] lg:hidden" role="presentation">
        <button type="button" className="absolute inset-0 bg-black/40" aria-label="메뉴 닫기" onClick={closeMobile} />
        <aside
          id={menuId}
          role="dialog"
          aria-modal="true"
          aria-label="사이트 메뉴"
          className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col bg-white shadow-[-8px_0_24px_rgba(0,0,0,0.08)]"
        >
          <div className="flex items-center justify-between border-b border-[#EEEEEE] px-4 py-3">
            <Link href={HOME_ROUTE} onClick={closeMobile} className="site-header__brand" aria-label={`${CLINIC_DISPLAY_NAME} 홈`}>
              <TrinityBrandLogo className="h-8 max-w-[100px]" />
              <span className="site-header__brand-name">{CLINIC_DISPLAY_NAME}</span>
            </Link>
            <button type="button" onClick={closeMobile} className="flex h-9 w-9 items-center justify-center" aria-label="메뉴 닫기">
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>
          <div className="flex flex-1 overflow-hidden">
            <div className="w-[42%] shrink-0 overflow-y-auto border-r border-[#EEEEEE] bg-[#FAFAFA]">
              {TRINITY_NAV_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setMobileCategory(cat.id)}
                  className={cn(
                    "block w-full border-b border-[#EEEEEE] px-3 py-3.5 text-left text-[13px] font-bold leading-snug break-keep",
                    mobileCategory === cat.id ? "bg-white text-[#3E522D]" : "text-[#444444]"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <nav className="flex-1 overflow-y-auto py-2">
              {TRINITY_NAV_CATEGORIES.filter((c) => c.id === mobileCategory).map((cat) =>
                cat.items.map((item) => (
                  <div key={item.label} onClick={closeMobile}>
                    <NavAnchor
                      item={item}
                      className={cn(
                        "block px-4 py-3 text-[14px] font-semibold border-b border-[#F5F5F5]",
                        isLinkActive(item) ? "text-[#3E522D] bg-[#F5F2EC]" : "text-[#333333]"
                      )}
                    />
                  </div>
                ))
              )}
            </nav>
          </div>
          <div className="border-t border-[#EEEEEE] p-4">
            <a href={`tel:${CLINIC.telephoneDisplay}`} className="flex items-center justify-center gap-2 bg-[#3E522D] py-3 text-sm font-bold text-white">
              <Phone className="h-4 w-4" aria-hidden />
              {CLINIC.telephoneDisplay}
            </a>
          </div>
        </aside>
      </div>
    ) : null;

  return (
    <>
      <header ref={headerRef} className="site-header">
        <div className="site-header__inner">
          <Link href={HOME_ROUTE} className="site-header__brand" aria-label={`${CLINIC_DISPLAY_NAME} 홈`}>
            <TrinityBrandLogo priority className="h-8 max-w-[100px] sm:h-9 sm:max-w-[120px] lg:h-10 lg:max-w-[140px]" />
            <span className="site-header__brand-name">{CLINIC_DISPLAY_NAME}</span>
          </Link>

          <nav className="site-header__main-nav" aria-label="주요 메뉴">
            {TRINITY_NAV_CATEGORIES.map((cat) => {
              const isOpen = openCategory === cat.id;
              const isActive = activeCategory === cat.id;
              return (
                <div
                  key={cat.id}
                  className={cn("site-header__main-item", isOpen && "site-header__main-item--open")}
                >
                  <button
                    type="button"
                    className={cn(
                      "site-header__main-btn",
                      (isOpen || isActive) && "site-header__main-btn--active"
                    )}
                    onClick={() => setOpenCategory((prev) => (prev === cat.id ? null : cat.id))}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    {cat.label}
                  </button>
                  <div className="site-header__mega">
                    {cat.items.map((item) => (
                      <NavAnchor
                        key={item.label}
                        item={item}
                        onNavigate={closeDesktopMenu}
                        className={cn("site-header__mega-link", isLinkActive(item) && "site-header__mega-link--active")}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <a
              href={`tel:${CLINIC.telephoneDisplay}`}
              className="site-header__phone"
              aria-label={`전화 상담 ${CLINIC.telephoneDisplay}`}
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden />
              <span className="site-header__phone-short">전화</span>
              <span className="site-header__phone-number">{CLINIC.telephoneDisplay}</span>
            </a>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center text-[#333333] lg:hidden"
              aria-expanded={mobileOpen}
              aria-controls={menuId}
              aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
            </button>
          </div>
        </div>

        <div className="site-header__quick">
          <div className="site-header__quick-inner">
            <p className="site-header__quick-label">여성성형센터</p>
            <nav className="site-header__quick-nav" aria-label="여성성형센터 바로가기">
              {WOMEN_SURGERY_QUICK_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "site-header__quick-link",
                    activeWomen === item.match && "site-header__quick-link--active"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
      {mounted && mobileDrawer ? createPortal(mobileDrawer, document.body) : null}
    </>
  );
}
