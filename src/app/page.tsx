"use client";

import Bubble from "@/components/ui/Bubble";
import Socials from "@/components/ui/Socials";
import { socials } from "@/server/content";
import { useState } from "react";

export default function Home() {
  const [glitch, setGlitch] = useState(true);

  return (
    <main className="flex my-16 md:my-48 flex-col items-center justify-between p-4">
      <div className="flex flex-col h-full max-w-4xl gap-8">
        {glitch ? (
          <h1 className="h1 glitch">
            <span aria-hidden={true}>Unlocking the Power of the Web</span>
            Unlocking the Power of the Web
            <span aria-hidden={true}>Unlocking the Power of the Web</span>
          </h1>
        ) : (
          <h1 className="h1">Unlocking the Power of the Web</h1>
        )}
        <p className="p">
          Hi there! My name is Joe Lee, a web developer with experience in
          building responsive, user-friendly websites. Whether you&apos;re
          looking for a simple static site or a complex web application,
          I&apos;m here to bring your vision to life.
        </p>
        <p className="hidden md:flex items-center p">
          View my <Bubble text="Projects" url="/projects" />,
          <Bubble text="Resume" url="/resume" />,
          <Bubble text="Contact Me" url="/contact" />, or send me an email at{" "}
          <Bubble text="lefodev@gmail.com" url="mailto:lefodev@gmail.com" />
        </p>
        <div className="md:hidden flex flex-wrap gap-2 p">
          <Bubble text="Projects" url="/projects" />
          <Bubble text="Resume" url="/resume" />
          <Bubble text="Contact" url="/contact" />
          <Bubble text="lefodev@gmail.com" url="mailto:lefodev@gmail.com" />
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-8 justify-between">
          <div className="flex w-full gap-4">
            {socials.map((s) => (
              <Socials platform={s.platform} url={s.url} key={s.id} />
            ))}
          </div>
          <div className="flex w-full md:justify-end justify-start">
            <label className="relative inline-flex items-center mb-4 cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={() => setGlitch(!glitch)}
                checked={glitch}
              />
              <div className="w-11 h-6 bg-dark-50 rounded-full peer peer-checked:after:translate-x-full after:absolute after:top-0.5 after:left-[2px] after:bg-light-50 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-light-300"></div>
              <span className="ml-3 text-sm text-dark-50 tracking-wide">
                Glitch Effect
              </span>
            </label>
          </div>
        </div>
      </div>
    </main>
  );
}
