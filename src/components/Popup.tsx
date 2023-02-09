import { motion, Variants } from "framer-motion";

const Popup = ({
  cursorVariant,
  variants,
}: {
  cursorVariant: string;
  variants: Variants;
}) => {
  if (cursorVariant === "active") {
    return (
      <motion.div
        variants={variants}
        animate={cursorVariant}
        className="z-100 pointer-events-none rounded-full bg-primary_white dark:bg-primary_dark md:fixed "
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 200,
        }}
      ></motion.div>
    );
  }

  return (
    <motion.div
      variants={variants}
      animate={cursorVariant}
      className="z-100 pointer-events-none rounded-full bg-primary_white dark:bg-primary_dark md:fixed "
      transition={{
        type: "spring",
        damping: 50,
        stiffness: 200,
      }}
    ></motion.div>
  );
};

export default Popup;
