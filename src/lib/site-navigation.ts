import { LASER_ROUTES, PERINEUM_ROUTES } from "@/lib/site";

const OFFICIAL = "https://www.trinityclinic.co.kr";

export type NavLink = {
  label: string;
  href: string;
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
      { label: "고주파 용해술", href: "https://trinityrfa.netlify.app", external: true },
      { label: "질건조증 집중치료", href: "https://trinityrejuve.netlify.app", external: true },
      { label: "비수술 난소낭종 경화술", href: "https://trinitycyst.netlify.app", external: true },
    ],
  },
  {
    id: "uterus",
    label: "자궁보존센터",
    items: [
      { label: "옵티멀하이푸", href: `${OFFICIAL}/sub/menu2-1`, external: true },
      { label: "자궁근종", href: `${OFFICIAL}/sub/menu2-2`, external: true },
      { label: "자궁선근증", href: `${OFFICIAL}/sub/menu2-3`, external: true },
      { label: "자궁근종용해술", href: `${OFFICIAL}/sub/menu2-4`, external: true },
      { label: "난소낭종경화술", href: `${OFFICIAL}/sub/menu2-5`, external: true },
      { label: "실비보험 청구서비스", href: `${OFFICIAL}/sub/menu2-6`, external: true },
    ],
  },
  {
    id: "women-surgery",
    label: "여성성형센터",
    items: [
      { label: "질성형", href: "/women" },
      { label: "질레이저", href: LASER_ROUTES.hub },
      { label: "대음순수술", href: PERINEUM_ROUTES.labia },
      { label: "소음순수술", href: PERINEUM_ROUTES.minora },
      { label: "소음순성형", href: `${OFFICIAL}/sub/menu3-2`, external: true },
      { label: "회음부관리", href: `${OFFICIAL}/sub/menu3-3`, external: true },
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
  { label: "질성형", href: "/women", match: "women" as const },
  { label: "질레이저", href: LASER_ROUTES.hub, match: "laser" as const },
  { label: "대음순수술", href: PERINEUM_ROUTES.labia, match: "labia" as const },
  { label: "소음순수술", href: PERINEUM_ROUTES.minora, match: "minora" as const },
];

export function resolveActiveWomenLink(pathname: string, tab: string | null) {
  if (pathname === "/women" || pathname === "/") return "women";
  if (pathname === "/laser") return "laser";
  if (pathname.startsWith("/perineum")) {
    if (tab === "minora") return "minora";
    return "labia";
  }
  return null;
}

export function resolveActiveNavCategory(pathname: string, tab: string | null): string {
  const women = resolveActiveWomenLink(pathname, tab);
  if (women) return "women-surgery";
  return "";
}
