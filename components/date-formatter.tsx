import React from 'react';
import { format, parseISO } from 'date-fns';

export const parseDate = (date: string | Date): Date => {
  if (typeof date === 'string') {
    return parseISO(date);
  }

  return date;
};

const DATE_FORMAT_LONG = 'LLLL d, yyyy';
const DATE_FORMAT_SHORT = 'MMM dd';

const DATE_FORMAT_LONG_WITH_TIME = 'LLLL d, yyyy HH:mm';
const DATE_FORMAT_SHORT_WITH_TIME = 'MMM dd HH:mm';

type DateFormatterProps = {
  dateString: string | Date;
  shortFormat?: boolean;
  includeTime?: boolean;
  asPlainText?: boolean;
  className?: string;
};
const DateFormatter: React.FC<React.PropsWithChildren<DateFormatterProps>> = ({
  dateString,
  shortFormat,
  includeTime,
  asPlainText,
  className: classes,
}) => {
  const date = parseDate(dateString);

  let dateFormat = DATE_FORMAT_LONG;

  if (includeTime) {
    dateFormat = DATE_FORMAT_LONG_WITH_TIME;
  }

  if (shortFormat) {
    if (includeTime) {
      dateFormat = DATE_FORMAT_SHORT_WITH_TIME;
    } else {
      dateFormat = DATE_FORMAT_SHORT;
    }
  }

  if (asPlainText) {
    return <>{format(date, dateFormat)}</>;
  }

  return (
    <time dateTime={date.toISOString()} className={classes}>
      {format(date, dateFormat)}
    </time>
  );
};

export default DateFormatter;
