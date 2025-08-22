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
        technologies: ['R', 'Shiny', 'SQLite', 'GitHub'],
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
        technologies: ['R', 'Shiny', 'SQLite', 'GitHub'],
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
      'Architected and developed a comprehensive database and web application to manage and visualize salmon habitat restoration projects. Collaborated with biologists and stakeholders to ensure data accuracy and usability, resulting in improved project tracking and reporting capabilities.',
    fullDescription:
      'Architected and developed a comprehensive database and web application to manage and visualize salmon habitat restoration projects. Collaborated closely with biologists and stakeholders to gather requirements, ensuring the system met their needs for data accuracy, usability, and reporting. Implemented features for project tracking, data visualization, and reporting, significantly enhancing the organization’s ability to monitor restoration efforts and communicate progress to funders and the public.',
    achievements: [
      'Cleaned and organized 10+ years of restoration project data, improving data integrity and accessibility for biologists and stakeholders.',
      'Designed data schema for migrating data into MongoDB Atlas, ensuring scalability and performance for future growth.',
      // 'Developed a user-friendly web application using React and Node.js, enabling easy access to project data and visualizations for non-technical users.', //* maybe use Angular or Vue instead of React?
      "Integrated interactive charts into the organization's existing WordPress site using MongoDB Charts, enhancing data visualization and stakeholder engagement.",
      'Provided training and documentation to staff, ensuring smooth adoption and ease of importing of data into the system.',
    ],
    technologies: [
      'MongoDB',
      'MongoDB Atlas',
      'MongoDB Charts',
      'WordPress',
      'Google Sheets',
      'Google Meet',
      'Node.js',
      'Express',
    ],
    projects: [
      {
        id: '1',
        title: 'Data Cleanup & Migration',
        description:
          'Cleaned and organized 10+ years of restoration project data for migration into MongoDB Atlas.',
        impact:
          'Improved data integrity and accessibility for biologists and stakeholders. Designed a scalable data schema to accommodate future growth and ensure optimal performance.',
        technologies: ['Google Sheets', 'MongoDB', 'MongoDB Atlas'],
        featured: false,
      },
      {
        id: '2',
        title: 'WordPress Integration',
        description:
          "Integrated interactive charts into the organization's existing WordPress site using MongoDB Charts.",
        impact:
          'Enhanced data visualization and stakeholder engagement by providing easy access to project data and visualizations directly on the website.',
        technologies: ['WordPress', 'MongoDB Charts'],
        featured: false,
      },
      {
        id: '3',
        title: 'Microservice Development',
        description:
          'Built a Node.js/Express microservice that generates embeddable iframes for data visualizations, enabling seamless integration of interactive analytics dashboards into WordPress without plugin dependencies or performance overhead.',
        impact:
          'Streamlined data access and improved user experience, allowing staff and stakeholders to efficiently interact with project information.',
        technologies: [
          'Node.js',
          'Express',
          'MongoDB Atlas',
          'WordPress',
        ],
        featured: false,
      },
      {
        id: '4',
        title: 'Staff Training & Documentation',
        description:
          'Provided training and documentation to staff on using the new database and web application.',
        impact:
          'Ensured smooth adoption of the system and ease of importing data, empowering staff to effectively manage and utilize the new tools.',
        technologies: ['Google Docs', 'Google Meet'],
        featured: false,
      },
    ],
    link: 'https://www.pnwsalmoncenter.org',
  },
];
