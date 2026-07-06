import { permanentRedirect } from "next/navigation";
import { LABIA_ROUTES } from "@/lib/site";

/** 구 `/clitoris` → 대음순 페이지 음핵수술 탭 */
export default function ClitorisLegacyRedirect() {
  permanentRedirect(LABIA_ROUTES.clitoris);
}
