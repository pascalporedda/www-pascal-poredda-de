import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDX } from '@/components/mdx';
import Balancer from 'react-wrap-balancer';
import { TypographyH1 } from '@/components/ui/typogrpahy/h1';
import { getBlogPosts } from '@/app/db/blog';

export async function generateMetadata(
  props: any,
): Promise<Metadata | undefined> {
  const params = await props.params;
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    return notFound();
  }

  const {
    slug,
    metadata: {
      summary: description,
      title,
      image,
      publishedAt: publishedTime,
    },
  } = post;
  const ogImage = image
    ? `https://pascal-poredda.de${image}`
    : `https://pascal-poredda.de/api/open-graph?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://pascal-poredda.de/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogPage(props: any) {
  const params = await props.params;
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section className='max-w-2xl space-y-8'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://pascal-poredda.de${post.metadata.image}`
              : `https://pascal-poredda.de/og?title=${post.metadata.title}`,
            url: `https://pascal-poredda.de/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Pascal Poredda',
            },
          }),
        }}
      />
      <TypographyH1 className='max-w-[650px]'>
        <Balancer>{post.metadata.title}</Balancer>
      </TypographyH1>
      <div className='grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 font-mono text-sm max-w-[650px]'>
        <div className='bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter'>
          {post.metadata.publishedAt}
        </div>
        <div className='h-[0.2em] bg-neutral-50 dark:bg-neutral-800 mx-2' />
      </div>
      <article className='prose prose-quoteless prose-neutral dark:prose-invert text-wrap'>
        <MDX source={post.content} />
      </article>
    </section>
  );
}
