import type { Metadata } from 'next';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'What I do',
  description: 'A summary of my work and contributions.',
};

export default function DoingPage() {
  return (
    <div className='max-w-2xl space-y-8'>
      {/* Header */}
      <div className='space-y-4'>
        <h1 className='text-3xl font-bold tracking-tight'>
          What I do professionally
        </h1>
        <p className='text-zinc-400 leading-relaxed'>
          On a mission to build products and help other developers with{' '}
          <Link
            href='/blog'
            className='text-white hover:text-zinc-300 underline underline-offset-4'>
            technical articles
          </Link>{' '}
          and my life experiences, and along the way, have a bunch of fun.
          Here's a summary of my work so far.
        </p>
      </div>

      {/* Work Experience */}
      <div className='space-y-12'>
        {/* Poredda Digital */}
        <div className='space-y-4'>
          <div>
            <h2 className='text-xl font-semibold mb-1'>Poredda Digital</h2>
            <p className='text-sm text-zinc-400'>Freelancer</p>
          </div>
          <div className='space-y-4 text-zinc-300'>
            <p>
              I started dabbling with freelancing mid of 2021. Since 2023 I'm
              fulltime freelancing.
            </p>
            <p>
              Now I do help clients build reliable, fast software utilizing
              powerful, established tools like Rust, PostgresSQL, React,
              Next.js, and TypeScript. I do write about challenges that occur in
              my day to day on my blog.
            </p>
          </div>
        </div>

        <Separator className='bg-zinc-800' />

        {/* The.NextGen */}
        <div className='space-y-4'>
          <div>
            <h2 className='text-xl font-semibold mb-1'>The.NextGen</h2>
            <p className='text-sm text-zinc-400'>
              Senior Software Engineer, 2021 — 2023
            </p>
          </div>
          <div className='text-zinc-300'>
            <p>
              Throughout my two years, I was able to work on some hard problems:
              decoupling a decade old monolith into microservices, working with
              a federated GraphQL API, learning and occasionally managing a
              Kubernetes cluster, building and implementing a design system,
              incrementally migrating individual components and routes to a new
              framework and infrastructure, and more.
            </p>
          </div>
        </div>

        <Separator className='bg-zinc-800' />

        {/* rola Security Solutions */}
        <div className='space-y-4'>
          <div>
            <h2 className='text-xl font-semibold mb-1'>
              rola Security Solutions GmbH
            </h2>
            <p className='text-sm text-zinc-400'>
              Software Engineer, 2020 — 2021
            </p>
          </div>
          <div className='text-zinc-300'>
            <p>
              rola Security Solutions GmbH is a cybersecurity company that
              provides solutions to protect against cyber threats, case
              management systems and other tooling for the government. During my
              time there I was working with a team of 5 developers on a complete
              rewrite of the company's main product. I was responsible for the
              frontend utilizing Angular and Java in the backend.
            </p>
          </div>
        </div>

        <Separator className='bg-zinc-800' />

        {/* medienpark */}
        <div className='space-y-4'>
          <div>
            <h2 className='text-xl font-semibold mb-1'>medienpark GmbH</h2>
            <p className='text-sm text-zinc-400'>
              Full-Stack Web Developer, 2016 — 2020
            </p>
          </div>
          <div className='text-zinc-300'>
            <p>
              My first job as a developer was at medienpark GmbH, a digital
              agency near my hometown. One of the best ways to learn, is to
              learn on the job. Working in an agency is not the best paid job,
              but it allowed me to learn a lot, touch a lot of projects and
              learn a lot when it comes to developing software.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
