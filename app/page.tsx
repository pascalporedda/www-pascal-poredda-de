import { about, name, short_bio } from '@/lib/about';
import Image from 'next/image';
import avatar from '@/app/avatar.jpg';
import {
  ArrowRightIcon,
  CountdownTimerIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

export default async function Home() {
  return (
    <Card className='max-w-2xl'>
      <CardContent>
        <h1 className='font-bold text-3xl mt-2'>{name} Poredda</h1>
        <p className='my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200'>
          {short_bio()}
        </p>
        <div className='flex items-start sm:items-center my-8 flex-col sm:flex-row'>
          <Image
            alt={name}
            className='rounded-full grayscale'
            src={avatar}
            placeholder='blur'
            width={100}
            priority
          />
          <div className='mt-8 sm:mt-0 ml-0 sm:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400'>
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='https://instagram.com/pascal.poredda'
              className='flex items-center gap-2'
            >
              <InstagramLogoIcon />
              @pascal.poredda
            </a>
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='https://github.com/pascalporedda'
              className='flex items-center gap-2'
            >
              <GitHubLogoIcon />
              @pascalporedda
            </a>
            <Link href='/blog' className='flex items-center gap-2'>
              <CountdownTimerIcon />
              read the blog
            </Link>
          </div>
        </div>
        <p className='my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200'>
          {about()}
        </p>
      </CardContent>
      <CardFooter>
        <ul className='flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400'>
          <li>
            <a
              className='flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all space-x-2'
              rel='noopener noreferrer'
              target='_blank'
              href='https://instagram.com/pascal.poredda'
            >
              <ArrowRightIcon />
              <p className='h-7'>follow me on Instagram</p>
            </a>
          </li>
          <li>
            <a
              className='flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all space-x-2'
              rel='noopener noreferrer'
              target='_blank'
              href='https://youtube.com/@pascalporedda'
            >
              <ArrowRightIcon />
              <p className='h-7'>subscribe to my YouTube</p>
            </a>
          </li>
        </ul>
      </CardFooter>
    </Card>
  );
}
