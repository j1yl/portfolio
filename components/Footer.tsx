import Link from "next/link";
import React from "react";
import { UilGithubAlt } from "@iconscout/react-unicons";
import { UilLinkedinAlt } from "@iconscout/react-unicons";

const iconColor = "#E0E7E9";

const Footer = () => {
  return (
    <>
      <footer className="max-w-6xl mx-auto px-2 md:px-8 h-[8vh] w-full md:flex hidden gap-5 items-center justify-end bottom-0">
        <Link href={"https://github.com/j1yl"}>
          <UilGithubAlt size={"25"} color={iconColor} />
        </Link>
        <Link href={"https://www.linkedin.com/in/joe-lee-01679524b/"}>
          <UilLinkedinAlt size={"25"} color={iconColor} />
        </Link>
      </footer>
    </>
  );
};

export default Footer;
