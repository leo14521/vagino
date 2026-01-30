import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Tailwind 클래스를 병합하고 충돌을 해결하는 함수
 * 예: cn("bg-red-500", condition && "text-white")
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 스크롤 진행률(0~1)을 범위 내 값으로 변환
 */
export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
) {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

/**
 * 대기 함수 (비동기 시뮬레이션용)
 */
export const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));