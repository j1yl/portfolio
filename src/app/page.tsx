import CTAButton from "@/components/CTAButton";
import Divider from "@/components/Divider";
import Experience from "@/components/Experience";
import Profile from "@/components/Profile";
import { content } from "@/server/content";

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
              Passionate about code and numbers, I'm a highly motivated Computer
              Science student with a dash of mathematical prowess. Currently
              pursuing a Bachelor's degree in Computer Science with a minor in
              Mathematics at California State University, Fullerton, I'm on a
              mission to bring innovative web solutions to life.
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
    </>
  );
}
