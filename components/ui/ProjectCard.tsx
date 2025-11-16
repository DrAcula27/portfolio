'use client';

import { motion } from 'motion/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Props {
  title: string;
  body: string;
  githubUrl?: string;
  liveUrl?: string;
}

export default function ProjectCard({
  title,
  body,
  githubUrl,
  liveUrl,
}: Props) {
  return (
    <motion.div className="rounded-lg shadow-lg p-6 border">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{body}</p>
      <div className="flex gap-4">
        {githubUrl && (
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="View GitHub Repository"
            className="p-2 hover:scale-110 active:scale-95 transition-all duration-300"
          >
            <FaGithub className="w-5 h-5" />
          </motion.a>
        )}
        {liveUrl && (
          <motion.a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="View Live Demo"
            className="p-2 hover:scale-110 active:scale-95 transition-all duration-300"
          >
            <FaExternalLinkAlt className="w-5 h-5" />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}
