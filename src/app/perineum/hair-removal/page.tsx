import { permanentRedirect } from "next/navigation";
import { LABIA_ROUTES } from "@/lib/site";

export default function PerineumHairRemovalLegacyRedirect() {
  permanentRedirect(LABIA_ROUTES.hairRemoval);
}
