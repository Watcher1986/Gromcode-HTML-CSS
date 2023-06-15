'use client';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';

export const metadata: Metadata = {
  title: 'My Blog',
  description: 'This is my blog page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className='px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto'>
        {children}
      </main>
    </>
  );
}
