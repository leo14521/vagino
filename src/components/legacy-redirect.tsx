"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type LegacyRedirectProps = {
  /** basePath 없는 내부 라우트(예: "/menu3-3"). Next 라우터가 basePath를 자동 부여한다. */
  to: string;
};

/** 정적 export(`out`)에서도 동작하는 클라이언트 리다이렉트 (basePath 자동 반영) */
export function LegacyRedirect({ to }: LegacyRedirectProps) {
  const router = useRouter();

  useEffect(() => {
    router.replace(to);
  }, [router, to]);

  return (
    <main className="flex min-h-[40vh] items-center justify-center px-6">
      <p className="text-center text-sm text-neutral-600">
        새 페이지로 이동 중입니다.{" "}
        <Link href={to} className="underline underline-offset-2">
          여기를 클릭
        </Link>
        하세요.
      </p>
    </main>
  );
}
