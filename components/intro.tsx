'use client';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hooks';
import profile from '@/public/Profile.jpg';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { TypeAnimation } from 'react-type-animation';
type Props = {};

function Intro({}: Props) {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      className="mb-28 max-w-[50rem] sm:mb-0 scroll-mt-[50rem] border-none"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.5 }}
          >
            <Image
              src={profile}
              alt="profile-picture"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24  w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>

          {/* <motion.span
            className="text-2xl absolute bottom-0 -right-1 "
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 155,
              delay: 0.1,
              duration: 0.8,
            }}
          >
            👋
          </motion.span> */}
        </div>
      </div>
      <motion.h1
        className="text-center mb-10 mt-4 font-medium text-xl !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        // transition={{ type: 'tween', duration: 0.2 }}
      >
        <span>
          Hello I am <strong>Heechem :</strong>{' '}
        </span>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            2000,
            'A Front-end Developer',
            2000,
            'Who is ',
          ]}
          speed={50}
          repeat={Infinity}
        />
        <br />
        Transitioning from the world of Supply Chain Management and Customer
        Service.
        <br />
        Embarking on the journey of web development to bring my creativity to
        life.
      </motion.h1>
      <motion.div
        className="flex flex-col  justify-center items-center sm:flex-row text-lg font-medium gap-3"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          href={'#contact'}
          className=" group bg-gray-900 text-white px-8 py-2 flex items-center gap-2 rounded-full cursor-pointer outline-none  hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all ease-in-out duration-200 "
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me{' '}
          <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />{' '}
        </Link>
        <a
          className=" group bg-white  px-8 py-2 flex items-center gap-2 rounded-full cursor-pointer outline-none  hover:scale-110 active:scale-105 transition-all ease-in-out duration-200 borderBlack dark:bg-white/10"
          href="/ResumeeHeechem.pdf"
          download={true}
        >
          Resume{' '}
          <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
        </a>
        <a
          className=" bg-white text-gray-700  p-4 flex items-center gap-2 rounded-full cursor-pointer text-[1.20rem] opacity-70 hover:scale-110 active:scale-110 transition-all ease-in-out duration-200 borderBlack  hover:text-gray-950 dark:text-white dark:bg-white/10"
          href="https://www.linkedin.com/in/ichallamene-hichem/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className=" bg-white text-gray-700  p-4 flex items-center gap-2 rounded-full cursor-pointer text-[1.30rem] opacity-70 hover:scale-110 active:scale-110 transition-all ease-in-out duration-200 borderBlack hover:text-gray-950 dark:text-white dark:bg-white/10"
          href="https://github.com/Heechem "
          target="_blank"
        >
          <FaGithub />
        </a>
      </motion.div>
    </section>
  );
}

export default Intro;
