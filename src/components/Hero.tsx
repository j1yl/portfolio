import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { resume } from "../../public/config";

const Hero = () => {
  return (
    <>
      <div className="flex w-full items-center justify-between md:max-w-6xl">
        <div className="flex h-max w-full flex-col gap-6">
          <h1 className=" text-5xl font-bold">
            Hello! I&apos;m Joe Lee,
            <br />
            Software Engineer
          </h1>
          <p>
            I am passionate and dedicated to elevating your web experience.
            <br></br>Currently pursuing my undergraduate degree in Computer
            Science @ <span className="underline">CSUF</span>
          </p>
          <CTAButton text={"Let's Connect"} to="contact" />
        </div>
        <div className="hidden w-full flex-col items-center font-itim md:flex">
          <motion.button
            initial={{
              translateX: -50,
            }}
            whileHover={{
              scale: 1.1,
            }}
            transition={{
              duration: 0.5,
              type: "spring" as any,
              stiffness: "100" as any,
            }}
            animate={{
              rotate: 360,
            }}
            className={`flex h-[200px] w-[200px] flex-col items-center justify-center rounded-full bg-[#FF9D9D] text-left text-3xl`}
          >
            <Link to="about" smooth={true} duration={500}>
              <p>
                ABOUT
                <br />
                ME
              </p>
            </Link>
          </motion.button>
          <motion.button
            initial={{
              translateX: 150,
            }}
            whileHover={{
              scale: 1.1,
            }}
            transition={{
              duration: 0.5,
              type: "spring" as any,
              stiffness: "100" as any,
            }}
            animate={{
              rotate: 360,
            }}
            className={`flex h-[200px] w-[200px] flex-col items-center justify-center rounded-full bg-[#C89DFF] text-left text-3xl`}
          >
            <Link to="works" smooth={true} duration={500}>
              <p>
                PROJECT
                <br />
                CATALOG
              </p>
            </Link>
          </motion.button>
          <motion.button
            initial={{
              translateX: -50,
            }}
            whileHover={{
              scale: 1.1,
            }}
            transition={{
              duration: 0.5,
              type: "spring" as any,
              stiffness: "100" as any,
            }}
            animate={{
              rotate: 360,
            }}
            className={`flex h-[200px] w-[200px] flex-col items-center justify-center rounded-full bg-[#FFCC9D] text-left text-3xl`}
          >
            <a href={resume} target="_blank">
              <p>
                TECH
                <br />
                RESUME
              </p>
            </a>
          </motion.button>
        </div>
      </div>
    </>
  );
};

const CTAButton = ({ text, to }: { text: string; to: string }) => {
  return (
    <motion.button
      whileHover={{
        y: 5,
      }}
      transition={{
        duration: 0.5,
        type: "spring" as any,
        stiffness: "100" as any,
      }}
      className={`mt-2 w-max rounded-2xl bg-[#9FC0FF] p-4 font-semibold`}
    >
      <Link to={to} smooth={true} duration={500}>
        {text}
      </Link>
    </motion.button>
  );
};

export default Hero;
