"use client";
import React from "react";
import { motion } from "framer-motion";

const FloatingChar = ({ text, delay }: { text: string; delay: number }) => {
  let charArr = [];
  charArr = text.split("");
  // console.log(charArr);
  //{letter === " " ? "\u00A0" : letter}

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.12 * i + delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 15,
        stiffness: 100,
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
        className="overflow-hidden flex flex-wrap select-none z-0"
      >
        {charArr.map((item, index) => (
          <motion.span
            key={index}
            variants={child}
            className="relative"
            whileHover={{ color: "#E0E7E9", scale: 1.05, x: 3 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            {item === " " ? "\u00A0" : item}
          </motion.span>
        ))}
      </motion.div>
    </>
  );
};

export default FloatingChar;
