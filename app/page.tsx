import Panel from "@/components/Panel";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <Panel>
        <div className="flex flex-col gap-2 w-full">
          <h1>
            Joe L. Lee is a designer, developer, and business owner who
            engineers digital experience & interaction.
          </h1>
          <h2>
            Sitemap
            <ul>
              <li>
                <Link href="/"></Link>
              </li>
            </ul>
          </h2>
          <h2></h2>
        </div>
      </Panel>
    </div>
  );
}
