import TwoSidedContent from '../layouts/TwoSidedContent';
import SectionTitle from '../components/Ui/SectionTitle';
import { Cookies, withCookies } from 'react-cookie';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookie } from '@fortawesome/free-solid-svg-icons';
import { Toggle } from '../components/Ui/Form/Toggle';
import { withPortfolioLayout } from '../layouts/PortfolioLayout';
import { NextComponentWithLayout } from './_app';

type CookiesPageProp = {
  cookies: Cookies;
  allCookies: Record<string, unknown>;
};
const CookiesPage: React.FC<CookiesPageProp> = ({ cookies, allCookies }) => {
  const [currentCookies, setCurrentCookies] = useState(allCookies);
  const [cookiesAllowed, setCookiesAllowed] = useState(false);

  useEffect(() => {
    cookies.addChangeListener((options) => {
      const allCookies = cookies.getAll();
      setCurrentCookies(allCookies);
      setCookiesAllowed(
        !!(
          allCookies['CookieConsent'] && allCookies['CookieConsent'] === 'true'
        ),
      );
    });
  }, []);

  const darkSide = (
    <div className={'leading-relaxed text-sm'}>
      <SectionTitle className={'mb-2'} textPosition={'left'}>
        Cookies
      </SectionTitle>
      <p className={'mb-4'}>
        Privacy should be standard. But most of the time it is not. I myself am
        a huge friend of data protection & privacy by default, but it is not
        always easy to combine the personal point of view with the with the view
        of an entrepreneur and developer. I would like to to know who visited my
        websites and if new conversions develop from it. However, only with the
        consent of the user.
      </p>
      <SectionTitle className={'mb-2'} textPosition={'left'}>
        Whats a cookie?
      </SectionTitle>
      <p className={'mb-4'}>
        Cookies are small text files that are used by websites in order to to
        make the user experience better. As a technical solution cookies are
        unavoidable in various problematic cases, e.g. to store your login
        information, so called Auth-Tokens, so that you remain logged in when
        you leave a page or if cookies are used to save whether you allow
        cookies or not. to save if you allow cookies. According to the law you
        are not allowed to not use all cookies without your consent.
        Technically, there are the classic cookies and since HTML5 also
        SessionStorage & LocalStorage in the following will be the
        comprehensibility all types are called cookies. There are three
        different types of cookies are used on this website.
      </p>
      <SectionTitle className={'mb-2'} textPosition={'left'}>
        Automatic Cookies (1)
      </SectionTitle>
      <p className={'mb-4'}>
        Automatic cookies help to technically implement the DoNotTrack the
        DoNotTrack decision you made in your browser settings. to implement.
        Therefore a SessionStorage is automatically set which tells the system
        that all settings that have to do with cookies or data collection or the
        collection of data are set to disabled.
      </p>
      <CookieCard
        name={'donottrack'}
        usage={'donottrack'}
        expiry={'Closing the tab or the browser.'}
        type={'SessionStorage'}
      />
      <SectionTitle className={'mb-2'} textPosition={'left'}>
        Necessary Cookies (2)
      </SectionTitle>
      <p className={'mb-4'}>
        Necessary cookies help make a website usable by providing basic
        functions such as page navigation and access to secure areas of the
        secure areas of the website. The website cannot function properly
        without these function properly without these cookies.
      </p>
      <CookieCard
        name={'CookieConsent'}
        usage={
          "Storage of the user's consent status for cookies on the current domain."
        }
        expiry={'never'}
        type={'HTTP Cookie'}
      />
      <SectionTitle className={'mb-2'} textPosition={'left'}>
        Analytical cookies (3)
      </SectionTitle>
      <p className={'mb-4'}>
        Analytical cookies help website owners to understand how visitors
        interact with websites by collecting and reporting information
        anonymously.
      </p>
      <CookieCard
        name={'_gat'}
        usage={
          'Registers a unique ID that is used to generate statistical data about how the visitor uses the website.'
        }
        expiry={'50 days'}
        type={'HTTP Cookie'}
      />
      <CookieCard
        name={'_ga'}
        usage={
          'Registers a unique ID that is used to generate statistical data about how the visitor uses the website.'
        }
        expiry={'50 days'}
        type={'HTTP Cookie'}
      />
      <CookieCard
        name={'_gid'}
        usage={
          'Registriert eine eindeutige ID, die verwendet wird, um statistische Daten dazu, wie der Besucher die Website nutzt, zu generieren.'
        }
        expiry={'50 days'}
        type={'HTTP Cookie'}
      />
    </div>
  );

  let cookieLabel = (
    <span className={'text-accent-green'}>Cookies: not allowed</span>
  );

  if (cookiesAllowed) {
    cookieLabel = <span className={'text-accent-red'}>Cookies: allowed</span>;
  }

  const lightSide = (
    <>
      <SectionTitle textPosition={'left'} size={'lg'} className={'mb-4'}>
        Not the one to eat
      </SectionTitle>
      <p className={'mb-4'}>
        Here you will find all the information about the topic, cookies,
        trackings and privacy. The standard: Privacy by Default.
      </p>
      <Toggle
        onChange={(value) => {
          console.log(value);
          if (value) {
            cookies.set('CookieConsent', 'true');
          } else {
            cookies.set('CookieConsent', 'false');
          }
        }}
        label={cookieLabel}
        defaultChecked={cookiesAllowed}
        switchColors={true}
      />
    </>
  );

  return <TwoSidedContent lightSide={lightSide} darkSide={darkSide} />;
};

type CookieCardProps = {
  name: string;
  usage: string;
  expiry: string;
  type: string;
};

function CookieCard(props: CookieCardProps) {
  return (
    <div
      className={
        'rounded flex flex-col p-4 bg-gray-850 filter drop-shadow-lg mb-8 ' +
        'text-gray-700 space-y-2'
      }>
      <div className='flex'>
        <FontAwesomeIcon className={'mr-2'} icon={faCookie} size={'lg'} />
        <span className={'text-white'}>Cookie</span>
      </div>
      <div className='flex'>
        <p className={'text-white font-bold mr-4 w-16 flex-shrink-0'}>Name</p>
        <p>{props.name}</p>
      </div>
      <div className='flex'>
        <p className={'text-white font-bold mr-4 w-16 flex-shrink-0'}>Usage</p>
        <p>{props.usage}</p>
      </div>
      <div className='flex'>
        <p className={'text-white font-bold mr-4 w-16 flex-shrink-0'}>Expiry</p>
        <p>{props.expiry}</p>
      </div>
      <div className='flex'>
        <p className={'text-white font-bold mr-4 w-16 flex-shrink-0'}>Type</p>
        <p>{props.type}</p>
      </div>
    </div>
  );
}

const CookieWrapper = withCookies(CookiesPage);

(CookieWrapper as NextComponentWithLayout).getLayout = withPortfolioLayout;

export default CookieWrapper;
