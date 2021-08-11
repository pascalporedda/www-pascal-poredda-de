import PageMetaAndTitle from '../SEO/PageMetaAndTitle';
import React from 'react';
import { withSeoDefaults } from '../../util/seo-util';
import { name } from '../../util/config';
import SectionTitle from '../Ui/SectionTitle';
import Link from 'next/link';
import Image from 'next/image';
import { PageError } from '../../types';

export const NotFoundPage: React.FC<{ error?: PageError }> = ({ error }) => {
  const title = '404 Page not found - ' + name;
  const metadata = withSeoDefaults({
    title,
    ogTitle: title,
  });
  const items = [
    {
      title: 'Home',
      url: '/',
      linkTitle: 'About Pascal Poredda',
    },
    {
      title: 'Blog',
      url: '/blog',
      linkTitle: 'Blog posts about Angular, Cloud and other techy stuff',
    },
    {
      title: 'Portfolio',
      url: '/portfolio',
      linkTitle: 'Stuff I have built in the past',
    },
    {
      title: 'Contact',
      url: '/contact',
      linkTitle:
        'Want to book me as a speaker? Or just want to get in touch? Contact me',
    },
  ];
  return (
    <div className={'lg:mx-auto lg:max-w-3xl py-8 lg:px-0 px-8'}>
      <PageMetaAndTitle metaData={metadata} />
      <div className='flex items-center'>
        <a
          className={'block rounded-full filter drop-shadow-xl'}
          title={'To the blogs main page'}>
          <Image
            src={'/sidebar-logo.jpg'}
            alt={'Picture of Pascal Poredda'}
            className={'rounded-full'}
            width={75}
            height={75}
          />
        </a>
        <span className={'text-2xl font-extrabold ml-4'}>Oh sh**!</span>
      </div>
      <SectionTitle textPosition={'left'} size={'lg'}>
        Whooops!
      </SectionTitle>
      <p className={'text-xl'}>
        I can&apos;t seem to find the page you&apos;re looking for.
      </p>
      <p className={'text-gray-700 mb-8'}>
        <small>Error code: 404</small>
        {error?.message && <span>{error.message}</span>}
      </p>
      <p className={'text-xl font-bold mb-4'}>
        Maybe one of those links might help?
      </p>
      <nav>
        <ul className={'text-xl list-disc'}>
          {items.map((item) => (
            <li key={item.url}>
              <Link href={item.url} passHref>
                <a
                  title={item.linkTitle}
                  className={'px-4 py-2 text-accent-green'}>
                  {item.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
