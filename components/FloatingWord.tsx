"use client";
import React from "react";
import { motion } from "framer-motion";

const FloatingWord = ({ text }: { text: string }) => {
  let charArr = [];
  charArr = text.split("");
  console.log(charArr);
  //{letter === " " ? "\u00A0" : letter}
  return (
    <>
      <motion.div>
        {charArr.map((item, index) => (
          <motion.span
            key={index}
            whileHover={{
              style: {
                color: "#ffffff",
              },
              transition: {
                duration: 0.2,
              },
            }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            {item}
          </motion.span>
        ))}
      </motion.div>
    </>
  );
};

export default FloatingWord;
