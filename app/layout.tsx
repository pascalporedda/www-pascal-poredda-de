import './globals.css';
import type { Metadata } from 'next';
import { cx } from 'class-variance-authority';

import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://pascal-poredda.de'),
  title: {
    default: 'Rust Freelancer | Pascal Poredda',
    template: '%s | Pascal Poredda',
  },
  authors: [
    {
      name: 'Pascal Poredda',
      url: 'https://pascal-poredda.de',
    },
  ],
  keywords: [
    'freelancer',
    'rust',
    'web development',
    'software engineering',
    'personal blog',
    'node js',
  ],
  description:
    'Building products for the web, solving problems one at a time. Rust Freelancer for hire.',
  openGraph: {
    title: 'Pascal Poredda',
    description:
      'Building products for the web, solving problems one at a time. Rust Freelancer for hire.',
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
    <html lang='en' className={cx(GeistSans.variable, GeistMono.variable)}>
      <head>
        <script
          defer
          src='https://analytics.poredda.digital/script.js'
          data-website-id='ab6cbd04-2296-4a7b-9a77-298217ccb457'
        />
        <meta name='seobility' content='680ed20eacaa221c33d2c3afc5ccc433' />
      </head>
      <body className='min-h-screen bg-black text-white flex flex-col px-2 md:px-4'>
        <Navbar />
        <main className='container mx-auto py-6 md:py-8 lg:py-12 flex-1'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
