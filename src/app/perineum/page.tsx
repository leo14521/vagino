import { permanentRedirect } from "next/navigation";
import { LABIA_ROUTES, MINORA_ROUTES } from "@/lib/site";

type Props = {
  searchParams: Promise<{ tab?: string }>;
};

/** 구 `/perineum` → 신규 라우트로 301 */
export default async function PerineumRedirectPage({ searchParams }: Props) {
  const { tab } = await searchParams;

  if (tab === "minora") {
    permanentRedirect(MINORA_ROUTES.hub);
  }
  if (tab === "laser" || tab === "hair-removal") {
    permanentRedirect(LABIA_ROUTES.hairRemoval);
  }
  if (tab === "whiten" || tab === "whitening") {
    permanentRedirect(LABIA_ROUTES.whitening);
  }

  permanentRedirect(LABIA_ROUTES.hub);
}
