import React from "react";
import Badge from "@/components/Badge";
import { fetchTopTracks } from "@/lib/getSpotify";

type Props = {};

const Songs = async (props: Props) => {
  const response = await fetchTopTracks();

  return (
    <div className="module flex flex-col gap-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 p-4 h-max w-full md:w-max">
      <div className="flex gap-2 justify-between items-center">
        <h2>
          <strong>favorite songs</strong>
        </h2>
        <Badge text="music" />
      </div>
      <ul>
        {response.map((_, i) => (
          <li key={i}>
            <strong>{_.i}</strong> {_.name} - {_.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Songs;
