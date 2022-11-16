import React from "react";

const page = () => {
  return (
    <>
      <section className="flex flex-col max-w-6xl w-full mx-auto md:px-8 px-2 h-[84vh] justify-center gap-10">
        <div>
          <h2 className="text-3xl md:text-[2rem] font-bold text-second">
            ABOUT
          </h2>
          <p className="text-base w-2/3 text-light">
            Hi! I&apos;m Joe and I have a passion for designing and developing
            websites, specifically the creation of interactivity and working
            with animations. I love creating websites from scratch using
            industry standard methods such as React and Typescript. As such,
            each one of my websites is crafted with attention to detail. At{" "}
            <span className="underline">
              California State University, Fullerton
            </span>
            , I actively partcipate in the development and maintainance of
            acmCSUF&apos;s website. acmCSUF is the largest Computer Science
            community on campus.
          </p>
        </div>
        <div>
          <h2 className="text-3xl md:text-[2rem] font-bold text-second">
            SKILLS
          </h2>
          <p className="text-base w-2/3 text-light">
            HTML, CSS (SASS, TAILWINDCSS), JAVASCRIPT, TYPESCRIPT, REACTJS,
            NEXTJS, THREEJS, FRAMER MOTION, NODE, EXPRESS, PYTHON, FLASK, DJANGO
          </p>
        </div>
        <div>
          <h2 className="text-3xl md:text-[2rem] font-bold text-second">
            EXTRAS
          </h2>
          <p className="text-base w-2/3 text-light">
            GIT VERSION CONTROL, FIGMA, PENPOT, UI/UX, STACKOVERFLOW
          </p>
        </div>
      </section>
    </>
  );
};

export default page;
