import './globals.css';
import type { JSX, ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { GeistProvider, geistFontClasses } from '@vercel/geistcn/core';

export const metadata: Metadata = {
  title: 'Building Agents on Vercel',
  description:
    'A talk deck: a quick tour of Vercel, what an agent is, and shipping one with eve.',
};

export const viewport: Viewport = {
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return (
    <html className={geistFontClasses} lang="en" suppressHydrationWarning>
      <body>
        <GeistProvider>{children}</GeistProvider>
      </body>
    </html>
  );
}
