import { type NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
import { languages, frameworks, projects } from "../../public/config";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { env } from "../env/client.mjs";

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
  const [formSubmit, setFormSubmit] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setFormSubmit(true);
    emailjs
      .sendForm(
        env.NEXT_PUBLIC_SERVICEID,
        env.NEXT_PUBLIC_TEMPLATEID,
        form.current as HTMLFormElement,
        env.NEXT_PUBLIC_PUBLICKEY
      )
      .then(
        (res) => {
          console.log(res.status);
        },
        (error) => {
          console.error(error);
        }
      );

    form.current?.reset();
  };

  return (
    <section
      className="fullpage min-w-6xl mx-auto max-w-6xl p-4 font-mont"
      id="contact"
    >
      <form
        ref={form}
        className="flex w-full flex-col gap-4"
        onSubmit={handleFormSubmit}
      >
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Name</label>
          <input
            type="text"
            className="rounded-xl bg-[#FF9D9D] p-2 placeholder-[#121212] focus:outline-none"
            placeholder="Enter your name"
            name="name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Email</label>
          <input
            type="text"
            className="rounded-xl bg-[#C89DFF] p-2 placeholder-[#121212] focus:outline-none"
            placeholder="Enter your email"
            name="email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Message</label>
          <textarea
            className="resize-none rounded-xl bg-[#FFCC9D] p-2 placeholder-[#121212] focus:outline-none"
            placeholder="Enter your message"
            rows={5}
            maxLength={1000}
            name="message"
          />
        </div>
        <div className="flex items-center gap-6">
          <button
            type="submit"
            className="w-max rounded-xl bg-[#9FC0FF] px-4 py-2 font-semibold"
          >
            Submit
          </button>
          {formSubmit && (
            <p className="font-semibold">Your message has been sent !</p>
          )}
        </div>
      </form>
    </section>
  );
};

export default Home;
