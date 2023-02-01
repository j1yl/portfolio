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
          <CTAButton text={"Let's Connect"} to="contact" color="9FC0FF" />
        </div>
        <div className="hidden w-full flex-col items-center font-itim md:flex">
          <CircularButton
            color="FF9D9D"
            translateAmt={-50}
            text1="ABOUT"
            text2="ME"
            to="about"
          />
          <CircularButton
            color="C89DFF"
            translateAmt={150}
            text1="PROJECT"
            text2="CATALOG"
            to="works"
          />
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

const CircularButton = ({
  color,
  translateAmt,
  text1,
  text2,
  to,
}: {
  color: string;
  translateAmt: number;
  text1: string;
  text2: string;
  to: string;
}) => {
  return (
    <Link to={to} smooth={true} duration={500}>
      <motion.button
        initial={{
          translateX: translateAmt,
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
        className={`flex h-[200px] w-[200px] flex-col items-center justify-center rounded-full text-left bg-[#${color}] text-3xl`}
      >
        <p>
          {text1}
          <br />
          {text2}
        </p>
      </motion.button>
    </Link>
  );
};

const CTAButton = ({
  text,
  to,
  color,
}: {
  text: string;
  to: string;
  color: string;
}) => {
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
      className="mt-2 w-max"
    >
      <Link
        to={to}
        smooth={true}
        duration={500}
        className={`w-max rounded-2xl bg-[#${color}] p-4 font-semibold`}
      >
        {text}
      </Link>
    </motion.button>
  );
};

export default Hero;
