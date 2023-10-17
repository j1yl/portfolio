import React from "react";
import Badge from "@/components/Badge";
import { motd } from "@/config";

type Props = {};

const MOTD = (props: Props) => {
  return (
    <div className="module flex flex-col gap-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 p-4 h-max w-full">
      <div className="flex gap-2 justify-between items-center">
        <h2>
          <strong>message of the month</strong>
        </h2>
        <Badge
          text={new Date()
            .toDateString()
            .split(" ")
            .filter((_, i) => i % 2)
            .join(" ")}
        />
      </div>
      <p>{motd}</p>
    </div>
  );
};

export default MOTD;
