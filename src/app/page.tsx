"use client";

import { content } from "@/server/content";
import Link from "next/link";
import Image from "next/image";
import { Link as ReactScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ExperienceCard from "@/components/ExperienceCard";
import Hyperlink from "@/components/Hyperlink";
import ProjectCard from "@/components/ProjectCard";

const lineVariants = {
  selected: {
    background: "#84C7C1",
    width: "100px",
  },
  unselected: {
    background: "#869F9E",
    width: "50px",
  },
};

const textVariants = {
  selected: {
    color: "#84C7C1",
  },
  unselected: {
    color: "#869F9E",
  },
};

export default function Home() {
  const [currentSection, setCurrentSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;

      let currentSection = "";
      sections.forEach((s) => {
        const sectionTop = s.offsetTop - 100;

        if (scrollPosition >= sectionTop) {
          currentSection = s.id;
        }
      });

      setCurrentSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="flex max-w-screen-xl min-h-screen md:flex-row flex-col mx-auto">
      <aside className="w-full md:sticky md:top-0 md:max-h-screen md:py-16 py-8 flex gap-8 md:gap-0 flex-col justify-between md:pl-16 px-4">
        <div>
          <h1 className="h1 mb-2">Joe Lee</h1>
          <h2 className="h2 mb-4">CS @ Cal State Fullerton</h2>
          <p className="body md:w-1/2">
            I engineer accessible and efficient web solutions for diverse needs.
          </p>
          <nav className="md:flex flex-col gap-4 mt-8 hidden">
            <motion.div
              whileHover="selected"
              initial="unselected"
              animate={currentSection === "about" ? "selected" : "unselected"}
              className="cursor-pointer w-max"
            >
              <ReactScrollLink
                to="about"
                smooth={true}
                duration={500}
                offset={-100}
                className="flex gap-2 items-center"
              >
                <motion.span
                  className="w-[50px] h-[1px]"
                  variants={lineVariants}
                  aria-hidden={true}
                />
                <motion.span className="h3" variants={textVariants}>
                  About
                </motion.span>
              </ReactScrollLink>
            </motion.div>
            <motion.div
              whileHover="selected"
              initial="unselected"
              animate={
                currentSection === "experience" ? "selected" : "unselected"
              }
              className="cursor-pointer w-max"
            >
              <ReactScrollLink
                to="experience"
                smooth={true}
                duration={500}
                offset={-75}
                className="flex gap-2 items-center"
              >
                <motion.span
                  className="w-[50px] h-[1px]"
                  variants={lineVariants}
                  aria-hidden={true}
                />
                <motion.span className="h3" variants={textVariants}>
                  Experience
                </motion.span>
              </ReactScrollLink>
            </motion.div>
            <motion.div
              whileHover="selected"
              initial="unselected"
              animate={
                currentSection === "projects" ? "selected" : "unselected"
              }
              className="cursor-pointer w-max"
            >
              <ReactScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className="flex gap-2 items-center"
              >
                <motion.span
                  className="w-[50px] h-[1px]"
                  variants={lineVariants}
                  aria-hidden={true}
                />
                <motion.span className="h3" variants={textVariants}>
                  Projects
                </motion.span>
              </ReactScrollLink>
            </motion.div>
          </nav>
        </div>
        <div className="flex gap-2">
          {content.socials.map((s, i) => (
            <Link href={s.url} passHref key={i}>
              <Image
                src={s.icon}
                alt={s.icon.replace("/icon/", "")}
                className="hover:scale-110 transition-all ease-in-out cursor-pointer"
                width={24}
                height={24}
              />
            </Link>
          ))}
        </div>
      </aside>
      <div className="w-full md:my-16 my-8">
        <motion.section id="about" className="md:pr-16 px-4">
          <div className="flex gap-4 md:gap-8 flex-col">
            <div className="md:hidden sticky top-0 py-4 bg-background bg-opacity-90">
              <h2 className="text-primary uppercase font-semibold text-base">
                About
              </h2>
            </div>
            <p className="body">
              Back in 2018, I decided to take my chances and learn how to code
              custom Discord bots and simple automation scripts. Fascinated by
              the possibilities of{" "}
              <span className="text-primary">software development</span>, I
              dedicated countless hours honing my skills. Nowadays, I spend my
              time creating software for businesses with distinct requirements.
            </p>
            <p className="body">
              By understanding their needs and leveraging my technical
              expertise, I develop{" "}
              <span className="text-primary">tailor-made solutions</span> that{" "}
              <span className="text-primary">streamline operations</span>,
              enhance efficiency, and drive growth.
            </p>
            <p className="body">
              It&apos;s incredibly{" "}
              <span className="text-primary">fulfilling</span> to witness the
              positive impact my creations have on organizations and their
              users, and I continuously strive to{" "}
              <span className="text-primary">push the boundaries</span> of what
              is possible in the world of code.
            </p>
          </div>
        </motion.section>
        <div className="py-16" />
        <motion.section id="experience" className="md:pr-16 px-4">
          <div className="flex flex-col">
            <div className="md:hidden sticky top-0 py-4 bg-background bg-opacity-90">
              <h2 className="text-primary uppercase font-semibold text-base">
                Experience
              </h2>
            </div>
            <div className="flex flex-col gap-16">
              {content.exp.map((e, i) => (
                <ExperienceCard
                  key={i}
                  title={e.title}
                  company={e.company}
                  date={e.date}
                  description={e.description}
                  tags={e.tags}
                />
              ))}
              <Hyperlink
                url="https://drive.google.com/file/d/1lMDA1IGhZ-4Kb60I1ig7mxH9ATtsdUb5/view?usp=drive_link"
                text="View Full Resume"
                newTab={true}
              />
            </div>
          </div>
        </motion.section>
        <div className="py-16" />
        <motion.section id="projects" className="md:pr-16 px-4">
          <div className="md:hidden sticky top-0 py-4 bg-background bg-opacity-90">
            <h2 className="text-primary uppercase font-semibold text-base">
              Projects
            </h2>
          </div>
          <div className="flex flex-col gap-16">
            {content.projects
              .filter((p) => {
                return p.id < 3;
              })
              .map((p, i) => (
                <ProjectCard
                  key={i}
                  title={p.title}
                  description={p.description}
                  tags={p.tags}
                  imageUrl={p.image}
                  url={p.github}
                />
              ))}
            <Hyperlink
              url="/projects"
              text="View All Projects"
              newTab={false}
            />
          </div>
        </motion.section>
        <div className="md:py-16 py-8" />
        <motion.section id="footer" className="md:pr-16 px-4">
          <p className="body">
            Built from scratch with{" "}
            <Link
              href="https://nextjs.org/"
              className="text-primary hover:text-accent ease-in-out transition-all"
            >
              Next.js
            </Link>
            ,{" "}
            <Link
              href="https://tailwindcss.com/"
              className="text-primary hover:text-accent ease-in-out transition-all"
            >
              Tailwind CSS
            </Link>
            , and{" "}
            <Link
              href="https://www.framer.com/motion/"
              className="text-primary hover:text-accent ease-in-out transition-all"
            >
              Framer Motion
            </Link>{" "}
            by yours truly.
          </p>
        </motion.section>
      </div>
    </main>
  );
}
