import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { projects } from "../../../public/config";

const Project = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <section className="fullpage p-4 text-primary_dark dark:text-primary_white">
      {projects
        .filter((project) => {
          return project.id === id;
        })
        .map((project) => (
          <div
            className="min-w-6xl mx-auto flex w-full max-w-6xl flex-col gap-2"
            key={project.id}
          >
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <div className="flex flex-wrap gap-2">
              {project.techstack.map((tech, index) => (
                <span key={index}>#{tech}</span>
              ))}
            </div>
            <p>{project.description}</p>
            <div className="flex w-full gap-2">
              <Link
                href={project.githubLink}
                className="w-max rounded-xl bg-primary_dark px-4 py-2 text-primary_white dark:bg-primary_white dark:text-primary_dark"
              >
                Source
              </Link>
              {project.previewLink === "" ? (
                <span className="w-max cursor-not-allowed rounded-xl bg-primary_dark px-4 py-2 text-primary_white dark:bg-primary_white dark:text-primary_dark">
                  Demo Unavailable
                </span>
              ) : (
                <Link
                  href={project.previewLink}
                  className="w-max rounded-xl bg-primary_dark px-4 py-2 text-primary_white dark:bg-primary_white dark:text-primary_dark"
                >
                  Demo
                </Link>
              )}
            </div>
            <div className="mt-8 flex h-full w-full flex-col gap-4">
              <h2 className="font-bold">Images</h2>
              {project.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={index.toString()}
                  width={1280}
                  height={720}
                />
              ))}
            </div>
          </div>
        ))}
    </section>
  );
};

export default Project;
