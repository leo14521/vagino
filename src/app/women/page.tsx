import { permanentRedirect } from "next/navigation";

/** 구 URL `/women` → 메인 `/` */
export default function WomenLegacyRedirect() {
  permanentRedirect("/");
}
