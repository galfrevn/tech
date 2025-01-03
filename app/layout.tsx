import type { Metadata } from 'next';
import '@/styles/globals.css';

import { cn } from '@/lib/utils';
import { GeistSans as fontSans } from 'geist/font/sans';
import { GeistMono as fontMono } from 'geist/font/mono';

import { Background } from '@/components/background';
import { MainNavigation } from '@/components/navigation';

export const metadata: Metadata = {
  title: 'Valentín Galfré | Senior Software Engineer',
  description: 'Senior Software Engineer specialized in React, TypeScript and AWS. Personal portfolio and blog about software development, technology and professional experiences.',
  keywords: [
    'Valentín Galfré',
    'Software Engineer',
    'React Developer',
    'TypeScript',
    'AWS',
    'Frontend Development',
    'Web Development',
    'Software Development',
    'Mercado Libre',
    'Technical Blog'
  ],
  authors: [{ name: 'Valentín Galfré' }],
  creator: 'Valentín Galfré',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dev.galfrevn.com',
    title: 'Valentín Galfré | Senior Software Engineer',
    description: 'Senior Software Engineer specialized in React, TypeScript and AWS. Personal portfolio and blog about software development.',
    siteName: 'Valentín Galfré Hub',
    images: [
      {
        url: '/images/avatar.webp',
        width: 1200,
        height: 630,
        alt: 'Valentín Galfré'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Valentín Galfré | Senior Software Engineer',
    description: 'Senior Software Engineer specialized in React, TypeScript and AWS',
    images: ['/images/avatar.webp'],
    creator: '@galfrevn'
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
};

interface RootLayoutProps extends React.PropsWithChildren {}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' className={cn('dark scrollbar-none', fontSans.variable, fontMono.variable)}>
      <head />
      <body className='text-black dark:text-white dark:bg-[#111010] bg-white antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto'>
        <Background />
        <main className='flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0'>
          <MainNavigation />
          {children}
        </main>
      </body>
    </html>
  );
}
