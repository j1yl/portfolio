import "../css/About.scss";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

const About = () => {
  return (
    <div className="about_container" id="about">
      <motion.div variants={container} initial="hidden" whileInView="show">
        <div className="about_section">
          <motion.h2 variants={item}>About</motion.h2>
          <motion.hr variants={item} />
          <motion.p variants={item}>
            Hello! I am Joe Lee and I love planning, designing, and coding
            websites using the latest technologies. I am currently pursuing my
            undergraduate degree in computer science at California State
            Fullerton. Some of my hobbies include: listening to music, composing
            music, cooking, and going to the gym.
          </motion.p>
        </div>
        <div className="skills_section">
          <div className="frontend_section">
            <motion.h2 variants={item}>Front End</motion.h2>
            <motion.hr variants={item} />
            <motion.p variants={item}>React</motion.p>
            <motion.p variants={item}>Framer</motion.p>
          </div>
          <div className="backend_section">
            <motion.h2 variants={item}>Back End</motion.h2>
            <motion.hr variants={item} />
            <motion.p variants={item}>NEXT</motion.p>
            <motion.p variants={item}>Express</motion.p>
          </div>
          <div className="tools_section">
            <motion.h2 variants={item}>Tools</motion.h2>
            <motion.hr variants={item} />
            <motion.p variants={item}>HTML</motion.p>
            <motion.p variants={item}>CSS</motion.p>
            <motion.p variants={item}>JavaScript</motion.p>
            <motion.p variants={item}>SASS</motion.p>
            <motion.p variants={item}>Tailwind</motion.p>
            <motion.p variants={item}>Python</motion.p>
            <motion.p variants={item}>Flask</motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
