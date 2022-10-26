const Skills = () => {
  return (
    <>
      <section className="h-screen px-4 md:px-0 max-w-6xl items-center mx-auto">
        <div className="h-1/2 w-full flex flex-col text-zinc-900">
          <h2 className="pt-32 pb-8 font-medium text-4xl md:text-6xl">
            I AM FAMILIAR WITH
          </h2>
          <div className="flex flex-row w-full justify-between">
            <div className="w-1/2 text-xl md:text-3xl">
              <p>HTML</p>
              <p>CSS</p>
              <p>JAVASCRIPT</p>
              <p>TYPESCRIPT</p>
              <p>PYTHON</p>
            </div>
            <div className="w-1/2 text-xl md:text-3xl">
              <p>REACT</p>
              <p>FRAMER</p>
              <p>NEXT</p>
              <p>EXPRESS</p>
              <p>NODE</p>
            </div>
          </div>
        </div>
        <div className="h-1/2 w-full flex">
          <div className="w-1/2">
            <h2 className="pt-16 pb-8 font-medium text-4xl md:text-6xl">
              EXTRAS
            </h2>
            <div className="flex flex-col text-left text-xl md:text-3xl">
              <p>GIT VERSION CONTROL</p>
              <p>DEVELOPMENT PRINCIPLES</p>
              <p>FIGMA</p>
              <p>STACKOVERFLOW</p>
            </div>
          </div>
          <div className="w-1/2 h-max flex flex-col mx-auto my-auto justify-center gap-4">
            <p className="text-2xl md:text-4xl font-regular">VIEW MY WORK</p>
            <button className="flex container rounded-full w-32 h-32 bg-zinc-900 justify-center items-center">
              <svg
                width="50"
                height="50"
                viewBox="0 0 31 118"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.0556 117.029C14.8367 117.81 16.103 117.81 16.8841 117.029L29.612 104.301C30.393 103.52 30.393 102.253 29.612 101.472C28.8309 100.691 27.5646 100.691 26.7836 101.472L15.4698 112.786L4.15614 101.472C3.37509 100.691 2.10876 100.691 1.32771 101.472C0.546661 102.253 0.546661 103.52 1.32771 104.301L14.0556 117.029ZM13.4698 0.855469L13.4698 115.615L17.4698 115.615L17.4698 0.855469L13.4698 0.855469Z"
                  fill="#FCFCFC"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
