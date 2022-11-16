export default function Home() {
  return (
    <>
      <main className="mx-auto h-[84vh] max-w-6xl flex flex-col justify-center px-2 md:px-8 text-light">
        <section className="flex flex-col gap-5">
          <div className="flex flex-col">
            <h1 className="text-5xl md:text-[5rem] font-bold leading-none text-second">
              JOE LEE
            </h1>
            <h2 className="text-5xl md:text-[5rem] font-bold leading-none text-second">
              WEB DEVELOPER
            </h2>
          </div>
          <p className="md:w-2/3 w-full text-base">
            I design and develop websites from scratch using the latest
            technology. I am currently pursuing an undergraduate degree in
            Computer Science at{" "}
            <span className="underline">
              California State University, Fullerton.
            </span>
          </p>
          <button className="w-max h-max text-3xl md:text-[3rem] shadow-black shadow-md border-2 border-light rounded-lg px-8 py-3 md:px-16 md:py-6">
            CONTACT ME
          </button>
        </section>
        <section className="mt-16 flex flex-col gap-5">
          <h2 className="text-3xl md:text-[2rem] font-bold text-second">
            FINDING BEAUTY IN SIMPLICITY
          </h2>
          <p className="md:w-2/3 w-full text-base">
            I am committed to crafting the best web experiences. I optimize
            loading times, follow SEO best practices, and develop with precision
            on every project.
          </p>
        </section>
      </main>
    </>
  );
}
