import { motion } from "framer-motion";
import { Link } from "react-scroll";

const variants = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      delay: 2,
      duration: 0.5,
    },
  },
};

const HeroButton = ({ text, to }: { text: string; to: string }) => {
  return (
    <>
      <motion.button
        variants={variants}
        initial="hidden"
        animate="show"
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
        className={`mt-2 w-max rounded-xl border-4 border-[#1e1e1e] p-4 font-semibold dark:border-[#d1d1d1] dark:text-[#d1d1d1] `}
      >
        <Link className="h-full w-full" to={to} smooth={true} duration={500}>
          {text}
        </Link>
      </motion.button>
    </>
  );
};

export default HeroButton;
