import { LegacyRedirect } from "@/components/legacy-redirect";
import { LABIA_ROUTES } from "@/lib/site";

export default function PerineumLabiaLegacyRedirect() {
  return <LegacyRedirect to={LABIA_ROUTES.surgery} />;
}
