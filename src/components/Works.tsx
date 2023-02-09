import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../../public/config";

const variants = {
  animate: {
    x: [2000, -2000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 25,
        ease: "linear",
      },
    },
  },
};

const Works = () => {
  return (
    <section className="fullpage w-full max-w-6xl p-2" id="works"></section>
  );
};

export default Works;
