'use client';
import { projectsData } from '@/lib/data';
import { spring, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { motion } from 'framer-motion';

type ProjectCardsProps = (typeof projectsData)[number];

function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  link,
  userName,
  password,
}: ProjectCardsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1 1'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      transition={{ ease: 'linear', duration: 2 }}
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
        transition: 'ease-in-out',
      }}
      className=" group mb-3 sm:mb-8 last:mb-8 "
    >
      <section className=" bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden  sm:pr-8 relative sm:h-[20rem]  even:pl-8 hover:bg-gray-200 transition-all ease-in-out duration-200 rounded-md mb-3 last:mb-2  dark:bg-white/10 dark:hover:bg-white/20 dark:text-white">
        <div className="py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-8 sm:max-w-[50%] flex flex-col h-full group-even:ml-auto   ">
          <Link
            href={link}
            className="text-2xl font-semibold underline underline-offset-2 text-sky-300 "
            target="_blank"
          >
            {title}
          </Link>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/80 ">
            {description}
          </p>

          <span className="mt-2">
            Username: <strong>{userName}</strong>{' '}
          </span>
          <span>
            Password: <strong>{password}</strong>
          </span>

          <ul className="flex flex-wrap sm:mt-auto mt-4 gap-2">
            {tags.map((tag, index) => (
              <li
                key={index}
                className=" bg-black/[0.7] p-2 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/80"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="absolute top-8 -right-40 w-[0]  sm:w-[28.25rem] rounded-lg shadow-2xl group-even:-right-[initial] group-even:-left-40  group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:-rotate-2 transition group-hover:scale-110  group-even:group-hover:translate-x-2 group-even:group-hover:translate-y-2 group-even:group-hover:rotate-2 duration-200"
        />
      </section>
    </motion.div>
  );
}

export default ProjectCard;
