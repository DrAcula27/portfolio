'use client';

import { motion, AnimatePresence } from 'motion/react';
import { JSX, useState } from 'react';
import {
  SiReact,
  SiSqlite,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiHtml5,
  SiCsswizardry,
  SiNodedotjs,
  SiTypescript,
  SiPostgresql,
} from 'react-icons/si';
import {
  LuCalendar,
  LuMapPin,
  LuExternalLink,
  LuCode,
  LuChevronDown,
  LuChevronUp,
} from 'react-icons/lu';
import { FaAws } from 'react-icons/fa6';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { experiences } from '@/data/experience';

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

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 80,
      damping: 15,
    },
  },
};

const expandVariants = {
  collapsed: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2,
    },
  },
  expanded: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut' as const,
    },
  },
};

const techIcons: Record<string, JSX.Element> = {
  React: <SiReact className="w-4 h-4" />,
  'Node.js': <SiNodedotjs className="w-4 h-4" />,
  AWS: <FaAws className="w-4 h-4" />,
  TypeScript: <SiTypescript className="w-4 h-4" />,
  SQLite: <SiSqlite className="w-4 h-4" />,
  Git: <SiGit className="w-4 h-4" />,
  GitHub: <SiGithub className="w-4 h-4" />,
  'GitHub Actions': <SiGithubactions className="w-4 h-4" />,
  HTML: <SiHtml5 className="w-4 h-4" />,
  CSS: <SiCsswizardry className="w-4 h-4" />,
  PostgreSQL: <SiPostgresql className="w-4 h-4" />,
};

export default function Experience() {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (id: number) => {
    setExpandedCards((prev) =>
      prev.includes(id)
        ? prev.filter((cardId) => cardId !== id)
        : [...prev, id]
    );
  };

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="space-y-12"
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

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-secondary-500 hidden md:block"></div>

            <div className="space-y-8">
              {experiences.map((exp) => {
                const isExpanded = expandedCards.includes(exp.id);

                return (
                  <motion.div
                    key={exp.id}
                    className="relative"
                    variants={cardVariants}
                  >
                    {/* Timeline arrow */}
                    <MdKeyboardDoubleArrowRight className="absolute left-4 top-8 w-8 h-8 text-orange bg-orange-50 rounded-full shadow-lg hidden md:block" />

                    {/* Experience Card */}
                    <div className="md:ml-20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                      {/* Always Visible Header */}
                      <div className="p-8">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                          <div className="mb-4 lg:mb-0">
                            <h3 className="text-2xl font-bold">
                              {exp.title}
                            </h3>
                            <div className="flex items-center gap-4 mb-2">
                              <span className="font-semibold text-lg">
                                {exp.company}
                              </span>
                              {exp.link && (
                                <a
                                  href={exp.link}
                                  className="text-primary-500 hover:text-primary-700 transition-colors"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <LuExternalLink className="w-4 h-4" />
                                </a>
                              )}
                            </div>
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm">
                              <div className="flex items-center gap-1">
                                <LuCalendar className="w-4 h-4" />
                                {exp.startDate.toLocaleDateString()} -
                                {exp.endDate
                                  ? ` ${exp.endDate.toLocaleDateString()}`
                                  : ' Present'}
                              </div>
                              <div className="flex items-center gap-1">
                                <LuMapPin className="w-4 h-4" />
                                {exp.location}
                              </div>
                            </div>
                          </div>
                          <div className="flex-shrink-0">
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-semibold bg-purple-50 text-purple shadow-sm`}
                            >
                              {exp.type}
                            </span>
                          </div>
                        </div>

                        {/* Summary - Always Visible */}
                        <p className="mb-6 leading-relaxed">
                          {exp.summary}
                        </p>

                        {/* Core Technologies - Always Visible */}
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3">
                            Top 5 Technologies:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies
                              .slice(0, 5)
                              .map((tech, i) => (
                                <span
                                  key={i}
                                  className="flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium transition-colors cursor-default"
                                >
                                  {techIcons[tech] || (
                                    <LuCode className="w-4 h-4" />
                                  )}
                                  {tech}
                                </span>
                              ))}
                            {/* {exp.technologies.length > 6 && (
                              <span className="px-3 py-1 rounded-full text-sm">
                                +{exp.technologies.length - 6} more
                              </span>
                            )} */}
                          </div>
                        </div>

                        {/* Expand/Collapse Button */}
                        <motion.button
                          onClick={() => toggleCard(exp.id)}
                          className=" btn-ghost flex items-center gap-2 font-semibold transition-all cursor-pointer"
                          whileTap={{ scale: 0.98 }}
                        >
                          {isExpanded
                            ? 'Show Less'
                            : 'Show More Details'}
                          {isExpanded ? (
                            <LuChevronUp className="w-4 h-4" />
                          ) : (
                            <LuChevronDown className="w-4 h-4" />
                          )}
                        </motion.button>
                      </div>

                      {/* Expandable Content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            variants={expandVariants}
                            initial="collapsed"
                            animate="expanded"
                            exit="collapsed"
                            className="overflow-hidden"
                          >
                            <div className="px-8 pb-8 border-t pt-6">
                              {/* Full Description */}
                              <div className="mb-6">
                                <h4 className="font-semibold mb-3">
                                  Full Description:
                                </h4>
                                <p className="leading-relaxed">
                                  {exp.fullDescription}
                                </p>
                              </div>

                              {/* Key Achievements */}
                              <div className="mb-6">
                                <h4 className="font-semibold mb-3">
                                  Key Achievements:
                                </h4>
                                <ul className="space-y-2">
                                  {exp.achievements.map(
                                    (achievement, i) => (
                                      <li
                                        key={i}
                                        className="flex items-start gap-3"
                                      >
                                        <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="">
                                          {achievement}
                                        </span>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>

                              {/* Key Projects */}
                              {exp.projects &&
                                exp.projects.length > 0 && (
                                  <div className="mb-6">
                                    <h4 className="font-semibold mb-3">
                                      Key Projects:
                                    </h4>
                                    <div className="space-y-2">
                                      {exp.projects.map(
                                        (project, i) => (
                                          <div
                                            key={i}
                                            // className="rounded-lg p-4 bg-neutral-600 hover:outline-2 transition-all"
                                            // className="card hover:outline-1"
                                            className="flex items-start gap-3"
                                          >
                                            <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                              <h5 className="font-semibold mb-0">
                                                {project.title}
                                              </h5>
                                              <p className="mb-2 mt-0 italic">
                                                {project.description}
                                              </p>
                                              <p className="font-medium">
                                                <span className="font-semibold">
                                                  Impact
                                                </span>
                                                : {project.impact}
                                              </p>
                                            </div>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </div>
                                )}

                              {/* All Technologies */}
                              <div>
                                <h4 className="font-semiboldmb-3">
                                  All Technologies Used:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {exp.technologies.map((tech, i) => (
                                    <span
                                      key={i}
                                      className="flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium transition-colors cursor-default"
                                    >
                                      {techIcons[tech] || (
                                        <LuCode className="w-4 h-4" />
                                      )}
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Card Accent */}
                      <div className="h-2 bg-primary-500"></div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center pt-12"
            variants={itemVariants}
          >
            <div className="rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Ready to work together?
              </h3>
              <p className="mb-6">
                I am always open to discussing new opportunities and
                interesting projects.
              </p>
              <motion.button
                className="btn-primary px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
