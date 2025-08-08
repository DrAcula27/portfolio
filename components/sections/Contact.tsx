'use client';

import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 pt-16"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-lg">
            I would love to hear from you! Whether you have a
            question, want to collaborate, or just want to say hi,
            feel free to reach out.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
