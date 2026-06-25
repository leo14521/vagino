import { permanentRedirect } from "next/navigation";

/** 구 URL·북마크 호환 */
export default function PerineumMinoraLegacyRedirect() {
  permanentRedirect("/perineum?tab=minora");
}
