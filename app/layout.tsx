import type { Metadata } from 'next';
import '@/styles/globals.css';

import { cn } from '@/lib/utils';
import { GeistSans as fontSans } from 'geist/font/sans';
import { GeistMono as fontMono } from 'geist/font/mono';

import { Background } from '@/components/background';
import { MainNavigation } from '@/components/navigation';

export const metadata: Metadata = {
  title: 'Galfrevn Hub',
  description: 'Generated by create next app',
};

interface RootLayoutProps extends React.PropsWithChildren {}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' className={cn('dark ', fontSans.variable, fontMono.variable)}>
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
