import { type NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
import { languages, frameworks, projects } from "../../public/config";
import Link from "next/link";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>lefo.dev</title>
        <meta
          name="description"
          content="Personal website for Joe Lee, student at California State University, Fullerton."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center p-4 font-mont">
        <Hero />
      </main>
      <About />
      <Works />
      <Contact />
    </>
  );
};

const About = () => {
  return (
    <section
      className="fullpage w-full p-4 font-mont md:mx-auto md:max-w-6xl"
      id="about"
    >
      <div className="flex w-full flex-col justify-between gap-8 md:flex-row">
        <div className="h-max w-full flex-col">
          <h2 className="mb-4 font-itim text-xl font-bold md:text-3xl">
            A LITTLE ABOUT ME !
          </h2>
          <p>
            I am a Software Engineer located in Los Angeles, CA. I have a
            passion for building intuitive and beautiful web experiences.
            Currently, I&apos;m pursuing my undergraduate degree in Computer
            Science.
            <br />
            <br />
            I&apos;m a fan of R&B music, some of my favorite artists are The
            Weeknd and Brent Faiyaz. I occasionally indulge in cooking tasty
            pasta for my family and friends.
            <br />
            <br />
            Open to conversation regarding web development 24/7.
          </p>
        </div>
        <div className="flex w-full gap-4">
          <div className="w-full">
            <h2 className="mb-4 font-itim text-xl font-bold md:text-3xl">
              LANGUAGES
            </h2>
            {languages.map((language) => (
              <p className="w-max" key={language}>
                {language}
              </p>
            ))}
          </div>
          <div className="w-full">
            <h2 className="mb-4 font-itim text-xl font-bold md:text-3xl">
              FRAMEWORKS
            </h2>
            {frameworks.map((framework) => (
              <p className="w-max" key={framework}>
                {framework}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Works = () => {
  return (
    <section
      className="fullpage mx-auto w-full max-w-6xl p-2 font-mont"
      id="works"
    >
      <div className="flex w-full justify-between">
        <div className="w-full">
          <Image
            src={"/polar.svg"}
            alt={"polarbear"}
            width={500}
            height={500}
          />
        </div>
        <div className="flex w-full flex-col items-end justify-center">
          {projects.map((proj) => (
            <Link
              href={`/works/${proj.id}`}
              className="w-max font-itim text-7xl"
              key={proj.id}
            >
              {proj.title.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="fullpage" id="contact">
      Contact
    </section>
  );
};

export default Home;
