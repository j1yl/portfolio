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
        style={{
          background:
            "linear-gradient(128deg, rgba(159,192,255,1) 0%, rgba(200,157,255,1) 35%, rgba(255,204,157,1) 65%, rgba(255,157,157,1) 100%)",
        }}
        className={`mt-2 w-max rounded-xl border-4 border-[#121212] p-4 font-semibold`}
      >
        <Link className="h-full w-full" to={to} smooth={true} duration={500}>
          {text}
        </Link>
      </motion.button>
    </>
  );
};

export default HeroButton;
