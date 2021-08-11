import React from 'react';
import { LoadingIcon } from './LoadingIcon';

export const Loading: React.FC = () => (
  <div className='absolute inset-0 flex items-center justify-center text-dark'>
    <LoadingIcon />
  </div>
);
