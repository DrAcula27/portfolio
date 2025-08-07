import Link from 'next/link';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Archive - Danielle Andrews',
  description: 'An archive of older projects by Danielle Andrews',
  openGraph: {
    title: 'Archive - Danielle Andrews',
    description: 'An archive of older projects by Danielle Andrews',
    images: ['/og-image.jpg'],
  },
};

export default function Archive() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Archive</h1>
        <p className="text-sm text-gray-600">
          This is the archive page. Older projects will be added here.
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
