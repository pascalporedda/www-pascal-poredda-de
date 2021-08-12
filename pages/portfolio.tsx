import SectionTitle from '../components/Ui/SectionTitle';
import Image from 'next/image';
import { withPortfolioLayout } from '../layouts/PortfolioLayout';
import cs from 'classnames';
import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { PrivacyMenu } from '../components/Ui/PrivacyMenu';
import PageMetaAndTitle from '../components/SEO/PageMetaAndTitle';
import { withSeoDefaults } from '../util/seo-util';
import * as config from '../util/config';

type Job = {
  title: string;
  company: string;
  dateRange: string;
  companyWebsite: string;
  bullets: string[];
};
export const jobs: Job[] = [
  {
    title: 'Frontend Developer',
    company: 'rola Security Solutions GmbH',
    dateRange: 'June 2020 - Today',
    companyWebsite: 'https://rola.com',
    bullets: [
      'Accompanying the transformation of a Java Swing client to an Angular enterprise web application.',
      'Conception, creation, implementation and testing of component systems, which can be used in different domains.',
      'Active in the national security customer environment (police, Bundeswehr and co.).',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'medienpark GmbH',
    dateRange: 'September 2015 - June 2020',
    companyWebsite: 'https://medienpark.net',
    bullets: [
      'Development of webshops with an in-house solution based on the Symfony PHP framework',
      'Merchandise management system connections, Google 360 solutions, payment providers (Klarna, PayPal, Santander, Computop)',
      'Logistics system with route planning, customer management and invoice management',
      'Always with a keen eye for the frontend',
    ],
  },
  {
    title: 'Web Developer',
    company: 'desire-solution GmbH',
    dateRange: 'March 2014 - November 2014',
    companyWebsite: 'https://desire-solution.de',
    bullets: [
      'Design and development of websites from different industries',
      'Implementation of Photshop and Sketch designs in HTML & CSS',
      'Development of JavaScript scripts for web page functions',
    ],
  },
  {
    title: 'Web Developer',
    company: 'Unodesign GmbH',
    dateRange: 'sporadic in 2011',
    companyWebsite: 'http://www.unodesign.de',
    bullets: [
      'My first steps as an intern. I have always been interested in development and agency work, which is why I started at the age of 13 to gain first practical experience and to learn from people who knew and could do more than me.',
      'My tasks here were the implementation of HTML, CSS and JS websites as well as smaller PHP scripts.',
    ],
  },
  {
    title: 'Development & Support',
    company: 'Nice Teamspeak Server',
    dateRange: '2010-2012',
    companyWebsite: 'http://nice-ts.de',
    bullets: [
      'This was where it all started and I developed my interest for developing applications.',
      'Development of web interfaces.',
      'Implementation of automated systems for server management.',
      'Supporting customers that ordered Teamspeak servers from us.',
    ],
  },
];

type Project = {
  link: string;
  linkTitle: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  imageAlt?: string;
};
export const otherProjects: Project[] = [
  {
    link: 'https://github.com/OwlCarousel2/OwlCarousel2',
    linkTitle: 'Visit the OwlCarousel2 GitHub repository',
    title: 'OwlCarousel 2',
    description:
      'For over two years I maintained the OwlCarousel2 a jQuery Slider Plugin. After two years of supporting it I decided with the colleague I was maintaining it with that it was time to deprecate the OwlCarousel as other Frameworks became more and more prominent.',
    tags: ['jQuery', 'Open Source', 'jQuery Plugin', 'Slider'],
  },
  {
    link: 'https://github.com/pascalporedda/react-notion-blocks',
    linkTitle: 'Visit the React Notion Blocks GitHub repository',
    title: 'React Notion Blocks',
    description:
      'The official Notion API is currently in beta status. There are many great repositories supporting the unoffical API but my goal with this project is to provide unstyled React components for the currently officially available Notion blocks, that then can be styled via CSS.',
    tags: ['React', 'Open Source', 'Notion', 'API'],
  },
  {
    link: 'https://github.com/pascalporedda/angular-tabbable-instances',
    linkTitle: 'Visit the Angular Tabbable Instances GitHub repository',
    title: 'Angular Tabbable Instances',
    description:
      'A common request I received from clients was to be able to maintain different tab states of the same module. Therefore I build a reusable component that utilizes NgRX internally to maintain the state.',
    tags: ['Angular', 'NgRX', 'State Management'],
  },
];

export const featuredProjects: Project[] = [
  {
    link: 'https://open.spotify.com/show/4dNx1hTfyz6HBbZj1NlZSc',
    linkTitle: 'My tech podcast: Software Cafe on Spotify',
    imageAlt: 'An image showing the Software Cafe podcast website on Anchor.fm',
    imageUrl: '/images/portfolio-references/podcast-reference.png',
    description: `At the end of last year I have started my own tech podcast called Software Café. The podcast is in German, but also has a few English episodes. This podcast is dedicated to all the developers and tech enthusiasts out there.`,
    title: 'Software Café',
    tags: ['Podcast', 'Technology', 'Audio'],
  },
  {
    link: 'https://poco.de',
    linkTitle: 'Poco: An e-commerce website for furniture based in Germany',
    imageAlt: 'An image showing the Poco website, a German furniture store',
    imageUrl: '/images/portfolio-references/poco-reference.png',
    description: `Poco is a German furniture brand that sells qualitative furniture for a reasonable price. I have worked on several parts on the frontend and backend part.`,
    title: 'Poco',
    tags: ['Symfony', 'Bootstrap', 'Recommendation Engine', 'Elasticsearch'],
  },
  {
    link: 'https://leiner.at',
    linkTitle: 'Leiner.at: An e-commerce website based in Austria',
    imageAlt:
      'An image showing the Leiner.at website, an Austrian furniture store',
    imageUrl: '/images/portfolio-references/leiner-reference.png',
    description:
      'Leiner is an Austrian based furniture store which focuses on the upper price segment of furniture. I have worked on the Design, search optimization with Elasticsearch, implementing Google 360 and the whole checkout process.',
    title: 'Leiner.at',
    tags: ['Symfony', 'VueJS', 'Payment Gateways', 'Elasticsearch'],
  },
];

export default function Portfolio() {
  const metaData = withSeoDefaults({
    title: 'Portfolio - ' + config.name,
    ogTitle: 'Portfolio - ' + config.name,
  });
  return (
    <>
      <PageMetaAndTitle metaData={metaData} />
      <div className='h-full overflow-y-auto'>
        {jobs.map((job, index) => {
          let content = <JobEntry job={job} />;
          const classesLeftSide = cs('lg:w-1/2 px-8 py-16 lg:block', {
            hidden: index % 2 !== 0,
          });

          const classesRightSide = cs(
            'lg:w-1/2 px-8 py-16 bg-gray-900 text-white lg:block',
            {
              hidden: index % 2 === 0,
            },
          );
          return (
            <section
              key={index}
              className={'flex flex-row items-stretch clear-both'}>
              <div className={classesLeftSide}>
                {index === 0 && (
                  <SectionTitle
                    size={'lg'}
                    textPosition={'left'}
                    className={'mb-8'}>
                    01. Where I have worked
                  </SectionTitle>
                )}
                {index % 2 === 0 && content}
              </div>
              <div className={classesRightSide}>
                {index % 2 !== 0 && content}
              </div>
            </section>
          );
        })}
        <div className='text-white bg-black px-8 py-16'>
          <SectionTitle className={'mb-8'} textPosition={'center'} size={'lg'}>
            02. Featured projects
          </SectionTitle>
          {featuredProjects.map((featuredProject, index) => {
            return (
              <FeaturedProject
                orientation={index % 2 === 0 ? 'left' : 'right'}
                key={featuredProject.title}
                project={featuredProject}
              />
            );
          })}
        </div>
        <div className='relative 2xl:bg-gradient-half-half xl: p-8'>
          <div className='text-center lg:text-right'>
            <SectionTitle size={'lg'} className={'mb-8'}>
              03. Other things I have worked on
            </SectionTitle>
          </div>
          <div className='grid grid-flow-row grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto gap-8 mb-8'>
            {otherProjects.map((project) => (
              <OtherProject project={project} key={project.title} />
            ))}
          </div>
        </div>
        <SectionTitle size={'lg'} textPosition={'center'} className={'p-8'}>
          04. Get in touch with me
        </SectionTitle>
        <div className='text-center mb-8 p-8'>
          <p className={'text-xl text-gray-700 lg:w-2/3 mb-8 mx-auto'}>
            Although I&apos;m currently not look for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi. I&apos;ll try me best to get back to you!
          </p>
          <Link passHref href={'/contact'}>
            <a
              title={'Say hi by contacting me'}
              className={
                'py-4 px-8 block bg-accent-green mb-8 text-white max-w-lg mx-auto text-xl font-extrabold rounded-2xl'
              }>
              Say hi!
            </a>
          </Link>
          <div className='flex items-center justify-center'>
            <PrivacyMenu orientation={'horizontal'} />
          </div>
        </div>
      </div>
    </>
  );
}

Portfolio.getLayout = withPortfolioLayout;

function JobEntry({ job }: { job: Job }) {
  return (
    <>
      <h2 className={'text-xl font-bold'}>
        {job.title}&nbsp;<span className={'text-accent-green'}>@</span>&nbsp;
        <a
          href={job.companyWebsite}
          className={
            'text-accent-green hover:underline transition-all duration-300'
          }
          target={'_blank'}
          rel='noreferrer'>
          {job.company}
        </a>
      </h2>
      <p className={'mb-4 text-gray-700'}>{job.dateRange}</p>
      <ul className={'ml-4 list-disc list-outside leading-relaxed'}>
        {job.bullets.map((bullet, index) => (
          <li className={'pl-4'} key={index}>
            {bullet}
          </li>
        ))}
      </ul>
    </>
  );
}

function FeaturedProject({
  project,
  orientation,
}: {
  project: Project;
  orientation: 'left' | 'right';
}) {
  if (!project.imageUrl || !project.imageAlt) {
    return null;
  }

  return (
    <>
      <section
        className={
          'flex flex-col items-center lg:items-start lg:flex-row relative max-w-6xl mx-auto mb-16'
        }>
        <a
          href={project.link}
          title={project.linkTitle}
          className={cs('max-w-xl mb-4 lg:mb-0', {
            'lg:ml-auto': orientation === 'right',
          })}
          rel={'noreferrer'}>
          <Image
            src={project.imageUrl}
            width={800}
            height={450}
            alt={project!.imageAlt}
          />
        </a>
        <div
          className={cs(
            {
              'right-0 lg:text-right lg:items-end': orientation === 'left',
              'left-0 lg:text-left lg:items-start': orientation === 'right',
            },
            'flex lg:absolute items-center text-center top-0 flex-col max-w-3xl lg:ml-auto',
          )}>
          <p className={'text-xl'}>Featured Project</p>
          <h2 className={'text-3xl font-extrabold mb-8'}>{project.title}</h2>
          <p
            className={
              'bg-gray-850 rounded-2xl p-4 filter drop-shadow-xl relative z-10 mb-8 leading-relaxed text-lg text-white'
            }>
            {project.description}
          </p>
          <ul
            className={cs('flex items-center space-x-4 text-gray-700 text-sm', {
              'lg:ml-auto': orientation === 'left',
            })}>
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

function OtherProject({ project }: { project: Project }) {
  return (
    <div
      className={
        'bg-gray-850 text-white flex flex-col p-4 filter drop-shadow-xl rounded-2xl'
      }>
      <div className='flex items-center mb-8'>
        <FontAwesomeIcon
          icon={faFolder}
          className={'text-accent-green'}
          size={'3x'}
        />
        <FontAwesomeIcon
          className={'ml-auto text-gray'}
          icon={faGithubAlt}
          size={'2x'}
        />
        <a
          href={project.link}
          className={'ml-4 text-gray'}
          title={project.linkTitle}>
          <FontAwesomeIcon icon={faExternalLinkAlt} size={'2x'} />
        </a>
      </div>
      <h2 className={'text-xl mb-4 font-extrabold'}>{project.title}</h2>
      <p className={'leading-relaxed mb-8 text-gray'}>{project.description}</p>
      <ul className={'mt-auto flex space-x-2 text-gray-700 text-sm'}>
        {project.tags.map((tag) => {
          return <li key={tag}>{tag}</li>;
        })}
      </ul>
    </div>
  );
}
