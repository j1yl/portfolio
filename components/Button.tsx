"use client";
import { motion } from "framer-motion";

const Button = ({
  text,
  delay,
  styles,
}: {
  text: string;
  delay: number;
  styles: string;
}) => {
  return (
    <>
      <motion.button
        className={styles}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: delay, duration: 1 },
        }}
        whileHover={{
          y: -5,
          transition: { duration: 0.3 },
        }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
      >
        {text}
      </motion.button>
    </>
  );
};

export default Button;
