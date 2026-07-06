/** 원더필 질필러 랜딩 — 이미지에서 추출한 카피 (설명 1·2 등) */
export const WONDERFILL_IMAGES = {
  product: {
    src: "/images/filler/product-box.webp",
    alt: "원더필(Wonder Fill) 제품 박스 및 주사기",
    width: 960,
    height: 702,
  },
  injectionBefore: {
    src: "/images/filler/injection-before.webp",
    alt: "질필러 주입 전 질벽 단면",
    width: 520,
    height: 519,
  },
  injectionAfter: {
    src: "/images/filler/injection-after.webp",
    alt: "질필러 주입 후 질벽 단면 — 볼륨 보강",
    width: 520,
    height: 519,
  },
  injection2Before: {
    src: "/images/filler/injection2-before.webp",
    alt: "원더필 시술 전 질 단면",
    width: 520,
    height: 476,
  },
  injection2After: {
    src: "/images/filler/injection2-after.webp",
    alt: "원더필 시술 후 질 단면",
    width: 520,
    height: 476,
  },
  /** 원더필 주입효과1 — 조직 생착 (1개월·6개월 좌우 비교) */
  effectTissueCompare: {
    src: "/images/filler/effect-tissue-compare.webp",
    alt: "원더필 주입 1개월·6개월 조직 현미경 비교",
    width: 1100,
    height: 405,
  },
  /** 원더필 주입효과2 — 콜라겐 (1개월·6개월 좌우 비교) */
  effectCollagenCompare: {
    src: "/images/filler/effect-collagen-compare.webp",
    alt: "원더필 주입 1개월·6개월 콜라겐 조직 비교",
    width: 1100,
    height: 457,
  },
} as const;

/** 원더필 설명 1 — 텍스트만 사용 */
export const WONDERFILL_INTRO_COPY = {
  lead: "wonder fill 질필러는 대체진피를 미분화 시킨 것으로",
  highlight1: "콜라겐을 포함한 실제 피부성분으로 만들어진",
  highlight2: "세포외기질(ECM) 필러",
  body: "입니다. KFDA와 FDA 승인을 받은 안전한 제품으로 질에 주입 후 만족스러운",
  highlight3: "볼륨과 탄력을 높여주는 효과",
  tail: "가 있습니다.",
} as const;

/** 원더필 설명 2 — 텍스트만 사용 */
export const WONDERFILL_MECHANISM_COPY = {
  wonderfill: {
    before: "원더필은 점막 주입 시 빠른",
    highlight: "콜라겐 생합성 반응을 유도해",
    after: "뛰어난 질 축소 효과를 보실 수 있습니다!",
  },
  megafill: {
    text: "메가필업은 콜라겐이 Cross-linking되어 있기 때문에 체내 흡수율이 낮아 볼륨 효과가 높습니다.",
  },
} as const;

export const WONDERFILL_INJECTION_COPY = {
  title: "필러 효과, 즉시 확인 가능!",
  description:
    "KFDA/IOS 인증 받은 여성 질 전용 필러를 질 내부로 주입하여, 장기적으로 분해되지 않는 PMMA와 스스로 자가 콜라겐을 형성합니다.",
} as const;

export const WONDERFILL_HISTOLOGY_COPY = {
  engraftment: {
    text: "원더필 주입 시 섬유아세포 유입·혈관생성으로 인한",
    highlight: "자연스러운",
    tail: "생착을 유도합니다.",
  },
  collagen: {
    text: "원더필 주입 6개월 이후에",
    highlight: "새로운 콜라겐 생합성",
    tail: "이 증가되고 볼륨이 유지됩니다.",
  },
  labels: {
    month1: "원더필 주입 1개월",
    month6: "원더필 주입 6개월",
  },
} as const;
