import { motion } from "framer-motion";

const myColors: string[] = ["#9fc0ff", "#c89dff", "#ffcc9d", "#ff9d9d"];

const parent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const child = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {},
  },
  hidden: {
    opacity: 0,
    y: -20,
  },
};

const HeroText = ({ text }: { text: string }) => {
  const chars = text.split("");
  const randomColor = (array: string[]) => {
    return array[Math.floor(Math.random() * array.length)];
  };
  return (
    <motion.div
      className="flex select-none flex-wrap text-[#1e1e1e] dark:text-[#d1d1d1]"
      variants={parent}
      initial="hidden"
      animate="visible"
    >
      {chars.map((letter, index) => (
        <motion.span
          whileHover={{
            scaleY: [1, 1.2, 1],
            scaleX: [1, 1.3, 1],
            color: randomColor(myColors),
          }}
          transition={{
            duration: 0.25,
          }}
          variants={child}
          key={index}
          className="h-max w-max text-3xl font-bold md:text-5xl"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default HeroText;
