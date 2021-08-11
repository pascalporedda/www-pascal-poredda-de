import React, { ButtonHTMLAttributes } from 'react';

export type PrimaryButtonPropsType = {
  children?: React.ReactChild;
  onClick?: (event: Event) => void;
  variant?: 'dark-purple' | 'light-purple' | 'white';
};

const PrimaryButton: React.FC<
  PrimaryButtonPropsType & ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => {
  const classes = [
    'block px-4 py-2 text-center rounded-md text-sm transition duration-500 ease-in-out',
  ];
  if (props.className) {
    classes.push(props.className);
  }

  switch (props.variant) {
    case 'light-purple':
      classes.push(
        'bg-purple-100 text-purple hover:bg-purple hover:text-white',
      );

      if (props.disabled) {
        classes.push('cursor-block');
      }
      break;
    case 'white':
      classes.push('bg-white rounded-lg text-purple py-2 px-4');
      break;
    case 'dark-purple':
    default:
      classes.push('bg-accent-green text-white hover:bg-black');

      if (props.disabled) {
        classes.push('bg-gray text-white hover:bg-gray');
      }
  }

  if (props.disabled) {
    classes.push('cursor-not-allowed');
  }

  return (
    <button
      className={classes.join(' ')}
      disabled={props.disabled}
      type={props.type || 'button'}
      onClick={props.onClick ? props.onClick : undefined}>
      {props.children}
    </button>
  );
};

export default PrimaryButton;
