import Link from 'next/link';
import { getAllPosts } from '../../util/blog-util';
import { withBlogLayout } from '../../layouts/BlogLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  faArrowRight,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import cs from 'classnames';
import { InferGetStaticPropsType } from 'next';
import DateFormatter from '../../components/Blog/DateFormatter';
import { BlogPost, PageMetaData } from '../../types';
import PageMetaAndTitle from '../../components/SEO/PageMetaAndTitle';
import { withSeoDefaults, withUrls } from '../../util/seo-util';
import { useRouter } from 'next/router';
import { instagram, name } from '../../util/config';

export default function Index({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { featuredPosts, unfeaturedPosts } = posts;
  const router = useRouter();

  const title = 'Blog - ' + name;
  const metadata: PageMetaData = withUrls(
    withSeoDefaults({
      title,
      ogTitle: title,
    }),
    router.pathname,
  );
  return (
    <>
      <PageMetaAndTitle metaData={metadata} />
      <section className={'py-8'}>
        <h1 className={'font-extrabold text-4xl leading-relaxed'}>
          Hi 👋🏻, <br /> my name is Pascal and welcome to my blog.
        </h1>
        <p className='text-gray-700 mb-4 text-2xl font-bold'>
          Here, I share through my writing the struggles I go through as a
          frontend engineer, climber and aspiring podcaster and everything{' '}
          {"I'm"} learning about. So far {"I've"} shared &nbsp;
          {featuredPosts.length + unfeaturedPosts.length} posts about that
          stuff.
        </p>
        <div className='flex items-center space-x-4'>
          <Link passHref={true} href={'/'}>
            <a
              title={
                'Visit my main website for further information about myself.'
              }
              className={'text-accent-green hover:underline'}>
              About me <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          </Link>
          <a
            title={'Go follow me on Instagram'}
            href={'https://instagram.com/' + instagram}
            rel={'noreferrer'}
            className={'text-accent-green hover:underline'}>
            @{instagram} <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </section>
      <section className={'py-8 space-y-8'}>
        <h2 className={'text-3xl font-extrabold'}>Featured</h2>
        {featuredPosts.map((post, index) => {
          const headerClasses = cs(
            'text-2xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r',
            {
              'from-purple-800 to-purple': index === 0,
              'from-turquoise-800 to-turquoise': index === 1,
              'from-orange-800 to-orange': index === 2,
              'from-pink-800 to-pink': index === 3,
            },
          );

          const articleClasses = cs(
            'rounded-2xl hover:cursor-pointer hover:scale-105 transition hover:shadow-2xl bg-gray-100 text-dark dark:bg-gray-875 p-8 dark:text-white filter drop-shadow-xl hover:ring-8',
            {
              'ring-purple': index === 0,
              'ring-turquoise': index === 1,
              'ring-orange': index === 2,
              'ring-pink': index === 3,
            },
          );

          return (
            <Link key={post.slug} passHref href={'/blog/' + post.slug}>
              <a title={'Read this featured blog post about: ' + post.slug}>
                <article className={articleClasses}>
                  <h3 className={headerClasses}>{post.title}</h3>
                  <p
                    className={
                      'text-dark dark:text-gray-700 text-lg font-bold'
                    }>
                    {post.excerpt}
                  </p>
                </article>
              </a>
            </Link>
          );
        })}
      </section>
      <section className={'py-8 space-y-4'}>
        <h2 className={'text-3xl font-extrabold mb-8'}>All articles</h2>
        <ol className={'space-y-2'}>
          {unfeaturedPosts.map((post) => {
            const classes = cs(
              'flex items-center px-4 py-2 rounded-xl',
              'hover:bg-gray-850 hover:scale-105 hover:text-white transition text-lg font-bold',
            );
            return (
              <li className={''} key={post.slug}>
                <Link passHref href={`/blog/${post.slug}`}>
                  <a
                    title={`Read this post about: ${post.title}`}
                    className={classes}>
                    <DateFormatter
                      shortFormat
                      dateString={post.publishedDate}
                    />
                    <h3>{post.title}</h3>
                    <FontAwesomeIcon
                      className={'ml-4'}
                      size={'lg'}
                      icon={faArrowRight}
                    />
                  </a>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
}

Index.getLayout = withBlogLayout;

export async function getStaticProps() {
  const posts = getAllPosts<BlogPost>([
    'title',
    'publishedDate',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { posts },
  };
}
