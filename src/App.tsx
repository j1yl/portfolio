import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App font-poppins bg-zinc-100 md:px-2">
      <Header />
      <Hero />
      <Skills />
      <Works />
      <Contact />
      <Cursor />
    </div>
  );
}

function Cursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  });

  const variants = {
    default: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
    },
    click: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      scale: 0.9,
    },
  };

  return (
    <motion.div
      variants={variants}
      animate="default"
      className="h-16 w-16 rounded-full fixed top-0 left-0 z-100 pointer-events-none border-2 border-zinc-900"
    />
  );
}

export default App;
