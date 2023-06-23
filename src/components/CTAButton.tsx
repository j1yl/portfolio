import Link from "next/link";
import React from "react";

type Props = {
  url: string;
  text: string;
};

const CTAButton = (props: Props) => {
  if (props.url === "") return <span className="disabledbtn">Unavailable</span>;

  return (
    <Link href={props.url} target="_blank" className="btn">
      {props.text}
    </Link>
  );
};

export default CTAButton;
