export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        disallow: ['_next/', 'api/'],
      },
    ],
    sitemap: 'https://pascal-poredda.de/sitemap.xml',
    host: 'https://pascal-poredda.de',
  };
}
