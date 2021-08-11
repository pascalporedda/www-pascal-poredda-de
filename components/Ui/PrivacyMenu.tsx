import Link from 'next/link';
import React from 'react';
import cs from 'classnames';

type PrivacyMenuProps = {
  orientation: 'vertical' | 'horizontal';
};
export const PrivacyMenu: React.FC<React.PropsWithChildren<PrivacyMenuProps>> =
  ({ orientation }) => {
    const footerItems = [
      {
        url: '/imprint',
        title: 'Imprint',
      },
      {
        url: '/cookies',
        title: 'Cookies',
      },
      {
        url: '/privacy',
        title: 'Privacy',
      },
    ];

    return (
      <ul
        className={cs('flex text-sm text-gray-700', {
          'space-y-2 flex-col': orientation === 'vertical',
          'space-x-2 flex-row': orientation === 'horizontal',
        })}>
        {footerItems.map((item) => (
          <li key={item.url}>
            <Link href={item.url} passHref>
              <a className={'p-2'} title={item.title}>
                {item.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    );
  };
