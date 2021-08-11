import React, { HTMLAttributes } from 'react';

const Card: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const classes = [
    'p-4 bg-white filter drop-shadow-lg rounded-xl flex flex-col text-black',
  ];
  if (props.className) {
    classes.push(props.className);
  }

  return <div className={classes.join(' ')}>{props.children}</div>;
};

export default Card;
