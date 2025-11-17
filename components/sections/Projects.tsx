'use client';

import { motion } from 'motion/react';
import ProjectCard from '@/components/ui/ProjectCard';
import { projects as projectData } from '@/data/projects';

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
          <p className="text-lg">
            Here are some of the projects I have worked on.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 lg:grid-cols-3">
            {projectData.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                imgUrl={project.imgUrl}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
