import Image from "next/image";
import React from "react";

type Props = {
  imageUrl: string;
};

const Avatar = (props: Props) => {
  return (
    <div className="rounded-full bg-secondary border border-primary">
      <Image
        src={props.imageUrl}
        alt="avatar"
        className="object-cover rounded-full w-full"
        width={32}
        height={32}
      />
    </div>
  );
};

export default Avatar;
