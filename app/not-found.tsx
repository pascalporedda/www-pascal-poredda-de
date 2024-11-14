import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HomeIcon } from 'lucide-react';

export default function NotFound() {
  return (
    <div className='max-w-2xl mx-auto space-y-8 text-center'>
      <div className='space-y-4'>
        <h1 className='text-4xl font-bold'>404 - Page Not Found</h1>
        <p className='text-zinc-400 text-lg'>
          Oops! It seems you've ventured into uncharted territory. 
          This page doesn't exist, but don't worry – there's plenty more to explore.
        </p>
      </div>

      <div className='bg-zinc-900 rounded-xl border border-zinc-800 p-8 space-y-6'>
        <p className='text-zinc-300'>
          As a Rust developer who values reliability, I can assure you this is not a system crash – 
          just a page that doesn't exist yet.
        </p>
        
        <Link href='/'>
          <Button className='gap-2'>
            <HomeIcon className='w-4 h-4' />
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
