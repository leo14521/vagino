import { LegacyRedirect } from "@/components/legacy-redirect";
import { MINORA_ROUTES } from "@/lib/site";

export default function PerineumMinoraLegacyRedirect() {
  return <LegacyRedirect to={MINORA_ROUTES.hub} />;
}
