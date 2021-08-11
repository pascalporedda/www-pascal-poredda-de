import React from 'react';
import { default as ReactCookieConsent } from 'react-cookie-consent';

type CookieConsentProps = {
  onAccept: () => void;
  onDecline: () => void;
};
export const CookieConsent: React.FC<CookieConsentProps> = ({
  onAccept,
  onDecline,
}) => {
  return (
    <ReactCookieConsent
      location='none'
      buttonText='Accept all cookies'
      enableDeclineButton={true}
      onAccept={onAccept}
      onDecline={onDecline}
      declineButtonText={'Accept only functional cookies'}
      buttonWrapperClasses={'flex flex-shrink-0 flex-col space-y-2'}
      buttonClasses={
        'mb-0 flex bg-accent-green rounded-lg text-sm text-center items-center justify-center py-2 px-4 flex-wrap-none w-full'
      }
      declineButtonClasses={
        'mb-0 flex bg-accent-green rounded-lg text-sm text-center items-center justify-center py-2 px-4 flex-wrap-none w-full'
      }
      flipButtons={true}
      disableStyles={true}
      containerClasses={
        'py-2 px-4 bg-gray-900 ring ring-accent-green rounded-xl text-white fixed bottom-4 w-auto left-4 right-4 filter drop-shadow-xl flex lg:flex-row flex-col'
      }
      contentClasses={'flex-shrink-1 mb-4 lg:mb-0 lg:mr-4 w-full'}
      expires={150}>
      <p className={'font-bold'}>This website uses cookies</p>
      <p className={'text-gray-700 text-xs'}>
        I am using cookies to analyze the performance and gather statistics
        about how people are interacting with the website. Further information
        can be found on the cookies page or in the privacy disclaimer.
      </p>
    </ReactCookieConsent>
  );
};
