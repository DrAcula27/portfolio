'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

const slideInFromLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 12,
      delay: 0.2,
    },
  },
};

const slideInFromRight = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 12,
      delay: 0.4,
    },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 pt-16"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2, // trigger when 20% of the section is visible
            margin: '0px 0px -50px 0px', // start animation 50px before section comes into view
          }}
        >
          {/* section header */}
          <motion.div
            className="text-center mb-12"
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-secondary-500 mx-auto"></div>
          </motion.div>

          {/* main content grid */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            {/* text content */}
            <motion.div
              className="space-y-8"
              variants={slideInFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-lg leading-relaxed">
                Hello! I&apos;m{' '}
                <span className="font-bold text-secondary-500">
                  Danielle Andrews
                </span>{' '}
                — a{' '}
                <span className="font-bold text-secondary-500">
                  full-stack software engineer
                </span>
                , U.S. Marine Corps{' '}
                <span className="font-bold text-secondary-500">veteran</span>,
                and former mechanical engineer who loves building tech
                that solves real-world problems.
                <br className="mb-2" />
                With{' '}
                <span className="font-bold text-secondary-500">
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
                  className="font-bold text-primary-500 hover:underline transition-all duration-300"
                >
                  consult
                </Link>{' '}
                as a web developer for government and nonprofit
                clients, contribute to open-source and volunteer-led
                projects, and build tools for salmon conservation and
                environmental research.
              </p>
            </motion.div>

            {/* image */}
            <motion.div
              className="relative"
              variants={slideInFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="aspect-square p-1 max-w-1/2 mx-auto md:max-w-full">
                <Image
                  src="/logo_self.png"
                  alt="Danielle Andrews"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </motion.div>
          </div>

          {/* skills grid */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
              margin: '0px 0px -100px 0px',
            }}
          >
            <h3 className="text-2xl font-semibold text-center mb-2 mt-3">
              Technologies I work with daily:
            </h3>
            <div className="grid grid-cols-1 max-w-fit mx-auto sm:grid-cols-2 md:max-w-full md:mx-0 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* frontend development */}
              <motion.div
                className="space-y-3"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.1,
                      duration: 0.5,
                    },
                  },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-lg">
                  Frontend Development
                </h4>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary-500 text-charcoal text-sm rounded-full">
                      HTML
                    </span>
                    <span className="px-3 py-1 bg-primary-500 text-charcoal text-sm rounded-full">
                      CSS
                    </span>
                    <span className="px-3 py-1 bg-primary-500 text-charcoal text-sm rounded-full">
                      JavaScript
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary-500 text-charcoal text-sm rounded-full">
                      TypeScript
                    </span>
                    <span className="px-3 py-1 bg-primary-500 text-charcoal text-sm rounded-full">
                      React
                    </span>
                    <span className="px-3 py-1 bg-primary-500 text-charcoal text-sm rounded-full">
                      Next.js
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary-500 text-charcoal text-sm rounded-full">
                      Tailwind CSS
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* backend development */}
              <motion.div
                className="space-y-3"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.1,
                      duration: 0.5,
                    },
                  },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
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
              </motion.div>

              {/* cloud & infrastructure */}
              <motion.div
                className="space-y-3"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.1,
                      duration: 0.5,
                    },
                  },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-lg">
                  Cloud & Infrastructure
                </h4>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-secondary-500 text-charcoal text-sm rounded-full">
                      AWS Lambda
                    </span>
                    <span className="px-3 py-1 bg-secondary-500 text-charcoal text-sm rounded-full">
                      AWS S3
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-secondary-500 text-charcoal text-sm rounded-full">
                      AWS DynamoDB
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* data science & analytics */}
              <motion.div
                className="space-y-3"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.1,
                      duration: 0.5,
                    },
                  },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
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
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
