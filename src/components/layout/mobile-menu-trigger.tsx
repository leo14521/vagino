"use client";

import { useCallback, useEffect, useState } from "react";

declare global {
  interface Window {
    TgMobileMenu?: {
      toggle: () => boolean | void;
      setOpen: (open: boolean) => void;
    };
  }
}

function syncHeaderMenuOpen(open: boolean) {
  document.getElementById("site-header")?.classList.toggle("menu-open", open);
}

function fallbackToggle(): boolean | null {
  const drawer = document.getElementById("tg-drawer");
  const overlay = document.getElementById("tg-drawer-overlay");
  if (!drawer || !overlay) return null;
  const next = !drawer.classList.contains("is-open");
  overlay.classList.toggle("is-open", next);
  drawer.classList.toggle("is-open", next);
  document.body.style.overflow = next ? "hidden" : "";
  return next;
}

export function MobileMenuTrigger() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.setAttribute("data-react-mobile-menu", "1");
    document.body.setAttribute("data-tg-native-menu", "1");
  }, []);

  useEffect(() => {
    const onToggle = (event: Event) => {
      const next = Boolean((event as CustomEvent<{ open: boolean }>).detail?.open);
      setOpen(next);
      syncHeaderMenuOpen(next);
    };
    document.addEventListener("tg-drawer-toggle", onToggle);
    return () => document.removeEventListener("tg-drawer-toggle", onToggle);
  }, []);

  const handleClick = useCallback(() => {
    const api = window.TgMobileMenu;
    if (api?.toggle) {
      const next = api.toggle();
      if (typeof next === "boolean") {
        setOpen(next);
        syncHeaderMenuOpen(next);
      }
      return;
    }

    const next = fallbackToggle();
    if (next === null) return;
    setOpen(next);
    syncHeaderMenuOpen(next);
  }, []);

  return (
    <button
      type="button"
      id="mobile-menu-btn"
      className="site-menu-btn xl:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-[#E9E4DB] text-[#1A1F16]"
      aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
      aria-expanded={open}
      onClick={handleClick}
    >
      <svg
        id="menu-icon-open"
        className={open ? "hidden" : "h-5 w-5"}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
      <svg
        id="menu-icon-close"
        className={open ? "h-5 w-5" : "hidden"}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </button>
  );
}
