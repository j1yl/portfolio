"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { config } from "../../config";

import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";

export default function Page() {
  const [currentSectionInView, setCurrentSectionInView] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      let currentSection = "";

      sections.forEach((s) => {
        const sectionTop = s.offsetTop - 128;
        const sectionBottom = sectionTop + s.offsetHeight;

        if (
          (scrollPosition >= sectionTop && scrollPosition < sectionBottom) ||
          (scrollPosition + windowHeight >= documentHeight &&
            s === sections[sections.length - 1])
        ) {
          currentSection = s.id;
        }
      });

      setCurrentSectionInView(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="flex max-w-6xl justify-evenly min-h-screen md:flex-row flex-col mx-auto md:px-0 px-8">
      <aside className="w-full md:sticky md:top-0 max-h-screen flex gap-8 md:gap-0 flex-col justify-between py-16">
        <div>
          <h1 className="h1 mb-2">Joe Lee</h1>
          <h2 className="h2 mb-4">CS @ Cal State Fullerton</h2>
          <p className="body">
            I engineer accessible and efficient web solutions for diverse needs.
          </p>
          <nav className="md:flex flex-col gap-4 hidden mt-16">
            <a
              href="#about"
              className="flex gap-2 items-center w-full group cursor-pointer"
            >
              <span
                className={`w-50 group-hover:w-[100px] group-hover:bg-primary transition-all ease-in-out duration-300 h-[1px] bg-secondary ${
                  currentSectionInView === "about"
                    ? "w-[100px] bg-primary"
                    : "w-[50px] bg-secondary"
                }`}
                aria-hidden={true}
              />
              <span
                className={`h3 group-hover:text-primary transition-colors ${
                  currentSectionInView === "about"
                    ? "text-primary"
                    : "text-secondary"
                }`}
              >
                About
              </span>
            </a>
            <a
              href="#experience"
              className="flex gap-2 items-center w-full group cursor-pointer"
            >
              <span
                className={`w-50 group-hover:w-[100px] group-hover:bg-primary transition-all ease-in-out duration-300 h-[1px] bg-secondary ${
                  currentSectionInView === "experience"
                    ? "w-[100px] bg-primary"
                    : "w-[50px] bg-secondary"
                }`}
                aria-hidden={true}
              />
              <span
                className={`h3 group-hover:text-primary transition-colors ${
                  currentSectionInView === "experience"
                    ? "text-primary"
                    : "text-secondary"
                }`}
              >
                Experience
              </span>
            </a>
            <a
              href="#projects"
              className="flex gap-2 items-center w-full group cursor-pointer"
            >
              <span
                className={`w-50 group-hover:w-[100px] group-hover:bg-primary transition-all ease-in-out duration-300 h-[1px] bg-secondary ${
                  currentSectionInView === "projects"
                    ? "w-[100px] bg-primary"
                    : "w-[50px] bg-secondary"
                }`}
                aria-hidden={true}
              />
              <span
                className={`h3 group-hover:text-primary transition-colors ${
                  currentSectionInView === "projects"
                    ? "text-primary"
                    : "text-secondary"
                }`}
              >
                Projects
              </span>
            </a>
          </nav>
        </div>
        <div className="flex gap-2">
          {config.socials.map((s, i) => (
            <Link
              href={s.url}
              target="_blank"
              key={i}
              passHref
              role="link"
              aria-label={`open ${s.name}`}
              className="cursor-pointer transition-all ease-in-out duration-200 hover:scale-110"
            >
              <Image
                src={s.icon}
                alt={s.icon.replace("/icon/", "")}
                width={24}
                height={24}
              />
            </Link>
          ))}
        </div>
      </aside>
      <div className="w-full py-16">
        <section
          id="about"
          className="flex gap-4 md:gap-8 flex-col scroll-mt-16"
        >
          <div className="md:hidden sticky top-0 py-4 bg-background bg-opacity-90">
            <h2 className="text-primary uppercase font-semibold text-base">
              About
            </h2>
          </div>
          <p className="body">
            Back in 2018, I decided to take my chances and learn how to code
            custom Discord bots and simple automation scripts. Fascinated by the
            possibilities of{" "}
            <span className="text-primary">software development</span>, I
            dedicated countless hours honing my skills. Nowadays, I spend my
            time creating software for businesses with distinct requirements.
          </p>
          <p className="body">
            By understanding their needs and leveraging my technical expertise,
            I develop{" "}
            <span className="text-primary">tailor-made solutions</span> that{" "}
            <span className="text-primary">streamline operations</span>, enhance
            efficiency, and drive growth.
          </p>
          <p className="body">
            It&apos;s incredibly{" "}
            <span className="text-primary">fulfilling</span> to witness the
            positive impact my creations have on organizations and their users,
            and I continuously strive to{" "}
            <span className="text-primary">push the boundaries</span> of what is
            possible in the world of code.
          </p>
        </section>
        <div className="my-32" />
        <section
          id="experience"
          className="flex gap-4 md:gap-8 flex-col scroll-mt-16"
        >
          <div className="md:hidden sticky top-0 py-4 bg-background bg-opacity-90">
            <h2 className="text-primary uppercase font-semibold text-base">
              Experience
            </h2>
          </div>
          <div className="flex flex-col gap-16">
            {config.exp.map((e, i) => (
              <ExperienceCard
                key={i}
                title={e.title}
                company={e.company}
                date={e.date}
                description={e.description}
                tags={e.tags}
              />
            ))}
          </div>
        </section>
        <div className="my-32" />
        <section
          id="projects"
          className="flex gap-4 md:gap-8 flex-col scroll-mt-16"
        >
          <div className="md:hidden sticky top-0 py-4 bg-background bg-opacity-90">
            <h2 className="text-primary uppercase font-semibold text-base">
              Projects
            </h2>
          </div>
          <div className="flex flex-col gap-16">
            {config.projects.map((p, i) => (
              <ProjectCard
                key={i}
                title={p.title}
                description={p.description}
                tags={p.tags}
                imageUrl={p.image}
                url={p.github}
              />
            ))}
          </div>
        </section>
        <div className="my-32 " />
        <footer className="md:pr-16 px-4">
          <p className="body">
            Built from scratch with{" "}
            <Link
              href="https://nextjs.org/"
              target="_blank"
              className="text-primary hover:text-accent ease-in-out transition-all"
            >
              Next.js
            </Link>
            ,{" "}
            <Link
              href="https://tailwindcss.com/"
              target="_blank"
              className="text-primary hover:text-accent ease-in-out transition-all"
            >
              Tailwind CSS
            </Link>
            , and{" "}
            <Link
              href="https://www.framer.com/motion/"
              target="_blank"
              className="text-primary hover:text-accent ease-in-out transition-all"
            >
              Framer Motion
            </Link>{" "}
            by yours truly.
          </p>
        </footer>
      </div>
    </main>
  );
}
