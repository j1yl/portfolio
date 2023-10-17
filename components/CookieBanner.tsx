"use client";

import React, { useEffect, useState } from "react";

import { getLocalStorage, setLocalStorage } from "@/lib/storageHelper";

type Props = {};

const CookieBanner = (props: Props) => {
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(null);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);
  }, [cookieConsent]);

  return (
    <div
      className={`flex gap-4 w-full items-start md:items-center justify-between rounded-xl bg-neutral-50 dark:bg-neutral-900 p-4 ${
        cookieConsent != null ? "hidden" : "flex"
      }`}
    >
      <span>
        this site uses cookies to enhance your browsing experience & gather
        anonymous usage data.
      </span>
      <div className="flex md:gap-2 md:items-center items-end md:flex-row flex-col">
        <button
          onClick={() => setCookieConsent(true)}
          className="underline hover:no-underline uppercase"
        >
          Accept
        </button>
        <button
          onClick={() => setCookieConsent(false)}
          className="underline hover:no-underline uppercase"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
