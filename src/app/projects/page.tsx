"use client";

import { content } from "@/server/content";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="container">
      <div className="flex flex-col gap-4 w-full">
        <Link passHref href="/" className="underline">
          Back to Home
        </Link>
        <h1 className="subheading">My Project Catalog</h1>
        <div className="grid md:grid-cols-4 grid-cols-1 w-full">
          {content.projects.map((p, i) => (
            <Link
              className="flex items-center justify-center aspect-square border border-primary hover:bg-primary hover:bg-opacity-10 transition-all ease-in-out duration-250 cursor-pointer"
              passHref
              href={p.url}
              target="_blank"
              key={i}
            >
              <h3 className="font-bold">{p.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
