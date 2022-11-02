import { motion } from "framer-motion";
import { Link } from "react-scroll";
import AnimateWord from "./AnimateWord";
import AnimateCharacter from "./AnimateCharacter";

const Hero = () => {
  return (
    <>
      <main
        className="h-screen flex flex-col px-4 pt-16 md:pt-0 md:px-0"
        id="main"
      >
        <section className="flex flex-col md:flex-row max-w-6xl h-max mx-auto">
          <div className="flex flex-col gap-5 md:w-1/2 text-left justify-end md:justify-start md:mt-32">
            <h2 className="text-6xl md:text-8xl font-bold text-zinc-900">
              <AnimateCharacter text="JOE LEE" delay={0} />
            </h2>
            <div className="text-zinc-500 flex flex-wrap">
              <AnimateWord
                text="I design and develop websites using cutting edge technology. I am pursuing my undergraduate degree in Computer Science at California State University, Fullerton. I love trying new technologies and implementing them in creative ways."
                delay={0.5}
                stagger={0.1}
              />
            </div>
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  delay: 1,
                  duration: 1,
                },
              }}
              whileHover={{ scale: 1.1 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              whileTap={{ scale: 1 }}
              onTapStart={(e) => {}}
              onTapCancel={(e) => {}}
              className="text-left text-xl md:text-2xl px-16 py-6 md:px-24 md:py-12 w-max bg-zinc-900 rounded-3xl text-zinc-100"
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                LET&apos;S TALK
              </Link>
            </motion.button>
          </div>
          <div className="flex flex-col md:w-1/2 text-right justify-end pt-4 md:pt-0">
            <h2 className="text-zinc-900 text-3xl md:text-6xl font-semibold flex justify-end">
              <AnimateCharacter text="FRONT-END" delay={1} />
            </h2>
            <h2 className="text-zinc-900 text-3xl md:text-6xl font-semibold flex justify-end">
              <AnimateCharacter text="DEVELOPER" delay={1} />
            </h2>
          </div>
        </section>
        <section className="flex max-w-6xl mx-auto flex-col h-full justify-center gap-5">
          <h2 className="text-2xl md:text-4xl font-semibold text-zinc-900">
            <AnimateWord
              text="COMMITED TO CRAFTING MEMORABLE USER EXPERIENCES"
              delay={1.5}
              stagger={1}
            />
          </h2>
          <div className="text-zinc-500">
            <AnimateWord
              text="I take inspiration from anything I can see and give it life on the web. Following best practices and optimizing loading times, I assure users with a pleasant experience."
              delay={2}
              stagger={0.1}
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Hero;
