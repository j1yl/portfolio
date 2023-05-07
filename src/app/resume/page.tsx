import Bubble from "@/components/ui/Bubble";
import { resumes } from "@/server/content";

export default function Resume() {
  return (
    <main className="flex my-16 flex-col items-center justify-between p-4">
      <div className="flex flex-col h-full max-w-4xl gap-8">
        <h1 className="h1">Resume Catalog</h1>
        <div className="flex flex-col gap-4 p">
          {resumes.map((r) => (
            <Bubble key={r.id} text={r.date} url={r.link} newTab={true} />
          ))}
        </div>
      </div>
    </main>
  );
}
