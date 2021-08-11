import { Transition } from '@headlessui/react';
import React, { ReactElement, useEffect, useRef, useState } from 'react';

export type Tab = {
  name: string;
  content: string | ReactElement;
};
type TabbedPaneProps = {
  tabs: Tab[];
  onTabClick?: (tab: Tab) => void;
};
const TabbedPane: React.FC<React.PropsWithChildren<TabbedPaneProps>> = (
  props,
) => {
  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState<number>(-1);
  const tabs = useRef<HTMLButtonElement[]>([]);

  const focusTab = () => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus();
      return;
    }
    if (tabFocus >= tabs.current.length) {
      setTabFocus(0);
    }

    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1);
    }
  };

  // Only re-run the effect if tabFocus changes
  useEffect(() => focusTab(), [tabFocus]);

  // Focus on tabs when using up & down arrow keys
  const onKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowUp': {
        event.preventDefault();
        setTabFocus(tabFocus - 1);
        break;
      }

      case 'ArrowDown': {
        event.preventDefault();
        setTabFocus(tabFocus + 1);
        break;
      }
    }
  };

  return (
    <div className={'flex flex-row'}>
      <div
        role='tablist'
        aria-label={''}
        className={'relative z-10 max-w-max'}
        onKeyDown={onKeyDown}>
        {props.tabs.map((tab, index) => (
          <button
            key={index}
            role={'tab'}
            tabIndex={index}
            ref={(el) => {
              tabs.current[index] = el as HTMLButtonElement;
            }}
            id={`tab-${index}`}
            aria-selected={activeTabId === index ? 'true' : 'false'}
            aria-controls={`tab-pane-${index}`}
            className={
              'cursor-pointer w-full border-l-2 ' +
              ' whitespace-nowrap flex items-center pl-4 pr-4 py-2 hover:bg-gray-800 hover:text-white ' +
              `${
                activeTabId === index
                  ? 'text-accent-green border-accent-green'
                  : 'border-gray-700 text-white'
              }`
            }
            onClick={() => {
              setActiveTabId(index);
              // props.onTabClick(tab);
            }}>
            {tab.name}
          </button>
        ))}
      </div>
      <div className={'w-full ml-4'}>
        {props.tabs.map((tab, index) => {
          return (
            <Transition
              key={index}
              show={activeTabId === index}
              enter={'transition-opacity duration-200'}
              enterFrom='opacity-0'
              enterTo='opacity-100'
              id={`tab-pane-${index}`}
              role={'tabpanel'}
              tabIndex={activeTabId === index ? 0 : -1}
              aria-labelledby={`tab-${index}`}
              aria-hidden={activeTabId === index}>
              {tab.content}
            </Transition>
          );
        })}
      </div>
    </div>
  );
};

export default TabbedPane;
