import { LegacyRedirect } from "@/components/legacy-redirect";
import { HOME_ROUTE } from "@/lib/site";

/** 구 URL `/women` → 질성형 메인(menu3-1) */
export default function WomenLegacyRedirect() {
  return <LegacyRedirect to={HOME_ROUTE} />;
}
