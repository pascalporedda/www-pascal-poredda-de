import React from 'react';
import { GetStaticProps } from 'next';
import { SocialFeedPost, SocialNetwork } from '../types';
import SocialCard from '../components/Ui/SocialCard';
import SocialPostCard from '../components/Ui/SocialPostCard';
import TwoSidedContent from '../layouts/TwoSidedContent';
import { withPortfolioLayout } from '../layouts/PortfolioLayout';
import PageMetaAndTitle from '../components/SEO/PageMetaAndTitle';
import { withSeoDefaults, withUrls } from '../util/seo-util';
import { useRouter } from 'next/router';
import * as config from '../util/config';
import {
  buildSpotifyFeed,
  getGithubProjects,
  getYoutubePosts,
} from '../util/socials';

function Home({ socialMediaPosts }: { socialMediaPosts: SocialFeedPost[] }) {
  const lightSide = (
    <>
      <h1 className={'hidden lg:block text-3xl font-extrabold'}>
        I&apos;m Pascal,
      </h1>
      <h1 className={'text-2xl lg:text-5xl font-extrabold mb-8'}>
        Tech Advocate &amp;
        <br /> Front-End Developer
      </h1>
      <p
        className={
          'mb-8 text-sm xl:w-3/4 text-justify leading-relaxed text-lg'
        }>
        Since 2014 I am engaged in software development, always passionate to
        find and create the best solution for the problems of my customers. As a
        freelance Front-End Developer I earned my first money. Currently I
        support the{' '}
        <a
          href={'https://rola.com'}
          className={'text-accent-green underline'}
          title={'rola Security Solutions GmbH'}>
          rola Security Solutions GmbH
        </a>{' '}
        as a Senior Front-End Developer where I do work a lot with{' '}
        <a
          href={'https://angular.io/'}
          className={'text-accent-green underline'}
          title={'Angular Frontend Framework'}>
          Angular
        </a>
        , Microservices, APIs,{' '}
        <a
          title={'Jest Unit Testing'}
          className={'text-accent-green underline'}
          href={'https://jestjs.io/'}>
          Unit Testing
        </a>
        ,&nbsp;
        <a
          href={'https://cypress.org'}
          className={'text-accent-green underline'}
          title={'Cypress E2E Testing'}>
          E2E Testing
        </a>{' '}
        and anything, that is related to it.
        <br />
        <br />
        In my free time, I am especially driven by sports, but also by self
        development. Currently I am in the process of further developing my
        presentation and speaking skills. That&apos;s why I joined the{' '}
        <a
          href={'https://toastmasters-essen.de/'}
          className={'text-accent-green underline'}
          title={'Toastmasters Club - Ruhr Speakers Essen'}>
          Ruhr Speakers
        </a>{' '}
        in Essen and started a{' '}
        <a
          href={'https://open.spotify.com/show/4dNx1hTfyz6HBbZj1NlZSc'}
          className={'text-accent-green underline'}
          title={'Software Cafe Podcast'}>
          German Tech-Podcast
        </a>{' '}
        at the same time. On my{' '}
        <a
          href={'https://www.youtube.com/c/PascalPoredda'}
          className={'text-accent-green underline'}
          title={"Pascal Poredda's YouTube Channel"}>
          YouTube Channel
        </a>{' '}
        you will get a insight into my personal life as well as some tutorials.
      </p>

      {/* TODO: make this a semantic navigation, improve accessibility */}
      <div className='flex space-y-2 lg:space-y-0 lg:space-x-2 items-center xl:w-3/4 lg:flex-row flex-col'>
        <SocialCard social={SocialNetwork.Twitter} />
        <SocialCard social={SocialNetwork.Spotify} />
        <SocialCard social={SocialNetwork.YouTube} />
        <SocialCard social={SocialNetwork.Instagram} />
      </div>
    </>
  );

  const darkSide = (
    <>
      <iframe
        src='https://open.spotify.com/embed/show/4dNx1hTfyz6HBbZj1NlZSc?theme=0'
        width='100%'
        height='152'
        frameBorder='0'
        allow='encrypted-media'
        className={'mb-8'}
        title={'Current Podcast Episode'}
      />
      {socialMediaPosts.map((post) => (
        <SocialPostCard post={post} key={post.postId} />
      ))}
    </>
  );

  const router = useRouter();
  const title = 'Pascal Poredda Tech Advocate & Developer - ' + config.name;
  const pageMetaData = withUrls(
    withSeoDefaults({
      title: title,
      ogTitle: title,
    }),
    router.pathname,
  );
  return (
    <>
      <PageMetaAndTitle metaData={pageMetaData} />
      <TwoSidedContent lightSide={lightSide} darkSide={darkSide} />
    </>
  );
}

Home.getLayout = withPortfolioLayout;

export const getStaticProps: GetStaticProps = async () => {
  const resolve: Promise<SocialFeedPost[]>[] = [];

  if (config.youtube) {
    resolve.push(getYoutubePosts(config.youtube));
  }

  if (config.spotify) {
    resolve.push(buildSpotifyFeed(config.spotify));
  }

  if (config.github) {
    resolve.push(getGithubProjects(config.github));
  }

  const posts = (await Promise.all(resolve)).reduce(
    (previousValue, currentValue) => {
      return previousValue.concat(currentValue);
    },
    [],
  );

  return {
    props: {
      socialMediaPosts: posts.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        if (dateA.getTime() > dateB.getTime()) {
          return -1;
        } else if (dateA.getTime() < dateB.getTime()) {
          return 1;
        }
        return 0;
      }),
    },
  };
};

export default Home;
