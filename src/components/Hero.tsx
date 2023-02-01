import { Link } from "react-scroll";

const Hero = () => {
  return (
    <>
      <div className="flex w-full items-center justify-between md:max-w-6xl">
        <div className="flex h-max w-full flex-col gap-4">
          <h1 className=" text-5xl font-bold">
            Hello! I&apos;m Joe Lee,
            <br />
            Software Engineer
          </h1>
          <p>
            I am passionate and dedicated to elevating your web experience.
            <br></br>Currently pursuing my undergraduate degree in Computer
            Science @ <span className="underline">CSUF</span>
          </p>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="w-max rounded-2xl bg-[#9FC0FF] p-4 font-semibold"
          >
            Let&apos;s Connect
          </Link>
        </div>
        <div className="hidden w-full flex-col items-center font-itim md:flex">
          <div className="flex h-[200px] w-[200px] flex-col items-center justify-center rounded-full bg-[#FF9D9D] text-3xl md:translate-x-[-50px]">
            <p>
              ALL
              <br />
              ABOUT
              <br />
              ME
              <br />
            </p>
          </div>
          <div className="flex h-[200px] w-[200px] flex-col items-center justify-center rounded-full bg-[#C89DFF] text-3xl md:translate-x-[150px]">
            <p>
              PROJECT
              <br />
              CATALOG
              <br />
            </p>
          </div>
          <div className="flex h-[200px] w-[200px] flex-col items-center justify-center rounded-full bg-[#FFCC9D] text-3xl md:translate-x-[-50px]">
            <p>
              MY
              <br />
              TECH
              <br />
              RESUME
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
