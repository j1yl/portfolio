import React from "react";
import Image from "next/image";
import Bubble from "./Bubble";
import Badge from "./Badge";

type Props = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  githubLink: string;
  demoLink: string;
  tags: string[];
};

const Card = (props: Props) => {
  const {
    title,
    description,
    image,
    imageAlt,
    imageWidth,
    imageHeight,
    githubLink,
    demoLink,
    tags,
  } = props;

  return (
    <div className="bg-gray-100 p-4 flex flex-col gap-4 rounded-xl shadow-xl">
      <Image
        src={image}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        className="w-full aspect-video object-cover rounded-lg"
      />
      <h2 className="h2">{title}</h2>
      <div className="flex flex-wrap w-full gap-2">
        {tags.map((t, i) => (
          <Badge text={t} key={i} />
        ))}
      </div>
      <p className="p">{description}</p>
      <div className="flex w-full gap-2">
        <Bubble text="View Code" url={githubLink} />
        <Bubble
          text={demoLink !== "" ? "Demo" : "Demo Unavailable"}
          url={demoLink}
        />
      </div>
    </div>
  );
};

export default Card;
