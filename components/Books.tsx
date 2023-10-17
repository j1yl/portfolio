import React from "react";
import Badge from "@/components/Badge";
import { books } from "@/config";

type Props = {};

const Books = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 p-4 h-max w-full md:w-max">
      <div className="flex gap-2 justify-between items-center">
        <h2>
          <strong>favorite books</strong>
        </h2>
        <Badge text="reading" />
      </div>
      <ul>
        {books.map((_, i) => (
          <li key={i}>
            <strong>{i}</strong> {_}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
