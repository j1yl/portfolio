"use client";
import React from "react";
import { motion } from "framer-motion";

const FloatingWord = ({ text, delay }: { text: string; delay: number }) => {
  let charArr = [];
  charArr = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.12 * i + delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      y: 30,
    },
  };

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="overflow-hidden flex flex-wrap select-none"
      >
        {charArr.map((item, index) => (
          <motion.span key={index} variants={child} className="relative mr-2">
            {item}
          </motion.span>
        ))}
      </motion.div>
    </>
  );
};
FloatingWord;
export default FloatingWord;
