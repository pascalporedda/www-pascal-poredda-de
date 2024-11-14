import Link from 'next/link';
import { parse } from 'date-fns';
import DateFormatter from '@/components/date-formatter';
import { getBlogPosts } from '../db/blog';

export const metadata = {
  title: 'Blog about Rust, Next.Js, Indie Hacking and more',
  description:
    'Technical articles and life experiences from my journey as a developer.',
};

export default async function Blog() {
  const allBlogs = getBlogPosts();

  const entries = allBlogs
    .map((post) => ({
      ...post,
      timestamp: parse(post.metadata.publishedAt, 'yyyy-MM-dd', new Date()),
    }))
    .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

  return (
    <div className='max-w-2xl space-y-8'>
      {/* Header */}
      <div className='space-y-4'>
        <h1 className='text-3xl font-bold tracking-tight'>Blog</h1>
        <p className='text-zinc-400 leading-relaxed'>
          I write about software development, freelancing, and building
          products. Here are all my articles, sorted by date.
        </p>
      </div>

      {/* Blog Posts List */}
      <div className='space-y-4'>
        {entries.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className='block group'>
            <article className='p-4 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all bg-zinc-900/50'>
              <div className='space-y-2'>
                <div className='flex items-center gap-2 text-sm text-zinc-400'>
                  <DateFormatter dateString={post.metadata.publishedAt} />
                </div>
                <h2 className='font-medium text-lg group-hover:text-orange-500 transition-colors'>
                  {post.metadata.title}
                </h2>
                {post.metadata.summary && (
                  <p className='text-sm text-zinc-400 line-clamp-2'>
                    {post.metadata.summary}
                  </p>
                )}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
