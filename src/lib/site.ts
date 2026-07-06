/** 프로덕션 공개 URL — 메타·OG·JSON-LD·사이트맵과 동일하게 유지 */
export const SITE_URL = "https://trinityrejuve.netlify.app" as const;

export const SITE_NAME = "트리니티여성의원";

/** `public/images/icon.png` — 브랜드 로고 */
export const TRINITY_BRAND_LOGO_PATH = "/images/icon.png" as const;

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

/** 대음순수술 — `/labia` + 탭(회음부 제모·미백). 구 `/perineum`은 리다이렉트 */
export const LABIA_ROUTES = {
  hub: "/labia",
  surgery: "/labia",
  hairRemoval: "/labia?tab=hair-removal",
  whitening: "/labia?tab=whitening",
  clitoris: "/labia?tab=clitoris",
} as const;

/** 소음순수술 — 독립 페이지 */
export const MINORA_ROUTES = {
  hub: "/minora",
} as const;

/** 음핵수술 — 대음순 페이지 탭 (`/labia?tab=clitoris`). `/clitoris`는 리다이렉트 */
export const CLITORIS_ROUTES = {
  hub: "/labia?tab=clitoris",
} as const;

/** 질필러 — 원더필 랜딩 */
export const FILLER_ROUTES = {
  hub: "/filler",
  wonderfill: "/filler",
} as const;

/** @deprecated 구 경로 — 리다이렉트용 */
export const PERINEUM_ROUTES = {
  hub: "/perineum",
  labia: LABIA_ROUTES.surgery,
  minora: MINORA_ROUTES.hub,
  hairRemoval: LABIA_ROUTES.hairRemoval,
  whitening: LABIA_ROUTES.whitening,
} as const;

/** 질레이저 — 단일 페이지 `/laser` + 쿼리(탭·북마크용). 기본(질쎄라)은 쿼리 없음 */
export const LASER_ROUTES = {
  hub: "/laser",
  zisella: "/laser",
  monalisa: "/laser?tab=monalisa",
  revive: "/laser?tab=revive",
} as const;
