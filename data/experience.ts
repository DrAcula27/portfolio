import { Experience } from '@/lib/types';

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'NOAA Fisheries',
    location: 'Remote',
    startDate: new Date('2025-01-02'),
    // endDate: new Date(''),
    type: 'Contract',
    summary:
      'Mentored a graduate student team in developing the Salmonid Stressor-Response eLibrary in R/Shiny. After their graduation, assumed sole developer responsibilities, collaborating with scientists and federal teams to integrate peer-reviewed literature, maintain rigorous QA/QC, and enhance usability through accessibility-focused UI/UX design.',
    fullDescription:
      'Mentored a team of graduate students in developing the Salmonid Stressor-Response eLibrary in R/Shiny, an application that centralizes peer-reviewed stressor-response data to improve research accessibility and inform conservation policy decisions. Guided the team through project milestones, code reviews, and UI/UX feedback sessions to ensure scientific accuracy and user-friendly design. After the students’ graduation, assumed full development responsibilities, collaborating with NOAA scientists and federal partners to expand the dataset, implement rigorous QA/QC processes, and build on the functionality. Continuously refine the application’s interface with accessibility-focused enhancements, ensuring the tool remains intuitive and inclusive for researchers, modelers, and policy stakeholders.',
    achievements: [
      'Mentored a graduate student development team through the full lifecycle of the Salmonid Stressor-Response eLibrary project, providing code reviews, UI/UX guidance, and project management support—delivering a functional, production-ready tool on time and to NOAA’s technical standards.',
      'Resolved critical admin panel bug that resulted in a recurring server disconnect issue by correcting table reference mismatches for three location categories, restoring full delete functionality and eliminating 100% of related server disconnect errors during QA testing.',
      'Incorporated formal acknowledgments in the Salmonid Stressor-Response eLibrary for the graduate student team and their sponsoring professor, highlighting their contributions and maintaining transparent project authorship.',
    ],
    technologies: [
      'R',
      'Shiny',
      'SQLite',
      'Git',
      'GitHub',
      'GitHub Actions',
      'HTML',
      'CSS',
    ],
    projects: [
      {
        id: 'noaa-1',
        title: 'Graduate Student Team Mentorship & Project Launch',
        description:
          'Led the design and development process for the Salmonid Stressor-Response eLibrary in R/Shiny alongside a graduate student team.',
        impact:
          'Guided project planning, code reviews, UI/UX feedback, and milestone tracking to ensure the application met NOAA’s technical and scientific standards. Delivered the initial production-ready release on time, with functional features aligned to research and conservation needs.',
        technologies: ['Git', 'GitHub', 'Google Meet'],
        featured: false,
      },
      {
        id: 'noaa-2',
        title: 'Post-Handoff Development & Maintenance',
        description:
          'Took over sole developer responsibilities after the student team’s graduation.',
        impact:
          'Enhanced application functionality and interface with accessibility-focused improvements to meet WCAG compliance and usability goals. Collaborated with NOAA scientists and federal partners to integrate additional peer-reviewed literature, ensuring the eLibrary remains a comprehensive resource for stressor-response data.',
        technologies: [
          'R',
          'Shiny',
          'SQLite',
          'Git/GitHub/GHActions',
        ],
        featured: false,
      },
      {
        id: 'noaa-3',
        title:
          'Application Quality, Stability & Recognition Improvements',
        description:
          'Fixed critical bugs and made essential application improvements.',
        impact:
          'Resolved a critical admin panel bug by fixing table reference mismatches, eliminating 100% of related server disconnect errors during QA testing. Implemented formal acknowledgments for the student team and sponsoring professor to maintain transparent authorship and project history.',
        technologies: [
          'R',
          'Shiny',
          'SQLite',
          'Git/GitHub/GHActions',
        ],
        featured: false,
      },
    ],
    link: 'https://www.fisheries.noaa.gov/region/west-coast/northwest-science',
  },
  {
    id: 2,
    title: 'Software & Data Engineer',
    company: 'Hood Canal Salmon Enhancement Group',
    location: 'Remote',
    startDate: new Date('2025-03-02'),
    // endDate: new Date('today'),
    type: 'Contract',
    summary:
      'Lead development of scalable web applications using React, Node.js, and AWS. Mentored junior developers and architected microservices.',
    fullDescription:
      'Lead development of scalable web applications using React, Node.js, and AWS. Mentored junior developers and architected microservices handling 1M+ daily users. Collaborated with product and design teams to deliver high-impact features while maintaining code quality and performance standards.',
    achievements: [
      'Reduced page load times by 40% through code optimization and lazy loading implementation',
      'Led migration to TypeScript across 15+ repositories, improving code maintainability',
      'Implemented CI/CD pipelines reducing deployment time by 60% and eliminating manual errors',
      'Mentored 5 junior developers, with 3 receiving promotions during tenure',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'AWS',
      'PostgreSQL',
      'Docker',
      'Kubernetes',
      'Redis',
    ],
    projects: [
      {
        id: '1',
        title: 'Customer Portal Redesign',
        description:
          'Led complete overhaul of customer-facing portal serving 100K+ users',
        impact:
          'Increased user engagement by 35% and reduced support tickets by 28%',
        technologies: ['React', 'Node.js', 'GraphQL', 'AWS Amplify'],
        featured: false,
      },
      {
        id: '2',
        title: 'Microservices Migration',
        description:
          'Architected migration from monolith to microservices architecture',
        impact:
          'Improved deployment frequency from weekly to daily releases',
        technologies: ['Node.js', 'Docker', 'Kubernetes', 'AWS ECS'],
        featured: false,
      },
    ],
    link: 'https://techcorp.com',
  },
];
