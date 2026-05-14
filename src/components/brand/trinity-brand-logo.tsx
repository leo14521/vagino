import Image from "next/image";
import { cn } from "@/lib/utils";
import { SITE_NAME, TRINITY_BRAND_LOGO_PATH } from "@/lib/site";

type Props = {
  className?: string;
  /** LCP 등: 헤더 최상단에만 true 권장 */
  priority?: boolean;
};

export function TrinityBrandLogo({ className, priority = false }: Props) {
  return (
    <Image
      src={TRINITY_BRAND_LOGO_PATH}
      alt={SITE_NAME}
      width={220}
      height={72}
      priority={priority}
      className={cn("h-8 w-auto max-w-[min(100%,220px)] object-contain object-left sm:h-9 md:h-10", className)}
      sizes="(max-width: 768px) 200px, 220px"
    />
  );
}
