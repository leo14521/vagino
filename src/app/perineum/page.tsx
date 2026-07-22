"use client";

import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { LABIA_ROUTES, MINORA_ROUTES } from "@/lib/site";

function resolvePerineumRedirect(tab: string | null) {
  if (tab === "minora") return MINORA_ROUTES.hub;
  if (tab === "laser" || tab === "hair-removal") return LABIA_ROUTES.hairRemoval;
  if (tab === "whiten" || tab === "whitening") return LABIA_ROUTES.whitening;
  return LABIA_ROUTES.hub;
}

function PerineumRedirectInner() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const to = resolvePerineumRedirect(searchParams.get("tab"));
    router.replace(to);
  }, [router, searchParams]);

  return (
    <main className="flex min-h-[40vh] items-center justify-center px-6">
      <p className="text-center text-sm text-neutral-600">새 페이지로 이동 중입니다.</p>
    </main>
  );
}

/** 구 `/perineum` → 신규 라우트로 이동 */
export default function PerineumRedirectPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-[40vh] items-center justify-center px-6">
          <p className="text-center text-sm text-neutral-600">새 페이지로 이동 중입니다.</p>
        </main>
      }
    >
      <PerineumRedirectInner />
    </Suspense>
  );
}
