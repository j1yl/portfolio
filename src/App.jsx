import "./App.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "./comps/Header";
import Hero from "./comps/Hero";
import About from "./comps/About";
import Works from "./comps/Works";
import Footer from "./comps/Footer";

function App() {
  return (
    <div className="App">
      <Cursor />
      <Header />
      <Hero />
      <About />
      <Works />
      <Footer />
    </div>
  );
}

function Cursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
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
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
    },
  };

  return (
    <motion.div variants={variants} animate="default" className="cursor" />
  );
}

export default App;
