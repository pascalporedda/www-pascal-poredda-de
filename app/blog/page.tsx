import { TypographyH1 } from '@/components/ui/typogrpahy/h1';
import Link from 'next/link';
import { parse } from 'date-fns';
import DateFormatter from '@/components/date-formatter';

import { getBlogPosts } from '../db/blog';

export const metadata = {
  title: 'Blog',
  description:
    'Interesting takes on software development, building better things and the pathless path.',
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
    <section>
      <h1 className='font-medium text-2xl mb-8 tracking-tighter'>
        read my blog
      </h1>
      <ul className='my-6 list-none [&>li]:mt-2'>
        {entries.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <DateFormatter
                className={'text-gray-400'}
                dateString={post.metadata.publishedAt}
              />{' '}
              - {post.metadata.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
