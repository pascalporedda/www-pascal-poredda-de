import './globals.css';
import type { Metadata } from 'next';
import { Navbar } from '@/components/page-header';
import { cx } from 'class-variance-authority';

import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  metadataBase: new URL('https://pascal-poredda.de'),
  title: {
    default: 'Pascal Poredda',
    template: '%s | Pascal Poredda',
  },
  authors: [
    {
      name: 'Pascal Poredda',
      url: 'https://pascal-poredda.de',
    },
  ],
  keywords: [
    'rust',
    'web development',
    'software engineering',
    'personal blog',
    'node js',
  ],
  description: 'Developer, writer, creator.',
  openGraph: {
    title: 'Pascal Poredda',
    description: 'Developer, writer, creator.',
    url: 'https://pascal-poredda.de',
    siteName: 'Pascal Poredda',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Pascal Poredda',
    card: 'summary_large_image',
  },
  verification: {
    google: 'GUHb9L9Cb4WlmaxhKVqZ91U6dqtUiAQfX5VDLwkIrms',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={cx('bg-background', GeistSans.variable, GeistMono.variable)}>
      <head>
        <script
          defer
          src='https://analytics.poredda.digital/script.js'
          data-website-id='ab6cbd04-2296-4a7b-9a77-298217ccb457'
        />
      </head>
      <body className='antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto'>
        <main className='flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0'>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
