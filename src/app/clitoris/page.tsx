import { LegacyRedirect } from "@/components/legacy-redirect";
import { LABIA_ROUTES } from "@/lib/site";

/** 구 `/clitoris` → 대음순 페이지 음핵수술 탭 */
export default function ClitorisLegacyRedirect() {
  return <LegacyRedirect to={LABIA_ROUTES.clitoris} />;
}
