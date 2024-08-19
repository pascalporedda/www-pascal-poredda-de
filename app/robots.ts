import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        disallow: ['/_next/'],
      },
    ],
    sitemap: 'https://pascal-poredda.de/sitemap.xml',
    host: 'https://pascal-poredda.de',
  };
}
