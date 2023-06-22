"use client";

import React from "react";
import { content } from "@/server/content";
import { motion, useScroll } from "framer-motion";

const Experience = () => {
  const { scrollYProgress } = useScroll();

  return (
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
  );
};

export default Experience;
