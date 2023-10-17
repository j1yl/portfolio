import React from "react";

type Props = {
  text: string;
};

const Badge = (props: Props) => {
  return (
    <div className="px-2 flex items-center justify-center w-max bg-neutral-200 dark:bg-neutral-500/30 dark:text-white rounded-full">
      <span>{props.text}</span>
    </div>
  );
};

export default Badge;
