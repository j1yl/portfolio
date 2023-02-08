import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { resume } from "../../public/config";
import HeroText from "../components/HeroText";
import HeroDescriptionText from "./HeroDescriptionText";
import HeroButton from "./HeroButton";

const Hero = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="flex w-full items-center justify-between md:max-w-6xl">
        <div className="flex h-max w-full flex-col gap-4">
          <div className="flex flex-col gap-4">
            <p className="htmltag text-[#7eabff] dark:text-[#9fc0ff]">
              {"<h1>"}
            </p>
            <div>
              <HeroText text={"Hello! I'm Joe Lee,"} />
              <HeroText text={"Software Engineer"} />
            </div>
            <p className="htmltag text-[#b378ff] dark:text-[#c89dff]">
              {"</h1>"}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="htmltag text-[#ffb26a] dark:text-[#ffcc9d]">
              {"<p>"}
            </p>

            <HeroDescriptionText
              text={
                "I am passionate and dedicated to elevating your web experience. Currently pursuing my undergraduate degree in Computer Science @ CSUF."
              }
            />
            <p className="htmltag text-[#ff6f6f] dark:text-[#ff9d9d]">
              {"</p>"}
            </p>
          </div>
          <HeroButton text={"Let's Connect"} to={"contact"} />
        </div>
        <div className="hidden w-full flex-col items-center font-itim md:flex">
          <button
            className={` z-0 flex h-[200px] w-[200px] translate-x-[-100px] flex-col items-center justify-center rounded-full bg-[#FF9D9D] text-left text-3xl transition-all hover:scale-110`}
          >
            <ScrollLink to="about" smooth={true} duration={500}>
              <p>
                ABOUT
                <br />
                ME
              </p>
            </ScrollLink>
          </button>
          <button
            className={`z-0 flex h-[200px] w-[200px] translate-x-[100px] flex-col items-center justify-center rounded-full bg-[#C89DFF] text-left text-3xl transition-all hover:scale-110`}
          >
            <ScrollLink to="works" smooth={true} duration={500}>
              <p>
                PROJECT
                <br />
                CATALOG
              </p>
            </ScrollLink>
          </button>
          <button
            className={`z-0 flex h-[200px] w-[200px] translate-x-[-100px] flex-col items-center justify-center rounded-full bg-[#FFCC9D] text-left text-3xl transition-all hover:scale-110`}
          >
            <Link href={resume} target="_blank" rel="noreferrer">
              <p>
                TECH
                <br />
                RESUME
              </p>
            </Link>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
