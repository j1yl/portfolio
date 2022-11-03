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
                opacity: 0.3,
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
              onHoverEnd={() => {}}
              onHoverStart={() => {}}
              exit={{ opacity: 0 }}
            >
              Start
            </motion.button>
          </main>
        )}
        {isStart && (
          <>
            <Hero />
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  return (
    <main className="h-screen w-screen flex flex-col justify-center">
      <div>
        <div>Welcome to my space</div>
        <div>I am Joe Lee, Creative Front-End Developer</div>
        <div>I love making immersive websites using the latest technology.</div>
        <div>
          Currently, I am{" "}
          <span>
            pursuing my undergraduate degree at California State University,
            Fullerton.
          </span>
        </div>
        <button>Let&apos;s Talk !</button>
      </div>
      <div className="flex flex-col">
        <span>Committed to Crafting Memorable User Experiences</span>
        <span>
          I take inspiration from anything visible to me and give it life on the
          web.
        </span>
      </div>
    </main>
  );
}
