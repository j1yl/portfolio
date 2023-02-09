import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../../public/config";
import HeroText from "./HeroText";

const variants = {
  animate: {
    x: [0, -200],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
};

const Works = () => {
  return (
    <section
      className="fullpage mx-auto w-full max-w-6xl p-4 font-semibold  text-primary_dark dark:text-primary_white"
      id="works"
    >
      <div className="flex w-full flex-col gap-4">
        <HeroText text={"My Projects"} />
        <div className="relative flex w-full max-w-6xl flex-col gap-2 overflow-x-hidden overflow-y-clip">
          {projects.map((proj) => (
            <Marquee
              text={proj.title.toUpperCase()}
              id={proj.id}
              key={proj.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Marquee = ({ text, id }: { text: string; id: string }) => {
  return (
    <motion.div
      variants={variants}
      whileHover="animate"
      className="static whitespace-nowrap text-4xl dark:text-third_white md:text-8xl"
    >
      <Link href={`/works/${id}`}>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </Link>
    </motion.div>
  );
};

export default Works;
