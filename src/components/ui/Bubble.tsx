import Link from "next/link";
import React from "react";

type Props = {
  text: string;
  url: string;
  newTab?: boolean;
};

const Bubble = (props: Props) => {
  const { text, url } = props;

  if (url === "")
    return (
      <div className="w-max py-1 px-2 md:mx-1 bg-gray-500 transition-all duration-150 cursor-not-allowed rounded-lg">
        {text}
      </div>
    );

  return (
    <Link
      href={url}
      target={props.newTab ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="w-max py-1 px-2 md:mx-1 bg-gray-300 hover:bg-gray-400 transition-all duration-150 cursor-pointer rounded-lg"
    >
      {text}
    </Link>
  );
};

export default Bubble;
