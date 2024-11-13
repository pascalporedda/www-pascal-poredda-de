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
  Building2Icon,
  HeartCrackIcon,
  ChromeIcon,
  BriefcaseBusiness,
} from 'lucide-react';
import avatar from '@/app/avatar.jpg';
import { NotionLogoIcon } from '@radix-ui/react-icons';

export default function LinksPage() {
  return (
    <div className='space-y-8 py-8 px-4'>
      <h1 className='font-bold text-3xl mt-2'>Links</h1>
      <p>
        Here you can find all the links to my social media, profiles & other
        website I own and host as an indie hacker.
      </p>
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
            <a href='https://poredda.digital'>
              <Building2Icon className='mr-2 h-4 w-4' /> Poredda Digital - My
              freelance service website
            </a>
          </Button>

          <Button
            variant='secondary'
            className='w-full bg-gray-600/50 hover:bg-gray-600/70 text-white justify-start'
            asChild>
            <a href='https://newtab-page.com'>
              <ChromeIcon className='mr-2 h-4 w-4' /> IndieHackers NewTab Page
            </a>
          </Button>
          <Button
            variant='secondary'
            className='w-full bg-gray-600/50 hover:bg-gray-600/70 text-white justify-start'
            asChild>
            <a href='https://notion-crm-export.com'>
              <NotionLogoIcon className='mr-2 h-4 w-4' /> Notion CRM Export
            </a>
          </Button>
          <Button
            variant='secondary'
            className='w-full bg-gray-600/50 hover:bg-gray-600/70 text-white justify-start'
            asChild>
            <a href='https://europecartrader.com'>
              <BriefcaseBusiness className='mr-2 h-4 w-4' /> ECT -
              EuropeCarTrader
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
            <a href='https://indiepa.ge/pascal_poredda'>
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
