import { PageWrapper } from "../../../components/PageWrapper";
import Image from "next/image";
import Link from "next/link";
import proj from "../data.js";

let current: any;

const page = ({ params }: { params: { slug: string } }) => {
  current = proj[Number(params.slug) - 1];
  return (
    <>
      <PageWrapper>
        <section className="h-[84vh] md:items-center justify-center max-w-6xl mx-auto px-2 md:px-8 flex flex-col md:flex-row gap-5 md:gap-0">
          <div className="h-1/2 w-full md:w-1/2 flex flex-col justify-evenly">
            <h1 className="text-[2rem] md:text-[4rem] font-bold leading-none text-second underline">
              {current.name}
            </h1>
            <div className="flex gap-3 flex-wrap">
              {current.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-2 py-1 text-base text-matcha font-bold bg-second rounded-2xl"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-light">{current.description}</p>
            <div className="flex gap-5">
              <Link
                href={current.preview}
                className="text-[1.5rem] px-8 py-2 bg-second text-matcha font-bold rounded-xl"
              >
                PREVIEW
              </Link>
              <Link
                href={current.github}
                className="text-[1.5rem] px-8 py-2 bg-second text-matcha font-bold rounded-xl"
              >
                VIEW CODE
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-max md:h-1/2 flex items-center">
            <Image
              src={current.image}
              alt={"showcase image"}
              width={1280}
              height={1080}
              priority
            />
          </div>
        </section>
      </PageWrapper>
    </>
  );
};

export default page;
