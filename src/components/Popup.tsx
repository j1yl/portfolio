import { motion, type Variants } from "framer-motion";
import QOTD from "./QOTD";

const Popup = ({
  cursorVariant,
  variants,
}: {
  cursorVariant: string;
  variants: Variants;
}) => {
  return (
    <motion.div
      variants={variants}
      animate={cursorVariant}
      className="z-100 pointer-events-none flex items-center justify-center bg-primary_white dark:bg-primary_dark md:fixed "
      transition={{
        type: "spring",
        damping: 50,
        stiffness: 200,
      }}
    >
      {cursorVariant === "qotd" && (
        <div className="h-max w-max text-primary_dark">
          <QOTD />
        </div>
      )}
      {cursorVariant === "term" && (
        <div className="h-max w-max text-primary_dark">
          <h2 className="font-bold">Available Commands</h2>
          <div className="flex flex-col">
            <p>resume - returns a link to my resume</p>
            <p>clear - clears the terminal output</p>
            <p>favfoods - shows my favorite foods</p>
            <p>favsongs - shows my favorite songs</p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Popup;
