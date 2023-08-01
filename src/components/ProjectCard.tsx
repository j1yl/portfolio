import React from "react";
import Image from "next/image";
import Badge from "./Badge";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
  tags: string[];
};

const ProjectCard = (props: Props) => {
  return (
    <Link
      href={props.url}
      target="_blank"
      referrerPolicy="no-referrer"
      className="md:grid md:grid-cols-3 md:grid-row-3 md:gap-x-4 md:gap-y-2 p-4 flex flex-col gap-2 hover:bg-secondary/10 transition-colors rounded-lg group"
    >
      <Image
        src={props.imageUrl}
        alt={props.title + " image"}
        width={480}
        height={270}
        className="md:col-span-1 md:row-span-3 aspect-video rounded-lg"
      />
      <h3 className="md:col-span-2 text-primary flex gap-1 items-center">
        <span>{props.title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 fill-primary -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all ease-in-out duration-200"
          viewBox="0 0 448 512"
        >
          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </svg>
      </h3>
      <p className="body md:col-span-2 md:col-start-2 leading-6">
        {props.description}
      </p>
      <div className="flex flex-wrap gap-2 md:col-span-2">
        {props.tags.map((t, i) => (
          <Badge text={t} key={i} />
        ))}
      </div>
    </Link>
  );
};

export default ProjectCard;
