import React from "react";
import Avatar from "./Avatar";
import { content } from "@/server/content";
import Link from "next/link";
import Image from "next/image";

type Props = {
  titles: string[];
};

const Profile = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex gap-4 items-center justify-between">
        <div className="flex gap-4 items-center">
          <Avatar imageUrl={"/pfp.webp"} />
          <p className="font-bold text-primary">Joe Lee</p>
        </div>
        <div className="flex gap-2 items-center">
          {content.socials.map((s, i) => (
            <Link
              key={s.name}
              passHref
              href={s.url}
              target="_blank"
              className="hover:scale-110 transition-all ease-in-out duration-250"
            >
              <Image
                src={s.icon}
                alt={s.icon.replace("/icon/", "")}
                width={24}
                height={24}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap md:gap-4 gap-2 items-center">
        {props.titles.map((t, i) => (
          <span className="body underline text-secondary" key={t + i}>
            {t}
          </span>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Profile;
