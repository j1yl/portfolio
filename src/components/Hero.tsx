const Hero = () => {
  return (
    <>
      <main className="h-screen px-4 md:px-0">
        <section className="flex flex-col md:flex-row max-w-6xl h-2/3 mx-auto py-16 md:py-32 bg-neutral-50">
          <div className="flex flex-col gap-5 md:w-1/2 text-left justify-center">
            <h2 className="text-6xl md:text-8xl font-bold">JOE LEE</h2>
            <p className="text-zinc-500">
              I design and develop websites using cutting edge technology. I am
              pursuing my undergraduate degree in Computer Science at California
              State University, Fullerton. I love trying new technologies and
              implementing them in creative ways.
            </p>
            <button className="text-left text-xl md:text-2xl px-16 py-6 w-max bg-zinc-900 rounded-3xl text-zinc-100">
              LET&apos;S TALK
            </button>
          </div>
          <div className="flex flex-col md:w-1/2 text-right mt-4 justify-end">
            <h2 className="text-zinc-900 text-4xl md:text-6xl font-semibold">
              FRONT-END
            </h2>
            <h2 className="text-zinc-900 text-4xl md:text-6xl font-semibold">
              WEB DEVELOPER
            </h2>
          </div>
        </section>
        <section className="flex max-w-6xl mx-auto flex-col h-1/3 justify-center gap-5 mt-16">
          <p className="text-2xl md:text-4xl font-semibold">
            COMMITED TO CRAFTING MEMORABLE USER EXPERIENCES
          </p>
          <p className="text-zinc-500">
            I take inspiration from anything I can see and give it life on the
            web. Following best practices and optimizing loading times, I assure
            users with a pleasant experience
          </p>
        </section>
      </main>
    </>
  );
};

export default Hero;
