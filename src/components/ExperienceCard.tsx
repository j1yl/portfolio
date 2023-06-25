import React from "react";
import Badge from "./Badge";

type Props = {
  title: string;
  company: string;
  date: string;
  description: string;
  tags: string[];
};

const ExperienceCard = (props: Props) => {
  return (
    <div className="md:grid md:grid-cols-3 md:grid-row-3 md:items-center gap-2 flex flex-col">
      <p className="h3 text-secondary md:col-span-1 md:row-span-1">
        {props.date}
      </p>
      <h3 className="flex flex-wrap gap-2 items-center text-primary md:col-span-2 text-sm md:row-span-1">
        <span>{props.title}</span>
        <span>·</span>
        <span>{props.company}</span>
      </h3>
      <p className="md:col-span-2 md:row-span-1 md:col-start-2 body leading-6">
        {props.description}
      </p>
      <div className="flex flex-wrap gap-2 md:col-span-2 md:row-span-1 md:col-start-2">
        {props.tags.map((t, i) => (
          <Badge text={t} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
