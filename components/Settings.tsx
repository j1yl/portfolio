"use client";

import React from "react";
import { useTheme } from "next-themes";

type Props = {
  noise: boolean | null;
  setNoise: (noise: boolean) => void;
};

const Settings = (props: Props) => {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme, theme, setTheme } = useTheme();

  React.useEffect(() => {
    setTheme("system");
    setMounted(true);
  }, [setTheme, setMounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex gap-2 flex-col">
      <h2>
        <strong>preferences</strong>
      </h2>
      <ul>
        <li className="flex gap-2 items-center">
          <span>bg noise {"->"}</span>
          <button
            type="button"
            onClick={() => {
              props.setNoise(true);
            }}
            className="w-max uppercase underline hover:no-underline"
          >
            <span className={`${props.noise ? "font-bold" : ""}`}>yes</span>
          </button>
          <button
            type="button"
            onClick={() => {
              props.setNoise(false);
            }}
            className="w-max uppercase underline hover:no-underline"
          >
            <span className={`${!props.noise ? "font-bold" : ""}`}>no</span>
          </button>
        </li>
        <li className="flex gap-2 items-center">
          <span>theme {"->"}</span>
          <button
            type="button"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="w-max uppercase underline hover:no-underline"
          >
            <span className={`${resolvedTheme === "dark" ? "font-bold" : ""}`}>
              dark
            </span>
          </button>
          <button
            type="button"
            onClick={() => setTheme("light")}
            className="w-max uppercase underline hover:no-underline"
          >
            <span className={`${resolvedTheme === "light" ? "font-bold" : ""}`}>
              light
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Settings;
