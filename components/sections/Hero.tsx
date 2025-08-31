'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import GitHubStatsWidget from '../ui/GitHubStatsWidget';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin, FaArrowDown } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { PiMouseScrollLight } from 'react-icons/pi';

const socialLinks = [
  {
    icon: SiGithub,
    href: 'https://github.com/dracula27',
    label: 'GitHub',
  },
  {
    icon: FaLinkedin,
    href: 'https://linkedin.com/in/daniellerandrews',
    label: 'LinkedIn',
  },
  {
    icon: HiMail,
    href: 'mailto:danielle.andrews.dev@icloud.com',
    label: 'Email',
  },
];

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

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-16"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* greeting */}
          <motion.p
            className="text-secondary-500 font-semibold text-lg mb-0"
            variants={itemVariants}
          >
            Hi, my name is
          </motion.p>

          {/* main heading */}
          <motion.div variants={itemVariants}>
            <h1>
              <span className="text-4xl md:text-6xl lg:text-7xl font-bold underline hover:text-secondary-500 transition-all duration-100 ease-in-out">
                Danielle Andrews
              </span>
              <span className="text-4xl md:text-6xl lg:text-7xl font-bold">
                .
              </span>
            </h1>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">
              I build things for the web.
            </h2>
          </motion.div>

          {/* description */}
          <motion.p
            className="text-xl max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            I am a software engineer who specializes in building (and
            occasionally designing) exceptional digital experiences.
            Currently, I am focused on building accessible,
            human-centered products.
          </motion.p>

          {/* github stats widget */}
          <motion.div variants={itemVariants}>
            <GitHubStatsWidget username="dracula27" />
          </motion.div>

          {/* buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <Link
              href="#experience"
              className="group btn btn-primary flex items-center gap-2 hover:scale-105 ease-in-out active:scale-95"
            >
              View My Work
              <FaArrowDown
                size={18}
                className="group-hover:translate-y-1 transition-transform duration-300 ease-in-out"
              />
            </Link>

            <Link
              href="#contact"
              className="group btn btn-primary flex items-center gap-2 hover:scale-105 ease-in-out active:scale-95"
            >
              Get In Touch
              <FaArrowDown
                size={18}
                className="group-hover:translate-y-1 transition-transform duration-300 ease-in-out"
              />
            </Link>
          </motion.div>

          {/* links */}
          <motion.div
            className="flex justify-center gap-6 pt-8"
            variants={itemVariants}
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-primary-500 hover:scale-125 transition-all duration-100 ease-in-out p-2"
                aria-label={label}
                title={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </motion.div>

          {/* scroll indicator */}
          <motion.div
            // className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            className="flex justify-center mt-12"
            variants={itemVariants}
          >
            <Link href="#about">
              <PiMouseScrollLight
                size={32}
                className="hover:text-secondary-500 transition-colors cursor-pointer animate-bounce"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
