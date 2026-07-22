"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LABIA_ROUTES, LASER_ROUTES } from "@/lib/site";

const LASER_TAB_MAP: Record<string, string> = {
  monalisa: LASER_ROUTES.monalisa,
  revive: LASER_ROUTES.revive,
  zisella: LASER_ROUTES.zisella,
};

const LABIA_TAB_MAP: Record<string, string> = {
  labia: LABIA_ROUTES.surgery,
  "hair-removal": LABIA_ROUTES.hairRemoval,
  laser: LABIA_ROUTES.hairRemoval,
  whitening: LABIA_ROUTES.whitening,
  whiten: LABIA_ROUTES.whitening,
  clitoris: LABIA_ROUTES.clitoris,
};

/** 구 `?tab=` 북마크 URL → 물리 라우트로 이동 (정적 export·basePath 호환) */
export function QueryTabRedirect({ scope }: { scope: "laser" | "labia" }) {
  const router = useRouter();

  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    const tab = sp.get("tab");
    if (!tab) return;

    const map = scope === "laser" ? LASER_TAB_MAP : LABIA_TAB_MAP;
    const target = map[tab];
    if (target) router.replace(target);
  }, [router, scope]);

  return null;
}
