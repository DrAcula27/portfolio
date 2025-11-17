'use client';

import { motion } from 'motion/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import type { Project } from '@/lib/types';

type Props = Pick<
  Project,
  | 'title'
  | 'description'
  | 'tags'
  | 'imgUrl'
  | 'githubUrl'
  | 'liveUrl'
>;

export default function ProjectCard({
  title,
  description,
  tags,
  imgUrl,
  githubUrl,
  liveUrl,
}: Props) {
  return (
    <motion.div className="rounded-lg shadow-lg p-6 border overflow-hidden flex flex-col h-full hover:scale-105 transition-all duration-300">
      {/* title */}
      <h3 className="text-xl font-semibold mb-0.5">{title}</h3>

      {/* tags */}
      <p>
        {tags.map((tag) => (
          <span
            key={title}
            className="mx-1 px-3 py-1 rounded-full border text-sm italic color-accent-cool"
          >
            {tag}
          </span>
        ))}
      </p>

      {/* img container with hover overlay */}
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        {imgUrl && (
          <motion.img
            src={imgUrl}
            alt={title}
            className="w-full h-full object-cover rounded-sm"
          />
        )}

        {/* hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/70 flex items-center justify-center p-4"
        >
          <p className="max-h-full overflow-y-auto text-white text-sm leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>

      {/* links */}
      <div className="flex justify-around mt-2">
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
