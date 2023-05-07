import Bubble from "@/components/ui/Bubble";

export default function Home() {
  return (
    <main className="flex my-32 md:my-64 flex-col items-center justify-between p-4 leading-loose tracking-wide">
      <div className="flex flex-col h-full max-w-4xl gap-8">
        <h1 className="h1">Unlocking the Power of the Web</h1>
        <p className="p">
          Hi there! My name is Joe Lee, a web developer with experience in
          building responsive, user-friendly websites. Whether you&apos;re
          looking for a simple static site or a complex web application, I'm
          here to bring your vision to life.
        </p>
        <p className="hidden md:flex items-center p">
          View my <Bubble text="Projects" url="/projects" />,
          <Bubble text="Resume" url="/resume" />,
          <Bubble text="Contact Me" url="/contact" />, or send me an email at{" "}
          <Bubble text="lefodev@gmail.com" url="mailto:lefodev@gmail.com" />
        </p>
        <div className="md:hidden flex flex-wrap gap-2 p">
          <Bubble text="Projects" url="/projects" />
          <Bubble text="Resume" url="/resume" />
          <Bubble text="Contact" url="/contact" />
          <Bubble text="lefodev@gmail.com" url="mailto:lefodev@gmail.com" />
        </div>
      </div>
    </main>
  );
}
