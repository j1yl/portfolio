import "../css/Hero.scss";
import { motion } from "framer-motion";
import useCursorVariant from "../App";

const Hero = () => {
  return (
    <div className="hero_container">
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, type: "spring", bounce: 0.8 }}
      >
        I&apos;m Joe Lee, Web Developer.<br></br>I build websites using{" "}
        <span>cutting edge</span> technology.
      </motion.h1>
    </div>
  );
};

export default Hero;
