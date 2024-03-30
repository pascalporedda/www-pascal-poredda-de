import { TypographyH1 } from '@/components/ui/typogrpahy/h1';
import { allBlogs } from 'contentlayer/generated';
import Link from 'next/link';
import { parse } from 'date-fns';
import DateFormatter from '@/components/date-formatter';

export const metadata = {
  title: 'Blog',
  description:
    'Interesting takes on software development, building better things and the pathless path.',
};

export default async function Blog() {
  const entries = allBlogs
    .map((post) => ({
      ...post,
      timestamp: parse(post.publishedAt, 'yyyy-MM-dd', new Date()),
    }))
    .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

  return (
    <div className='container'>
      <TypographyH1>read one of my occasional blog posts</TypographyH1>
      <section>
        <ul className='my-6 ml-6 list-none [&>li]:mt-2'>
          {entries.map((post) => (
            <li key={post._id}>
              <Link href={`/blog/${post.slug}`}>
                <DateFormatter
                  className={'text-gray-400'}
                  dateString={post.publishedAt}
                />{' '}
                - {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
