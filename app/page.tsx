"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [isStart, setStart] = useState(false);

  // useEffect(() => {
  //   let mousePosition = {
  //     x: 0,
  //     y: 0,
  //   };

  //   window.addEventListener("mousemove", (e) => {
  //     mousePosition.x = e.pageX;
  //     mousePosition.y = e.pageY;
  //   });

  //   const lerp = (current: number, target: number, factor: number) => {
  //     return current * (1 - factor) + target * factor;
  //   };

  //   const distance = (x1: number, x2: number, y1: number, y2: number) => {
  //     // calculates the hypotenuse of given triangle, derived from distance formula
  //     return Math.hypot(x1 - x2, y1 - y2);
  //   };
  // });

  return (
    <>
      <main className="h-screen w-screen grid place-content-center">
        <button
          onClick={() => setStart(!isStart)}
          className="w-64 h-64 flex items-center justify-center rounded-full border-2 font-semibold text-2xl border-black select-none"
        >
          START
        </button>
      </main>
    </>
  );
}
