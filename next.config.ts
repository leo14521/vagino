import type { NextConfig } from "next";

// 여성성형센터 단독 배포(trinityrejuve) — 루트(/) 기준.
// 통합 사이트 /sub 하위로 넣을 때는 basePath/assetPrefix를 "/sub"로 되돌린다.

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.trinityclinic.co.kr",
        pathname: "/trinity/file/**",
      },
    ],
  },
};

export default nextConfig;
