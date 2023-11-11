'use client';
import React from 'react';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

// staggered animation for the skills Li

const fadeAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * index,
    },
  }),
};

function Skills({}) {
  const { ref } = useSectionInView('Skills');
  return (
    <section
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      id="skills"
      ref={ref}
    >
      <SectionHeading> My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="border bg-white rounded-xl border-black.[0.1] px-5 py-2 dark:bg-white/10 dark:text-white/90"
            variants={fadeAnimationVariants}
            initial={fadeAnimationVariants.initial}
            whileInView={'animate'}
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
