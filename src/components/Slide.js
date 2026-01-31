import React from 'react';
import { motion } from 'framer-motion';

const Slide = ({ children, bgColor = 'bg-gray-50' }) => (
  <motion.section
    className={`w-full min-h-screen flex flex-col justify-center items-center p-8 ${bgColor}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8 }}
  >
    <div className="text-center max-w-3xl">
      {children}
    </div>
  </motion.section>
);

export default Slide;
