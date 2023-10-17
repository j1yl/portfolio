"use client";

import Link from "next/link";
import Image from "next/image";

import { business, interests, navlinks, projects, socials } from "@/config";

import Books from "@/components/Books";
import CookieBanner from "@/components/CookieBanner";
import Experience from "@/components/Experience";
import LatestLeeLetter from "@/components/LatestLeeLetter";
import MOTD from "@/components/MOTD";
import Songs from "@/components/Songs";
import Wishlist from "@/components/Wishlist";
import Badge from "@/components/Badge";

import { cubicBezier, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  const [scope, animate] = useAnimate<HTMLDivElement>();

  useEffect(() => {
    animate(
      ".module",
      {
        y: [32, 0],
        scale: [0.9, 1],
        opacity: [0, 1],
        filter: ["blur(8px)", "blur(0px)"],
      },
      {
        ease: ["anticipate"],
        delay: stagger(0.1),
        duration: 1,
      }
    );
  });

  useEffect(() => {
    const handleScroll = () => {
      const modules = scope.current.querySelectorAll(".module");

      modules.forEach((module, i) => {
        const rect = module.getBoundingClientRect();

        const top = rect.top;
        const bottom = rect.bottom;

        if (bottom < 128 || top > window.innerHeight) {
          animate(
            module,
            {
              opacity: 0.5,
              filter: "blur(4px)",
            },
            { ease: cubicBezier(0.33, 1, 0.68, 1), duration: 0.3 }
          );
        } else {
          animate(
            module,
            {
              opacity: 1,
              filter: "blur(0px)",
            },
            { ease: cubicBezier(0.33, 1, 0.68, 1), duration: 0.2 }
          );
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <main className="min-h-screen w-full px-4 flex items-center justify-center relative">
        <div className="fixed top-0 left-0 z-0 noise w-full min-h-screen" />
        <div className="md:max-w-6xl md:mx-auto z-20 gap-4 my-16 relative grid md:grid-cols-4 grid-cols-1 w-full">
          <nav
            id="navbar"
            className="p-4 w-full rounded-xl h-max flex flex-col gap-8 bg-neutral-50 dark:bg-neutral-900 md:sticky md:top-16"
          >
            <h1>
              <strong>Joe L. Lee</strong> is a designer, developer, and business
              owner who engineers digital experience & interaction.
            </h1>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold">Sitemap</h2>
              <ul>
                {navlinks.map((_, i) => (
                  <li key={i}>
                    <Link
                      href={_.slug}
                      className="underline hover:no-underline"
                    >
                      {_.name} {"->"}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold">Interests</h2>
              <ul>
                {interests.map((_, i) => (
                  <li key={i}>{_}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold">More of me</h2>
              <ul>
                {socials.map((_, i) => (
                  <li key={i}>
                    <Link
                      target="_blank"
                      referrerPolicy="no-referrer"
                      href={_.link}
                      className="underline hover:no-underline"
                    >
                      {_.platform} {"->"}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <section
            ref={scope}
            className="w-full md:col-span-3 flex gap-4 flex-col"
          >
            <CookieBanner />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2 grid grid-cols-1 gap-4">
                <Experience />
                <Songs />
                <MOTD />
                <Wishlist />
                <Books />
                <LatestLeeLetter />
              </div>
              <div className="grid md:grid-cols-1 w-full h-max gap-4">
                <h2 className="sr-only">projects</h2>
                {business.map((_, i) => (
                  <div
                    key={i}
                    className="module rounded-xl flex flex-col justify-between w-full bg-neutral-50 dark:bg-neutral-900 p-4 gap-4"
                  >
                    <h3>
                      <strong>
                        <Link
                          href={_.url}
                          target="_blank"
                          referrerPolicy="no-referrer"
                          className="underline hover:no-underline"
                        >
                          {_.name} {"->"}
                        </Link>
                      </strong>
                    </h3>
                    <div className="relative">
                      {_.images.map((_, i) => (
                        <Image
                          src={_}
                          key={i}
                          className={`object-cover aspect-[3/2] rounded-xl drop-shadow-xl w-2/3 ${
                            i % 2 === 1
                              ? "translate-x-1/2 -translate-y-1/3 z-0"
                              : "translate-y-1/3 z-10"
                          }`}
                          alt={`photo ${i}`}
                          width={320}
                          height={300}
                        />
                      ))}
                    </div>
                    <div className="flex gap-2 items-center flex-wrap">
                      {_.tags.map((_, i) => (
                        <Badge text={_} key={i} />
                      ))}
                    </div>
                  </div>
                ))}
                {projects.map((_, i) => (
                  <div
                    key={i}
                    className="module rounded-xl flex flex-col justify-between w-full bg-neutral-50 dark:bg-neutral-900 p-4 gap-4"
                  >
                    <h3>
                      <strong>
                        <Link
                          href={_.url}
                          target="_blank"
                          referrerPolicy="no-referrer"
                          className="underline hover:no-underline"
                        >
                          {_.name} {"->"}
                        </Link>
                      </strong>
                    </h3>
                    <div className="relative">
                      {_.images.map((_, i) => (
                        <Image
                          src={_}
                          key={i}
                          className={`object-cover aspect-[3/2] rounded-xl drop-shadow-xl w-2/3 ${
                            i % 2 === 1
                              ? "translate-x-1/2 -translate-y-1/3 z-0"
                              : "translate-y-1/3 z-10"
                          }`}
                          alt={`photo ${i}`}
                          width={320}
                          height={300}
                        />
                      ))}
                    </div>
                    <div className="flex gap-2 items-center flex-wrap">
                      {_.tags.map((_, i) => (
                        <Badge text={_} key={i} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <footer
            id="footer"
            className="rounded-xl w-full md:text-right text-center py-4 md:col-start-2 md:col-span-3"
          >
            © {new Date().getFullYear()} Joe L. Lee. All rights reserved.
          </footer>
        </div>
      </main>
    </>
  );
}
