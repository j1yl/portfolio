import { type NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { useRef, useState } from "react";

import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";

import Hero from "../components/Hero";
import About from "../components/About";
import Works from "../components/Works";
import Contact from "../components/Contact";

const Home: NextPage = () => {
  const ref = useRef(null);
  const [cursorVariant, setCursorVariant] = useState("default");

  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
    fps: 60,
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX as number;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY as number;
  }

  const variants = {
    default: {
      opacity: 0,
      background: "#000000",
      x: mouseXPosition,
      y: mouseYPosition,
    },
    1: {
      opacity: 1,
      background: "#FF5353",
      x: mouseXPosition,
      y: mouseYPosition,
    },
    2: {
      opacity: 1,
      background: "#7635FF",
      x: mouseXPosition,
      y: mouseYPosition,
    },
    3: {
      opacity: 1,
      background: "#70CBFF",
      x: mouseXPosition,
      y: mouseYPosition,
    },
  };

  return (
    <>
      <Head>
        <title>lefo.dev</title>
        <meta
          name="description"
          content="Personal website for Joe Lee, student at California State University, Fullerton."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div ref={ref}>
        <Hero setCursorVariant={setCursorVariant} />
        <About />
        <Works />
        <Contact />
      </div>
    </>
  );
};

export default Home;
