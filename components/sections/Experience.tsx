'use client';

import { motion } from 'motion/react';

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

export default function Experience() {
  return (
    <section
      id="experience"
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
            <h2 className="text-4xl font-bold mb-4">Experience</h2>
            <div className="w-20 h-1 bg-pink mx-auto"></div>
          </motion.div>

          {/* main content */}
          <p className="text-lg">
            I have worked on various projects that have helped me grow
            as a developer. My experience includes web development,
            mobile applications, and more.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
