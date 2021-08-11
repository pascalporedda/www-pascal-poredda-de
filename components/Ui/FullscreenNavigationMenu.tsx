import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/dist/client/link';
import React, { useEffect, useRef, useState } from 'react';
import { PrivacyMenu } from './PrivacyMenu';
import MenuToggleButton from './MenuToggleButton';
import cs from 'classnames';

type FullscreenNavigationMenuProps = {
  visible?: boolean;
  onClose: () => void;
};
export const FullscreenNavigationMenu: React.FC<
  React.PropsWithChildren<FullscreenNavigationMenuProps>
> = ({ visible, onClose }) => {
  // const [isOpen, setIsOpen] = useState(false);
  //
  // // useEffect(() => {
  // //   if (visible === undefined) return;
  // //   console.log('called with: ', visible);
  // //   setIsOpen(visible);
  // // }, [visible]);
  //
  // if (visible !== undefined && isOpen !== visible) {
  //   setIsOpen(visible);
  // }
  //
  const items = [
    {
      title: 'Who am I?',
      description: 'And what am I doing here?',
      url: '/',
      linkTitle: 'About Pascal Poredda',
    },
    {
      title: 'Enjoy reading?',
      description: 'Read through my blog',
      url: '/blog',
      linkTitle: 'Blog posts about Angular, Cloud and other techy stuff',
    },
    {
      title: 'Wanna see references?',
      description: 'Have a look',
      url: '/portfolio',
      linkTitle: 'Stuff I have built in the past',
    },
    {
      title: 'Questions? Work?',
      description: 'Simply contact me',
      url: '/contact',
      linkTitle:
        'Want to book me as a speaker? Or just want to get in touch? Contact me',
    },
  ];

  return (
    <Transition show={visible} as={React.Fragment}>
      <Dialog
        onClose={() => {
          // onClose();
        }}
        unmount={true}
        className='fixed inset-0 flex items-center justify-center h-screen w-screen'>
        <MenuToggleButton
          open={true}
          className={!visible ? 'hidden' : ''}
          clickHandler={onClose}
        />
        <Transition.Child
          as={React.Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <Dialog.Overlay className='fixed inset-0 bg-black z-10 opacity-75' />
        </Transition.Child>
        <Transition.Child
          as={React.Fragment}
          enter='ease-out duration-500'
          enterFrom='opacity-0 scale-0'
          enterTo='opacity-100 scale-100'
          leave='ease-in duration-500'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-0'>
          <div className='z-20 w-full h-full overflow-y-auto flex justify-center items-center py-8 inset-0 absolute bg-gray-900 text-white'>
            <div className={'space-y-8 h-full lg:h-auto'}>
              {items.map((item) => (
                <Link key={item.url} passHref href={item.url}>
                  <a className={'block'} title={item.linkTitle}>
                    <p className={'text-2xl mb-2 font-extrabold'}>
                      {item.title}
                    </p>
                    <p className={'text-sm text-gray-700'}>
                      {item.description}
                    </p>
                  </a>
                </Link>
              ))}
              <div className='flex items-center mb-8 justify-center'>
                <PrivacyMenu orientation={'horizontal'} />
              </div>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
