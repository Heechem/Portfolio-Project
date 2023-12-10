import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import dashBoard from '@/public/ResponsiveDashboard.png';
import uber from '@/public/UberClone.png';
import Tesla from '@/public/Tesla.png';
import flo from '@/public/flo.png';
import Affinity from '@/public/affinity.png';
import wilde from '@/public/wild-oasis.png';

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
    tags: ['React', 'Supabase', 'React Router', 'Tailwind', 'Redux'],
    imageUrl: wilde,
    link: 'https://wildeoasis.netlify.app/',
    userName: 'test@test.com ',
    password: 'test1234',
  },
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
    title: 'Uber Clone',
    description: 'I created this uber clone  ',
    tags: ['React', 'Next.js', 'Stripe', 'Tailwind', 'Google API'],
    imageUrl: uber,
    link: 'https://uber-clone-rxnt-al460u03c-heechem.vercel.app/',
    userName: 'test@testmail.com ',
    password: '123456',
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
