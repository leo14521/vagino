"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { scroller } from "react-scroll";

const VAGINAL_GUIDE = [
  { id: "insight", label: "자가 진단" },
  { id: "comparison", label: "수술원리" },
  { id: "pain-free", label: "통증·케어" },
  { id: "surgery-guide", label: "질성형 안내" },
  { id: "laser-link", label: "질레이저" },
  { id: "doctors", label: "의료진" },
  { id: "review", label: "후기" },
  { id: "hours", label: "진료시간" },
  { id: "location", label: "오시는길" },
] as const;

const LASER_GUIDE = [
  { id: "hours", label: "진료시간" },
  { id: "location", label: "오시는길" },
] as const;

function guideForPath(pathname: string) {
  if (pathname === "/laser") return LASER_GUIDE;
  if (pathname === "/women" || pathname === "/") return VAGINAL_GUIDE;
  return null;
}

export function SectionGuideNav() {
  const pathname = usePathname();
  const categories = useMemo(() => guideForPath(pathname), [pathname]);
  const [active, setActive] = useState<string>("insight");
  const [mounted, setMounted] = useState(false);

  const scrollTo = useCallback(
    (id: string) => {
      scroller.scrollTo(id, { duration: 700, smooth: true, offset: -8 });
      if (typeof window !== "undefined") {
        const base = pathname === "/" ? "" : pathname;
        const hashUrl = base ? `${base}#${id}` : `/#${id}`;
        window.history.replaceState(null, "", hashUrl);
      }
    },
    [pathname]
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!categories) return;
    setActive(categories[0].id);
  }, [categories]);

  useEffect(() => {
    if (!mounted || !categories) return;
    const tracked = new Set<string>(categories.map((c) => c.id));
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(
          (e) => e.isIntersecting && tracked.has(e.target.id)
        );
        if (visible.length === 0) return;
        visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        setActive(visible[0].target.id);
      },
      { threshold: [0, 0.08, 0.15, 0.25, 0.4, 0.55], rootMargin: "-88px 0px -38% 0px" }
    );
    categories.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [mounted, categories]);

  if (!mounted || !categories) return null;

  return (
    <div className="border-b border-[#E9E4DB]/60 bg-[#FDFCFB]/95 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-3 py-2.5 md:px-4 md:py-2">
        <div className="scrollbar-none flex gap-2 overflow-x-auto pb-0.5 pt-0.5 md:flex-wrap md:gap-2 md:overflow-visible md:pb-0 md:pt-0">
          {categories.map((c) => {
            const isOn = active === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => scrollTo(c.id)}
                className={`shrink-0 rounded-full px-3.5 py-2 text-[12px] font-bold transition-all md:px-3 md:py-1.5 md:text-xs ${
                  isOn
                    ? "bg-[#3E522D] text-white shadow-sm"
                    : "bg-white text-[#6B7264] ring-1 ring-[#E9E4DB] hover:ring-[#3E522D]/40 hover:text-[#3E522D]"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
