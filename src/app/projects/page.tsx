"use client";

import Hyperlink from "@/components/Hyperlink";

export default function Projects() {
  return (
    <section className="flex justify-center items-center">
      <div className="flex flex-col gap-16 justify-center items-center min-h-screen">
        <h1 className="h1">Working on it...</h1>
        <Hyperlink url="/" text="Back to Home" newTab={false} />
      </div>
    </section>
  );
}
