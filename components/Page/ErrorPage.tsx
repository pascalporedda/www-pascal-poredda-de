import React from 'react';
import { PageError } from '../../types';
import { withSeoDefaults } from '../../util/seo-util';
import { name } from '../../util/config';
import PageMetaAndTitle from '../SEO/PageMetaAndTitle';
import SectionTitle from '../Ui/SectionTitle';
import Link from 'next/link';
import Image from 'next/image';

export const ErrorPage: React.FC<{ error?: PageError }> = ({ error }) => {
  const title = '500 Unexpected Error - ' + name;
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
        What a bummer!
      </SectionTitle>
      <p className={'text-xl'}>
        This error was not intended to happen. It&apos;s not your fault, but If
        you would like to help me mail me a bug report at:{' '}
        <a href='mailto:bug@pascal-poredda.de' className={'text-accent-green'}>
          bug@pascal-poredda.de
        </a>
      </p>
      <p className={'text-gray-700 mb-8'}>
        <small>Error code: 500</small>
        {error?.message && <span>{error.message}</span>}
      </p>
      <p className={'text-xl font-bold mb-4'}>
        You could try and see if one of those pages work:
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
