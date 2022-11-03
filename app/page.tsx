"use client";

import { useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";

export default function Home() {
  const [isStart, setStart] = useState(false);

  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 1000], [35, -35]);
  const rotateY = useTransform(x, [0, 1000], [-35, 35]);

  const handleMouse = (e: any) => {
    x.set(e.pageX);
    y.set(e.pageY);
  };

  return (
    <>
      <AnimatePresence>
        {!isStart && (
          <main
            className="h-screen w-screen flex justify-center items-center"
            onMouseMove={handleMouse}
          >
            <motion.button
              onClick={() => setStart(!isStart)}
              className="w-64 h-64 flex items-center justify-center rounded-full border border-black text-lg select-none"
              initial={{
                opacity: 0,
                x: 100,
              }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 2,
                },
              }}
              style={{
                rotateX: rotateX,
                rotateY: rotateY,
              }}
              whileHover={{
                opacity: 1,
                y: 10,
                transition: {
                  type: "spring",
                  stiffness: 50,
                  bounce: 2,
                  duration: 1,
                },
              }}
              exit={{
                opacity: 0,
              }}
            >
              START
            </motion.button>
          </main>
        )}
      </AnimatePresence>
      {isStart && (
        <>
          <Hero />
        </>
      )}
    </>
  );
}

function Hero() {
  return (
    <main className="h-screen w-screen flex flex-col justify-evenly">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <span className="text-4xl md:text-6xl">WELCOME TO LEFO</span>
          <span className="text-4xl md:text-6xl">I AM JOE LEE</span>
          <span className="text-4xl md:text-6xl">
            CREATIVE FRONT-END DEVELOPER
          </span>
        </div>
        <span className="text-base w-full md:w-2/3">
          I love making immersive websites curated with the latest technology.
          Currently, I am pursuing my undergraduate degree in Computer Science
          at California State University, Fullerton.
        </span>
        <button className="p-8 border border-black rounded-full w-max text-lg">
          LET&apos;S TALK !
        </button>
      </div>
      <div className="flex flex-col">
        <span className="text-6xl">
          COMMITTED TO CRAFTING MEMORABLE USER EXPERIENCES
        </span>
        <span>
          Inspired by the best, I create interactive user interfaces while
          following SEO best practices, optimizing for performance, and
          implementing responsive design.
        </span>
      </div>
    </main>
  );
}
