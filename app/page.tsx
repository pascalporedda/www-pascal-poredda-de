import avatar from '@/app/avatar.jpg';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Github } from 'lucide-react';
import XLogo from './x-logo.svg';
import { getBlogPosts } from './db/blog';
import { parse } from 'date-fns';
import DateFormatter from '@/components/date-formatter';

export default function Home() {
  const allBlogs = getBlogPosts();
  const latestPost = allBlogs
    .map((post) => ({
      ...post,
      timestamp: parse(post.metadata.publishedAt, 'yyyy-MM-dd', new Date()),
    }))
    .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())[0];

  return (
    <div className='grid lg:grid-cols-2 gap-12'>
      {/* Left Column */}
      <div className='space-y-4 sm:space-y-8 bg-zinc-900 rounded-xl flex flex-col border border-zinc-800 sm:p-8 p-4'>
        <div className='flex sm:flex-row flex-col items-center gap-4 sm:gap-8'>
          <Avatar className='w-24 h-24'>
            <AvatarImage
              src={avatar.src}
              alt='Pascal Poredda'
              className='grayscale'
            />
            <AvatarFallback>PP</AvatarFallback>
          </Avatar>
          <div>
            <h1 className='text-2xl sm:text-4xl font-bold'>
              Hi, I'm Pascal Poredda
            </h1>
            <h2 className='text-xl sm:text-2xl font-semibold text-primary'>
              <span className='text-orange-600'>Rust</span> &{' '}
              <span className='text-blue-600'>TypeScript</span> developer
            </h2>
          </div>
        </div>

        <div className='space-y-6 text-zinc-400'>
          <p className='leading-relaxed text-balance sm:text-left text-lg'>
            I'm a fulltime freelancer since 2023, specializing in Rust
            development with extensive experience in backend & embedded systems.
            I'm passionate about digital minimalism and building products that
            solve real problems.
          </p>
          <p className='leading-relaxed text-balance sm:text-left text-lg'>
            As a writer and developer, I share my experiences and challenges
            through my{' '}
            <Link href='/blog' className='text-gray-200 underline'>
              blog
            </Link>{' '}
            and{' '}
            <Link
              href='https://x.com/pascal_poredda'
              className='text-gray-200 underline'>
              X profile
            </Link>
            . I'm currently focused on building products that solve my own needs
            while helping others with their technical challenges.
            <br />
            <br />
            I'm available for hire as a Rust & TypeScript / React freelancer.
          </p>
        </div>

        <div className='flex  gap-4 mb-auto'>
          <Link href='https://poredda.digital?via=pascal-poredda.de'>
            <Button
              variant='link'
              className='text-primary hover:text-primary/80'>
              Hire Me
            </Button>
          </Link>
          <Link href='/blog'>
            <Button
              variant='link'
              className='text-primary hover:text-primary/80'>
              Read My Blog
            </Button>
          </Link>
        </div>

        <div className='grid grid-cols-5 gap-4 pt-8'>
          <Link
            href='https://github.com/pascalporedda'
            target='_blank'
            className='flex rounded-xl flex-col items-center justify-center p-6 hover:bg-orange-500 text-white  transition'>
            <Github className='w-8 h-8 mb-2' />
            <span className='text-sm'>Github</span>
          </Link>

          <Link
            href='https://x.com/pascal_poredda'
            target='_blank'
            className='flex rounded-xl flex-col items-center justify-center p-6 hover:bg-orange-500 text-white  transition'>
            <Image
              src={XLogo}
              alt='X'
              width={24}
              height={24}
              className='mb-2'
            />
            <span className='text-sm'>X.com</span>
          </Link>
        </div>
      </div>

      {/* Right Column */}
      <div className='space-y-12'>
        <div>
          <h2 className='text-2xl font-bold mb-6'>Latest Blog Post</h2>
          <Card className='bg-zinc-900 border-zinc-800'>
            <CardContent className='p-6'>
              <div className='space-y-4'>
                <div className='flex items-start gap-4'>
                  <div className='space-y-2'>
                    <Link href={`/blog/${latestPost.slug}`}>
                      <h3 className='font-semibold text-xl hover:text-orange-500 transition-colors'>
                        {latestPost.metadata.title}
                      </h3>
                    </Link>
                    <DateFormatter
                      dateString={latestPost.metadata.publishedAt}
                      className='text-sm text-zinc-400'
                    />
                    <p className='text-sm text-zinc-400 mt-2'>
                      {latestPost.metadata.summary}
                    </p>
                  </div>
                </div>
                <Link href={`/blog/${latestPost.slug}`}>
                  <Button
                    variant='link'
                    className='text-primary hover:text-primary/80 px-0'>
                    Read More →
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className='text-2xl font-bold mb-6'>Latest Project</h2>
          <Card className='bg-zinc-900 border-zinc-800'>
            <CardContent className='p-0'>
              <Image
                src='/self-hosting-image.jpg'
                alt='Notion CRM Exporter'
                width={600}
                height={400}
                className='w-full object-cover rounded-t-lg'
              />
              <div className='p-6'>
                <div className='flex items-center justify-between mb-2'>
                  <h3 className='font-semibold'>Notion CRM Exporter</h3>
                  <div className='flex items-center gap-4 text-sm text-zinc-400'>
                    <span>NextJS</span>
                    <span>TypeScript</span>
                  </div>
                </div>
                <Button
                  asChild
                  variant='link'
                  className='text-primary hover:text-primary/80 px-0'>
                  <Link href='https://notion-crm-export.com?via=pascal-poredda.de'>
                    View Project
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
