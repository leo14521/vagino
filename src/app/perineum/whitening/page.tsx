import { permanentRedirect } from "next/navigation";

/** 구 URL 호환 */
export default function PerineumWhiteningLegacyRedirect() {
  permanentRedirect("/perineum?tab=whiten");
}
