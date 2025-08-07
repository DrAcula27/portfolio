'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { SiGithub } from 'react-icons/si';
import {
  FaLinkedin,
  FaArrowRight,
  FaArrowDown,
} from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

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
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
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
          animate="visible"
        >
          {/* greeting */}
          <motion.p
            className="text-blue font-medium text-lg"
            variants={itemVariants}
          >
            Hi, my name is
          </motion.p>

          {/* main heading */}
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              Danielle Andrews
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

          {/* buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <Link
              href="#projects"
              className="group btn-primary flex items-center gap-2"
            >
              View My Work
              <FaArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>

            <Link href="#contact" className="btn-secondary">
              Get In Touch
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
                className=" hover:text-blue transition-colors p-2 rounded-lg hover:bg-neutral-400"
                aria-label={label}
                title={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </motion.div>

          {/* scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            variants={itemVariants}
          >
            <Link href="#about">
              <FaArrowDown
                size={32}
                className="hover:text-pink transition-colors cursor-pointer animate-bounce"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
