import Divider from "@/components/Divider";
import { content } from "@/server/content";
import Link from "next/link";
import Image from "next/image";
import Profile from "@/components/Profile";
import CTAButton from "@/components/CTAButton";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = content.projects.find((p) => {
    return p.id === parseInt(params.id);
  });

  return (
    <section className="container">
      <div className="flex flex-col gap-4 w-full">
        <Profile titles={content.titles} />
        <span className="w-full h-[1px] bg-primary mb-8" />
        <div className="md:flex-row flex flex-col gap-2">
          <Link href={"/"} passHref className="underline">
            Back to Home
          </Link>
          <Link href={"/projects"} passHref className="underline">
            Back to Projects
          </Link>
        </div>
        <h1 className="heading">{project?.title}</h1>
        <div className="flex flex-wrap gap-2 w-full">
          {project?.tags.map((t, i) => (
            <span key={i} className="px-2 py-1 border border-primary text-sm">
              {t}
            </span>
          ))}
        </div>
        <Image
          src={project?.image as string}
          width={1280}
          height={720}
          alt={project?.title as string}
        />
        <p className="body">{project?.description}</p>
        <div className="flex gap-2">
          <CTAButton url={project?.demo as string} text="Demo" />
          <CTAButton url={project?.github as string} text="GitHub" />
        </div>
      </div>
      <Divider />
    </section>
  );
}
