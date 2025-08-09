'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 pt-16"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-pink mx-auto"></div>
          </div>

          {/* main content grid */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            {/* text content */}
            <div className="space-y-8">
              <p className="text-lg leading-relaxed">
                Hello! I&apos;m{' '}
                <span className="font-bold text-pink">
                  Danielle Andrews
                </span>{' '}
                — a{' '}
                <span className="font-bold text-pink">
                  full-stack software engineer
                </span>
                , U.S. Marine Corps{' '}
                <span className="font-bold text-pink">veteran</span>,
                and former mechanical engineer who loves building tech
                that solves real-world problems.
                <br className="mb-2" />
                With{' '}
                <span className="font-bold text-pink">
                  over 5 years of experience
                </span>{' '}
                in full-stack development, I&apos;ve worked across
                startups, civic tech, and open-source projects to
                deliver accessible, performant web applications.
                <br className="mb-2" />
                My journey into software began while streamlining
                engineering workflows with automation scripts. That
                love for optimization and impact eventually led me to
                leave mechanical engineering and pursue software
                full-time.
                <br className="mb-2" />
                Today, I{' '}
                <Link
                  href="#experience"
                  className="font-bold text-blue hover:underline transition-all duration-300"
                >
                  consult
                </Link>{' '}
                as a web developer for government and nonprofit
                clients, contribute to open-source and volunteer-led
                projects, and build tools for salmon conservation and
                environmental research.
              </p>
            </div>
            {/* image */}
            <div className="relative">
              <div className="aspect-square p-1">
                <Image
                  src="/logo_self.png"
                  alt="Danielle Andrews"
                  width={400}
                  max-width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
          {/* skills grid */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-center mb-2 mt-3">
              Technologies I work with daily:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* frontend development */}
              <div className="space-y-3">
                <h4 className="font-semibold text-lg">
                  Frontend Development
                </h4>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue text-charcoal text-sm rounded-full">
                      HTML
                    </span>
                    <span className="px-3 py-1 bg-blue text-charcoal text-sm rounded-full">
                      CSS
                    </span>
                    <span className="px-3 py-1 bg-blue text-charcoal text-sm rounded-full">
                      JavaScript
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue text-charcoal text-sm rounded-full">
                      TypeScript
                    </span>
                    <span className="px-3 py-1 bg-blue text-charcoal text-sm rounded-full">
                      React
                    </span>
                    <span className="px-3 py-1 bg-blue text-charcoal text-sm rounded-full">
                      Next.js
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue text-charcoal text-sm rounded-full">
                      Tailwind CSS
                    </span>
                  </div>
                </div>
              </div>

              {/* backend development */}
              <div className="space-y-3">
                <h4 className="font-semibold text-lg">
                  Backend Development
                </h4>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple text-charcoal text-sm rounded-full">
                      Node.js
                    </span>
                    <span className="px-3 py-1 bg-purple text-charcoal text-sm rounded-full">
                      Express.js
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple text-charcoal text-sm rounded-full">
                      MongoDB
                    </span>
                    <span className="px-3 py-1 bg-purple text-charcoal text-sm rounded-full">
                      Jest
                    </span>
                  </div>
                </div>
              </div>

              {/* cloud & infrastructure */}
              <div className="space-y-3">
                <h4 className="font-semibold text-lg">
                  Cloud & Infrastructure
                </h4>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-pink text-charcoal text-sm rounded-full">
                      AWS Lambda
                    </span>
                    <span className="px-3 py-1 bg-pink text-charcoal text-sm rounded-full">
                      AWS S3
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-pink text-charcoal text-sm rounded-full">
                      AWS DynamoDB
                    </span>
                  </div>
                </div>
              </div>

              {/* data science & analytics */}
              <div className="space-y-3">
                <h4 className="font-semibold text-lg">
                  Data Science & Analytics
                </h4>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-orange text-charcoal text-sm rounded-full">
                      R
                    </span>
                    <span className="px-3 py-1 bg-orange text-charcoal text-sm rounded-full">
                      Shiny
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
