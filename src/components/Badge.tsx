import React from "react";

type Props = {
  text: string;
};

const Badge = (props: Props) => {
  return (
    <div className="px-2 py-1 rounded-full text-xs text-accent bg-secondary bg-opacity-10 w-max">
      {props.text}
    </div>
  );
};

export default Badge;
