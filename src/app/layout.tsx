import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Wahyu Pratama | Software Engineer',
    template: '%s | Wahyu Pratama',
  },
  description:
    'Portfolio Wahyu Pratama — Software Engineer focused on web apps, automation, and AI solutions.',
  keywords: [
    'Wahyu Pratama',
    'wahyupratama',
    'portfolio',
    'software engineer',
    'full stack developer',
    'frontend developer',
    'backend developer',
    'web developer',
    'next.js',
    'react',
    'typescript',
    'javascript',
    'node.js',
    'python',
    'machine learning',
    'ai automation',
    'n8n',
    'docker',
    'automation',
    'ui/ux',
    'indonesia developer',
    'malang developer',
    'remote developer',
    'web apps',
    'digital designer',
    'power apps',
    'sharepoint',
    'data analysis',
    'deep learning',
    'flask',
    'express.js',
  ],
  authors: [{ name: 'Wahyu Pratama' }],
  creator: 'Wahyu Pratama',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Wahyu Pratama | Software Engineer',
    description:
      'Portfolio Wahyu Pratama — Software Engineer focused on web apps, automation, and AI solutions.',
    siteName: 'Wahyu Pratama',
    images: [
      {
        url: '/senior.jpeg',
        width: 1200,
        height: 630,
        alt: 'Wahyu Pratama',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wahyu Pratama | Software Engineer',
    description:
      'Portfolio Wahyu Pratama — Software Engineer focused on web apps, automation, and AI solutions.',
    images: ['/senior.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
