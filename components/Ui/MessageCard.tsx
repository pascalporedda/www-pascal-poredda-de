import React, { useEffect } from 'react';

export type MessageType = 'success' | 'error' | 'warning';

type MessageCardProps = {
  type: MessageType;
  message: string;
};
const MessageCard: React.FC<React.PropsWithChildren<MessageCardProps>> = (
  props,
) => {
  const classes = [
    'text-white transition-all duration-300 px-4 py-2 rounded-xl mb-4 text-sm',
  ];
  if (props.type === 'error') {
    classes.push('bg-accent-red');
  } else if (props.type === 'success') {
    classes.push('bg-accent-green');
  } else {
    classes.push('bg-accent-orange');
  }

  return (
    <div className={classes.join(' ')}>
      <p>{props.message}</p>
    </div>
  );
};

export default MessageCard;
