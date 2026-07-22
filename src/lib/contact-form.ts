/** 트리니티 Admin(AM-CMS) 온라인 상담 폼 — 정적 export에서 직접 POST 제출 */
export const CONTACT_FORM_ACTION =
  "https://www.trinityclinic.co.kr/board/contact/write" as const;

/** AM-CMS 숨김 필드 (관리자 폼과 동일 값) */
export const CONTACT_FORM_HIDDEN = {
  _amcmsTkn:
    "1783390947437_54c79d96bf6c8df3848392e2eac8180adf0a35cd9e5fbaea60aa235eb1b7d058",
  boardContainerId: "contact",
  boardInsideTitle: "여성성형 랜딩 상담 문의",
  boardInsideGuestPassword: "12321",
  boardInsideSecret: "true",
} as const;

/** 상담폼 name 매핑 — 이름/연락처/메모 */
export const CONTACT_FIELD_NAMES = {
  name: "boardInsideGuestName",
  phone: "boardInsideExtraField1",
  memo: "boardInsideHtml",
} as const;

export const CONSULT_CATEGORIES = [
  "자궁클리닉",
  "여성성형클리닉",
  "질타이트닝클리닉",
  "검진클리닉",
  "미백클리닉",
  "부인과클리닉",
  "갱년기·요실금클리닉",
  "기타",
] as const;

export type ConsultCategory = (typeof CONSULT_CATEGORIES)[number];

/** 메모 맨 앞에 상담분야 태그를 붙여 반환 */
export function withCategoryTag(category: string, memo: string) {
  const body = memo.trim();
  return body ? `[상담분야] ${category}\n${body}` : `[상담분야] ${category}`;
}
