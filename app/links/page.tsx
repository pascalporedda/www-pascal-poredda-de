import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
  BookOpenIcon,
  BriefcaseIcon,
  WrenchIcon,
  RssIcon,
} from 'lucide-react';
import avatar from '@/app/avatar.jpg';

export default function LinksPage() {
  return (
    <div className='space-y-8 py-8 px-4'>
      {/* Profile Header */}
      <div className='flex flex-col items-center space-y-4'>
        <Avatar className='w-24 h-24 border-2 border-white'>
          <AvatarImage
            src={avatar.src}
            alt='Pascal Poredda'
            className='grayscale'
          />
          <AvatarFallback>PP</AvatarFallback>
        </Avatar>
        <h1 className='text-white text-2xl font-bold'>Pascal Poredda</h1>
        <p className='text-gray-400 text-center max-w-md'>
          Building a software company, by building products. Rust Freelancer.
        </p>
        <p className='text-gray-500'>🇩🇪 CGN & 🇪🇸 BCN</p>
      </div>

      {/* Projects */}
      <section className='space-y-3'>
        <div className='flex items-center gap-2 text-white'>
          <BriefcaseIcon className='w-5 h-5' />
          <h2 className='text-lg font-semibold'>My Projects</h2>
        </div>
        <Separator className='bg-gray-700' />
        <div className='grid gap-3'>
          <Button
            variant='secondary'
            className='w-full bg-gray-600/50 hover:bg-gray-600/70 text-white justify-start'
            asChild>
            <a href='https://newtab-page.com'>
              <BookOpenIcon className='mr-2 h-4 w-4' /> IndieHackers NewTab Page
            </a>
          </Button>
          <Button
            variant='secondary'
            className='w-full bg-gray-600/50 hover:bg-gray-600/70 text-white justify-start'
            asChild>
            <a href='https://notion-crm-export.com'>
              <BookOpenIcon className='mr-2 h-4 w-4' /> Notion CRM Export
            </a>
          </Button>
          <Button
            variant='secondary'
            className='w-full bg-gray-600/50 hover:bg-gray-600/70 text-white justify-start'
            asChild>
            <a href='https://europecartrader.com'>
              <BookOpenIcon className='mr-2 h-4 w-4' /> ECT - EuropeCarTrader
            </a>
          </Button>
        </div>
      </section>

      {/* Tools I Use */}
      <section className='space-y-3'>
        <div className='flex items-center gap-2 text-white'>
          <WrenchIcon className='w-5 h-5' />
          <h2 className='text-lg font-semibold'>Tools I Use</h2>
        </div>
        <Separator className='bg-gray-700' />
        <div className='grid gap-3'>
          <Button
            variant='secondary'
            className='w-full bg-gray-600/50 hover:bg-gray-600/70 text-white justify-start'
            asChild>
            <a href='https://indiepa.ge'>
              <BookOpenIcon className='mr-2 h-4 w-4' /> IndiePages - Build your
              Indie Page
            </a>
          </Button>
        </div>
      </section>

      {/* Social Links */}
      <section className='space-y-3'>
        <div className='flex items-center gap-2 text-white'>
          <h2 className='text-lg font-semibold'>Connect With Me</h2>
        </div>
        <Separator className='bg-gray-700' />
        <div className='flex flex-wrap gap-3 justify-center'>
          <Button
            variant='outline'
            size='icon'
            className='rounded-full w-12 h-12'
            asChild>
            <a
              href='https://github.com/pascalporedda'
              title="Visit Pascal Poredda's Github profile">
              <GithubIcon className='h-5 w-5' />
            </a>
          </Button>
          <Button
            variant='outline'
            size='icon'
            className='rounded-full w-12 h-12'
            asChild>
            <a
              href='https://www.linkedin.com/in/pascal-poredda-8025221b5/'
              title="Visit Pascal Poredda's LinkedIn profile">
              <LinkedinIcon className='h-5 w-5' />
            </a>
          </Button>
          <Button
            variant='outline'
            size='icon'
            className='rounded-full w-12 h-12'
            asChild>
            <a
              href='https://x.com/pascal_poredda'
              title="Visit Pascal Poredda's X.com profile">
              <TwitterIcon className='h-5 w-5' />
            </a>
          </Button>
          <Button
            variant='outline'
            size='icon'
            className='rounded-full w-12 h-12'
            asChild>
            <a
              href='https://youtube.com/@pascalporedda'
              title="Subscribe to Pascal Poredda's YouTube channel">
              <YoutubeIcon className='h-5 w-5' />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
