import { motion } from "framer-motion";
import Link from "next/link";
import { type Dispatch, type SetStateAction, useRef, useState } from "react";
import { resume } from "../../public/config";

const Terminal = ({
  setCursorVariant,
}: {
  setCursorVariant: Dispatch<SetStateAction<string>>;
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState("");
  const [command, setCommand] = useState("clear");

  return (
    <div
      onMouseEnter={() => setCursorVariant("term")}
      onMouseLeave={() => setCursorVariant("default")}
      className="flex h-[250px] w-2/3 flex-col items-start rounded-xl border-2 border-primary_dark font-roboto_mono text-primary_dark dark:border-primary_white dark:text-primary_white"
    >
      <div className="flex w-full items-center p-4">
        <p className="mr-2">$</p>
        <div className="flex w-full items-center">
          <input
            ref={ref}
            className="flex w-full bg-primary_white focus:outline-none dark:bg-primary_dark"
            type="text"
            name="cmd"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setCommand(input);
                if (ref.current != null) {
                  ref.current.value = "";
                }
              }
            }}
          />
        </div>
      </div>
      <div className="relative flex h-full w-full items-start">
        {command === "resume" && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              damping: 50,
              stiffness: 200,
              duration: 0.5,
            }}
            className="flex h-max w-max overflow-hidden p-4 text-blue-500"
          >
            <Link href={resume} rel="noreferrer" target="_blank">
              open resume
            </Link>
          </motion.div>
        )}
        {command === "favfoods" && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              damping: 50,
              stiffness: 200,
              duration: 0.5,
            }}
            className="flex flex-col p-4"
          >
            <p>tomato basil pasta</p>
            <p>carbonara</p>
            <p>medium rare ribeye</p>
            <p>wagyu hotpot</p>
            <p>lobster ravioli</p>
            <p>hamachi</p>
          </motion.div>
        )}
        {command === "favsongs" && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              damping: 50,
              stiffness: 200,
              duration: 0.5,
            }}
            className="flex flex-col p-4"
          >
            <p>Shameless - The Weeknd</p>
            <p>Reminder - The Weeknd</p>
            <p>Pink + White - Frank Ocean</p>
            <p>One More - southernwade</p>
            <p>The Color Violet - Tory Lanez</p>
          </motion.div>
        )}
        {command === "clear" && <></>}
        {command != "clear" &&
          command != "favsongs" &&
          command != "favfoods" &&
          command != "resume" && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                type: "spring",
                damping: 50,
                stiffness: 200,
                duration: 0.5,
              }}
              className="flex flex-col p-4"
            >
              <p>invalid command</p>
            </motion.div>
          )}
      </div>
    </div>
  );
};

export default Terminal;
