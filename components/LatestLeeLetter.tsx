import Link from "next/link";
import React from "react";

type Props = {};

const LatestLeeLetter = (props: Props) => {
  return (
    <div className="rounded-xl w-full bg-neutral-50 dark:bg-neutral-900 p-4 aspect-square">
      <div className="flex flex-col gap-4">
        <h3>
          <Link
            href="https://www.webverry.com/letter"
            target="_blank"
            referrerPolicy="no-referrer"
            className="underline hover:no-underline"
          >
            <strong>what is the lee letter? an introduction {"->"}</strong>
          </Link>
        </h3>
        <div className="flex flex-col gap-2">
          <span>“It&apos;s time to grow up.</span>
          <span>
            It&apos;s time to start that business I&apos;ve been dreaming about.
          </span>
          <span>It&apos;s time to take action.”</span>
          <span>Those were my words four months ago.</span>
          <span>
            Since then, I&apos;ve learned an incredible amount about business,
            web design, sales, and customer relations.
          </span>
          <span>Let me give you some context.</span>
          <span>
            I&apos;ve been running a web design business for 5 months.
          </span>
          <span>
            I&apos;m 19 years old, juggling a computer science & math undergrad,
            entrepreneurship, and content creation.
          </span>
          <span>Most days I&apos;m stressed & tired.</span>
          <span>Working more hours than most would consider healthy.</span>
          <span>
            But every day, I&apos;m grateful for the skills and insights
            I&apos;ve gained on this entrepreneurial journey.
          </span>
          <span>Thankful for the relentless hustle.</span>
          <span>
            Thankful for the mentors that I&apos;ve met along the way.
          </span>
          <span>
            Thankful for the hands-on education that no classroom could offer.
          </span>
          <span>But I&apos;m not perfect.</span>
          <span>
            Sometimes I question my decisions, particularly when I deal with
            obstacles.
          </span>
          <span>
            But then I remember why I started all of this: to deliver unique
            value, to inspire my peers, and to create my own path in life.
          </span>
          <span>I will show up everyday and put in effort.</span>
          <span>
            It&apos;s not going to be easy, but if I&apos;m consistent, I&apos;m
            sure it&apos;ll get me somewhere.
          </span>
          <span>So, why did I pick web design?</span>
          <span>
            I chose to utilize my knowledge as a software engineer in web design
            for businesses.
          </span>
          <span>
            A website is not only essential in today&apos;s digital age,
            it&apos;s the doorman of your brand—your brand&apos;s first
            impression.
          </span>
          <span>You NEED a great website to succeed.</span>
          <span>And if you&apos;re wondering how to start?</span>
          <span>
            I&apos;m giving away my high conversion landing page template &
            more, free of charge.
          </span>
          <span>
            I plan on consistently giving out freebies to my audience. I&apos;m
            here to serve.
          </span>
          <span>So, if you&apos;re interested,</span>
          <span>
            Fill out the form using the link below, and welcome to the Lee
            Letter.
          </span>
          <span>Thank you for your time.</span>
          <span>Thank you for reading my story.</span>
          <Link
            href="https://www.webverry.com/letter"
            target="_blank"
            referrerPolicy="no-referrer"
            className="underline hover:no-underline"
          >
            <span>webverry.com/letter</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestLeeLetter;
