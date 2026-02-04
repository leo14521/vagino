import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://trinityrejuve.netlify.app'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    // 필요하다면 땡큐 페이지 등 추가 페이지도 넣을 수 있지만, 
    // 검색 노출이 필요 없는 페이지(완료 페이지 등)는 굳이 넣지 않습니다.
  ]
}