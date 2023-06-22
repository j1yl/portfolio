import Link from "next/link";
import React from "react";

type Props = {
  url: string;
  text: string;
};

const CTAButton = (props: Props) => {
  return (
    <Link href={props.url} className="btn">
      {props.text}
    </Link>
  );
};

export default CTAButton;
