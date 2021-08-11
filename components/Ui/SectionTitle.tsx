import React from 'react';

export type SectionTitleProps = {
  children?: React.ReactChild;
  size?: 'sm' | 'lg';
  textPosition?: 'left' | 'center' | 'right';
};

const SectionTitle: React.FC<
  SectionTitleProps & React.HTMLAttributes<HTMLHeadingElement>
> = (props) => {
  const className = ['font-extrabold'];

  switch (props.size) {
    case 'lg':
      className.push('text-3xl lg:text-5xl lg:leading-normal');
      break;
    case 'sm':
      className.push('text-lg lg:text-xl lg:leading-normal');
      break;
    default:
      className.push('text-xl lg:text-2xl lg:leading-normal');
  }

  switch (props.textPosition) {
    case 'left':
      className.push('text-left');
      break;
    case 'right':
      className.push('text-right');
      break;
    case 'center':
    default:
      className.push('text-center');
  }

  if (props.className) {
    className.push(props.className);
  }

  return <h1 className={className.join(' ')}>{props.children}</h1>;
};

export default SectionTitle;
