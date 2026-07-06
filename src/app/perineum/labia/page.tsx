import { permanentRedirect } from "next/navigation";
import { LABIA_ROUTES } from "@/lib/site";

export default function PerineumLabiaLegacyRedirect() {
  permanentRedirect(LABIA_ROUTES.surgery);
}
