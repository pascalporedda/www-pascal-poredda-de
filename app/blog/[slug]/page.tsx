import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Mdx } from '@/components/mdx';
import { allBlogs } from 'contentlayer/generated';
import Balancer from 'react-wrap-balancer';
import { TypographyH1 } from '@/components/ui/typogrpahy/h1';

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: any): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    slug,
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

export default async function BlogPage({ params }: any) {
  const post = allBlogs.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const structuredData = JSON.stringify(post.structuredData);

  // const tweets = await getTweets(post.tweetIds);

  return (
    <section className='container'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: structuredData }}></script>
      <TypographyH1 className='max-w-[650px]'>
        <Balancer>{post.title}</Balancer>
      </TypographyH1>
      <div className='grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 font-mono text-sm max-w-[650px]'>
        <div className='bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter'>
          {post.publishedAt}
        </div>
        <div className='h-[0.2em] bg-neutral-50 dark:bg-neutral-800 mx-2' />
        {/*
      <ViewCounter slug={post.slug} trackView /> */}
      </div>
      <Mdx code={post.body.code} />
    </section>
  );
}
