"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {};

const Cursor = (props: Props) => {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="h-[512px] w-[512px] fixed top-0 left-0 blur-lg z-50 pointer-events-none rounded-full"
      aria-hidden={true}
      style={{
        x: position.x - 256,
        y: position.y - 256,
        background:
          "radial-gradient(50% 50.00% at 50% 50.00%, rgba(134, 159, 158, 0.05) 0%, rgba(132, 199, 193, 0.00) 100%)",
      }}
    ></motion.div>
  );
};

export default Cursor;