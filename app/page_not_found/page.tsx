import Link from 'next/link';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Danielle Andrews',
  description: 'The page you are looking for does not exist',
  openGraph: {
    title: '404 - Danielle Andrews',
    description: 'The page you are looking for does not exist',
    images: ['/og-image.jpg'],
  },
};

export default function PageNotFound() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
        <p className="text-sm text-gray-600">
          The page you are looking for does not exist.
        </p>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/"
        >
          Back to Home
        </Link>
      </footer>
    </div>
  );
}
