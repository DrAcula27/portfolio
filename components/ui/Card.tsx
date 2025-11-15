'use client';

import { motion } from 'motion/react';

export default function Card() {
  return (
    <motion.div className="rounded-lg shadow-lg p-6">
      <h3>Card Title</h3>
      <p>Card body text</p>
    </motion.div>
  );
}
