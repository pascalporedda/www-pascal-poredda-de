import React, { ReactElement, useEffect, useState } from 'react';
import Image from 'next/image';
import MenuToggleButton from '../components/Ui/MenuToggleButton';
import { FullscreenNavigationMenu } from '../components/Ui/FullscreenNavigationMenu';
import { ReactCookieProps, withCookies } from 'react-cookie';
import ReactGA from 'react-ga';
import { CookieConsent } from '../components/Ui/CookieConsent';
import { googleAnalyticsId } from '../util/config';

const PortfolioLayout: React.FC<React.PropsWithChildren<ReactCookieProps>> = ({
  children,
  cookies,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <MenuToggleButton
        open={isMenuOpen}
        clickHandler={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      />
      <div className='bg-gray-100 text-gray-900 lg:w-screen lg:h-screen flex flex-col lg:flex-row'>
        <main
          id={'main-content'}
          className={'flex-1 w-full lg:w-auto order-2 lg:order-1'}>
          {children}
        </main>
        <aside
          className={
            'relative lg:w-12 order-1 lg:order-2 bg-accent-green text-white flex-none flex flex-row lg:flex-col items-center'
          }>
          <div className='lg:mb-2 rounded lg:w-full w-12 h-12  lg:w-full mr-4 lg:mr-0'>
            <Image
              src={'/sidebar-logo.jpg'}
              alt={'Picture of Pascal Poredda'}
              width={200}
              height={200}
            />
          </div>
          <p className={'lg:vertical-lr mb-0'}>Hi! My name is Pascal.</p>
        </aside>
      </div>
      <FullscreenNavigationMenu
        onClose={() => {
          setIsMenuOpen(false);
        }}
        visible={isMenuOpen}
      />

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

export const withPortfolioLayout = (page: ReactElement) => {
  const Component = withCookies((cookieProps) => (
    <PortfolioLayout
      cookies={cookieProps.cookies}
      allCookies={cookieProps.allCookies}>
      {page}
    </PortfolioLayout>
  ));

  return <Component />;
};

export default withCookies(PortfolioLayout);
