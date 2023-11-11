'use client';
import React, { useContext } from 'react';
import SectionHeading from './section-heading';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useThemeContext } from '@/context/theme-context';

function Experience() {
  const { ref } = useSectionInView('Experience');
  const { theme, toggleTheme } = useThemeContext();
  return (
    <section
      id="experience"
      className=" scroll-mt-28 mb-32"
      ref={ref}
    >
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline
        lineColor=""
        animate={true}
      >
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background:
                  theme === 'light' ? '#f3f4f6' : 'rgba(255,255,255,0.05)',
                boxShadow: 'none',
                border: '1px solid rgba(0,0,0,0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
                borderRadius: '10px',
              }}
              contentArrowStyle={{
                borderRight:
                  theme === 'light'
                    ? '0.6rem solid #9ca3af'
                    : '0.6rem solid rgba(255,255,255,0.5',
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background: theme === 'light' ? 'white' : 'gray',
                fontSize: '1.5rem',
              }}
            >
              <h3 className=" font-semibold capitalize">{experience.title}</h3>
              <p className=" font-normal !mt-0">{experience.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Experience;
