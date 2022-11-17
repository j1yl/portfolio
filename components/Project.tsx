import React from "react";
import Link from "next/link";

const Project = ({ text, url }: { text: string; url: string }) => {
  return (
    <>
      <Link
        href={url}
        className="text-[2rem] md:text-[4rem] text-light font-bold leading-none"
      >
        {text}
      </Link>
    </>
  );
};

export default Project;
