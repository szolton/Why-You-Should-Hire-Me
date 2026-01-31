import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const WhyHireMePage = () => {
  return (
    <div>
      {/* Tailwind Test Box */}
      <div className="bg-red-500 text-white p-6 text-center font-bold text-xl">
        Tailwind is working!
      </div>

      {/* Slide 1 */}
      <Slide bgColor="bg-blue-200">
        <motion.h1
          className="text-5xl font-extrabold mb-4 text-center"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Slide 1: Hello!
        </motion.h1>
        <p className="text-lg text-center">
          If you see this slide centered with padding, Tailwind + Motion is working.
        </p>
      </Slide>

      {/* Slide 2 */}
      <Slide bgColor="bg-green-200">
        <motion.h1
          className="text-5xl font-extrabold mb-4 text-center"
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Slide 2: Motion Works!
        </motion.h1>
        <p className="text-lg text-center">
          This text should animate in from the right.
        </p>
      </Slide>

      {/* Slide 3 */}
      <Slide bgColor="bg-yellow-200">
        <motion.h1
          className="text-5xl font-extrabold mb-4 text-center"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Slide 3: Tailwind Styles
        </motion.h1>
        <p className="text-lg text-center">
          Tailwind padding, colors, and text centering should all apply correctly.
        </p>
      </Slide>
    </div>
  );
};

export default WhyHireMePage;
