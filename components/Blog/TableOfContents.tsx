import React, { useEffect } from 'react';
import { TableOfContentsItems } from '../../types/blog';
import cs from 'classnames';

type TableOfContentsProps = {
  tableOfContents: TableOfContentsItems;
  activeAnchor?: string;
};
const TableOfContents: React.FC<React.PropsWithChildren<TableOfContentsProps>> =
  ({ tableOfContents, activeAnchor }) => {
    useEffect(() => {
      return () => {};
    }, []);

    return (
      <aside className={'relative flex flex-col text-sm'}>
        <div className='sticky top-12'>
          <h2
            className={
              'uppercase  text-lg tracking-wider border-b-2 border-accent-green mb-4'
            }>
            Table of Contents
          </h2>
          {tableOfContents.map((tocEntry) => (
            <a
              key={tocEntry.title}
              href={`#${tocEntry.anchor}`}
              title={`Jump to ${tocEntry.title}`}
              className={cs(
                'py-2 block px-2 hover:bg-accent-green hover:text-white focus:bg-accent-green transition-all',
                {
                  'bg-accent-green text-white':
                    activeAnchor === tocEntry.anchor,
                },
              )}>
              {tocEntry.title}
            </a>
          ))}
        </div>
      </aside>
    );
  };

export default TableOfContents;
