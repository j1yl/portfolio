import React from "react";
import Project from "../../components/Project";

const page = () => {
  return (
    <section className="h-[84vh] max-w-6xl mx-auto flex flex-col justify-evenly px-2 md:px-8">
      <h1 className="text-[1.5rem] md:text-[3rem] font-bold text-second">
        FEATURED PROJECTS
      </h1>
      <Project text="LEFODEV" url="/works/1" />
      <Project text="SHRINKURL" url="/works/2" />
      <Project text="IASSEMBLE ANYTHING" url="/works/3" />
      <Project text="FAIRVIEW VENTURES" url="/works/4" />
      <Project text="HEAVENSENT" url="/works/5" />
      <Project text="SPOTLYZER" url="/works/6" />
      <h2 className="text-[1.5rem] md:text-[3rem] font-bold text-second">
        VIEW MORE ON GITHUB
      </h2>
    </section>
  );
};

export default page;
