import { Experience } from '@/lib/types';

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    duration: '2023 - Present',
    type: 'Full-time',
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
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'StartupHub Inc',
    location: 'Remote',
    duration: '2021 - 2023',
    type: 'Full-time',
    summary:
      'Built and maintained multiple client applications from concept to production in an agile environment.',
    fullDescription:
      'Built and maintained multiple client applications from concept to production. Collaborated with designers and product managers in an agile environment. Worked directly with clients to gather requirements and deliver custom solutions that met their business needs.',
    achievements: [
      'Developed 8+ production applications serving 50K+ combined users',
      'Improved API response times by 35% through database optimization and caching',
      'Established testing practices achieving 90% code coverage across all projects',
      'Successfully delivered projects 15% ahead of schedule on average',
    ],
    technologies: [
      'Vue.js',
      'Python',
      'Django',
      'MySQL',
      'Redis',
      'Kubernetes',
      'Jest',
      'Cypress',
    ],
    projects: [
      {
        id: '3',
        title: 'E-commerce Platform',
        description:
          'Built full-featured e-commerce solution with payment processing',
        impact: 'Generated $2M+ in sales for client in first year',
        technologies: ['Vue.js', 'Django', 'Stripe', 'MySQL'],
        featured: false,
      },
      {
        id: '4',
        title: 'Analytics Dashboard',
        description:
          'Created real-time analytics platform for marketing teams',
        impact: 'Reduced manual reporting time by 80%',
        technologies: ['Vue.js', 'Django', 'WebSocket', 'PostgreSQL'],
        featured: false,
      },
    ],
    link: 'https://startuphub.com',
  },
  {
    id: 3,
    title: 'Software Developer Intern',
    company: 'InnovateLabs',
    location: 'New York, NY',
    duration: 'Summer 2021',
    type: 'Internship',
    summary:
      'Contributed to open-source projects and internal tools while gaining experience in collaborative development.',
    fullDescription:
      'Contributed to open-source projects and internal tools. Gained experience in modern development workflows and collaborative coding practices. Participated in code reviews, pair programming sessions, and agile ceremonies.',
    achievements: [
      'Implemented 15+ features across multiple internal and open-source projects',
      "Contributed to company's design system now used by 20+ developers",
      'Received outstanding intern performance rating and return offer',
      'Presented final project to executive team and received commendation',
    ],
    technologies: [
      'JavaScript',
      'React',
      'Express.js',
      'MongoDB',
      'Jest',
      'Git',
      'Figma',
    ],
    projects: [
      {
        id: '5',
        title: 'Internal Tool Automation',
        description:
          'Automated manual deployment processes saving developer time',
        impact: 'Reduced deployment time from 2 hours to 15 minutes',
        technologies: ['Node.js', 'Express.js', 'Docker'],
        featured: false,
      },
    ],
    link: 'https://innovatelabs.com',
  },
];
