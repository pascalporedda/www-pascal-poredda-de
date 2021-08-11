import React, { ReactChild } from 'react';

type ProgressableButtonProps = {
  /**
   * This should be a value between 0 and 1
   */
  progress: number;
  label: string | ReactChild;
};
const ProgressSubmitButton: React.FC<
  React.PropsWithChildren<ProgressableButtonProps>
> = ({ progress, label }) => {
  const classes = [
    'py-2 px-4 text-white overflow-hidden rounded-lg filter drop-shadow text-sm relative',
  ];
  if (progress >= 1) {
    classes.push('bg-accent-green');
  } else {
    classes.push('bg-accent-peach cursor-not-allowed');
  }

  const percentile = Math.floor(progress * 100);
  const progressElement = (
    <>
      <span className={'relative z-20'}>Finished {percentile}%</span>
      <span
        className={
          'absolute opacity-70 transition-all duration-300 ease-in-out  inset-0 bg-accent-red z-10 h-full'
        }
        style={{ width: `${percentile}%` }}
      />
    </>
  );

  return (
    <button
      type={'submit'}
      disabled={progress < 1}
      aria-label={
        'Button to submit the form once all the fields have been properly filled.'
      }
      className={classes.join(' ')}>
      {progress < 1 ? progressElement : label}
    </button>
  );
};

export default ProgressSubmitButton;
