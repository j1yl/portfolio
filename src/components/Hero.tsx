const Hero = () => {
  return (
    <>
      <main className="max-w-4xl h-screen mx-auto py-4 bg-neutral-50">
        <div className="flex h-2/3 w-2/3 flex-col justify-center">
          <h1 className="text-4xl">
            Hello! I&apos;m Joe Lee, I create websites using the latest
            technology.
          </h1>
          <button className="px-6 py-2 text-lg rounded-full my-4 bg-slate-500 w-max">
            Connect
          </button>
        </div>
      </main>
    </>
  );
};

export default Hero;
