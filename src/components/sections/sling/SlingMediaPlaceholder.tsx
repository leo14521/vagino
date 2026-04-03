"use client";

import { ImageIcon, Video } from "lucide-react";

type PlaceholderVariant = "image" | "video";

interface SlingMediaPlaceholderProps {
  variant?: PlaceholderVariant;
  title: string;
  description: string;
  aspectRatio?: "video" | "square" | "wide";
  className?: string;
}

export function SlingMediaPlaceholder({
  variant = "image",
  title,
  description,
  aspectRatio = "video",
  className = "",
}: SlingMediaPlaceholderProps) {
  const ratioClass =
    aspectRatio === "video"
      ? "aspect-video"
      : aspectRatio === "square"
        ? "aspect-square"
        : "aspect-[21/9]";

  return (
    <div
      className={`rounded-2xl border-2 border-dashed border-[#D4C6B5] bg-[#FAF9F6] flex flex-col items-center justify-center p-8 md:p-12 text-center ${ratioClass} ${className}`}
    >
      <div className="w-14 h-14 rounded-2xl bg-[#F4EBE2] flex items-center justify-center text-[#3E522D] mb-4">
        {variant === "video" ? (
          <Video className="w-7 h-7" />
        ) : (
          <ImageIcon className="w-7 h-7" />
        )}
      </div>
      <p className="font-serif font-bold text-[#2E3A30] text-lg md:text-xl mb-2">
        {title}
      </p>
      <p className="font-pretendard text-[#6B7264] text-sm md:text-base max-w-md leading-relaxed">
        {description}
      </p>
    </div>
  );
}
