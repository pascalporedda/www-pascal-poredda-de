import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
  Building2Icon,
  ChromeIcon,
  BriefcaseBusiness,
  ExternalLinkIcon,
} from 'lucide-react';
import { NotionLogoIcon } from '@radix-ui/react-icons';

export const metadata = {
  title: 'Links to everything important',
};

export default function LinksPage() {
  return (
    <div className='max-w-2xl'>
      {/* Header */}
      <div className='space-y-4 mb-12'>
        <h1 className='text-4xl font-bold'>Links</h1>
        <p className='text-gray-400 text-lg'>
          All my projects, tools, and social media profiles in one place.
        </p>
      </div>

      {/* Projects Section */}
      <div className='space-y-8 mb-16'>
        <h2 className='text-2xl font-semibold'>Projects</h2>
        <div className='grid gap-4'>
          <a
            href='https://poredda.digital'
            className='group p-4 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <Building2Icon className='h-6 w-6 text-orange-500' />
                <div>
                  <h3 className='font-medium mb-1'>Poredda Digital</h3>
                  <p className='text-sm text-gray-400'>
                    My freelance service website
                  </p>
                </div>
              </div>
              <ExternalLinkIcon className='h-5 w-5 text-gray-500 group-hover:text-white transition-colors' />
            </div>
          </a>

          <a
            href='https://newtab-page.com'
            className='group p-4 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <ChromeIcon className='h-6 w-6 text-blue-500' />
                <div>
                  <h3 className='font-medium mb-1'>IndieHackers NewTab Page</h3>
                  <p className='text-sm text-gray-400'>
                    Stay motivated with IndieHacker content
                  </p>
                </div>
              </div>
              <ExternalLinkIcon className='h-5 w-5 text-gray-500 group-hover:text-white transition-colors' />
            </div>
          </a>

          <a
            href='https://notion-crm-export.com'
            className='group p-4 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <NotionLogoIcon className='h-6 w-6 text-gray-200' />
                <div>
                  <h3 className='font-medium mb-1'>Notion CRM Export</h3>
                  <p className='text-sm text-gray-400'>
                    Export your Notion database with comments
                  </p>
                </div>
              </div>
              <ExternalLinkIcon className='h-5 w-5 text-gray-500 group-hover:text-white transition-colors' />
            </div>
          </a>

          <a
            href='https://europecartrader.com'
            className='group p-4 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <BriefcaseBusiness className='h-6 w-6 text-green-500' />
                <div>
                  <h3 className='font-medium mb-1'>ECT - EuropeCarTrader</h3>
                  <p className='text-sm text-gray-400'>
                    European car marketplace
                  </p>
                </div>
              </div>
              <ExternalLinkIcon className='h-5 w-5 text-gray-500 group-hover:text-white transition-colors' />
            </div>
          </a>
        </div>
      </div>

      {/* Tools Section */}
      <div className='space-y-8 mb-16'>
        <h2 className='text-2xl font-semibold'>Tools I Use</h2>
        <div className='grid gap-4'>
          <a
            href='https://indiepa.ge/pascal_poredda'
            className='group p-4 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <div className='h-6 w-6 bg-purple-500 rounded-md flex items-center justify-center text-white font-bold'>
                  I
                </div>
                <div>
                  <h3 className='font-medium mb-1'>IndiePages</h3>
                  <p className='text-sm text-gray-400'>Build your Indie Page</p>
                </div>
              </div>
              <ExternalLinkIcon className='h-5 w-5 text-gray-500 group-hover:text-white transition-colors' />
            </div>
          </a>
        </div>
      </div>

      {/* Social Links */}
      <div className='space-y-8'>
        <h2 className='text-2xl font-semibold'>Connect</h2>
        <div className='flex flex-wrap gap-4'>
          <a
            href='https://github.com/pascalporedda'
            className='p-4 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all'
            title='GitHub'>
            <GithubIcon className='h-6 w-6' />
          </a>
          <a
            href='https://www.linkedin.com/in/pascal-poredda-8025221b5/'
            className='p-4 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all'
            title='LinkedIn'>
            <LinkedinIcon className='h-6 w-6' />
          </a>
          <a
            href='https://x.com/pascal_poredda'
            className='p-4 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all'
            title='X/Twitter'>
            <TwitterIcon className='h-6 w-6' />
          </a>
          <a
            href='https://youtube.com/@pascalporedda'
            className='p-4 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all'
            title='YouTube'>
            <YoutubeIcon className='h-6 w-6' />
          </a>
        </div>
      </div>
    </div>
  );
}
