import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { fontSans } from '@/lib/fonts';
import { PageHeader } from '@/components/page-header';

export const metadata: Metadata = {
  metadataBase: new URL('https://pascal-poredda.de'),
  title: {
    default: 'Pascal Poredda',
    template: '%s | Pascal Poredda',
  },
  description:
    'Developer, dancer and content creator. I am passionate about software engineering, NeoVim, dancing and climbing as well as personal growth.',
  openGraph: {
    title: 'Pascal Poredda',
    description: 'Developer, creator and climber.',
    url: 'https://pascal-poredda.de',
    siteName: 'Pascal Poredda',
    locale: 'en-US',
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
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'flex h-full flex-col bg-background antialiased',
          fontSans.variable,
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div className='relative min-h-screen'>
            <div className='container'>
              <PageHeader />
            </div>
            <main>{children}</main>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
