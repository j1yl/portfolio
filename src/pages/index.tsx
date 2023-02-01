import { type NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Itim&family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
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
    <section className="fullpage" id="about">
      About
    </section>
  );
};

const Works = () => {
  return (
    <section className="fullpage" id="works">
      Works
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
