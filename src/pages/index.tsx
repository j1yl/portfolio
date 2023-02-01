import { type NextPage } from "next";
import Head from "next/head";

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
      <main className="flex min-h-screen flex-col items-center justify-center">
        <p>Hello</p>
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
