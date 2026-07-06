import { permanentRedirect } from "next/navigation";
import { LABIA_ROUTES } from "@/lib/site";

export default function PerineumWhiteningLegacyRedirect() {
  permanentRedirect(LABIA_ROUTES.whitening);
}
