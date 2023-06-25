import React from "react";
import Image from "next/image";
import Badge from "./Badge";
import Hyperlink from "./Hyperlink";

type Props = {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
  tags: string[];
};

const ProjectCard = (props: Props) => {
  return (
    <div className="md:grid md:grid-cols-3 md:grid-row-3 md:gap-x-4 md:gap-y-2 flex flex-col gap-2">
      <Image
        src={props.imageUrl}
        alt={props.title + " image"}
        width={480}
        height={270}
        className="md:col-span-1 md:row-span-3 aspect-video rounded-lg"
      />
      <h3 className="md:col-span-2 text-primary">
        <Hyperlink url={props.url} text={props.title} newTab={true} />
      </h3>
      <p className="body md:col-span-2 md:col-start-2 leading-6">
        {props.description}
      </p>
      <div className="flex flex-wrap gap-2 md:col-span-2">
        {props.tags.map((t, i) => (
          <Badge text={t} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
