import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'my work',
  description: 'A summary of my work and contributions.',
};

export default function DoingPage() {
  return (
    <section>
      <h1 className='font-medium text-2xl mb-8 tracking-tighter'>my work</h1>
      <div className='prose prose-neutral dark:prose-invert'>
        <p>
          On a mission to build products and help other developers with{' '}
          <Link href={'/blog'}>technical articles</Link> and my life
          experiences, and along the way, have a bunch of fun. Here's a summary
          of my work so far.
        </p>
        <hr className='my-6 border-neutral-100 dark:border-neutral-800' />
        <h2 className='font-medium text-xl mb-1 tracking-tighter'>
          poredda.digital
        </h2>
        <p className='text-neutral-600 dark:text-neutral-400 text-sm'>
          Freelancer
        </p>
        <p>
          I started my journey as a freelancer mid of 2023 fulltime. With this
          journey came other life changes. I moved to Spain, started to become
          more interested in writing and the entrepreneurial world.
        </p>
        <ul>
          <li>In 2023/06, started my freelancer journey.</li>
          <li>End of 2023, decided to leave Germany next year.</li>
          <li>Beginning of 2024, moved to Spain, living in a camper van.</li>
        </ul>
        <p>
          Now I do help my clients build reliable, fast software utilizing
          powerful, established tools like PostgresSQL, React, Next.js,
          TypeScript and most importantly Rust. I do write about challenges that
          occur in my day to day on my blog.
        </p>
        <hr className='my-6 border-neutral-100 dark:border-neutral-800' />
        <h2 className='font-medium text-xl mb-1 tracking-tighter'>
          The.NextGen
        </h2>
        <p className='text-neutral-600 dark:text-neutral-400 text-sm'>
          Senior Software Engineer, 2021 — 2023
        </p>
        <p></p>
        <p></p>
        <p>
          Throughout my two years, I was able to work on some hard problems:
          decoupling a decade old monolith into microservices, working with a
          federated GraphQL API, learning and occasionally managing a Kubernetes
          cluster, building and implementing a design system, incrementally
          migrating individual components and routes to a new framework and
          infrastructure, and more.
        </p>
        <hr className='my-6 border-neutral-100 dark:border-neutral-800' />
        <h2 className='font-medium text-xl mb-1 tracking-tighter'>
          rola Security Solutions GmbH
        </h2>
        <p className='text-neutral-600 dark:text-neutral-400 text-sm'>
          Software Engineer, 2020 — 2021
        </p>
        <p>
          rola Security Solutions GmbH is a cybersecurity company that provides
          solutions to protect against cyber threats, case management systems
          and other tooling for the government. During my time there I was
          working with a team of 5 developers on a complete rewrite of the
          company's main product. I was responsible for the frontend utilizing
          Angular and Java in the backend.
        </p>
        <hr className='my-6 border-neutral-100 dark:border-neutral-800' />
        <h2 className='font-medium text-xl mb-1 tracking-tighter'>
          medienpark GmbH
        </h2>
        <p className='text-neutral-600 dark:text-neutral-400 text-sm'>
          Full-Stack Web Developer, 2016 — 2020
        </p>
        <p>
          My first job as a developer was at medienpark GmbH, a digital agency
          near my hometown. One of the best ways to learn, is to learn on the
          job. Working in an agency is not the best paid job, but it allowed me
          to learn a lot, touch a lot of projects and learn a lot when it comes
          to developing software.
        </p>
      </div>
    </section>
  );
}
