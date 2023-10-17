"use client";

import React from "react";

type Props = {};

const CookieBanner = (props: Props) => {
  const [accepted, setAccepted] = React.useState<boolean | null>(null);

  return (
    <div
      className={`flex gap-4 w-full items-start md:items-center justify-between rounded-xl bg-neutral-50 dark:bg-neutral-900 p-4 ${
        accepted != null ? "hidden" : "flex"
      }`}
    >
      <span>
        this site uses cookies to enhance your browsing experience & gather
        anonymous usage data.
      </span>
      <div className="flex md:gap-2 md:items-center items-end md:flex-row flex-col">
        <button
          onClick={() => setAccepted(true)}
          className="underline hover:no-underline uppercase"
        >
          Accept
        </button>
        <button
          onClick={() => setAccepted(false)}
          className="underline hover:no-underline uppercase"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
