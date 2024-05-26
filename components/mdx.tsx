import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import { highlight } from 'sugar-high';
// import { TweetComponent } from './tweet';

const CustomLink = (props: any) => {
  const href = props.href;

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith('#')) {
    return <a {...props} />;
  }

  return <a target='_blank' rel='noopener noreferrer' {...props} />;
};

function RoundedImage(props: any) {
  return (
    <>
      <Image alt={props.alt} className='rounded-lg' {...props} />
    </>
  );
}

function Callout(props: any) {
  return (
    <div className='flex bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 my-8'>
      <div className='flex items-center w-4 mr-4'>{props.emoji}</div>
      <div className='w-full callout'>{props.children}</div>
    </div>
  );
}

type ProsCardProps = {
  title: string;
  pros: string[];
};

function ProsCard({ title, pros }: ProsCardProps) {
  return (
    <div className='border border-emerald-200 dark:border-emerald-900 bg-neutral-50 dark:bg-neutral-900 rounded-xl p-6 my-4 w-full'>
      <span>{`You might use ${title} if...`}</span>
      <div className='mt-4'>
        {pros.map((pro) => (
          <div key={pro} className='flex font-medium items-baseline mb-2'>
            <div className='h-4 w-4 mr-2'>
              <svg className='h-4 w-4 text-emerald-500' viewBox='0 0 24 24'>
                <g
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'>
                  <path d='M22 11.08V12a10 10 0 11-5.93-9.14' />
                  <path d='M22 4L12 14.01l-3-3' />
                </g>
              </svg>
            </div>
            <span>{pro}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

type ConsCardProps = {
  title: string;
  cons: string[];
};

function ConsCard({ title, cons }: ConsCardProps) {
  return (
    <div className='border border-red-200 dark:border-red-900 bg-neutral-50 dark:bg-neutral-900 rounded-xl p-6 my-6 w-full'>
      <span>{`You might not use ${title} if...`}</span>
      <div className='mt-4'>
        {cons.map((con) => (
          <div key={con} className='flex font-medium items-baseline mb-2'>
            <div className='h-4 w-4 mr-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='h-4 w-4 text-red-500'>
                <path d='M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z' />
              </svg>
            </div>
            <span>{con}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function slugify(str: React.ReactNode[]) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-'); // Replace multiple - with single -
}

function createHeading(level: number) {
  const dynHeading = ({ children }: { children: React.ReactNode[] }) => {
    let slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children,
    );
  };

  dynHeading.displayName = `Heading${level}`;

  return dynHeading;
}

function Code({ children, ...props }: { children: React.ReactNode[] }) {
  let codeHTML = highlight(children.toString());
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function Table({ data }: { data: { headers: string[]; rows: string[][] } }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  Callout,
  ProsCard,
  ConsCard,
  // StaticTweet: TweetComponent,
  code: Code,
  Table,
};

export function MDX(props: MDXRemoteProps & { components?: any }) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
