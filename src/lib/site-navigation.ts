import {
  CLITORIS_ROUTES,
  FILLER_ROUTES,
  HOME_ROUTE,
  LABIA_ROUTES,
  LASER_ROUTES,
  MINORA_ROUTES,
} from "@/lib/site";

const OFFICIAL = "https://www.trinityclinic.co.kr";

export type NavLink = {
  label: string;
  href: string;
  /** true면 next/link 대신 <a> 사용 (외부 URL 또는 통합 사이트 다른 랜딩) */
  external?: boolean;
};

export type NavCategory = {
  id: string;
  label: string;
  items: NavLink[];
};

/** 공식 홈페이지 header .menu-wrapper 대메뉴·하위메뉴 */
export const TRINITY_NAV_CATEGORIES: NavCategory[] = [
  {
    id: "about",
    label: "트리니티소개",
    items: [
      { label: "병원 소개", href: `${OFFICIAL}/sub/menu1-1`, external: true },
      { label: "의료진 소개", href: `${OFFICIAL}/sub/menu1-2`, external: true },
      { label: "장비 소개", href: `${OFFICIAL}/sub/menu1-3`, external: true },
      { label: "오시는 길", href: `${OFFICIAL}/sub/menu1-4`, external: true },
    ],
  },
  {
    id: "premium",
    label: "프리미엄 치료",
    items: [
      { label: "프리미엄 줄기세포", href: "https://trinitycell.netlify.app", external: true },
    ],
  },
  {
    id: "uterus",
    label: "자궁보존센터",
    items: [
      { label: "옵티멀하이푸", href: `${OFFICIAL}/sub/menu2-1`, external: true },
      { label: "자궁근종", href: `${OFFICIAL}/sub/menu2-2`, external: true },
      { label: "자궁선근증", href: `${OFFICIAL}/sub/menu2-3`, external: true },
      { label: "자궁근종용해술", href: `${OFFICIAL}/sub/menu2-4/`, external: true },
      { label: "난소낭종경화술", href: `${OFFICIAL}/sub/menu2-5/`, external: true },
      { label: "실비보험 청구서비스", href: `${OFFICIAL}/sub/menu2-6`, external: true },
    ],
  },
  {
    id: "women-surgery",
    label: "여성성형센터",
    items: [
      // 수술
      { label: "질성형", href: HOME_ROUTE },
      { label: "대음순수술", href: LABIA_ROUTES.surgery },
      { label: "소음순수술", href: MINORA_ROUTES.hub },
      { label: "음핵수술", href: LABIA_ROUTES.clitoris },
      // 레이저
      { label: "질쎄라", href: LASER_ROUTES.zisella },
      { label: "모나리자터치", href: LASER_ROUTES.monalisa },
      { label: "리비브", href: LASER_ROUTES.revive },
      // 시술 · 케어
      { label: "질필러", href: FILLER_ROUTES.hub },
      { label: "외음부미백", href: LABIA_ROUTES.whitening },
      { label: "외음부제모", href: LABIA_ROUTES.hairRemoval },
    ],
  },
  {
    id: "disease",
    label: "여성질환센터",
    items: [
      { label: "검진", href: `${OFFICIAL}/sub/menu7-1`, external: true },
      { label: "방광염", href: `${OFFICIAL}/sub/menu7-2`, external: true },
      { label: "질염", href: `${OFFICIAL}/sub/menu7-3`, external: true },
    ],
  },
  {
    id: "menopause",
    label: "갱년기센터",
    items: [
      { label: "갱년기 검진", href: `${OFFICIAL}/sub/menu4-1`, external: true },
      { label: "갱년기 치료", href: `${OFFICIAL}/sub/menu4-2`, external: true },
      { label: "요실금수술", href: `${OFFICIAL}/sub/menu4-3`, external: true },
      { label: "질 건조증", href: `${OFFICIAL}/sub/menu4-4`, external: true },
    ],
  },
  {
    id: "community",
    label: "커뮤니티",
    items: [
      { label: "트리니티 이야기", href: `${OFFICIAL}/board/trinity_story`, external: true },
      { label: "트리니티 칼럼", href: `${OFFICIAL}/board/trinity_column`, external: true },
      { label: "미디어", href: `${OFFICIAL}/board/media`, external: true },
      { label: "치료 후기", href: `${OFFICIAL}/board/trinity_review`, external: true },
      { label: "전후사진", href: `${OFFICIAL}/board/ba_preview`, external: true },
      { label: "자주 묻는 질문", href: `${OFFICIAL}/board/board_faq`, external: true },
      { label: "온라인 상담", href: `${OFFICIAL}/board/contact`, external: true },
      { label: "온라인 예약", href: `${OFFICIAL}/board/reservation/write`, external: true },
    ],
  },
];

/** 헤더에 항상 노출하는 여성성형센터 바로가기 */
export const WOMEN_SURGERY_QUICK_LINKS = [
  { label: "질성형", href: HOME_ROUTE, match: "women" as const },
  { label: "질레이저", href: LASER_ROUTES.hub, match: "laser" as const },
  { label: "대음순수술", href: LABIA_ROUTES.hub, match: "labia" as const },
  { label: "소음순수술", href: MINORA_ROUTES.hub, match: "minora" as const },
  { label: "질필러", href: FILLER_ROUTES.hub, match: "filler" as const },
];

export type WomenQuickLinkMatch = (typeof WOMEN_SURGERY_QUICK_LINKS)[number]["match"];

export function resolveActiveWomenLink(pathname: string): WomenQuickLinkMatch | null {
  if (pathname === "/menu3-1" || pathname === "/women" || pathname === "/") return "women";
  if (pathname.startsWith("/menu3-4")) return "laser";
  if (pathname.startsWith("/menu3-3") || pathname === "/perineum") return "labia";
  if (pathname.startsWith("/menu3-2")) return "minora";
  if (pathname.startsWith("/menu3-5")) return "filler";
  return null;
}

export function resolveActiveNavCategory(pathname: string): string {
  const women = resolveActiveWomenLink(pathname);
  if (women) return "women-surgery";
  return "";
}

function normalizePath(pathname: string) {
  return pathname.endsWith("/") && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
}

export function isWomenSurgeryNavLinkActive(item: NavLink, pathname: string): boolean {
  if (item.external) return false;
  const path = normalizePath(pathname);

  if (item.href === HOME_ROUTE && (path === HOME_ROUTE || path === "/" || path === "/women"))
    return true;
  if (item.href === LASER_ROUTES.zisella && path === LASER_ROUTES.zisella) return true;
  if (item.href === LASER_ROUTES.monalisa && path === LASER_ROUTES.monalisa) return true;
  if (item.href === LASER_ROUTES.revive && path === LASER_ROUTES.revive) return true;
  if (item.href === LABIA_ROUTES.surgery && path === LABIA_ROUTES.surgery) return true;
  if (item.href === LABIA_ROUTES.hairRemoval && path === LABIA_ROUTES.hairRemoval) return true;
  if (item.href === LABIA_ROUTES.whitening && path === LABIA_ROUTES.whitening) return true;
  if (item.href === LABIA_ROUTES.clitoris && path === LABIA_ROUTES.clitoris) return true;
  if (item.href === MINORA_ROUTES.hub && path.startsWith(MINORA_ROUTES.hub)) return true;
  if (item.href === FILLER_ROUTES.hub && path.startsWith(FILLER_ROUTES.hub)) return true;
  return false;
}
