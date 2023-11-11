'use client';

import { projectsData } from '@/lib/data';
import ProjectCard from './ProjectCards';
import SectionHeading from './section-heading';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useEffect } from 'react';
import { useSectionInView } from '@/lib/hooks';

type Props = {};

function Projects({}: Props) {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <section
      id="projects"
      className=" scroll-mt-20 mb-28"
      ref={ref}
    >
      <SectionHeading>my projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
