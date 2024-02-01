import React from "react";
import Badge from "@/components/Badge";
import { wishlist } from "@/config";

type Props = {};

const Wishlist = (props: Props) => {
  return (
    <div className="module flex flex-col gap-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 p-4 h-max w-full md:w-max">
      <div className="flex gap-2 justify-between items-center">
        <h2>
          <strong>stuff to buy</strong>
        </h2>
        <Badge text="money" />
      </div>
      <ul>
        {wishlist.map((_, i) => (
          <li key={i}>{_}</li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
