'use client';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';

function About() {
  const { ref } = useSectionInView('About', 0.8);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p>
        {' '}
        After a fruitful career in{' '}
        <span className="font-medium">customer service</span>, I embarked on a
        journey into the world of coding. My path began with enrollment in an
        online bootcamp, and online courses
        {/* <span className="font-medium underline underline-offset-2">
          The Odin project
        </span> */}
        .{' '}
        <span className="italic">
          {' '}
          <br /> The aspect of programming that truly captivates me
        </span>{' '}
        is the power to bring innovative ideas to life.Currently, I am actively
        immersed in utilizing and honing my skills in technologies like
        <span className="font-bold"> React, Next.js, and MongoDB</span>.I also
        have experience with <strong>TypeScript</strong> & Prisma,and am eagerly
        seeking opportunities to expand my tech stack. <br /> I am presently on
        the lookout for a full-time role as{' '}
        <span className="font-medium">a software developer.</span>
      </p>
      <p>
        <span className="italic">Outside of coding,</span>you can find me
        strumming the guitar, hitting the gym{' '}
        <span className="font-medium">
          , and constantly seeking to broaden my horizons through reading.
          Learning is my daily mantra.
        </span>
        .
      </p>
    </motion.section>
  );
}

export default About;
