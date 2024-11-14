import Link from 'next/link';
import { Button } from '@/components/ui/button';

const navItems = {
  '/': {
    name: 'Home',
  },
  '/doing': {
    name: 'Doing',
  },
  '/links': {
    name: 'Links',
  },
  '/blog': {
    name: 'Blog',
  },
};

export function Navbar() {
  return (
    <header className='border-b border-zinc-800'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between md:py-4'>
        <Link
          href={'https://calendly.com/pascal-poredda-lj1x/30min'}
          className='hidden md:block md:order-2 w-full mb-4 md:mb-0 md:w-auto'>
          <Button className='text-primary bg-zinc-900 w-full text-lg md:w-auto border-primary hover:bg-primary hover:text-white transition-colors'>
            Get to know call
          </Button>
        </Link>
        <nav className='flex flex-row space-x-2 md:space-x-6 order-2 md:order-1'>
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className='transition py-2 px-4 text-base sm:text-lg font-semibold hover:bg-orange-500 rounded-xl'>
                {name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
