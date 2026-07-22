import { LegacyRedirect } from "@/components/legacy-redirect";
import { LABIA_ROUTES } from "@/lib/site";

export default function PerineumWhiteningLegacyRedirect() {
  return <LegacyRedirect to={LABIA_ROUTES.whitening} />;
}
