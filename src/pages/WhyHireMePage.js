import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const WhyHireMePage = () => {
  return (
    <div>
      {/* Slide 1: Intro */}
      <Slide bgColor="bg-[#6AC9CB] min-h-screen flex flex-col justify-center items-center px-4">
        <motion.h1
          className="text-5xl md:text-6xl font-regular mb-4 text-center text-white"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Why You Should Hire Me
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-center text-white max-w-2xl"
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I create bold, engaging visual content that brings brands to life. From social media graphics
          to print materials adapted for digital, I deliver designs that connect with audiences and drive results.
        </motion.p>
      </Slide>

      {/* Slide 2: Skills */}
      <Slide bgColor="bg-[#6AC9CB] min-h-screen flex flex-col justify-center items-center px-4">
        <motion.h1
          className="text-5xl md:text-6xl font-regular mb-4 text-center text-white"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          My Skills
        </motion.h1>
        <motion.ul
          className="text-lg md:text-xl text-center text-white max-w-2xl list-disc list-inside space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <li>Social media graphics and digital campaigns</li>
          <li>Print design adapted for digital formats</li>
          <li>Illustrations, branding, and marketing materials</li>
          <li>Responsive, modern layouts using Tailwind CSS</li>
        </motion.ul>
      </Slide>

      {/* Slide 3: Experience */}
      <Slide bgColor="bg-[#6AC9CB] min-h-screen flex flex-col justify-center items-center px-4">
        <motion.h1
          className="text-5xl md:text-6xl font-regular mb-4 text-center text-white"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Experience That Delivers
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-center max-w-2xl text-white"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I’ve worked on projects that require quick turnaround, high attention to detail, and creative solutions
          that stand out. Every piece I design is crafted to tell a story and achieve results.
        </motion.p>
      </Slide>

      {/* Slide 4: Call to Action */}
      <Slide bgColor="bg-[#6AC9CB] min-h-screen flex flex-col justify-center items-center px-4">
        <motion.h1
          className="text-5xl md:text-6xl font-regular mb-4 text-center text-white"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Let’s Work Together
        </motion.h1>
        <motion.a
          href="#contact"
          className="bg-white text-[#6AC9CB] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Contact Me
        </motion.a>
      </Slide>
    </div>
  );
};

export default WhyHireMePage;
