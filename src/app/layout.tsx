import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rustam Baghirov - Oil and Gas Engineer',
  description: 'Professional portfolio of Rustam Baghirov, Oil and Gas Engineer with 3+ years of experience in operations, pre-commissioning, and commissioning of pipelines and tankage systems.',
  keywords: 'Rustam Baghirov, Oil and Gas Engineer, SOCAR, Pipeline Engineering, Tankage Systems, Production Engineer, Azerbaijan',
  authors: [{ name: 'Rustam Baghirov' }],
  creator: 'Rustam Baghirov',
  publisher: 'Rustam Baghirov',
  robots: 'index, follow',
  openGraph: {
    title: 'Rustam Baghirov - Oil and Gas Engineer',
    description: 'Professional portfolio of Rustam Baghirov, Oil and Gas Engineer with expertise in pipeline operations and tankage systems.',
    url: 'https://rustambaghirov.com',
    siteName: 'Rustam Baghirov Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rustam Baghirov - Oil and Gas Engineer',
    description: 'Professional portfolio of Rustam Baghirov, Oil and Gas Engineer with expertise in pipeline operations and tankage systems.',
    creator: '@rustambaghirov',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3b82f6',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}