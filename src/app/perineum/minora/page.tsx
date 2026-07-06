import { permanentRedirect } from "next/navigation";
import { MINORA_ROUTES } from "@/lib/site";

export default function PerineumMinoraLegacyRedirect() {
  permanentRedirect(MINORA_ROUTES.hub);
}
