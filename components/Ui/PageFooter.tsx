import React from 'react';
import { PrivacyMenu } from './PrivacyMenu';

export const PageFooter: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <div className='flex items-center flex-col'>
      <p className={'text-xs text-gray-700 mb-2'}>
        &copy; Copyright {year} by Pascal Poredda
      </p>
      <PrivacyMenu orientation={'horizontal'} />
    </div>
  );
};
