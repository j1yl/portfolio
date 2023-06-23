"use client";

import CTAButton from "@/components/CTAButton";
import Divider from "@/components/Divider";
import Profile from "@/components/Profile";
import { content } from "@/server/content";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <main className="container">
        <div className="flex flex-col gap-4">
          <Profile titles={content.titles} />
          <span className="w-full h-[1px] bg-primary mb-8" />
          <div className="flex flex-col gap-4 w-full">
            <h1 className="heading">Unlocking the Power of the Web</h1>
            <p className="body">
              Passionate about code and numbers, I&apos;m a highly motivated
              Computer Science student with a dash of mathematical prowess.
              Currently pursuing a Bachelor&apos;s degree in Computer Science
              with a minor in Mathematics at California State University,
              Fullerton, I&apos;m on a mission to bring innovative web solutions
              to life.
            </p>
            <div className="flex gap-4 items-center">
              <CTAButton url="mailto:webverry@gmail.com" text="Contact Me" />
              <CTAButton
                url="https://drive.google.com/file/d/1lMDA1IGhZ-4Kb60I1ig7mxH9ATtsdUb5/view?usp=sharing"
                text="View Resume"
              />
            </div>
          </div>
        </div>
      </main>
      <Divider />
      <section className="container">
        <div className="flex flex-col gap-4 w-full">
          <h2 className="subheading">My Journey</h2>
          <div className="flex gap-4">
            <motion.span
              style={{
                scaleY: scrollYProgress,
                transformOrigin: "top",
              }}
              className="w-[4px] bg-primary"
            />
            <div className="flex flex-col gap-8 md:gap-4">
              {content.exp.map((e, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row md:items-center gap-4 md:h-[100px]"
                >
                  <div className="flex gap-2 items-center md:w-1/3">
                    <div className="flex flex-col gap-2">
                      <h2 className="font-bold">{e.title}</h2>
                      <p className="body">{e.company}</p>
                      <p className="body">{e.date}</p>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="body">{e.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Divider />
      <section className="container">
        <div className="flex flex-col gap-4 w-full">
          <h2 className="subheading">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {content.projects
              .filter((p) => p.featured)
              .map((p, i) => (
                <Link
                  href={`/projects/${p.id}`}
                  passHref
                  key={i}
                  className="flex items-center justify-center relative aspect-square border border-primary hover:bg-primary hover:bg-opacity-10 transition-all ease-in-out duration-250"
                >
                  <h3 className="subheading">{p.title}</h3>
                </Link>
              ))}
            <div className="grid grid-cols-2">
              {content.projects
                .filter((p) => !p.featured)
                .splice(0, 3)
                .map((p, i) => (
                  <Link
                    key={i}
                    passHref
                    href={`/projects/${p.id}`}
                    className="flex items-center justify-center aspect-square border border-primary hover:bg-primary hover:bg-opacity-10 transition-all ease-in-out duration-250 cursor-pointer"
                  >
                    <h3 className="font-bold">{p.title}</h3>
                  </Link>
                ))}
              <Link
                passHref
                href="/projects"
                className="flex items-center justify-center aspect-square border border-primary hover:bg-primary hover:bg-opacity-10 transition-all ease-in-out duration-250 cursor-pointer"
              >
                <h3 className="font-bold">View Catalog</h3>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Divider />
      <section className="container">
        <div className="flex flex-col gap-4 w-full">
          <h2 className="subheading">Contact Me</h2>
          <p className="body">
            Send me an email at{" "}
            <Link
              className="underline"
              href="mailto:webverry@gmail.com"
              target="_blank"
            >
              webverry@gmail.com
            </Link>
            . Let&apos;s connect and make something great!
          </p>
        </div>
      </section>
      <Divider />
    </>
  );
}
