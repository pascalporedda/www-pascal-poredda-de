import { allBlogs } from 'contentlayer/generated';

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `https://pascal-poredda.de/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = ['', '/blog', '/about'].map((route) => ({
    url: `https://pascal-poredda.de${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}
