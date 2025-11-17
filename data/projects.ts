import { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    id: 'project1',
    title: 'Hack for LA - 311 Data Visualization',
    description:
      'My contributions include: refactoring React components according to new designs and best practices, implementing new accessibility features, optimizing data fetching from Hugging Face API with Python scripts, and managing state using Redux.',
    tags: ['Open Source', 'Full Stack'],
    imgUrl: '/img/hackForLA_311Data.PNG',
    githubUrl: 'https://github.com/hackforla/311-data',
    liveUrl: 'https://hackforla.github.io/311-data/#/map',
  },
  {
    id: 'project2',
    title: 'TeamForward Networking',
    description:
      'My contributions included: developing an automated post-event processing workflow using AWS Lambda, SNS, SQS, and DynamoDB, enabling timely in-app, push, and email notifications when events ended, and strengthening code reliability by writing comprehensive Jest unit tests.',
    tags: ['Volunteer', 'Backend'],
    imgUrl: '/img/tfnetworking.png',
    githubUrl: 'https://github.com/teamforward-networking',
    liveUrl: 'https://www.tfnetworking.com/',
  },
  {
    id: 'project3',
    title: 'My CookBook Recipe Saver',
    description:
      ' A fully functional web application that allows users to search for, view, and save recipes. The application also supports searching for a recipe by name or filtering recipes by multiple criteria.',
    tags: ['Personal', 'Full Stack'],
    imgUrl: '/img/myCookBook.png',
    githubUrl: 'https://github.com/DrAcula27/CookBook',
    liveUrl: 'cook-book-g2cf.onrender.com/',
  },
  {
    id: 'project4',
    title: 'New Tab Browser Extension',
    description:
      'A simple browser extension that replaces the default new tab page with a custom dashboard featuring a personalized greeting, a to-do list, weather widget, music player, links to favorite websites, and Google or DuckDuckGo internet search.',
    tags: ['Personal', 'Utility'],
    imgUrl: '/img/browserExtension.png',
    githubUrl:
      'https://github.com/DrAcula27/Dashboard-Chrome-Extension',
    liveUrl:
      'https://dracula27.github.io/Dashboard-Chrome-Extension/',
  },
];
