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
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 pt-16"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Archive</h2>
          <p className="text-lg text-text-primary mb-8">
            This is an archive of older projects and works that I have
            created. Some of these may not be actively maintained, but
            they represent my journey and growth as a developer.
          </p>
          <Link href="/" className="btn-primary">
            Return to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
