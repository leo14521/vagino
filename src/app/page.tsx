import { LegacyRedirect } from "@/components/legacy-redirect";
import { HOME_ROUTE } from "@/lib/site";

/** /sub 루트 진입 → 질성형 메인(menu3-1)으로 이동 */
export default function RootRedirect() {
  return <LegacyRedirect to={HOME_ROUTE} />;
}
