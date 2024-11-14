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
      <div className='container mx-auto flex items-center justify-between py-4'>
        <nav>
          <ul className='flex space-x-6'>
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
          </ul>
        </nav>
        <Link href={'https://calendly.com/pascal-poredda-lj1x/30min'}>
          <Button className='text-primary border-primary hover:bg-primary hover:text-white transition-colors'>
            Get to know call
          </Button>
        </Link>
      </div>
    </header>
  );
}
