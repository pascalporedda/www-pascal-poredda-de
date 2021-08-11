import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

type MenuToggleButtonProps = {
  open: boolean;
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};
const MenuToggleButton: React.FC<
  React.PropsWithChildren<MenuToggleButtonProps>
> = ({ className, clickHandler, open }) => {
  const classes = [
    'absolute lg:fixed text-white right-4 top-6 px-2 py-2 lg:top-1/2 z-50 -mr-2 lg:transform -translate-y-1/2',
  ];
  let icon = faBars;
  if (open) {
    icon = faTimes;
  }

  if (className) {
    classes.push(className);
  }

  return (
    <button
      type={'button'}
      onClick={clickHandler}
      className={classes.join(' ')}>
      <FontAwesomeIcon icon={icon} size={'lg'} />
      <span className={'sr-only'}>Toggle menu</span>
    </button>
  );
};

export default MenuToggleButton;

// position: fixed;
// top: 50%;
// left: 2rem;
// z-index: 9999;
// transform: translateY(-50%);
