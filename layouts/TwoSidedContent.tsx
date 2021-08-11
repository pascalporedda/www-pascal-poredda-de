import React, { ReactElement } from 'react';
import { PageFooter } from '../components/Ui/PageFooter';

type TwoSidedContentProps = {
  lightSide: ReactElement;
  darkSide: ReactElement;
};
const TwoSidedContent: React.FC<React.PropsWithChildren<TwoSidedContentProps>> =
  ({ darkSide, lightSide }) => {
    return (
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:w-1/2 flex-shrink-0 2xl:w-1/3 lg:h-screen px-8 py-4 lg:overflow-y-scroll scrollbar-none'>
          {lightSide}
        </div>
        <div className='bg-gray-900 text-white px-8 py-4 lg:w-full lg:h-screen overflow-y-scroll'>
          {darkSide}
          <div className='py-8'>
            <PageFooter />
          </div>
        </div>
      </div>
    );
  };

export default TwoSidedContent;
