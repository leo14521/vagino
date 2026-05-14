import { permanentRedirect } from "next/navigation";

/** 구 URL 호환 */
export default function PerineumHairRemovalLegacyRedirect() {
  permanentRedirect("/perineum?tab=laser");
}
