'use client';

import { motion } from 'motion/react';
import ProjectCard from '@/components/ui/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'Project One',
      body: 'Description for project one.',
      githubUrl: 'https://github.com/DrAcula27/project-one',
      liveUrl: 'https://dracula27.github.io/project-one/',
    },
    {
      title: 'Project Two',
      body: 'Description for project two.',
      githubUrl: 'https://github.com/DrAcula27/project-two',
      liveUrl: 'https://dracula27.github.io/project-two/',
    },
    {
      title: 'Project Three',
      body: 'Description for project three.',
      githubUrl: 'https://github.com/DrAcula27/project-three',
      liveUrl: 'https://dracula27.github.io/project-three/',
    },
  ];
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
            Here are some of the projects I have worked on. Each
            project showcases my skills and passion for web
            development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                body={project.body}
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
