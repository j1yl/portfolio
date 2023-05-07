import Card from "@/components/ui/Card";
import { projects } from "@/server/content";

export default function Projects() {
  return (
    <main className="flex my-16 flex-col items-center justify-between p-4">
      <div className="flex flex-col h-full max-w-4xl gap-8">
        <h1 className="h1">Projects</h1>
        <p className="p">
          Welcome to my project catalog! Here you can find a list of my
          projects.
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 p">
          {projects.map((p) => (
            <Card
              key={p.id}
              title={p.title}
              description={p.description}
              image={p.image}
              imageAlt={p.imageAlt}
              imageWidth={p.imageWidth}
              imageHeight={p.imageHeight}
              githubLink={p.githubLink}
              demoLink={p.demoLink}
              tags={p.tags}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
