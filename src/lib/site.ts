/**
 * 프로덕션 공개 URL — 메타·OG·JSON-LD·사이트맵 절대경로 기준.
 * 여성성형센터 단독 Netlify(trinityrejuve) 기준.
 */
export const SITE_URL = "https://trinityrejuve.netlify.app" as const;

/** 도메인 루트(프로토콜 포함) — robots host 등 */
export const SITE_ORIGIN = "https://trinityrejuve.netlify.app" as const;

/** Next.js basePath — 단독 배포는 빈 문자열 */
export const BASE_PATH = "" as const;

/** public/ 정적 에셋 — 절대경로 (img src, video src 등) */
export function publicAsset(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return path.startsWith("/") ? path : `/${path}`;
}

/** basePath 유무와 무관하게 경로 정규화 */
export function withBasePathOnce(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  const trimmed = path.replace(/^\/+/, "");
  const withoutSub = trimmed.startsWith("sub/") ? trimmed.slice(4) : trimmed;
  return `/${withoutSub}`.replace(/\/{2,}/g, "/");
}

export const SITE_NAME = "트리니티여성의원";

/** `public/images/icon.png` — 브랜드 로고 */
export const TRINITY_BRAND_LOGO_PATH = publicAsset("/images/icon.png");

/** 여성성형 브랜드 필름 — 히어로·브랜드 섹션 공용 */
export const BRAND_FILM_VIDEO_SRC = "/videos/brand-film_opt.mp4" as const;

/** 히어로 배경: 5~8초 구간만 약 3초 루프 */
export const HERO_BRAND_FILM_LOOP = { start: 5, end: 8 } as const;

export const CLINIC = {
  legalName: SITE_NAME,
  streetAddress: "서울시 강남구 도산대로 108 렉스타워 3층",
  telephone: "+82-2-512-8875",
  telephoneDisplay: "02-512-8875",
} as const;

/** 네이버 플레이스·예약 — 리퍼러 유입 통계용 (rel="noopener"만 사용) */
export const NAVER_BOOKING_URL =
  "https://map.naver.com/p/entry/place/1714131744" as const;

/** 네이버 톡톡 */
export const NAVER_TALK_URL =
  "https://talk.naver.com/ct/w4tsxu?frm=home" as const;

/**
 * 라우트 상수 — 병원 홈페이지 /sub/menuX-X 체계에 맞춘 물리 라우트.
 * basePath('/sub')는 포함하지 않는다(Next <Link>가 자동 부여).
 *   질성형(메인) menu3-1 / 소음순 menu3-2 / 대음순·외음부 menu3-3 / 질레이저 menu3-4 / 질필러 menu3-5
 */

/** 질성형(메인) — menu3-1 */
export const HOME_ROUTE = "/menu3-1" as const;

/** 대음순수술·외음부 — menu3-3. 구 `/perineum`·`?tab=` 은 리다이렉트 */
export const LABIA_ROUTES = {
  hub: "/menu3-3",
  surgery: "/menu3-3",
  hairRemoval: "/menu3-3/hair-removal",
  whitening: "/menu3-3/whitening",
  clitoris: "/menu3-3/clitoris",
} as const;

/** 소음순수술 — menu3-2 */
export const MINORA_ROUTES = {
  hub: "/menu3-2",
} as const;

/** 음핵수술 — `menu3-3/clitoris`. 구 `/clitoris`는 리다이렉트 */
export const CLITORIS_ROUTES = {
  hub: "/menu3-3/clitoris",
} as const;

/** 질필러 — menu3-5 */
export const FILLER_ROUTES = {
  hub: "/menu3-5",
  wonderfill: "/menu3-5",
} as const;

/** @deprecated 구 경로 — 리다이렉트용 */
export const PERINEUM_ROUTES = {
  hub: "/perineum",
  labia: LABIA_ROUTES.surgery,
  minora: MINORA_ROUTES.hub,
  hairRemoval: LABIA_ROUTES.hairRemoval,
  whitening: LABIA_ROUTES.whitening,
} as const;

/** 질레이저 — menu3-4. 구 `?tab=` 은 리다이렉트 */
export const LASER_ROUTES = {
  hub: "/menu3-4",
  zisella: "/menu3-4",
  monalisa: "/menu3-4/monalisa",
  revive: "/menu3-4/revive",
} as const;
