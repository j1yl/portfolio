import CTAButton from "@/components/CTAButton";
import Divider from "@/components/Divider";
import Experience from "@/components/Experience";
import Profile from "@/components/Profile";
import { content } from "@/server/content";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="container">
        <div className="flex flex-col gap-4">
          <Profile titles={content.titles} />
          <span className="w-full h-[1px] bg-primary mb-8" />
          <div className="flex flex-col gap-4 w-full">
            <h1 className="heading">Unlocking the Power of the Web</h1>
            <p className="body">
              Passionate about code and numbers, I&apos;m a highly motivated
              Computer Science student with a dash of mathematical prowess.
              Currently pursuing a Bachelor&apos;s degree in Computer Science
              with a minor in Mathematics at California State University,
              Fullerton, I&apos;m on a mission to bring innovative web solutions
              to life.
            </p>
            <div className="flex gap-4 items-center">
              <CTAButton url="/" text="Contact Me" />
              <CTAButton url="/" text="View Resume" />
            </div>
          </div>
        </div>
      </main>
      <Divider />
      <section className="container">
        <div className="flex flex-col gap-4 w-full">
          <h2 className="subheading">My Journey</h2>
          <Experience />
        </div>
      </section>
      <Divider />
      <section className="container">
        <div className="flex flex-col gap-4 w-full">
          <h2 className="subheading">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {content.projects
              .filter((p) => p.featured)
              .map((p, i) => (
                <Link
                  className="flex items-center justify-center aspect-square border border-primary hover:bg-primary hover:bg-opacity-10 transition-all ease-in-out duration-250 cursor-pointer"
                  href={p.url}
                  passHref
                  target="_blank"
                  key={i}
                >
                  <h3 className="font-bold">{p.title}</h3>
                </Link>
              ))}
            <div className="grid grid-cols-2">
              {content.projects
                .filter((p) => !p.featured)
                .splice(0, 3)
                .map((p, i) => (
                  <Link
                    key={i}
                    passHref
                    href={p.url}
                    target="_blank"
                    className="flex items-center justify-center aspect-square border border-primary hover:bg-primary hover:bg-opacity-10 transition-all ease-in-out duration-250 cursor-pointer"
                  >
                    <h3 className="font-bold">{p.title}</h3>
                  </Link>
                ))}
              <Link
                passHref
                href="/projects"
                className="flex items-center justify-center aspect-square border border-primary hover:bg-primary hover:bg-opacity-10 transition-all ease-in-out duration-250 cursor-pointer"
              >
                <h3 className="font-bold">View Catalog</h3>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Divider />
      <section className="container">
        <div className="flex flex-col gap-4 w-full">
          <h2 className="subheading">Contact Me</h2>
          <p className="body">
            Send me an email at{" "}
            <Link
              className="underline"
              href="mailto:webverry@gmail.com"
              target="_blank"
            >
              webverry@gmail.com
            </Link>
            . Let&apos;s connect and make something great!
          </p>
        </div>
      </section>
      <Divider />
    </>
  );
}
