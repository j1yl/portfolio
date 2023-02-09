import { motion } from "framer-motion";

const parent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 1,
    },
  },
};

const child = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      bounce: 2,
    },
  },
  hidden: {
    opacity: 0,
    x: -20,
  },
};

const HeroDescriptionText = ({ text }: { text: string }) => {
  const words = text.split(" ");

  return (
    <>
      <motion.div
        className="flex w-full select-none flex-wrap text-primary_dark dark:text-third_white"
        variants={parent}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, index) => (
          <motion.span key={index} variants={child} className="mr-2">
            {word}
          </motion.span>
        ))}
      </motion.div>
    </>
  );
};

export default HeroDescriptionText;
