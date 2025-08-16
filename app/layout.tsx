import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ReturnToTop from '@/components/ui/ReturnToTop';
import ThemeScript from '@/components/common/ThemeScript';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Danielle Andrews',
  description: 'Software Engineer | USMC Veteran',
  keywords: [
    'Danielle Andrews',
    'Software Engineer',
    'USMC Veteran',
    'portfolio',
    'web development',
    'next.js',
    'react',
    'javascript',
    'typescript',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="">
          {children}
          <ReturnToTop />
        </main>
        <Footer />
      </body>
    </html>
  );
}
