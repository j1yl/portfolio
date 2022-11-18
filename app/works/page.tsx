"use client";

import Link from "next/link";
import React from "react";
import { isTemplateExpression } from "typescript";
import { PageWrapper } from "../../components/PageWrapper";
import Project from "../../components/Project";

const projects = [
  { text: "LEFODEV", url: "/works/1" },
  { text: "SHRINKURL", url: "/works/2" },
  { text: "IASSEMBLE ANYTHING", url: "/works/3" },
  { text: "FAIRVIEW VENTURES", url: "/works/4" },
  { text: "HEAVENSENT", url: "/works/5" },
  { text: "SPOTLYZER", url: "/works/6" },
];

const page = () => {
  return (
    <PageWrapper className="overflow-hidden">
      <section className="h-[84vh] max-w-6xl mx-auto flex flex-col justify-evenly px-2 md:px-8">
        <h1 className="text-[1.5rem] md:text-[3rem] font-bold text-second">
          FEATURED PROJECTS
        </h1>
        {projects.map((item, index) => (
          <Project text={item.text} url={item.url} key={index} />
        ))}
        <h2 className="text-[1.5rem] md:text-[3rem] font-bold text-second">
          <Link href={"https://github.com/j1yl"}>VIEW MORE ON GITHUB</Link>
        </h2>
      </section>
    </PageWrapper>
  );
};

export default page;
