import clsx from "clsx";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Panel({ children, className }: Props) {
  return (
    <div className={clsx("p-4 border border-white w-full h-max", className)}>
      {children}
    </div>
  );
}
