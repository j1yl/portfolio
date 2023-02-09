import { motion, Variants } from "framer-motion";
import QOTD from "./ExampleQOTD";

const HoverPopup = ({
  cursorVariant,
  variants,
}: {
  cursorVariant: string;
  variants: Variants;
}) => {
  if (cursorVariant === "1") {
    return (
      <motion.div
        variants={variants}
        animate={cursorVariant}
        className="z-100 pointer-events-none fixed top-0 left-0 hidden h-[200px] w-[300px] md:flex"
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 200,
          duration: 0.5,
        }}
      >
        <QOTD />
      </motion.div>
    );
  } else if (cursorVariant === "2") {
    return (
      <motion.div
        variants={variants}
        animate={cursorVariant}
        className="z-100 pointer-events-none fixed top-0 left-0 hidden h-[200px] w-[300px] p-2 md:flex"
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 200,
          duration: 0.5,
        }}
      >
        2
      </motion.div>
    );
  } else if (cursorVariant === "3") {
    return (
      <motion.div
        variants={variants}
        animate={cursorVariant}
        className="z-100 pointer-events-none fixed top-0 left-0 hidden h-[200px] w-[300px] p-2 md:flex"
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 200,
          duration: 0.5,
        }}
      >
        3
      </motion.div>
    );
  } else {
    return (
      <motion.div
        variants={variants}
        animate={cursorVariant}
        className="z-100 pointer-events-none fixed top-0 left-0 hidden h-[200px] w-[300px] p-2 md:flex"
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 200,
          duration: 2,
        }}
      ></motion.div>
    );
  }
};

export default HoverPopup;
