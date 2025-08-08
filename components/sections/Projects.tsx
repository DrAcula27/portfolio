'use client';

import { motion } from 'motion/react';

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-6 pt-16"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-lg text-neutral-700 dark:text-neutral-200">
            Here are some of the projects I have worked on. Each
            project showcases my skills and passion for web
            development.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
