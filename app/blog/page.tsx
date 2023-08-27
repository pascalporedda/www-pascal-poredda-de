import { TypographyH1 } from '@/components/ui/typogrpahy/h1';
import { allBlogs } from 'contentlayer/generated';
import Link from 'next/link';

export const metadata = {
  title: 'Blog',
  description:
    'Interesting takes on software development, building better things and the pathless path.',
};

export default async function Blog() {
  return (
    <div className='container'>
      <TypographyH1>read my blog</TypographyH1>
      <section>
        <ul className='my-6 ml-6 list-none [&>li]:mt-2'>
          {allBlogs.map((post) => (
            <li key={post._id}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
