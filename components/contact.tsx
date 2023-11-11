'use client';

import { sendEmail } from '@/actions/setEmail';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { useFormStatus } from 'react-dom';
import SectionHeading from './section-heading';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      id="contact"
      className=" scroll-mt-28 mb-20 text-center  w-[min(100%,30rem)]"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.2,
      }}
      ref={ref}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className=" text-gray-700 -mt-5  dark:text-white/80">
        Please contact me directly at{' '}
        <a
          className="underline"
          href="mailto:"
        >
          hichempeter@gmail.com
        </a>{' '}
        or using this Form
      </p>
      <form
        action={async (FormData) => {
          const { data, error } = await sendEmail(FormData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success('Email sent');
        }}
        className="mt-10  flex flex-col dark:text-black"
      >
        <input
          type="email"
          placeholder="Your email"
          className="h-14 rounded-lg borderBlack px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-95 transition-all dark:outline-none"
          required
          maxLength={30}
          name="senderEmail"
        />
        <textarea
          className="h-52 my-3 p-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-95 transition-all dark:outline-none"
          placeholder="Your message"
          required
          maxLength={500}
          name="message"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}

export default Contact;
