import React from "react";

type Props = {
  text: string;
};

const Badge = (props: Props) => {
  const { text } = props;

  return (
    <span className="px-2 py-1 ring-2 ring-gray-700 rounded-lg text-sm">
      {text}
    </span>
  );
};

export default Badge;
