import React, { ReactElement, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CookieConsent } from '../components/Ui/CookieConsent';
import { ReactCookieProps, withCookies } from 'react-cookie';
import ReactGA from 'react-ga';
import { googleAnalyticsId } from '../util/config';
import { PageFooter } from '../components/Ui/PageFooter';

const BlogLayout: React.FC<React.PropsWithChildren<ReactCookieProps>> = ({
  children,
  cookies,
}) => {
  const updateGaView = () => {
    if (
      cookies &&
      cookies.get('CookieConsent') === 'true' &&
      googleAnalyticsId
    ) {
      const path = window.location.pathname;
      ReactGA.initialize(googleAnalyticsId, {
        debug: process.env.NODE_ENV === 'development' || false,
      });

      ReactGA.pageview(path);
    }
  };

  useEffect(() => {
    if (cookies) {
      updateGaView();

      cookies.addChangeListener(updateGaView);
    }
  }, []);
  return (
    <>
      <a
        href='#main-content'
        className='sr-only focus:absolute focus:bg-accent-green focus:p-2 focus:text-white focus:not-sr-only'>
        Skip to content
      </a>
      <div className={'max-w-4xl mx-auto'}>
        <nav className={'flex flex-row flex-wrap py-4 lg:px-0 px-8'}>
          <Link passHref href={'/blog'}>
            <a
              className={
                'block mx-auto sm:mx-0 mb-3 sm:mb-0 flex-shrink-0 rounded-full filter drop-shadow-xl'
              }
              title={'To the blogs main page'}>
              <Image
                src={'/sidebar-logo.jpg'}
                alt={'Picture of Pascal Poredda'}
                className={'rounded-full'}
                width={75}
                height={75}
              />
            </a>
          </Link>
          <div className='flex items-center dark:text-white text-dark font-extrabold text-lg mx-auto sm:mr-0 sm:ml-auto space-x-8'>
            <Link passHref={true} href={'/blog'}>
              <a title={'Visit the blog home page'}>blog</a>
            </Link>
            <Link passHref={true} href={'/portfolio'}>
              <a title={'Visit my personal portfolio page'}>portfolio</a>
            </Link>
            <Link passHref={true} href={'/'}>
              <a title={'Visit my personal portfolio page'}>about</a>
            </Link>
            <Link passHref={true} href={'/contact'}>
              <a title={'Send me a contact request for any type of inquiries'}>
                contact
              </a>
            </Link>
          </div>
        </nav>
        <main id='main-content' className={'p-8 lg:p-0'}>
          {children}
        </main>
        <footer>
          <PageFooter />
        </footer>
      </div>
      <CookieConsent
        onAccept={() => {
          cookies && cookies.set('CookieConsent', true);
        }}
        onDecline={() => {
          cookies && cookies.set('CookieConsent', false);
        }}
      />
    </>
  );
};

export const withBlogLayout = (page: ReactElement) => {
  const Component = withCookies((cookieProps) => (
    <BlogLayout
      cookies={cookieProps.cookies}
      allCookies={cookieProps.allCookies}>
      {page}
    </BlogLayout>
  ));

  return <Component />;
};

export default withCookies(BlogLayout);
