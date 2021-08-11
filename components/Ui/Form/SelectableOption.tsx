import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

type SelectableOptionProps = {
  icon: IconDefinition;
  iconSize?: SizeProp;
  text: string;
  active?: boolean;
  onSelect: () => void;
};
export const SelectableOption: React.FC<
  React.PropsWithChildren<SelectableOptionProps>
> = (props) => {
  const classes = [
    'transition duration-300 ease-in-out transform hover:-translate-y-2 focus:-translate-y-2 hover:cursor-pointer',
    '' +
      'justify-center items-center p-3 py-3 flex-1 w-full flex flex-col bg-gray-850',
    'filter drop-shadow rounded',
  ];

  if (props.active) {
    classes.push('-translate-y-2 bg-gray-800');
  }
  return (
    <button
      type={'button'}
      className={classes.join(' ')}
      onClick={props.onSelect}
      onKeyDown={(event) => (event.key === ' ' ? props.onSelect : undefined)}>
      <FontAwesomeIcon
        icon={props.icon}
        size={props.iconSize}
        className={'mb-1 text-accent'}
      />
      <p className={'text-xs'}>{props.text}</p>
    </button>
  );
};

export default SelectableOption;
