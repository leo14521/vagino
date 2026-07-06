export const WOMEN_SURGERY_FACTS = [
  { label: "수술시간", value: "30~60분", icon: "clock" as const },
  { label: "마취", value: "수면·국소", icon: "syringe" as const },
  { label: "입원", value: "당일 퇴원", icon: "home" as const },
  { label: "내원", value: "1~2회", icon: "calendar" as const },
  { label: "금욕", value: "4~6주", icon: "heart" as const },
] as const;

export const WOMEN_SURGERY_DEFINITION = {
  lead: "늘어난 질 내벽을 확실히 조이고 당기는",
  title: "질성형수술",
  aliases: ["이쁜이수술", "질축소수술"],
  body: [
    "임신·출산·노화로 이완된 질 점막과 골반기저근을 수축시켜 탄력을 복원하는 여성 성형수술입니다.",
    "성감 개선을 넘어 요실금 완화, 골반 장기 탈출증 예방, 잦은 질염 치료 등 기능적 여성 건강 회복이 핵심 목적입니다.",
    "트리니티는 점막·근육·지지 구조를 함께 다루는 3중 복원 질성형을 시행합니다.",
  ],
} as const;

export const WOMEN_SURGERY_CANDIDATES = [
  "통증을 최소화한 질성형수술(이쁜이수술)을 원하시는 분",
  "요실금 증상으로 일상이 불편하신 분",
  "임신·출산 후 질 근육 이완으로 고민이신 분",
  "질염·방광염 등 여성질환에 자주 노출되시는 분",
  "성관계 시 만족도가 떨어지신 분",
] as const;

export const WOMEN_SURGERY_EFFECTS = [
  { title: "요실금 완화", desc: "방광·골반저 압박감 개선" },
  { title: "골반 지지 회복", desc: "장기 탈출증 예방" },
  { title: "질염·방광염", desc: "반복 감염 완화" },
  { title: "자신감 회복", desc: "성생활 만족도 개선" },
] as const;

export const WOMEN_SURGERY_FEATURES = [
  { no: "01", title: "통증·출혈 최소화", desc: "수술 부담을 낮춥니다." },
  { no: "02", title: "당일 일상복귀", desc: "데이케어 프로토콜." },
  { no: "03", title: "근육·주름 복원", desc: "촘촘한 점막 회복." },
  { no: "04", title: "여성질환 예방", desc: "기능적 고민 완화." },
  { no: "05", title: "자신감 회복", desc: "성생활 만족도 UP." },
  { no: "06", title: "탄력·볼륨", desc: "질축소 후 탄력 증대." },
] as const;

/** SEO·스크린리더용 — 카드뉴스 원본 이미지 요약 */
export const WOMEN_SURGERY_SEO_ALT =
  "강남 트리니티여성의원 질성형수술·이쁜이수술·질축소수술 — 수술 30~60분, 당일퇴원, 요실금·출산 후 이완·질염 개선";

/** 카드뉴스 원본에서 추출한 해부 Before/After 일러스트 */
export const WOMEN_ANATOMY_IMAGES = {
  comparison: {
    src: "/images/women/anatomy-comparison.webp",
    alt: "질성형수술(이쁜이수술·질축소수술) 전후 해부 비교 — 이완된 질 점막과 골반기저근 탄력 복원",
    width: 880,
    height: 310,
  },
  before: {
    src: "/images/women/anatomy-before.webp",
    alt: "질축소수술 전 골반 단면 — 늘어진 질벽과 이완된 골반기저근",
    width: 400,
    height: 310,
  },
  after: {
    src: "/images/women/anatomy-after.webp",
    alt: "질성형수술 후 골반 단면 — 수축된 질 근육과 촘촘해진 질벽",
    width: 400,
    height: 310,
  },
} as const;
