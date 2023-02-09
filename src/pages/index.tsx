import { type NextPage } from "next";
import Head from "next/head";
import { useRef, useState } from "react";

import useMouse from "@react-hook/mouse-position";

import Hero from "../components/Hero";
import About from "../components/About";
import Works from "../components/Works";
import Contact from "../components/Contact";
import Popup from "../components/Popup";

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
      x: mouseXPosition,
      y: mouseYPosition,
      width: 0,
      height: 0,
    },
    active: {
      opacity: 1,
      x: mouseXPosition - 64,
      y: mouseYPosition - 128,
      width: 128,
      height: 128,
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
        <Popup variants={variants} cursorVariant={cursorVariant} />
        <Hero setCursorVariant={setCursorVariant} />
        <About />
        <Works />
        <Contact />
      </div>
    </>
  );
};

export default Home;
