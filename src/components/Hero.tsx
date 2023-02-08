import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { motion } from "framer-motion";
import { resume } from "../../public/config";
import HeroText from "../components/HeroText";
import HeroDescriptionText from "./HeroDescriptionText";
import HeroButton from "./HeroButton";

const Hero = () => {
  return (
    <>
      <div className="flex w-full items-center justify-between md:max-w-6xl">
        <div className="flex h-max w-full flex-col gap-4">
          <div className="flex flex-col gap-4">
            <p className="font-mono text-[#9fc0ff]">{"<h1>"}</p>
            <div>
              <HeroText text={"Hello! I'm Joe Lee,"} />
              <HeroText text={"Software Engineer"} />
            </div>
            <p className="font-mono text-[#c89dff]">{"</h1>"}</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-mono text-[#ffcc9d]">{"<p>"}</p>

            <HeroDescriptionText
              text={
                "I am passionate and dedicated to elevating your web experience. Currently pursuing my undergraduate degree in Computer Science @ CSUF."
              }
            />
            <p className="font-mono text-[#ff9d9d]">{"</p>"}</p>
          </div>
          <HeroButton text={"Let's Connect"} to={"contact"} />
        </div>
        <div className="hidden w-full flex-col items-center font-itim md:flex">
          <motion.button
            initial={{
              translateX: -50,
            }}
            whileHover={{
              scale: 1.1,
            }}
            transition={{ duration: 0.3 }}
            animate={{
              rotate: 360,
            }}
            className={`flex h-[200px] w-[200px] flex-col items-center justify-center rounded-full bg-[#FF9D9D] text-left text-3xl`}
          >
            <ScrollLink to="about" smooth={true} duration={500}>
              <p>
                ABOUT
                <br />
                ME
              </p>
            </ScrollLink>
          </motion.button>
          <motion.button
            initial={{
              translateX: 150,
            }}
            whileHover={{
              scale: 1.1,
            }}
            transition={{ duration: 0.3 }}
            animate={{
              rotate: 360,
            }}
            className={`flex h-[200px] w-[200px] flex-col items-center justify-center rounded-full bg-[#C89DFF] text-left text-3xl`}
          >
            <ScrollLink to="works" smooth={true} duration={500}>
              <p>
                PROJECT
                <br />
                CATALOG
              </p>
            </ScrollLink>
          </motion.button>
          <motion.button
            initial={{
              translateX: -50,
            }}
            whileHover={{
              scale: 1.1,
            }}
            transition={{ duration: 0.3 }}
            animate={{
              rotate: 360,
            }}
            className={`flex h-[200px] w-[200px] flex-col items-center justify-center rounded-full bg-[#FFCC9D] text-left text-3xl`}
          >
            <Link href={resume} target="_blank" rel="noreferrer">
              <p>
                TECH
                <br />
                RESUME
              </p>
            </Link>
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default Hero;
