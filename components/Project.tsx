import React from "react";
import Link from "next/link";

const Project = (text: string, url: string) => {
  return (
    <>
      <Link href={url}>{text.toUpperCase()}</Link>
    </>
  );
};

export default Project;
