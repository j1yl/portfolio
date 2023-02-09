import { motion } from "framer-motion";
import HeroDescriptionText from "./HeroDescriptionText";
import HeroText from "./HeroText";

const variants = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20,
      delay: 1.5,
      duration: 0.8,
    },
  },
};

const About = () => {
  return (
    <section
      className="fullpage w-full p-4 text-primary_dark dark:text-primary_white md:mx-auto md:max-w-6xl"
      id="about"
    >
      <div className="flex h-max w-full flex-col items-start justify-between gap-8 md:flex-row">
        <div className="flex flex-col gap-4">
          <HeroText text={"Who Am I ?"} />
          <HeroDescriptionText
            text={
              "I am a Software Engineer located in Los Angeles, CA. I have a passion for building intuitive and beautiful web experiences."
            }
          />
          <HeroDescriptionText
            text={
              "Currently, I'm pursuing my undergraduate degree in Computer Science. I'm a fan of R&B music, some of my favorite artists are The Weeknd and Brent Faiyaz. I occasionally indulge in cooking tasty pasta for my family and friends."
            }
          />
          <HeroDescriptionText
            text={"Open to conversation regarding web development 24/7."}
          />
        </div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="show"
          className="flex w-full flex-col gap-4"
        >
          <HeroText text={"Skills"} />
          <div className="flex w-full flex-col font-roboto_mono text-3xl dark:text-third_white md:text-4xl">
            <div className="flex w-full justify-between">
              <span className="cursor-pointer hover:text-primary_red">
                TYPESCRIPT
              </span>
              <span className="cursor-pointer hover:text-primary_blue">
                PYTHON
              </span>
            </div>
            <div className="flex w-full justify-between">
              <span className="cursor-pointer hover:text-primary_red">C++</span>
              <span className="cursor-pointer hover:text-primary_blue">
                HTML
              </span>
            </div>
            <div className="flex w-full justify-between">
              <span className="cursor-pointer hover:text-primary_red">
                FRAMER MOTION
              </span>
              <span className="cursor-pointer hover:text-primary_blue">
                REACT
              </span>
            </div>
            <div className="flex w-full justify-between">
              <span className="cursor-pointer hover:text-primary_red">
                NEXTJS
              </span>
              <span className="cursor-pointer hover:text-primary_blue">
                SVELTEKIT
              </span>
            </div>
            <div className="flex w-full justify-between">
              <span className="cursor-pointer hover:text-primary_red">
                SUPABASE
              </span>
              <span className="cursor-pointer hover:text-primary_blue">
                PRISMA
              </span>
            </div>
            <div className="flex w-full justify-between">
              <span className="cursor-pointer hover:text-primary_red">
                NODE
              </span>
              <span className="cursor-pointer hover:text-primary_blue">
                MONGODB
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
