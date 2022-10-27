import AnimateWord from "./AnimateWord";
import AnimateCharacter from "./AnimateCharacter";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      <section className="h-screen px-4 md:px-0 max-w-6xl items-center mx-auto">
        <div className="h-1/2 w-full flex flex-col text-zinc-900">
          <h2 className="pt-32 pb-8 font-medium text-4xl md:text-6xl">
            <AnimateCharacter text="SKILLS" delay={0} />
          </h2>
          <div className="flex flex-row w-full justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  delay: 0.5,
                },
              }}
              className="w-1/2 text-xl md:text-3xl"
            >
              <p>HTML</p>
              <p>CSS</p>
              <p>JAVASCRIPT</p>
              <p>TYPESCRIPT</p>
              <p>PYTHON</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  delay: 0.5,
                },
              }}
              className="w-1/2 text-xl md:text-3xl"
            >
              <p>REACT</p>
              <p>FRAMER</p>
              <p>NEXT</p>
              <p>EXPRESS</p>
              <p>NODE</p>
            </motion.div>
          </div>
        </div>
        <div className="h-1/2 w-full flex">
          <div className="w-1/2">
            <h2 className="pt-16 pb-8 font-medium text-4xl md:text-6xl">
              <AnimateCharacter text="EXTRAS" delay={0} />
            </h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  delay: 0.5,
                },
              }}
              className="flex flex-col text-left text-xl md:text-3xl"
            >
              <p>GIT VERSION CONTROL</p>
              <p>DEVELOPMENT PRINCIPLES</p>
              <p>FIGMA</p>
              <p>STACKOVERFLOW</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
