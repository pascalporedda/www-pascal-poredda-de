import Link from 'next/link';

export function Footer() {
  return (
    <footer className='border-t border-gray-800 mt-24'>
      <div className='container mx-auto py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Column 1: Brand */}
          <div className='space-y-3'>
            <h3 className='font-semibold text-lg'>Pascal Poredda</h3>
            <p className='text-sm text-gray-400'>
              Copyright © 2024 - All rights reserved
            </p>
            <p className='text-sm text-gray-400'>
              Made with ❤️ in Köln, built with ⚡️ Next.js
            </p>
            <p className='text-sm text-gray-400'></p>
          </div>

          {/* Column 2: Links */}
          <div className='space-y-2'>
            <h3 className='font-semibold text-lg'>Links</h3>
            <ul className='space-y-2 text-sm text-gray-400'>
              <li>
                <Link
                  href='/blog'
                  className='hover:text-white transition-colors'>
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href='/doing'
                  className='hover:text-white transition-colors'>
                  Doing
                </Link>
              </li>
              <li>
                <Link
                  href='/links'
                  className='hover:text-white transition-colors'>
                  Links
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className='space-y-2'>
            <h3 className='font-semibold text-lg'>Legal</h3>
            <ul className='space-y-2 text-sm text-gray-400'>
              <li>
                <Link
                  href='/privacy'
                  className='hover:text-white transition-colors'>
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link
                  href='/imprint'
                  className='hover:text-white transition-colors'>
                  Imprint
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: More */}
          <div className='space-y-2'>
            <h3 className='font-semibold text-lg'>More</h3>
            <ul className='space-y-2 text-sm text-gray-400'>
              <li>
                <Link
                  href='https://calendly.com/pascal-poredda-lj1x/30min'
                  className='hover:text-white transition-colors'>
                  Schedule a call
                </Link>
              </li>
              <li>
                <Link
                  href='https://poredda.digital/?via=pascal-poredda.de'
                  className='hover:text-white transition-colors'>
                  Get your MVP built
                </Link>
              </li>
              <li>
                <Link
                  href='https://notion-crm-export.com/?via=pascal-poredda.de'
                  className='hover:text-white transition-colors'>
                  Export your Notion database including comments
                </Link>
              </li>
              <li>
                <Link
                  href='https://github.com/pascalporedda'
                  className='hover:text-white transition-colors'>
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
