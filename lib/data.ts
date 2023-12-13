import dashBoard from '@/public/ResponsiveDashboard.png';
import Tesla from '@/public/Tesla.png';
import uber from '@/public/UberClone.png';
import Affinity from '@/public/affinity.png';
import wilde from '@/public/wild-oasis.png';
import pizza from '@/public/Pizzadise.png';
import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Customer Service Experience',
    location: 'Calgary, CA',
    description:
      'Best Performer as customer service agent for the first electrical charging car company in Canada.',
    icon: React.createElement(CgWorkAlt),
    date: '2023 - Today',
  },
  {
    title: 'Technical Back-liner',
    location: 'Athens, GR',
    description:
      "I worked as a technical specialist and trainer, supporting agents handling technical inquiries for the world's largest household brand, offering valuable guidance and assistance. ",
    icon: React.createElement(CgWorkAlt),
    date: '2020 - 2022',
  },
  {
    title: 'Customer service',
    location: 'Algiers, DZD',
    description:
      'Act as the primary point of contact and coordinator for customers throughout the shipment process, from the shipper to the final delivery mile.',
    icon: React.createElement(CgWorkAlt),
    date: '2018 - 2020',
  },
] as const;

export const projectsData = [
  {
    title: 'The wild oasis',
    description: 'A dashboard for a hotel management   ',
    tags: ['React', 'Supabase', 'React Router', 'Styled Components', 'Redux'],
    imageUrl: wilde,
    link: 'https://wildeoasis.netlify.app/',
    userName: 'test@test.com ',
    password: 'test1234',
  },
  // {
  //   title: 'Pizzadise',
  //   description: 'All the features of an online store ',
  //   tags: ['React', 'Redux toolkit', 'Tailwind', 'React Router'],
  //   imageUrl: pizza,
  //   link: 'https://pizza-fast-beige.vercel.app/',
  //   userName: '',
  //   password: '',
  // },

  {
    title: 'Affinity Care',
    description: 'Web site UI for care home service faiclity  ',
    tags: ['Next.js', 'Framer Motion', 'Tailwind', 'Resend', 'React Email'],
    imageUrl: Affinity,
    link: 'https://affinity-care.vercel.app/',
    userName: '',
    password: '',
  },

  {
    title: 'Tesla Clone',
    description:
      'I worked on this Tesla UI clone ( the loading of the home page is slow)',
    tags: ['React', 'Tailwind', 'Vite'],
    imageUrl: Tesla,
    link: 'https://clone-tesla-v1.netlify.app/',
    userName: null,
    password: null,
  },
  {
    title: 'Responsive Dashboard',
    description: 'UI dashboard fully responsive, with charts.',
    tags: ['React', 'Material UI', 'Tailwind', 'Vite'],
    imageUrl: dashBoard,
    link: 'https://responsive-ui-dashboard.netlify.app/',
    userName: null,
    password: null,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Redux',
  'Framer Motion',
  'Sales Force',
  'Jira',
] as const;
