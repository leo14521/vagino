import { permanentRedirect } from "next/navigation";

/** 구 URL 호환 */
export default function PerineumLabiaLegacyRedirect() {
  permanentRedirect("/perineum?tab=labia");
}
