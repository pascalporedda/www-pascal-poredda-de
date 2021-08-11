import React, { ReactElement } from 'react';
import { format, parseISO } from 'date-fns';

type DateFormatterProps = {
  dateString: string;
  shortFormat?: boolean;
};
const DateFormatter: React.FC<React.PropsWithChildren<DateFormatterProps>> = ({
  dateString,
  shortFormat,
}) => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString} className={'mr-4 text-gray-700 text-sm'}>
      {format(date, (shortFormat && 'MMM dd') || 'LLLL	d, yyyy')}
    </time>
  );
};

export default DateFormatter;
