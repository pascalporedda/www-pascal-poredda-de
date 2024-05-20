import { getBlogPosts } from './db/blog';

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
    url: `https://pascal-poredda.de/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = ['', '/blog', '/about'].map((route) => ({
    url: `https://pascal-poredda.de${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}
