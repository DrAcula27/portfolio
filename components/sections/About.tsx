'use client';

import { motion } from 'motion/react';

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 pt-16"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-neutral-700 dark:text-neutral-200">
            I am a passionate developer with a love for creating
            beautiful and functional web applications. My journey in
            tech has been driven by curiosity and a desire to solve
            real-world problems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
