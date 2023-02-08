import Image from "next/image";
import Link from "next/link";
import { projects } from "../../public/config";

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

export default Works;
