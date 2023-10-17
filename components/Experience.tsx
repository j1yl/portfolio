import React from "react";
import Badge from "./Badge";
import { exp } from "@/config";

type Props = {};

const Experience = (props: Props) => {
  return (
    <div className="module flex flex-col gap-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 p-4 h-max w-full">
      <div className="flex gap-2 justify-between items-center">
        <h2>
          <strong>experience</strong>
        </h2>
        <Badge text="info" />
      </div>
      <ul>
        {exp.map((_, i) => (
          <li key={i} className="flex items-center justify-between gap-2">
            <span>{_.date}</span>
            <span>
              <strong>{_.title}</strong> {"->"} {_.company}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
