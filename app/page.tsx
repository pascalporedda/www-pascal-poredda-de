import { about, name, short_bio } from '@/lib/about';
import Image from 'next/image';
import avatar from '@/app/avatar.jpg';
import {
  ArrowRightIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  PaperPlaneIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Home() {
  return (
    <>
      <div className='flex items-start sm:items-center my-8 flex-col sm:flex-row'>
        <Avatar className='w-24 h-24'>
          <AvatarImage
            src={avatar.src}
            alt='Pascal Poredda'
            className='grayscale'
          />
          <AvatarFallback>PP</AvatarFallback>
        </Avatar>
        <div className='space-y-2'>
          <h1 className='text-white text-2xl font-bold'>Pascal Poredda</h1>
          <p className='text-gray-200 max-w-[380px]'>
            Rust Freelancer for hire. I am building products online & write
            articles on my{' '}
            <Link href='/blog' className='underlin'>
              blog
            </Link>
            .
          </p>
          <p className='text-gray-400'>🇩🇪 Köln - 🇪🇸 Barcelona</p>
        </div>
      </div>
      {/* <h1 className='font-bold text-3xl mt-2'>{name} Poredda</h1> */}
      {/* <p className='my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200'> */}
      {/*   {short_bio()} */}
      {/* </p> */}
      {/* <hr className='h-px my-2 bg-gray-200 border-0 dark:bg-gray-700' /> */}
      {/* <div className='flex items-start sm:items-center my-8 flex-col sm:flex-row'> */}
      {/*   <Image */}
      {/*     alt={name} */}
      {/*     className='rounded-full grayscale' */}
      {/*     src={avatar} */}
      {/*     placeholder='blur' */}
      {/*     width={100} */}
      {/*     priority */}
      {/*   /> */}
      {/*   <div className='mt-8 sm:mt-0 ml-0 sm:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400'> */}
      {/*     <a */}
      {/*       rel='noopener noreferrer' */}
      {/*       target='_blank' */}
      {/*       title={"Visit Pascal Poredda's LinkedIn profile"} */}
      {/*       href='https://www.linkedin.com/in/pascal-poredda-8025221b5/' */}
      {/*       className='flex items-center gap-2'> */}
      {/*       <LinkedInLogoIcon /> */}
      {/*       My LinkedIn */}
      {/*     </a> */}
      {/*     <a */}
      {/*       rel='noopener noreferrer' */}
      {/*       target='_blank' */}
      {/*       title={"Visit Pascal Poredda's Github profile"} */}
      {/*       href='https://github.com/pascalporedda' */}
      {/*       className='flex items-center gap-2'> */}
      {/*       <GitHubLogoIcon /> */}
      {/*       @pascalporedda */}
      {/*     </a> */}
      {/*     <Link */}
      {/*       href='/blog' */}
      {/*       title={'Read my blog posts'} */}
      {/*       className='flex items-center gap-2'> */}
      {/*       <PaperPlaneIcon /> */}
      {/*       read the blog */}
      {/*     </Link> */}
      {/*   </div> */}
      {/* </div> */}
      <p className='my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200'>
        {about()}
      </p>
      <ul className='flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400'>
        <li>
          <a
            className='flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all space-x-2'
            rel='noopener noreferrer'
            target='_blank'
            title={"Visit Pascal Poredda's X.com profile"}
            href='https://x.com/pascal_poredda'>
            <ArrowRightIcon />
            <p className='h-7'>follow me on X.com</p>
          </a>
        </li>
      </ul>
    </>
  );
}
